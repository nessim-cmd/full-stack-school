
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { sendOTP } from "@/lib/mail";

export async function POST(request: Request) {
    try {
        const { email } = await request.json();

        if (!email) {
            return NextResponse.json({ message: "Email is required" }, { status: 400 });
        }

        // Check if user exists in any table
        const admin = await prisma.admin.findFirst({ where: { username: email } }); // Assuming username might be email, or check logic. Wait, schema has email field.
        // Actually schema has email field for Teacher, Student, Parent. Admin has username only?
        // Let's check schema again.
        // Admin: username (unique), password. No email field!
        // Teacher: email (unique)
        // Student: email (unique)
        // Parent: email (unique)

        // If Admin doesn't have email, we can't do forgot password for admin via email unless username IS email.
        // The user said "admin create user (teacher or student or parent) and that user change his password then he forgot it".
        // So it's mostly for Teacher, Student, Parent.
        // But if username is email for admin, it might work. But schema says `username String @unique`.

        let userFound = false;

        // Check Teacher
        if (!userFound) {
            const teacher = await prisma.teacher.findUnique({ where: { email } });
            if (teacher) userFound = true;
        }

        // Check Student
        if (!userFound) {
            const student = await prisma.student.findUnique({ where: { email } });
            if (student) userFound = true;
        }

        // Check Parent
        if (!userFound) {
            const parent = await prisma.parent.findUnique({ where: { email } });
            if (parent) userFound = true;
        }

        if (!userFound) {
            return NextResponse.json({ message: "Email not found" }, { status: 404 });
        }

        // Generate 4 digit OTP
        const otp = Math.floor(1000 + Math.random() * 9000).toString();
        const expiresAt = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes

        // Save or Update OTP
        await prisma.passwordResetToken.upsert({
            where: { email },
            update: { token: otp, expiresAt },
            create: { email, token: otp, expiresAt },
        });

        // Send Email
        const emailResult = await sendOTP(email, otp);

        if (!emailResult.success) {
            return NextResponse.json({ message: "Failed to send email" }, { status: 500 });
        }

        return NextResponse.json({ message: "OTP sent successfully" });
    } catch (error) {
        console.error("Forgot password error:", error);
        return NextResponse.json({ message: "Internal server error" }, { status: 500 });
    }
}
