"use server";

import prisma from "./prisma";
import { revalidatePath } from "next/cache";

export async function createNotification(
    userId: string,
    userRole: string,
    title: string,
    message: string,
    type: "password_change" | "absence" | "event" | "general" | "message"
) {
    try {
        console.log("[Notification] Creating notification:", {
            userId,
            userRole,
            title,
            type,
        });

        const notification = await prisma.notification.create({
            data: {
                userId,
                userRole,
                title,
                message,
                type,
                read: false,
            },
        });

        console.log("[Notification] Created successfully:", notification.id);

        revalidatePath("/");
        return { success: true };
    } catch (error) {
        console.error("[Notification] Error creating notification:", error);
        return { success: false, error };
    }
}

export async function getUnreadNotifications(userId: string, userRole: string) {
    try {
        const notifications = await prisma.notification.findMany({
            where: {
                userId,
                userRole,
                read: false,
            },
            orderBy: {
                createdAt: "desc",
            },
        });

        return notifications;
    } catch (error) {
        console.error("Error fetching notifications:", error);
        return [];
    }
}

export async function getAllNotifications(userId: string, userRole: string) {
    try {
        const notifications = await prisma.notification.findMany({
            where: {
                userId,
                userRole,
            },
            orderBy: {
                createdAt: "desc",
            },
        });

        return notifications;
    } catch (error) {
        console.error("Error fetching notifications:", error);
        return [];
    }
}

export async function markNotificationAsRead(notificationId: number) {
    try {
        await prisma.notification.update({
            where: { id: notificationId },
            data: { read: true },
        });

        revalidatePath("/");
        return { success: true };
    } catch (error) {
        console.error("Error marking notification as read:", error);
        return { success: false, error };
    }
}

export async function markAllNotificationsAsRead(userId: string, userRole: string) {
    try {
        await prisma.notification.updateMany({
            where: {
                userId,
                userRole,
                read: false,
            },
            data: {
                read: true,
            },
        });

        revalidatePath("/");
        return { success: true };
    } catch (error) {
        return { success: false, error };
    }
}

export async function notifyEventCreation(
    eventTitle: string,
    eventDescription: string,
    startTime: Date,
    endTime: Date,
    classId: number | null
) {
    try {
        console.log("[Event Notification] Starting notification process for event:", eventTitle);

        let usersToNotify: Array<{
            id: string;
            role: string;
            name: string;
            surname: string;
            email: string | null;
        }> = [];

        if (classId) {
            // Event for specific class - notify students, their parents, and teachers of that class
            console.log("[Event Notification] Fetching users for class:", classId);

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

                // Add parents
                const parents = classData.students
                    .map((student) => student.parent)
                    .filter((parent, index, self) =>
                        // Remove duplicates (siblings in same class)
                        index === self.findIndex((p) => p.id === parent.id)
                    )
                    .map((parent) => ({
                        id: parent.id,
                        role: "parent",
                        name: parent.name,
                        surname: parent.surname,
                        email: parent.email,
                    }));

                // Add teachers
                const teachers = classData.lessons
                    .map((lesson) => lesson.teacher)
                    .filter((teacher, index, self) =>
                        // Remove duplicates
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
                console.log(`[Event Notification] Found ${usersToNotify.length} users for class ${classData.name}`);
            }
        } else {
            // Event for all classes - notify all teachers, students, and parents
            console.log("[Event Notification] Fetching all users (event for all classes)");

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

            console.log(`[Event Notification] Found ${usersToNotify.length} total users`);
        }

        // Get class name for notification message
        const className = classId
            ? (await prisma.class.findUnique({ where: { id: classId }, select: { name: true } }))?.name
            : null;

        const classInfo = className ? ` for ${className}` : "";
        const notificationMessage = `${eventDescription}\nDate: ${startTime.toLocaleDateString()}\nTime: ${startTime.toLocaleTimeString()} - ${endTime.toLocaleTimeString()}`;

        // Create in-app notifications and send emails
        const notificationPromises = usersToNotify.map(async (user) => {
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
                const { sendEventNotification } = await import("./mail");
                await sendEventNotification(
                    user.email,
                    `${user.name} ${user.surname}`,
                    eventTitle,
                    eventDescription,
                    startTime,
                    endTime,
                    className || undefined
                );
            }
        });

        await Promise.all(notificationPromises);

        console.log(`[Event Notification] Successfully notified ${usersToNotify.length} users`);
        return { success: true, notifiedCount: usersToNotify.length };
    } catch (error) {
        console.error("[Event Notification] Error notifying users:", error);
        return { success: false, error };
    }
}
