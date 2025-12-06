"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import SchoolServicesModal from "@/components/SchoolServicesModal";

interface School {
    id: string;
    name: string;
    slug: string;
    plan: string;
    subscriptionStatus: string;
    trialEndsAt: string;
    enabledServices: string;
}

export default function ManagerDashboard() {
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const [manager, setManager] = useState<any>(null);
    const [schools, setSchools] = useState<School[]>([]);
    const [selectedSchool, setSelectedSchool] = useState<School | null>(null);
    const [isServicesModalOpen, setIsServicesModalOpen] = useState(false);

    useEffect(() => {
        fetchManagerData();
    }, []);

    const fetchManagerData = async () => {
        try {
            const response = await fetch("/api/saas/manager-data");
            if (!response.ok) {
                router.push("/saas/manager-login");
                return;
            }
            const data = await response.json();
            setManager(data.manager);
            setSchools(data.schools);
        } catch (error) {
            console.error("Error fetching manager data:", error);
            router.push("/saas/manager-login");
        } finally {
            setLoading(false);
        }
    };

    const handleLogout = async () => {
        await fetch("/api/saas/manager-logout", { method: "POST" });
        router.push("/saas/manager-login");
    };

    const openServicesModal = (school: School) => {
        setSelectedSchool(school);
        setIsServicesModalOpen(true);
    };

    const hasServicesConfigured = (school: School): boolean => {
        try {
            const services = JSON.parse(school.enabledServices || "[]");
            return Array.isArray(services) && services.length > 0;
        } catch {
            return false;
        }
    };

    const getDashboardLink = (school: School): string => {
        // If services not configured, go to configuration page
        if (!hasServicesConfigured(school)) {
            return `/admin/school/${school.id}/configure-services`;
        }
        // Otherwise, go to dashboard
        return `http://${school.slug}.localhost:3000`;
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="w-16 h-16 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-gray-600">Loading...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <nav className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-xl">S</span>
                            </div>
                            <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                                SchoolHub Manager
                            </span>
                        </div>
                        <div className="flex items-center space-x-4">
                            <span className="text-gray-700">👤 {manager?.name}</span>
                            <button
                                onClick={handleLogout}
                                className="px-4 py-2 text-gray-700 hover:text-indigo-600 transition-colors"
                            >
                                Logout
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Welcome Section */}
                <div className="mb-8">
                    <h1 className="text-4xl font-bold text-gray-900 mb-2">
                        Welcome back, {manager?.name}!
                    </h1>
                    <p className="text-gray-600">
                        Manage your schools and monitor their performance
                    </p>
                </div>

                {/* Add School Button */}
                <div className="mb-8">
                    <Link
                        href="/saas/register-school"
                        className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
                    >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                        Add New School
                    </Link>
                </div>

                {/* Schools Grid */}
                {schools.length === 0 ? (
                    <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
                        <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">No schools yet</h3>
                        <p className="text-gray-600 mb-6">Create your first school to get started</p>
                        <Link
                            href="/saas/register-school"
                            className="inline-block px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
                        >
                            Create School
                        </Link>
                    </div>
                ) : (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {schools.map((school) => {
                            const trialDaysLeft = Math.ceil(
                                (new Date(school.trialEndsAt).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)
                            );
                            const isTrialActive = trialDaysLeft > 0;

                            return (
                                <div
                                    key={school.id}
                                    className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                                >
                                    <div className="p-6">
                                        <div className="flex items-start justify-between mb-4">
                                            <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
                                                <span className="text-white font-bold text-xl">
                                                    {school.name.charAt(0)}
                                                </span>
                                            </div>
                                            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${school.plan === 'FREE' ? 'bg-gray-100 text-gray-700' :
                                                school.plan === 'MONTHLY' ? 'bg-blue-100 text-blue-700' :
                                                    'bg-purple-100 text-purple-700'
                                                }`}>
                                                {school.plan}
                                            </span>
                                        </div>

                                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                                            {school.name}
                                        </h3>

                                        <p className="text-sm text-gray-600 mb-4">
                                            {school.slug}.schoolhub.com
                                        </p>

                                        {school.subscriptionStatus === 'TRIAL' && (
                                            <div className={`mb-4 p-3 rounded-lg ${isTrialActive ? 'bg-blue-50' : 'bg-red-50'
                                                }`}>
                                                <p className={`text-sm font-semibold ${isTrialActive ? 'text-blue-700' : 'text-red-700'
                                                    }`}>
                                                    {isTrialActive
                                                        ? `Trial: ${trialDaysLeft} days left`
                                                        : 'Trial expired'
                                                    }
                                                </p>
                                            </div>
                                        )}

                                        <div className="space-y-2">
                                            <a
                                                href={`http://${school.slug}.localhost:3000`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="block py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg text-center font-semibold hover:shadow-lg transition-all duration-300 text-sm"
                                            >
                                                View Homepage
                                            </a>
                                            {hasServicesConfigured(school) ? (
                                                <a
                                                    href={`/login?school=${school.slug}`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="block py-2 border-2 border-indigo-600 text-indigo-600 rounded-lg text-center font-semibold hover:bg-indigo-50 transition-all duration-300 text-sm"
                                                >
                                                    Login to Dashboard
                                                </a>
                                            ) : (
                                                <div className="relative group">
                                                    <button
                                                        onClick={() => openServicesModal(school)}
                                                        className="w-full py-2 border-2 border-yellow-500 text-yellow-600 rounded-lg text-center font-semibold hover:bg-yellow-50 transition-all duration-300 text-sm"
                                                    >
                                                        ⚠️ Configure Services First
                                                    </button>
                                                    <div className="absolute hidden group-hover:block bg-gray-900 text-white text-xs rounded px-2 py-1 whitespace-nowrap -bottom-8 left-0 z-10">
                                                        Services must be configured to access dashboard
                                                    </div>
                                                </div>
                                            )}
                                            <button
                                                onClick={() => openServicesModal(school)}
                                                className="w-full px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                                            >
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                                Configure Services
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}

                {/* Services Modal */}
                {selectedSchool && (
                    <SchoolServicesModal
                        schoolId={selectedSchool.id}
                        schoolName={selectedSchool.name}
                        isOpen={isServicesModalOpen}
                        onClose={() => {
                            setIsServicesModalOpen(false);
                            setSelectedSchool(null);
                        }}
                        onSave={() => {
                            // Optionally refresh schools list
                        }}
                    />
                )}
            </div>
        </div>
    );
}
