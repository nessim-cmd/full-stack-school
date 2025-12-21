"use client";

import { useState } from "react";
import { createFeeCategory, createFeeStructure, deleteFeeCategory, deleteFeeStructure, generateInvoicesForGrade } from "@/lib/finance-actions";
import { useRouter } from "next/navigation";

type FeeCategory = {
    id: number;
    name: string;
    description: string | null;
};

type FeeStructure = {
    id: number;
    amount: number;
    feeCategory: FeeCategory;
    grade: { level: number } | null;
};

type Grade = {
    id: number;
    level: number;
};

const FinanceSettings = ({ feeCategories, feeStructures, grades }: { feeCategories: FeeCategory[], feeStructures: FeeStructure[], grades: Grade[] }) => {
    const [loading, setLoading] = useState(false);
    const [newCategory, setNewCategory] = useState({ name: "", description: "" });
    const [newStructure, setNewStructure] = useState({ feeCategoryId: "", gradeId: "", amount: "" });
    const [generateInvoice, setGenerateInvoice] = useState({ gradeId: "", dueDate: "", title: "" });
    const router = useRouter();

    const handleCreateCategory = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            await createFeeCategory(newCategory);
            setNewCategory({ name: "", description: "" });
            router.refresh();
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const handleCreateStructure = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            await createFeeStructure({
                feeCategoryId: parseInt(newStructure.feeCategoryId),
                gradeId: parseInt(newStructure.gradeId),
                amount: parseFloat(newStructure.amount),
            });
            setNewStructure({ feeCategoryId: "", gradeId: "", amount: "" });
            router.refresh();
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const handleGenerateInvoices = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!confirm("Are you sure? This will generate invoices for all students in the selected grade.")) return;

        setLoading(true);
        try {
            const res = await generateInvoicesForGrade(
                parseInt(generateInvoice.gradeId),
                new Date(generateInvoice.dueDate),
                generateInvoice.title
            );
            if (res.success) {
                alert(res.message);
                setGenerateInvoice({ gradeId: "", dueDate: "", title: "" });
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

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Fee Categories */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
                <h2 className="text-xl font-semibold mb-4">Fee Categories</h2>
                <form onSubmit={handleCreateCategory} className="flex gap-2 mb-6">
                    <input
                        type="text"
                        placeholder="Name (e.g. Tuition)"
                        className="border p-2 rounded flex-1"
                        value={newCategory.name}
                        onChange={e => setNewCategory({ ...newCategory, name: e.target.value })}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Description"
                        className="border p-2 rounded flex-1"
                        value={newCategory.description}
                        onChange={e => setNewCategory({ ...newCategory, description: e.target.value })}
                    />
                    <button disabled={loading} className="bg-lamaSky text-white px-4 py-2 rounded">Add</button>
                </form>
                <div className="space-y-2">
                    {feeCategories.map(cat => (
                        <div key={cat.id} className="flex justify-between items-center p-3 bg-gray-50 rounded">
                            <div>
                                <div className="font-medium">{cat.name}</div>
                                <div className="text-sm text-gray-500">{cat.description}</div>
                            </div>
                            <button
                                onClick={async () => {
                                    if (confirm("Delete this category?")) {
                                        await deleteFeeCategory(cat.id);
                                        router.refresh();
                                    }
                                }}
                                className="text-red-500 text-sm"
                            >
                                Delete
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Fee Structures */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
                <h2 className="text-xl font-semibold mb-4">Fee Structures</h2>
                <form onSubmit={handleCreateStructure} className="grid grid-cols-2 gap-2 mb-6">
                    <select
                        className="border p-2 rounded"
                        value={newStructure.feeCategoryId}
                        onChange={e => setNewStructure({ ...newStructure, feeCategoryId: e.target.value })}
                        required
                    >
                        <option value="">Select Category</option>
                        {feeCategories.map(cat => (
                            <option key={cat.id} value={cat.id}>{cat.name}</option>
                        ))}
                    </select>
                    <select
                        className="border p-2 rounded"
                        value={newStructure.gradeId}
                        onChange={e => setNewStructure({ ...newStructure, gradeId: e.target.value })}
                        required
                    >
                        <option value="">Select Grade</option>
                        {grades.map(g => (
                            <option key={g.id} value={g.id}>Grade {g.level}</option>
                        ))}
                    </select>
                    <input
                        type="number"
                        placeholder="Amount"
                        className="border p-2 rounded"
                        value={newStructure.amount}
                        onChange={e => setNewStructure({ ...newStructure, amount: e.target.value })}
                        required
                    />
                    <button disabled={loading} className="bg-lamaPurple text-white px-4 py-2 rounded">Set Fee</button>
                </form>
                <div className="space-y-2 max-h-60 overflow-y-auto">
                    {feeStructures.map(fs => (
                        <div key={fs.id} className="flex justify-between items-center p-3 bg-gray-50 rounded">
                            <div>
                                <div className="font-medium">{fs.feeCategory.name} - Grade {fs.grade?.level}</div>
                                <div className="text-sm text-gray-500">${fs.amount}</div>
                            </div>
                            <button
                                onClick={async () => {
                                    if (confirm("Delete this fee structure?")) {
                                        await deleteFeeStructure(fs.id);
                                        router.refresh();
                                    }
                                }}
                                className="text-red-500 text-sm"
                            >
                                Delete
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Generate Invoices */}
            <div className="bg-white p-6 rounded-xl shadow-sm lg:col-span-2">
                <h2 className="text-xl font-semibold mb-4">Generate Invoices</h2>
                <p className="text-sm text-gray-500 mb-4">
                    This will create invoices for ALL students in the selected grade based on the fee structures defined above.
                </p>
                <form onSubmit={handleGenerateInvoices} className="flex gap-4 items-end">
                    <div className="flex-1">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Invoice Title</label>
                        <input
                            type="text"
                            placeholder="e.g. Term 1 Fees"
                            className="border p-2 rounded w-full"
                            value={generateInvoice.title}
                            onChange={e => setGenerateInvoice({ ...generateInvoice, title: e.target.value })}
                            required
                        />
                    </div>
                    <div className="flex-1">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Grade</label>
                        <select
                            className="border p-2 rounded w-full"
                            value={generateInvoice.gradeId}
                            onChange={e => setGenerateInvoice({ ...generateInvoice, gradeId: e.target.value })}
                            required
                        >
                            <option value="">Select Grade</option>
                            {grades.map(g => (
                                <option key={g.id} value={g.id}>Grade {g.level}</option>
                            ))}
                        </select>
                    </div>
                    <div className="flex-1">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Due Date</label>
                        <input
                            type="date"
                            className="border p-2 rounded w-full"
                            value={generateInvoice.dueDate}
                            onChange={e => setGenerateInvoice({ ...generateInvoice, dueDate: e.target.value })}
                            required
                        />
                    </div>
                    <button disabled={loading} className="bg-lamaYellow text-black px-6 py-2 rounded h-[42px]">
                        {loading ? "Processing..." : "Generate Invoices"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default FinanceSettings;
