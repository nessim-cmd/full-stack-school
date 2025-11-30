// src/app/api/auth/login/route.ts
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { comparePassword } from "@/lib/auth";
import { signToken } from "@/lib/auth-edge";

export async function POST(request: Request) {
    const { email, password } = await request.json();

    console.log("[Login] Attempting login for email:", email);

    // First, check if this is a SchoolManager (multi-school owner)
    const manager = await prisma.schoolManager.findUnique({
        where: { email },
        include: {
            schools: {
                include: {
                    school: true
                }
            }
        }
    });

    if (manager) {
        console.log("[Login] Found SchoolManager with", manager.schools.length, "schools");

        const valid = await comparePassword(password, manager.password);
        if (!valid) {
            return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
        }

        // If manager has multiple schools, return list for selection
        if (manager.schools.length > 1) {
            return NextResponse.json({
                requiresSchoolSelection: true,
                managerId: manager.id,
                schools: manager.schools.map(m => ({
                    id: m.school.id,
                    name: m.school.name,
                    slug: m.school.slug
                }))
            });
        }

        // If manager has exactly one school, auto-select it
        if (manager.schools.length === 1) {
            const schoolId = manager.schools[0].schoolId;
            const token = await signToken({
                userId: manager.id,
                username: manager.name,
                userType: "manager",
                role: "admin", // For backward compatibility
                schoolId,
                managerId: manager.id
            });

            const response = NextResponse.json({
                message: "Logged in",
                role: "admin",
                schoolId
            });
            response.cookies.set("auth", token, {
                httpOnly: true,
                sameSite: "lax",
                path: "/",
                maxAge: 60 * 60 * 24 * 7, // 7 days
            });
            return response;
        }

        // Manager has no schools (shouldn't happen, but handle it)
        return NextResponse.json({ message: "No schools associated with this account" }, { status: 403 });
    }

    // Not a manager, check regular users (admin, teacher, student, parent)
    let user: any = null;
    let role: string = "";
    let userType: string = "";

    // Check if we are on a specific school subdomain
    const schoolSlug = request.headers.get("x-school-slug");
    let schoolId: string | undefined;

    if (schoolSlug) {
        const school = await prisma.school.findUnique({
            where: { slug: schoolSlug }
        });
        if (school) {
            schoolId = school.id;
            console.log("[Login] Restricting login to school:", schoolSlug, schoolId);
        }
    }

    // Helper to add school filter if needed
    const whereClause = (username: string) => {
        const base = { username };
        return schoolId ? { ...base, schoolId } : base;
    };

    user = await prisma.admin.findFirst({ where: whereClause(email), include: { school: true } });
    if (user) {
        role = "admin";
        userType = "admin";
    } else {
        user = await prisma.teacher.findFirst({ where: whereClause(email), include: { school: true } });
        if (user) {
            role = "teacher";
            userType = "teacher";
        } else {
            user = await prisma.student.findFirst({ where: whereClause(email), include: { school: true } });
            if (user) {
                role = "student";
                userType = "student";
            } else {
                user = await prisma.parent.findFirst({ where: whereClause(email), include: { school: true } });
                if (user) {
                    role = "parent";
                    userType = "parent";
                }
            }
        }
    }

    if (!user) {
        console.log("[Login] User not found");
        return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
    }

    console.log("[Login] User found with role:", role);

    const valid = await comparePassword(password, user.password);
    if (!valid) {
        return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
    }

    const token = await signToken({
        userId: user.id,
        username: user.username,
        userType,
        role,
        schoolId: user.schoolId
    });

    const response = NextResponse.json({
        message: "Logged in",
        role,
        schoolSlug: user.school?.slug
    });
    response.cookies.set("auth", token, {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        maxAge: 60 * 60 * 24 * 7, // 7 days
    });
    return response;
}
