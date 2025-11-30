"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type Subscription = {
    id: string;
    schoolName: string;
    slug: string;
    plan: string;
    status: string;
    users: number;
    mrr: number;
    trialEndsAt: string;
    nextBillingDate: string;
    lastPayment: {
        amount: number;
        status: string;
        date: string;
    } | null;
};

type Summary = {
    totalMRR: number;
    activeSubscriptions: number;
    trialSubscriptions: number;
    totalSchools: number;
};

export default function SubscriptionsPage() {
    const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);
    const [summary, setSummary] = useState<Summary | null>(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        fetchSubscriptions();
    }, []);

    const fetchSubscriptions = async () => {
        try {
            const res = await fetch("/api/super-admin/subscriptions");
            if (!res.ok) {
                if (res.status === 401 || res.status === 403) {
                    router.push("/super-admin/login");
                    return;
                }
                throw new Error("Failed to fetch subscriptions");
            }
            const data = await res.json();
            setSubscriptions(data.subscriptions);
            setSummary(data.summary);
        } catch (error) {
            console.error("Error fetching subscriptions:", error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yellow-400"></div>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-white mb-2">Subscriptions</h1>
                    <p className="text-white/60">Manage school subscriptions and revenue</p>
                </div>
            </div>

            {/* Summary Cards */}
            {summary && (
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                        <h3 className="text-white/60 text-sm font-medium mb-1">Monthly Recurring Revenue</h3>
                        <p className="text-3xl font-bold text-white">${summary.totalMRR.toFixed(2)}</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                        <h3 className="text-white/60 text-sm font-medium mb-1">Active Subscriptions</h3>
                        <p className="text-3xl font-bold text-white">{summary.activeSubscriptions}</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                        <h3 className="text-white/60 text-sm font-medium mb-1">Active Trials</h3>
                        <p className="text-3xl font-bold text-white">{summary.trialSubscriptions}</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                        <h3 className="text-white/60 text-sm font-medium mb-1">Total Schools</h3>
                        <p className="text-3xl font-bold text-white">{summary.totalSchools}</p>
                    </div>
                </div>
            )}

            {/* Subscriptions Table */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-white/5">
                            <tr className="border-b border-white/10">
                                <th className="text-left text-white/70 font-medium py-4 px-6">School</th>
                                <th className="text-left text-white/70 font-medium py-4 px-6">Plan</th>
                                <th className="text-left text-white/70 font-medium py-4 px-6">Status</th>
                                <th className="text-left text-white/70 font-medium py-4 px-6">MRR</th>
                                <th className="text-left text-white/70 font-medium py-4 px-6">Next Billing</th>
                                <th className="text-left text-white/70 font-medium py-4 px-6">Last Payment</th>
                            </tr>
                        </thead>
                        <tbody>
                            {subscriptions.map((sub) => (
                                <tr key={sub.id} className="border-b border-white/5 hover:bg-white/5 transition">
                                    <td className="py-4 px-6">
                                        <div>
                                            <p className="text-white font-medium">{sub.schoolName}</p>
                                            <p className="text-white/50 text-xs">{sub.slug}</p>
                                        </div>
                                    </td>
                                    <td className="py-4 px-6">
                                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${sub.plan === 'YEARLY' ? 'bg-green-500/20 text-green-300' :
                                                sub.plan === 'MONTHLY' ? 'bg-blue-500/20 text-blue-300' :
                                                    'bg-gray-500/20 text-gray-300'
                                            }`}>
                                            {sub.plan}
                                        </span>
                                    </td>
                                    <td className="py-4 px-6">
                                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${sub.status === 'ACTIVE' ? 'bg-green-500/20 text-green-300' :
                                                sub.status === 'TRIAL' ? 'bg-yellow-500/20 text-yellow-300' :
                                                    sub.status === 'PAST_DUE' ? 'bg-orange-500/20 text-orange-300' :
                                                        'bg-red-500/20 text-red-300'
                                            }`}>
                                            {sub.status}
                                        </span>
                                    </td>
                                    <td className="py-4 px-6 text-white font-medium">
                                        ${sub.mrr.toFixed(2)}
                                    </td>
                                    <td className="py-4 px-6 text-white/70 text-sm">
                                        {new Date(sub.nextBillingDate).toLocaleDateString()}
                                        {sub.status === 'TRIAL' && (
                                            <span className="ml-2 text-xs text-yellow-500">(Trial Ends)</span>
                                        )}
                                    </td>
                                    <td className="py-4 px-6">
                                        {sub.lastPayment ? (
                                            <div>
                                                <p className="text-white text-sm">${sub.lastPayment.amount}</p>
                                                <p className="text-white/50 text-xs">{new Date(sub.lastPayment.date).toLocaleDateString()}</p>
                                            </div>
                                        ) : (
                                            <span className="text-white/30 text-sm">-</span>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
