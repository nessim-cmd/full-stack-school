import { PrismaClient, PlanType, SubscriptionStatus } from '@prisma/client';

const prisma = new PrismaClient();

export class SchoolService {
  async getSchools(filters?: { subscriptionStatus?: SubscriptionStatus; planType?: PlanType }) {
    return prisma.school.findMany({
      where: {
        ...(filters?.subscriptionStatus && { subscriptionStatus: filters.subscriptionStatus }),
        ...(filters?.planType && { plan: filters.planType }),
      },
      include: {
        _count: {
          select: {
            students: true,
            teachers: true,
            admins: true,
          },
        },
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async getSchoolById(id: string) {
    return prisma.school.findUnique({
      where: { id },
      include: {
        _count: {
          select: {
            students: true,
            teachers: true,
            admins: true,
            grades: true,
            classes: true,
          },
        },
        settings: true,
      },
    });
  }

  async getSchoolBySlug(slug: string) {
    return prisma.school.findUnique({
      where: { slug },
      include: {
        settings: true,
      },
    });
  }

  async createSchool(data: {
    name: string;
    slug: string;
    address?: string;
    phone?: string;
    email?: string;
    logo?: string;
    planType?: PlanType;
  }) {
    return prisma.school.create({
      data: {
        name: data.name,
        slug: data.slug,
        plan: data.planType || 'FREE',
        subscriptionStatus: 'TRIAL',
        trialEndsAt: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000), // 14 days
      },
    });
  }

  async updateSchool(id: string, data: Record<string, any>) {
    // Remove undefined values and isActive if present
    const cleanData: Record<string, any> = {};
    for (const [key, value] of Object.entries(data)) {
      if (value !== undefined && key !== 'isActive') {
        cleanData[key] = value;
      }
    }
    
    return prisma.school.update({
      where: { id },
      data: cleanData,
    });
  }

  async deleteSchool(id: string) {
    return prisma.school.delete({ where: { id } });
  }

  async isSlugAvailable(slug: string, excludeId?: string) {
    const existing = await prisma.school.findUnique({
      where: { slug },
    });
    if (!existing) return true;
    if (excludeId && existing.id === excludeId) return true;
    return false;
  }

  async getSchoolStats(schoolId: string) {
    const [studentsCount, teachersCount, classesCount, gradesCount] = await Promise.all([
      prisma.student.count({ where: { schoolId } }),
      prisma.teacher.count({ where: { schoolId } }),
      prisma.class.count({ where: { schoolId } }),
      prisma.grade.count({ where: { schoolId } }),
    ]);

    return {
      students: studentsCount,
      teachers: teachersCount,
      classes: classesCount,
      grades: gradesCount,
    };
  }

  async getActiveSchoolsCount() {
    return prisma.school.count({ where: { subscriptionStatus: 'ACTIVE' } });
  }

  // School Managers - use schools relation (through SchoolMembership)
  async getSchoolManagers() {
    return prisma.schoolManager.findMany({
      include: { schools: { include: { school: true } } },
      orderBy: { createdAt: 'desc' },
    });
  }

  async getSchoolManagerById(id: string) {
    return prisma.schoolManager.findUnique({
      where: { id },
      include: { schools: { include: { school: true } } },
    });
  }

  async getSchoolManagerByEmail(email: string) {
    return prisma.schoolManager.findUnique({
      where: { email },
      include: { schools: { include: { school: true } } },
    });
  }
}

export const schoolService = new SchoolService();
