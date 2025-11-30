import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { verifyToken } from "@/lib/auth";

export async function POST(req: NextRequest) {
    try {
        const token = req.cookies.get("auth")?.value;
        if (!token) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

        const payload = await verifyToken(token);
        if (!payload || (payload as any).role !== "super-admin") {
            return NextResponse.json({ error: "Forbidden" }, { status: 403 });
        }

        const body = await req.json();
        const { ticketIds, action, value } = body;

        if (!ticketIds || !Array.isArray(ticketIds) || ticketIds.length === 0) {
            return NextResponse.json({ error: "Invalid ticket IDs" }, { status: 400 });
        }

        if (action === "UPDATE_STATUS") {
            await prisma.supportTicket.updateMany({
                where: { id: { in: ticketIds } },
                data: { status: value },
            });
        } else if (action === "UPDATE_PRIORITY") {
            await prisma.supportTicket.updateMany({
                where: { id: { in: ticketIds } },
                data: { priority: value },
            });
        } else if (action === "DELETE") {
            await prisma.supportTicket.deleteMany({
                where: { id: { in: ticketIds } },
            });
        } else {
            return NextResponse.json({ error: "Invalid action" }, { status: 400 });
        }

        // Log action
        await prisma.auditLog.create({
            data: {
                action: "bulk_update",
                entity: "support_ticket",
                entityId: "bulk",
                description: `Bulk ${action} on ${ticketIds.length} tickets`,
                superAdminId: (payload as any).userId,
            },
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Bulk action API error:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}
