import { UserRole } from './enums';

// Authentication DTOs
export interface LoginRequest {
  username: string;
  password: string;
  role?: UserRole;
}

export interface LoginResponse {
  token: string;
  user: {
    id: string;
    username: string;
    role: UserRole;
    schoolId?: string;
    name?: string;
  };
}

export interface TokenPayload {
  id: string;
  username: string;
  role: UserRole;
  schoolId?: string;
  iat?: number;
  exp?: number;
}

// Password Reset DTOs
export interface PasswordResetRequest {
  email: string;
}

export interface PasswordResetVerify {
  email: string;
  otp: string;
}

export interface PasswordResetComplete {
  email: string;
  otp: string;
  newPassword: string;
}

// API Response Wrapper
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  success: boolean;
  data: T[];
  pagination: {
    page: number;
    pageSize: number;
    total: number;
    totalPages: number;
  };
}

// Error Response
export interface ErrorResponse {
  success: false;
  error: string;
  statusCode: number;
  details?: any;
}

// Service Health Check
export interface HealthCheckResponse {
  status: 'healthy' | 'unhealthy';
  service: string;
  timestamp: Date;
  uptime: number;
  dependencies?: {
    [key: string]: 'up' | 'down';
  };
}

// Event Bus Message
export interface EventMessage<T = any> {
  eventType: string;
  eventId: string;
  timestamp: Date;
  source: string; // service name
  data: T;
  metadata?: {
    correlationId?: string;
    userId?: string;
    schoolId?: string;
    [key: string]: any;
  };
}

// User Creation DTOs
export interface CreateUserRequest {
  username: string;
  password?: string;
  name: string;
  surname: string;
  email?: string;
  phone?: string;
  address: string;
  bloodType: string;
  sex: 'MALE' | 'FEMALE';
  birthday: Date;
  schoolId: string;
}

export interface CreateTeacherRequest extends CreateUserRequest {
  subjects?: string[];
  img?: string;
}

export interface CreateStudentRequest extends CreateUserRequest {
  parentId: string;
  classId: number;
  gradeId: number;
  img?: string;
}

export interface CreateParentRequest {
  username: string;
  password?: string;
  name: string;
  surname: string;
  email?: string;
  phone: string;
  address: string;
  schoolId: string;
}

// Message DTOs
export interface SendMessageRequest {
  subject: string;
  content: string;
  recipients: Array<{
    id: string;
    role: UserRole;
  }>;
  senderId: string;
  senderRole: UserRole;
  schoolId: string;
}

export interface MessageListItem {
  id: number;
  subject: string;
  content: string;
  senderName: string;
  senderRole: UserRole;
  createdAt: Date;
  read: boolean;
}

// Notification DTOs
export interface CreateNotificationRequest {
  title: string;
  message: string;
  type: string;
  recipientId: string;
  recipientRole: UserRole;
  schoolId: string;
}

export interface NotificationListItem {
  id: number;
  title: string;
  message: string;
  type: string;
  read: boolean;
  createdAt: Date;
}

// Attendance DTOs
export interface MarkAttendanceRequest {
  lessonId: number;
  date: Date;
  attendance: Array<{
    studentId: string;
    present: boolean;
  }>;
  schoolId: string;
}

// Result DTOs
export interface CreateResultRequest {
  score: number;
  examId?: number;
  assignmentId?: number;
  studentId: string;
  schoolId: string;
}

// Finance DTOs
export interface CreateInvoiceRequest {
  studentId: string;
  amount: number;
  dueDate: Date;
  description?: string;
  schoolId: string;
}

export interface RecordPaymentRequest {
  invoiceId: number;
  amount: number;
  method: string;
  paymentDate: Date;
  reference?: string;
  notes?: string;
  schoolId: string;
}

// School Management DTOs
export interface CreateSchoolRequest {
  name: string;
  slug: string;
  managerId: string;
  plan?: 'FREE' | 'MONTHLY' | 'YEARLY';
}

export interface UpdateSchoolRequest {
  name?: string;
  domain?: string;
  plan?: 'FREE' | 'MONTHLY' | 'YEARLY';
  subscriptionStatus?: 'TRIAL' | 'ACTIVE' | 'PAST_DUE' | 'CANCELED';
  enabledServices?: string[];
}

// Support Ticket DTOs
export interface CreateTicketRequest {
  title: string;
  description: string;
  priority: 'LOW' | 'MEDIUM' | 'HIGH' | 'URGENT';
  schoolId: string;
  createdBy: string;
}

export interface ReplyToTicketRequest {
  ticketId: number;
  content: string;
  authorId: string;
  authorRole: UserRole;
}

// Dashboard Analytics DTOs
export interface DashboardStats {
  totalStudents: number;
  totalTeachers: number;
  totalParents: number;
  totalClasses: number;
  attendanceRate?: number;
  recentActivities?: Array<{
    id: string;
    type: string;
    description: string;
    timestamp: Date;
  }>;
}

export interface PlatformAnalytics {
  totalSchools: number;
  activeSchools: number;
  trialSchools: number;
  monthlyRevenue: number;
  yearlyRevenue: number;
  newSchoolsThisMonth: number;
  churnRate: number;
  growthRate: number;
}
