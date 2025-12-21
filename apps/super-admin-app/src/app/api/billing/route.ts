import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { verifyToken } from "@/lib/auth";

export async function GET(req: NextRequest) {
    try {
        // Verify super admin authentication
        const token = req.cookies.get("auth")?.value;
        if (!token) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const payload = await verifyToken(token);
        if (!payload || (payload as any).role !== "super-admin") {
            return NextResponse.json({ error: "Forbidden" }, { status: 403 });
        }

        // Get invoices
        const invoices = await prisma.invoice.findMany({
            include: {
                school: {
                    select: {
                        name: true,
                        slug: true,
                    },
                },
            },
            orderBy: { createdAt: "desc" },
        });

        // Calculate summary
        const totalRevenue = invoices
            .filter(i => i.status === "PAID")
            .reduce((acc, i) => acc + i.amount, 0);

        const pendingAmount = invoices
            .filter(i => i.status === "PENDING")
            .reduce((acc, i) => acc + i.amount, 0);

        const overdueAmount = invoices
            .filter(i => i.status === "OVERDUE")
            .reduce((acc, i) => acc + i.amount, 0);

        return NextResponse.json({
            invoices,
            summary: {
                totalRevenue,
                pendingAmount,
                overdueAmount,
                totalInvoices: invoices.length,
            },
        });
    } catch (error) {
        console.error("Billing API error:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
