// src/app/api/saas/manager/services/route.ts - Update school enabled services

import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { verifyToken } from "@/lib/auth-edge";
import { serializeEnabledServices, type ServiceKey } from "@/lib/services";

export async function GET(req: NextRequest) {
  try {
    // Try manager-token first, then fall back to regular token
    let token = req.cookies.get("manager-token")?.value;
    if (!token) {
      token = req.cookies.get("auth")?.value;
    }
    
    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    let payload: any;
    try {
      payload = await verifyToken(token);
    } catch {
      return NextResponse.json({ error: "Invalid token" }, { status: 401 });
    }

    if (!payload) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Allow both manager and admin roles
    const isManager = (payload as any).role === "manager" || (payload as any).role === "admin";
    if (!isManager) {
      console.log("[API] Unauthorized role:", (payload as any).role);
      return NextResponse.json({ error: "Forbidden - must be manager or admin" }, { status: 403 });
    }

    const schoolId = req.nextUrl.searchParams.get("schoolId");
    if (!schoolId) {
      return NextResponse.json(
        { error: "schoolId required" },
        { status: 400 }
      );
    }

    // For managers, verify they own the school
    if ((payload as any).role === "manager") {
      const membership = await prisma.schoolMembership.findFirst({
        where: {
          schoolId,
          managerId: (payload as any).managerId,
        },
      });

      if (!membership) {
        return NextResponse.json({ error: "Forbidden - school access denied" }, { status: 403 });
      }
    }
    // For admins, the schoolId should match their school
    else if ((payload as any).role === "admin") {
      if ((payload as any).schoolId !== schoolId) {
        return NextResponse.json({ error: "Forbidden - school mismatch" }, { status: 403 });
      }
    }

    const school = await prisma.school.findUnique({
      where: { id: schoolId },
      select: { id: true, name: true, enabledServices: true },
    });

    if (!school) {
      return NextResponse.json({ error: "School not found" }, { status: 404 });
    }

    const enabledServices = JSON.parse(school.enabledServices || "[]");

    return NextResponse.json({
      schoolId: school.id,
      schoolName: school.name,
      enabledServices,
    });
  } catch (error) {
    console.error("Error fetching school services:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function PUT(req: NextRequest) {
  try {
    // Try manager-token first, then fall back to regular token
    let token = req.cookies.get("manager-token")?.value;
    if (!token) {
      token = req.cookies.get("auth")?.value;
    }

    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    let payload: any;
    try {
      payload = await verifyToken(token);
    } catch {
      return NextResponse.json({ error: "Invalid token" }, { status: 401 });
    }

    if (!payload) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Allow both manager and admin roles
    const isManager = (payload as any).role === "manager" || (payload as any).role === "admin";
    if (!isManager) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    const { schoolId, enabledServices } = await req.json();

    if (!schoolId || !Array.isArray(enabledServices)) {
      return NextResponse.json(
        { error: "Invalid request" },
        { status: 400 }
      );
    }

    // For managers, verify they own the school
    if ((payload as any).role === "manager") {
      const membership = await prisma.schoolMembership.findFirst({
        where: {
          schoolId,
          managerId: (payload as any).managerId,
        },
      });

      if (!membership) {
        return NextResponse.json({ error: "Forbidden" }, { status: 403 });
      }
    }
    // For admins, the schoolId should match their school
    else if ((payload as any).role === "admin") {
      if ((payload as any).schoolId !== schoolId) {
        return NextResponse.json({ error: "Forbidden - school mismatch" }, { status: 403 });
      }
    }

    console.log("[API] Saving services for school:", { schoolId, enabledServices });

    // Update school services
    const updatedSchool = await prisma.school.update({
      where: { id: schoolId },
      data: {
        enabledServices: serializeEnabledServices(
          enabledServices as ServiceKey[]
        ),
      },
      select: { id: true, name: true, enabledServices: true },
    });

    console.log("[API] Services saved successfully:", updatedSchool.enabledServices);

    return NextResponse.json({
      message: "Services updated successfully",
      schoolId: updatedSchool.id,
      enabledServices: JSON.parse(updatedSchool.enabledServices || "[]"),
    });
  } catch (error) {
    console.error("Error updating school services:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
