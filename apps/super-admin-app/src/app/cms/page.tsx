"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function CMSPage() {
    const [settings, setSettings] = useState({
        heroTitle: "",
        heroDescription: "",
    });
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);
    const router = useRouter();

    useEffect(() => {
        fetchSettings();
    }, []);

    const fetchSettings = async () => {
        try {
            const res = await fetch("/api/super-admin/cms");
            if (!res.ok) {
                if (res.status === 401 || res.status === 403) {
                    router.push("/super-admin/login");
                    return;
                }
                throw new Error("Failed to fetch settings");
            }
            const data = await res.json();
            setSettings(data.settings);
        } catch (error) {
            console.error("Error fetching settings:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleUpdate = async (e: React.FormEvent) => {
        e.preventDefault();
        setSaving(true);
        setMessage(null);

        try {
            const res = await fetch("/api/super-admin/cms", {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(settings),
            });

            if (!res.ok) throw new Error("Failed to update content");

            setMessage({ type: "success", text: "Landing page updated successfully" });
        } catch (error) {
            setMessage({ type: "error", text: "Failed to update content" });
        } finally {
            setSaving(false);
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
        <div className="max-w-4xl mx-auto space-y-8">
            <div>
                <h1 className="text-3xl font-bold text-white mb-2">Landing Page CMS</h1>
                <p className="text-white/60">Manage the content of your public SaaS landing page</p>
            </div>

            {message && (
                <div className={`p-4 rounded-lg ${message.type === "success" ? "bg-green-500/20 text-green-300 border border-green-500/50" : "bg-red-500/20 text-red-300 border border-red-500/50"
                    }`}>
                    {message.text}
                </div>
            )}

            {/* Hero Section Editor */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <h2 className="text-xl font-bold text-white mb-6">Hero Section</h2>
                <form onSubmit={handleUpdate} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-white/70 mb-2">Hero Title</label>
                        <input
                            type="text"
                            value={settings.heroTitle}
                            onChange={(e) => setSettings({ ...settings, heroTitle: e.target.value })}
                            className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            placeholder="e.g. Modern School Management Made Simple"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-white/70 mb-2">Hero Description</label>
                        <textarea
                            value={settings.heroDescription}
                            onChange={(e) => setSettings({ ...settings, heroDescription: e.target.value })}
                            rows={4}
                            className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            placeholder="e.g. Complete school management solution..."
                        />
                    </div>

                    <div className="flex justify-end">
                        <button
                            type="submit"
                            disabled={saving}
                            className="px-6 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold rounded-lg hover:shadow-lg transition disabled:opacity-50"
                        >
                            {saving ? "Saving..." : "Save Changes"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
