// src/components/SchoolServicesModal.tsx - Beautiful services configuration modal

"use client";

import { useState, useEffect } from "react";
import {
  ALL_SERVICES,
  getAllServicesWithStatus,
  type Service,
  type ServiceKey,
} from "@/lib/services";
import { toast } from "react-toastify";

interface SchoolServicesModalProps {
  schoolId: string;
  schoolName: string;
  isOpen: boolean;
  onClose: () => void;
  onSave?: () => void;
}

export default function SchoolServicesModal({
  schoolId,
  schoolName,
  isOpen,
  onClose,
  onSave,
}: SchoolServicesModalProps) {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  // Fetch current services
  useEffect(() => {
    if (!isOpen) return;

    const fetchServices = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `/api/saas/manager/services?schoolId=${schoolId}`
        );
        if (!response.ok) throw new Error("Failed to fetch services");

        const data = await response.json();
        const allServices = getAllServicesWithStatus(data.enabledServices);
        setServices(allServices);
      } catch (error) {
        console.error("Error fetching services:", error);
        toast.error("Failed to load services");
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, [isOpen, schoolId]);

  // Toggle service
  const toggleService = (serviceKey: ServiceKey) => {
    setServices((prev) =>
      prev.map((s) =>
        s.key === serviceKey ? { ...s, enabled: !s.enabled } : s
      )
    );
  };

  // Save services
  const handleSave = async () => {
    try {
      setSaving(true);
      const enabledServices = services
        .filter((s) => s.enabled)
        .map((s) => s.key);

      console.log("[SchoolServicesModal] Saving services:", { schoolId, enabledServices });

      const response = await fetch("/api/saas/manager/services", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ schoolId, enabledServices }),
      });

      const responseData = await response.json();
      console.log("[SchoolServicesModal] API Response:", responseData);

      if (!response.ok) throw new Error("Failed to save services");

      toast.success("Services updated successfully!");
      onSave?.();
      onClose();
    } catch (error) {
      console.error("Error saving services:", error);
      toast.error("Failed to save services");
    } finally {
      setSaving(false);
    }
  };

  if (!isOpen) return null;

  // Group services by category
  const groupedServices = services.reduce(
    (acc, service) => {
      if (!acc[service.category]) acc[service.category] = [];
      acc[service.category].push(service);
      return acc;
    },
    {} as Record<string, Service[]>
  );

  const categoryLabels: Record<string, string> = {
    core: "Core Services",
    communication: "Communication",
    academic: "Academic",
    finance: "Finance & Payroll",
    admin: "Administration",
  };

  const categoryColors: Record<string, string> = {
    core: "from-blue-500 to-blue-600",
    communication: "from-purple-500 to-purple-600",
    academic: "from-green-500 to-green-600",
    finance: "from-amber-500 to-amber-600",
    admin: "from-slate-500 to-slate-600",
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-xl bg-gradient-to-br from-slate-900 to-slate-800 shadow-2xl border border-slate-700">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-6 border-b border-slate-700 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white">
              Manage School Services
            </h2>
            <p className="text-indigo-100 text-sm mt-1">{schoolName}</p>
          </div>
          <button
            onClick={onClose}
            className="text-white hover:bg-white/20 p-2 rounded-lg transition"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="p-8">
          {loading ? (
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
            </div>
          ) : (
            <div className="space-y-8">
              {Object.entries(groupedServices).map(([category, categoryServices]) => (
                <div key={category}>
                  <div
                    className={`mb-4 inline-block px-4 py-2 rounded-lg bg-gradient-to-r ${
                      categoryColors[category]
                    } text-white font-semibold`}
                  >
                    {categoryLabels[category]}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {categoryServices.map((service) => (
                      <div
                        key={service.key}
                        onClick={() => toggleService(service.key)}
                        className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                          service.enabled
                            ? "bg-indigo-500/20 border-indigo-500 shadow-lg shadow-indigo-500/20"
                            : "bg-slate-700 border-slate-600 hover:border-slate-500"
                        }`}
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <span className="text-3xl">{service.icon}</span>
                              <div>
                                <h3 className="text-white font-semibold">
                                  {service.name}
                                </h3>
                              </div>
                            </div>
                            <p className="text-slate-300 text-sm">
                              {service.description}
                            </p>
                          </div>
                          <div className="ml-4">
                            <div
                              className={`w-6 h-6 rounded border-2 flex items-center justify-center transition ${
                                service.enabled
                                  ? "bg-indigo-500 border-indigo-400"
                                  : "border-slate-500 hover:border-slate-400"
                              }`}
                            >
                              {service.enabled && (
                                <span className="text-white text-lg">✓</span>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-slate-700/50 border-t border-slate-600 px-8 py-4 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-6 py-2 rounded-lg text-slate-200 hover:bg-slate-600 transition font-medium"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            disabled={saving || loading}
            className="px-6 py-2 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:shadow-lg hover:shadow-indigo-500/50 disabled:opacity-50 transition font-medium"
          >
            {saving ? "Saving..." : "Save Services"}
          </button>
        </div>
      </div>
    </div>
  );
}
