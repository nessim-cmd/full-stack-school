// Check if school has enabled services configured
export function hasEnabledServices(enabledServicesJson: string | null): boolean {
  if (!enabledServicesJson) return false;
  
  try {
    const services = JSON.parse(enabledServicesJson);
    return Array.isArray(services) && services.length > 0;
  } catch {
    return false;
  }
}

// Parse enabled services
export function parseEnabledServices(enabledServicesJson: string | null): string[] {
  if (!enabledServicesJson) return [];
  
  try {
    const services = JSON.parse(enabledServicesJson);
    return Array.isArray(services) ? services : [];
  } catch {
    return [];
  }
}

// Check if a specific service is enabled
export function isServiceEnabled(enabledServicesJson: string | null, service: string): boolean {
  const services = parseEnabledServices(enabledServicesJson);
  return services.includes(service);
}
