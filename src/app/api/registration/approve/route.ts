import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { hashPassword } from "@/lib/auth";
import { randomUUID } from "crypto";
import { sendCredentials } from "@/lib/mail";

// Helper function to generate a random password
function generatePassword(length: number = 12): string {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789!@#$%";
    let password = "";
    for (let i = 0; i < length; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
}

// Helper function to generate username
function generateUsername(name: string, surname: string, role: string): string {
    const prefix = role === "student" ? "stu" : "par";
    const random = Math.floor(1000 + Math.random() * 9000);
    return `${prefix}_${name.toLowerCase()}${surname.toLowerCase()}${random}`;
}

export async function POST(req: NextRequest) {
    try {
        const { id } = await req.json();

        if (!id) {
            return NextResponse.json({ error: "Application ID is required" }, { status: 400 });
        }

        // Get the application
        const application = await prisma.registrationRequest.findUnique({
            where: { id: parseInt(id) },
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

        // Check if grade exists
        const gradeExists = await prisma.grade.findUnique({
            where: { level: application.gradeId },
        });

        if (!gradeExists) {
            return NextResponse.json(
                { error: `Grade level ${application.gradeId} does not exist in the system` },
                { status: 400 }
            );
        }

        // Find a class for this grade with available capacity
        const availableClass = await prisma.class.findFirst({
            where: {
                gradeId: application.gradeId,
            },
            include: {
                _count: {
                    select: { students: true },
                },
            },
        });

        if (!availableClass) {
            return NextResponse.json(
                { error: `No class found for grade ${application.gradeId}` },
                { status: 400 }
            );
        }

        if (availableClass.capacity <= availableClass._count.students) {
            return NextResponse.json(
                { error: `Class ${availableClass.name} is at full capacity` },
                { status: 400 }
            );
        }

        // Generate credentials
        const parentUsername = generateUsername(
            application.parentName,
            application.parentSurname,
            "parent"
        );
        const parentPassword = generatePassword();
        const studentUsername = generateUsername(
            application.studentName,
            application.studentSurname,
            "student"
        );
        const studentPassword = generatePassword();

        // Create parent account
        const parentId = randomUUID();
        const parent = await prisma.parent.create({
            data: {
                id: parentId,
                username: parentUsername,
                password: await hashPassword(parentPassword),
                name: application.parentName,
                surname: application.parentSurname,
                email: application.parentEmail,
                phone: application.parentPhone,
                address: application.parentAddress,
            },
        });

        // Create student account
        const studentId = randomUUID();
        const student = await prisma.student.create({
            data: {
                id: studentId,
                username: studentUsername,
                password: await hashPassword(studentPassword),
                name: application.studentName,
                surname: application.studentSurname,
                email: application.studentEmail,
                phone: application.studentPhone,
                address: application.studentAddress,
                bloodType: application.studentBloodType,
                sex: application.studentSex,
                birthday: application.studentBirthday,
                gradeId: application.gradeId,
                classId: availableClass.id,
                parentId: parentId,
            },
        });

        // Update application status
        await prisma.registrationRequest.update({
            where: { id: parseInt(id) },
            data: { status: "APPROVED" },
        });

        // Send credentials email to parent with both accounts
        // We'll send to parent email with a custom message including both credentials
        const customMessage = `
Dear ${application.parentName} ${application.parentSurname},

Congratulations! Your application for ${application.studentName} ${application.studentSurname} has been approved.

PARENT ACCOUNT:
Username: ${parentUsername}
Password: ${parentPassword}

STUDENT ACCOUNT:
Username: ${studentUsername}
Password: ${studentPassword}

Class Assignment: ${availableClass.name}
Grade Level: ${application.gradeId}

Please log in to the school portal and change your passwords immediately.

Welcome to SchoolHub!
    `;

        // For now, we'll send the parent credentials (you may want to customize the mail function to handle both)
        await sendCredentials(
            application.parentEmail,
            `Parent: ${parentUsername} | Student: ${studentUsername}`,
            `Parent: ${parentPassword} | Student: ${studentPassword}`,
            "Parent & Student"
        );

        return NextResponse.json(
            {
                success: true,
                message: "Application approved and credentials sent",
                parent: { id: parent.id, username: parentUsername },
                student: { id: student.id, username: studentUsername },
            },
            { status: 200 }
        );
    } catch (error: any) {
        console.error("Error approving application:", error);

        // Handle unique constraint violations
        if (error.code === "P2002") {
            const field = error.meta?.target?.[0];
            return NextResponse.json(
                { error: `A user with this ${field} already exists` },
                { status: 400 }
            );
        }

        return NextResponse.json(
            { error: "Failed to approve application. Please try again." },
            { status: 500 }
        );
    }
}
