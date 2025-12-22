import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class CommunicationService {
  // Notifications
  async getNotifications(userId: string, userRole: string) {
    return prisma.notification.findMany({
      where: { userId, userRole },
      orderBy: { createdAt: 'desc' },
    });
  }

  async createNotification(data: {
    title: string;
    message: string;
    type: string;
    userId: string;
    userRole: string;
    schoolId: string;
  }) {
    return prisma.notification.create({
      data: {
        title: data.title,
        message: data.message,
        type: data.type,
        userId: data.userId,
        userRole: data.userRole,
        school: { connect: { id: data.schoolId } },
      },
    });
  }

  async markNotificationAsRead(id: number) {
    return prisma.notification.update({
      where: { id },
      data: { read: true },
    });
  }

  async deleteNotification(id: number) {
    return prisma.notification.delete({ where: { id } });
  }

  async getUnreadNotificationsCount(userId: string, userRole: string) {
    return prisma.notification.count({
      where: { userId, userRole, read: false },
    });
  }

  // Messages
  async getMessages(userId: string, userRole: string) {
    return prisma.message.findMany({
      where: {
        OR: [
          { senderId: userId, senderRole: userRole },
          { recipients: { some: { recipientId: userId, recipientRole: userRole } } },
        ],
      },
      include: { recipients: true },
      orderBy: { createdAt: 'desc' },
    });
  }

  async sendMessage(data: {
    subject: string;
    content: string;
    senderId: string;
    senderName: string;
    senderRole: string;
    schoolId: string;
    recipients: Array<{ recipientId: string; recipientName: string; recipientRole: string }>;
  }) {
    return prisma.message.create({
      data: {
        subject: data.subject,
        content: data.content,
        senderId: data.senderId,
        senderName: data.senderName,
        senderRole: data.senderRole,
        school: { connect: { id: data.schoolId } },
        recipients: {
          create: data.recipients.map((r) => ({
            recipientId: r.recipientId,
            recipientName: r.recipientName,
            recipientRole: r.recipientRole,
          })),
        },
      },
      include: { recipients: true },
    });
  }

  async getMessageById(id: number) {
    return prisma.message.findUnique({
      where: { id },
      include: { recipients: true },
    });
  }

  async markMessageAsRead(messageId: number, recipientId: string) {
    return prisma.messageRecipient.updateMany({
      where: { messageId, recipientId },
      data: { read: true },
    });
  }

  async deleteMessage(id: number) {
    await prisma.messageRecipient.deleteMany({ where: { messageId: id } });
    return prisma.message.delete({ where: { id } });
  }

  // Announcements
  async getAnnouncements(schoolId: string) {
    return prisma.announcement.findMany({
      where: { schoolId },
      include: { class: true },
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

  async updateAnnouncement(id: number, data: {
    title?: string;
    description?: string;
    date?: Date;
    classId?: number;
  }) {
    return prisma.announcement.update({ where: { id }, data });
  }

  async deleteAnnouncement(id: number) {
    return prisma.announcement.delete({ where: { id } });
  }

  // Global Announcements (for super admin) - id is String UUID
  async getGlobalAnnouncements() {
    return prisma.globalAnnouncement.findMany({
      where: { active: true },
      orderBy: { createdAt: 'desc' },
    });
  }

  async createGlobalAnnouncement(data: {
    title: string;
    message: string;
    type?: string;
  }) {
    return prisma.globalAnnouncement.create({
      data: {
        title: data.title,
        message: data.message,
        type: data.type || 'INFO',
      },
    });
  }

  async deleteGlobalAnnouncement(id: string) {
    return prisma.globalAnnouncement.delete({ where: { id } });
  }
}

export const communicationService = new CommunicationService();
