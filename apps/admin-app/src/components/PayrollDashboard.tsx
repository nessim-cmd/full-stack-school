"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
    setTeacherHourlyRate,
    calculateMonthlyPayroll,
    calculateAllTeachersPayroll,
    addPayrollDeduction,
    deletePayrollDeduction,
    markPayrollAsPaid,
    approvePayroll,
} from "@/lib/payroll-actions";

type Teacher = {
    id: string;
    name: string;
    surname: string;
    payrollRates: { hourlyRate: number }[];
    payrolls: any[];
    _count: { lessons: number };
};

type Payroll = {
    id: string;
    month: number;
    year: number;
    status: string;
    totalHours: number;
    hourlyRate: number;
    baseSalary: number;
    totalDeductions: number;
    netSalary: number;
    paidAt: Date | null;
    teacher: { name: string; surname: string };
    deductions: { id: string; reason: string; amount: number; notes: string | null }[];
};

const PayrollDashboard = ({
    teachers,
    payrolls,
    currentMonth,
    currentYear,
}: {
    teachers: Teacher[];
    payrolls: Payroll[];
    currentMonth: number;
    currentYear: number;
}) => {
    const [loading, setLoading] = useState(false);
    const [selectedTeacher, setSelectedTeacher] = useState<string>("");
    const [newRate, setNewRate] = useState("");
    const [selectedPayroll, setSelectedPayroll] = useState<Payroll | null>(null);
    const [deductionForm, setDeductionForm] = useState({ reason: "", amount: "", notes: "" });
    const router = useRouter();

    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const handleSetRate = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!selectedTeacher || !newRate) return;

        setLoading(true);
        try {
            const res = await setTeacherHourlyRate(selectedTeacher, parseFloat(newRate));
            if (res.success) {
                alert(res.message);
                setSelectedTeacher("");
                setNewRate("");
                router.refresh();
            } else {
                alert(res.message);
            }
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const handleCalculateAll = async () => {
        if (!confirm(`Calculate payroll for all teachers for ${monthNames[currentMonth - 1]} ${currentYear}?`)) return;

        setLoading(true);
        try {
            const res = await calculateAllTeachersPayroll(currentMonth, currentYear);
            alert(res.message);
            router.refresh();
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const handleCalculateSingle = async (teacherId: string) => {
        setLoading(true);
        try {
            const res = await calculateMonthlyPayroll(teacherId, currentMonth, currentYear);
            if (res.success) {
                alert(`Calculated: ${res.totalHours} hours × $${res.baseSalary} = $${res.baseSalary}`);
                router.refresh();
            } else {
                alert(res.message);
            }
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const handleAddDeduction = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!selectedPayroll) return;

        setLoading(true);
        try {
            const res = await addPayrollDeduction(
                selectedPayroll.id,
                deductionForm.reason,
                parseFloat(deductionForm.amount),
                deductionForm.notes || undefined
            );
            if (res.success) {
                alert(res.message);
                setDeductionForm({ reason: "", amount: "", notes: "" });
                router.refresh();
            } else {
                alert(res.message);
            }
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const handleMarkPaid = async (payrollId: string) => {
        if (!confirm("Mark this payroll as PAID?")) return;

        setLoading(true);
        try {
            const res = await markPayrollAsPaid(payrollId, "BANK_TRANSFER");
            alert(res.message);
            router.refresh();
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const handleApprove = async (payrollId: string) => {
        setLoading(true);
        try {
            const res = await approvePayroll(payrollId);
            alert(res.message);
            router.refresh();
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="space-y-8">
            {/* Month/Year Selector */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold">
                        Payroll for {monthNames[currentMonth - 1]} {currentYear}
                    </h2>
                    <div className="flex gap-2">
                        <button
                            onClick={() => router.push(`/list/payroll?month=${currentMonth === 1 ? 12 : currentMonth - 1}&year=${currentMonth === 1 ? currentYear - 1 : currentYear}`)}
                            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                        >
                            ← Prev
                        </button>
                        <button
                            onClick={() => router.push(`/list/payroll?month=${currentMonth === 12 ? 1 : currentMonth + 1}&year=${currentMonth === 12 ? currentYear + 1 : currentYear}`)}
                            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                        >
                            Next →
                        </button>
                        <button
                            onClick={handleCalculateAll}
                            disabled={loading}
                            className="px-4 py-2 bg-lamaYellow text-black rounded hover:bg-yellow-500"
                        >
                            Calculate All
                        </button>
                    </div>
                </div>
            </div>

            {/* Set Hourly Rates */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
                <h2 className="text-xl font-semibold mb-4">Set Hourly Rates</h2>
                <form onSubmit={handleSetRate} className="flex gap-4">
                    <select
                        className="border p-2 rounded flex-1"
                        value={selectedTeacher}
                        onChange={(e) => setSelectedTeacher(e.target.value)}
                        required
                    >
                        <option value="">Select Teacher</option>
                        {teachers.map((t) => (
                            <option key={t.id} value={t.id}>
                                {t.name} {t.surname} (Current: ${t.payrollRates[0]?.hourlyRate || "Not Set"}/hr)
                            </option>
                        ))}
                    </select>
                    <input
                        type="number"
                        step="0.01"
                        placeholder="Hourly Rate"
                        className="border p-2 rounded w-40"
                        value={newRate}
                        onChange={(e) => setNewRate(e.target.value)}
                        required
                    />
                    <button disabled={loading} className="bg-lamaSky text-white px-6 py-2 rounded">
                        Set Rate
                    </button>
                </form>
            </div>

            {/* Payroll List */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
                <h2 className="text-xl font-semibold mb-4">Payroll Records</h2>
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b text-gray-500 text-sm">
                                <th className="p-3">Teacher</th>
                                <th className="p-3">Hours</th>
                                <th className="p-3">Rate</th>
                                <th className="p-3">Base</th>
                                <th className="p-3">Deductions</th>
                                <th className="p-3">Net</th>
                                <th className="p-3">Status</th>
                                <th className="p-3">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {payrolls.map((payroll) => (
                                <tr key={payroll.id} className="border-b hover:bg-gray-50">
                                    <td className="p-3 font-medium">
                                        {payroll.teacher.name} {payroll.teacher.surname}
                                    </td>
                                    <td className="p-3">{payroll.totalHours.toFixed(2)}</td>
                                    <td className="p-3">${payroll.hourlyRate}</td>
                                    <td className="p-3">${payroll.baseSalary.toFixed(2)}</td>
                                    <td className="p-3 text-red-600">-${payroll.totalDeductions.toFixed(2)}</td>
                                    <td className="p-3 font-bold text-green-600">${payroll.netSalary.toFixed(2)}</td>
                                    <td className="p-3">
                                        <span
                                            className={`px-2 py-1 rounded text-xs ${payroll.status === "PAID"
                                                    ? "bg-green-100 text-green-800"
                                                    : payroll.status === "APPROVED"
                                                        ? "bg-blue-100 text-blue-800"
                                                        : "bg-yellow-100 text-yellow-800"
                                                }`}
                                        >
                                            {payroll.status}
                                        </span>
                                    </td>
                                    <td className="p-3 space-x-2">
                                        <button
                                            onClick={() => setSelectedPayroll(payroll)}
                                            className="text-blue-500 text-sm hover:underline"
                                        >
                                            Details
                                        </button>
                                        {payroll.status === "CALCULATED" && (
                                            <button
                                                onClick={() => handleApprove(payroll.id)}
                                                className="text-green-500 text-sm hover:underline"
                                            >
                                                Approve
                                            </button>
                                        )}
                                        {payroll.status === "APPROVED" && (
                                            <button
                                                onClick={() => handleMarkPaid(payroll.id)}
                                                className="text-green-600 text-sm hover:underline"
                                            >
                                                Mark Paid
                                            </button>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Teachers without payroll */}
                <div className="mt-8">
                    <h3 className="text-lg font-semibold mb-4">Teachers Without Payroll This Month</h3>
                    <div className="space-y-2">
                        {teachers
                            .filter((t) => !payrolls.find((p) => p.teacher.name === t.name))
                            .map((teacher) => (
                                <div key={teacher.id} className="flex justify-between items-center p-3 bg-gray-50 rounded">
                                    <div>
                                        <div className="font-medium">
                                            {teacher.name} {teacher.surname}
                                        </div>
                                        <div className="text-sm text-gray-500">
                                            Rate: ${teacher.payrollRates[0]?.hourlyRate || "Not Set"}/hr | Lessons: {teacher._count.lessons}
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => handleCalculateSingle(teacher.id)}
                                        disabled={loading || !teacher.payrollRates[0]}
                                        className="bg-lamaPurple text-white px-4 py-2 rounded text-sm disabled:opacity-50"
                                    >
                                        Calculate
                                    </button>
                                </div>
                            ))}
                    </div>
                </div>
            </div>

            {/* Payroll Details Modal */}
            {selectedPayroll && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white p-6 rounded-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg font-bold">
                                Payroll Details - {selectedPayroll.teacher.name} {selectedPayroll.teacher.surname}
                            </h3>
                            <button onClick={() => setSelectedPayroll(null)} className="text-gray-500 hover:text-black">
                                ✕
                            </button>
                        </div>

                        <div className="space-y-4">
                            <div className="grid grid-cols-2 gap-4 p-4 bg-gray-50 rounded">
                                <div>
                                    <div className="text-sm text-gray-500">Total Hours</div>
                                    <div className="text-xl font-bold">{selectedPayroll.totalHours.toFixed(2)}</div>
                                </div>
                                <div>
                                    <div className="text-sm text-gray-500">Hourly Rate</div>
                                    <div className="text-xl font-bold">${selectedPayroll.hourlyRate}</div>
                                </div>
                                <div>
                                    <div className="text-sm text-gray-500">Base Salary</div>
                                    <div className="text-xl font-bold">${selectedPayroll.baseSalary.toFixed(2)}</div>
                                </div>
                                <div>
                                    <div className="text-sm text-gray-500">Net Salary</div>
                                    <div className="text-xl font-bold text-green-600">${selectedPayroll.netSalary.toFixed(2)}</div>
                                </div>
                            </div>

                            {/* Deductions */}
                            <div>
                                <h4 className="font-semibold mb-2">Deductions</h4>
                                {selectedPayroll.deductions.length > 0 ? (
                                    <div className="space-y-2">
                                        {selectedPayroll.deductions.map((d) => (
                                            <div key={d.id} className="flex justify-between items-center p-2 bg-red-50 rounded">
                                                <div>
                                                    <div className="font-medium">{d.reason}</div>
                                                    {d.notes && <div className="text-sm text-gray-500">{d.notes}</div>}
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <span className="text-red-600 font-bold">-${d.amount}</span>
                                                    <button
                                                        onClick={async () => {
                                                            if (confirm("Delete this deduction?")) {
                                                                await deletePayrollDeduction(d.id);
                                                                router.refresh();
                                                            }
                                                        }}
                                                        className="text-red-500 text-sm"
                                                    >
                                                        Delete
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <p className="text-gray-500 text-sm">No deductions</p>
                                )}

                                {/* Add Deduction Form */}
                                {selectedPayroll.status !== "PAID" && (
                                    <form onSubmit={handleAddDeduction} className="mt-4 space-y-2">
                                        <input
                                            type="text"
                                            placeholder="Reason (e.g., Tax, Insurance)"
                                            className="border p-2 rounded w-full"
                                            value={deductionForm.reason}
                                            onChange={(e) => setDeductionForm({ ...deductionForm, reason: e.target.value })}
                                            required
                                        />
                                        <input
                                            type="number"
                                            step="0.01"
                                            placeholder="Amount"
                                            className="border p-2 rounded w-full"
                                            value={deductionForm.amount}
                                            onChange={(e) => setDeductionForm({ ...deductionForm, amount: e.target.value })}
                                            required
                                        />
                                        <input
                                            type="text"
                                            placeholder="Notes (optional)"
                                            className="border p-2 rounded w-full"
                                            value={deductionForm.notes}
                                            onChange={(e) => setDeductionForm({ ...deductionForm, notes: e.target.value })}
                                        />
                                        <button disabled={loading} className="bg-red-500 text-white px-4 py-2 rounded w-full">
                                            Add Deduction
                                        </button>
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PayrollDashboard;
