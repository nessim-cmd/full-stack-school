import { getSessionUser } from "@/lib/authUser";
import { redirect } from "next/navigation";
import { getAllNotifications, markNotificationAsRead } from "@/lib/notification-actions";
import NotificationsList from "@/components/NotificationsList";

const NotificationsPage = async () => {
    const session = await getSessionUser();

    if (!session) {
        redirect("/login");
    }

    const notifications = await getAllNotifications(session.id, session.role);

    return (
        <div className="flex-1 p-4 flex flex-col gap-4">
            <div className="bg-white p-4 rounded-md">
                <h1 className="text-xl font-semibold mb-4">Notifications</h1>
                <NotificationsList
                    notifications={notifications}
                    userId={session.id}
                    userRole={session.role}
                />
            </div>
        </div>
    );
};

export default NotificationsPage;
