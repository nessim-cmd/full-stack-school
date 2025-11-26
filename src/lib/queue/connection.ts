// src/lib/queue/connection.ts
import { Queue, Worker, QueueEvents } from "bullmq";
import Redis from "ioredis";

// Redis connection configuration
const redisConnection = new Redis({
    host: process.env.REDIS_HOST || "localhost",
    port: parseInt(process.env.REDIS_PORT || "6379"),
    maxRetriesPerRequest: null,
});

// Test connection
redisConnection.on("connect", () => {
    console.log("✅ [Redis] Connected successfully");
});

redisConnection.on("error", (err) => {
    console.error("❌ [Redis] Connection error:", err);
});

export { redisConnection };
