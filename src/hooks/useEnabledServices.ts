// src/hooks/useEnabledServices.ts - Hook to get enabled services for current school

import { useEffect, useState } from "react";
import { type ServiceKey } from "@/lib/services";

export function useEnabledServices() {
  const [enabledServices, setEnabledServices] = useState<ServiceKey[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch("/api/school/enabled-services");
        if (!response.ok) {
          throw new Error("Failed to fetch enabled services");
        }
        const data = await response.json();
        setEnabledServices(data.enabledServices || []);
      } catch (err) {
        console.error("Error loading enabled services:", err);
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  const isServiceEnabled = (serviceKey: ServiceKey): boolean => {
    return enabledServices.includes(serviceKey);
  };

  return { enabledServices, loading, error, isServiceEnabled };
}
