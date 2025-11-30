"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type Ticket = {
    id: string;
    subject: string;
    message: string;
    status: "OPEN" | "IN_PROGRESS" | "CLOSED";
    priority: "LOW" | "MEDIUM" | "HIGH" | "URGENT";
    createdAt: string;
    updatedAt: string;
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

export default function SupportPage() {
    const [tickets, setTickets] = useState<Ticket[]>([]);
    const [selectedTicket, setSelectedTicket] = useState<TicketDetail | null>(null);
    const [loading, setLoading] = useState(true);
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [replyMessage, setReplyMessage] = useState("");
    const [sendingReply, setSendingReply] = useState(false);
    const [formData, setFormData] = useState({
        subject: "",
        message: "",
        priority: "MEDIUM",
    });
    const [submitting, setSubmitting] = useState(false);
    const router = useRouter();

    useEffect(() => {
        fetchTickets();

        // Listen for real-time updates
        const eventSource = new EventSource("/api/sse");

        eventSource.onmessage = (event) => {
            try {
                if (event.data === ": heartbeat") return;
                const notification = JSON.parse(event.data);

                // If it's a ticket reply, refresh the current ticket if open, or just the list
                if (notification.type === "ticket_reply") {
                    if (selectedTicket) {
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
    }, [selectedTicket]); // Re-run if selectedTicket changes so we have the latest ID in closure if needed, 
    // but actually we just need to know if we should fetch details.
    // Better to keep selectedTicket in a ref if we want to avoid re-subscribing.
    // For simplicity, let's just re-subscribe or use a ref.
    // Actually, let's just refresh list always, and details if ID matches.
    // But we can't access selectedTicket state inside the effect if it's stale.
    // Let's use a functional update or just refresh everything.

    const fetchTickets = async () => {
        try {
            const res = await fetch("/api/tickets");
            if (!res.ok) {
                if (res.status === 401 || res.status === 403) {
                    router.push("/login");
                    return;
                }
                throw new Error("Failed to fetch tickets");
            }
            const data = await res.json();
            setTickets(data.tickets);
        } catch (error) {
            console.error("Error fetching tickets:", error);
        } finally {
            setLoading(false);
        }
    };

    const fetchTicketDetails = async (id: string) => {
        try {
            const res = await fetch(`/api/tickets/${id}`);
            if (!res.ok) throw new Error("Failed to fetch ticket details");
            const data = await res.json();
            setSelectedTicket(data.ticket);
        } catch (error) {
            console.error("Error fetching ticket details:", error);
        }
    };

    const handleCreateTicket = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitting(true);
        try {
            const res = await fetch("/api/tickets", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (!res.ok) throw new Error("Failed to create ticket");

            await fetchTickets();
            setIsCreateModalOpen(false);
            setFormData({ subject: "", message: "", priority: "MEDIUM" });
        } catch (error) {
            console.error("Error creating ticket:", error);
            alert("Failed to create ticket. Please try again.");
        } finally {
            setSubmitting(false);
        }
    };

    const handleReply = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!selectedTicket) return;

        setSendingReply(true);
        try {
            const res = await fetch(`/api/tickets/${selectedTicket.id}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message: replyMessage }),
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

    const getPriorityColor = (priority: string) => {
        switch (priority) {
            case "URGENT":
                return "text-red-600 bg-red-50 border-red-200";
            case "HIGH":
                return "text-orange-600 bg-orange-50 border-orange-200";
            case "MEDIUM":
                return "text-yellow-600 bg-yellow-50 border-yellow-200";
            default:
                return "text-blue-600 bg-blue-50 border-blue-200";
        }
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case "OPEN":
                return "text-green-600 bg-green-50";
            case "IN_PROGRESS":
                return "text-blue-600 bg-blue-50";
            case "CLOSED":
                return "text-gray-600 bg-gray-50";
            default:
                return "text-gray-600";
        }
    };

    return (
        <div className="p-4">
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h1 className="text-2xl font-bold">Support Center</h1>
                    <p className="text-gray-500 text-sm">Get help from our support team</p>
                </div>
                <button
                    onClick={() => setIsCreateModalOpen(true)}
                    className="px-4 py-2 bg-lamaSkyLight text-white rounded-md hover:bg-lamaSky transition"
                >
                    + New Ticket
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 h-[calc(100vh-200px)]">
                {/* Tickets List */}
                <div className="lg:col-span-1 bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
                    <div className="p-4 border-b bg-gray-50">
                        <h2 className="font-semibold">Your Tickets</h2>
                    </div>
                    <div className="overflow-y-auto flex-1 p-2 space-y-2">
                        {loading ? (
                            <div className="text-center py-8">
                                <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-lamaSky mx-auto"></div>
                            </div>
                        ) : tickets.length === 0 ? (
                            <div className="text-center py-8 text-gray-500">
                                <p>No tickets yet</p>
                                <p className="text-xs mt-1">Create your first support ticket</p>
                            </div>
                        ) : (
                            tickets.map((ticket) => (
                                <div
                                    key={ticket.id}
                                    onClick={() => fetchTicketDetails(ticket.id)}
                                    className={`p-3 rounded-lg cursor-pointer transition border ${selectedTicket?.id === ticket.id
                                        ? "bg-lamaSkyLight border-lamaSky"
                                        : "bg-gray-50 border-transparent hover:bg-gray-100"
                                        }`}
                                >
                                    <div className="flex justify-between items-start mb-2">
                                        <span
                                            className={`px-2 py-0.5 rounded text-[10px] font-bold border ${getPriorityColor(
                                                ticket.priority
                                            )}`}
                                        >
                                            {ticket.priority}
                                        </span>
                                        <span className="text-gray-400 text-xs">
                                            {new Date(ticket.updatedAt).toLocaleDateString()}
                                        </span>
                                    </div>
                                    <h3 className="font-medium text-sm truncate">{ticket.subject}</h3>
                                    <div className="flex items-center gap-2 mt-2">
                                        <span
                                            className={`w-2 h-2 rounded-full ${ticket.status === "OPEN"
                                                ? "bg-green-500"
                                                : ticket.status === "IN_PROGRESS"
                                                    ? "bg-blue-500"
                                                    : "bg-gray-400"
                                                }`}
                                        ></span>
                                        <span className="text-gray-500 text-xs">
                                            {ticket.status.replace("_", " ")}
                                        </span>
                                        {ticket._count.replies > 0 && (
                                            <>
                                                <span className="text-gray-300">•</span>
                                                <span className="text-gray-500 text-xs">
                                                    {ticket._count.replies} {ticket._count.replies === 1 ? "reply" : "replies"}
                                                </span>
                                            </>
                                        )}
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>

                {/* Ticket Detail */}
                <div className="lg:col-span-2 bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
                    {selectedTicket ? (
                        <>
                            {/* Header */}
                            <div className="p-4 border-b bg-gray-50 flex justify-between items-start">
                                <div>
                                    <h2 className="text-xl font-bold mb-1">{selectedTicket.subject}</h2>
                                    <div className="flex items-center gap-3 text-gray-600 text-sm">
                                        <span>{new Date(selectedTicket.createdAt).toLocaleString()}</span>
                                    </div>
                                </div>
                                <span
                                    className={`px-3 py-1 rounded-lg text-sm font-medium ${getStatusColor(
                                        selectedTicket.status
                                    )}`}
                                >
                                    {selectedTicket.status.replace("_", " ")}
                                </span>
                            </div>

                            {/* Messages */}
                            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
                                {/* Original Message */}
                                <div className="flex gap-3">
                                    <div className="w-10 h-10 rounded-full bg-lamaSkyLight flex items-center justify-center text-white font-bold shrink-0">
                                        Y
                                    </div>
                                    <div className="bg-white rounded-2xl rounded-tl-none p-4 max-w-[80%] shadow-sm">
                                        <p className="text-gray-800 whitespace-pre-wrap">{selectedTicket.message}</p>
                                        <p className="text-gray-400 text-xs mt-2">
                                            {new Date(selectedTicket.createdAt).toLocaleString()}
                                        </p>
                                    </div>
                                </div>

                                {/* Replies */}
                                {selectedTicket.replies.map((reply) => (
                                    <div
                                        key={reply.id}
                                        className={`flex gap-3 ${reply.isAdmin ? "" : "flex-row-reverse"}`}
                                    >
                                        <div
                                            className={`w-10 h-10 rounded-full flex items-center justify-center font-bold shrink-0 ${reply.isAdmin
                                                ? "bg-green-500 text-white"
                                                : "bg-lamaSkyLight text-white"
                                                }`}
                                        >
                                            {reply.isAdmin ? "S" : "Y"}
                                        </div>
                                        <div
                                            className={`rounded-2xl p-4 max-w-[80%] shadow-sm ${reply.isAdmin
                                                ? "bg-green-50 rounded-tl-none"
                                                : "bg-white rounded-tr-none"
                                                }`}
                                        >
                                            <p className="text-gray-800 whitespace-pre-wrap">{reply.message}</p>
                                            <p
                                                className={`text-xs mt-2 ${reply.isAdmin ? "text-green-600" : "text-gray-400"
                                                    }`}
                                            >
                                                {reply.isAdmin ? "Support Team" : "You"} •{" "}
                                                {new Date(reply.createdAt).toLocaleString()}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Reply Input */}
                            {selectedTicket.status !== "CLOSED" && (
                                <div className="p-4 border-t bg-white">
                                    <form onSubmit={handleReply} className="flex gap-3">
                                        <textarea
                                            value={replyMessage}
                                            onChange={(e) => setReplyMessage(e.target.value)}
                                            placeholder="Type your message..."
                                            className="flex-1 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-lamaSky resize-none"
                                            rows={3}
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
                                            className="px-6 bg-lamaSkyLight hover:bg-lamaSky text-white rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed h-fit self-end"
                                        >
                                            {sendingReply ? "Sending..." : "Send"}
                                        </button>
                                    </form>
                                </div>
                            )}
                        </>
                    ) : (
                        <div className="flex items-center justify-center h-full text-gray-400">
                            Select a ticket to view details
                        </div>
                    )}
                </div>
            </div>

            {/* Create Ticket Modal */}
            {isCreateModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                    <div className="bg-white rounded-xl p-8 w-full max-w-md shadow-2xl">
                        <h2 className="text-2xl font-bold mb-6">Create Support Ticket</h2>
                        <form onSubmit={handleCreateTicket} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    required
                                    value={formData.subject}
                                    onChange={(e) =>
                                        setFormData({ ...formData, subject: e.target.value })
                                    }
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lamaSky"
                                    placeholder="Brief description of your issue"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Priority
                                </label>
                                <select
                                    value={formData.priority}
                                    onChange={(e) =>
                                        setFormData({ ...formData, priority: e.target.value })
                                    }
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lamaSky"
                                >
                                    <option value="LOW">Low</option>
                                    <option value="MEDIUM">Medium</option>
                                    <option value="HIGH">High</option>
                                    <option value="URGENT">Urgent</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Message
                                </label>
                                <textarea
                                    required
                                    value={formData.message}
                                    onChange={(e) =>
                                        setFormData({ ...formData, message: e.target.value })
                                    }
                                    rows={5}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lamaSky"
                                    placeholder="Describe your issue in detail..."
                                />
                            </div>
                            <div className="flex justify-end gap-3 mt-6">
                                <button
                                    type="button"
                                    onClick={() => setIsCreateModalOpen(false)}
                                    className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    disabled={submitting}
                                    className="px-6 py-2 bg-lamaSkyLight hover:bg-lamaSky text-white rounded-lg transition disabled:opacity-50"
                                >
                                    {submitting ? "Creating..." : "Create Ticket"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
