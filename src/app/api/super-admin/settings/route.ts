import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { verifyToken, hashPassword } from "@/lib/auth";

export async function GET(req: NextRequest) {
    try {
        const token = req.cookies.get("auth")?.value;
        if (!token) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const payload = await verifyToken(token);
        if (!payload || (payload as any).role !== "super-admin") {
            return NextResponse.json({ error: "Forbidden" }, { status: 403 });
        }

        const admin = await prisma.superAdmin.findUnique({
            where: { id: (payload as any).userId },
            select: {
                id: true,
                name: true,
                email: true,
            },
        });

        return NextResponse.json({ admin });
    } catch (error) {
        console.error("Settings API error:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}

export async function PATCH(req: NextRequest) {
    try {
        const token = req.cookies.get("auth")?.value;
        if (!token) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const payload = await verifyToken(token);
        if (!payload || (payload as any).role !== "super-admin") {
            return NextResponse.json({ error: "Forbidden" }, { status: 403 });
        }

        const body = await req.json();
        const { name, email, password, newPassword } = body;
        const userId = (payload as any).userId;

        // Build update data
        const updateData: any = {};
        if (name) updateData.name = name;
        if (email) updateData.email = email;
        if (newPassword) {
            updateData.password = await hashPassword(newPassword);
        }

        // Update admin
        const admin = await prisma.superAdmin.update({
            where: { id: userId },
            data: updateData,
        });

        // Log action
        await prisma.auditLog.create({
            data: {
                action: "profile_updated",
                entity: "super_admin",
                entityId: userId,
                description: "Updated profile settings",
                superAdminId: userId,
            },
        });

        return NextResponse.json({
            success: true,
            admin: {
                id: admin.id,
                name: admin.name,
                email: admin.email,
            },
        });
    } catch (error) {
        console.error("Settings update error:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
