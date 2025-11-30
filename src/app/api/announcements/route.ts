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

        // Fetch active announcements
        const announcements = await prisma.globalAnnouncement.findMany({
            where: {
                active: true,
            },
            orderBy: { createdAt: "desc" },
            take: 5, // Only show the 5 most recent
        });

        return NextResponse.json({ announcements });
    } catch (error) {
        console.error("Announcements fetch error:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
