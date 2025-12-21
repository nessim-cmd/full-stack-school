// src/components/DynamicMenu.tsx - Menu with service filtering support

import { getSessionUser } from "@/lib/authUser";
import { getAllServicesWithStatus, type ServiceKey } from "@/lib/services";
import Image from "next/image";
import Link from "next/link";
import prisma from "@/lib/prisma";

// Force dynamic rendering to prevent caching
export const dynamic = 'force-dynamic';
export const revalidate = 0;

interface MenuItem {
  icon: string;
  label: string;
  href: string;
  visible: string[];
  requiredService?: ServiceKey; // Service key required to show this item
}

interface MenuSection {
  title: string;
  items: MenuItem[];
}

const menuItems: MenuSection[] = [
  {
    title: "MENU",
    items: [
      {
        icon: "/home.png",
        label: "Home",
        href: "/",
        visible: ["admin", "teacher", "student", "parent"],
      },
      // Users Management
      {
        icon: "/teacher.png",
        label: "Teachers",
        href: "/list/teachers",
        visible: ["admin", "teacher"],
        requiredService: "users",
      },
      {
        icon: "/student.png",
        label: "Students",
        href: "/list/students",
        visible: ["admin", "teacher"],
        requiredService: "users",
      },
      {
        icon: "/parent.png",
        label: "Parents",
        href: "/list/parents",
        visible: ["admin", "teacher"],
        requiredService: "users",
      },
      // Applications
      {
        icon: "/student.png",
        label: "Applications",
        href: "/list/applications",
        visible: ["admin"],
        requiredService: "applications",
      },
      // Academic
      {
        icon: "/subject.png",
        label: "Subjects",
        href: "/list/subjects",
        visible: ["admin"],
        requiredService: "academic",
      },
      {
        icon: "/class.png",
        label: "Classes",
        href: "/list/classes",
        visible: ["admin", "teacher"],
        requiredService: "academic",
      },
      {
        icon: "/lesson.png",
        label: "Lessons",
        href: "/list/lessons",
        visible: ["admin", "teacher"],
        requiredService: "academic",
      },
      {
        icon: "/exam.png",
        label: "Exams",
        href: "/list/exams",
        visible: ["admin", "teacher", "student", "parent"],
        requiredService: "academic",
      },
      {
        icon: "/assignment.png",
        label: "Assignments",
        href: "/list/assignments",
        visible: ["admin", "teacher", "student", "parent"],
        requiredService: "academic",
      },
      {
        icon: "/result.png",
        label: "Results",
        href: "/list/results",
        visible: ["admin", "teacher", "student", "parent"],
        requiredService: "academic",
      },
      // Attendance
      {
        icon: "/attendance.png",
        label: "Mark Attendance",
        href: "/attendance",
        visible: ["teacher"],
        requiredService: "attendance",
      },
      {
        icon: "/attendance.png",
        label: "Attendance",
        href: "/list/attendance",
        visible: ["admin", "teacher", "student", "parent"],
        requiredService: "attendance",
      },
      // Events
      {
        icon: "/calendar.png",
        label: "Events",
        href: "/list/events",
        visible: ["admin", "teacher", "student", "parent"],
        requiredService: "events",
      },
      // Messaging & Announcements
      {
        icon: "/message.png",
        label: "Messages",
        href: "/list/messages",
        visible: ["admin", "teacher", "student", "parent"],
        requiredService: "messaging",
      },
      {
        icon: "/announcement.png",
        label: "Announcements",
        href: "/list/announcements",
        visible: ["admin", "teacher", "student", "parent"],
        requiredService: "announcements",
      },
      // Notifications
      {
        icon: "/notification.png",
        label: "Notifications",
        href: "/notifications",
        visible: ["admin", "teacher", "student", "parent"],
        requiredService: "notifications",
      },
      // Resources
      {
        icon: "/lesson.png",
        label: "Resources",
        href: "/list/resources",
        visible: ["admin", "teacher", "student", "parent"],
        requiredService: "resources",
      },
      // Finance
      {
        icon: "/finance.png",
        label: "Finance",
        href: "/list/finance",
        visible: ["admin"],
        requiredService: "finance",
      },
      {
        icon: "/finance.png",
        label: "Payroll",
        href: "/list/payroll",
        visible: ["admin"],
        requiredService: "finance",
      },
    ],
  },
  {
    title: "OTHER",
    items: [
      {
        icon: "/profile.png",
        label: "Profile",
        href: "/profile",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/message.png",
        label: "Support",
        href: "/admin/support",
        visible: ["admin"],
      },
      {
        icon: "/setting.png",
        label: "Settings",
        href: "/settings",
        visible: ["admin"],
      },
      {
        icon: "/logout.png",
        label: "Logout",
        href: "/logout",
        visible: ["admin", "teacher", "student", "parent"],
      },
    ],
  },
];

export const DynamicMenu = async () => {
  const user = await getSessionUser();
  const role = user?.role || "guest";
  const schoolId = user?.schoolId;

  // Fetch enabled services for this school
  let enabledServices: ServiceKey[] = [];
  if (schoolId) {
    try {
      const school = await prisma.school.findUnique({
        where: { id: schoolId },
        select: { enabledServices: true },
      });
      
      console.log("[DynamicMenu] School data:", { schoolId, enabledServices: school?.enabledServices });
      
      if (school?.enabledServices) {
        try {
          enabledServices = JSON.parse(school.enabledServices);
          console.log("[DynamicMenu] Parsed enabledServices:", enabledServices);
        } catch (parseError) {
          console.error("[DynamicMenu] Parse error:", parseError);
          enabledServices = [];
        }
      }
    } catch (error) {
      console.error("Error fetching enabled services:", error);
    }
  }

  console.log("[DynamicMenu] Final enabledServices array:", enabledServices);

  const isServiceEnabled = (serviceKey?: ServiceKey): boolean => {
    // If no service is required, show the item
    if (!serviceKey) return true;
    // If service is required, check if it's enabled
    const isEnabled = enabledServices.includes(serviceKey);
    console.log(`[DynamicMenu] Checking service "${serviceKey}": ${isEnabled} (array contains: ${enabledServices.join(", ")})`);
    return isEnabled;
  };

  return (
    <div className="mt-4 text-sm">
      {menuItems.map((section) => (
        <div className="flex flex-col gap-2" key={section.title}>
          <span className="hidden lg:block text-gray-400 font-light my-4">
            {section.title}
          </span>
          {section.items.map((item) => {
            const isVisible = item.visible.includes(role);
            const serviceEnabled = isServiceEnabled(item.requiredService);

            if (isVisible && serviceEnabled) {
              return (
                <Link
                  href={item.label === "Home" ? `/${role}` : item.href}
                  key={item.label}
                  className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2 md:px-2 rounded-md hover:bg-lamaSkyLight transition-colors"
                >
                  <Image src={item.icon} alt="" width={20} height={20} />
                  <span className="hidden lg:block">{item.label}</span>
                </Link>
              );
            }
          })}
        </div>
      ))}
    </div>
  );
};

export default DynamicMenu;
