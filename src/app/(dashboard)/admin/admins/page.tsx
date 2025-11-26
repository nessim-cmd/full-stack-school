import { getSessionUser } from "@/lib/authUser";
import { redirect } from "next/navigation";
import prisma from "@/lib/prisma";
import Image from "next/image";
import AdminFormModal from "@/components/AdminFormModal";

const AdminsPage = async () => {
    const session = await getSessionUser();

    if (!session || session.role !== "admin") {
        redirect("/login");
    }

    const admins = await prisma.admin.findMany({
        orderBy: {
            username: "asc",
        },
    });

    return (
        <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
            {/* TOP */}
            <div className="flex items-center justify-between mb-4">
                <h1 className="text-lg font-semibold">All Admins</h1>
                <AdminFormModal type="create" />
            </div>

            {/* LIST */}
            <table className="w-full">
                <thead>
                    <tr className="text-left text-gray-500 text-sm">
                        <th className="p-3">Username</th>
                        <th className="p-3">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {admins.map((admin) => (
                        <tr
                            key={admin.id}
                            className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight"
                        >
                            <td className="p-3">{admin.username}</td>
                            <td className="p-3">
                                <div className="flex items-center gap-2">
                                    <AdminFormModal type="update" data={admin} />
                                    <AdminFormModal type="delete" id={admin.id} />
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {admins.length === 0 && (
                <div className="text-center py-8 text-gray-500">
                    No admins found. Create your first admin!
                </div>
            )}
        </div>
    );
};

export default AdminsPage;
