// src/app/api/school/enabled-services/route.ts - Get enabled services for current school

import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { verifyToken } from "@/lib/auth-edge";

export async function GET(req: NextRequest) {
  try {
    const token = req.cookies.get("auth")?.value;
    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const payload = await verifyToken(token);
    if (!payload) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    const schoolId = (payload as any).schoolId;
    if (!schoolId) {
      return NextResponse.json(
        { error: "School not found in token" },
        { status: 400 }
      );
    }

    const school = await prisma.school.findUnique({
      where: { id: schoolId },
      select: { enabledServices: true },
    });

    if (!school) {
      return NextResponse.json({ error: "School not found" }, { status: 404 });
    }

    const enabledServices = JSON.parse(school.enabledServices || "[]");

    return NextResponse.json({
      enabledServices,
    });
  } catch (error) {
    console.error("Error fetching enabled services:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
