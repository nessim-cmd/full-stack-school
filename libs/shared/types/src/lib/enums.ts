// User & Role Enums
export enum UserRole {
  SUPER_ADMIN = 'super_admin',
  MANAGER = 'manager',
  ADMIN = 'admin',
  TEACHER = 'teacher',
  STUDENT = 'student',
  PARENT = 'parent',
}

export enum UserSex {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
}

// Subscription & Billing Enums
export enum PlanType {
  FREE = 'FREE',
  MONTHLY = 'MONTHLY',
  YEARLY = 'YEARLY',
}

export enum SubscriptionStatus {
  TRIAL = 'TRIAL',
  ACTIVE = 'ACTIVE',
  PAST_DUE = 'PAST_DUE',
  CANCELED = 'CANCELED',
}

// Academic Enums
export enum Day {
  MONDAY = 'MONDAY',
  TUESDAY = 'TUESDAY',
  WEDNESDAY = 'WEDNESDAY',
  THURSDAY = 'THURSDAY',
  FRIDAY = 'FRIDAY',
}

// Finance Enums
export enum PaymentMethod {
  CASH = 'CASH',
  BANK_TRANSFER = 'BANK_TRANSFER',
  CHECK = 'CHECK',
  ONLINE = 'ONLINE',
}

export enum PaymentStatus {
  PENDING = 'PENDING',
  PAID = 'PAID',
  OVERDUE = 'OVERDUE',
  CANCELLED = 'CANCELLED',
  REFUNDED = 'REFUNDED',
}

// Support Ticket Enums
export enum TicketStatus {
  OPEN = 'OPEN',
  IN_PROGRESS = 'IN_PROGRESS',
  CLOSED = 'CLOSED',
}

export enum TicketPriority {
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH',
  URGENT = 'URGENT',
}

// Notification Enums
export enum NotificationType {
  PASSWORD_CHANGE = 'password_change',
  ABSENCE = 'absence',
  GENERAL = 'general',
  EVENT = 'event',
  MESSAGE = 'message',
  TICKET_REPLY = 'ticket_reply',
  TICKET_CREATED = 'ticket_created',
}

// Service Keys (Modular ERP)
export enum ServiceKey {
  ACADEMIC = 'academic',
  USERS = 'users',
  ATTENDANCE = 'attendance',
  MESSAGING = 'messaging',
  ANNOUNCEMENTS = 'announcements',
  CALENDAR = 'calendar',
  FINANCE = 'finance',
  APPLICATIONS = 'applications',
  CMS = 'cms',
  RESOURCES = 'resources',
  NOTIFICATIONS = 'notifications',
}
