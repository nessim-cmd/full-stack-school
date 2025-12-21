"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type Invoice = {
    id: string;
    amount: number;
    status: string;
    dueDate: string;
    paidAt: string | null;
    plan: string;
    createdAt: string;
    school: {
        name: string;
        slug: string;
    };
};

type Summary = {
    totalRevenue: number;
    pendingAmount: number;
    overdueAmount: number;
    totalInvoices: number;
};

export default function BillingPage() {
    const [invoices, setInvoices] = useState<Invoice[]>([]);
    const [summary, setSummary] = useState<Summary | null>(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        fetchInvoices();
    }, []);

    const fetchInvoices = async () => {
        try {
            const res = await fetch("/api/super-admin/billing");
            if (!res.ok) {
                if (res.status === 401 || res.status === 403) {
                    router.push("/super-admin/login");
                    return;
                }
                throw new Error("Failed to fetch invoices");
            }
            const data = await res.json();
            setInvoices(data.invoices);
            setSummary(data.summary);
        } catch (error) {
            console.error("Error fetching invoices:", error);
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
                    <h1 className="text-3xl font-bold text-white mb-2">Billing & Invoices</h1>
                    <p className="text-white/60">Track payments and revenue history</p>
                </div>
            </div>

            {/* Summary Cards */}
            {summary && (
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                        <h3 className="text-white/60 text-sm font-medium mb-1">Total Revenue</h3>
                        <p className="text-3xl font-bold text-white">${summary.totalRevenue.toFixed(2)}</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                        <h3 className="text-white/60 text-sm font-medium mb-1">Pending Amount</h3>
                        <p className="text-3xl font-bold text-yellow-400">${summary.pendingAmount.toFixed(2)}</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                        <h3 className="text-white/60 text-sm font-medium mb-1">Overdue Amount</h3>
                        <p className="text-3xl font-bold text-red-400">${summary.overdueAmount.toFixed(2)}</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                        <h3 className="text-white/60 text-sm font-medium mb-1">Total Invoices</h3>
                        <p className="text-3xl font-bold text-white">{summary.totalInvoices}</p>
                    </div>
                </div>
            )}

            {/* Invoices Table */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 overflow-hidden">
                {invoices.length === 0 ? (
                    <div className="p-12 text-center">
                        <p className="text-white/70">No invoices found</p>
                    </div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-white/5">
                                <tr className="border-b border-white/10">
                                    <th className="text-left text-white/70 font-medium py-4 px-6">Invoice ID</th>
                                    <th className="text-left text-white/70 font-medium py-4 px-6">School</th>
                                    <th className="text-left text-white/70 font-medium py-4 px-6">Amount</th>
                                    <th className="text-left text-white/70 font-medium py-4 px-6">Status</th>
                                    <th className="text-left text-white/70 font-medium py-4 px-6">Plan</th>
                                    <th className="text-left text-white/70 font-medium py-4 px-6">Due Date</th>
                                    <th className="text-left text-white/70 font-medium py-4 px-6">Paid Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {invoices.map((invoice) => (
                                    <tr key={invoice.id} className="border-b border-white/5 hover:bg-white/5 transition">
                                        <td className="py-4 px-6">
                                            <code className="text-white/70 bg-white/10 px-2 py-1 rounded text-xs">
                                                {invoice.id.slice(0, 8)}...
                                            </code>
                                        </td>
                                        <td className="py-4 px-6">
                                            <div>
                                                <p className="text-white font-medium">{invoice.school.name}</p>
                                                <p className="text-white/50 text-xs">{invoice.school.slug}</p>
                                            </div>
                                        </td>
                                        <td className="py-4 px-6 text-white font-medium">
                                            ${invoice.amount.toFixed(2)}
                                        </td>
                                        <td className="py-4 px-6">
                                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${invoice.status === 'PAID' ? 'bg-green-500/20 text-green-300' :
                                                    invoice.status === 'PENDING' ? 'bg-yellow-500/20 text-yellow-300' :
                                                        invoice.status === 'OVERDUE' ? 'bg-red-500/20 text-red-300' :
                                                            'bg-gray-500/20 text-gray-300'
                                                }`}>
                                                {invoice.status}
                                            </span>
                                        </td>
                                        <td className="py-4 px-6">
                                            <span className="text-white/70 text-sm">{invoice.plan}</span>
                                        </td>
                                        <td className="py-4 px-6 text-white/70 text-sm">
                                            {new Date(invoice.dueDate).toLocaleDateString()}
                                        </td>
                                        <td className="py-4 px-6 text-white/70 text-sm">
                                            {invoice.paidAt ? new Date(invoice.paidAt).toLocaleDateString() : '-'}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
}
