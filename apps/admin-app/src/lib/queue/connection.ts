// src/lib/queue/connection.ts
import { Queue, Worker, QueueEvents } from "bullmq";
import Redis from "ioredis";

let redisConnectionInstance: Redis | null = null;

// Lazy-load Redis connection
export const getRedisConnection = () => {
    if (!process.env.REDIS_HOST && !process.env.REDIS_URL) {
        console.warn("Redis not configured, queue system disabled");
        return null;
    }

    if (!redisConnectionInstance) {
        redisConnectionInstance = new Redis({
            host: process.env.REDIS_HOST || "localhost",
            port: parseInt(process.env.REDIS_PORT || "6379"),
            maxRetriesPerRequest: null,
            lazyConnect: true,
            enableOfflineQueue: false,
        });

        // Test connection
        redisConnectionInstance.on("connect", () => {
            console.log("✅ [Redis] Connected successfully");
        });

        redisConnectionInstance.on("error", (err) => {
            console.error("❌ [Redis] Connection error:", err);
        });
    }

    return redisConnectionInstance;
};

// For backward compatibility
export const redisConnection = getRedisConnection();
