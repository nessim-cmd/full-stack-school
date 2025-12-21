import prisma from "@/lib/prisma";
import FinanceChart from "./FinanceChart";
import { getSchoolId } from "@/lib/authUser";

const FinanceChartContainer = async () => {
    const schoolId = await getSchoolId();

    // Get invoices for the last 12 months
    const today = new Date();
    const twelveMonthsAgo = new Date(today.getFullYear(), today.getMonth() - 11, 1);

    const invoices = await prisma.invoice.findMany({
        where: {
            schoolId,
            createdAt: {
                gte: twelveMonthsAgo,
            },
        },
        select: {
            amount: true,
            status: true,
            createdAt: true,
            paidAt: true,
        },
    });

    // Group by month
    const monthlyData: { [key: string]: { income: number; pending: number } } = {};

    // Initialize last 12 months
    for (let i = 0; i < 12; i++) {
        const d = new Date(today.getFullYear(), today.getMonth() - i, 1);
        const monthName = d.toLocaleString('default', { month: 'short' });
        monthlyData[monthName] = { income: 0, pending: 0 };
    }

    invoices.forEach(invoice => {
        const date = new Date(invoice.createdAt);
        const monthName = date.toLocaleString('default', { month: 'short' });

        if (monthlyData[monthName]) {
            if (invoice.status === "PAID") {
                monthlyData[monthName].income += invoice.amount;
            } else {
                monthlyData[monthName].pending += invoice.amount;
            }
        }
    });

    // Convert to array and reverse to show chronological order (oldest to newest)
    // Note: The loop above goes backwards from today, so we need to reverse the months order for display
    // Actually, let's construct the array in chronological order
    const data = [];
    for (let i = 11; i >= 0; i--) {
        const d = new Date(today.getFullYear(), today.getMonth() - i, 1);
        const monthName = d.toLocaleString('default', { month: 'short' });
        data.push({
            name: monthName,
            income: monthlyData[monthName]?.income || 0,
            expense: monthlyData[monthName]?.pending || 0, // Reusing 'expense' prop for 'pending' for now, or update component
        });
    }

    return (
        <div className="bg-white rounded-xl w-full h-full p-4">
            <div className="flex justify-between items-center">
                <h1 className="text-lg font-semibold">Finance (Revenue vs Pending)</h1>
            </div>
            <FinanceChart data={data} />
        </div>
    );
};

export default FinanceChartContainer;
