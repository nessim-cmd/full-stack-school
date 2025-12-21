"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function SettingsPage() {
    const [profile, setProfile] = useState({
        name: "",
        email: "",
    });
    const [passwords, setPasswords] = useState({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
    });
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);
    const router = useRouter();

    useEffect(() => {
        fetchProfile();
    }, []);

    const fetchProfile = async () => {
        try {
            const res = await fetch("/api/super-admin/settings");
            if (!res.ok) {
                if (res.status === 401 || res.status === 403) {
                    router.push("/super-admin/login");
                    return;
                }
                throw new Error("Failed to fetch profile");
            }
            const data = await res.json();
            setProfile(data.admin);
        } catch (error) {
            console.error("Error fetching profile:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleProfileUpdate = async (e: React.FormEvent) => {
        e.preventDefault();
        setSaving(true);
        setMessage(null);

        try {
            const res = await fetch("/api/super-admin/settings", {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(profile),
            });

            if (!res.ok) throw new Error("Failed to update profile");

            setMessage({ type: "success", text: "Profile updated successfully" });
        } catch (error) {
            setMessage({ type: "error", text: "Failed to update profile" });
        } finally {
            setSaving(false);
        }
    };

    const handlePasswordUpdate = async (e: React.FormEvent) => {
        e.preventDefault();
        if (passwords.newPassword !== passwords.confirmPassword) {
            setMessage({ type: "error", text: "New passwords do not match" });
            return;
        }

        setSaving(true);
        setMessage(null);

        try {
            const res = await fetch("/api/super-admin/settings", {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    newPassword: passwords.newPassword,
                }),
            });

            if (!res.ok) throw new Error("Failed to update password");

            setMessage({ type: "success", text: "Password updated successfully" });
            setPasswords({ currentPassword: "", newPassword: "", confirmPassword: "" });
        } catch (error) {
            setMessage({ type: "error", text: "Failed to update password" });
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
                <h1 className="text-3xl font-bold text-white mb-2">Account Settings</h1>
                <p className="text-white/60">Manage your profile and security preferences</p>
            </div>

            {message && (
                <div className={`p-4 rounded-lg ${message.type === "success" ? "bg-green-500/20 text-green-300 border border-green-500/50" : "bg-red-500/20 text-red-300 border border-red-500/50"
                    }`}>
                    {message.text}
                </div>
            )}

            {/* Profile Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <h2 className="text-xl font-bold text-white mb-6">Profile Information</h2>
                <form onSubmit={handleProfileUpdate} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-white/70 mb-2">Full Name</label>
                            <input
                                type="text"
                                value={profile.name}
                                onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                                className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-white/70 mb-2">Email Address</label>
                            <input
                                type="email"
                                value={profile.email}
                                onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                                className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            />
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <button
                            type="submit"
                            disabled={saving}
                            className="px-6 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition disabled:opacity-50"
                        >
                            {saving ? "Saving..." : "Save Changes"}
                        </button>
                    </div>
                </form>
            </div>

            {/* Security Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <h2 className="text-xl font-bold text-white mb-6">Security</h2>
                <form onSubmit={handlePasswordUpdate} className="space-y-6">
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-white/70 mb-2">New Password</label>
                            <input
                                type="password"
                                value={passwords.newPassword}
                                onChange={(e) => setPasswords({ ...passwords, newPassword: e.target.value })}
                                className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-white/70 mb-2">Confirm New Password</label>
                            <input
                                type="password"
                                value={passwords.confirmPassword}
                                onChange={(e) => setPasswords({ ...passwords, confirmPassword: e.target.value })}
                                className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            />
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <button
                            type="submit"
                            disabled={saving || !passwords.newPassword}
                            className="px-6 py-2 bg-gradient-to-r from-red-500 to-orange-600 text-white rounded-lg font-semibold hover:shadow-lg transition disabled:opacity-50"
                        >
                            {saving ? "Updating..." : "Update Password"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
