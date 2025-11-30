import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getSessionUser, getSchoolId } from "@/lib/authUser";

export async function POST(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        const session = await getSessionUser();
        const schoolId = await getSchoolId();
        if (!session) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const messageId = parseInt(params.id);
        const message = await prisma.message.findFirst({
            where: { id: messageId, schoolId },
        });

        if (!message) {
            return NextResponse.json({ error: "Message not found" }, { status: 404 });
        }

        // Check permissions: admin or sender can delete
        if (session.role !== "admin" && message.senderId !== session.userId) {
            return NextResponse.json({ error: "Forbidden" }, { status: 403 });
        }

        await prisma.message.deleteMany({
            where: { id: messageId, schoolId },
        });

        return NextResponse.redirect(new URL("/list/messages", request.url));
    } catch (error) {
        console.error("Delete message error:", error);
        return NextResponse.json(
            { error: "Failed to delete message" },
            { status: 500 }
        );
    }
}
