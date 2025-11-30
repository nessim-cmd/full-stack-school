"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type AuditLog = {
    id: number;
    action: string;
    entity: string;
    entityId: string;
    description: string;
    metadata: string | null;
    createdAt: string;
    superAdmin: {
        name: string;
        email: string;
    };
};

type Pagination = {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
};

export default function AuditLogsPage() {
    const [logs, setLogs] = useState<AuditLog[]>([]);
    const [pagination, setPagination] = useState<Pagination>({
        page: 1,
        limit: 10,
        total: 0,
        totalPages: 0,
    });
    const [loading, setLoading] = useState(true);
    const [actionFilter, setActionFilter] = useState("all");
    const router = useRouter();

    useEffect(() => {
        fetchLogs();
    }, [pagination.page, actionFilter]);

    const fetchLogs = async () => {
        try {
            setLoading(true);
            const params = new URLSearchParams({
                page: pagination.page.toString(),
                limit: pagination.limit.toString(),
                action: actionFilter,
            });

            const res = await fetch(`/api/super-admin/logs?${params}`);
            if (!res.ok) {
                if (res.status === 401 || res.status === 403) {
                    router.push("/super-admin/login");
                    return;
                }
                throw new Error("Failed to fetch logs");
            }

            const data = await res.json();
            setLogs(data.logs);
            setPagination(data.pagination);
        } catch (error) {
            console.error("Error fetching logs:", error);
        } finally {
            setLoading(false);
        }
    };

    const getActionColor = (action: string) => {
        if (action.includes("create")) return "text-green-400 bg-green-400/10";
        if (action.includes("delete")) return "text-red-400 bg-red-400/10";
        if (action.includes("update")) return "text-blue-400 bg-blue-400/10";
        return "text-gray-400 bg-gray-400/10";
    };

    const formatAction = (action: string) => {
        return action.split("_").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-white mb-2">Audit Logs</h1>
                    <p className="text-white/60">Track system activities and changes</p>
                </div>

                {/* Filter */}
                <select
                    value={actionFilter}
                    onChange={(e) => setActionFilter(e.target.value)}
                    className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                >
                    <option value="all">All Actions</option>
                    <option value="school_created">School Created</option>
                    <option value="school_updated">School Updated</option>
                    <option value="school_deleted">School Deleted</option>
                    <option value="login">Login</option>
                </select>
            </div>

            {/* Logs Table */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 overflow-hidden">
                {loading ? (
                    <div className="p-12 text-center">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yellow-400 mx-auto"></div>
                    </div>
                ) : logs.length === 0 ? (
                    <div className="p-12 text-center">
                        <p className="text-white/70">No logs found</p>
                    </div>
                ) : (
                    <>
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="bg-white/5">
                                    <tr className="border-b border-white/10">
                                        <th className="text-left text-white/70 font-medium py-4 px-6">Action</th>
                                        <th className="text-left text-white/70 font-medium py-4 px-6">Description</th>
                                        <th className="text-left text-white/70 font-medium py-4 px-6">Admin</th>
                                        <th className="text-left text-white/70 font-medium py-4 px-6">Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {logs.map((log) => (
                                        <tr key={log.id} className="border-b border-white/5 hover:bg-white/5 transition">
                                            <td className="py-4 px-6">
                                                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getActionColor(log.action)}`}>
                                                    {formatAction(log.action)}
                                                </span>
                                            </td>
                                            <td className="py-4 px-6">
                                                <p className="text-white text-sm">{log.description}</p>
                                                {log.metadata && (
                                                    <p className="text-white/40 text-xs mt-1 font-mono truncate max-w-md">
                                                        {log.metadata}
                                                    </p>
                                                )}
                                            </td>
                                            <td className="py-4 px-6">
                                                <div className="flex items-center gap-2">
                                                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white text-xs font-bold">
                                                        {log.superAdmin.name.charAt(0)}
                                                    </div>
                                                    <span className="text-white/80 text-sm">{log.superAdmin.name}</span>
                                                </div>
                                            </td>
                                            <td className="py-4 px-6 text-white/60 text-sm">
                                                {new Date(log.createdAt).toLocaleString()}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Pagination */}
                        {pagination.totalPages > 1 && (
                            <div className="p-4 border-t border-white/10 flex items-center justify-between">
                                <p className="text-white/70 text-sm">
                                    Showing {((pagination.page - 1) * pagination.limit) + 1} to {Math.min(pagination.page * pagination.limit, pagination.total)} of {pagination.total} logs
                                </p>
                                <div className="flex gap-2">
                                    <button
                                        onClick={() => setPagination({ ...pagination, page: pagination.page - 1 })}
                                        disabled={pagination.page === 1}
                                        className="px-4 py-2 bg-white/10 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white/20 transition"
                                    >
                                        Previous
                                    </button>
                                    <button
                                        onClick={() => setPagination({ ...pagination, page: pagination.page + 1 })}
                                        disabled={pagination.page === pagination.totalPages}
                                        className="px-4 py-2 bg-white/10 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white/20 transition"
                                    >
                                        Next
                                    </button>
                                </div>
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
}
