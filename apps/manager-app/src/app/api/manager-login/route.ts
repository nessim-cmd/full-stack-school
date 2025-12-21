import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { email, password } = body;

        if (!email || !password) {
            return NextResponse.json(
                { error: "Email and password are required" },
                { status: 400 }
            );
        }

        // Find manager
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

        if (!manager) {
            return NextResponse.json(
                { error: "Invalid email or password" },
                { status: 401 }
            );
        }

        // Verify password
        const isValidPassword = await bcrypt.compare(password, manager.password);

        if (!isValidPassword) {
            return NextResponse.json(
                { error: "Invalid email or password" },
                { status: 401 }
            );
        }

        // Create JWT token
        const token = jwt.sign(
            {
                managerId: manager.id,
                email: manager.email,
                name: manager.name,
                role: "manager"
            },
            JWT_SECRET,
            { expiresIn: "7d" }
        );

        // Create response
        const response = NextResponse.json({
            success: true,
            message: "Login successful",
            manager: {
                id: manager.id,
                name: manager.name,
                email: manager.email,
                schools: manager.schools.map(m => ({
                    id: m.school.id,
                    name: m.school.name,
                    slug: m.school.slug,
                    role: m.role
                }))
            }
        });

        // Set cookie
        response.cookies.set("manager-token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            maxAge: 60 * 60 * 24 * 7 // 7 days
        });

        return response;

    } catch (error: any) {
        console.error("Manager login error:", error);
        return NextResponse.json(
            { error: "Login failed" },
            { status: 500 }
        );
    }
}
