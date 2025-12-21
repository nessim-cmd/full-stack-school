"use client";

import { useState } from "react";
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

type NotificationsListProps = {
    notifications: Notification[];
    userId: string;
    userRole: string;
};

const NotificationsList = ({
    notifications: initialNotifications,
    userId,
    userRole,
}: NotificationsListProps) => {
    const [notifications, setNotifications] = useState(initialNotifications);
    const router = useRouter();

    const handleMarkAsRead = async (notificationId: number) => {
        await markNotificationAsRead(notificationId);
        setNotifications((prev) =>
            prev.map((n) => (n.id === notificationId ? { ...n, read: true } : n))
        );
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
            default:
                return "📢";
        }
    };

    const getNotificationColor = (type: string) => {
        switch (type) {
            case "password_change":
                return "bg-blue-50 border-blue-200";
            case "absence":
                return "bg-red-50 border-red-200";
            default:
                return "bg-gray-50 border-gray-200";
        }
    };

    const unreadCount = notifications.filter((n) => !n.read).length;

    return (
        <div>
            {unreadCount > 0 && (
                <div className="mb-4 flex items-center justify-between">
                    <p className="text-sm text-gray-600">
                        You have {unreadCount} unread notification{unreadCount !== 1 ? "s" : ""}
                    </p>
                    <button
                        onClick={handleMarkAllAsRead}
                        className="text-sm text-blue-500 hover:text-blue-600"
                    >
                        Mark all as read
                    </button>
                </div>
            )}

            {notifications.length === 0 ? (
                <div className="text-center py-12 text-gray-500">
                    <p className="text-lg mb-2">No notifications yet</p>
                    <p className="text-sm">You'll see notifications here when you have them</p>
                </div>
            ) : (
                <div className="space-y-3">
                    {notifications.map((notification) => (
                        <div
                            key={notification.id}
                            className={`p-4 rounded-lg border-2 ${!notification.read ? getNotificationColor(notification.type) : "bg-white border-gray-200"
                                } ${!notification.read ? "shadow-sm" : ""}`}
                        >
                            <div className="flex items-start gap-3">
                                <span className="text-2xl">{getNotificationIcon(notification.type)}</span>
                                <div className="flex-1">
                                    <div className="flex items-start justify-between">
                                        <h3 className="font-semibold text-gray-900">
                                            {notification.title}
                                        </h3>
                                        {!notification.read && (
                                            <button
                                                onClick={() => handleMarkAsRead(notification.id)}
                                                className="text-xs text-blue-500 hover:text-blue-600 ml-2"
                                            >
                                                Mark as read
                                            </button>
                                        )}
                                    </div>
                                    <p className="text-sm text-gray-700 mt-1">{notification.message}</p>
                                    <p className="text-xs text-gray-500 mt-2">
                                        {new Date(notification.createdAt).toLocaleString()}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default NotificationsList;
