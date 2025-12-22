import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class AttendanceService {
  async getAttendance(schoolId: string, filters?: { date?: Date; lessonId?: number; studentId?: string }) {
    const where: any = { schoolId };
    if (filters?.date) where.date = filters.date;
    if (filters?.lessonId) where.lessonId = filters.lessonId;
    if (filters?.studentId) where.studentId = filters.studentId;

    return prisma.attendance.findMany({
      where,
      include: {
        student: true,
        lesson: { include: { subject: true, class: true } },
      },
      orderBy: { date: 'desc' },
    });
  }

  async getAttendanceById(id: number) {
    return prisma.attendance.findUnique({
      where: { id },
      include: {
        student: true,
        lesson: { include: { subject: true, class: true } },
      },
    });
  }

  async markAttendance(data: {
    studentId: string;
    lessonId: number;
    date: Date;
    present: boolean;
    schoolId: string;
  }) {
    // Check if attendance already exists for this student/lesson/date
    const existing = await prisma.attendance.findFirst({
      where: {
        studentId: data.studentId,
        lessonId: data.lessonId,
        date: data.date,
      },
    });

    if (existing) {
      // Update existing
      return prisma.attendance.update({
        where: { id: existing.id },
        data: { present: data.present },
      });
    }

    // Create new
    return prisma.attendance.create({
      data: {
        studentId: data.studentId,
        lessonId: data.lessonId,
        date: data.date,
        present: data.present,
        schoolId: data.schoolId,
      },
    });
  }

  async markBulkAttendance(
    records: { studentId: string; present: boolean }[],
    lessonId: number,
    date: Date,
    schoolId: string
  ) {
    const results = [];
    for (const record of records) {
      const result = await this.markAttendance({
        studentId: record.studentId,
        lessonId,
        date,
        present: record.present,
        schoolId,
      });
      results.push(result);
    }
    return results;
  }

  async getAttendanceByStudent(studentId: string) {
    return prisma.attendance.findMany({
      where: { studentId },
      include: {
        lesson: { include: { subject: true, class: true } },
      },
      orderBy: { date: 'desc' },
    });
  }

  async getAttendanceByLesson(lessonId: number, date?: Date) {
    const where: any = { lessonId };
    if (date) where.date = date;

    return prisma.attendance.findMany({
      where,
      include: { student: true },
      orderBy: { student: { name: 'asc' } },
    });
  }

  async getAttendanceStats(schoolId: string, dateRange?: { start: Date; end: Date }) {
    const where: any = { schoolId };
    if (dateRange) {
      where.date = {
        gte: dateRange.start,
        lte: dateRange.end,
      };
    }

    const [total, present] = await Promise.all([
      prisma.attendance.count({ where }),
      prisma.attendance.count({ where: { ...where, present: true } }),
    ]);

    return {
      total,
      present,
      absent: total - present,
      attendanceRate: total > 0 ? Math.round((present / total) * 100) : 0,
    };
  }

  async deleteAttendance(id: number) {
    return prisma.attendance.delete({ where: { id } });
  }
}

export const attendanceService = new AttendanceService();
