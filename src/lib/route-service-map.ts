// src/lib/route-service-map.ts - Map routes to required services

import { ServiceKey } from "./services";

/**
 * Maps route patterns to required service keys.
 * Routes that require a specific service to be enabled.
 */
export const routeServiceMap: Record<string, ServiceKey> = {
  // Users Management
  "/list/teachers": "users",
  "/list/students": "users",
  "/list/parents": "users",
  
  // Applications
  "/list/applications": "applications",
  
  // Academic Management
  "/list/subjects": "academic",
  "/list/classes": "academic",
  "/list/lessons": "academic",
  "/list/exams": "academic",
  "/list/assignments": "academic",
  "/list/results": "academic",
  
  // Attendance
  "/attendance": "attendance",
  "/list/attendance": "attendance",
  
  // Events
  "/list/events": "events",
  
  // Messaging
  "/list/messages": "messaging",
  
  // Announcements
  "/list/announcements": "announcements",
  
  // Notifications
  "/notifications": "notifications",
  
  // Resources
  "/list/resources": "resources",
  
  // Finance
  "/list/finance": "finance",
  "/list/payroll": "finance",
};

/**
 * Check if a route requires a specific service
 */
export function getRequiredService(pathname: string): ServiceKey | null {
  // Direct match
  if (routeServiceMap[pathname]) {
    return routeServiceMap[pathname];
  }
  
  // Check for pattern matches (e.g., /list/teachers/123)
  for (const [route, service] of Object.entries(routeServiceMap)) {
    if (pathname.startsWith(route)) {
      return service;
    }
  }
  
  return null;
}
