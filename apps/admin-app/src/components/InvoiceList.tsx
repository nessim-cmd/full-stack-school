"use client";

import { useState } from "react";
import { recordPayment } from "@/lib/finance-actions";
import { useRouter } from "next/navigation";

type Payment = {
    id: string;
    amount: number;
    date: Date;
    method: "CASH" | "BANK_TRANSFER" | "CHECK" | "ONLINE";
};

type Invoice = {
    id: string;
    title: string;
    amount: number;
    status: "PENDING" | "PAID" | "OVERDUE" | "CANCELLED" | "REFUNDED";
    dueDate: Date;
    student: {
        name: string;
        surname: string;
        grade: { level: number };
    };
    payments: Payment[];
};

const InvoiceList = ({ invoices }: { invoices: Invoice[] }) => {
    const [selectedInvoice, setSelectedInvoice] = useState<Invoice | null>(null);
    const [paymentAmount, setPaymentAmount] = useState("");
    const [paymentMethod, setPaymentMethod] = useState<"CASH" | "BANK_TRANSFER" | "CHECK" | "ONLINE">("CASH");
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handlePayment = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!selectedInvoice) return;

        setLoading(true);
        try {
            const res = await recordPayment(selectedInvoice.id, parseFloat(paymentAmount), paymentMethod);
            if (res.success) {
                alert("Payment recorded!");
                setSelectedInvoice(null);
                setPaymentAmount("");
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

    const getPaidAmount = (invoice: Invoice) => invoice.payments.reduce((sum, p) => sum + p.amount, 0);

    return (
        <div className="bg-white p-6 rounded-xl shadow-sm mt-8">
            <h2 className="text-xl font-semibold mb-4">Student Invoices</h2>
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="border-b text-gray-500 text-sm">
                            <th className="p-3">Student</th>
                            <th className="p-3">Grade</th>
                            <th className="p-3">Title</th>
                            <th className="p-3">Amount</th>
                            <th className="p-3">Paid</th>
                            <th className="p-3">Status</th>
                            <th className="p-3">Due Date</th>
                            <th className="p-3">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {invoices.map(invoice => {
                            const paid = getPaidAmount(invoice);
                            const remaining = invoice.amount - paid;
                            return (
                                <tr key={invoice.id} className="border-b hover:bg-gray-50">
                                    <td className="p-3 font-medium">{invoice.student.name} {invoice.student.surname}</td>
                                    <td className="p-3">Grade {invoice.student.grade.level}</td>
                                    <td className="p-3">{invoice.title}</td>
                                    <td className="p-3">${invoice.amount}</td>
                                    <td className="p-3 text-green-600">${paid}</td>
                                    <td className="p-3">
                                        <span className={`px-2 py-1 rounded text-xs ${invoice.status === "PAID" ? "bg-green-100 text-green-800" :
                                                invoice.status === "OVERDUE" ? "bg-red-100 text-red-800" :
                                                    "bg-yellow-100 text-yellow-800"
                                            }`}>
                                            {invoice.status}
                                        </span>
                                    </td>
                                    <td className="p-3 text-sm text-gray-500">{new Date(invoice.dueDate).toLocaleDateString()}</td>
                                    <td className="p-3">
                                        {remaining > 0 && (
                                            <button
                                                onClick={() => {
                                                    setSelectedInvoice(invoice);
                                                    setPaymentAmount(remaining.toString());
                                                }}
                                                className="bg-lamaSky text-white px-3 py-1 rounded text-sm hover:bg-lamaSkyLight"
                                            >
                                                Pay
                                            </button>
                                        )}
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>

            {/* Payment Modal */}
            {selectedInvoice && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-xl w-full max-w-md">
                        <h3 className="text-lg font-bold mb-4">Record Payment</h3>
                        <div className="mb-4 text-sm text-gray-600">
                            <p>Invoice: {selectedInvoice.title}</p>
                            <p>Student: {selectedInvoice.student.name} {selectedInvoice.student.surname}</p>
                            <p>Remaining Balance: ${selectedInvoice.amount - getPaidAmount(selectedInvoice)}</p>
                        </div>
                        <form onSubmit={handlePayment} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium mb-1">Amount</label>
                                <input
                                    type="number"
                                    className="border p-2 rounded w-full"
                                    value={paymentAmount}
                                    onChange={e => setPaymentAmount(e.target.value)}
                                    max={selectedInvoice.amount - getPaidAmount(selectedInvoice)}
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Method</label>
                                <select
                                    className="border p-2 rounded w-full"
                                    value={paymentMethod}
                                    onChange={e => setPaymentMethod(e.target.value as any)}
                                >
                                    <option value="CASH">Cash</option>
                                    <option value="BANK_TRANSFER">Bank Transfer</option>
                                    <option value="CHECK">Check</option>
                                    <option value="ONLINE">Online</option>
                                </select>
                            </div>
                            <div className="flex justify-end gap-2 mt-6">
                                <button
                                    type="button"
                                    onClick={() => setSelectedInvoice(null)}
                                    className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="bg-lamaSky text-white px-4 py-2 rounded hover:bg-lamaSkyLight"
                                >
                                    {loading ? "Recording..." : "Confirm Payment"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default InvoiceList;
