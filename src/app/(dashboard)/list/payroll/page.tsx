import prisma from "@/lib/prisma";
import { getSchoolId } from "@/lib/authUser";
import { redirect } from "next/navigation";
import PayrollDashboard from "@/components/PayrollDashboard";

const PayrollPage = async ({
    searchParams,
}: {
    searchParams: { month?: string; year?: string };
}) => {
    const schoolId = await getSchoolId();
    if (!schoolId) return redirect("/login");

    const currentDate = new Date();
    const month = searchParams.month ? parseInt(searchParams.month) : currentDate.getMonth() + 1;
    const year = searchParams.year ? parseInt(searchParams.year) : currentDate.getFullYear();

    // Fetch teachers with their rates and payrolls
    const teachers = await prisma.teacher.findMany({
        where: { schoolId },
        include: {
            payrollRates: {
                where: { effectiveTo: null },
                orderBy: { effectiveFrom: "desc" },
                take: 1,
            },
            payrolls: {
                where: { month, year },
                include: { deductions: true },
            },
            _count: {
                select: { lessons: true },
            },
        },
        orderBy: { name: "asc" },
    });

    // Fetch all payrolls for the selected month
    const payrolls = await prisma.teacherPayroll.findMany({
        where: { schoolId, month, year },
        include: {
            teacher: true,
            deductions: true,
        },
        orderBy: { createdAt: "desc" },
    });

    // Calculate stats
    const totalBaseSalary = payrolls.reduce((sum, p) => sum + p.baseSalary, 0);
    const totalDeductions = payrolls.reduce((sum, p) => sum + p.totalDeductions, 0);
    const totalNetSalary = payrolls.reduce((sum, p) => sum + p.netSalary, 0);
    const totalPaid = payrolls.filter(p => p.status === "PAID").reduce((sum, p) => sum + p.netSalary, 0);
    const totalPending = payrolls.filter(p => p.status !== "PAID").reduce((sum, p) => sum + p.netSalary, 0);

    return (
        <div className="p-4 flex gap-4 flex-col">
            {/* TOP CARDS */}
            <div className="flex gap-4 justify-between flex-wrap">
                <div className="bg-lamaSky p-4 rounded-xl flex-1 min-w-[200px]">
                    <h1 className="text-2xl font-semibold my-2">${totalBaseSalary.toLocaleString()}</h1>
                    <h2 className="capitalize text-sm font-medium text-gray-500">Total Base Salary</h2>
                </div>
                <div className="bg-lamaYellow p-4 rounded-xl flex-1 min-w-[200px]">
                    <h1 className="text-2xl font-semibold my-2">${totalDeductions.toLocaleString()}</h1>
                    <h2 className="capitalize text-sm font-medium text-gray-500">Total Deductions</h2>
                </div>
                <div className="bg-lamaPurple p-4 rounded-xl flex-1 min-w-[200px]">
                    <h1 className="text-2xl font-semibold my-2">${totalNetSalary.toLocaleString()}</h1>
                    <h2 className="capitalize text-sm font-medium text-gray-500">Total Net Salary</h2>
                </div>
                <div className="bg-green-500 text-white p-4 rounded-xl flex-1 min-w-[200px]">
                    <h1 className="text-2xl font-semibold my-2">${totalPaid.toLocaleString()}</h1>
                    <h2 className="capitalize text-sm font-medium">Paid</h2>
                </div>
                <div className="bg-red-500 text-white p-4 rounded-xl flex-1 min-w-[200px]">
                    <h1 className="text-2xl font-semibold my-2">${totalPending.toLocaleString()}</h1>
                    <h2 className="capitalize text-sm font-medium">Pending</h2>
                </div>
            </div>

            <PayrollDashboard
                teachers={teachers as any}
                payrolls={payrolls as any}
                currentMonth={month}
                currentYear={year}
            />
        </div>
    );
};

export default PayrollPage;
