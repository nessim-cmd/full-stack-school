import { PrismaClient, PlanType, SubscriptionStatus } from '@prisma/client';

const prisma = new PrismaClient();

export class PlatformAdminService {
  // Super Admin operations
  async getSuperAdmins() {
    return prisma.superAdmin.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }

  async getSuperAdminById(id: string) {
    return prisma.superAdmin.findUnique({
      where: { id },
    });
  }

  async getSuperAdminByEmail(email: string) {
    return prisma.superAdmin.findUnique({
      where: { email },
    });
  }

  // Audit Logs - requires superAdminId, entity, entityId, description
  async getAuditLogs(filters?: { superAdminId?: string; action?: string; limit?: number }) {
    return prisma.auditLog.findMany({
      where: {
        ...(filters?.superAdminId && { superAdminId: filters.superAdminId }),
        ...(filters?.action && { action: filters.action }),
      },
      include: { superAdmin: true },
      orderBy: { createdAt: 'desc' },
      take: filters?.limit || 100,
    });
  }

  async createAuditLog(data: {
    action: string;
    entity: string;
    entityId: string;
    description: string;
    superAdminId: string;
    metadata?: string;
  }) {
    return prisma.auditLog.create({ data });
  }

  // Dashboard Stats - School has subscriptionStatus not isActive
  async getDashboardStats() {
    const [
      totalSchools,
      activeSchools,
      totalStudents,
      totalTeachers,
      openTickets,
    ] = await Promise.all([
      prisma.school.count(),
      prisma.school.count({ where: { subscriptionStatus: 'ACTIVE' } }),
      prisma.student.count(),
      prisma.teacher.count(),
      prisma.supportTicket.count({ where: { status: 'OPEN' } }),
    ]);

    return {
      totalSchools,
      activeSchools,
      totalStudents,
      totalTeachers,
      openTickets,
    };
  }

  // SaaS Settings
  async getSaasSettings() {
    return prisma.saasSettings.findFirst();
  }

  async updateSaasSettings(data: {
    heroTitle?: string;
    heroDescription?: string;
    features?: string;
    pricing?: string;
  }) {
    const existing = await prisma.saasSettings.findFirst();
    if (existing) {
      return prisma.saasSettings.update({
        where: { id: existing.id },
        data,
      });
    }
    return prisma.saasSettings.create({
      data: {
        heroTitle: data.heroTitle || 'Modern School Management Made Simple',
        heroDescription: data.heroDescription || 'Complete school management solution',
        features: data.features || '[]',
        pricing: data.pricing || '[]',
      },
    });
  }

  // Site Settings - requires schoolId
  async getSiteSettings(schoolId: string) {
    return prisma.siteSettings.findUnique({
      where: { schoolId },
    });
  }

  async updateSiteSettings(schoolId: string, data: Record<string, any>) {
    const existing = await prisma.siteSettings.findUnique({
      where: { schoolId },
    });
    if (existing) {
      return prisma.siteSettings.update({
        where: { schoolId },
        data,
      });
    }
    return prisma.siteSettings.create({
      data: { schoolId, ...data },
    });
  }

  // School Management
  async getAllSchoolsWithDetails() {
    return prisma.school.findMany({
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

  async toggleSchoolStatus(schoolId: string, status: SubscriptionStatus) {
    return prisma.school.update({
      where: { id: schoolId },
      data: { subscriptionStatus: status },
    });
  }

  // Invoices for schools - requires plan field
  async getInvoices(schoolId?: string) {
    return prisma.invoice.findMany({
      where: schoolId ? { schoolId } : {},
      include: { school: true },
      orderBy: { createdAt: 'desc' },
    });
  }

  async createInvoice(data: {
    schoolId: string;
    amount: number;
    dueDate: Date;
    plan: PlanType;
  }) {
    return prisma.invoice.create({
      data: {
        schoolId: data.schoolId,
        amount: data.amount,
        dueDate: data.dueDate,
        plan: data.plan,
        status: 'PENDING',
      },
    });
  }
}

export const platformAdminService = new PlatformAdminService();
