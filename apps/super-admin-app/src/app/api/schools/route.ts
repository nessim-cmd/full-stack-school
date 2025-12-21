import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { verifyToken } from "@/lib/auth";

export async function GET(req: NextRequest) {
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

        // Get query parameters
        const { searchParams } = new URL(req.url);
        const page = parseInt(searchParams.get("page") || "1");
        const limit = parseInt(searchParams.get("limit") || "10");
        const search = searchParams.get("search") || "";
        const status = searchParams.get("status") || "all";
        const plan = searchParams.get("plan") || "all";

        // Build where clause
        const where: any = {};

        if (search) {
            where.OR = [
                { name: { contains: search, mode: "insensitive" } },
                { slug: { contains: search, mode: "insensitive" } },
            ];
        }

        if (status !== "all") {
            where.subscriptionStatus = status;
        }

        if (plan !== "all") {
            where.plan = plan;
        }

        // Get total count
        const total = await prisma.school.count({ where });

        // Get schools with pagination
        const schools = await prisma.school.findMany({
            where,
            include: {
                _count: {
                    select: {
                        students: true,
                        teachers: true,
                        admins: true,
                        parents: true,
                    },
                },
                admins: {
                    take: 1,
                    select: {
                        id: true,
                        username: true,
                    },
                },
            },
            orderBy: { createdAt: "desc" },
            skip: (page - 1) * limit,
            take: limit,
        });

        // Format response
        const formattedSchools = schools.map((school) => ({
            id: school.id,
            name: school.name,
            slug: school.slug,
            domain: school.domain,
            plan: school.plan,
            subscriptionStatus: school.subscriptionStatus,
            trialEndsAt: school.trialEndsAt,
            subscriptionEndsAt: school.subscriptionEndsAt,
            createdAt: school.createdAt,
            updatedAt: school.updatedAt,
            userCount:
                school._count.students +
                school._count.teachers +
                school._count.admins +
                school._count.parents,
            studentCount: school._count.students,
            teacherCount: school._count.teachers,
            adminCount: school._count.admins,
            parentCount: school._count.parents,
            primaryAdmin: school.admins[0] || null,
        }));

        return NextResponse.json({
            schools: formattedSchools,
            pagination: {
                page,
                limit,
                total,
                totalPages: Math.ceil(total / limit),
            },
        });
    } catch (error) {
        console.error("Schools list API error:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}

export async function POST(req: NextRequest) {
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

        const body = await req.json();
        const { name, slug, domain, plan } = body;

        // Validate required fields
        if (!name || !slug) {
            return NextResponse.json(
                { error: "Name and slug are required" },
                { status: 400 }
            );
        }

        // Check if slug already exists
        const existingSchool = await prisma.school.findUnique({
            where: { slug },
        });

        if (existingSchool) {
            return NextResponse.json(
                { error: "A school with this slug already exists" },
                { status: 400 }
            );
        }

        // Check if domain already exists (if provided)
        if (domain) {
            const existingDomain = await prisma.school.findUnique({
                where: { domain },
            });

            if (existingDomain) {
                return NextResponse.json(
                    { error: "A school with this domain already exists" },
                    { status: 400 }
                );
            }
        }

        // Calculate trial end date (30 days from now)
        const trialEndsAt = new Date();
        trialEndsAt.setDate(trialEndsAt.getDate() + 30);

        // Create school
        const school = await prisma.school.create({
            data: {
                name,
                slug,
                domain: domain || null,
                plan: plan || "FREE",
                subscriptionStatus: "TRIAL",
                trialEndsAt,
            },
        });

        // Create audit log
        await prisma.auditLog.create({
            data: {
                action: "school_created",
                entity: "school",
                entityId: school.id,
                description: `Created school: ${school.name} (${school.slug})`,
                metadata: JSON.stringify({ plan: school.plan }),
                superAdminId: (payload as any).userId,
            },
        });

        return NextResponse.json({
            success: true,
            school,
        });
    } catch (error) {
        console.error("Create school API error:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
