import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { verifyToken } from "@/lib/auth";

export async function GET(req: NextRequest) {
    try {
        const token = req.cookies.get("auth")?.value;
        if (!token) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

        const payload = await verifyToken(token);
        if (!payload || (payload as any).role !== "super-admin") {
            return NextResponse.json({ error: "Forbidden" }, { status: 403 });
        }

        const { searchParams } = new URL(req.url);
        const status = searchParams.get("status");
        const priority = searchParams.get("priority");
        const search = searchParams.get("search");

        const where: any = {};

        // Filter by status
        if (status && status !== "ALL") {
            where.status = status;
        }

        // Filter by priority
        if (priority && priority !== "ALL") {
            where.priority = priority;
        }

        // Search filter
        if (search) {
            where.OR = [
                { subject: { contains: search, mode: "insensitive" } },
                { message: { contains: search, mode: "insensitive" } },
                { school: { name: { contains: search, mode: "insensitive" } } },
            ];
        }

        const page = parseInt(searchParams.get("page") || "1");
        const limit = parseInt(searchParams.get("limit") || "10");
        const skip = (page - 1) * limit;

        const [tickets, totalFiltered, total, open, inProgress, closed, urgent, responseTimeData] = await Promise.all([
            prisma.supportTicket.findMany({
                where,
                include: {
                    school: {
                        select: {
                            name: true,
                            slug: true,
                        },
                    },
                    _count: {
                        select: { replies: true },
                    },
                },
                orderBy: [
                    { priority: "desc" },
                    { status: "asc" },
                    { updatedAt: "desc" },
                ],
                skip,
                take: limit,
            }),
            prisma.supportTicket.count({ where }),
            prisma.supportTicket.count(),
            prisma.supportTicket.count({ where: { status: "OPEN" } }),
            prisma.supportTicket.count({ where: { status: "IN_PROGRESS" } }),
            prisma.supportTicket.count({ where: { status: "CLOSED" } }),
            prisma.supportTicket.count({ where: { priority: "URGENT" } }),
            prisma.supportTicket.findMany({
                where: {
                    replies: {
                        some: {
                            isAdmin: true
                        }
                    }
                },
                select: {
                    createdAt: true,
                    replies: {
                        where: { isAdmin: true },
                        orderBy: { createdAt: "asc" },
                        take: 1,
                        select: { createdAt: true }
                    }
                },
                take: 50,
                orderBy: { createdAt: "desc" }
            })
        ]);

        // Calculate Average Response Time
        let avgResponseTime = "N/A";
        if (responseTimeData.length > 0) {
            const totalResponseTime = responseTimeData.reduce((acc, ticket) => {
                if (ticket.replies.length > 0) {
                    const diff = new Date(ticket.replies[0].createdAt).getTime() - new Date(ticket.createdAt).getTime();
                    return acc + diff;
                }
                return acc;
            }, 0);

            const avgMs = totalResponseTime / responseTimeData.length;
            const hours = Math.floor(avgMs / (1000 * 60 * 60));
            const minutes = Math.floor((avgMs % (1000 * 60 * 60)) / (1000 * 60));

            if (hours > 0) {
                avgResponseTime = `${hours}h ${minutes}m`;
            } else {
                avgResponseTime = `${minutes}m`;
            }
        }

        return NextResponse.json({
            tickets,
            pagination: {
                page,
                limit,
                total: totalFiltered,
                totalPages: Math.ceil(totalFiltered / limit),
            },
            stats: {
                total,
                open,
                inProgress,
                closed,
                urgent,
                avgResponseTime
            }
        });
    } catch (error) {
        console.error("Support API error:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}
