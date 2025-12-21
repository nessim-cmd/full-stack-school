import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getSessionUser, getSchoolId } from "@/lib/authUser";

export async function POST(req: NextRequest) {
    try {
        const session = await getSessionUser();
        if (!session || session.role !== "admin") {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }
        const schoolId = await getSchoolId();

        const { id } = await req.json();

        if (!id) {
            return NextResponse.json({ error: "Application ID is required" }, { status: 400 });
        }

        // Get the application
        const application = await prisma.registrationRequest.findFirst({
            where: {
                id: parseInt(id),
                schoolId,
            },
        });

        if (!application) {
            return NextResponse.json({ error: "Application not found" }, { status: 404 });
        }

        if (application.status !== "PENDING") {
            return NextResponse.json(
                { error: "Application has already been processed" },
                { status: 400 }
            );
        }

        // Update application status to rejected
        await prisma.registrationRequest.update({
            where: { id: parseInt(id) },
            data: { status: "REJECTED" },
        });

        return NextResponse.json(
            {
                success: true,
                message: "Application rejected",
            },
            { status: 200 }
        );
    } catch (error: any) {
        console.error("Error rejecting application:", error);
        return NextResponse.json(
            { error: "Failed to reject application. Please try again." },
            { status: 500 }
        );
    }
}
