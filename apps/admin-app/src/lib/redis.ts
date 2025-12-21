import Redis from "ioredis";

const globalForRedis = global as unknown as { redis: Redis | null };

// Lazy-load Redis connection to avoid build-time errors
let redisInstance: Redis | null = null;

export const getRedis = () => {
    if (!process.env.REDIS_URL) {
        console.warn("Redis URL not configured, skipping Redis connection");
        return null;
    }
    
    if (!redisInstance) {
        redisInstance = globalForRedis.redis || new Redis(process.env.REDIS_URL, {
            lazyConnect: true,
            maxRetriesPerRequest: 3,
        });
        if (process.env.NODE_ENV !== "production") {
            globalForRedis.redis = redisInstance;
        }
    }
    return redisInstance;
};

// For backward compatibility
export const redis = getRedis();
