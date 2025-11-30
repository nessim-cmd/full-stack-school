import prisma from "@/lib/prisma";
import { getSchoolId } from "@/lib/authUser";
import FinanceSettings from "@/components/FinanceSettings";
import InvoiceList from "@/components/InvoiceList";
import { redirect } from "next/navigation";

const FinancePage = async () => {
    const schoolId = await getSchoolId();
    if (!schoolId) return redirect("/login");

    // Fetch data for settings
    const [feeCategories, feeStructures, grades, invoices] = await Promise.all([
        prisma.feeCategory.findMany({ where: { schoolId } }),
        prisma.feeStructure.findMany({
            where: { schoolId },
            include: { feeCategory: true, grade: true }
        }),
        prisma.grade.findMany({
            where: { schoolId },
            orderBy: { level: "asc" }
        }),
        prisma.studentInvoice.findMany({
            where: { schoolId },
            include: {
                student: {
                    include: { grade: true }
                },
                payments: true
            },
            orderBy: { createdAt: "desc" }
        })
    ]);

    // Calculate stats
    const totalInvoiced = invoices.reduce((sum, inv) => sum + inv.amount, 0);
    const totalCollected = invoices.reduce((sum, inv) => sum + inv.payments.reduce((pSum, p) => pSum + p.amount, 0), 0);
    const pendingAmount = totalInvoiced - totalCollected;

    return (
        <div className="p-4 flex gap-4 flex-col md:flex-row">
            {/* LEFT */}
            <div className="w-full">
                {/* TOP CARDS */}
                <div className="flex gap-4 justify-between flex-wrap mb-8">
                    <div className="bg-lamaSky p-4 rounded-xl flex-1 min-w-[200px]">
                        <h1 className="text-2xl font-semibold my-2">${totalCollected.toLocaleString()}</h1>
                        <h2 className="capitalize text-sm font-medium text-gray-500">Total Collected</h2>
                    </div>
                    <div className="bg-lamaYellow p-4 rounded-xl flex-1 min-w-[200px]">
                        <h1 className="text-2xl font-semibold my-2">${pendingAmount.toLocaleString()}</h1>
                        <h2 className="capitalize text-sm font-medium text-gray-500">Pending Fees</h2>
                    </div>
                    <div className="bg-lamaPurple p-4 rounded-xl flex-1 min-w-[200px]">
                        <h1 className="text-2xl font-semibold my-2">${totalInvoiced.toLocaleString()}</h1>
                        <h2 className="capitalize text-sm font-medium text-gray-500">Total Invoiced</h2>
                    </div>
                </div>

                <div className="flex flex-col gap-8">
                    <FinanceSettings
                        feeCategories={feeCategories}
                        feeStructures={feeStructures}
                        grades={grades}
                    />
                    <InvoiceList invoices={invoices as any} />
                </div>
            </div>
        </div>
    );
};

export default FinancePage;
