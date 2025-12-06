"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function RegisterSchoolPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [step, setStep] = useState(1);

    const [formData, setFormData] = useState({
        // School Info
        schoolName: "",
        slug: "",

        // Manager Info
        managerName: "",
        managerEmail: "",
        managerPassword: "",
        confirmPassword: "",

        // Plan
        plan: "FREE" as "FREE" | "MONTHLY" | "YEARLY"
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        // Auto-generate slug from school name
        if (name === "schoolName") {
            const slug = value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
            setFormData(prev => ({ ...prev, slug }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        // Validation
        if (formData.managerPassword !== formData.confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        if (formData.managerPassword.length < 6) {
            setError("Password must be at least 6 characters");
            return;
        }

        setLoading(true);

        try {
            const response = await fetch("/api/saas/register-school", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Registration failed");
            }

            // Redirect to manager login with success message (no email in URL for security)
            router.push(`/saas/manager-login?registered=true`);
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl w-full">
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
                        Create Your School
                    </h2>
                    <p className="text-gray-600">
                        Start your 30-day free trial. No credit card required.
                    </p>
                </div>

                {/* Progress Steps */}
                <div className="mb-8">
                    <div className="flex items-center justify-center space-x-4">
                        <div className={`flex items-center ${step >= 1 ? 'text-indigo-600' : 'text-gray-400'}`}>
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${step >= 1 ? 'bg-indigo-600 text-white' : 'bg-gray-200'}`}>
                                1
                            </div>
                            <span className="ml-2 font-medium hidden sm:inline">School Info</span>
                        </div>
                        <div className="w-16 h-1 bg-gray-200">
                            <div className={`h-full ${step >= 2 ? 'bg-indigo-600' : 'bg-gray-200'}`} style={{ width: step >= 2 ? '100%' : '0%', transition: 'width 0.3s' }}></div>
                        </div>
                        <div className={`flex items-center ${step >= 2 ? 'text-indigo-600' : 'text-gray-400'}`}>
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${step >= 2 ? 'bg-indigo-600 text-white' : 'bg-gray-200'}`}>
                                2
                            </div>
                            <span className="ml-2 font-medium hidden sm:inline">Your Account</span>
                        </div>
                        <div className="w-16 h-1 bg-gray-200">
                            <div className={`h-full ${step >= 3 ? 'bg-indigo-600' : 'bg-gray-200'}`} style={{ width: step >= 3 ? '100%' : '0%', transition: 'width 0.3s' }}></div>
                        </div>
                        <div className={`flex items-center ${step >= 3 ? 'text-indigo-600' : 'text-gray-400'}`}>
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${step >= 3 ? 'bg-indigo-600 text-white' : 'bg-gray-200'}`}>
                                3
                            </div>
                            <span className="ml-2 font-medium hidden sm:inline">Choose Plan</span>
                        </div>
                    </div>
                </div>

                {/* Form */}
                <div className="bg-white rounded-2xl shadow-xl p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Step 1: School Info */}
                        {step === 1 && (
                            <div className="space-y-6">
                                <div>
                                    <label htmlFor="schoolName" className="block text-sm font-medium text-gray-700 mb-2">
                                        School Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="schoolName"
                                        name="schoolName"
                                        required
                                        value={formData.schoolName}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                                        placeholder="e.g., Springfield High School"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="slug" className="block text-sm font-medium text-gray-700 mb-2">
                                        School Subdomain *
                                    </label>
                                    <div className="flex items-center">
                                        <input
                                            type="text"
                                            id="slug"
                                            name="slug"
                                            required
                                            value={formData.slug}
                                            onChange={handleChange}
                                            pattern="[a-z0-9-]+"
                                            className="flex-1 px-4 py-3 border border-gray-300 rounded-l-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                                            placeholder="springfield-high"
                                        />
                                        <span className="px-4 py-3 bg-gray-100 border border-l-0 border-gray-300 rounded-r-lg text-gray-600">
                                            .schoolhub.com
                                        </span>
                                    </div>
                                    <p className="mt-1 text-sm text-gray-500">
                                        Your school will be accessible at: {formData.slug || 'your-school'}.schoolhub.com
                                    </p>
                                </div>

                                <button
                                    type="button"
                                    onClick={() => setStep(2)}
                                    disabled={!formData.schoolName || !formData.slug}
                                    className="w-full py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    Continue
                                </button>
                            </div>
                        )}

                        {/* Step 2: Manager Account */}
                        {step === 2 && (
                            <div className="space-y-6">
                                <div>
                                    <label htmlFor="managerName" className="block text-sm font-medium text-gray-700 mb-2">
                                        Your Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="managerName"
                                        name="managerName"
                                        required
                                        value={formData.managerName}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="managerEmail" className="block text-sm font-medium text-gray-700 mb-2">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        id="managerEmail"
                                        name="managerEmail"
                                        required
                                        value={formData.managerEmail}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                                        placeholder="john@example.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="managerPassword" className="block text-sm font-medium text-gray-700 mb-2">
                                        Password *
                                    </label>
                                    <input
                                        type="password"
                                        id="managerPassword"
                                        name="managerPassword"
                                        required
                                        value={formData.managerPassword}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                                        placeholder="Minimum 6 characters"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                                        Confirm Password *
                                    </label>
                                    <input
                                        type="password"
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        required
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                                        placeholder="Re-enter password"
                                    />
                                </div>

                                <div className="flex space-x-4">
                                    <button
                                        type="button"
                                        onClick={() => setStep(1)}
                                        className="flex-1 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:border-indigo-600 hover:text-indigo-600 transition-all duration-300"
                                    >
                                        Back
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setStep(3)}
                                        disabled={!formData.managerName || !formData.managerEmail || !formData.managerPassword || !formData.confirmPassword}
                                        className="flex-1 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        Continue
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* Step 3: Choose Plan */}
                        {step === 3 && (
                            <div className="space-y-6">
                                <div className="grid gap-4">
                                    {[
                                        { value: "FREE", name: "Free Trial", price: "$0", period: "30 days", desc: "Perfect to get started" },
                                        { value: "MONTHLY", name: "Monthly Plan", price: "$49", period: "per month", desc: "Most flexible option" },
                                        { value: "YEARLY", name: "Yearly Plan", price: "$490", period: "per year", desc: "Save $98 per year" }
                                    ].map((plan) => (
                                        <label
                                            key={plan.value}
                                            className={`relative flex items-center p-6 border-2 rounded-lg cursor-pointer transition-all ${formData.plan === plan.value
                                                    ? 'border-indigo-600 bg-indigo-50'
                                                    : 'border-gray-200 hover:border-indigo-300'
                                                }`}
                                        >
                                            <input
                                                type="radio"
                                                name="plan"
                                                value={plan.value}
                                                checked={formData.plan === plan.value}
                                                onChange={handleChange}
                                                className="w-5 h-5 text-indigo-600"
                                            />
                                            <div className="ml-4 flex-1">
                                                <div className="flex items-center justify-between">
                                                    <div>
                                                        <p className="font-semibold text-gray-900">{plan.name}</p>
                                                        <p className="text-sm text-gray-600">{plan.desc}</p>
                                                    </div>
                                                    <div className="text-right">
                                                        <p className="text-2xl font-bold text-gray-900">{plan.price}</p>
                                                        <p className="text-sm text-gray-600">{plan.period}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </label>
                                    ))}
                                </div>

                                {error && (
                                    <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                                        <p className="text-red-600 text-sm">{error}</p>
                                    </div>
                                )}

                                <div className="flex space-x-4">
                                    <button
                                        type="button"
                                        onClick={() => setStep(2)}
                                        className="flex-1 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:border-indigo-600 hover:text-indigo-600 transition-all duration-300"
                                    >
                                        Back
                                    </button>
                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="flex-1 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {loading ? "Creating..." : "Create School"}
                                    </button>
                                </div>

                                <p className="text-sm text-gray-600 text-center">
                                    By creating an account, you agree to our Terms of Service and Privacy Policy
                                </p>
                            </div>
                        )}
                    </form>
                </div>

                {/* Footer */}
                <p className="text-center mt-6 text-gray-600">
                    Already have an account?{" "}
                    <Link href="/saas/manager-login" className="text-indigo-600 font-semibold hover:text-indigo-700">
                        Sign in
                    </Link>
                </p>
            </div>
        </div>
    );
}
