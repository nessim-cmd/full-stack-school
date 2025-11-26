import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();

        const {
            studentName,
            studentSurname,
            studentEmail,
            studentPhone,
            studentAddress,
            studentBloodType,
            studentSex,
            studentBirthday,
            gradeId,
            parentName,
            parentSurname,
            parentEmail,
            parentPhone,
            parentAddress,
        } = body;

        // Validate required fields
        if (
            !studentName ||
            !studentSurname ||
            !studentAddress ||
            !studentBloodType ||
            !studentSex ||
            !studentBirthday ||
            !gradeId ||
            !parentName ||
            !parentSurname ||
            !parentEmail ||
            !parentPhone ||
            !parentAddress
        ) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        // Check if parent email already exists in applications
        const existingApplication = await prisma.registrationRequest.findFirst({
            where: {
                OR: [
                    { parentEmail },
                    { studentEmail: studentEmail || undefined },
                ],
            },
        });

        if (existingApplication) {
            return NextResponse.json(
                { error: "An application with this email already exists" },
                { status: 400 }
            );
        }

        // Create the registration request
        const registrationRequest = await prisma.registrationRequest.create({
            data: {
                studentName,
                studentSurname,
                studentEmail: studentEmail || null,
                studentPhone: studentPhone || null,
                studentAddress,
                studentBloodType,
                studentSex,
                studentBirthday: new Date(studentBirthday),
                gradeId: parseInt(gradeId),
                parentName,
                parentSurname,
                parentEmail,
                parentPhone,
                parentAddress,
            },
        });

        return NextResponse.json(
            {
                success: true,
                message: "Application submitted successfully",
                id: registrationRequest.id,
            },
            { status: 201 }
        );
    } catch (error: any) {
        console.error("Error creating registration request:", error);
        return NextResponse.json(
            { error: "Failed to submit application. Please try again." },
            { status: 500 }
        );
    }
}
