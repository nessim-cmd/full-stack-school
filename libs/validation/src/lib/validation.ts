import { z } from 'zod';

// User Validation Schemas
export const teacherSchema = z.object({
  id: z.string().optional(),
  username: z
    .string()
    .min(3, { message: 'Username must be at least 3 characters long!' })
    .max(20, { message: 'Username must be at most 20 characters long!' }),
  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters long!' })
    .optional()
    .or(z.literal('')),
  name: z.string().min(1, { message: 'First name is required!' }),
  surname: z.string().min(1, { message: 'Last name is required!' }),
  email: z
    .string()
    .email({ message: 'Invalid email address!' })
    .optional()
    .or(z.literal('')),
  phone: z.string().optional(),
  address: z.string(),
  img: z.string().optional(),
  bloodType: z.string().min(1, { message: 'Blood Type is required!' }),
  birthday: z.coerce.date({ message: 'Birthday is required!' }),
  sex: z.enum(['MALE', 'FEMALE'], { message: 'Sex is required!' }),
  subjects: z.array(z.string()).optional(),
});

export const studentSchema = z.object({
  id: z.string().optional(),
  username: z
    .string()
    .min(3, { message: 'Username must be at least 3 characters long!' })
    .max(20, { message: 'Username must be at most 20 characters long!' }),
  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters long!' })
    .optional()
    .or(z.literal('')),
  name: z.string().min(1, { message: 'First name is required!' }),
  surname: z.string().min(1, { message: 'Last name is required!' }),
  email: z
    .string()
    .email({ message: 'Invalid email address!' })
    .optional()
    .or(z.literal('')),
  phone: z.string().optional(),
  address: z.string(),
  img: z.string().optional(),
  bloodType: z.string().min(1, { message: 'Blood Type is required!' }),
  birthday: z.coerce.date({ message: 'Birthday is required!' }),
  sex: z.enum(['MALE', 'FEMALE'], { message: 'Sex is required!' }),
  gradeId: z.coerce.number().min(1, { message: 'Grade is required!' }),
  classId: z.coerce.number().min(1, { message: 'Class is required!' }),
  parentId: z.string().min(1, { message: 'Parent Id is required!' }),
});

export const parentSchema = z.object({
  id: z.string().optional(),
  username: z
    .string()
    .min(3, { message: 'Username must be at least 3 characters long!' })
    .max(20, { message: 'Username must be at most 20 characters long!' }),
  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters long!' })
    .optional()
    .or(z.literal('')),
  name: z.string().min(1, { message: 'First name is required!' }),
  surname: z.string().min(1, { message: 'Last name is required!' }),
  email: z
    .string()
    .email({ message: 'Invalid email address!' })
    .optional()
    .or(z.literal('')),
  phone: z.string().min(1, { message: 'Phone is required!' }),
  address: z.string().min(1, { message: 'Address is required!' }),
});

// Academic Validation Schemas
export const subjectSchema = z.object({
  id: z.coerce.number().optional(),
  name: z.string().min(1, { message: 'Subject name is required!' }),
  teachers: z.array(z.string()),
});

export const classSchema = z.object({
  id: z.coerce.number().optional(),
  name: z.string().min(1, { message: 'Class name is required!' }),
  capacity: z.coerce.number().min(1, { message: 'Capacity is required!' }),
  gradeId: z.coerce.number().min(1, { message: 'Grade is required!' }),
  supervisorId: z.coerce.string().optional(),
});

export const lessonSchema = z.object({
  id: z.coerce.number().optional(),
  name: z.string().min(1, { message: 'Lesson name is required!' }),
  day: z.enum(['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY'], {
    message: 'Day is required!',
  }),
  startTime: z.coerce.date({ message: 'Start time is required!' }),
  endTime: z.coerce.date({ message: 'End time is required!' }),
  subjectId: z.coerce.number({ message: 'Subject is required!' }),
  classId: z.coerce.number({ message: 'Class is required!' }),
  teacherId: z.string().min(1, { message: 'Teacher is required!' }),
});

export const examSchema = z.object({
  id: z.coerce.number().optional(),
  title: z.string().min(1, { message: 'Title is required!' }),
  startTime: z.coerce.date({ message: 'Start time is required!' }),
  endTime: z.coerce.date({ message: 'End time is required!' }),
  lessonId: z.coerce.number({ message: 'Lesson is required!' }),
});

export const assignmentSchema = z.object({
  id: z.coerce.number().optional(),
  title: z.string().min(1, { message: 'Title is required!' }),
  startDate: z.coerce.date({ message: 'Start date is required!' }),
  dueDate: z.coerce.date({ message: 'Due date is required!' }),
  lessonId: z.coerce.number({ message: 'Lesson is required!' }),
});

export const resultSchema = z.object({
  id: z.coerce.number().optional(),
  score: z.coerce
    .number()
    .min(0, { message: 'Score must be at least 0!' })
    .max(100, { message: 'Score must be at most 100!' }),
  examId: z.coerce.number().optional().nullable(),
  assignmentId: z.coerce.number().optional().nullable(),
  studentId: z.string().min(1, { message: 'Student is required!' }),
});

// Communication Validation Schemas
export const messageSchema = z.object({
  id: z.coerce.number().optional(),
  subject: z.string().min(1, { message: 'Subject is required!' }),
  content: z.string().min(1, { message: 'Message content is required!' }),
  recipients: z
    .array(
      z.object({
        id: z.string(),
        role: z.enum(['admin', 'teacher', 'student', 'parent']),
        name: z.string().optional(),
      })
    )
    .min(1, { message: 'At least one recipient is required!' }),
});

export const eventSchema = z.object({
  id: z.coerce.number().optional(),
  title: z.string().min(1, { message: 'Title is required!' }),
  description: z.string().min(1, { message: 'Description is required!' }),
  startTime: z.coerce.date({ message: 'Start time is required!' }),
  endTime: z.coerce.date({ message: 'End time is required!' }),
  classId: z.coerce.number().optional().nullable(),
});

export const resourceSchema = z.object({
  id: z.coerce.number().optional(),
  title: z.string().min(1, { message: 'Title is required!' }),
  url: z.string().min(1, { message: 'URL is required!' }),
  lessonId: z.coerce.number().min(1, { message: 'Lesson is required!' }),
  assignmentId: z.coerce.number().optional().nullable(),
});

// Authentication Validation Schemas
export const loginSchema = z.object({
  username: z.string().min(1, { message: 'Username is required!' }),
  password: z.string().min(1, { message: 'Password is required!' }),
  role: z.enum(['admin', 'teacher', 'student', 'parent', 'super_admin', 'manager']).optional(),
});

export const passwordResetRequestSchema = z.object({
  email: z.string().email({ message: 'Invalid email address!' }),
});

export const passwordResetVerifySchema = z.object({
  email: z.string().email({ message: 'Invalid email address!' }),
  otp: z.string().length(6, { message: 'OTP must be 6 digits!' }),
});

export const passwordResetCompleteSchema = z.object({
  email: z.string().email({ message: 'Invalid email address!' }),
  otp: z.string().length(6, { message: 'OTP must be 6 digits!' }),
  newPassword: z.string().min(8, { message: 'Password must be at least 8 characters long!' }),
});

// School Validation Schemas
export const createSchoolSchema = z.object({
  name: z.string().min(1, { message: 'School name is required!' }),
  slug: z
    .string()
    .min(3, { message: 'Slug must be at least 3 characters!' })
    .regex(/^[a-z0-9-]+$/, { message: 'Slug can only contain lowercase letters, numbers, and hyphens!' }),
  managerId: z.string().min(1, { message: 'Manager ID is required!' }),
  plan: z.enum(['FREE', 'MONTHLY', 'YEARLY']).optional(),
});

export const updateSchoolSchema = z.object({
  name: z.string().min(1).optional(),
  domain: z.string().optional(),
  plan: z.enum(['FREE', 'MONTHLY', 'YEARLY']).optional(),
  subscriptionStatus: z.enum(['TRIAL', 'ACTIVE', 'PAST_DUE', 'CANCELED']).optional(),
  enabledServices: z.array(z.string()).optional(),
});

// Support Ticket Validation Schemas
export const createTicketSchema = z.object({
  title: z.string().min(1, { message: 'Title is required!' }),
  description: z.string().min(10, { message: 'Description must be at least 10 characters!' }),
  priority: z.enum(['LOW', 'MEDIUM', 'HIGH', 'URGENT']),
});

export const replyToTicketSchema = z.object({
  content: z.string().min(1, { message: 'Reply content is required!' }),
});

// Type exports
export type TeacherSchema = z.infer<typeof teacherSchema>;
export type StudentSchema = z.infer<typeof studentSchema>;
export type ParentSchema = z.infer<typeof parentSchema>;
export type SubjectSchema = z.infer<typeof subjectSchema>;
export type ClassSchema = z.infer<typeof classSchema>;
export type LessonSchema = z.infer<typeof lessonSchema>;
export type ExamSchema = z.infer<typeof examSchema>;
export type AssignmentSchema = z.infer<typeof assignmentSchema>;
export type ResultSchema = z.infer<typeof resultSchema>;
export type MessageSchema = z.infer<typeof messageSchema>;
export type EventSchema = z.infer<typeof eventSchema>;
export type ResourceSchema = z.infer<typeof resourceSchema>;
export type LoginSchema = z.infer<typeof loginSchema>;
export type CreateSchoolSchema = z.infer<typeof createSchoolSchema>;
export type UpdateSchoolSchema = z.infer<typeof updateSchoolSchema>;
export type CreateTicketSchema = z.infer<typeof createTicketSchema>;
export type ReplyToTicketSchema = z.infer<typeof replyToTicketSchema>;
