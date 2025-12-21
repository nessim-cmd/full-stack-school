
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { hashPassword } from "@/lib/auth";

export async function POST(request: Request) {
    try {
        const { email, otp, password } = await request.json();

        if (!email || !otp || !password) {
            return NextResponse.json({ message: "All fields are required" }, { status: 400 });
        }

        // Verify OTP again
        const record = await prisma.passwordResetToken.findUnique({
            where: { email },
        });

        if (!record || record.token !== otp || new Date() > record.expiresAt) {
            return NextResponse.json({ message: "Invalid or expired OTP" }, { status: 400 });
        }

        const hashedPassword = await hashPassword(password);
        let updated = false;

        // Update Teacher
        if (!updated) {
            const teacher = await prisma.teacher.findUnique({ where: { email } });
            if (teacher) {
                await prisma.teacher.update({ where: { email }, data: { password: hashedPassword } });
                updated = true;
            }
        }

        // Update Student
        if (!updated) {
            const student = await prisma.student.findUnique({ where: { email } });
            if (student) {
                await prisma.student.update({ where: { email }, data: { password: hashedPassword } });
                updated = true;
            }
        }

        // Update Parent
        if (!updated) {
            const parent = await prisma.parent.findUnique({ where: { email } });
            if (parent) {
                await prisma.parent.update({ where: { email }, data: { password: hashedPassword } });
                updated = true;
            }
        }

        if (!updated) {
            return NextResponse.json({ message: "User not found" }, { status: 404 });
        }

        // Delete OTP record
        await prisma.passwordResetToken.delete({ where: { email } });

        return NextResponse.json({ message: "Password updated successfully" });
    } catch (error) {
        console.error("Reset password error:", error);
        return NextResponse.json({ message: "Internal server error" }, { status: 500 });
    }
}
