import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getSchoolId } from "@/lib/authUser";

// GET - Fetch site settings for the current school
export async function GET() {
    try {
        const schoolId = await getSchoolId();

        let settings = await prisma.siteSettings.findUnique({
            where: { schoolId },
        });

        // If no settings exist for this school, create default ones
        if (!settings) {
            settings = await prisma.siteSettings.create({
                data: { schoolId },
            });
        }

        return NextResponse.json(settings);
    } catch (error) {
        console.error("Error fetching settings:", error);
        return NextResponse.json({ error: "Failed to fetch settings" }, { status: 500 });
    }
}

// PUT - Update site settings for the current school
export async function PUT(req: NextRequest) {
    try {
        const schoolId = await getSchoolId();
        const body = await req.json();

        // Remove fields that shouldn't be updated
        const { id, updatedAt, schoolId: _, ...updateData } = body;

        const settings = await prisma.siteSettings.upsert({
            where: { schoolId },
            update: updateData,
            create: { schoolId, ...updateData },
        });

        return NextResponse.json(settings);
    } catch (error) {
        console.error("Error updating settings:", error);
        return NextResponse.json({ error: "Failed to update settings" }, { status: 500 });
    }
}
