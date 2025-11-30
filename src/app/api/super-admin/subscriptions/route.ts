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

        // Get schools with subscription details
        const schools = await prisma.school.findMany({
            select: {
                id: true,
                name: true,
                slug: true,
                plan: true,
                subscriptionStatus: true,
                trialEndsAt: true,
                subscriptionEndsAt: true,
                createdAt: true,
                _count: {
                    select: {
                        students: true,
                        teachers: true,
                        admins: true,
                    },
                },
                invoices: {
                    orderBy: { createdAt: "desc" },
                    take: 1,
                    select: {
                        amount: true,
                        status: true,
                        dueDate: true,
                        paidAt: true,
                    },
                },
            },
            orderBy: { createdAt: "desc" },
        });

        // Format response
        const formattedSubscriptions = schools.map((school) => {
            const totalUsers = school._count.students + school._count.teachers + school._count.admins;
            const lastInvoice = school.invoices[0] || null;

            // Calculate MRR contribution
            let mrr = 0;
            if (school.subscriptionStatus === "ACTIVE") {
                if (school.plan === "MONTHLY") mrr = 29;
                if (school.plan === "YEARLY") mrr = 290 / 12;
            }

            return {
                id: school.id,
                schoolName: school.name,
                slug: school.slug,
                plan: school.plan,
                status: school.subscriptionStatus,
                users: totalUsers,
                mrr: parseFloat(mrr.toFixed(2)),
                trialEndsAt: school.trialEndsAt,
                nextBillingDate: school.subscriptionEndsAt || school.trialEndsAt,
                lastPayment: lastInvoice ? {
                    amount: lastInvoice.amount,
                    status: lastInvoice.status,
                    date: lastInvoice.paidAt || lastInvoice.dueDate,
                } : null,
            };
        });

        // Calculate summary metrics
        const totalMRR = formattedSubscriptions.reduce((acc, sub) => acc + sub.mrr, 0);
        const activeSubscriptions = formattedSubscriptions.filter(s => s.status === "ACTIVE").length;
        const trialSubscriptions = formattedSubscriptions.filter(s => s.status === "TRIAL").length;

        return NextResponse.json({
            subscriptions: formattedSubscriptions,
            summary: {
                totalMRR,
                activeSubscriptions,
                trialSubscriptions,
                totalSchools: schools.length,
            },
        });
    } catch (error) {
        console.error("Subscriptions API error:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
