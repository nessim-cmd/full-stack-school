"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

/**
 * Client component that checks if user has access to current route
 * Redirects to access-denied page if service is not enabled
 */
export function ServiceAccessGuard() {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const checkAccess = async () => {
      try {
        const response = await fetch(`/api/check-service-access?path=${encodeURIComponent(pathname)}`);
        const data = await response.json();

        if (!data.hasAccess) {
          const serviceName = data.serviceName || "this feature";
          router.replace(`/access-denied?reason=service_disabled&service=${serviceName}`);
        }
      } catch (error) {
        console.error("Error checking service access:", error);
        // Fail open - don't block user on error
      }
    };

    checkAccess();
  }, [pathname, router]);

  return null; // This component renders nothing
}
