"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type Analytics = {
    metrics: {
        totalSchools: number;
        activeSchools: number;
        trialSchools: number;
        canceledSchools: number;
        totalUsers: number;
        userBreakdown: {
            students: number;
            teachers: number;
            admins: number;
            parents: number;
        };
        mrr: number;
        schoolsThisMonth: number;
        schoolsThisYear: number;
    };
    planDistribution: {
        FREE: number;
        MONTHLY: number;
        YEARLY: number;
    };
    monthlyGrowth: Array<{ month: string; schools: number }>;
    recentSchools: Array<{
        id: string;
        name: string;
        slug: string;
        plan: string;
        status: string;
        createdAt: string;
        userCount: number;
    }>;
};

export default function SuperAdminDashboard() {
    const [analytics, setAnalytics] = useState<Analytics | null>(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        fetchAnalytics();
    }, []);

    const fetchAnalytics = async () => {
        try {
            const res = await fetch("/api/super-admin/analytics");
            if (!res.ok) {
                if (res.status === 401 || res.status === 403) {
                    router.push("/super-admin/login");
                    return;
                }
                throw new Error("Failed to fetch analytics");
            }
            const data = await res.json();
            setAnalytics(data);
        } catch (error) {
            console.error("Error fetching analytics:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleLogout = async () => {
        await fetch("/api/auth/logout", { method: "POST" });
        router.push("/super-admin/login");
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
                <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-yellow-400"></div>
            </div>
        );
    }

    if (!analytics) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
                <p className="text-white">Failed to load analytics</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-white mb-2">Dashboard Overview</h1>
                <p className="text-white/60">Welcome back, Super Admin. Here's what's happening today.</p>
            </div>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Key Metrics */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {/* Total Schools */}
                    <MetricCard
                        title="Total Schools"
                        value={analytics.metrics.totalSchools}
                        subtitle={`${analytics.metrics.schoolsThisMonth} this month`}
                        icon={
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                        }
                        gradient="from-blue-500 to-cyan-500"
                    />

                    {/* Active Subscriptions */}
                    <MetricCard
                        title="Active Subscriptions"
                        value={analytics.metrics.activeSchools}
                        subtitle={`${analytics.metrics.trialSchools} on trial`}
                        icon={
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        }
                        gradient="from-green-500 to-emerald-500"
                    />

                    {/* Total Users */}
                    <MetricCard
                        title="Total Users"
                        value={analytics.metrics.totalUsers.toLocaleString()}
                        subtitle={`${analytics.metrics.userBreakdown.students} students`}
                        icon={
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        }
                        gradient="from-purple-500 to-pink-500"
                    />

                    {/* MRR */}
                    <MetricCard
                        title="Monthly Revenue"
                        value={`$${analytics.metrics.mrr.toLocaleString()}`}
                        subtitle="MRR"
                        icon={
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        }
                        gradient="from-yellow-500 to-orange-500"
                    />
                </div>

                {/* Charts Row */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                    {/* Subscription Plans */}
                    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                        <h3 className="text-xl font-semibold text-white mb-4">Subscription Plans</h3>
                        <div className="space-y-4">
                            <PlanBar
                                label="Free Plan"
                                count={analytics.planDistribution.FREE}
                                total={analytics.metrics.totalSchools}
                                color="bg-gray-400"
                            />
                            <PlanBar
                                label="Monthly Plan"
                                count={analytics.planDistribution.MONTHLY}
                                total={analytics.metrics.totalSchools}
                                color="bg-blue-500"
                            />
                            <PlanBar
                                label="Yearly Plan"
                                count={analytics.planDistribution.YEARLY}
                                total={analytics.metrics.totalSchools}
                                color="bg-green-500"
                            />
                        </div>
                    </div>

                    {/* Growth Trend */}
                    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                        <h3 className="text-xl font-semibold text-white mb-4">School Growth (6 Months)</h3>
                        <div className="flex items-end justify-between h-48 gap-2">
                            {analytics.monthlyGrowth.map((data, index) => (
                                <div key={index} className="flex-1 flex flex-col items-center">
                                    <div className="w-full bg-gradient-to-t from-yellow-500 to-orange-500 rounded-t-lg transition-all hover:opacity-80"
                                        style={{ height: `${Math.max((data.schools / Math.max(...analytics.monthlyGrowth.map(d => d.schools))) * 100, 5)}%` }}
                                    ></div>
                                    <p className="text-white text-xs mt-2">{data.month}</p>
                                    <p className="text-white/60 text-xs">{data.schools}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Recent Schools */}
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                    <h3 className="text-xl font-semibold text-white mb-4">Recent Schools</h3>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-white/10">
                                    <th className="text-left text-white/70 font-medium py-3 px-4">School Name</th>
                                    <th className="text-left text-white/70 font-medium py-3 px-4">Slug</th>
                                    <th className="text-left text-white/70 font-medium py-3 px-4">Plan</th>
                                    <th className="text-left text-white/70 font-medium py-3 px-4">Status</th>
                                    <th className="text-left text-white/70 font-medium py-3 px-4">Users</th>
                                    <th className="text-left text-white/70 font-medium py-3 px-4">Created</th>
                                </tr>
                            </thead>
                            <tbody>
                                {analytics.recentSchools.map((school) => (
                                    <tr key={school.id} className="border-b border-white/5 hover:bg-white/5 transition">
                                        <td className="py-3 px-4 text-white font-medium">{school.name}</td>
                                        <td className="py-3 px-4 text-white/70">{school.slug}</td>
                                        <td className="py-3 px-4">
                                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${school.plan === 'YEARLY' ? 'bg-green-500/20 text-green-300' :
                                                school.plan === 'MONTHLY' ? 'bg-blue-500/20 text-blue-300' :
                                                    'bg-gray-500/20 text-gray-300'
                                                }`}>
                                                {school.plan}
                                            </span>
                                        </td>
                                        <td className="py-3 px-4">
                                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${school.status === 'ACTIVE' ? 'bg-green-500/20 text-green-300' :
                                                school.status === 'TRIAL' ? 'bg-yellow-500/20 text-yellow-300' :
                                                    'bg-red-500/20 text-red-300'
                                                }`}>
                                                {school.status}
                                            </span>
                                        </td>
                                        <td className="py-3 px-4 text-white/70">{school.userCount}</td>
                                        <td className="py-3 px-4 text-white/70">
                                            {new Date(school.createdAt).toLocaleDateString()}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </div>
    );
}

// Metric Card Component
function MetricCard({
    title,
    value,
    subtitle,
    icon,
    gradient,
}: {
    title: string;
    value: string | number;
    subtitle: string;
    icon: React.ReactNode;
    gradient: string;
}) {
    return (
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all hover:scale-105">
            <div className="flex items-start justify-between mb-4">
                <div className={`p-3 bg-gradient-to-br ${gradient} rounded-xl text-white`}>
                    {icon}
                </div>
            </div>
            <h3 className="text-white/70 text-sm font-medium mb-1">{title}</h3>
            <p className="text-3xl font-bold text-white mb-1">{value}</p>
            <p className="text-white/50 text-xs">{subtitle}</p>
        </div>
    );
}

// Plan Bar Component
function PlanBar({
    label,
    count,
    total,
    color,
}: {
    label: string;
    count: number;
    total: number;
    color: string;
}) {
    const percentage = total > 0 ? (count / total) * 100 : 0;

    return (
        <div>
            <div className="flex justify-between text-sm text-white/70 mb-2">
                <span>{label}</span>
                <span>{count} schools ({percentage.toFixed(1)}%)</span>
            </div>
            <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
                <div
                    className={`${color} h-full rounded-full transition-all duration-500`}
                    style={{ width: `${percentage}%` }}
                ></div>
            </div>
        </div>
    );
}
