"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type Announcement = {
    id: string;
    title: string;
    message: string;
    type: "INFO" | "WARNING" | "CRITICAL";
    active: boolean;
    createdAt: string;
};

export default function AnnouncementsPage() {
    const [announcements, setAnnouncements] = useState<Announcement[]>([]);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({ title: "", message: "", type: "INFO" });
    const [submitting, setSubmitting] = useState(false);
    const router = useRouter();

    useEffect(() => {
        fetchAnnouncements();
    }, []);

    const fetchAnnouncements = async () => {
        try {
            const res = await fetch("/api/super-admin/announcements");
            if (!res.ok) {
                if (res.status === 401 || res.status === 403) {
                    router.push("/super-admin/login");
                    return;
                }
                throw new Error("Failed to fetch announcements");
            }
            const data = await res.json();
            setAnnouncements(data.announcements);
        } catch (error) {
            console.error("Error fetching announcements:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitting(true);
        try {
            const res = await fetch("/api/super-admin/announcements", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (!res.ok) throw new Error("Failed to create announcement");

            await fetchAnnouncements();
            setIsModalOpen(false);
            setFormData({ title: "", message: "", type: "INFO" });
        } catch (error) {
            console.error("Error creating announcement:", error);
        } finally {
            setSubmitting(false);
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm("Are you sure you want to delete this announcement?")) return;
        try {
            const res = await fetch(`/api/super-admin/announcements?id=${id}`, {
                method: "DELETE",
            });
            if (!res.ok) throw new Error("Failed to delete announcement");
            await fetchAnnouncements();
        } catch (error) {
            console.error("Error deleting announcement:", error);
        }
    };

    const getTypeColor = (type: string) => {
        switch (type) {
            case "INFO": return "bg-blue-500/20 text-blue-300 border-blue-500/30";
            case "WARNING": return "bg-yellow-500/20 text-yellow-300 border-yellow-500/30";
            case "CRITICAL": return "bg-red-500/20 text-red-300 border-red-500/30";
            default: return "bg-gray-500/20 text-gray-300";
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-white mb-2">Announcements</h1>
                    <p className="text-white/60">Broadcast messages to all schools</p>
                </div>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold rounded-lg hover:shadow-lg transition transform hover:scale-105"
                >
                    + New Announcement
                </button>
            </div>

            {/* List */}
            <div className="grid gap-4">
                {loading ? (
                    <div className="text-center py-12">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yellow-400 mx-auto"></div>
                    </div>
                ) : announcements.length === 0 ? (
                    <div className="text-center py-12 bg-white/5 rounded-2xl border border-white/10">
                        <p className="text-white/50">No announcements yet</p>
                    </div>
                ) : (
                    announcements.map((announcement) => (
                        <div key={announcement.id} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 flex justify-between items-start">
                            <div>
                                <div className="flex items-center gap-3 mb-2">
                                    <span className={`px-2 py-1 rounded text-xs font-bold border ${getTypeColor(announcement.type)}`}>
                                        {announcement.type}
                                    </span>
                                    <h3 className="text-xl font-bold text-white">{announcement.title}</h3>
                                </div>
                                <p className="text-white/80">{announcement.message}</p>
                                <p className="text-white/40 text-xs mt-4">
                                    Posted on {new Date(announcement.createdAt).toLocaleDateString()}
                                </p>
                            </div>
                            <button
                                onClick={() => handleDelete(announcement.id)}
                                className="text-white/40 hover:text-red-400 transition"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                            </button>
                        </div>
                    ))
                )}
            </div>

            {/* Create Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                    <div className="bg-[#1a1c2e] border border-white/20 rounded-2xl p-8 w-full max-w-md shadow-2xl">
                        <h2 className="text-2xl font-bold text-white mb-6">New Announcement</h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-white/70 mb-1">Title</label>
                                <input
                                    type="text"
                                    required
                                    value={formData.title}
                                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                    placeholder="e.g. Scheduled Maintenance"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-white/70 mb-1">Type</label>
                                <select
                                    value={formData.type}
                                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                >
                                    <option value="INFO">Info</option>
                                    <option value="WARNING">Warning</option>
                                    <option value="CRITICAL">Critical</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-white/70 mb-1">Message</label>
                                <textarea
                                    required
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    rows={4}
                                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                    placeholder="Enter your message here..."
                                />
                            </div>
                            <div className="flex justify-end gap-3 mt-6">
                                <button
                                    type="button"
                                    onClick={() => setIsModalOpen(false)}
                                    className="px-4 py-2 text-white/70 hover:text-white transition"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    disabled={submitting}
                                    className="px-6 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold rounded-lg hover:shadow-lg transition disabled:opacity-50"
                                >
                                    {submitting ? "Posting..." : "Post Announcement"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
