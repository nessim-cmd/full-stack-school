// src/app/login/page.tsx
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface School {
    id: string;
    name: string;
    slug: string;
}

export default function LoginPage() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    // School selection state
    const [requiresSchoolSelection, setRequiresSchoolSelection] = useState(false);
    const [managerId, setManagerId] = useState("");
    const [schools, setSchools] = useState<School[]>([]);
    const [selectedSchool, setSelectedSchool] = useState("");
    const [checkingDomain, setCheckingDomain] = useState(true);

    useEffect(() => {
        const hostname = window.location.hostname;
        let isRoot = false;

        if (hostname === 'localhost') {
            isRoot = true;
        } else if (!hostname.endsWith('localhost')) {
            // Production logic
            const parts = hostname.split('.');
            if (parts.length === 2) isRoot = true; // domain.com
            if (parts.length === 3 && parts[0] === 'www') isRoot = true; // www.domain.com
        }

        if (isRoot) {
            // Redirect root login to SaaS manager login
            router.replace('/saas/manager-login');
        } else {
            setCheckingDomain(false);
        }
    }, [router]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            const res = await fetch("/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await res.json();

            if (res.ok) {
                if (data.requiresSchoolSelection) {
                    // Manager has multiple schools
                    setRequiresSchoolSelection(true);
                    setManagerId(data.managerId);
                    setSchools(data.schools);
                } else {
                    // Single school or regular user
                    if (data.schoolSlug) {
                        const hostname = window.location.hostname;
                        let targetHost = '';

                        // Handle localhost specifically
                        if (hostname.endsWith('localhost')) {
                            // Localhost environment
                            // If current is just "localhost", target is "slug.localhost"
                            // If current is "slug.localhost", target is "slug.localhost"
                            // If current is "wrong.localhost", target is "slug.localhost"
                            targetHost = `${data.schoolSlug}.localhost`;
                        } else {
                            // Production environment
                            const parts = hostname.split('.');
                            let rootDomain = hostname;

                            // Simple heuristic: if www, strip it. 
                            if (parts[0] === 'www') {
                                parts.shift();
                            }

                            // If >= 3 parts (sub.domain.com), take last 2 as root
                            // If 2 parts (domain.com), use as is
                            if (parts.length >= 3) {
                                rootDomain = parts.slice(-2).join('.');
                            } else {
                                rootDomain = parts.join('.');
                            }

                            targetHost = `${data.schoolSlug}.${rootDomain}`;
                        }

                        // Only redirect if we are not already on the target host
                        if (hostname !== targetHost) {
                            const protocol = window.location.protocol;
                            const port = window.location.port ? `:${window.location.port}` : '';

                            window.location.href = `${protocol}//${targetHost}${port}/${data.role}`;
                            return;
                        }
                    }

                    router.refresh();
                    router.push(`/${data.role}`);
                }
            } else {
                setError(data.message || "Invalid email or password");
            }
        } catch (err) {
            setError("Network error. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const handleSchoolSelection = async () => {
        if (!selectedSchool) {
            setError("Please select a school");
            return;
        }

        setLoading(true);
        setError("");

        try {
            const res = await fetch("/api/auth/select-school", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ managerId, schoolId: selectedSchool }),
            });

            const data = await res.json();

            if (res.ok) {
                router.refresh();
                router.push(`/${data.role}`);
            } else {
                setError(data.message || "Failed to select school");
            }
        } catch (err) {
            setError("Network error. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    // School Selection View
    if (requiresSchoolSelection) {
        return (
            <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
                {/* Animated Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 animate-gradient-shift"></div>

                {/* Floating orbs for depth */}
                <div className="absolute top-20 left-20 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
                <div className="absolute top-40 right-20 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

                {/* Selection Card */}
                <div className="relative z-10 w-full max-w-md px-6">
                    <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-10 animate-float">
                        {/* Header */}
                        <div className="text-center mb-8">
                            <h1 className="text-3xl font-bold text-white mb-2 drop-shadow-lg">
                                Select Your School
                            </h1>
                            <p className="text-white/80 text-sm">
                                You manage multiple schools. Please select one to continue.
                            </p>
                        </div>

                        {/* Error Message */}
                        {error && (
                            <div className="mb-6 bg-red-500/20 backdrop-blur-sm border border-red-400/30 text-white px-4 py-3 rounded-xl text-sm">
                                {error}
                            </div>
                        )}

                        {/* School List */}
                        <div className="space-y-3 mb-6">
                            {schools.map((school) => (
                                <button
                                    key={school.id}
                                    onClick={() => setSelectedSchool(school.id)}
                                    className={`w-full p-4 rounded-xl border-2 transition-all duration-300 text-left ${selectedSchool === school.id
                                        ? "bg-white/20 border-white/60 shadow-lg"
                                        : "bg-white/5 border-white/20 hover:bg-white/10"
                                        }`}
                                >
                                    <div className="text-white font-semibold">{school.name}</div>
                                    <div className="text-white/60 text-sm">{school.slug}</div>
                                </button>
                            ))}
                        </div>

                        {/* Continue Button */}
                        <button
                            onClick={handleSchoolSelection}
                            disabled={loading || !selectedSchool}
                            className="w-full py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl hover:scale-[1.02] active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                        >
                            {loading ? "Loading..." : "Continue"}
                        </button>

                        {/* Back Button */}
                        <button
                            onClick={() => {
                                setRequiresSchoolSelection(false);
                                setSchools([]);
                                setSelectedSchool("");
                                setPassword("");
                            }}
                            className="w-full mt-3 py-3 text-white/70 hover:text-white transition-colors text-sm"
                        >
                            ← Back to Login
                        </button>
                    </div>
                </div>

                <style jsx>{`
                    @keyframes gradient-shift {
                        0%, 100% { background-position: 0% 50%; }
                        50% { background-position: 100% 50%; }
                    }
                    @keyframes blob {
                        0%, 100% { transform: translate(0, 0) scale(1); }
                        33% { transform: translate(30px, -50px) scale(1.1); }
                        66% { transform: translate(-20px, 20px) scale(0.9); }
                    }
                    @keyframes float {
                        0%, 100% { transform: translateY(0px); }
                        50% { transform: translateY(-10px); }
                    }
                    .animate-gradient-shift {
                        background-size: 200% 200%;
                        animation: gradient-shift 15s ease infinite;
                    }
                    .animate-blob {
                        animation: blob 10s infinite;
                    }
                    .animation-delay-2000 {
                        animation-delay: 2s;
                    }
                    .animate-float {
                        animation: float 6s ease-in-out infinite;
                    }
                `}</style>
            </div>
        );
    }

    if (checkingDomain) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
            </div>
        );
    }

    // Login View
    return (
        <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
            {/* Animated Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 animate-gradient-shift"></div>

            {/* Floating orbs for depth */}
            <div className="absolute top-20 left-20 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
            <div className="absolute top-40 right-20 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-40 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

            {/* Login Card */}
            <div className="relative z-10 w-full max-w-md px-6">
                <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-10 animate-float">
                    {/* Logo/Icon */}
                    <div className="flex justify-center mb-8">
                        <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-300">
                            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                        </div>
                    </div>

                    {/* Header */}
                    <div className="text-center mb-8">
                        <h1 className="text-4xl font-bold text-white mb-2 drop-shadow-lg">
                            Welcome Back
                        </h1>
                        <p className="text-white/80 text-sm">
                            Sign in to access your School Dashboard
                        </p>
                    </div>

                    {/* Error Message */}
                    {error && (
                        <div className="mb-6 bg-red-500/20 backdrop-blur-sm border border-red-400/30 text-white px-4 py-3 rounded-xl text-sm animate-shake">
                            <div className="flex items-center gap-2">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                </svg>
                                <span>{error}</span>
                            </div>
                        </div>
                    )}

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-5">
                        {/* Email Input */}
                        <div className="relative group">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <svg className="w-5 h-5 text-white/60 group-focus-within:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                </svg>
                            </div>
                            <input
                                type="text"
                                placeholder="Email or Username"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                disabled={loading}
                                className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all duration-300 disabled:opacity-50"
                            />
                        </div>

                        {/* Password Input */}
                        <div className="relative group">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <svg className="w-5 h-5 text-white/60 group-focus-within:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                            </div>
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                disabled={loading}
                                className="w-full pl-12 pr-12 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all duration-300 disabled:opacity-50"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute inset-y-0 right-0 pr-4 flex items-center text-white/60 hover:text-white transition-colors focus:outline-none"
                            >
                                {showPassword ? (
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" /></svg>
                                ) : (
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                                )}
                            </button>
                        </div>

                        <div className="flex justify-end">
                            <Link href="/forgot-password" className="text-sm text-white/70 hover:text-white transition-colors">
                                Forgot Password?
                            </Link>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={loading || !email || !password}
                            className="w-full mt-6 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl hover:scale-[1.02] active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 transition-all duration-300 flex items-center justify-center gap-2"
                        >
                            {loading ? (
                                <>
                                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    <span>Signing in...</span>
                                </>
                            ) : (
                                <>
                                    <span>Sign In</span>
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </>
                            )}
                        </button>
                    </form>

                    {/* Footer */}
                    <div className="mt-8 text-center">
                        <p className="text-white/60 text-xs">
                            Secured by JWT Authentication
                        </p>
                    </div>
                </div>
            </div>

            {/* Add custom styles for animations */}
            <style jsx>{`
                @keyframes gradient-shift {
                    0%, 100% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                }
                @keyframes blob {
                    0%, 100% { transform: translate(0, 0) scale(1); }
                    33% { transform: translate(30px, -50px) scale(1.1); }
                    66% { transform: translate(-20px, 20px) scale(0.9); }
                }
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                }
                @keyframes shake {
                    0%, 100% { transform: translateX(0); }
                    25% { transform: translateX(-10px); }
                    75% { transform: translateX(10px); }
                }
                .animate-gradient-shift {
                    background-size: 200% 200%;
                    animation: gradient-shift 15s ease infinite;
                }
                .animate-blob {
                    animation: blob 10s infinite;
                }
                .animation-delay-2000 {
                    animation-delay: 2s;
                }
                .animation-delay-4000 {
                    animation-delay: 4s;
                }
                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }
                .animate-shake {
                    animation: shake 0.5s ease-in-out;
                }
            `}</style>
        </div>
    );
}
