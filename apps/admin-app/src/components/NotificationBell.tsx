"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { markNotificationAsRead, markAllNotificationsAsRead } from "@/lib/notification-actions";
import { useRouter } from "next/navigation";

type Notification = {
    id: number;
    title: string;
    message: string;
    type: string;
    read: boolean;
    createdAt: Date;
};

type NotificationBellProps = {
    initialNotifications: Notification[];
    userId: string;
    userRole: string;
};

const NotificationBell = ({
    initialNotifications,
    userId,
    userRole,
}: NotificationBellProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [notifications, setNotifications] = useState(initialNotifications);
    const router = useRouter();

    useEffect(() => {
        // Connect to SSE endpoint
        const eventSource = new EventSource("/api/sse");

        eventSource.onmessage = (event) => {
            try {
                // Heartbeat check
                if (event.data === ": heartbeat") return;

                const newNotification = JSON.parse(event.data);

                // Add new notification to the top
                setNotifications((prev) => [newNotification, ...prev]);

                // Optional: Play a sound or show a toast
            } catch (error) {
                console.error("Error parsing notification:", error);
            }
        };

        eventSource.onerror = (error) => {
            console.error("SSE Error:", error);
            eventSource.close();
        };

        return () => {
            eventSource.close();
        };
    }, []);

    const unreadCount = notifications.filter((n) => !n.read).length;

    const handleNotificationClick = async (notification: Notification) => {
        await markNotificationAsRead(notification.id);
        setNotifications((prev) =>
            prev.map((n) => (n.id === notification.id ? { ...n, read: true } : n))
        );

        // Redirect based on notification type
        if (notification.type === "message_received") {
            router.push("/list/messages");
        } else if (notification.type === "ticket_reply" || notification.type === "ticket_created") {
            router.push("/admin/support");
        }

        setIsOpen(false);
        router.refresh();
    };

    const handleMarkAllAsRead = async () => {
        await markAllNotificationsAsRead(userId, userRole);
        setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
        router.refresh();
    };

    const getNotificationIcon = (type: string) => {
        switch (type) {
            case "password_change":
                return "🔐";
            case "absence":
                return "⚠️";
            case "ticket_reply":
                return "💬";
            case "ticket_created":
                return "🎫";
            case "message_received":
                return "✉️";
            default:
                return "📢";
        }
    };

    return (
        <div className="relative">
            <div
                className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative"
                onClick={() => setIsOpen(!isOpen)}
            >
                <Image src="/announcement.png" alt="" width={20} height={20} />
                {unreadCount > 0 && (
                    <div className="absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center bg-purple-500 text-white rounded-full text-xs">
                        {unreadCount}
                    </div>
                )}
            </div>

            {isOpen && (
                <div className="absolute top-12 right-0 bg-white rounded-md shadow-lg w-80 max-h-96 overflow-y-auto z-50">
                    <div className="p-4 border-b flex items-center justify-between">
                        <h3 className="font-semibold">Notifications</h3>
                        {unreadCount > 0 && (
                            <button
                                onClick={handleMarkAllAsRead}
                                className="text-xs text-blue-500 hover:text-blue-600"
                            >
                                Mark all as read
                            </button>
                        )}
                    </div>

                    {notifications.length === 0 ? (
                        <div className="p-4 text-center text-gray-500 text-sm">
                            No notifications
                        </div>
                    ) : (
                        <div>
                            {notifications.map((notification) => (
                                <div
                                    key={notification.id}
                                    className={`p-4 border-b hover:bg-gray-50 cursor-pointer ${!notification.read ? "bg-blue-50" : ""
                                        }`}
                                    onClick={() => handleNotificationClick(notification)}
                                >
                                    <div className="flex items-start gap-2">
                                        <span className="text-xl">
                                            {getNotificationIcon(notification.type)}
                                        </span>
                                        <div className="flex-1">
                                            <h4 className="font-medium text-sm">
                                                {notification.title}
                                            </h4>
                                            <p className="text-xs text-gray-600 mt-1">
                                                {notification.message}
                                            </p>
                                            <p className="text-xs text-gray-400 mt-1">
                                                {new Date(notification.createdAt).toLocaleString()}
                                            </p>
                                        </div>
                                        {!notification.read && (
                                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    <div className="p-2 border-t">
                        <Link
                            href="/notifications"
                            className="block text-center text-sm text-blue-500 hover:text-blue-600"
                            onClick={() => setIsOpen(false)}
                        >
                            View all notifications
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default NotificationBell;
