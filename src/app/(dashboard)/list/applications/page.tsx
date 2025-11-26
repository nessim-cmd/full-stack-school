import { getSessionUser } from "@/lib/authUser";
import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";
import ApplicationsTable from "@/components/ApplicationsTable";

export default async function ApplicationsPage() {
    const session = await getSessionUser();

    if (!session || session.role !== "admin") {
        redirect("/login");
    }

    const applications = await prisma.registrationRequest.findMany({
        orderBy: {
            createdAt: "desc",
        },
    });

    return (
        <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
            <div className="flex items-center justify-between mb-5">
                <h1 className="text-lg font-semibold">Student Applications</h1>
            </div>
            <ApplicationsTable applications={applications} />
        </div>
    );
}
