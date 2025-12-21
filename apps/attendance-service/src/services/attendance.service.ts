import prisma from '../lib/prisma';

export class AttendanceService {
  async getAttendances(
    schoolId: string,
    studentId?: string,
    lessonId?: number,
    date?: Date,
    startDate?: Date,
    endDate?: Date
  ) {
    const where: any = { schoolId };
    
    if (studentId) where.studentId = studentId;
    if (lessonId) where.lessonId = lessonId;
    if (date) where.date = date;
    if (startDate && endDate) {
      where.date = {
        gte: startDate,
        lte: endDate,
      };
    }
    
    return prisma.attendance.findMany({
      where,
      orderBy: { date: 'desc' },
    });
  }

  async getAttendanceById(id: number) {
    return prisma.attendance.findUnique({ where: { id } });
  }

  async markAttendance(data: {
    date: Date;
    present: boolean;
    studentId: string;
    lessonId: number;
    schoolId: string;
  }) {
    return prisma.attendance.upsert({
      where: {
        date_studentId_lessonId: {
          date: data.date,
          studentId: data.studentId,
          lessonId: data.lessonId,
        },
      },
      update: { present: data.present },
      create: data,
    });
  }

  async markBulkAttendance(records: Array<{
    date: Date;
    present: boolean;
    studentId: string;
    lessonId: number;
    schoolId: string;
  }>) {
    const results = await Promise.all(
      records.map(record => this.markAttendance(record))
    );
    return results;
  }

  async deleteAttendance(id: number) {
    return prisma.attendance.delete({ where: { id } });
  }

  // Summaries
  async getStudentAttendanceSummary(studentId: string, month?: number, year?: number) {
    const where: any = { studentId };
    if (month) where.month = month;
    if (year) where.year = year;
    
    return prisma.attendanceSummary.findMany({
      where,
      orderBy: [{ year: 'desc' }, { month: 'desc' }],
    });
  }

  async updateAttendanceSummary(studentId: string, schoolId: string, month: number, year: number) {
    // Calculate summary from attendance records
    const startDate = new Date(year, month - 1, 1);
    const endDate = new Date(year, month, 0);
    
    const attendances = await prisma.attendance.findMany({
      where: {
        studentId,
        date: {
          gte: startDate,
          lte: endDate,
        },
      },
    });
    
    const totalDays = attendances.length;
    const presentDays = attendances.filter(a => a.present).length;
    const absentDays = totalDays - presentDays;
    const percentage = totalDays > 0 ? (presentDays / totalDays) * 100 : 0;
    
    return prisma.attendanceSummary.upsert({
      where: {
        studentId_month_year: { studentId, month, year },
      },
      update: { totalDays, presentDays, absentDays, percentage },
      create: {
        studentId,
        schoolId,
        month,
        year,
        totalDays,
        presentDays,
        absentDays,
        percentage,
      },
    });
  }

  async getClassAttendance(schoolId: string, lessonId: number, date: Date) {
    return prisma.attendance.findMany({
      where: { schoolId, lessonId, date },
      orderBy: { studentId: 'asc' },
    });
  }

  async getAttendanceStats(schoolId: string, startDate: Date, endDate: Date) {
    const attendances = await prisma.attendance.findMany({
      where: {
        schoolId,
        date: {
          gte: startDate,
          lte: endDate,
        },
      },
    });
    
    const total = attendances.length;
    const present = attendances.filter(a => a.present).length;
    const absent = total - present;
    
    return {
      total,
      present,
      absent,
      presentPercentage: total > 0 ? (present / total) * 100 : 0,
      absentPercentage: total > 0 ? (absent / total) * 100 : 0,
    };
  }
}

export const attendanceService = new AttendanceService();
