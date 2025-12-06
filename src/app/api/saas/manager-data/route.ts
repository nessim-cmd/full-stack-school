import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key";

export async function GET(req: NextRequest) {
    try {
        // Get token from cookie
        const token = req.cookies.get("manager-token")?.value;

        if (!token) {
            return NextResponse.json(
                { error: "Not authenticated" },
                { status: 401 }
            );
        }

        // Verify token
        const decoded = jwt.verify(token, JWT_SECRET) as any;

        // Fetch manager data
        const manager = await prisma.schoolManager.findUnique({
            where: { id: decoded.managerId },
            include: {
                schools: {
                    include: {
                        school: {
                            select: {
                                id: true,
                                name: true,
                                slug: true,
                                plan: true,
                                subscriptionStatus: true,
                                trialEndsAt: true,
                                enabledServices: true,
                                createdAt: true
                            }
                        }
                    }
                }
            }
        });

        if (!manager) {
            return NextResponse.json(
                { error: "Manager not found" },
                { status: 404 }
            );
        }

        return NextResponse.json({
            manager: {
                id: manager.id,
                name: manager.name,
                email: manager.email
            },
            schools: manager.schools.map(m => m.school)
        });

    } catch (error: any) {
        console.error("Error fetching manager data:", error);
        return NextResponse.json(
            { error: "Failed to fetch data" },
            { status: 500 }
        );
    }
}
