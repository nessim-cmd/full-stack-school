import prisma from '../lib/prisma';

export class CommunicationService {
  // ============= Notifications =============
  async getNotifications(userId: string, userRole: string, unreadOnly = false) {
    const where: any = { userId, userRole };
    if (unreadOnly) where.read = false;
    
    return prisma.notification.findMany({
      where,
      orderBy: { createdAt: 'desc' },
      take: 50,
    });
  }

  async createNotification(data: {
    title: string;
    message: string;
    type: string;
    userId: string;
    userRole: string;
    schoolId: string;
    link?: string;
  }) {
    return prisma.notification.create({ data });
  }

  async createBulkNotifications(notifications: Array<{
    title: string;
    message: string;
    type: string;
    userId: string;
    userRole: string;
    schoolId: string;
    link?: string;
  }>) {
    return prisma.notification.createMany({ data: notifications });
  }

  async markAsRead(id: number) {
    return prisma.notification.update({
      where: { id },
      data: { read: true },
    });
  }

  async markAllAsRead(userId: string, userRole: string) {
    return prisma.notification.updateMany({
      where: { userId, userRole, read: false },
      data: { read: true },
    });
  }

  async deleteNotification(id: number) {
    return prisma.notification.delete({ where: { id } });
  }

  async getUnreadCount(userId: string, userRole: string) {
    return prisma.notification.count({
      where: { userId, userRole, read: false },
    });
  }

  // ============= Messages =============
  async getMessages(userId: string, userRole: string, page = 1, limit = 20) {
    const skip = (page - 1) * limit;
    
    const [messages, total] = await Promise.all([
      prisma.message.findMany({
        where: {
          OR: [
            { senderId: userId, senderRole: userRole },
            { receiverId: userId, receiverRole: userRole },
          ],
        },
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' },
      }),
      prisma.message.count({
        where: {
          OR: [
            { senderId: userId, senderRole: userRole },
            { receiverId: userId, receiverRole: userRole },
          ],
        },
      }),
    ]);
    
    return {
      data: messages,
      pagination: { page, limit, total, totalPages: Math.ceil(total / limit) },
    };
  }

  async getConversation(userId1: string, role1: string, userId2: string, role2: string) {
    return prisma.message.findMany({
      where: {
        OR: [
          { senderId: userId1, senderRole: role1, receiverId: userId2, receiverRole: role2 },
          { senderId: userId2, senderRole: role2, receiverId: userId1, receiverRole: role1 },
        ],
      },
      orderBy: { createdAt: 'asc' },
    });
  }

  async sendMessage(data: {
    content: string;
    senderId: string;
    senderRole: string;
    senderName: string;
    receiverId: string;
    receiverRole: string;
    schoolId: string;
  }) {
    return prisma.message.create({ data });
  }

  async markMessageAsRead(id: number) {
    return prisma.message.update({
      where: { id },
      data: { read: true },
    });
  }

  async deleteMessage(id: number) {
    return prisma.message.delete({ where: { id } });
  }

  // ============= Announcements =============
  async getAnnouncements(schoolId: string, userRole?: string, classId?: number) {
    const where: any = { schoolId };
    if (userRole) {
      where.targetRoles = { has: userRole };
    }
    if (classId) where.classId = classId;
    
    return prisma.announcement.findMany({
      where: {
        ...where,
        OR: [
          { expiresAt: null },
          { expiresAt: { gt: new Date() } },
        ],
      },
      orderBy: [{ priority: 'desc' }, { createdAt: 'desc' }],
    });
  }

  async createAnnouncement(data: {
    title: string;
    content: string;
    priority?: string;
    targetRoles: string[];
    classId?: number;
    schoolId: string;
    authorId: string;
    authorName: string;
    expiresAt?: Date;
  }) {
    return prisma.announcement.create({ data });
  }

  async updateAnnouncement(id: number, data: any) {
    return prisma.announcement.update({ where: { id }, data });
  }

  async deleteAnnouncement(id: number) {
    return prisma.announcement.delete({ where: { id } });
  }

  // ============= Email Templates =============
  async getEmailTemplates(schoolId: string) {
    return prisma.emailTemplate.findMany({
      where: { schoolId },
      orderBy: { name: 'asc' },
    });
  }

  async createEmailTemplate(data: {
    name: string;
    subject: string;
    body: string;
    variables: string[];
    schoolId: string;
  }) {
    return prisma.emailTemplate.create({ data });
  }

  async updateEmailTemplate(id: number, data: any) {
    return prisma.emailTemplate.update({ where: { id }, data });
  }

  async deleteEmailTemplate(id: number) {
    return prisma.emailTemplate.delete({ where: { id } });
  }
}

export const communicationService = new CommunicationService();
