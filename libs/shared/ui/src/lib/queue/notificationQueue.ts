// src/lib/queue/notificationQueue.ts
import { Queue } from "bullmq";
import { redisConnection } from "./connection";

export interface EventNotificationJobData {
    eventTitle: string;
    eventDescription: string;
    startTime: Date;
    endTime: Date;
    classId: number | null;
}

// Create the notification queue
export const notificationQueue = new Queue<EventNotificationJobData>(
    "event-notifications",
    {
        connection: redisConnection,
        defaultJobOptions: {
            attempts: 3, // Retry up to 3 times if job fails
            backoff: {
                type: "exponential", // Wait longer between each retry
                delay: 5000, // Start with 5 seconds
            },
            removeOnComplete: {
                age: 24 * 3600, // Keep completed jobs for 24 hours
                count: 1000, // Keep last 1000 completed jobs
            },
            removeOnFail: {
                age: 7 * 24 * 3600, // Keep failed jobs for 7 days
            },
        },
    }
);

console.log("✅ [Queue] Event notification queue initialized");

// Message Notification Job Data
export interface MessageNotificationJobData {
    messageId: number;
    subject: string;
    senderName: string;
    recipients: {
        id: string;
        role: string;
        name: string;
    }[];
}

// Create the message notification queue
export const messageNotificationQueue = new Queue<MessageNotificationJobData>(
    "message-notifications",
    {
        connection: redisConnection,
        defaultJobOptions: {
            attempts: 3,
            backoff: {
                type: "exponential",
                delay: 5000,
            },
            removeOnComplete: {
                age: 24 * 3600,
                count: 1000,
            },
            removeOnFail: {
                age: 7 * 24 * 3600,
            },
        },
    }
);

console.log("✅ [Queue] Message notification queue initialized");

// Add a job to the queue
export async function addEventNotificationJob(data: EventNotificationJobData) {
    try {
        const job = await notificationQueue.add("send-event-notifications", data, {
            priority: 1, // High priority for event notifications
        });

        console.log(
            `✅ [Queue] Added notification job ${job.id} for event: ${data.eventTitle}`
        );
        return { success: true, jobId: job.id };
    } catch (error) {
        console.error("❌ [Queue] Failed to add notification job:", error);
        return { success: false, error };
    }
}

export async function addMessageNotificationJob(data: MessageNotificationJobData) {
    try {
        const job = await messageNotificationQueue.add("send-message-notifications", data, {
            priority: 1,
        });

        console.log(
            `✅ [Queue] Added notification job ${job.id} for message: ${data.subject}`
        );
        return { success: true, jobId: job.id };
    } catch (error) {
        console.error("❌ [Queue] Failed to add message notification job:", error);
        return { success: false, error };
    }
}
