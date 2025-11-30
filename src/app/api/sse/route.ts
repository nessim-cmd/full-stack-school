import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "@/lib/auth";
import { redis } from "@/lib/redis";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
    const token = req.cookies.get("auth")?.value;
    if (!token) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const payload = await verifyToken(token);
    if (!payload) {
        return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    const userId = (payload as any).userId;
    const role = (payload as any).role;

    const stream = new ReadableStream({
        async start(controller) {
            const encoder = new TextEncoder();

            // Subscribe to user-specific channel and role-based channels
            // We need a dedicated subscriber client for this connection because 
            // a client in subscriber mode cannot issue other commands.
            // However, creating a new Redis connection for every SSE request is resource intensive.
            // For this demo, we'll duplicate the client.
            const subscriber = redis.duplicate();

            await subscriber.subscribe(`notifications:${userId}`, `notifications:${role}`);

            subscriber.on("message", (channel, message) => {
                const data = `data: ${message}\n\n`;
                controller.enqueue(encoder.encode(data));
            });

            // Keep connection alive with a heartbeat
            const interval = setInterval(() => {
                controller.enqueue(encoder.encode(": heartbeat\n\n"));
            }, 15000);

            // Cleanup on close
            req.signal.addEventListener("abort", () => {
                clearInterval(interval);
                subscriber.quit();
            });
        },
    });

    return new NextResponse(stream, {
        headers: {
            "Content-Type": "text/event-stream",
            "Cache-Control": "no-cache",
            "Connection": "keep-alive",
        },
    });
}
