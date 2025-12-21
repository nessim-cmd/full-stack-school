"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

type SiteSettings = {
    id: number;
    schoolName: string;
    schoolLogo: string | null;
    schoolTagline: string;
    heroTitle: string;
    heroDescription: string;
    heroImage: string | null;
    totalStudents: string;
    totalTeachers: string;
    successRate: string;
    yearsExperience: string;
    missionTitle: string;
    missionText: string;
    visionTitle: string;
    visionText: string;
    valuesTitle: string;
    valuesText: string;
    programs: string;
    certifications: string;
    address: string;
    phone: string;
    email: string;
    facebookUrl: string | null;
    twitterUrl: string | null;
    instagramUrl: string | null;
    ctaTitle: string;
    ctaDescription: string;
};

export default function SettingsPage() {
    const router = useRouter();
    const [settings, setSettings] = useState<SiteSettings | null>(null);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [message, setMessage] = useState("");
    const [activeTab, setActiveTab] = useState("branding");

    useEffect(() => {
        fetchSettings();
    }, []);

    const fetchSettings = async () => {
        try {
            const response = await fetch("/api/settings");
            const data = await response.json();
            setSettings(data);
        } catch (error) {
            console.error("Error fetching settings:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSaving(true);
        setMessage("");

        try {
            const response = await fetch("/api/settings", {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(settings),
            });

            if (!response.ok) throw new Error("Failed to save settings");

            setMessage("Settings saved successfully!");
            setTimeout(() => setMessage(""), 3000);
        } catch (error: any) {
            setMessage("Error: " + error.message);
        } finally {
            setSaving(false);
        }
    };

    const handleChange = (field: keyof SiteSettings, value: string) => {
        if (settings) {
            setSettings({ ...settings, [field]: value });
        }
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <div className="text-lg">Loading settings...</div>
            </div>
        );
    }

    if (!settings) {
        return (
            <div className="flex items-center justify-center h-screen">
                <div className="text-lg text-red-600">Failed to load settings</div>
            </div>
        );
    }

    const tabs = [
        { id: "branding", label: "Branding", icon: "🎨" },
        { id: "hero", label: "Hero Section", icon: "🏠" },
        { id: "stats", label: "Statistics", icon: "📊" },
        { id: "about", label: "About Us", icon: "ℹ️" },
        { id: "programs", label: "Programs", icon: "📚" },
        { id: "certifications", label: "Certifications", icon: "🏆" },
        { id: "contact", label: "Contact", icon: "📞" },
        { id: "cta", label: "Call to Action", icon: "🎯" },
    ];

    return (
        <div className="bg-white p-6 rounded-md m-4">
            <div className="flex items-center justify-between mb-6">
                <h1 className="text-2xl font-bold">Landing Page Settings</h1>
                {message && (
                    <div
                        className={`px-4 py-2 rounded-lg ${message.includes("Error") ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700"
                            }`}
                    >
                        {message}
                    </div>
                )}
            </div>

            {/* Tabs */}
            <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${activeTab === tab.id
                                ? "bg-blue-600 text-white"
                                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                            }`}
                    >
                        {tab.icon} {tab.label}
                    </button>
                ))}
            </div>

            <form onSubmit={handleSubmit}>
                {/* Branding Tab */}
                {activeTab === "branding" && (
                    <div className="space-y-6">
                        <h2 className="text-xl font-semibold mb-4">School Branding</h2>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">School Name</label>
                            <input
                                type="text"
                                value={settings.schoolName}
                                onChange={(e) => handleChange("schoolName", e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Tagline</label>
                            <input
                                type="text"
                                value={settings.schoolTagline}
                                onChange={(e) => handleChange("schoolTagline", e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Logo URL (optional)
                            </label>
                            <input
                                type="url"
                                value={settings.schoolLogo || ""}
                                onChange={(e) => handleChange("schoolLogo", e.target.value)}
                                placeholder="https://example.com/logo.png"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                            />
                            <p className="text-sm text-gray-500 mt-1">
                                Leave empty to use default logo
                            </p>
                        </div>
                    </div>
                )}

                {/* Hero Tab */}
                {activeTab === "hero" && (
                    <div className="space-y-6">
                        <h2 className="text-xl font-semibold mb-4">Hero Section</h2>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Hero Title</label>
                            <input
                                type="text"
                                value={settings.heroTitle}
                                onChange={(e) => handleChange("heroTitle", e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Hero Description
                            </label>
                            <textarea
                                value={settings.heroDescription}
                                onChange={(e) => handleChange("heroDescription", e.target.value)}
                                rows={4}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Hero Image URL (optional)
                            </label>
                            <input
                                type="url"
                                value={settings.heroImage || ""}
                                onChange={(e) => handleChange("heroImage", e.target.value)}
                                placeholder="https://example.com/hero.jpg"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>
                )}

                {/* Stats Tab */}
                {activeTab === "stats" && (
                    <div className="space-y-6">
                        <h2 className="text-xl font-semibold mb-4">Statistics</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Total Students
                                </label>
                                <input
                                    type="text"
                                    value={settings.totalStudents}
                                    onChange={(e) => handleChange("totalStudents", e.target.value)}
                                    placeholder="2,500+"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Total Teachers
                                </label>
                                <input
                                    type="text"
                                    value={settings.totalTeachers}
                                    onChange={(e) => handleChange("totalTeachers", e.target.value)}
                                    placeholder="150+"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Success Rate
                                </label>
                                <input
                                    type="text"
                                    value={settings.successRate}
                                    onChange={(e) => handleChange("successRate", e.target.value)}
                                    placeholder="98%"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Years of Experience
                                </label>
                                <input
                                    type="text"
                                    value={settings.yearsExperience}
                                    onChange={(e) => handleChange("yearsExperience", e.target.value)}
                                    placeholder="30+"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                        </div>
                    </div>
                )}

                {/* About Tab */}
                {activeTab === "about" && (
                    <div className="space-y-6">
                        <h2 className="text-xl font-semibold mb-4">About Us Section</h2>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Mission Title
                                </label>
                                <input
                                    type="text"
                                    value={settings.missionTitle}
                                    onChange={(e) => handleChange("missionTitle", e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Mission Text
                                </label>
                                <textarea
                                    value={settings.missionText}
                                    onChange={(e) => handleChange("missionText", e.target.value)}
                                    rows={3}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Vision Title
                                </label>
                                <input
                                    type="text"
                                    value={settings.visionTitle}
                                    onChange={(e) => handleChange("visionTitle", e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Vision Text</label>
                                <textarea
                                    value={settings.visionText}
                                    onChange={(e) => handleChange("visionText", e.target.value)}
                                    rows={3}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Values Title
                                </label>
                                <input
                                    type="text"
                                    value={settings.valuesTitle}
                                    onChange={(e) => handleChange("valuesTitle", e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Values Text</label>
                                <textarea
                                    value={settings.valuesText}
                                    onChange={(e) => handleChange("valuesText", e.target.value)}
                                    rows={3}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                        </div>
                    </div>
                )}

                {/* Programs Tab */}
                {activeTab === "programs" && (
                    <div className="space-y-6">
                        <h2 className="text-xl font-semibold mb-4">Programs</h2>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Programs (JSON format)
                            </label>
                            <textarea
                                value={settings.programs}
                                onChange={(e) => handleChange("programs", e.target.value)}
                                rows={10}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 font-mono text-sm"
                            />
                            <p className="text-sm text-gray-500 mt-1">
                                Format: [{`{"grade":"Name","range":"Grades X-Y","description":"...","color":"from-blue-400 to-cyan-500"}`}]
                            </p>
                        </div>
                    </div>
                )}

                {/* Certifications Tab */}
                {activeTab === "certifications" && (
                    <div className="space-y-6">
                        <h2 className="text-xl font-semibold mb-4">Certifications</h2>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Certifications (JSON format)
                            </label>
                            <textarea
                                value={settings.certifications}
                                onChange={(e) => handleChange("certifications", e.target.value)}
                                rows={6}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 font-mono text-sm"
                            />
                            <p className="text-sm text-gray-500 mt-1">
                                Format: ["Certification 1", "Certification 2", ...]
                            </p>
                        </div>
                    </div>
                )}

                {/* Contact Tab */}
                {activeTab === "contact" && (
                    <div className="space-y-6">
                        <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                            <textarea
                                value={settings.address}
                                onChange={(e) => handleChange("address", e.target.value)}
                                rows={2}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                                <input
                                    type="tel"
                                    value={settings.phone}
                                    onChange={(e) => handleChange("phone", e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                <input
                                    type="email"
                                    value={settings.email}
                                    onChange={(e) => handleChange("email", e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                        </div>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Facebook URL
                                </label>
                                <input
                                    type="url"
                                    value={settings.facebookUrl || ""}
                                    onChange={(e) => handleChange("facebookUrl", e.target.value)}
                                    placeholder="https://facebook.com/..."
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Twitter URL</label>
                                <input
                                    type="url"
                                    value={settings.twitterUrl || ""}
                                    onChange={(e) => handleChange("twitterUrl", e.target.value)}
                                    placeholder="https://twitter.com/..."
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Instagram URL
                                </label>
                                <input
                                    type="url"
                                    value={settings.instagramUrl || ""}
                                    onChange={(e) => handleChange("instagramUrl", e.target.value)}
                                    placeholder="https://instagram.com/..."
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                        </div>
                    </div>
                )}

                {/* CTA Tab */}
                {activeTab === "cta" && (
                    <div className="space-y-6">
                        <h2 className="text-xl font-semibold mb-4">Call to Action Section</h2>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">CTA Title</label>
                            <input
                                type="text"
                                value={settings.ctaTitle}
                                onChange={(e) => handleChange("ctaTitle", e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                CTA Description
                            </label>
                            <textarea
                                value={settings.ctaDescription}
                                onChange={(e) => handleChange("ctaDescription", e.target.value)}
                                rows={3}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>
                )}

                {/* Save Button */}
                <div className="mt-8 pt-6 border-t flex justify-end gap-4">
                    <button
                        type="button"
                        onClick={() => router.push("/admin")}
                        className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        disabled={saving}
                        className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all disabled:opacity-50"
                    >
                        {saving ? "Saving..." : "Save Settings"}
                    </button>
                </div>
            </form>
        </div>
    );
}
