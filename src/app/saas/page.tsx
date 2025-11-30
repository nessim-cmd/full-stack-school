import Link from "next/link";
import prisma from "@/lib/prisma";

// Force dynamic rendering - fetch fresh data on every request
export const revalidate = 0;

export default async function SaaSLandingPage() {
    const settings = await prisma.saasSettings.findFirst();

    const heroTitle = settings?.heroTitle || "Modern School Management Made Simple";
    const heroDescription = settings?.heroDescription || "Complete school management solution with student tracking, attendance, grades, messaging, and more. Get started in minutes with our powerful SaaS platform.";

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
            {/* Navigation */}
            <nav className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-xl">S</span>
                            </div>
                            <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                                SchoolHub SaaS
                            </span>
                        </div>
                        <div className="flex items-center space-x-4">
                            <Link
                                href="/saas/manager-login"
                                className="px-4 py-2 text-gray-700 hover:text-indigo-600 transition-colors font-medium"
                            >
                                Manager Login
                            </Link>
                            <Link
                                href="/saas/register-school"
                                className="px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-medium"
                            >
                                Start Free Trial
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative overflow-hidden py-20 lg:py-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center space-y-8">
                        <div className="inline-block">
                            <span className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-semibold">
                                🚀 Launch Your School Management Platform
                            </span>
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                            {heroTitle.split(" Made Simple")[0]}
                            <br />
                            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                                {heroTitle.includes("Made Simple") ? "Made Simple" : ""}
                            </span>
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                            {heroDescription}
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <Link
                                href="/saas/register-school"
                                className="px-10 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:shadow-2xl transition-all duration-300 font-semibold text-lg transform hover:scale-105"
                            >
                                Start Free 30-Day Trial
                            </Link>
                            <a
                                href="#pricing"
                                className="px-10 py-4 border-2 border-gray-300 text-gray-700 rounded-xl hover:border-indigo-600 hover:text-indigo-600 transition-all duration-300 font-semibold text-lg"
                            >
                                View Pricing
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-5xl font-bold mb-4">Everything You Need</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Comprehensive features to manage your school efficiently
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: "👥",
                                title: "User Management",
                                description: "Manage students, teachers, parents, and admins with role-based access control"
                            },
                            {
                                icon: "📚",
                                title: "Academic Management",
                                description: "Classes, subjects, lessons, exams, and assignments all in one place"
                            },
                            {
                                icon: "📊",
                                title: "Grades & Results",
                                description: "Track student performance with comprehensive grading system"
                            },
                            {
                                icon: "📅",
                                title: "Attendance Tracking",
                                description: "Mark and monitor student attendance with automatic notifications"
                            },
                            {
                                icon: "💬",
                                title: "Messaging System",
                                description: "Built-in communication between teachers, students, and parents"
                            },
                            {
                                icon: "🔔",
                                title: "Notifications",
                                description: "Real-time alerts for important events and updates"
                            },
                            {
                                icon: "📁",
                                title: "Resource Management",
                                description: "Upload and share course materials, assignments, and documents"
                            },
                            {
                                icon: "🎨",
                                title: "Customizable",
                                description: "Brand your school with custom logo, colors, and content"
                            },
                            {
                                icon: "🔒",
                                title: "Secure & Private",
                                description: "Enterprise-grade security with complete data isolation"
                            }
                        ].map((feature, index) => (
                            <div
                                key={index}
                                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                            >
                                <div className="text-5xl mb-4">{feature.icon}</div>
                                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section id="pricing" className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-5xl font-bold mb-4">Simple, Transparent Pricing</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Choose the plan that fits your school size
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {[
                            {
                                name: "Free Trial",
                                price: "$0",
                                period: "30 days",
                                features: [
                                    "Up to 50 students",
                                    "All core features",
                                    "Email support",
                                    "Basic customization",
                                    "No credit card required"
                                ],
                                cta: "Start Free Trial",
                                popular: false
                            },
                            {
                                name: "Monthly",
                                price: "$49",
                                period: "per month",
                                features: [
                                    "Unlimited students",
                                    "All features included",
                                    "Priority support",
                                    "Full customization",
                                    "Custom domain",
                                    "Advanced analytics"
                                ],
                                cta: "Get Started",
                                popular: true
                            },
                            {
                                name: "Yearly",
                                price: "$490",
                                period: "per year",
                                features: [
                                    "Everything in Monthly",
                                    "Save $98 per year",
                                    "Dedicated support",
                                    "Custom integrations",
                                    "Training sessions",
                                    "Priority updates"
                                ],
                                cta: "Get Started",
                                popular: false
                            }
                        ].map((plan, index) => (
                            <div
                                key={index}
                                className={`relative bg-white rounded-2xl p-8 shadow-lg ${plan.popular ? "ring-4 ring-indigo-600 transform scale-105" : ""
                                    }`}
                            >
                                {plan.popular && (
                                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                        <span className="px-4 py-1 bg-indigo-600 text-white rounded-full text-sm font-semibold">
                                            Most Popular
                                        </span>
                                    </div>
                                )}
                                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                                <div className="mb-6">
                                    <span className="text-5xl font-bold">{plan.price}</span>
                                    <span className="text-gray-600 ml-2">{plan.period}</span>
                                </div>
                                <ul className="space-y-3 mb-8">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-start">
                                            <svg
                                                className="w-6 h-6 text-green-500 mr-2 flex-shrink-0"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M5 13l4 4L19 7"
                                                />
                                            </svg>
                                            <span className="text-gray-600">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Link
                                    href="/saas/register-school"
                                    className={`block w-full py-3 rounded-lg text-center font-semibold transition-all duration-300 ${plan.popular
                                        ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:shadow-xl"
                                        : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                                        }`}
                                >
                                    {plan.cta}
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl lg:text-5xl font-bold mb-6">Ready to Get Started?</h2>
                    <p className="text-xl mb-8 opacity-90">
                        Join hundreds of schools already using SchoolHub to manage their operations efficiently.
                    </p>
                    <Link
                        href="/saas/register-school"
                        className="inline-block px-10 py-4 bg-white text-indigo-600 rounded-xl hover:shadow-2xl transition-all duration-300 font-bold text-lg transform hover:scale-105"
                    >
                        Start Your Free Trial →
                    </Link>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-gray-300 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-4 gap-8 mb-8">
                        <div>
                            <div className="flex items-center space-x-3 mb-4">
                                <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
                                    <span className="text-white font-bold text-xl">S</span>
                                </div>
                                <span className="text-xl font-bold text-white">SchoolHub SaaS</span>
                            </div>
                            <p className="text-sm">Modern school management platform</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-white mb-4">Product</h3>
                            <ul className="space-y-2 text-sm">
                                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                                <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
                                <li><Link href="/saas/register-school" className="hover:text-white transition-colors">Sign Up</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold text-white mb-4">Support</h3>
                            <ul className="space-y-2 text-sm">
                                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold text-white mb-4">Legal</h3>
                            <ul className="space-y-2 text-sm">
                                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-gray-800 pt-8 text-center text-sm">
                        <p>&copy; 2025 SchoolHub SaaS. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
