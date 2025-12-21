import prisma from '../lib/prisma';
import bcrypt from 'bcryptjs';

export class PlatformAdminService {
  // ============= Super Admins =============
  async getSuperAdmins() {
    return prisma.superAdmin.findMany({
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
        phone: true,
        avatar: true,
        role: true,
        permissions: true,
        isActive: true,
        lastLogin: true,
        createdAt: true,
      },
    });
  }

  async getSuperAdminById(id: string) {
    return prisma.superAdmin.findUnique({
      where: { id },
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
        phone: true,
        avatar: true,
        role: true,
        permissions: true,
        isActive: true,
        lastLogin: true,
        createdAt: true,
      },
    });
  }

  async createSuperAdmin(data: any) {
    const hashedPassword = await bcrypt.hash(data.password, 10);
    
    return prisma.superAdmin.create({
      data: {
        ...data,
        password: hashedPassword,
      },
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
        createdAt: true,
      },
    });
  }

  async updateSuperAdmin(id: string, data: any) {
    if (data.password) {
      data.password = await bcrypt.hash(data.password, 10);
    }
    
    return prisma.superAdmin.update({
      where: { id },
      data,
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
        phone: true,
        avatar: true,
        role: true,
        permissions: true,
        isActive: true,
        updatedAt: true,
      },
    });
  }

  async deleteSuperAdmin(id: string) {
    return prisma.superAdmin.delete({
      where: { id },
    });
  }

  // ============= Platform Settings =============
  async getPlatformSettings() {
    let settings = await prisma.platformSettings.findFirst();
    
    if (!settings) {
      settings = await prisma.platformSettings.create({
        data: {},
      });
    }
    
    return settings;
  }

  async updatePlatformSettings(data: any) {
    const existing = await prisma.platformSettings.findFirst();
    
    if (existing) {
      return prisma.platformSettings.update({
        where: { id: existing.id },
        data,
      });
    }
    
    return prisma.platformSettings.create({
      data,
    });
  }

  // ============= Subscription Plans =============
  async getSubscriptionPlans(includeInactive = false) {
    return prisma.subscriptionPlan.findMany({
      where: includeInactive ? {} : { isActive: true },
      orderBy: { sortOrder: 'asc' },
    });
  }

  async getSubscriptionPlanById(id: string) {
    return prisma.subscriptionPlan.findUnique({
      where: { id },
    });
  }

  async createSubscriptionPlan(data: any) {
    return prisma.subscriptionPlan.create({
      data,
    });
  }

  async updateSubscriptionPlan(id: string, data: any) {
    return prisma.subscriptionPlan.update({
      where: { id },
      data,
    });
  }

  async deleteSubscriptionPlan(id: string) {
    return prisma.subscriptionPlan.delete({
      where: { id },
    });
  }

  // ============= Subscriptions =============
  async getSubscriptions(
    page: number = 1,
    limit: number = 20,
    filters?: {
      status?: string;
      planId?: string;
    }
  ) {
    const skip = (page - 1) * limit;

    const where: any = {};

    if (filters?.status) {
      where.status = filters.status;
    }

    if (filters?.planId) {
      where.planId = filters.planId;
    }

    const [subscriptions, total] = await Promise.all([
      prisma.subscription.findMany({
        where,
        include: {
          plan: true,
        },
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' },
      }),
      prisma.subscription.count({ where }),
    ]);

    return {
      subscriptions,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  async getSubscriptionBySchoolId(schoolId: string) {
    return prisma.subscription.findUnique({
      where: { schoolId },
      include: {
        plan: true,
      },
    });
  }

  async createSubscription(data: any) {
    return prisma.subscription.create({
      data: {
        ...data,
        startDate: data.startDate ? new Date(data.startDate) : new Date(),
        endDate: data.endDate ? new Date(data.endDate) : null,
        trialEndsAt: data.trialEndsAt ? new Date(data.trialEndsAt) : null,
        nextBillingDate: data.nextBillingDate ? new Date(data.nextBillingDate) : null,
      },
      include: {
        plan: true,
      },
    });
  }

  async updateSubscription(schoolId: string, data: any) {
    const updateData: any = { ...data };
    if (data.endDate) updateData.endDate = new Date(data.endDate);
    if (data.nextBillingDate) updateData.nextBillingDate = new Date(data.nextBillingDate);

    return prisma.subscription.update({
      where: { schoolId },
      data: updateData,
      include: {
        plan: true,
      },
    });
  }

  async cancelSubscription(schoolId: string) {
    return prisma.subscription.update({
      where: { schoolId },
      data: {
        status: 'CANCELLED',
        endDate: new Date(),
      },
    });
  }

  // ============= Audit Logs =============
  async getAuditLogs(
    page: number = 1,
    limit: number = 50,
    filters?: {
      userId?: string;
      action?: string;
      resource?: string;
      startDate?: Date;
      endDate?: Date;
    }
  ) {
    const skip = (page - 1) * limit;

    const where: any = {};

    if (filters?.userId) {
      where.userId = filters.userId;
    }

    if (filters?.action) {
      where.action = filters.action;
    }

    if (filters?.resource) {
      where.resource = filters.resource;
    }

    if (filters?.startDate || filters?.endDate) {
      where.createdAt = {};
      if (filters?.startDate) where.createdAt.gte = filters.startDate;
      if (filters?.endDate) where.createdAt.lte = filters.endDate;
    }

    const [logs, total] = await Promise.all([
      prisma.auditLog.findMany({
        where,
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' },
      }),
      prisma.auditLog.count({ where }),
    ]);

    return {
      logs,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  async createAuditLog(data: any) {
    return prisma.auditLog.create({
      data,
    });
  }

  // ============= System Metrics =============
  async recordMetric(name: string, value: number, unit?: string, tags?: any) {
    return prisma.systemMetric.create({
      data: {
        name,
        value,
        unit,
        tags,
      },
    });
  }

  async getMetrics(name: string, startDate: Date, endDate: Date) {
    return prisma.systemMetric.findMany({
      where: {
        name,
        recordedAt: {
          gte: startDate,
          lte: endDate,
        },
      },
      orderBy: { recordedAt: 'asc' },
    });
  }

  // ============= Dashboard Stats =============
  async getDashboardStats() {
    const [
      totalSchools,
      activeSubscriptions,
      subscriptionsByPlan,
      subscriptionsByStatus,
      recentLogs,
    ] = await Promise.all([
      prisma.subscription.count(),
      prisma.subscription.count({ where: { status: 'ACTIVE' } }),
      prisma.subscription.groupBy({
        by: ['planId'],
        _count: true,
      }),
      prisma.subscription.groupBy({
        by: ['status'],
        _count: true,
      }),
      prisma.auditLog.findMany({
        take: 10,
        orderBy: { createdAt: 'desc' },
      }),
    ]);

    return {
      totalSchools,
      activeSubscriptions,
      subscriptionsByPlan,
      subscriptionsByStatus: subscriptionsByStatus.reduce((acc, item) => {
        acc[item.status] = item._count;
        return acc;
      }, {} as Record<string, number>),
      recentLogs,
    };
  }
}

export const platformAdminService = new PlatformAdminService();
