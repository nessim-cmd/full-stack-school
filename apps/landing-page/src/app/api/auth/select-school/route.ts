// src/app/api/auth/select-school/route.ts
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { signToken } from "@/lib/auth-edge";

export async function POST(request: Request) {
    const { managerId, schoolId } = await request.json();

    console.log("[SelectSchool] Manager:", managerId, "selecting school:", schoolId);

    // Verify the manager has access to this school
    const membership = await prisma.schoolMembership.findFirst({
        where: {
            managerId,
            schoolId
        },
        include: {
            manager: true,
            school: true
        }
    });

    if (!membership) {
        return NextResponse.json({ message: "Unauthorized" }, { status: 403 });
    }

    // Create token with selected school
    const token = await signToken({
        userId: managerId,
        userType: "manager",
        role: "admin", // For backward compatibility
        schoolId,
        managerId
    });

    const response = NextResponse.json({
        message: "School selected",
        role: "admin",
        schoolId,
        schoolName: membership.school.name
    });

    response.cookies.set("auth", token, {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        maxAge: 60 * 60 * 24 * 7, // 7 days
    });

    return response;
}
