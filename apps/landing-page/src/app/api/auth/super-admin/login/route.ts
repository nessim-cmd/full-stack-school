import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { signToken } from "@/lib/auth";

export async function POST(req: NextRequest) {
    try {
        const { email, password } = await req.json();

        if (!email || !password) {
            return NextResponse.json(
                { error: "Email and password are required" },
                { status: 400 }
            );
        }

        // Find super admin by email
        const superAdmin = await prisma.superAdmin.findUnique({
            where: { email },
        });

        if (!superAdmin) {
            return NextResponse.json(
                { error: "Invalid credentials" },
                { status: 401 }
            );
        }

        // Verify password
        const isValidPassword = await bcrypt.compare(password, superAdmin.password);

        if (!isValidPassword) {
            return NextResponse.json(
                { error: "Invalid credentials" },
                { status: 401 }
            );
        }

        // Create JWT token with super-admin role
        const token = signToken({
            userId: superAdmin.id,
            email: superAdmin.email,
            role: "super-admin",
            username: superAdmin.name,
        });

        // Set cookie
        const response = NextResponse.json({
            success: true,
            user: {
                id: superAdmin.id,
                email: superAdmin.email,
                name: superAdmin.name,
                role: "super-admin",
            },
        });

        response.cookies.set("auth", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            maxAge: 60 * 60 * 24 * 7, // 7 days
        });

        return response;
    } catch (error) {
        console.error("Super admin login error:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
