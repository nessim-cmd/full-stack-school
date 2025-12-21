import { Request, Response } from 'express';
import { communicationService } from '../services/communication.service';
import { HTTP_STATUS } from '@workspace/shared/constants';

export class CommunicationController {
  // ============= Notifications =============
  async getNotifications(req: Request, res: Response): Promise<void> {
    try {
      const { userId, userRole } = req.params;
      const { unreadOnly } = req.query;
      const notifications = await communicationService.getNotifications(
        userId,
        userRole,
        unreadOnly === 'true'
      );
      res.status(HTTP_STATUS.OK).json({ success: true, data: notifications });
    } catch (error) {
      console.error('Get notifications error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to fetch notifications' });
    }
  }

  async createNotification(req: Request, res: Response): Promise<void> {
    try {
      const notification = await communicationService.createNotification(req.body);
      res.status(HTTP_STATUS.CREATED).json({ success: true, data: notification });
    } catch (error) {
      console.error('Create notification error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to create notification' });
    }
  }

  async createBulkNotifications(req: Request, res: Response): Promise<void> {
    try {
      const { notifications } = req.body;
      const result = await communicationService.createBulkNotifications(notifications);
      res.status(HTTP_STATUS.CREATED).json({ success: true, data: result });
    } catch (error) {
      console.error('Create bulk notifications error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to create notifications' });
    }
  }

  async markAsRead(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const notification = await communicationService.markAsRead(Number(id));
      res.status(HTTP_STATUS.OK).json({ success: true, data: notification });
    } catch (error) {
      console.error('Mark as read error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to mark notification as read' });
    }
  }

  async markAllAsRead(req: Request, res: Response): Promise<void> {
    try {
      const { userId, userRole } = req.params;
      await communicationService.markAllAsRead(userId, userRole);
      res.status(HTTP_STATUS.OK).json({ success: true, message: 'All notifications marked as read' });
    } catch (error) {
      console.error('Mark all as read error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to mark all as read' });
    }
  }

  async getUnreadCount(req: Request, res: Response): Promise<void> {
    try {
      const { userId, userRole } = req.params;
      const count = await communicationService.getUnreadCount(userId, userRole);
      res.status(HTTP_STATUS.OK).json({ success: true, data: { count } });
    } catch (error) {
      console.error('Get unread count error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to get unread count' });
    }
  }

  async deleteNotification(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      await communicationService.deleteNotification(Number(id));
      res.status(HTTP_STATUS.OK).json({ success: true, message: 'Notification deleted' });
    } catch (error) {
      console.error('Delete notification error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to delete notification' });
    }
  }

  // ============= Messages =============
  async getMessages(req: Request, res: Response): Promise<void> {
    try {
      const { userId, userRole } = req.params;
      const { page, limit } = req.query;
      const result = await communicationService.getMessages(
        userId,
        userRole,
        Number(page) || 1,
        Number(limit) || 20
      );
      res.status(HTTP_STATUS.OK).json({ success: true, ...result });
    } catch (error) {
      console.error('Get messages error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to fetch messages' });
    }
  }

  async getConversation(req: Request, res: Response): Promise<void> {
    try {
      const { userId1, role1, userId2, role2 } = req.query;
      const messages = await communicationService.getConversation(
        userId1 as string,
        role1 as string,
        userId2 as string,
        role2 as string
      );
      res.status(HTTP_STATUS.OK).json({ success: true, data: messages });
    } catch (error) {
      console.error('Get conversation error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to fetch conversation' });
    }
  }

  async sendMessage(req: Request, res: Response): Promise<void> {
    try {
      const message = await communicationService.sendMessage(req.body);
      res.status(HTTP_STATUS.CREATED).json({ success: true, data: message });
    } catch (error) {
      console.error('Send message error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to send message' });
    }
  }

  async markMessageAsRead(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const message = await communicationService.markMessageAsRead(Number(id));
      res.status(HTTP_STATUS.OK).json({ success: true, data: message });
    } catch (error) {
      console.error('Mark message as read error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to mark message as read' });
    }
  }

  async deleteMessage(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      await communicationService.deleteMessage(Number(id));
      res.status(HTTP_STATUS.OK).json({ success: true, message: 'Message deleted' });
    } catch (error) {
      console.error('Delete message error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to delete message' });
    }
  }

  // ============= Announcements =============
  async getAnnouncements(req: Request, res: Response): Promise<void> {
    try {
      const { schoolId } = req.params;
      const { userRole, classId } = req.query;
      const announcements = await communicationService.getAnnouncements(
        schoolId,
        userRole as string,
        classId ? Number(classId) : undefined
      );
      res.status(HTTP_STATUS.OK).json({ success: true, data: announcements });
    } catch (error) {
      console.error('Get announcements error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to fetch announcements' });
    }
  }

  async createAnnouncement(req: Request, res: Response): Promise<void> {
    try {
      const announcement = await communicationService.createAnnouncement(req.body);
      res.status(HTTP_STATUS.CREATED).json({ success: true, data: announcement });
    } catch (error) {
      console.error('Create announcement error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to create announcement' });
    }
  }

  async updateAnnouncement(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const announcement = await communicationService.updateAnnouncement(Number(id), req.body);
      res.status(HTTP_STATUS.OK).json({ success: true, data: announcement });
    } catch (error) {
      console.error('Update announcement error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to update announcement' });
    }
  }

  async deleteAnnouncement(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      await communicationService.deleteAnnouncement(Number(id));
      res.status(HTTP_STATUS.OK).json({ success: true, message: 'Announcement deleted' });
    } catch (error) {
      console.error('Delete announcement error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to delete announcement' });
    }
  }

  // ============= Email Templates =============
  async getEmailTemplates(req: Request, res: Response): Promise<void> {
    try {
      const { schoolId } = req.params;
      const templates = await communicationService.getEmailTemplates(schoolId);
      res.status(HTTP_STATUS.OK).json({ success: true, data: templates });
    } catch (error) {
      console.error('Get email templates error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to fetch email templates' });
    }
  }

  async createEmailTemplate(req: Request, res: Response): Promise<void> {
    try {
      const template = await communicationService.createEmailTemplate(req.body);
      res.status(HTTP_STATUS.CREATED).json({ success: true, data: template });
    } catch (error) {
      console.error('Create email template error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to create email template' });
    }
  }

  async updateEmailTemplate(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const template = await communicationService.updateEmailTemplate(Number(id), req.body);
      res.status(HTTP_STATUS.OK).json({ success: true, data: template });
    } catch (error) {
      console.error('Update email template error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to update email template' });
    }
  }

  async deleteEmailTemplate(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      await communicationService.deleteEmailTemplate(Number(id));
      res.status(HTTP_STATUS.OK).json({ success: true, message: 'Email template deleted' });
    } catch (error) {
      console.error('Delete email template error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to delete email template' });
    }
  }
}

export const communicationController = new CommunicationController();
