// src/app/api/auth/login/route.ts
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { comparePassword } from "@/lib/auth";
import { signToken } from "@/lib/auth-edge";

export async function POST(request: Request) {
    const { username, password } = await request.json();

    console.log("[Login] Attempting login for username:", username);

    // Look for the user in each table (admin, teacher, student, parent)
    let user: any = null;
    let role: string = "";

    user = await prisma.admin.findUnique({ where: { username } });
    if (user) {
        role = "admin";
    } else {
        user = await prisma.teacher.findUnique({ where: { username } });
        if (user) {
            role = "teacher";
        } else {
            user = await prisma.student.findUnique({ where: { username } });
            if (user) {
                role = "student";
            } else {
                user = await prisma.parent.findUnique({ where: { username } });
                if (user) {
                    role = "parent";
                }
            }
        }
    }

    if (!user) {
        console.log("[Login] User not found");
        return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
    }

    console.log("[Login] User found with role:", role);
    console.log("[Login] Stored password hash:", user.password);

    const valid = await comparePassword(password, (user as any).password);
    console.log("[Login] Password valid:", valid);

    if (!valid) {
        return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
    }

    const token = await signToken({ id: (user as any).id, role });

    const response = NextResponse.json({ message: "Logged in", role });
    response.cookies.set("auth", token, {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        maxAge: 60 * 60 * 24 * 7, // 7 days
    });
    return response;
}
