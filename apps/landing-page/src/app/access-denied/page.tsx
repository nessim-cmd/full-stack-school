// src/app/access-denied/page.tsx - Professional access denied page

import Link from "next/link";
import Image from "next/image";
import { getSessionUser } from "@/lib/authUser";

export default async function AccessDeniedPage({
  searchParams,
}: {
  searchParams: { reason?: string; service?: string };
}) {
  const user = await getSessionUser();
  const role = user?.role || "guest";
  
  const reason = searchParams.reason || "service_disabled";
  const serviceName = searchParams.service || "this feature";

  const messages: Record<string, { title: string; description: string }> = {
    service_disabled: {
      title: "Service Not Available",
      description: `The ${serviceName} service is not enabled for your school. Please contact your school administrator to enable this feature.`,
    },
    service_not_configured: {
      title: "Services Not Configured",
      description: "Your school has not configured any services yet. Please configure services from the manager dashboard first.",
    },
    unauthorized: {
      title: "Access Denied",
      description: "You don't have permission to access this page.",
    },
  };

  const message = messages[reason] || messages.unauthorized;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-lamaSkyLight to-lamaPurpleLight p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8 text-center">
        {/* Icon */}
        <div className="mb-6 flex justify-center">
          <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center">
            <svg
              className="w-12 h-12 text-red-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          {message.title}
        </h1>

        {/* Description */}
        <p className="text-gray-600 mb-8 leading-relaxed">
          {message.description}
        </p>

        {/* Actions */}
        <div className="space-y-3">
          <Link
            href={`/${role}`}
            className="block w-full bg-lamaSky hover:bg-lamaSkyLight text-white font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            Return to Dashboard
          </Link>
          
          {reason === "service_disabled" && role === "admin" && (
            <Link
              href="/saas/manager-dashboard"
              className="block w-full bg-lamaPurple hover:bg-lamaPurpleLight text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              Configure Services
            </Link>
          )}
          
          <Link
            href="/admin/support"
            className="block w-full border-2 border-gray-300 hover:border-gray-400 text-gray-700 font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            Contact Support
          </Link>
        </div>

        {/* Footer */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            Need help? Contact your school administrator
          </p>
        </div>
      </div>
    </div>
  );
}
