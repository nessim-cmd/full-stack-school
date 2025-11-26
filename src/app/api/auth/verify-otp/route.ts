
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(request: Request) {
    try {
        const { email, otp } = await request.json();

        if (!email || !otp) {
            return NextResponse.json({ message: "Email and OTP are required" }, { status: 400 });
        }

        const record = await prisma.passwordResetToken.findUnique({
            where: { email },
        });

        if (!record) {
            return NextResponse.json({ message: "Invalid request" }, { status: 400 });
        }

        if (record.token !== otp) {
            return NextResponse.json({ message: "Invalid OTP" }, { status: 400 });
        }

        if (new Date() > record.expiresAt) {
            return NextResponse.json({ message: "OTP expired" }, { status: 400 });
        }

        return NextResponse.json({ message: "OTP verified" });
    } catch (error) {
        console.error("Verify OTP error:", error);
        return NextResponse.json({ message: "Internal server error" }, { status: 500 });
    }
}
