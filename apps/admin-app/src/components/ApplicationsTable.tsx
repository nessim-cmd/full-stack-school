"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type Application = {
    id: number;
    createdAt: Date;
    status: string;
    studentName: string;
    studentSurname: string;
    studentEmail: string | null;
    studentPhone: string | null;
    studentAddress: string;
    studentBloodType: string;
    studentSex: string;
    studentBirthday: Date;
    gradeId: number;
    parentName: string;
    parentSurname: string;
    parentEmail: string;
    parentPhone: string;
    parentAddress: string;
};

export default function ApplicationsTable({ applications }: { applications: Application[] }) {
    const router = useRouter();
    const [selectedApp, setSelectedApp] = useState<Application | null>(null);
    const [loading, setLoading] = useState(false);
    const [filter, setFilter] = useState<string>("PENDING");

    const filteredApps = applications.filter((app) => app.status === filter);

    const handleApprove = async (id: number) => {
        if (!confirm("Are you sure you want to approve this application?")) return;

        setLoading(true);
        try {
            const response = await fetch("/api/registration/approve", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ id }),
            });

            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.error || "Failed to approve");
            }

            alert("Application approved! Credentials sent to parent's email.");
            router.refresh();
            setSelectedApp(null);
        } catch (error: any) {
            alert(error.message);
        } finally {
            setLoading(false);
        }
    };

    const handleReject = async (id: number) => {
        if (!confirm("Are you sure you want to reject this application?")) return;

        setLoading(true);
        try {
            const response = await fetch("/api/registration/reject", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ id }),
            });

            if (!response.ok) {
                throw new Error("Failed to reject");
            }

            alert("Application rejected.");
            router.refresh();
            setSelectedApp(null);
        } catch (error: any) {
            alert(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            {/* Filter Tabs */}
            <div className="flex gap-4 mb-4 border-b">
                {["PENDING", "APPROVED", "REJECTED"].map((status) => (
                    <button
                        key={status}
                        onClick={() => setFilter(status)}
                        className={`px-4 py-2 font-medium transition-colors ${filter === status
                                ? "border-b-2 border-blue-500 text-blue-600"
                                : "text-gray-600 hover:text-gray-900"
                            }`}
                    >
                        {status} ({applications.filter((a) => a.status === status).length})
                    </button>
                ))}
            </div>

            {/* Applications Table */}
            <div className="overflow-x-auto">
                <table className="w-full min-w-max">
                    <thead>
                        <tr className="text-left text-gray-500 text-sm">
                            <th className="p-4">Date</th>
                            <th className="p-4">Student Name</th>
                            <th className="p-4">Grade</th>
                            <th className="p-4">Parent Email</th>
                            <th className="p-4">Parent Phone</th>
                            <th className="p-4">Status</th>
                            <th className="p-4">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredApps.length === 0 ? (
                            <tr>
                                <td colSpan={7} className="text-center p-8 text-gray-500">
                                    No {filter.toLowerCase()} applications
                                </td>
                            </tr>
                        ) : (
                            filteredApps.map((app) => (
                                <tr key={app.id} className="border-b border-gray-200 hover:bg-gray-50">
                                    <td className="p-4">{new Date(app.createdAt).toLocaleDateString()}</td>
                                    <td className="p-4">
                                        {app.studentName} {app.studentSurname}
                                    </td>
                                    <td className="p-4">Grade {app.gradeId}</td>
                                    <td className="p-4">{app.parentEmail}</td>
                                    <td className="p-4">{app.parentPhone}</td>
                                    <td className="p-4">
                                        <span
                                            className={`px-2 py-1 rounded-full text-xs font-semibold ${app.status === "PENDING"
                                                    ? "bg-yellow-100 text-yellow-700"
                                                    : app.status === "APPROVED"
                                                        ? "bg-green-100 text-green-700"
                                                        : "bg-red-100 text-red-700"
                                                }`}
                                        >
                                            {app.status}
                                        </span>
                                    </td>
                                    <td className="p-4">
                                        <button
                                            onClick={() => setSelectedApp(app)}
                                            className="text-blue-600 hover:text-blue-800 font-medium"
                                        >
                                            View Details
                                        </button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>

            {/* Detail Modal */}
            {selectedApp && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                        <div className="sticky top-0 bg-white border-b px-6 py-4 flex items-center justify-between">
                            <h2 className="text-2xl font-bold">Application Details</h2>
                            <button
                                onClick={() => setSelectedApp(null)}
                                className="text-gray-500 hover:text-gray-700"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>

                        <div className="p-6 space-y-6">
                            {/* Student Information */}
                            <div>
                                <h3 className="text-lg font-semibold mb-4 text-blue-600">Student Information</h3>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="text-sm text-gray-600">Name</label>
                                        <p className="font-medium">
                                            {selectedApp.studentName} {selectedApp.studentSurname}
                                        </p>
                                    </div>
                                    <div>
                                        <label className="text-sm text-gray-600">Date of Birth</label>
                                        <p className="font-medium">
                                            {new Date(selectedApp.studentBirthday).toLocaleDateString()}
                                        </p>
                                    </div>
                                    <div>
                                        <label className="text-sm text-gray-600">Gender</label>
                                        <p className="font-medium">{selectedApp.studentSex}</p>
                                    </div>
                                    <div>
                                        <label className="text-sm text-gray-600">Blood Type</label>
                                        <p className="font-medium">{selectedApp.studentBloodType}</p>
                                    </div>
                                    <div>
                                        <label className="text-sm text-gray-600">Email</label>
                                        <p className="font-medium">{selectedApp.studentEmail || "N/A"}</p>
                                    </div>
                                    <div>
                                        <label className="text-sm text-gray-600">Phone</label>
                                        <p className="font-medium">{selectedApp.studentPhone || "N/A"}</p>
                                    </div>
                                    <div>
                                        <label className="text-sm text-gray-600">Grade</label>
                                        <p className="font-medium">Grade {selectedApp.gradeId}</p>
                                    </div>
                                    <div className="md:col-span-2">
                                        <label className="text-sm text-gray-600">Address</label>
                                        <p className="font-medium">{selectedApp.studentAddress}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Parent Information */}
                            <div className="border-t pt-6">
                                <h3 className="text-lg font-semibold mb-4 text-purple-600">
                                    Parent/Guardian Information
                                </h3>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="text-sm text-gray-600">Name</label>
                                        <p className="font-medium">
                                            {selectedApp.parentName} {selectedApp.parentSurname}
                                        </p>
                                    </div>
                                    <div>
                                        <label className="text-sm text-gray-600">Email</label>
                                        <p className="font-medium">{selectedApp.parentEmail}</p>
                                    </div>
                                    <div>
                                        <label className="text-sm text-gray-600">Phone</label>
                                        <p className="font-medium">{selectedApp.parentPhone}</p>
                                    </div>
                                    <div className="md:col-span-2">
                                        <label className="text-sm text-gray-600">Address</label>
                                        <p className="font-medium">{selectedApp.parentAddress}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Actions */}
                            {selectedApp.status === "PENDING" && (
                                <div className="border-t pt-6 flex gap-4 justify-end">
                                    <button
                                        onClick={() => handleReject(selectedApp.id)}
                                        disabled={loading}
                                        className="px-6 py-2 border border-red-500 text-red-600 rounded-lg hover:bg-red-50 transition-colors disabled:opacity-50"
                                    >
                                        Reject
                                    </button>
                                    <button
                                        onClick={() => handleApprove(selectedApp.id)}
                                        disabled={loading}
                                        className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all disabled:opacity-50"
                                    >
                                        {loading ? "Processing..." : "Approve & Send Credentials"}
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
