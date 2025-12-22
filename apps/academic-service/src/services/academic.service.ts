import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class AcademicService {
  // ============= Grades =============
  async getGrades(schoolId: string) {
    return prisma.grade.findMany({
      where: { schoolId },
      include: {
        _count: { select: { students: true } },
      },
      orderBy: { level: 'asc' },
    });
  }

  async getGradeById(id: number) {
    return prisma.grade.findUnique({
      where: { id },
      include: {
        students: true,
        classess: true,  // Note: typo in schema - classess with double s
      },
    });
  }

  async createGrade(data: { level: number; schoolId: string }) {
    return prisma.grade.create({
      data: {
        level: data.level,
        schoolId: data.schoolId,
      },
    });
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
      include: {
        grade: true,
        supervisor: true,
        _count: { select: { students: true, lessons: true } },
      },
      orderBy: { name: 'asc' },
    });
  }

  async getClassById(id: number) {
    return prisma.class.findUnique({
      where: { id },
      include: {
        grade: true,
        supervisor: true,
        students: true,
        lessons: { include: { subject: true, teacher: true } },
      },
    });
  }

  async createClass(data: { name: string; capacity: number; gradeId: number; supervisorId?: string; schoolId: string }) {
    return prisma.class.create({
      data: {
        name: data.name,
        capacity: data.capacity,
        gradeId: data.gradeId,
        supervisorId: data.supervisorId,
        schoolId: data.schoolId,
      },
    });
  }

  async updateClass(id: number, data: { name?: string; capacity?: number; gradeId?: number; supervisorId?: string }) {
    return prisma.class.update({ where: { id }, data });
  }

  async deleteClass(id: number) {
    return prisma.class.delete({ where: { id } });
  }

  // ============= Subjects =============
  async getSubjects(schoolId: string) {
    return prisma.subject.findMany({
      where: { schoolId },
      include: {
        teachers: true,
        _count: { select: { lessons: true } },
      },
      orderBy: { name: 'asc' },
    });
  }

  async getSubjectById(id: number) {
    return prisma.subject.findUnique({
      where: { id },
      include: {
        teachers: true,
        lessons: { include: { class: true } },
      },
    });
  }

  async createSubject(data: { name: string; schoolId: string; teacherIds?: string[] }) {
    return prisma.subject.create({
      data: {
        name: data.name,
        schoolId: data.schoolId,
        teachers: data.teacherIds ? { connect: data.teacherIds.map(id => ({ id })) } : undefined,
      },
    });
  }

  async updateSubject(id: number, data: { name?: string; teacherIds?: string[] }) {
    return prisma.subject.update({
      where: { id },
      data: {
        name: data.name,
        teachers: data.teacherIds ? { set: data.teacherIds.map(id => ({ id })) } : undefined,
      },
    });
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
      include: {
        subject: true,
        class: true,
        teacher: true,
      },
      orderBy: [{ day: 'asc' }, { startTime: 'asc' }],
    });
  }

  async getLessonById(id: number) {
    return prisma.lesson.findUnique({
      where: { id },
      include: {
        subject: true,
        class: true,
        teacher: true,
        exams: true,
        assignments: true,
      },
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
      data: {
        name: data.name,
        day: data.day as any,
        startTime: new Date(data.startTime),
        endTime: new Date(data.endTime),
        subjectId: data.subjectId,
        classId: data.classId,
        teacherId: data.teacherId,
        schoolId: data.schoolId,
      },
    });
  }

  async updateLesson(id: number, data: any) {
    if (data.startTime) data.startTime = new Date(data.startTime);
    if (data.endTime) data.endTime = new Date(data.endTime);
    return prisma.lesson.update({ where: { id }, data });
  }

  async deleteLesson(id: number) {
    return prisma.lesson.delete({ where: { id } });
  }

  // ============= Exams =============
  async getExams(schoolId: string, lessonId?: number) {
    const where: any = { schoolId };
    if (lessonId) where.lessonId = lessonId;
    
    return prisma.exam.findMany({
      where,
      include: {
        lesson: { include: { subject: true, class: true } },
      },
      orderBy: { startTime: 'desc' },
    });
  }

  async getExamById(id: number) {
    return prisma.exam.findUnique({
      where: { id },
      include: {
        lesson: { include: { subject: true, class: true, teacher: true } },
        results: { include: { student: true } },
      },
    });
  }

  async createExam(data: { title: string; startTime: Date; endTime: Date; lessonId: number; schoolId: string }) {
    return prisma.exam.create({
      data: {
        title: data.title,
        startTime: new Date(data.startTime),
        endTime: new Date(data.endTime),
        lessonId: data.lessonId,
        schoolId: data.schoolId,
      },
    });
  }

  async updateExam(id: number, data: any) {
    if (data.startTime) data.startTime = new Date(data.startTime);
    if (data.endTime) data.endTime = new Date(data.endTime);
    return prisma.exam.update({ where: { id }, data });
  }

  async deleteExam(id: number) {
    return prisma.exam.delete({ where: { id } });
  }

  // ============= Assignments =============
  async getAssignments(schoolId: string, lessonId?: number) {
    const where: any = { schoolId };
    if (lessonId) where.lessonId = lessonId;
    
    return prisma.assignment.findMany({
      where,
      include: {
        lesson: { include: { subject: true, class: true } },
      },
      orderBy: { dueDate: 'desc' },
    });
  }

  async getAssignmentById(id: number) {
    return prisma.assignment.findUnique({
      where: { id },
      include: {
        lesson: { include: { subject: true, class: true, teacher: true } },
        results: { include: { student: true } },
      },
    });
  }

  async createAssignment(data: { title: string; startDate: Date; dueDate: Date; lessonId: number; schoolId: string }) {
    return prisma.assignment.create({
      data: {
        title: data.title,
        startDate: new Date(data.startDate),
        dueDate: new Date(data.dueDate),
        lessonId: data.lessonId,
        schoolId: data.schoolId,
      },
    });
  }

  async updateAssignment(id: number, data: any) {
    if (data.startDate) data.startDate = new Date(data.startDate);
    if (data.dueDate) data.dueDate = new Date(data.dueDate);
    return prisma.assignment.update({ where: { id }, data });
  }

  async deleteAssignment(id: number) {
    return prisma.assignment.delete({ where: { id } });
  }

  // ============= Results =============
  async getResults(schoolId: string, studentId?: string) {
    const where: any = { schoolId };
    if (studentId) where.studentId = studentId;
    
    return prisma.result.findMany({
      where,
      include: {
        student: true,
        exam: { include: { lesson: { include: { subject: true } } } },
        assignment: { include: { lesson: { include: { subject: true } } } },
      },
      orderBy: { id: 'desc' },
    });
  }

  async createResult(data: { score: number; studentId: string; examId?: number; assignmentId?: number; schoolId: string }) {
    return prisma.result.create({
      data: {
        score: data.score,
        studentId: data.studentId,
        examId: data.examId,
        assignmentId: data.assignmentId,
        schoolId: data.schoolId,
      },
    });
  }

  async updateResult(id: number, data: { score?: number }) {
    return prisma.result.update({ where: { id }, data });
  }

  async deleteResult(id: number) {
    return prisma.result.delete({ where: { id } });
  }

  // ============= Events =============
  async getEvents(schoolId: string, classId?: number) {
    const where: any = { schoolId };
    if (classId) where.classId = classId;

    return prisma.event.findMany({
      where,
      include: { class: true },
      orderBy: { startTime: 'asc' },
    });
  }

  async getEventById(id: number) {
    return prisma.event.findUnique({
      where: { id },
      include: { class: true },
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
    return prisma.event.create({
      data: {
        title: data.title,
        description: data.description,
        startTime: data.startTime,
        endTime: data.endTime,
        classId: data.classId,
        schoolId: data.schoolId,
      },
    });
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
      include: { class: true },
      orderBy: { date: 'desc' },
    });
  }

  async getAnnouncementById(id: number) {
    return prisma.announcement.findUnique({
      where: { id },
      include: { class: true },
    });
  }

  async createAnnouncement(data: {
    title: string;
    description: string;
    date: Date;
    classId?: number;
    schoolId: string;
  }) {
    return prisma.announcement.create({
      data: {
        title: data.title,
        description: data.description,
        date: data.date,
        classId: data.classId,
        schoolId: data.schoolId,
      },
    });
  }

  async updateAnnouncement(id: number, data: any) {
    return prisma.announcement.update({ where: { id }, data });
  }

  async deleteAnnouncement(id: number) {
    return prisma.announcement.delete({ where: { id } });
  }
}

export const academicService = new AcademicService();
