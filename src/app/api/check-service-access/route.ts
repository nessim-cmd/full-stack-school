// src/app/api/check-service-access/route.ts - Check if user has access to a service

import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getSessionUser } from "@/lib/authUser";
import { getRequiredService } from "@/lib/route-service-map";

export async function GET(req: NextRequest) {
  try {
    const user = await getSessionUser();
    if (!user || !user.schoolId) {
      return NextResponse.json({ hasAccess: false, reason: "unauthorized" }, { status: 401 });
    }

    const pathname = req.nextUrl.searchParams.get("path");
    if (!pathname) {
      return NextResponse.json({ hasAccess: true }, { status: 200 });
    }

    const requiredService = getRequiredService(pathname);
    if (!requiredService) {
      // No service required for this route
      return NextResponse.json({ hasAccess: true }, { status: 200 });
    }

    // Fetch school's enabled services
    const school = await prisma.school.findUnique({
      where: { id: user.schoolId },
      select: { enabledServices: true },
    });

    if (!school) {
      return NextResponse.json({ hasAccess: false, reason: "school_not_found" }, { status: 404 });
    }

    const enabledServices = JSON.parse(school.enabledServices || "[]");
    const hasAccess = enabledServices.includes(requiredService);

    return NextResponse.json({
      hasAccess,
      reason: hasAccess ? null : "service_disabled",
      requiredService: requiredService,
      serviceName: requiredService.charAt(0).toUpperCase() + requiredService.slice(1),
    });
  } catch (error) {
    console.error("[API] Error checking service access:", error);
    return NextResponse.json({ hasAccess: true }, { status: 200 }); // Fail open
  }
}
