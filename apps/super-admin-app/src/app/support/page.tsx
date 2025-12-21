"use client";

import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";

type Ticket = {
    id: string;
    subject: string;
    message: string;
    status: "OPEN" | "IN_PROGRESS" | "CLOSED";
    priority: "LOW" | "MEDIUM" | "HIGH" | "URGENT";
    createdAt: string;
    updatedAt: string;
    school: {
        name: string;
        slug: string;
    };
    _count: {
        replies: number;
    };
};

type Reply = {
    id: string;
    message: string;
    isAdmin: boolean;
    createdAt: string;
};

type TicketDetail = Ticket & {
    replies: Reply[];
};

type TicketStats = {
    total: number;
    open: number;
    inProgress: number;
    closed: number;
    urgent: number;
    avgResponseTime: string;
};

export default function SupportPage() {
    const [tickets, setTickets] = useState<Ticket[]>([]);
    const [loading, setLoading] = useState(true);
    const [statusFilter, setStatusFilter] = useState("ALL");
    const [priorityFilter, setPriorityFilter] = useState("ALL");
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedTicket, setSelectedTicket] = useState<TicketDetail | null>(null);
    const [replyMessage, setReplyMessage] = useState("");
    const [sendingReply, setSendingReply] = useState(false);
    const [stats, setStats] = useState<TicketStats>({
        total: 0,
        open: 0,
        inProgress: 0,
        closed: 0,
        urgent: 0,
        avgResponseTime: "N/A"
    });
    const router = useRouter();

    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [selectedTicketIds, setSelectedTicketIds] = useState<Set<string>>(new Set());
    const [isBulkActionLoading, setIsBulkActionLoading] = useState(false);
    const abortControllerRef = useRef<AbortController | null>(null);

    useEffect(() => {
        fetchTickets();

        // Listen for real-time updates
        const eventSource = new EventSource("/api/sse");

        eventSource.onmessage = (event) => {
            try {
                if (event.data === ": heartbeat") return;
                const notification = JSON.parse(event.data);

                // Refresh if new ticket created or replied
                if (notification.type === "ticket_created" || notification.type === "ticket_reply") {
                    if (selectedTicket && notification.type === "ticket_reply") {
                        fetchTicketDetails(selectedTicket.id);
                    }
                    fetchTickets();
                }
            } catch (error) {
                console.error("Error parsing notification:", error);
            }
        };

        return () => {
            eventSource.close();
        };
    }, [statusFilter, priorityFilter, selectedTicket, page]);

    const fetchTickets = async (pageOverride?: number) => {
        // Cancel previous request
        if (abortControllerRef.current) {
            abortControllerRef.current.abort();
        }
        const controller = new AbortController();
        abortControllerRef.current = controller;

        try {
            const currentPage = pageOverride ?? page;
            const res = await fetch(`/api/super-admin/support?status=${statusFilter}&priority=${priorityFilter}&page=${currentPage}&limit=10&search=${encodeURIComponent(searchQuery)}`, {
                signal: controller.signal
            });
            if (!res.ok) {
                if (res.status === 401 || res.status === 403) {
                    router.push("/super-admin/login");
                    return;
                }
                throw new Error("Failed to fetch tickets");
            }
            const data = await res.json();
            setTickets(data.tickets);
            setStats(data.stats);
            setTotalPages(data.pagination.totalPages);
        } catch (error: any) {
            if (error.name === 'AbortError') return;
            console.error("Error fetching tickets:", error);
        } finally {
            setLoading(false);
        }
    };

    // Debounce search
    useEffect(() => {
        const timer = setTimeout(() => {
            setPage(1); // Reset to page 1 on search
            fetchTickets(1); // Force page 1
        }, 500);

        return () => clearTimeout(timer);
    }, [searchQuery]);

    // Fetch on filters change
    useEffect(() => {
        setPage(1); // Reset to page 1 on filter change
        fetchTickets(1); // Force page 1
    }, [statusFilter, priorityFilter]);

    // Fetch on page change
    useEffect(() => {
        fetchTickets();
    }, [page]);

    const fetchTicketDetails = async (id: string) => {
        try {
            const res = await fetch(`/api/super-admin/support/${id}`);
            if (!res.ok) throw new Error("Failed to fetch ticket details");
            const data = await res.json();
            setSelectedTicket(data.ticket);
        } catch (error) {
            console.error("Error fetching ticket details:", error);
        }
    };

    const handleReply = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!selectedTicket || !replyMessage.trim()) return;

        setSendingReply(true);
        try {
            const res = await fetch(`/api/super-admin/support/${selectedTicket.id}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    message: replyMessage,
                    status: selectedTicket.status === "OPEN" ? "IN_PROGRESS" : selectedTicket.status,
                }),
            });

            if (!res.ok) throw new Error("Failed to send reply");

            await fetchTicketDetails(selectedTicket.id);
            setReplyMessage("");
            fetchTickets();
        } catch (error) {
            console.error("Error sending reply:", error);
            alert("Failed to send reply. Please try again.");
        } finally {
            setSendingReply(false);
        }
    };

    const handleStatusChange = async (status: string) => {
        if (!selectedTicket) return;
        try {
            const res = await fetch(`/api/super-admin/support/${selectedTicket.id}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ status }),
            });
            if (!res.ok) throw new Error("Failed to update status");

            setSelectedTicket({ ...selectedTicket, status: status as any });
            fetchTickets();
        } catch (error) {
            console.error("Error updating status:", error);
            alert("Failed to update status. Please try again.");
        }
    };

    const toggleTicketSelection = (id: string, e: React.MouseEvent) => {
        e.stopPropagation();
        const newSelection = new Set(selectedTicketIds);
        if (newSelection.has(id)) {
            newSelection.delete(id);
        } else {
            newSelection.add(id);
        }
        setSelectedTicketIds(newSelection);
    };

    const handleSelectAll = () => {
        if (selectedTicketIds.size === tickets.length) {
            setSelectedTicketIds(new Set());
        } else {
            setSelectedTicketIds(new Set(tickets.map(t => t.id)));
        }
    };

    const handleBulkAction = async (action: "UPDATE_STATUS" | "UPDATE_PRIORITY", value: string) => {
        if (selectedTicketIds.size === 0) return;
        if (!confirm(`Are you sure you want to update ${selectedTicketIds.size} tickets?`)) return;

        setIsBulkActionLoading(true);
        try {
            const res = await fetch("/api/super-admin/support/bulk", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    ticketIds: Array.from(selectedTicketIds),
                    action,
                    value,
                }),
            });

            if (!res.ok) throw new Error("Failed to perform bulk action");

            setSelectedTicketIds(new Set());
            fetchTickets();
            // Refresh detail if selected ticket was modified
            if (selectedTicket && selectedTicketIds.has(selectedTicket.id)) {
                fetchTicketDetails(selectedTicket.id);
            }
        } catch (error) {
            console.error("Error performing bulk action:", error);
            alert("Failed to perform bulk action");
        } finally {
            setIsBulkActionLoading(false);
        }
    };

    // Removed filteredTickets logic as we filter on server side now

    const getPriorityColor = (priority: string) => {
        switch (priority) {
            case "URGENT": return "text-red-400 bg-red-400/10 border-red-400/20";
            case "HIGH": return "text-orange-400 bg-orange-400/10 border-orange-400/20";
            case "MEDIUM": return "text-yellow-400 bg-yellow-400/10 border-yellow-400/20";
            default: return "text-blue-400 bg-blue-400/10 border-blue-400/20";
        }
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case "OPEN": return "text-green-400 bg-green-400/10";
            case "IN_PROGRESS": return "text-blue-400 bg-blue-400/10";
            case "CLOSED": return "text-gray-400 bg-gray-400/10";
            default: return "text-gray-400";
        }
    };

    return (
        <div className="space-y-6 relative">
            {/* Header */}
            <div>
                <h1 className="text-3xl font-bold text-white mb-2">Support Center</h1>
                <p className="text-white/60">Manage support requests from all schools</p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                <div className="bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 p-4">
                    <div className="text-white/60 text-sm mb-1">Total Tickets</div>
                    <div className="text-2xl font-bold text-white">{stats.total}</div>
                </div>
                <div className="bg-green-500/10 backdrop-blur-lg rounded-xl border border-green-500/20 p-4">
                    <div className="text-green-300/60 text-sm mb-1">Open</div>
                    <div className="text-2xl font-bold text-green-300">{stats.open}</div>
                </div>
                <div className="bg-blue-500/10 backdrop-blur-lg rounded-xl border border-blue-500/20 p-4">
                    <div className="text-blue-300/60 text-sm mb-1">In Progress</div>
                    <div className="text-2xl font-bold text-blue-300">{stats.inProgress}</div>
                </div>
                <div className="bg-gray-500/10 backdrop-blur-lg rounded-xl border border-gray-500/20 p-4">
                    <div className="text-gray-300/60 text-sm mb-1">Closed</div>
                    <div className="text-2xl font-bold text-gray-300">{stats.closed}</div>
                </div>
                <div className="bg-red-500/10 backdrop-blur-lg rounded-xl border border-red-500/20 p-4">
                    <div className="text-red-300/60 text-sm mb-1">Urgent</div>
                    <div className="text-2xl font-bold text-red-300">{stats.urgent}</div>
                </div>
                <div className="bg-purple-500/10 backdrop-blur-lg rounded-xl border border-purple-500/20 p-4">
                    <div className="text-purple-300/60 text-sm mb-1">Avg Response</div>
                    <div className="text-2xl font-bold text-purple-300">{stats.avgResponseTime}</div>
                </div>
            </div>

            {/* Filters */}
            <div className="flex flex-col md:flex-row gap-4">
                <input
                    type="text"
                    placeholder="Search tickets..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                >
                    <option value="ALL">All Status</option>
                    <option value="OPEN">Open</option>
                    <option value="IN_PROGRESS">In Progress</option>
                    <option value="CLOSED">Closed</option>
                </select>
                <select
                    value={priorityFilter}
                    onChange={(e) => setPriorityFilter(e.target.value)}
                    className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                >
                    <option value="ALL">All Priority</option>
                    <option value="URGENT">Urgent</option>
                    <option value="HIGH">High</option>
                    <option value="MEDIUM">Medium</option>
                    <option value="LOW">Low</option>
                </select>
            </div>

            {/* Bulk Actions Bar */}
            {selectedTicketIds.size > 0 && (
                <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-white text-black px-6 py-3 rounded-full shadow-2xl flex items-center gap-4 z-50 animate-in slide-in-from-bottom-5">
                    <span className="font-bold">{selectedTicketIds.size} selected</span>
                    <div className="h-4 w-px bg-gray-300"></div>
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-600">Set Status:</span>
                        <select
                            onChange={(e) => handleBulkAction("UPDATE_STATUS", e.target.value)}
                            className="text-sm border rounded px-2 py-1 bg-gray-50 hover:bg-gray-100 cursor-pointer"
                            defaultValue=""
                        >
                            <option value="" disabled>Choose...</option>
                            <option value="OPEN">Open</option>
                            <option value="IN_PROGRESS">In Progress</option>
                            <option value="CLOSED">Closed</option>
                        </select>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-600">Set Priority:</span>
                        <select
                            onChange={(e) => handleBulkAction("UPDATE_PRIORITY", e.target.value)}
                            className="text-sm border rounded px-2 py-1 bg-gray-50 hover:bg-gray-100 cursor-pointer"
                            defaultValue=""
                        >
                            <option value="" disabled>Choose...</option>
                            <option value="URGENT">Urgent</option>
                            <option value="HIGH">High</option>
                            <option value="MEDIUM">Medium</option>
                            <option value="LOW">Low</option>
                        </select>
                    </div>
                    <button
                        onClick={() => setSelectedTicketIds(new Set())}
                        className="ml-2 text-gray-500 hover:text-black"
                    >
                        Cancel
                    </button>
                </div>
            )}

            {/* Ticket List & Detail */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[calc(100vh-450px)]">
                {/* Ticket List */}
                <div className="lg:col-span-1 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 overflow-hidden flex flex-col">
                    <div className="p-4 border-b border-white/10 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                checked={tickets.length > 0 && selectedTicketIds.size === tickets.length}
                                onChange={handleSelectAll}
                                className="w-4 h-4 rounded border-gray-300 text-yellow-400 focus:ring-yellow-400 bg-white/10"
                            />
                            <h2 className="text-white font-semibold">Tickets ({tickets.length})</h2>
                        </div>
                        <button
                            onClick={() => fetchTickets()}
                            className="text-white/60 hover:text-white transition"
                            title="Refresh"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                            </svg>
                        </button>
                    </div>
                    <div className="overflow-y-auto flex-1 p-2 space-y-2">
                        {loading ? (
                            <div className="text-center py-8">
                                <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-yellow-400 mx-auto"></div>
                            </div>
                        ) : tickets.length === 0 ? (
                            <div className="text-center py-8 text-white/50">No tickets found</div>
                        ) : (
                            tickets.map((ticket) => (
                                <div
                                    key={ticket.id}
                                    onClick={() => fetchTicketDetails(ticket.id)}
                                    className={`p-4 rounded-xl cursor-pointer transition border relative group ${selectedTicket?.id === ticket.id
                                        ? "bg-white/10 border-yellow-400/50"
                                        : "bg-white/5 border-transparent hover:bg-white/10"
                                        }`}
                                >
                                    {/* Checkbox Overlay */}
                                    <div className="absolute top-4 left-4 z-10" onClick={(e) => e.stopPropagation()}>
                                        <input
                                            type="checkbox"
                                            checked={selectedTicketIds.has(ticket.id)}
                                            onChange={(e) => toggleTicketSelection(ticket.id, e as any)}
                                            className={`w-4 h-4 rounded border-gray-300 text-yellow-400 focus:ring-yellow-400 transition-opacity ${selectedTicketIds.has(ticket.id) ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
                                        />
                                    </div>

                                    <div className="flex justify-between items-start mb-2 pl-6">
                                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold border ${getPriorityColor(ticket.priority)}`}>
                                            {ticket.priority}
                                        </span>
                                        <span className="text-white/40 text-xs">{new Date(ticket.updatedAt).toLocaleDateString()}</span>
                                    </div>
                                    <h3 className="text-white font-medium truncate mb-1 pl-6">{ticket.subject}</h3>
                                    <p className="text-white/60 text-sm truncate mb-2 pl-6">{ticket.school.name}</p>
                                    <div className="flex items-center gap-2 pl-6">
                                        <span className={`w-2 h-2 rounded-full ${ticket.status === 'OPEN' ? 'bg-green-400' :
                                            ticket.status === 'IN_PROGRESS' ? 'bg-blue-400' : 'bg-gray-400'
                                            }`}></span>
                                        <span className="text-white/40 text-xs">{ticket.status.replace("_", " ")}</span>
                                        {ticket._count.replies > 0 && (
                                            <>
                                                <span className="text-white/20">•</span>
                                                <span className="text-white/40 text-xs">{ticket._count.replies} {ticket._count.replies === 1 ? 'reply' : 'replies'}</span>
                                            </>
                                        )}
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                    {/* Pagination */}
                    <div className="p-4 border-t border-white/10 flex justify-between items-center text-sm text-white/60">
                        <button
                            disabled={page === 1}
                            onClick={() => setPage(p => Math.max(1, p - 1))}
                            className="hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            Previous
                        </button>
                        <span>Page {page} of {totalPages}</span>
                        <button
                            disabled={page === totalPages}
                            onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                            className="hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            Next
                        </button>
                    </div>
                </div>

                {/* Ticket Detail */}
                <div className="lg:col-span-2 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 overflow-hidden flex flex-col">
                    {selectedTicket ? (
                        <>
                            {/* Header */}
                            <div className="p-6 border-b border-white/10">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="flex-1">
                                        <h2 className="text-2xl font-bold text-white mb-2">{selectedTicket.subject}</h2>
                                        <div className="flex items-center gap-3 text-white/60 text-sm">
                                            <span className="font-medium text-yellow-400">{selectedTicket.school.name}</span>
                                            <span>•</span>
                                            <span>{new Date(selectedTicket.createdAt).toLocaleString()}</span>
                                        </div>
                                    </div>
                                    <select
                                        value={selectedTicket.status}
                                        onChange={(e) => handleStatusChange(e.target.value)}
                                        className={`px-3 py-1 rounded-lg text-sm font-medium border-none focus:ring-2 focus:ring-white/20 cursor-pointer ${getStatusColor(selectedTicket.status)}`}
                                    >
                                        <option value="OPEN">Open</option>
                                        <option value="IN_PROGRESS">In Progress</option>
                                        <option value="CLOSED">Closed</option>
                                    </select>
                                </div>
                                <div className={`inline-flex px-3 py-1 rounded-lg text-sm font-bold border ${getPriorityColor(selectedTicket.priority)}`}>
                                    {selectedTicket.priority} Priority
                                </div>
                            </div>

                            {/* Messages */}
                            <div className="flex-1 overflow-y-auto p-6 space-y-6">
                                {/* Original Message */}
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold shrink-0">
                                        {selectedTicket.school.name.charAt(0)}
                                    </div>
                                    <div className="flex-1">
                                        <div className="bg-white/5 rounded-2xl rounded-tl-none p-4">
                                            <p className="text-white/90 whitespace-pre-wrap">{selectedTicket.message}</p>
                                        </div>
                                        <p className="text-white/30 text-xs mt-2">
                                            {new Date(selectedTicket.createdAt).toLocaleString()}
                                        </p>
                                    </div>
                                </div>

                                {/* Replies */}
                                {selectedTicket.replies.map((reply) => (
                                    <div key={reply.id} className={`flex gap-4 ${reply.isAdmin ? "flex-row-reverse" : ""}`}>
                                        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold shrink-0 ${reply.isAdmin
                                            ? "bg-gradient-to-br from-yellow-400 to-orange-500 text-black"
                                            : "bg-gradient-to-br from-blue-400 to-blue-600 text-white"
                                            }`}>
                                            {reply.isAdmin ? "SA" : selectedTicket.school.name.charAt(0)}
                                        </div>
                                        <div className="flex-1">
                                            <div className={`rounded-2xl p-4 ${reply.isAdmin
                                                ? "bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-tr-none"
                                                : "bg-white/5 rounded-tl-none"
                                                }`}>
                                                <p className="text-white/90 whitespace-pre-wrap">{reply.message}</p>
                                            </div>
                                            <p className={`text-xs mt-2 ${reply.isAdmin ? "text-right text-yellow-400/50" : "text-white/30"}`}>
                                                {reply.isAdmin ? "Support Team" : selectedTicket.school.name} • {new Date(reply.createdAt).toLocaleString()}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Reply Input */}
                            {selectedTicket.status !== "CLOSED" && (
                                <div className="p-4 border-t border-white/10 bg-white/5">
                                    <form onSubmit={handleReply} className="flex gap-4">
                                        <textarea
                                            value={replyMessage}
                                            onChange={(e) => setReplyMessage(e.target.value)}
                                            placeholder="Type your reply..."
                                            className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-yellow-400 resize-none h-24"
                                            onKeyDown={(e) => {
                                                if (e.key === "Enter" && !e.shiftKey) {
                                                    e.preventDefault();
                                                    handleReply(e);
                                                }
                                            }}
                                        />
                                        <button
                                            type="submit"
                                            disabled={!replyMessage.trim() || sendingReply}
                                            className="px-6 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold rounded-xl hover:shadow-lg hover:shadow-yellow-500/50 transition disabled:opacity-50 disabled:cursor-not-allowed h-24"
                                        >
                                            {sendingReply ? "Sending..." : "Send Reply"}
                                        </button>
                                    </form>
                                </div>
                            )}
                        </>
                    ) : (
                        <div className="flex flex-col items-center justify-center h-full text-white/30">
                            <svg className="w-16 h-16 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                            </svg>
                            <p className="text-lg">Select a ticket to view details</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
