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

        // Get current date for filtering
        const now = new Date();
        const firstDayOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
        const firstDayOfYear = new Date(now.getFullYear(), 0, 1);

        // Fetch all schools with counts
        const schools = await prisma.school.findMany({
            include: {
                _count: {
                    select: {
                        students: true,
                        teachers: true,
                        admins: true,
                        parents: true,
                    },
                },
            },
        });

        // Calculate metrics
        const totalSchools = schools.length;
        const activeSchools = schools.filter(
            (s) => s.subscriptionStatus === "ACTIVE"
        ).length;
        const trialSchools = schools.filter(
            (s) => s.subscriptionStatus === "TRIAL"
        ).length;
        const canceledSchools = schools.filter(
            (s) => s.subscriptionStatus === "CANCELED"
        ).length;

        // Total users across all schools
        const totalUsers = schools.reduce(
            (acc, school) => {
                return {
                    students: acc.students + school._count.students,
                    teachers: acc.teachers + school._count.teachers,
                    admins: acc.admins + school._count.admins,
                    parents: acc.parents + school._count.parents,
                };
            },
            { students: 0, teachers: 0, admins: 0, parents: 0 }
        );

        const totalUsersCount =
            totalUsers.students +
            totalUsers.teachers +
            totalUsers.admins +
            totalUsers.parents;

        // Calculate MRR (Monthly Recurring Revenue)
        const mrr = schools.reduce((acc, school) => {
            if (school.subscriptionStatus === "ACTIVE") {
                if (school.plan === "MONTHLY") {
                    return acc + 29; // $29/month
                } else if (school.plan === "YEARLY") {
                    return acc + 290 / 12; // $290/year = ~$24.17/month
                }
            }
            return acc;
        }, 0);

        // Schools created this month
        const schoolsThisMonth = schools.filter(
            (s) => new Date(s.createdAt) >= firstDayOfMonth
        ).length;

        // Schools created this year
        const schoolsThisYear = schools.filter(
            (s) => new Date(s.createdAt) >= firstDayOfYear
        ).length;

        // Subscription plan distribution
        const planDistribution = {
            FREE: schools.filter((s) => s.plan === "FREE").length,
            MONTHLY: schools.filter((s) => s.plan === "MONTHLY").length,
            YEARLY: schools.filter((s) => s.plan === "YEARLY").length,
        };

        // Growth trends (last 6 months)
        const monthlyGrowth = [];
        for (let i = 5; i >= 0; i--) {
            const monthStart = new Date(now.getFullYear(), now.getMonth() - i, 1);
            const monthEnd = new Date(now.getFullYear(), now.getMonth() - i + 1, 0);

            const schoolsInMonth = schools.filter((s) => {
                const createdAt = new Date(s.createdAt);
                return createdAt >= monthStart && createdAt <= monthEnd;
            }).length;

            monthlyGrowth.push({
                month: monthStart.toLocaleDateString("en-US", { month: "short" }),
                schools: schoolsInMonth,
            });
        }

        // Recent schools (last 5)
        const recentSchools = schools
            .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
            .slice(0, 5)
            .map((s) => ({
                id: s.id,
                name: s.name,
                slug: s.slug,
                plan: s.plan,
                status: s.subscriptionStatus,
                createdAt: s.createdAt,
                userCount:
                    s._count.students +
                    s._count.teachers +
                    s._count.admins +
                    s._count.parents,
            }));

        return NextResponse.json({
            metrics: {
                totalSchools,
                activeSchools,
                trialSchools,
                canceledSchools,
                totalUsers: totalUsersCount,
                userBreakdown: totalUsers,
                mrr: Math.round(mrr * 100) / 100,
                schoolsThisMonth,
                schoolsThisYear,
            },
            planDistribution,
            monthlyGrowth,
            recentSchools,
        });
    } catch (error) {
        console.error("Analytics API error:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
