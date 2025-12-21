// src/lib/services.ts - Available services/modules for schools

export type ServiceKey = 
  | "academic"
  | "users"
  | "attendance"
  | "messaging"
  | "announcements"
  | "events"
  | "finance"
  | "applications"
  | "landing_page"
  | "resources"
  | "notifications";

export interface Service {
  key: ServiceKey;
  name: string;
  description: string;
  icon: string; // emoji or icon name
  category: "core" | "communication" | "academic" | "finance" | "admin";
  enabled: boolean;
}

export const ALL_SERVICES: Record<ServiceKey, Omit<Service, "enabled">> = {
  academic: {
    key: "academic",
    name: "Academic Management",
    description: "Manage classes, subjects, lessons, exams, and assignments",
    icon: "📚",
    category: "academic",
  },
  users: {
    key: "users",
    name: "User Management",
    description: "Create and manage teachers, students, and parents",
    icon: "👥",
    category: "core",
  },
  attendance: {
    key: "attendance",
    name: "Attendance Tracking",
    description: "Track student attendance by lesson",
    icon: "✓",
    category: "academic",
  },
  messaging: {
    key: "messaging",
    name: "Internal Messaging",
    description: "Enable internal communication between users",
    icon: "💬",
    category: "communication",
  },
  announcements: {
    key: "announcements",
    name: "Announcements",
    description: "Post school announcements and notifications",
    icon: "📢",
    category: "communication",
  },
  events: {
    key: "events",
    name: "School Calendar",
    description: "Create and manage school events and calendar",
    icon: "📅",
    category: "admin",
  },
  finance: {
    key: "finance",
    name: "Finance & Payroll",
    description: "Manage fees, invoices, payments, and teacher salaries",
    icon: "💰",
    category: "finance",
  },
  applications: {
    key: "applications",
    name: "Student Applications",
    description: "Allow students to apply for enrollment",
    icon: "📝",
    category: "admin",
  },
  landing_page: {
    key: "landing_page",
    name: "Landing Page",
    description: "Customize school's public website",
    icon: "🌐",
    category: "admin",
  },
  resources: {
    key: "resources",
    name: "Course Resources",
    description: "Share course materials and resources",
    icon: "📚",
    category: "academic",
  },
  notifications: {
    key: "notifications",
    name: "Notifications",
    description: "System notifications for users",
    icon: "🔔",
    category: "communication",
  },
};

/**
 * Get default enabled services for a new school
 */
export function getDefaultServices(): ServiceKey[] {
  return [
    "academic",
    "users",
    "attendance",
    "messaging",
    "announcements",
    "events",
    "finance",
    "applications",
    "landing_page",
    "resources",
    "notifications",
  ];
}

/**
 * Parse enabled services from JSON string
 */
export function parseEnabledServices(jsonString: string): ServiceKey[] {
  try {
    const parsed = JSON.parse(jsonString);
    return Array.isArray(parsed) ? parsed : getDefaultServices();
  } catch {
    return getDefaultServices();
  }
}

/**
 * Convert enabled services array to JSON string
 */
export function serializeEnabledServices(services: ServiceKey[]): string {
  return JSON.stringify(services);
}

/**
 * Check if a service is enabled in a school
 */
export function isServiceEnabled(
  enabledServices: string | ServiceKey[],
  serviceKey: ServiceKey
): boolean {
  const services =
    typeof enabledServices === "string"
      ? parseEnabledServices(enabledServices)
      : enabledServices;
  return services.includes(serviceKey);
}

/**
 * Get list of enabled services with details
 */
export function getEnabledServicesWithDetails(
  enabledServices: string | ServiceKey[]
): Service[] {
  const services =
    typeof enabledServices === "string"
      ? parseEnabledServices(enabledServices)
      : enabledServices;

  return services
    .map((key) => ({
      ...ALL_SERVICES[key],
      enabled: true,
    }))
    .filter((s) => s !== undefined);
}

/**
 * Get all services with enabled/disabled status
 */
export function getAllServicesWithStatus(
  enabledServices: string | ServiceKey[]
): Service[] {
  const enabled =
    typeof enabledServices === "string"
      ? parseEnabledServices(enabledServices)
      : enabledServices;

  return Object.entries(ALL_SERVICES).map(([key, service]) => ({
    ...service,
    enabled: enabled.includes(key as ServiceKey),
  }));
}
