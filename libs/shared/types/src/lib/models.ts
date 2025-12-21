import {
  UserRole,
  UserSex,
  PlanType,
  SubscriptionStatus,
  Day,
  PaymentMethod,
  PaymentStatus,
  TicketStatus,
  TicketPriority,
  NotificationType,
} from './enums';

// Base Types
export interface BaseEntity {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

// School & Multi-Tenancy
export interface School extends BaseEntity {
  name: string;
  slug: string; // subdomain
  domain?: string; // custom domain
  plan: PlanType;
  subscriptionStatus: SubscriptionStatus;
  trialEndsAt: Date;
  subscriptionEndsAt?: Date;
  enabledServices: string[]; // Array of ServiceKey
}

export interface SchoolManager extends BaseEntity {
  email: string;
  name: string;
  schools?: SchoolMembership[];
}

export interface SchoolMembership extends BaseEntity {
  managerId: string;
  schoolId: string;
  role: string; // 'owner', 'admin', etc.
}

// Super Admin
export interface SuperAdmin extends BaseEntity {
  email: string;
  name: string;
}

export interface AuditLog {
  id: number;
  action: string;
  entity: string;
  entityId: string;
  description: string;
  metadata?: string;
  createdAt: Date;
  superAdminId: string;
}

// Users
export interface Admin {
  id: string;
  username: string;
  schoolId: string;
}

export interface Teacher {
  id: string;
  username: string;
  name: string;
  surname: string;
  email?: string;
  phone?: string;
  address: string;
  img?: string;
  bloodType: string;
  sex: UserSex;
  birthday: Date;
  createdAt: Date;
  schoolId: string;
}

export interface Student {
  id: string;
  username: string;
  name: string;
  surname: string;
  email?: string;
  phone?: string;
  address: string;
  img?: string;
  bloodType: string;
  sex: UserSex;
  birthday: Date;
  parentId: string;
  classId: number;
  gradeId: number;
  createdAt: Date;
  schoolId: string;
}

export interface Parent {
  id: string;
  username: string;
  name: string;
  surname: string;
  email?: string;
  phone: string;
  address: string;
  createdAt: Date;
  schoolId: string;
}

// Academic Entities
export interface Grade {
  id: number;
  level: number;
  schoolId: string;
}

export interface Class {
  id: number;
  name: string;
  capacity: number;
  supervisorId?: string;
  gradeId: number;
  schoolId: string;
}

export interface Subject {
  id: number;
  name: string;
  schoolId: string;
}

export interface Lesson {
  id: number;
  name: string;
  day: Day;
  startTime: Date;
  endTime: Date;
  subjectId: number;
  classId: number;
  teacherId: string;
  schoolId: string;
}

export interface Exam {
  id: number;
  title: string;
  startTime: Date;
  endTime: Date;
  lessonId: number;
  schoolId: string;
}

export interface Assignment {
  id: number;
  title: string;
  startDate: Date;
  dueDate: Date;
  lessonId: number;
  schoolId: string;
}

export interface Result {
  id: number;
  score: number;
  examId?: number;
  assignmentId?: number;
  studentId: string;
  schoolId: string;
}

// Attendance
export interface Attendance {
  id: number;
  date: Date;
  present: boolean;
  studentId: string;
  lessonId: number;
  schoolId: string;
}

// Communication
export interface Message {
  id: number;
  subject: string;
  content: string;
  senderId: string;
  senderRole: UserRole;
  createdAt: Date;
  schoolId: string;
}

export interface MessageRecipient {
  id: number;
  messageId: number;
  recipientId: string;
  recipientRole: UserRole;
  read: boolean;
  readAt?: Date;
}

export interface Notification {
  id: number;
  title: string;
  message: string;
  type: NotificationType;
  recipientId: string;
  recipientRole: UserRole;
  read: boolean;
  readAt?: Date;
  createdAt: Date;
  schoolId: string;
}

export interface Announcement {
  id: number;
  title: string;
  description: string;
  date: Date;
  classId?: number;
  schoolId: string;
}

export interface GlobalAnnouncement {
  id: number;
  title: string;
  content: string;
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// Events
export interface Event {
  id: number;
  title: string;
  description: string;
  startTime: Date;
  endTime: Date;
  classId?: number;
  schoolId: string;
}

// Resources
export interface Resource {
  id: number;
  title: string;
  url: string;
  lessonId?: number;
  assignmentId?: number;
  schoolId: string;
}

// Finance
export interface FeeCategory {
  id: number;
  name: string;
  description?: string;
  schoolId: string;
}

export interface FeeStructure {
  id: number;
  gradeId: number;
  categoryId: number;
  amount: number;
  frequency: string; // 'MONTHLY', 'QUARTERLY', 'YEARLY', 'ONE_TIME'
  schoolId: string;
}

export interface StudentInvoice {
  id: number;
  studentId: string;
  amount: number;
  dueDate: Date;
  status: PaymentStatus;
  description?: string;
  createdAt: Date;
  schoolId: string;
}

export interface Payment {
  id: number;
  invoiceId: number;
  amount: number;
  method: PaymentMethod;
  paymentDate: Date;
  reference?: string;
  notes?: string;
  schoolId: string;
}

// Applications
export interface RegistrationRequest {
  id: number;
  studentName: string;
  studentSurname: string;
  studentEmail?: string;
  studentPhone?: string;
  studentAddress: string;
  studentBloodType: string;
  studentSex: UserSex;
  studentBirthday: Date;
  parentName: string;
  parentSurname: string;
  parentEmail?: string;
  parentPhone: string;
  parentAddress: string;
  gradeId: number;
  status: string; // 'PENDING', 'APPROVED', 'REJECTED'
  createdAt: Date;
  schoolId: string;
}

// Support
export interface SupportTicket {
  id: number;
  title: string;
  description: string;
  status: TicketStatus;
  priority: TicketPriority;
  schoolId: string;
  createdBy: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface SupportTicketReply {
  id: number;
  ticketId: number;
  content: string;
  authorId: string;
  authorRole: UserRole;
  createdAt: Date;
}

// Site Settings (CMS)
export interface SiteSettings {
  id: number;
  schoolId: string;
  heroTitle?: string;
  heroDescription?: string;
  heroImage?: string;
  aboutTitle?: string;
  aboutDescription?: string;
  contactEmail?: string;
  contactPhone?: string;
  contactAddress?: string;
  socialLinks?: string; // JSON
  customizations?: string; // JSON
}

// Platform
export interface Invoice {
  id: number;
  schoolId: string;
  amount: number;
  dueDate: Date;
  status: PaymentStatus;
  description?: string;
  createdAt: Date;
}

export interface SaasSettings {
  id: number;
  heroTitle: string;
  heroSubtitle?: string;
  features?: string; // JSON
  pricing?: string; // JSON
  testimonials?: string; // JSON
  updatedAt: Date;
}
