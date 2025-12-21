import prisma from '../lib/prisma';

export class AcademicService {
  // ============= Grades =============
  async getGrades(schoolId: string) {
    return prisma.grade.findMany({
      where: { schoolId },
      include: { classes: true, subjects: true },
      orderBy: { level: 'asc' },
    });
  }

  async createGrade(data: { level: number; schoolId: string }) {
    return prisma.grade.create({ data });
  }

  async updateGrade(id: number, data: { level?: number }) {
    return prisma.grade.update({ where: { id }, data });
  }

  async deleteGrade(id: number) {
    return prisma.grade.delete({ where: { id } });
  }

  // ============= Classes =============
  async getClasses(schoolId: string, gradeId?: number) {
    const where: any = { schoolId };
    if (gradeId) where.gradeId = gradeId;
    
    return prisma.class.findMany({
      where,
      include: { grade: true, lessons: true },
      orderBy: { name: 'asc' },
    });
  }

  async getClassById(id: number) {
    return prisma.class.findUnique({
      where: { id },
      include: { grade: true, lessons: true },
    });
  }

  async createClass(data: {
    name: string;
    capacity: number;
    gradeId: number;
    schoolId: string;
    supervisorId?: string;
  }) {
    return prisma.class.create({ data });
  }

  async updateClass(id: number, data: any) {
    return prisma.class.update({ where: { id }, data });
  }

  async deleteClass(id: number) {
    return prisma.class.delete({ where: { id } });
  }

  // ============= Subjects =============
  async getSubjects(schoolId: string, gradeId?: number) {
    const where: any = { schoolId };
    if (gradeId) where.gradeId = gradeId;
    
    return prisma.subject.findMany({
      where,
      include: { grade: true },
      orderBy: { name: 'asc' },
    });
  }

  async createSubject(data: { name: string; schoolId: string; gradeId?: number }) {
    return prisma.subject.create({ data });
  }

  async updateSubject(id: number, data: any) {
    return prisma.subject.update({ where: { id }, data });
  }

  async deleteSubject(id: number) {
    return prisma.subject.delete({ where: { id } });
  }

  // ============= Lessons =============
  async getLessons(schoolId: string, classId?: number, teacherId?: string) {
    const where: any = { schoolId };
    if (classId) where.classId = classId;
    if (teacherId) where.teacherId = teacherId;
    
    return prisma.lesson.findMany({
      where,
      include: { subject: true, class: true },
      orderBy: [{ day: 'asc' }, { startTime: 'asc' }],
    });
  }

  async createLesson(data: {
    name: string;
    day: string;
    startTime: Date;
    endTime: Date;
    subjectId: number;
    classId: number;
    teacherId: string;
    schoolId: string;
  }) {
    return prisma.lesson.create({ 
      data,
      include: { subject: true, class: true },
    });
  }

  async updateLesson(id: number, data: any) {
    return prisma.lesson.update({ 
      where: { id }, 
      data,
      include: { subject: true, class: true },
    });
  }

  async deleteLesson(id: number) {
    return prisma.lesson.delete({ where: { id } });
  }

  // ============= Exams =============
  async getExams(schoolId: string, page = 1, limit = 10) {
    const skip = (page - 1) * limit;
    
    const [exams, total] = await Promise.all([
      prisma.exam.findMany({
        where: { schoolId },
        skip,
        take: limit,
        orderBy: { startTime: 'desc' },
      }),
      prisma.exam.count({ where: { schoolId } }),
    ]);
    
    return {
      data: exams,
      pagination: { page, limit, total, totalPages: Math.ceil(total / limit) },
    };
  }

  async createExam(data: {
    title: string;
    startTime: Date;
    endTime: Date;
    lessonId?: number;
    schoolId: string;
  }) {
    return prisma.exam.create({ data });
  }

  async updateExam(id: number, data: any) {
    return prisma.exam.update({ where: { id }, data });
  }

  async deleteExam(id: number) {
    return prisma.exam.delete({ where: { id } });
  }

  // ============= Results =============
  async getResults(schoolId: string, studentId?: string, examId?: number) {
    const where: any = { schoolId };
    if (studentId) where.studentId = studentId;
    if (examId) where.examId = examId;
    
    return prisma.result.findMany({
      where,
      include: { exam: true },
      orderBy: { id: 'desc' },
    });
  }

  async createResult(data: {
    score: number;
    examId?: number;
    studentId: string;
    schoolId: string;
    noteUrl?: string;
  }) {
    return prisma.result.create({ data, include: { exam: true } });
  }

  async updateResult(id: number, data: any) {
    return prisma.result.update({ where: { id }, data, include: { exam: true } });
  }

  async deleteResult(id: number) {
    return prisma.result.delete({ where: { id } });
  }

  // ============= Assignments =============
  async getAssignments(schoolId: string, lessonId?: number) {
    const where: any = { schoolId };
    if (lessonId) where.lessonId = lessonId;
    
    return prisma.assignment.findMany({
      where,
      orderBy: { dueDate: 'desc' },
    });
  }

  async createAssignment(data: {
    title: string;
    startDate: Date;
    dueDate: Date;
    lessonId?: number;
    schoolId: string;
  }) {
    return prisma.assignment.create({ data });
  }

  async updateAssignment(id: number, data: any) {
    return prisma.assignment.update({ where: { id }, data });
  }

  async deleteAssignment(id: number) {
    return prisma.assignment.delete({ where: { id } });
  }

  // ============= Events =============
  async getEvents(schoolId: string, classId?: number) {
    const where: any = { schoolId };
    if (classId) where.classId = classId;
    
    return prisma.event.findMany({
      where,
      orderBy: { startTime: 'desc' },
    });
  }

  async createEvent(data: {
    title: string;
    description: string;
    startTime: Date;
    endTime: Date;
    classId?: number;
    schoolId: string;
  }) {
    return prisma.event.create({ data });
  }

  async updateEvent(id: number, data: any) {
    return prisma.event.update({ where: { id }, data });
  }

  async deleteEvent(id: number) {
    return prisma.event.delete({ where: { id } });
  }

  // ============= Announcements =============
  async getAnnouncements(schoolId: string, classId?: number) {
    const where: any = { schoolId };
    if (classId) where.classId = classId;
    
    return prisma.announcement.findMany({
      where,
      orderBy: { date: 'desc' },
    });
  }

  async createAnnouncement(data: {
    title: string;
    description: string;
    date: Date;
    classId?: number;
    schoolId: string;
  }) {
    return prisma.announcement.create({ data });
  }

  async updateAnnouncement(id: number, data: any) {
    return prisma.announcement.update({ where: { id }, data });
  }

  async deleteAnnouncement(id: number) {
    return prisma.announcement.delete({ where: { id } });
  }
}

export const academicService = new AcademicService();
