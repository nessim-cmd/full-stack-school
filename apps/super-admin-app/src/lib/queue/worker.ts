import { Worker, Job } from "bullmq";
import { redisConnection } from "./connection";
import { EventNotificationJobData, MessageNotificationJobData } from "./notificationQueue";
import prisma from "../prisma";
import { createNotification } from "../notification-actions";
import { sendEventNotification, sendMessageNotification } from "../mail";

// Batch size for processing users
const BATCH_SIZE = 100;

// Process event notification job
async function processEventNotification(job: Job<EventNotificationJobData>) {
    const { eventTitle, eventDescription, startTime, endTime, classId } =
        job.data;

    console.log(
        `🔄 [Worker] Processing notification job ${job.id} for event: ${eventTitle}`
    );

    try {
        let usersToNotify: Array<{
            id: string;
            role: string;
            name: string;
            surname: string;
            email: string | null;
        }> = [];

        // Fetch users based on class
        if (classId) {
            console.log(`[Worker] Fetching users for class: ${classId}`);

            const classData = await prisma.class.findUnique({
                where: { id: classId },
                select: {
                    name: true,
                    students: {
                        select: {
                            id: true,
                            name: true,
                            surname: true,
                            email: true,
                            parent: {
                                select: {
                                    id: true,
                                    name: true,
                                    surname: true,
                                    email: true,
                                },
                            },
                        },
                    },
                    lessons: {
                        select: {
                            teacher: {
                                select: {
                                    id: true,
                                    name: true,
                                    surname: true,
                                    email: true,
                                },
                            },
                        },
                    },
                },
            });

            if (classData) {
                // Add students
                const students = classData.students.map((student) => ({
                    id: student.id,
                    role: "student",
                    name: student.name,
                    surname: student.surname,
                    email: student.email,
                }));

                // Add parents (remove duplicates)
                const parents = classData.students
                    .map((student) => student.parent)
                    .filter(
                        (parent, index, self) =>
                            index === self.findIndex((p) => p.id === parent.id)
                    )
                    .map((parent) => ({
                        id: parent.id,
                        role: "parent",
                        name: parent.name,
                        surname: parent.surname,
                        email: parent.email,
                    }));

                // Add teachers (remove duplicates)
                const teachers = classData.lessons
                    .map((lesson) => lesson.teacher)
                    .filter(
                        (teacher, index, self) =>
                            index === self.findIndex((t) => t.id === teacher.id)
                    )
                    .map((teacher) => ({
                        id: teacher.id,
                        role: "teacher",
                        name: teacher.name,
                        surname: teacher.surname,
                        email: teacher.email,
                    }));

                usersToNotify = [...students, ...parents, ...teachers];
            }
        } else {
            // Event for all classes
            console.log("[Worker] Fetching all users (event for all classes)");

            const [teachers, students, parents] = await Promise.all([
                prisma.teacher.findMany({
                    select: { id: true, name: true, surname: true, email: true },
                }),
                prisma.student.findMany({
                    select: { id: true, name: true, surname: true, email: true },
                }),
                prisma.parent.findMany({
                    select: { id: true, name: true, surname: true, email: true },
                }),
            ]);

            usersToNotify = [
                ...teachers.map((t) => ({ ...t, role: "teacher" })),
                ...students.map((s) => ({ ...s, role: "student" })),
                ...parents.map((p) => ({ ...p, role: "parent" })),
            ];
        }

        console.log(`[Worker] Found ${usersToNotify.length} users to notify`);

        // Get class name for notification message
        const className = classId
            ? (
                await prisma.class.findUnique({
                    where: { id: classId },
                    select: { name: true },
                })
            )?.name
            : null;

        const classInfo = className ? ` for ${className}` : "";
        const notificationMessage = `${eventDescription}\nDate: ${new Date(
            startTime
        ).toLocaleDateString()}\nTime: ${new Date(
            startTime
        ).toLocaleTimeString()} - ${new Date(endTime).toLocaleTimeString()}`;

        // Process users in batches to avoid overwhelming the system
        const totalBatches = Math.ceil(usersToNotify.length / BATCH_SIZE);
        let processedCount = 0;

        for (let i = 0; i < usersToNotify.length; i += BATCH_SIZE) {
            const batch = usersToNotify.slice(i, i + BATCH_SIZE);
            const batchNumber = Math.floor(i / BATCH_SIZE) + 1;

            console.log(
                `[Worker] Processing batch ${batchNumber}/${totalBatches} (${batch.length} users)`
            );

            // Update job progress
            await job.updateProgress((processedCount / usersToNotify.length) * 100);

            // Process batch in parallel
            await Promise.all(
                batch.map(async (user) => {
                    try {
                        // Create in-app notification
                        await createNotification(
                            user.id,
                            user.role,
                            `📅 New Event${classInfo}: ${eventTitle}`,
                            notificationMessage,
                            "event"
                        );

                        // Send email if user has email
                        if (user.email) {
                            await sendEventNotification(
                                user.email,
                                `${user.name} ${user.surname}`,
                                eventTitle,
                                eventDescription,
                                new Date(startTime),
                                new Date(endTime),
                                className || undefined
                            );
                        }

                        processedCount++;
                    } catch (error) {
                        console.error(
                            `[Worker] Error notifying user ${user.id}:`,
                            error
                        );
                        // Continue with other users even if one fails
                    }
                })
            );

            // Small delay between batches to avoid rate limiting
            if (i + BATCH_SIZE < usersToNotify.length) {
                await new Promise((resolve) => setTimeout(resolve, 100));
            }
        }

        console.log(
            `✅ [Worker] Successfully processed ${processedCount}/${usersToNotify.length} notifications for job ${job.id}`
        );

        return {
            success: true,
            notifiedCount: processedCount,
            totalUsers: usersToNotify.length,
        };
    } catch (error) {
        console.error(`❌ [Worker] Error processing job ${job.id}:`, error);
        throw error; // This will trigger retry
    }
}

// Process message notification job
async function processMessageNotification(job: Job<MessageNotificationJobData>) {
    const { messageId, subject, senderName, recipients } = job.data;
    console.log(`🔄 [Worker] Processing message notification job ${job.id}`);

    try {
        await Promise.all(recipients.map(async (recipient) => {
            try {
                let email: string | null | undefined = null;
                if (recipient.role === "student") {
                    const s = await prisma.student.findUnique({ where: { id: recipient.id }, select: { email: true } });
                    email = s?.email;
                } else if (recipient.role === "teacher") {
                    const t = await prisma.teacher.findUnique({ where: { id: recipient.id }, select: { email: true } });
                    email = t?.email;
                } else if (recipient.role === "parent") {
                    const p = await prisma.parent.findUnique({ where: { id: recipient.id }, select: { email: true } });
                    email = p?.email;
                }

                // Create in-app notification
                await createNotification(
                    recipient.id,
                    recipient.role,
                    `New Message from ${senderName}`,
                    `Subject: ${subject}`,
                    "message"
                );

                // Send email
                if (email) {
                    await sendMessageNotification(email, recipient.name, senderName, subject);
                }
            } catch (err) {
                console.error(`Error notifying recipient ${recipient.id}:`, err);
            }
        }));

        return { success: true };
    } catch (error) {
        console.error(`❌ [Worker] Error processing message job ${job.id}:`, error);
        throw error;
    }
}

// Create the workers
export const notificationWorker = new Worker<EventNotificationJobData>(
    "event-notifications",
    processEventNotification,
    {
        connection: redisConnection,
        concurrency: 5,
        limiter: {
            max: 10,
            duration: 1000,
        },
    }
);

export const messageNotificationWorker = new Worker<MessageNotificationJobData>(
    "message-notifications",
    processMessageNotification,
    {
        connection: redisConnection,
        concurrency: 5,
    }
);

// Worker event handlers
notificationWorker.on("completed", (job) => {
    console.log(`✅ [Worker] Event Job ${job.id} completed successfully`);
});

notificationWorker.on("failed", (job, err) => {
    console.error(`❌ [Worker] Event Job ${job?.id} failed:`, err.message);
});

notificationWorker.on("error", (err) => {
    console.error("❌ [Worker] Event Worker error:", err);
});

messageNotificationWorker.on("completed", (job) => {
    console.log(`✅ [Worker] Message Job ${job.id} completed successfully`);
});

messageNotificationWorker.on("failed", (job, err) => {
    console.error(`❌ [Worker] Message Job ${job?.id} failed:`, err.message);
});

messageNotificationWorker.on("error", (err) => {
    console.error("❌ [Worker] Message Worker error:", err);
});

console.log("✅ [Worker] Notification workers started");

export default notificationWorker;
