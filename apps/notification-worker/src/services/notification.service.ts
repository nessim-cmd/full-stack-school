import prisma from '../lib/prisma';

export class NotificationService {
  // ============= Jobs =============
  async createJob(data: any) {
    return prisma.notificationJob.create({
      data: {
        ...data,
        scheduledFor: data.scheduledFor ? new Date(data.scheduledFor) : null,
      },
    });
  }

  async getJob(id: string) {
    return prisma.notificationJob.findUnique({
      where: { id },
    });
  }

  async getPendingJobs(limit: number = 100) {
    const now = new Date();
    
    return prisma.notificationJob.findMany({
      where: {
        status: 'PENDING',
        OR: [
          { scheduledFor: null },
          { scheduledFor: { lte: now } },
        ],
      },
      orderBy: [
        { priority: 'desc' },
        { createdAt: 'asc' },
      ],
      take: limit,
    });
  }

  async getRetryableJobs(limit: number = 50) {
    const now = new Date();
    
    return prisma.notificationJob.findMany({
      where: {
        status: 'FAILED',
        attempts: { lt: prisma.notificationJob.fields.maxAttempts },
        nextRetryAt: { lte: now },
      },
      orderBy: { nextRetryAt: 'asc' },
      take: limit,
    });
  }

  async updateJobStatus(id: string, status: string, error?: string) {
    const updateData: any = {
      status,
      processedAt: status === 'COMPLETED' || status === 'FAILED' ? new Date() : undefined,
    };

    if (error) {
      const job = await this.getJob(id);
      if (job) {
        updateData.attempts = job.attempts + 1;
        updateData.lastError = error;
        
        // Calculate next retry with exponential backoff
        if (job.attempts + 1 < job.maxAttempts) {
          const delay = Math.pow(2, job.attempts) * 60 * 1000; // 1min, 2min, 4min, etc.
          updateData.nextRetryAt = new Date(Date.now() + delay);
          updateData.status = 'FAILED'; // Keep as failed for retry
        }
      }
    }

    return prisma.notificationJob.update({
      where: { id },
      data: updateData,
    });
  }

  async cancelJob(id: string) {
    return prisma.notificationJob.update({
      where: { id },
      data: { status: 'CANCELLED' },
    });
  }

  // ============= Templates =============
  async getTemplates() {
    return prisma.notificationTemplate.findMany({
      where: { isActive: true },
    });
  }

  async getTemplate(name: string) {
    return prisma.notificationTemplate.findUnique({
      where: { name },
    });
  }

  async createTemplate(data: any) {
    return prisma.notificationTemplate.create({
      data,
    });
  }

  async updateTemplate(id: string, data: any) {
    return prisma.notificationTemplate.update({
      where: { id },
      data,
    });
  }

  async deleteTemplate(id: string) {
    return prisma.notificationTemplate.delete({
      where: { id },
    });
  }

  renderTemplate(template: string, variables: Record<string, string>): string {
    let rendered = template;
    for (const [key, value] of Object.entries(variables)) {
      rendered = rendered.replace(new RegExp(`{{${key}}}`, 'g'), value);
    }
    return rendered;
  }

  // ============= Device Tokens =============
  async registerDeviceToken(userId: string, token: string, platform: string) {
    return prisma.deviceToken.upsert({
      where: { token },
      update: {
        userId,
        platform,
        isActive: true,
        lastUsed: new Date(),
      },
      create: {
        userId,
        token,
        platform,
      },
    });
  }

  async getUserDeviceTokens(userId: string) {
    return prisma.deviceToken.findMany({
      where: {
        userId,
        isActive: true,
      },
    });
  }

  async invalidateToken(token: string) {
    return prisma.deviceToken.update({
      where: { token },
      data: { isActive: false },
    });
  }

  // ============= Logging =============
  async logEmail(data: any) {
    return prisma.emailLog.create({
      data: {
        ...data,
        sentAt: data.status === 'sent' ? new Date() : null,
      },
    });
  }

  async logPush(data: any) {
    return prisma.pushLog.create({
      data: {
        ...data,
        sentAt: data.status === 'sent' ? new Date() : null,
      },
    });
  }

  async logSms(data: any) {
    return prisma.smsLog.create({
      data: {
        ...data,
        sentAt: data.status === 'sent' ? new Date() : null,
      },
    });
  }

  // ============= Statistics =============
  async getJobStats() {
    const [total, byStatus, byType, recentFailed] = await Promise.all([
      prisma.notificationJob.count(),
      prisma.notificationJob.groupBy({
        by: ['status'],
        _count: true,
      }),
      prisma.notificationJob.groupBy({
        by: ['type'],
        _count: true,
      }),
      prisma.notificationJob.findMany({
        where: { status: 'FAILED' },
        orderBy: { updatedAt: 'desc' },
        take: 10,
      }),
    ]);

    return {
      total,
      byStatus: byStatus.reduce((acc, item) => {
        acc[item.status] = item._count;
        return acc;
      }, {} as Record<string, number>),
      byType: byType.reduce((acc, item) => {
        acc[item.type] = item._count;
        return acc;
      }, {} as Record<string, number>),
      recentFailed,
    };
  }
}

export const notificationService = new NotificationService();
