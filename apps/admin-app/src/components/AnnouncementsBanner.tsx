"use client";

import { useEffect, useState } from "react";

type Announcement = {
    id: string;
    title: string;
    message: string;
    type: "INFO" | "WARNING" | "CRITICAL";
    createdAt: string;
};

export default function AnnouncementsBanner() {
    const [announcements, setAnnouncements] = useState<Announcement[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(true);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchAnnouncements();
    }, []);

    useEffect(() => {
        if (announcements.length > 1) {
            const interval = setInterval(() => {
                setCurrentIndex((prev) => (prev + 1) % announcements.length);
            }, 8000); // Rotate every 8 seconds
            return () => clearInterval(interval);
        }
    }, [announcements.length]);

    const fetchAnnouncements = async () => {
        try {
            const res = await fetch("/api/announcements");
            if (res.ok) {
                const data = await res.json();
                setAnnouncements(data.announcements);
            }
        } catch (error) {
            console.error("Error fetching announcements:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleDismiss = () => {
        setIsVisible(false);
    };

    if (loading || !isVisible || announcements.length === 0) {
        return null;
    }

    const currentAnnouncement = announcements[currentIndex];

    const getTypeStyles = (type: string) => {
        switch (type) {
            case "CRITICAL":
                return {
                    bg: "bg-gradient-to-r from-red-500 to-red-600",
                    icon: "⚠️",
                    text: "text-white",
                };
            case "WARNING":
                return {
                    bg: "bg-gradient-to-r from-yellow-500 to-orange-500",
                    icon: "⚡",
                    text: "text-black",
                };
            default:
                return {
                    bg: "bg-gradient-to-r from-blue-500 to-indigo-600",
                    icon: "ℹ️",
                    text: "text-white",
                };
        }
    };

    const styles = getTypeStyles(currentAnnouncement.type);

    return (
        <div className={`${styles.bg} ${styles.text} shadow-lg animate-slideDown`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
                <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3 flex-1 min-w-0">
                        <span className="text-2xl flex-shrink-0">{styles.icon}</span>
                        <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                                <h3 className="font-bold text-sm uppercase tracking-wide">
                                    {currentAnnouncement.type}
                                </h3>
                                {announcements.length > 1 && (
                                    <span className="text-xs opacity-75">
                                        ({currentIndex + 1}/{announcements.length})
                                    </span>
                                )}
                            </div>
                            <p className="font-semibold text-base">
                                {currentAnnouncement.title}
                            </p>
                            <p className="text-sm opacity-90 mt-1">
                                {currentAnnouncement.message}
                            </p>
                        </div>
                    </div>

                    {/* Navigation dots for multiple announcements */}
                    {announcements.length > 1 && (
                        <div className="hidden sm:flex items-center gap-1.5">
                            {announcements.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    className={`w-2 h-2 rounded-full transition-all ${index === currentIndex
                                            ? "bg-white w-6"
                                            : "bg-white/40 hover:bg-white/60"
                                        }`}
                                    aria-label={`Go to announcement ${index + 1}`}
                                />
                            ))}
                        </div>
                    )}

                    {/* Dismiss button */}
                    <button
                        onClick={handleDismiss}
                        className="flex-shrink-0 p-1 hover:bg-white/20 rounded-full transition"
                        aria-label="Dismiss announcement"
                    >
                        <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}
