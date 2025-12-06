import { getSessionUser } from "@/lib/authUser";
import DynamicMenu from "@/components/DynamicMenu";
import Navbar from "@/components/Navbar";
import AnnouncementsBanner from "@/components/AnnouncementsBanner";
import { ServiceAccessGuard } from "@/components/ServiceAccessGuard";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import prisma from "@/lib/prisma";

// Force dynamic rendering to prevent caching
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await getSessionUser();
  const role = user?.role;
  const schoolId = user?.schoolId;

  // Check if school has services configured
  if (schoolId && role === "admin") {
    try {
      const school = await prisma.school.findUnique({
        where: { id: schoolId },
        select: { enabledServices: true },
      });

      if (!school) {
        redirect("/login");
      }

      // Parse enabled services
      let enabledServices: string[] = [];
      if (school.enabledServices) {
        try {
          enabledServices = JSON.parse(school.enabledServices);
        } catch {
          enabledServices = [];
        }
      }

      // If no services configured and it's admin first time login, redirect to configure
      if (enabledServices.length === 0) {
        redirect(`/admin/school/${schoolId}/configure-services`);
      }
    } catch (error) {
      console.error("Error checking services configuration:", error);
      // Continue anyway if there's an error
    }
  }

  return (
    <div className="h-screen flex">
      {/* Service Access Guard - checks if user can access current route */}
      <ServiceAccessGuard />
      
      {/* LEFT */}
      <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-4">
        <Link
          href={role ? `/${role}` : "/"}
          className="flex items-center justify-center lg:justify-start gap-2"
        >
          <Image src="/logo.png" alt="logo" width={32} height={32} />
          <span className="hidden lg:block font-bold">SchooLama</span>
        </Link>
        <DynamicMenu />
      </div>
      {/* RIGHT */}
      <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] overflow-scroll flex flex-col">
        <Navbar />
        <AnnouncementsBanner />
        {children}
      </div>
    </div>
  );
}
