// Service Ports
export const SERVICE_PORTS = {
  API_GATEWAY: 3000,
  AUTH_SERVICE: 3001,
  SCHOOL_SERVICE: 3002,
  USER_SERVICE: 3003,
  ACADEMIC_SERVICE: 3004,
  ATTENDANCE_SERVICE: 3005,
  COMMUNICATION_SERVICE: 3006,
  EVENT_SERVICE: 3007,
  FINANCE_SERVICE: 3008,
  RESOURCE_SERVICE: 3009,
  APPLICATION_SERVICE: 3010,
  SUPPORT_SERVICE: 3011,
  PLATFORM_ADMIN_SERVICE: 3012,
  NOTIFICATION_WORKER: 3013,
} as const;

// Frontend Ports
export const FRONTEND_PORTS = {
  ADMIN: 4000,
  TEACHER: 4001,
  STUDENT: 4002,
  PARENT: 4003,
  MANAGER: 4004,
  SUPER_ADMIN: 4005,
  LANDING_PAGE: 4006,
} as const;

// Service Names
export const SERVICE_NAMES = {
  API_GATEWAY: 'api-gateway',
  AUTH_SERVICE: 'auth-service',
  SCHOOL_SERVICE: 'school-service',
  USER_SERVICE: 'user-service',
  ACADEMIC_SERVICE: 'academic-service',
  ATTENDANCE_SERVICE: 'attendance-service',
  COMMUNICATION_SERVICE: 'communication-service',
  EVENT_SERVICE: 'event-service',
  FINANCE_SERVICE: 'finance-service',
  RESOURCE_SERVICE: 'resource-service',
  APPLICATION_SERVICE: 'application-service',
  SUPPORT_SERVICE: 'support-service',
  PLATFORM_ADMIN_SERVICE: 'platform-admin-service',
  NOTIFICATION_WORKER: 'notification-worker',
} as const;

// API Route Prefixes
export const API_ROUTES = {
  AUTH: '/api/auth',
  SCHOOLS: '/api/schools',
  USERS: '/api/users',
  TEACHERS: '/api/teachers',
  STUDENTS: '/api/students',
  PARENTS: '/api/parents',
  CLASSES: '/api/classes',
  SUBJECTS: '/api/subjects',
  LESSONS: '/api/lessons',
  EXAMS: '/api/exams',
  ASSIGNMENTS: '/api/assignments',
  RESULTS: '/api/results',
  ATTENDANCE: '/api/attendance',
  MESSAGES: '/api/messages',
  NOTIFICATIONS: '/api/notifications',
  ANNOUNCEMENTS: '/api/announcements',
  EVENTS: '/api/events',
  RESOURCES: '/api/resources',
  FINANCE: '/api/finance',
  APPLICATIONS: '/api/applications',
  SUPPORT: '/api/support',
  PLATFORM: '/api/platform',
} as const;

// HTTP Status Codes
export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  ACCEPTED: 202,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  UNPROCESSABLE_ENTITY: 422,
  TOO_MANY_REQUESTS: 429,
  INTERNAL_SERVER_ERROR: 500,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504,
} as const;

// Default Values
export const DEFAULTS = {
  PAGE_SIZE: 10,
  MAX_PAGE_SIZE: 100,
  JWT_EXPIRES_IN: '7d',
  SALT_ROUNDS: 12,
  OTP_LENGTH: 6,
  OTP_EXPIRES_IN: 15 * 60 * 1000, // 15 minutes
  TRIAL_PERIOD_DAYS: 30,
  SESSION_TIMEOUT: 24 * 60 * 60 * 1000, // 24 hours
  MAX_FILE_SIZE: 10 * 1024 * 1024, // 10MB
  RATE_LIMIT_WINDOW: 15 * 60 * 1000, // 15 minutes
  RATE_LIMIT_MAX_REQUESTS: 100,
} as const;

// Error & Success Messages, Event Types, etc.
export const ERROR_MESSAGES = {
  UNAUTHORIZED: 'Unauthorized access',
  FORBIDDEN: 'Access forbidden',
  NOT_FOUND: 'Resource not found',
  INTERNAL_ERROR: 'Internal server error',
  INVALID_CREDENTIALS: 'Invalid credentials',
  INVALID_TOKEN: 'Invalid or expired token',
  MISSING_TOKEN: 'Authentication token is required',
  SCHOOL_NOT_FOUND: 'School not found',
  USER_NOT_FOUND: 'User not found',
  DUPLICATE_USERNAME: 'Username already exists',
  DUPLICATE_EMAIL: 'Email already exists',
  SERVICE_DISABLED: 'This service is not enabled for your school',
  SUBSCRIPTION_EXPIRED: 'School subscription has expired',
  TRIAL_EXPIRED: 'Free trial has expired',
  INVALID_INPUT: 'Invalid input data',
  DATABASE_ERROR: 'Database operation failed',
  VALIDATION_ERROR: 'Validation failed',
} as const;

export const SUCCESS_MESSAGES = {
  CREATED: 'Resource created successfully',
  UPDATED: 'Resource updated successfully',
  DELETED: 'Resource deleted successfully',
  LOGIN_SUCCESS: 'Login successful',
  LOGOUT_SUCCESS: 'Logout successful',
  PASSWORD_RESET_SENT: 'Password reset email sent',
  PASSWORD_CHANGED: 'Password changed successfully',
  EMAIL_SENT: 'Email sent successfully',
  NOTIFICATION_SENT: 'Notification sent successfully',
} as const;

export const EVENT_TYPES = {
  USER_CREATED: 'user.created',
  USER_UPDATED: 'user.updated',
  USER_DELETED: 'user.deleted',
  STUDENT_ENROLLED: 'student.enrolled',
  STUDENT_GRADUATED: 'student.graduated',
  ATTENDANCE_MARKED: 'attendance.marked',
  ABSENCE_DETECTED: 'absence.detected',
  MESSAGE_SENT: 'message.sent',
  NOTIFICATION_CREATED: 'notification.created',
  INVOICE_GENERATED: 'invoice.generated',
  PAYMENT_RECEIVED: 'payment.received',
  EXAM_CREATED: 'exam.created',
  ASSIGNMENT_SUBMITTED: 'assignment.submitted',
  RESULT_PUBLISHED: 'result.published',
  TICKET_CREATED: 'ticket.created',
  TICKET_REPLIED: 'ticket.replied',
  TICKET_CLOSED: 'ticket.closed',
  SCHOOL_CREATED: 'school.created',
  SCHOOL_SUSPENDED: 'school.suspended',
  SUBSCRIPTION_CHANGED: 'subscription.changed',
  SERVICE_ENABLED: 'service.enabled',
  SERVICE_DISABLED: 'service.disabled',
} as const;

export const QUEUE_NAMES = {
  NOTIFICATIONS: 'notifications',
  EMAILS: 'emails',
  EVENT_PROCESSING: 'event-processing',
} as const;

export const REDIS_KEYS = {
  SESSION: 'session:',
  USER: 'user:',
  SCHOOL: 'school:',
  TOKEN_BLACKLIST: 'blacklist:token:',
  OTP: 'otp:',
  RATE_LIMIT: 'ratelimit:',
  CACHE: 'cache:',
  PUBSUB_NOTIFICATION: 'notification:',
  PUBSUB_ROLE: 'role:',
} as const;

export const COOKIE_NAMES = {
  AUTH_TOKEN: 'authToken',
  REFRESH_TOKEN: 'refreshToken',
  SCHOOL_ID: 'schoolId',
} as const;

export const HEADER_NAMES = {
  AUTHORIZATION: 'Authorization',
  X_USER_ID: 'X-User-Id',
  X_SCHOOL_ID: 'X-School-Id',
  X_USER_ROLE: 'X-User-Role',
  X_CORRELATION_ID: 'X-Correlation-Id',
  X_REQUEST_ID: 'X-Request-Id',
} as const;

export const MODULAR_SERVICES = [
  { key: 'academic', name: 'Academic Management', description: 'Manage classes, subjects, lessons, exams, and assignments', icon: '📚', category: 'Academic' },
  { key: 'users', name: 'User Management', description: 'Manage teachers, students, and parents', icon: '👥', category: 'Core' },
  { key: 'attendance', name: 'Attendance Tracking', description: 'Track student attendance for each lesson', icon: '📋', category: 'Academic' },
  { key: 'messaging', name: 'Internal Messaging', description: 'Send messages between users', icon: '💬', category: 'Communication' },
  { key: 'announcements', name: 'Announcements', description: 'Create school-wide or class-specific announcements', icon: '📢', category: 'Communication' },
  { key: 'calendar', name: 'School Calendar', description: 'Manage school events and important dates', icon: '📅', category: 'Admin' },
  { key: 'finance', name: 'Finance & Payroll', description: 'Manage fees, invoices, payments, and payroll', icon: '💰', category: 'Finance' },
  { key: 'applications', name: 'Student Applications', description: 'Accept and process student registration requests', icon: '📝', category: 'Admin' },
  { key: 'cms', name: 'Landing Page CMS', description: 'Customize your school\'s public landing page', icon: '🌐', category: 'Admin' },
  { key: 'resources', name: 'Course Resources', description: 'Upload and share course materials and resources', icon: '📎', category: 'Academic' },
  { key: 'notifications', name: 'Notifications', description: 'Real-time notifications for important events', icon: '🔔', category: 'Communication' },
] as const;

export const SUBSCRIPTION_PLANS = {
  FREE: { name: 'Free Trial', price: 0, duration: '30 days', features: ['All features included', '30-day trial period', 'Up to 100 students', 'Email support'] },
  MONTHLY: { name: 'Monthly', price: 49, duration: 'per month', features: ['All features included', 'Unlimited students', 'Priority support', 'Custom domain', 'API access'] },
  YEARLY: { name: 'Yearly', price: 490, duration: 'per year', savings: '2 months free', features: ['All features included', 'Unlimited students', 'Priority support', 'Custom domain', 'API access', 'Dedicated account manager'] },
} as const;
