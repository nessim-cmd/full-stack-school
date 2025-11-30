import { getSessionUser } from "@/lib/authUser";
import { redirect } from "next/navigation";
import prisma from "@/lib/prisma";
import ProfileForm from "@/components/ProfileForm";
import Image from "next/image";

import Link from "next/link";

const ProfilePage = async () => {
    const session = await getSessionUser();

    if (!session) {
        redirect("/login");
    }

    let userData: any = null;

    // Fetch user data based on role
    // Fetch user data based on role
    if (session.userType === "manager") {
        userData = await prisma.schoolManager.findUnique({
            where: { id: session.userId },
        });
    } else {
        switch (session.role) {
            case "admin":
                userData = await prisma.admin.findUnique({
                    where: { id: session.userId },
                });
                break;
            case "teacher":
                userData = await prisma.teacher.findUnique({
                    where: { id: session.userId },
                });
                break;
            case "student":
                userData = await prisma.student.findUnique({
                    where: { id: session.userId },
                });
                break;
            case "parent":
                userData = await prisma.parent.findUnique({
                    where: { id: session.userId },
                });
                break;
        }
    }

    if (!userData) {
        redirect("/login");
    }

    return (
        <div className="flex-1 p-4 flex flex-col gap-4 xl:flex-row">
            {/* LEFT */}
            <div className="w-full xl:w-2/3">
                <div className="bg-white p-4 rounded-md">
                    <h1 className="text-xl font-semibold mb-4">Profile Settings</h1>
                    <div className="flex flex-col gap-4">
                        {/* Profile Image */}
                        <div className="flex items-center gap-4">
                            <Image
                                src={userData.img || "/noAvatar.png"}
                                alt="Profile"
                                width={100}
                                height={100}
                                className="w-24 h-24 rounded-full object-cover"
                            />
                            <div>
                                <h2 className="text-lg font-medium">
                                    {session.userType === "manager"
                                        ? userData.name
                                        : session.role === "admin"
                                            ? userData.username
                                            : `${userData.name} ${userData.surname}`}
                                </h2>
                                <p className="text-sm text-gray-500 capitalize">{session.role}</p>
                            </div>
                        </div>

                        {/* Profile Form */}
                        <ProfileForm userData={userData} role={session.role} />
                    </div>
                </div>
            </div>

            {/* RIGHT */}
            <div className="w-full xl:w-1/3 flex flex-col gap-4">
                {session.role === "admin" && (
                    <div className="bg-white p-4 rounded-md">
                        <h2 className="text-lg font-semibold mb-4">Admin Actions</h2>
                        <Link href="/admin/admins" className="w-full bg-lamaSky text-white p-2 rounded-md flex items-center justify-center gap-2 hover:bg-lamaSkyLight transition-colors">
                            <span>Manage Admins</span>
                        </Link>
                    </div>
                )}
                <div className="bg-white p-4 rounded-md">
                    <h2 className="text-lg font-semibold mb-4">Account Information</h2>
                    <div className="flex flex-col gap-2 text-sm">
                        <div className="flex justify-between">
                            <span className="text-gray-500">Username:</span>
                            <span className="font-medium">
                                {session.userType === "manager" ? userData.email : userData.username}
                            </span>
                        </div>
                        {(userData.email || session.userType === "manager") && (
                            <div className="flex justify-between">
                                <span className="text-gray-500">Email:</span>
                                <span className="font-medium">{userData.email}</span>
                            </div>
                        )}
                        {userData.phone && (
                            <div className="flex justify-between">
                                <span className="text-gray-500">Phone:</span>
                                <span className="font-medium">{userData.phone}</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
