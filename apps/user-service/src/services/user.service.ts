import prisma from '../lib/prisma';

export class UserService {
  // ============= Teachers =============
  async getTeachers(schoolId: string, page: number, limit: number, search?: string) {
    const skip = (page - 1) * limit;
    const where: any = { schoolId };
    
    if (search) {
      where.OR = [
        { name: { contains: search, mode: 'insensitive' } },
        { surname: { contains: search, mode: 'insensitive' } },
        { email: { contains: search, mode: 'insensitive' } },
        { username: { contains: search, mode: 'insensitive' } },
      ];
    }
    
    const [teachers, total] = await Promise.all([
      prisma.teacher.findMany({
        where,
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' },
        include: { subjects: true },
      }),
      prisma.teacher.count({ where }),
    ]);
    
    return {
      data: teachers,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  async getTeacherById(id: string) {
    return prisma.teacher.findUnique({
      where: { id },
      include: { subjects: true },
    });
  }

  async createTeacher(data: any) {
    const { subjectIds, ...teacherData } = data;
    
    return prisma.teacher.create({
      data: {
        ...teacherData,
        subjects: subjectIds ? {
          create: subjectIds.map((subjectId: string) => ({ subjectId })),
        } : undefined,
      },
      include: { subjects: true },
    });
  }

  async updateTeacher(id: string, data: any) {
    const { subjectIds, ...teacherData } = data;
    
    // Delete existing subject relations and create new ones
    if (subjectIds) {
      await prisma.teacherSubject.deleteMany({ where: { teacherId: id } });
    }
    
    return prisma.teacher.update({
      where: { id },
      data: {
        ...teacherData,
        subjects: subjectIds ? {
          create: subjectIds.map((subjectId: string) => ({ subjectId })),
        } : undefined,
      },
      include: { subjects: true },
    });
  }

  async deleteTeacher(id: string) {
    return prisma.teacher.delete({ where: { id } });
  }

  // ============= Students =============
  async getStudents(
    schoolId: string,
    page: number,
    limit: number,
    search?: string,
    classId?: number,
    gradeId?: number
  ) {
    const skip = (page - 1) * limit;
    const where: any = { schoolId };
    
    if (search) {
      where.OR = [
        { name: { contains: search, mode: 'insensitive' } },
        { surname: { contains: search, mode: 'insensitive' } },
        { email: { contains: search, mode: 'insensitive' } },
        { username: { contains: search, mode: 'insensitive' } },
      ];
    }
    
    if (classId) where.classId = classId;
    if (gradeId) where.gradeId = gradeId;
    
    const [students, total] = await Promise.all([
      prisma.student.findMany({
        where,
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' },
        include: { parent: true },
      }),
      prisma.student.count({ where }),
    ]);
    
    return {
      data: students,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  async getStudentById(id: string) {
    return prisma.student.findUnique({
      where: { id },
      include: { parent: true },
    });
  }

  async createStudent(data: any) {
    return prisma.student.create({
      data,
      include: { parent: true },
    });
  }

  async updateStudent(id: string, data: any) {
    return prisma.student.update({
      where: { id },
      data,
      include: { parent: true },
    });
  }

  async deleteStudent(id: string) {
    return prisma.student.delete({ where: { id } });
  }

  // ============= Parents =============
  async getParents(schoolId: string, page: number, limit: number, search?: string) {
    const skip = (page - 1) * limit;
    const where: any = { schoolId };
    
    if (search) {
      where.OR = [
        { name: { contains: search, mode: 'insensitive' } },
        { surname: { contains: search, mode: 'insensitive' } },
        { email: { contains: search, mode: 'insensitive' } },
        { phone: { contains: search, mode: 'insensitive' } },
      ];
    }
    
    const [parents, total] = await Promise.all([
      prisma.parent.findMany({
        where,
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' },
        include: { students: true },
      }),
      prisma.parent.count({ where }),
    ]);
    
    return {
      data: parents,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  async getParentById(id: string) {
    return prisma.parent.findUnique({
      where: { id },
      include: { students: true },
    });
  }

  async createParent(data: any) {
    return prisma.parent.create({
      data,
      include: { students: true },
    });
  }

  async updateParent(id: string, data: any) {
    return prisma.parent.update({
      where: { id },
      data,
      include: { students: true },
    });
  }

  async deleteParent(id: string) {
    return prisma.parent.delete({ where: { id } });
  }

  // ============= Admins =============
  async getAdmins(schoolId: string) {
    return prisma.admin.findMany({
      where: { schoolId },
      orderBy: { createdAt: 'desc' },
    });
  }

  async createAdmin(data: any) {
    return prisma.admin.create({ data });
  }
}

export const userService = new UserService();
