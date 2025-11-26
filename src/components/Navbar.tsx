import Image from "next/image";
import { getSessionUser } from "@/lib/authUser";
import UserButton from "./UserButton";
import NotificationBell from "./NotificationBell";
import prisma from "@/lib/prisma";
import { getUnreadNotifications } from "@/lib/notification-actions";

const Navbar = async () => {
  const session = await getSessionUser();

  let userImage = "/noAvatar.png";
  let notifications: any[] = [];

  if (session) {
    // Fetch user data based on role to get profile image
    // Note: Admin and Parent models don't have img field
    let userData: any = null;

    switch (session.role) {
      case "teacher":
        userData = await prisma.teacher.findUnique({
          where: { id: session.id },
          select: { img: true },
        });
        break;
      case "student":
        userData = await prisma.student.findUnique({
          where: { id: session.id },
          select: { img: true },
        });
        break;
      // Admin and Parent don't have img field, so they'll use default avatar
    }

    if (userData?.img) {
      userImage = userData.img;
    }

    // Fetch notifications
    notifications = await getUnreadNotifications(session.id, session.role);
  }

  return (
    <div className="flex items-center justify-between p-4">
      {/* SEARCH BAR */}
      <div className="hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2">
        <Image src="/search.png" alt="" width={14} height={14} />
        <input
          type="text"
          placeholder="Search..."
          className="w-[200px] p-2 bg-transparent outline-none"
        />
      </div>
      {/* ICONS AND USER */}
      <div className="flex items-center gap-6 justify-end w-full">
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
          <Image src="/message.png" alt="" width={20} height={20} />
        </div>
        {session && (
          <NotificationBell
            initialNotifications={notifications}
            userId={session.id}
            userRole={session.role}
          />
        )}
        {session && (
          <UserButton
            username={session.username}
            role={session.role}
            userImage={userImage}
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
