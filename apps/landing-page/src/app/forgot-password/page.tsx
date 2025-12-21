
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function ForgotPasswordPage() {
    const router = useRouter();
    const [step, setStep] = useState(1); // 1: Email, 2: OTP, 3: New Password
    const [email, setEmail] = useState("");
    const [otp, setOtp] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [message, setMessage] = useState("");

    const handleSendOTP = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setMessage("");
        setLoading(true);

        try {
            const res = await fetch("/api/auth/forgot-password", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            });

            const data = await res.json();

            if (res.ok) {
                setStep(2);
                setMessage("OTP sent to your email.");
            } else {
                setError(data.message || "Failed to send OTP.");
            }
        } catch (err) {
            setError("Network error. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const handleVerifyOTP = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setMessage("");
        setLoading(true);

        try {
            const res = await fetch("/api/auth/verify-otp", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, otp }),
            });

            const data = await res.json();

            if (res.ok) {
                setStep(3);
                setMessage("OTP verified. Please enter new password.");
            } else {
                setError(data.message || "Invalid OTP.");
            }
        } catch (err) {
            setError("Network error. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const handleResetPassword = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setMessage("");

        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        setLoading(true);

        try {
            const res = await fetch("/api/auth/reset-password", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, otp, password }),
            });

            const data = await res.json();

            if (res.ok) {
                setMessage("Password reset successfully. Redirecting to login...");
                setTimeout(() => {
                    router.push("/login");
                }, 2000);
            } else {
                setError(data.message || "Failed to reset password.");
            }
        } catch (err) {
            setError("Network error. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
            {/* Animated Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 animate-gradient-shift"></div>

            {/* Floating orbs */}
            <div className="absolute top-20 left-20 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
            <div className="absolute top-40 right-20 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-40 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

            {/* Card */}
            <div className="relative z-10 w-full max-w-md px-6">
                <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-10 animate-float">

                    {/* Header */}
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-white mb-2 drop-shadow-lg">
                            {step === 1 && "Forgot Password"}
                            {step === 2 && "Verify OTP"}
                            {step === 3 && "Reset Password"}
                        </h1>
                        <p className="text-white/80 text-sm">
                            {step === 1 && "Enter your email to receive an OTP"}
                            {step === 2 && "Enter the 4-digit code sent to your email"}
                            {step === 3 && "Create a new password"}
                        </p>
                    </div>

                    {/* Messages */}
                    {error && (
                        <div className="mb-6 bg-red-500/20 backdrop-blur-sm border border-red-400/30 text-white px-4 py-3 rounded-xl text-sm animate-shake">
                            {error}
                        </div>
                    )}
                    {message && (
                        <div className="mb-6 bg-green-500/20 backdrop-blur-sm border border-green-400/30 text-white px-4 py-3 rounded-xl text-sm">
                            {message}
                        </div>
                    )}

                    {/* Step 1: Email */}
                    {step === 1 && (
                        <form onSubmit={handleSendOTP} className="space-y-5">
                            <div className="relative group">
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    disabled={loading}
                                    className="w-full px-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all"
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl shadow-lg hover:scale-[1.02] transition-all disabled:opacity-50"
                            >
                                {loading ? "Sending..." : "Send OTP"}
                            </button>
                        </form>
                    )}

                    {/* Step 2: OTP */}
                    {step === 2 && (
                        <form onSubmit={handleVerifyOTP} className="space-y-5">
                            <div className="flex justify-center gap-4">
                                <input
                                    type="text"
                                    maxLength={4}
                                    placeholder="0000"
                                    value={otp}
                                    onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
                                    required
                                    disabled={loading}
                                    className="w-full text-center text-2xl tracking-[1em] px-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all"
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={loading || otp.length !== 4}
                                className="w-full py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl shadow-lg hover:scale-[1.02] transition-all disabled:opacity-50"
                            >
                                {loading ? "Verifying..." : "Verify OTP"}
                            </button>
                            <button
                                type="button"
                                onClick={() => setStep(1)}
                                className="w-full text-white/70 hover:text-white text-sm"
                            >
                                Back to Email
                            </button>
                        </form>
                    )}

                    {/* Step 3: New Password */}
                    {step === 3 && (
                        <form onSubmit={handleResetPassword} className="space-y-5">
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="New Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    disabled={loading}
                                    className="w-full px-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white"
                                >
                                    {showPassword ? (
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" /></svg>
                                    ) : (
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                                    )}
                                </button>
                            </div>

                            <div className="relative">
                                <input
                                    type={showConfirmPassword ? "text" : "password"}
                                    placeholder="Confirm Password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    required
                                    disabled={loading}
                                    className="w-full px-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white"
                                >
                                    {showConfirmPassword ? (
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" /></svg>
                                    ) : (
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                                    )}
                                </button>
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl shadow-lg hover:scale-[1.02] transition-all disabled:opacity-50"
                            >
                                {loading ? "Resetting..." : "Reset Password"}
                            </button>
                        </form>
                    )}

                    {/* Footer */}
                    <div className="mt-8 text-center">
                        <Link href="/login" className="text-white/60 hover:text-white text-sm transition-colors">
                            Back to Login
                        </Link>
                    </div>
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
