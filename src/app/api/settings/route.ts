import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

// GET - Fetch site settings
export async function GET() {
    try {
        let settings = await prisma.siteSettings.findUnique({
            where: { id: 1 },
        });

        // If no settings exist, create default ones
        if (!settings) {
            settings = await prisma.siteSettings.create({
                data: { id: 1 },
            });
        }

        return NextResponse.json(settings);
    } catch (error) {
        console.error("Error fetching settings:", error);
        return NextResponse.json({ error: "Failed to fetch settings" }, { status: 500 });
    }
}

// PUT - Update site settings
export async function PUT(req: NextRequest) {
    try {
        const body = await req.json();

        // Remove id from update data
        const { id, updatedAt, ...updateData } = body;

        const settings = await prisma.siteSettings.upsert({
            where: { id: 1 },
            update: updateData,
            create: { id: 1, ...updateData },
        });

        return NextResponse.json(settings);
    } catch (error) {
        console.error("Error updating settings:", error);
        return NextResponse.json({ error: "Failed to update settings" }, { status: 500 });
    }
}
