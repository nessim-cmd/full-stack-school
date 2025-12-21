"use client";

import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

function ManagerLoginForm() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    useEffect(() => {
        // Check if coming from registration
        if (searchParams.get('registered') === 'true') {
            setSuccessMessage("School created successfully! Please check your email for admin credentials.");
        }
    }, [searchParams]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setSuccessMessage("");
        setLoading(true);

        try {
            const response = await fetch("/api/saas/manager-login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Login failed");
            }

            // Redirect to manager dashboard
            router.push("/saas/manager-dashboard");
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full">
                {/* Header */}
                <div className="text-center mb-8">
                    <Link href="/saas" className="inline-flex items-center space-x-3 mb-6">
                        <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-2xl">S</span>
                        </div>
                        <span className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                            SchoolHub SaaS
                        </span>
                    </Link>
                    <h2 className="text-4xl font-bold text-gray-900 mb-2">
                        Manager Login
                    </h2>
                    <p className="text-gray-600">
                        Access your school management dashboard
                    </p>
                </div>

                {/* Success Message */}
                {successMessage && (
                    <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                        <p className="text-green-700 text-sm">{successMessage}</p>
                    </div>
                )}

                {/* Form */}
                <div className="bg-white rounded-2xl shadow-xl p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                                placeholder="your@email.com"
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                required
                                value={formData.password}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                                placeholder="Enter your password"
                            />
                        </div>

                        {error && (
                            <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                                <p className="text-red-600 text-sm">{error}</p>
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {loading ? "Signing in..." : "Sign In"}
                        </button>

                        <div className="text-center">
                            <a href="#" className="text-sm text-indigo-600 hover:text-indigo-700">
                                Forgot your password?
                            </a>
                        </div>
                    </form>
                </div>

                {/* Footer */}
                <p className="text-center mt-6 text-gray-600">
                    Don't have an account?{" "}
                    <Link href="/saas/register-school" className="text-indigo-600 font-semibold hover:text-indigo-700">
                        Create a school
                    </Link>
                </p>

                <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <p className="text-sm text-blue-800 font-semibold mb-2">👤 For School Admins/Teachers/Students:</p>
                    <p className="text-sm text-blue-700">
                        This is the <strong>School Manager</strong> login. If you're a school admin, teacher, student, or parent,
                        please use your school's specific login page at: <strong>yourschool.schoolhub.com/login</strong>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default function ManagerLoginPage() {
    return (
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
            <ManagerLoginForm />
        </Suspense>
    );
}
