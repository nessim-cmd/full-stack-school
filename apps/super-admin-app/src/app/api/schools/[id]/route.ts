import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { verifyToken } from "@/lib/auth";

type RouteContext = {
    params: {
        id: string;
    };
};

export async function GET(req: NextRequest, { params }: RouteContext) {
    try {
        // Verify super admin authentication
        const token = req.cookies.get("auth")?.value;
        if (!token) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const payload = await verifyToken(token);
        if (!payload || (payload as any).role !== "super-admin") {
            return NextResponse.json({ error: "Forbidden" }, { status: 403 });
        }

        const { id } = await params;

        // Get school with detailed information
        const school = await prisma.school.findUnique({
            where: { id },
            include: {
                _count: {
                    select: {
                        students: true,
                        teachers: true,
                        admins: true,
                        parents: true,
                        classes: true,
                        subjects: true,
                        exams: true,
                        assignments: true,
                        events: true,
                        announcements: true,
                        messages: true,
                        notifications: true,
                    },
                },
                admins: {
                    select: {
                        id: true,
                        username: true,
                    },
                },
            },
        });

        if (!school) {
            return NextResponse.json(
                { error: "School not found" },
                { status: 404 }
            );
        }

        return NextResponse.json({ school });
    } catch (error) {
        console.error("Get school API error:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}

export async function PATCH(req: NextRequest, { params }: RouteContext) {
    try {
        // Verify super admin authentication
        const token = req.cookies.get("auth")?.value;
        if (!token) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const payload = await verifyToken(token);
        if (!payload || (payload as any).role !== "super-admin") {
            return NextResponse.json({ error: "Forbidden" }, { status: 403 });
        }

        const { id } = await params;
        const body = await req.json();
        const { name, slug, domain, plan, subscriptionStatus, subscriptionEndsAt } = body;

        // Check if school exists
        const existingSchool = await prisma.school.findUnique({
            where: { id },
        });

        if (!existingSchool) {
            return NextResponse.json(
                { error: "School not found" },
                { status: 404 }
            );
        }

        // Check if slug is being changed and if it's already taken
        if (slug && slug !== existingSchool.slug) {
            const slugTaken = await prisma.school.findUnique({
                where: { slug },
            });

            if (slugTaken) {
                return NextResponse.json(
                    { error: "A school with this slug already exists" },
                    { status: 400 }
                );
            }
        }

        // Check if domain is being changed and if it's already taken
        if (domain && domain !== existingSchool.domain) {
            const domainTaken = await prisma.school.findUnique({
                where: { domain },
            });

            if (domainTaken) {
                return NextResponse.json(
                    { error: "A school with this domain already exists" },
                    { status: 400 }
                );
            }
        }

        // Build update data
        const updateData: any = {};
        if (name) updateData.name = name;
        if (slug) updateData.slug = slug;
        if (domain !== undefined) updateData.domain = domain || null;
        if (plan) updateData.plan = plan;
        if (subscriptionStatus) updateData.subscriptionStatus = subscriptionStatus;
        if (subscriptionEndsAt) updateData.subscriptionEndsAt = new Date(subscriptionEndsAt);

        // Update school
        const school = await prisma.school.update({
            where: { id },
            data: updateData,
        });

        // Create audit log
        await prisma.auditLog.create({
            data: {
                action: "school_updated",
                entity: "school",
                entityId: school.id,
                description: `Updated school: ${school.name}`,
                metadata: JSON.stringify(updateData),
                superAdminId: (payload as any).userId,
            },
        });

        return NextResponse.json({
            success: true,
            school,
        });
    } catch (error) {
        console.error("Update school API error:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}

export async function DELETE(req: NextRequest, { params }: RouteContext) {
    try {
        // Verify super admin authentication
        const token = req.cookies.get("auth")?.value;
        if (!token) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const payload = await verifyToken(token);
        if (!payload || (payload as any).role !== "super-admin") {
            return NextResponse.json({ error: "Forbidden" }, { status: 403 });
        }

        const { id } = await params;

        // Check if school exists
        const school = await prisma.school.findUnique({
            where: { id },
        });

        if (!school) {
            return NextResponse.json(
                { error: "School not found" },
                { status: 404 }
            );
        }

        // Create audit log before deletion
        await prisma.auditLog.create({
            data: {
                action: "school_deleted",
                entity: "school",
                entityId: school.id,
                description: `Deleted school: ${school.name} (${school.slug})`,
                metadata: JSON.stringify({ plan: school.plan, status: school.subscriptionStatus }),
                superAdminId: (payload as any).userId,
            },
        });

        // Delete school (cascade will handle related records)
        await prisma.school.delete({
            where: { id },
        });

        return NextResponse.json({
            success: true,
            message: "School deleted successfully",
        });
    } catch (error) {
        console.error("Delete school API error:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
