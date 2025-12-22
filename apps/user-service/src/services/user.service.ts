import { PrismaClient, UserSex } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

export class UserService {
  // Students
  async getStudents(schoolId: string, filters?: { classId?: number; gradeId?: number; search?: string }) {
    const where: any = { schoolId };
    if (filters?.classId) where.classId = filters.classId;
    if (filters?.gradeId) where.gradeId = filters.gradeId;
    if (filters?.search) {
      where.OR = [
        { name: { contains: filters.search, mode: 'insensitive' } },
        { surname: { contains: filters.search, mode: 'insensitive' } },
        { email: { contains: filters.search, mode: 'insensitive' } },
      ];
    }
    
    return prisma.student.findMany({
      where,
      include: { class: true, grade: true, parent: true },
      orderBy: { name: 'asc' },
    });
  }

  async getStudentById(id: string) {
    return prisma.student.findUnique({
      where: { id },
      include: { class: true, grade: true, parent: true },
    });
  }

  async createStudent(data: {
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
    gradeId: number;
    classId: number;
    parentId: string;
    schoolId: string;
    password?: string;
  }) {
    const hashedPassword = data.password ? await bcrypt.hash(data.password, 10) : undefined;
    return prisma.student.create({
      data: {
        ...data,
        password: hashedPassword,
      },
    });
  }

  async updateStudent(id: string, data: Partial<{
    username: string;
    name: string;
    surname: string;
    email: string;
    phone: string;
    address: string;
    img: string;
    bloodType: string;
    sex: UserSex;
    birthday: Date;
    gradeId: number;
    classId: number;
    parentId: string;
  }>) {
    return prisma.student.update({ where: { id }, data });
  }

  async deleteStudent(id: string) {
    return prisma.student.delete({ where: { id } });
  }

  // Teachers
  async getTeachers(schoolId: string, filters?: { subjectId?: number; search?: string }) {
    const where: any = { schoolId };
    if (filters?.subjectId) {
      where.subjects = { some: { id: filters.subjectId } };
    }
    if (filters?.search) {
      where.OR = [
        { name: { contains: filters.search, mode: 'insensitive' } },
        { surname: { contains: filters.search, mode: 'insensitive' } },
        { email: { contains: filters.search, mode: 'insensitive' } },
      ];
    }
    
    return prisma.teacher.findMany({
      where,
      include: { subjects: true, classes: true },
      orderBy: { name: 'asc' },
    });
  }

  async getTeacherById(id: string) {
    return prisma.teacher.findUnique({
      where: { id },
      include: { subjects: true, classes: true, lessons: true },
    });
  }

  async createTeacher(data: {
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
    schoolId: string;
    password?: string;
  }) {
    const hashedPassword = data.password ? await bcrypt.hash(data.password, 10) : undefined;
    return prisma.teacher.create({
      data: {
        ...data,
        password: hashedPassword,
      },
    });
  }

  async updateTeacher(id: string, data: Partial<{
    username: string;
    name: string;
    surname: string;
    email: string;
    phone: string;
    address: string;
    img: string;
    bloodType: string;
    sex: UserSex;
    birthday: Date;
  }>) {
    return prisma.teacher.update({ where: { id }, data });
  }

  async deleteTeacher(id: string) {
    return prisma.teacher.delete({ where: { id } });
  }

  // Parents
  async getParents(schoolId: string, search?: string) {
    const where: any = { schoolId };
    if (search) {
      where.OR = [
        { name: { contains: search, mode: 'insensitive' } },
        { email: { contains: search, mode: 'insensitive' } },
        { phone: { contains: search, mode: 'insensitive' } },
      ];
    }
    
    return prisma.parent.findMany({
      where,
      include: { students: true },
      orderBy: { name: 'asc' },
    });
  }

  async getParentById(id: string) {
    return prisma.parent.findUnique({
      where: { id },
      include: { students: true },
    });
  }

  async createParent(data: {
    id: string;
    username: string;
    name: string;
    surname: string;
    email?: string;
    phone: string;
    address: string;
    schoolId: string;
    password?: string;
  }) {
    const hashedPassword = data.password ? await bcrypt.hash(data.password, 10) : undefined;
    return prisma.parent.create({
      data: {
        ...data,
        password: hashedPassword,
      },
    });
  }

  async updateParent(id: string, data: Partial<{
    username: string;
    name: string;
    surname: string;
    email: string;
    phone: string;
    address: string;
  }>) {
    return prisma.parent.update({ where: { id }, data });
  }

  async deleteParent(id: string) {
    return prisma.parent.delete({ where: { id } });
  }

  // Admins
  async getAdmins(schoolId: string) {
    return prisma.admin.findMany({
      where: { schoolId },
      orderBy: { username: 'asc' },
    });
  }

  async getAdminById(id: string) {
    return prisma.admin.findUnique({
      where: { id },
    });
  }

  async createAdmin(data: {
    id: string;
    username: string;
    schoolId: string;
    password?: string;
  }) {
    const hashedPassword = data.password ? await bcrypt.hash(data.password, 10) : undefined;
    return prisma.admin.create({
      data: {
        ...data,
        password: hashedPassword,
      },
    });
  }

  async deleteAdmin(id: string) {
    return prisma.admin.delete({ where: { id } });
  }

  // User counts
  async getUserCounts(schoolId: string) {
    const [students, teachers, parents, admins] = await Promise.all([
      prisma.student.count({ where: { schoolId } }),
      prisma.teacher.count({ where: { schoolId } }),
      prisma.parent.count({ where: { schoolId } }),
      prisma.admin.count({ where: { schoolId } }),
    ]);
    
    return { students, teachers, parents, admins };
  }
}

export const userService = new UserService();
