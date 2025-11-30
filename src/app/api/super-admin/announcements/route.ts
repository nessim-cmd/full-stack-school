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

        const announcements = await prisma.globalAnnouncement.findMany({
            orderBy: { createdAt: "desc" },
        });

        return NextResponse.json({ announcements });
    } catch (error) {
        console.error("Announcements API error:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}

export async function POST(req: NextRequest) {
    try {
        const token = req.cookies.get("auth")?.value;
        if (!token) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

        const payload = await verifyToken(token);
        if (!payload || (payload as any).role !== "super-admin") {
            return NextResponse.json({ error: "Forbidden" }, { status: 403 });
        }

        const body = await req.json();
        const { title, message, type } = body;

        const announcement = await prisma.globalAnnouncement.create({
            data: {
                title,
                message,
                type,
            },
        });

        // Log action
        await prisma.auditLog.create({
            data: {
                action: "announcement_created",
                entity: "announcement",
                entityId: announcement.id,
                description: `Created announcement: ${title}`,
                superAdminId: (payload as any).userId,
            },
        });

        return NextResponse.json({ announcement });
    } catch (error) {
        console.error("Create announcement error:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}

export async function DELETE(req: NextRequest) {
    try {
        const token = req.cookies.get("auth")?.value;
        if (!token) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

        const payload = await verifyToken(token);
        if (!payload || (payload as any).role !== "super-admin") {
            return NextResponse.json({ error: "Forbidden" }, { status: 403 });
        }

        const { searchParams } = new URL(req.url);
        const id = searchParams.get("id");

        if (!id) return NextResponse.json({ error: "Missing ID" }, { status: 400 });

        await prisma.globalAnnouncement.delete({
            where: { id },
        });

        // Log action
        await prisma.auditLog.create({
            data: {
                action: "announcement_deleted",
                entity: "announcement",
                entityId: id,
                description: "Deleted announcement",
                superAdminId: (payload as any).userId,
            },
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Delete announcement error:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}
