"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type School = {
    id: string;
    name: string;
    slug: string;
    domain: string | null;
    plan: string;
    subscriptionStatus: string;
    trialEndsAt: string;
    subscriptionEndsAt: string | null;
    createdAt: string;
    updatedAt: string;
    userCount: number;
    studentCount: number;
    teacherCount: number;
    adminCount: number;
    parentCount: number;
    primaryAdmin: { id: string; username: string } | null;
};

type Pagination = {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
};

export default function SchoolsManagementPage() {
    const [schools, setSchools] = useState<School[]>([]);
    const [pagination, setPagination] = useState<Pagination>({
        page: 1,
        limit: 10,
        total: 0,
        totalPages: 0,
    });
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");
    const [statusFilter, setStatusFilter] = useState("all");
    const [planFilter, setPlanFilter] = useState("all");
    const [showCreateModal, setShowCreateModal] = useState(false);
    const [showDetailsModal, setShowDetailsModal] = useState(false);
    const [selectedSchool, setSelectedSchool] = useState<School | null>(null);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [schoolToDelete, setSchoolToDelete] = useState<{ id: string; name: string } | null>(null);
    const router = useRouter();

    useEffect(() => {
        fetchSchools();
    }, [pagination.page, search, statusFilter, planFilter]);

    const fetchSchools = async () => {
        try {
            setLoading(true);
            const params = new URLSearchParams({
                page: pagination.page.toString(),
                limit: pagination.limit.toString(),
                search,
                status: statusFilter,
                plan: planFilter,
            });

            const res = await fetch(`/api/super-admin/schools?${params}`);
            if (!res.ok) {
                if (res.status === 401 || res.status === 403) {
                    router.push("/super-admin/login");
                    return;
                }
                throw new Error("Failed to fetch schools");
            }

            const data = await res.json();
            setSchools(data.schools);
            setPagination(data.pagination);
        } catch (error) {
            console.error("Error fetching schools:", error);
        } finally {
            setLoading(false);
        }
    };

    const confirmDelete = (id: string, name: string) => {
        setSchoolToDelete({ id, name });
        setShowDeleteModal(true);
    };

    const handleDelete = async () => {
        if (!schoolToDelete) return;

        try {
            const res = await fetch(`/api/super-admin/schools/${schoolToDelete.id}`, {
                method: "DELETE",
            });

            if (!res.ok) {
                throw new Error("Failed to delete school");
            }

            // Show success toast or alert
            // For now we'll just close modal and refresh
            setShowDeleteModal(false);
            setSchoolToDelete(null);
            fetchSchools();
        } catch (error) {
            console.error("Error deleting school:", error);
            alert("Failed to delete school");
        }
    };

    const handleViewDetails = (school: School) => {
        setSelectedSchool(school);
        setShowDetailsModal(true);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-white mb-2">Schools Management</h1>
                    <p className="text-white/60">Manage all schools on the platform</p>
                </div>
                <button
                    onClick={() => setShowCreateModal(true)}
                    className="px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-lg font-semibold hover:shadow-lg transition flex items-center gap-2"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    Create School
                </button>
            </div>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Filters */}
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 mb-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {/* Search */}
                        <div>
                            <label className="block text-sm font-medium text-white/70 mb-2">Search</label>
                            <input
                                type="text"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                placeholder="Search by name or slug..."
                                className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            />
                        </div>

                        {/* Status Filter */}
                        <div>
                            <label className="block text-sm font-medium text-white/70 mb-2">Status</label>
                            <select
                                value={statusFilter}
                                onChange={(e) => setStatusFilter(e.target.value)}
                                className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            >
                                <option value="all">All Status</option>
                                <option value="TRIAL">Trial</option>
                                <option value="ACTIVE">Active</option>
                                <option value="PAST_DUE">Past Due</option>
                                <option value="CANCELED">Canceled</option>
                            </select>
                        </div>

                        {/* Plan Filter */}
                        <div>
                            <label className="block text-sm font-medium text-white/70 mb-2">Plan</label>
                            <select
                                value={planFilter}
                                onChange={(e) => setPlanFilter(e.target.value)}
                                className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            >
                                <option value="all">All Plans</option>
                                <option value="FREE">Free</option>
                                <option value="MONTHLY">Monthly</option>
                                <option value="YEARLY">Yearly</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Schools Table */}
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 overflow-hidden">
                    {loading ? (
                        <div className="p-12 text-center">
                            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yellow-400 mx-auto"></div>
                            <p className="text-white/70 mt-4">Loading schools...</p>
                        </div>
                    ) : schools.length === 0 ? (
                        <div className="p-12 text-center">
                            <p className="text-white/70">No schools found</p>
                        </div>
                    ) : (
                        <>
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead className="bg-white/5">
                                        <tr className="border-b border-white/10">
                                            <th className="text-left text-white/70 font-medium py-4 px-6">School</th>
                                            <th className="text-left text-white/70 font-medium py-4 px-6">Slug</th>
                                            <th className="text-left text-white/70 font-medium py-4 px-6">Plan</th>
                                            <th className="text-left text-white/70 font-medium py-4 px-6">Status</th>
                                            <th className="text-left text-white/70 font-medium py-4 px-6">Users</th>
                                            <th className="text-left text-white/70 font-medium py-4 px-6">Created</th>
                                            <th className="text-right text-white/70 font-medium py-4 px-6">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {schools.map((school) => (
                                            <tr key={school.id} className="border-b border-white/5 hover:bg-white/5 transition">
                                                <td className="py-4 px-6">
                                                    <div>
                                                        <p className="text-white font-medium">{school.name}</p>
                                                        {school.domain && (
                                                            <p className="text-white/50 text-xs">{school.domain}</p>
                                                        )}
                                                    </div>
                                                </td>
                                                <td className="py-4 px-6">
                                                    <code className="text-white/70 bg-white/10 px-2 py-1 rounded text-sm">
                                                        {school.slug}
                                                    </code>
                                                </td>
                                                <td className="py-4 px-6">
                                                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${school.plan === 'YEARLY' ? 'bg-green-500/20 text-green-300' :
                                                        school.plan === 'MONTHLY' ? 'bg-blue-500/20 text-blue-300' :
                                                            'bg-gray-500/20 text-gray-300'
                                                        }`}>
                                                        {school.plan}
                                                    </span>
                                                </td>
                                                <td className="py-4 px-6">
                                                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${school.subscriptionStatus === 'ACTIVE' ? 'bg-green-500/20 text-green-300' :
                                                        school.subscriptionStatus === 'TRIAL' ? 'bg-yellow-500/20 text-yellow-300' :
                                                            school.subscriptionStatus === 'PAST_DUE' ? 'bg-orange-500/20 text-orange-300' :
                                                                'bg-red-500/20 text-red-300'
                                                        }`}>
                                                        {school.subscriptionStatus}
                                                    </span>
                                                </td>
                                                <td className="py-4 px-6 text-white/70">{school.userCount}</td>
                                                <td className="py-4 px-6 text-white/70 text-sm">
                                                    {new Date(school.createdAt).toLocaleDateString()}
                                                </td>
                                                <td className="py-4 px-6">
                                                    <div className="flex items-center justify-end gap-2">
                                                        <button
                                                            onClick={() => handleViewDetails(school)}
                                                            className="p-2 hover:bg-white/10 rounded-lg transition text-white/70 hover:text-white"
                                                            title="View Details"
                                                        >
                                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                            </svg>
                                                        </button>
                                                        <button
                                                            onClick={() => confirmDelete(school.id, school.name)}
                                                            className="p-2 hover:bg-red-500/20 rounded-lg transition text-white/70 hover:text-red-300"
                                                            title="Delete"
                                                        >
                                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            {/* Pagination */}
                            {pagination.totalPages > 1 && (
                                <div className="p-4 border-t border-white/10 flex items-center justify-between">
                                    <p className="text-white/70 text-sm">
                                        Showing {((pagination.page - 1) * pagination.limit) + 1} to {Math.min(pagination.page * pagination.limit, pagination.total)} of {pagination.total} schools
                                    </p>
                                    <div className="flex gap-2">
                                        <button
                                            onClick={() => setPagination({ ...pagination, page: pagination.page - 1 })}
                                            disabled={pagination.page === 1}
                                            className="px-4 py-2 bg-white/10 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white/20 transition"
                                        >
                                            Previous
                                        </button>
                                        <button
                                            onClick={() => setPagination({ ...pagination, page: pagination.page + 1 })}
                                            disabled={pagination.page === pagination.totalPages}
                                            className="px-4 py-2 bg-white/10 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white/20 transition"
                                        >
                                            Next
                                        </button>
                                    </div>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </main>

            {/* Create School Modal */}
            {showCreateModal && (
                <CreateSchoolModal
                    onClose={() => setShowCreateModal(false)}
                    onSuccess={() => {
                        setShowCreateModal(false);
                        fetchSchools();
                    }}
                />
            )}

            {/* School Details Modal */}
            {showDetailsModal && selectedSchool && (
                <SchoolDetailsModal
                    school={selectedSchool}
                    onClose={() => {
                        setShowDetailsModal(false);
                        setSelectedSchool(null);
                    }}
                    onUpdate={() => {
                        setShowDetailsModal(false);
                        setSelectedSchool(null);
                        fetchSchools();
                    }}
                />
            )}

            {/* Delete Confirmation Modal */}
            {showDeleteModal && schoolToDelete && (
                <DeleteConfirmationModal
                    schoolName={schoolToDelete.name}
                    onClose={() => {
                        setShowDeleteModal(false);
                        setSchoolToDelete(null);
                    }}
                    onConfirm={handleDelete}
                />
            )}
        </div>
    );
}

// Delete Confirmation Modal
function DeleteConfirmationModal({
    schoolName,
    onClose,
    onConfirm,
}: {
    schoolName: string;
    onClose: () => void;
    onConfirm: () => void;
}) {
    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-slate-800 rounded-2xl p-6 max-w-md w-full border border-white/20 shadow-xl">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-red-500/20 text-red-400 mb-4 mx-auto">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                </div>

                <h3 className="text-xl font-bold text-white text-center mb-2">Delete School?</h3>
                <p className="text-white/60 text-center mb-6">
                    Are you sure you want to delete <span className="text-white font-semibold">"{schoolName}"</span>?
                    This action cannot be undone and will permanently delete all associated data including users, classes, and records.
                </p>

                <div className="flex gap-3">
                    <button
                        onClick={onClose}
                        className="flex-1 px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition font-medium"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={onConfirm}
                        className="flex-1 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition font-medium shadow-lg shadow-red-500/20"
                    >
                        Delete School
                    </button>
                </div>
            </div>
        </div>
    );
}

// Create School Modal Component
function CreateSchoolModal({ onClose, onSuccess }: { onClose: () => void; onSuccess: () => void }) {
    const [formData, setFormData] = useState({
        name: "",
        slug: "",
        domain: "",
        plan: "FREE",
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            const res = await fetch("/api/super-admin/schools", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (!res.ok) {
                setError(data.error || "Failed to create school");
                setLoading(false);
                return;
            }

            alert("School created successfully!");
            onSuccess();
        } catch (err) {
            setError("An error occurred. Please try again.");
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-slate-800 rounded-2xl p-6 max-w-md w-full border border-white/20">
                <h2 className="text-2xl font-bold text-white mb-4">Create New School</h2>

                {error && (
                    <div className="mb-4 p-3 bg-red-500/20 border border-red-500/50 rounded-lg">
                        <p className="text-red-200 text-sm">{error}</p>
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-white/90 mb-2">School Name *</label>
                        <input
                            type="text"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            required
                            className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            placeholder="Springfield High School"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-white/90 mb-2">Slug (Subdomain) *</label>
                        <input
                            type="text"
                            value={formData.slug}
                            onChange={(e) => setFormData({ ...formData, slug: e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, '') })}
                            required
                            className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            placeholder="springfield"
                        />
                        <p className="text-white/50 text-xs mt-1">Will be: {formData.slug || 'slug'}.yourdomain.com</p>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-white/90 mb-2">Custom Domain (Optional)</label>
                        <input
                            type="text"
                            value={formData.domain}
                            onChange={(e) => setFormData({ ...formData, domain: e.target.value })}
                            className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            placeholder="school.example.com"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-white/90 mb-2">Plan</label>
                        <select
                            value={formData.plan}
                            onChange={(e) => setFormData({ ...formData, plan: e.target.value })}
                            className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        >
                            <option value="FREE">Free</option>
                            <option value="MONTHLY">Monthly ($29/mo)</option>
                            <option value="YEARLY">Yearly ($290/yr)</option>
                        </select>
                    </div>

                    <div className="flex gap-3 pt-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className="flex-1 px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={loading}
                            className="flex-1 px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-lg font-semibold hover:shadow-lg transition disabled:opacity-50"
                        >
                            {loading ? "Creating..." : "Create School"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

// School Details Modal Component
function SchoolDetailsModal({
    school,
    onClose,
    onUpdate
}: {
    school: School;
    onClose: () => void;
    onUpdate: () => void;
}) {
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        name: school.name,
        slug: school.slug,
        domain: school.domain || "",
        plan: school.plan,
        subscriptionStatus: school.subscriptionStatus,
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleUpdate = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            const res = await fetch(`/api/super-admin/schools/${school.id}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (!res.ok) {
                setError(data.error || "Failed to update school");
                setLoading(false);
                return;
            }

            alert("School updated successfully!");
            onUpdate();
        } catch (err) {
            setError("An error occurred. Please try again.");
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 overflow-y-auto">
            <div className="bg-slate-800 rounded-2xl p-6 max-w-2xl w-full border border-white/20 my-8">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-white">School Details</h2>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-white/10 rounded-lg transition text-white"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {error && (
                    <div className="mb-4 p-3 bg-red-500/20 border border-red-500/50 rounded-lg">
                        <p className="text-red-200 text-sm">{error}</p>
                    </div>
                )}

                {isEditing ? (
                    <form onSubmit={handleUpdate} className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-white/90 mb-2">School Name</label>
                                <input
                                    type="text"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-white/90 mb-2">Slug</label>
                                <input
                                    type="text"
                                    value={formData.slug}
                                    onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                                    className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-white/90 mb-2">Domain</label>
                                <input
                                    type="text"
                                    value={formData.domain}
                                    onChange={(e) => setFormData({ ...formData, domain: e.target.value })}
                                    className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-white/90 mb-2">Plan</label>
                                <select
                                    value={formData.plan}
                                    onChange={(e) => setFormData({ ...formData, plan: e.target.value })}
                                    className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                >
                                    <option value="FREE">Free</option>
                                    <option value="MONTHLY">Monthly</option>
                                    <option value="YEARLY">Yearly</option>
                                </select>
                            </div>
                            <div className="col-span-2">
                                <label className="block text-sm font-medium text-white/90 mb-2">Status</label>
                                <select
                                    value={formData.subscriptionStatus}
                                    onChange={(e) => setFormData({ ...formData, subscriptionStatus: e.target.value })}
                                    className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                >
                                    <option value="TRIAL">Trial</option>
                                    <option value="ACTIVE">Active</option>
                                    <option value="PAST_DUE">Past Due</option>
                                    <option value="CANCELED">Canceled</option>
                                </select>
                            </div>
                        </div>

                        <div className="flex gap-3 pt-4">
                            <button
                                type="button"
                                onClick={() => setIsEditing(false)}
                                className="flex-1 px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                disabled={loading}
                                className="flex-1 px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-lg font-semibold hover:shadow-lg transition disabled:opacity-50"
                            >
                                {loading ? "Saving..." : "Save Changes"}
                            </button>
                        </div>
                    </form>
                ) : (
                    <>
                        <div className="grid grid-cols-2 gap-6 mb-6">
                            <div>
                                <p className="text-white/50 text-sm mb-1">School Name</p>
                                <p className="text-white font-medium">{school.name}</p>
                            </div>
                            <div>
                                <p className="text-white/50 text-sm mb-1">Slug</p>
                                <code className="text-white bg-white/10 px-2 py-1 rounded">{school.slug}</code>
                            </div>
                            <div>
                                <p className="text-white/50 text-sm mb-1">Domain</p>
                                <p className="text-white">{school.domain || "Not set"}</p>
                            </div>
                            <div>
                                <p className="text-white/50 text-sm mb-1">Plan</p>
                                <span className={`px-3 py-1 rounded-full text-xs font-medium ${school.plan === 'YEARLY' ? 'bg-green-500/20 text-green-300' :
                                    school.plan === 'MONTHLY' ? 'bg-blue-500/20 text-blue-300' :
                                        'bg-gray-500/20 text-gray-300'
                                    }`}>
                                    {school.plan}
                                </span>
                            </div>
                            <div>
                                <p className="text-white/50 text-sm mb-1">Status</p>
                                <span className={`px-3 py-1 rounded-full text-xs font-medium ${school.subscriptionStatus === 'ACTIVE' ? 'bg-green-500/20 text-green-300' :
                                    school.subscriptionStatus === 'TRIAL' ? 'bg-yellow-500/20 text-yellow-300' :
                                        school.subscriptionStatus === 'PAST_DUE' ? 'bg-orange-500/20 text-orange-300' :
                                            'bg-red-500/20 text-red-300'
                                    }`}>
                                    {school.subscriptionStatus}
                                </span>
                            </div>
                            <div>
                                <p className="text-white/50 text-sm mb-1">Created</p>
                                <p className="text-white">{new Date(school.createdAt).toLocaleDateString()}</p>
                            </div>
                        </div>

                        <div className="border-t border-white/10 pt-6 mb-6">
                            <h3 className="text-lg font-semibold text-white mb-4">User Statistics</h3>
                            <div className="grid grid-cols-4 gap-4">
                                <div className="bg-white/5 rounded-lg p-4">
                                    <p className="text-white/50 text-xs mb-1">Students</p>
                                    <p className="text-2xl font-bold text-white">{school.studentCount}</p>
                                </div>
                                <div className="bg-white/5 rounded-lg p-4">
                                    <p className="text-white/50 text-xs mb-1">Teachers</p>
                                    <p className="text-2xl font-bold text-white">{school.teacherCount}</p>
                                </div>
                                <div className="bg-white/5 rounded-lg p-4">
                                    <p className="text-white/50 text-xs mb-1">Admins</p>
                                    <p className="text-2xl font-bold text-white">{school.adminCount}</p>
                                </div>
                                <div className="bg-white/5 rounded-lg p-4">
                                    <p className="text-white/50 text-xs mb-1">Parents</p>
                                    <p className="text-2xl font-bold text-white">{school.parentCount}</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-3">
                            <button
                                onClick={onClose}
                                className="flex-1 px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition"
                            >
                                Close
                            </button>
                            <button
                                onClick={() => setIsEditing(true)}
                                className="flex-1 px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-lg font-semibold hover:shadow-lg transition"
                            >
                                Edit School
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
