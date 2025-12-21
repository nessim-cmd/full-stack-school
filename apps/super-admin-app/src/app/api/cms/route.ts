import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import prisma from "@/lib/prisma";
import { verifyToken } from "@/lib/auth";

export async function GET(req: NextRequest) {
    try {
        // Public or protected? CMS data is public, but editing is protected.
        // This endpoint is for the admin to fetch current settings.
        const token = req.cookies.get("auth")?.value;
        if (!token) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

        const payload = await verifyToken(token);
        if (!payload || (payload as any).role !== "super-admin") {
            return NextResponse.json({ error: "Forbidden" }, { status: 403 });
        }

        let settings = await prisma.saasSettings.findFirst();

        if (!settings) {
            // Create default if not exists
            settings = await prisma.saasSettings.create({
                data: {},
            });
        }

        return NextResponse.json({ settings });
    } catch (error) {
        console.error("CMS API error:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}

export async function PATCH(req: NextRequest) {
    try {
        const token = req.cookies.get("auth")?.value;
        if (!token) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

        const payload = await verifyToken(token);
        if (!payload || (payload as any).role !== "super-admin") {
            return NextResponse.json({ error: "Forbidden" }, { status: 403 });
        }

        const body = await req.json();
        const { heroTitle, heroDescription } = body;

        // Update first record
        const firstRecord = await prisma.saasSettings.findFirst();
        const id = firstRecord?.id;

        let settings;
        if (id) {
            settings = await prisma.saasSettings.update({
                where: { id },
                data: {
                    heroTitle,
                    heroDescription,
                },
            });
        } else {
            settings = await prisma.saasSettings.create({
                data: {
                    heroTitle,
                    heroDescription,
                },
            });
        }

        // Log action
        await prisma.auditLog.create({
            data: {
                action: "cms_updated",
                entity: "saas_settings",
                entityId: settings.id,
                description: "Updated landing page content",
                superAdminId: (payload as any).userId,
            },
        });

        // Revalidate the /saas page to show new content immediately
        revalidatePath('/saas');

        return NextResponse.json({ settings });
    } catch (error) {
        console.error("CMS update error:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}
