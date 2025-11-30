import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { verifyToken } from "@/lib/auth";

export async function GET(req: NextRequest) {
    try {
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

        // Fetch tickets for this school
        const tickets = await prisma.supportTicket.findMany({
            where: { schoolId },
            include: {
                _count: {
                    select: { replies: true },
                },
            },
            orderBy: { updatedAt: "desc" },
        });

        return NextResponse.json({ tickets });
    } catch (error) {
        console.error("Support tickets fetch error:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}

export async function POST(req: NextRequest) {
    try {
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

        const body = await req.json();
        const { subject, message, priority } = body;

        console.log("Creating ticket:", { schoolId, subject, priority, role });

        if (!subject || !message) {
            return NextResponse.json(
                { error: "Subject and message are required" },
                { status: 400 }
            );
        }

        // Create ticket
        const ticket = await prisma.supportTicket.create({
            data: {
                schoolId,
                subject,
                message,
                priority: priority || "MEDIUM",
                status: "OPEN",
            },
        });

        console.log("Ticket created successfully:", ticket.id);

        return NextResponse.json({ ticket });
    } catch (error) {
        console.error("Create ticket error:", error);
        console.error("Error details:", JSON.stringify(error, null, 2));
        return NextResponse.json(
            { error: "Internal server error", details: error instanceof Error ? error.message : "Unknown error" },
            { status: 500 }
        );
    }
}
