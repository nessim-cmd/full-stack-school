import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { verifyToken } from "@/lib/auth";

export async function GET(
    req: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;
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

        // Get user's school
        let schoolId: string | null = null;

        if (role === "admin") {
            const admin = await prisma.admin.findUnique({
                where: { id: userId },
                select: { schoolId: true },
            });
            schoolId = admin?.schoolId || null;
        }

        if (!schoolId) {
            return NextResponse.json({ error: "School not found" }, { status: 404 });
        }

        // Fetch ticket (ensure it belongs to this school)
        const ticket = await prisma.supportTicket.findFirst({
            where: {
                id,
                schoolId,
            },
            include: {
                replies: {
                    orderBy: { createdAt: "asc" },
                },
            },
        });

        if (!ticket) {
            return NextResponse.json({ error: "Ticket not found" }, { status: 404 });
        }

        return NextResponse.json({ ticket });
    } catch (error) {
        console.error("Ticket details fetch error:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}

export async function POST(
    req: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;
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

        // Get user's school
        let schoolId: string | null = null;

        if (role === "admin") {
            const admin = await prisma.admin.findUnique({
                where: { id: userId },
                select: { schoolId: true },
            });
            schoolId = admin?.schoolId || null;
        }

        if (!schoolId) {
            return NextResponse.json({ error: "School not found" }, { status: 404 });
        }

        // Verify ticket belongs to this school
        const ticket = await prisma.supportTicket.findFirst({
            where: { id, schoolId },
        });

        if (!ticket) {
            return NextResponse.json({ error: "Ticket not found" }, { status: 404 });
        }

        const body = await req.json();
        const { message } = body;

        // Create reply from school admin
        const reply = await prisma.supportTicketReply.create({
            data: {
                ticketId: id,
                message,
                isAdmin: false, // This is from school admin, not super admin
            },
        });

        // Update ticket's updatedAt timestamp
        await prisma.supportTicket.update({
            where: { id },
            data: { updatedAt: new Date() },
        });

        return NextResponse.json({ reply });
    } catch (error) {
        console.error("Ticket reply error:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
