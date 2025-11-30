import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { verifyToken } from "@/lib/auth";

export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    try {
        const { id } = await params;
        const token = req.cookies.get("auth")?.value;
        if (!token) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

        const payload = await verifyToken(token);
        if (!payload || (payload as any).role !== "super-admin") {
            return NextResponse.json({ error: "Forbidden" }, { status: 403 });
        }

        const ticket = await prisma.supportTicket.findUnique({
            where: { id },
            include: {
                school: {
                    select: {
                        name: true,
                        slug: true,
                    },
                },
                replies: {
                    orderBy: { createdAt: "asc" },
                },
            },
        });

        if (!ticket) return NextResponse.json({ error: "Ticket not found" }, { status: 404 });

        return NextResponse.json({ ticket });
    } catch (error) {
        console.error("Ticket details API error:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}

export async function POST(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    try {
        const { id } = await params;
        const token = req.cookies.get("auth")?.value;
        if (!token) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

        const payload = await verifyToken(token);
        if (!payload || (payload as any).role !== "super-admin") {
            return NextResponse.json({ error: "Forbidden" }, { status: 403 });
        }

        const body = await req.json();
        const { message, status } = body;
        let reply = null;

        // Create reply if message is provided
        if (message) {
            reply = await prisma.supportTicketReply.create({
                data: {
                    ticketId: id,
                    message,
                    isAdmin: true,
                },
            });

            // Log reply action
            await prisma.auditLog.create({
                data: {
                    action: "ticket_replied",
                    entity: "support_ticket",
                    entityId: id,
                    description: "Replied to support ticket",
                    superAdminId: (payload as any).userId,
                },
            });
        }

        // Update ticket status if provided
        if (status) {
            await prisma.supportTicket.update({
                where: { id },
                data: { status },
            });

            // Log status change action
            await prisma.auditLog.create({
                data: {
                    action: "ticket_status_updated",
                    entity: "support_ticket",
                    entityId: id,
                    description: `Updated ticket status to ${status}`,
                    superAdminId: (payload as any).userId,
                },
            });
        }

        // Notify School Admins if there was a reply
        if (message) {
            // We need to find the admins of the school that owns this ticket
            const ticket = await prisma.supportTicket.findUnique({
                where: { id },
                select: { schoolId: true, subject: true }
            });

            if (ticket) {
                const schoolAdmins = await prisma.admin.findMany({
                    where: { schoolId: ticket.schoolId },
                    select: { id: true }
                });

                const { createNotification } = await import("@/lib/notification-actions");

                for (const admin of schoolAdmins) {
                    await createNotification(
                        admin.id,
                        "admin",
                        "Support Ticket Update",
                        `Super Admin replied to ticket: ${ticket.subject}`,
                        "ticket_reply",
                        ticket.schoolId
                    );
                }
            }
        }

        return NextResponse.json({ reply, success: true });
    } catch (error) {
        console.error("Ticket reply API error:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}
