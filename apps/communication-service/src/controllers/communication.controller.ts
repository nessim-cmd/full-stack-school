import { Request, Response } from 'express';
import { communicationService } from '../services/communication.service';

export class CommunicationController {
  // Notifications
  async getNotifications(req: Request, res: Response) {
    try {
      const { userId, userRole } = req.query;
      const notifications = await communicationService.getNotifications(
        userId as string,
        userRole as string
      );
      res.json(notifications);
    } catch (error) {
      console.error('Error getting notifications:', error);
      res.status(500).json({ error: 'Failed to get notifications' });
    }
  }

  async createNotification(req: Request, res: Response) {
    try {
      const { title, message, type, userId, userRole, schoolId } = req.body;
      const notification = await communicationService.createNotification({
        title,
        message,
        type: type || 'general',
        userId,
        userRole,
        schoolId,
      });
      res.status(201).json(notification);
    } catch (error) {
      console.error('Error creating notification:', error);
      res.status(500).json({ error: 'Failed to create notification' });
    }
  }

  async markNotificationAsRead(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const notification = await communicationService.markNotificationAsRead(parseInt(id));
      res.json(notification);
    } catch (error) {
      console.error('Error marking notification as read:', error);
      res.status(500).json({ error: 'Failed to mark notification as read' });
    }
  }

  async deleteNotification(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await communicationService.deleteNotification(parseInt(id));
      res.status(204).send();
    } catch (error) {
      console.error('Error deleting notification:', error);
      res.status(500).json({ error: 'Failed to delete notification' });
    }
  }

  async getUnreadCount(req: Request, res: Response) {
    try {
      const { userId, userRole } = req.query;
      const count = await communicationService.getUnreadNotificationsCount(
        userId as string,
        userRole as string
      );
      res.json({ count });
    } catch (error) {
      console.error('Error getting unread count:', error);
      res.status(500).json({ error: 'Failed to get unread count' });
    }
  }

  // Messages
  async getMessages(req: Request, res: Response) {
    try {
      const { userId, userRole } = req.query;
      const messages = await communicationService.getMessages(
        userId as string,
        userRole as string
      );
      res.json(messages);
    } catch (error) {
      console.error('Error getting messages:', error);
      res.status(500).json({ error: 'Failed to get messages' });
    }
  }

  async sendMessage(req: Request, res: Response) {
    try {
      const { subject, content, senderId, senderName, senderRole, schoolId, recipients } = req.body;
      const message = await communicationService.sendMessage({
        subject,
        content,
        senderId,
        senderName,
        senderRole,
        schoolId,
        recipients,
      });
      res.status(201).json(message);
    } catch (error) {
      console.error('Error sending message:', error);
      res.status(500).json({ error: 'Failed to send message' });
    }
  }

  async getMessageById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const message = await communicationService.getMessageById(parseInt(id));
      if (!message) {
        return res.status(404).json({ error: 'Message not found' });
      }
      res.json(message);
    } catch (error) {
      console.error('Error getting message:', error);
      res.status(500).json({ error: 'Failed to get message' });
    }
  }

  async markMessageAsRead(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { recipientId } = req.body;
      await communicationService.markMessageAsRead(parseInt(id), recipientId);
      res.json({ success: true });
    } catch (error) {
      console.error('Error marking message as read:', error);
      res.status(500).json({ error: 'Failed to mark message as read' });
    }
  }

  async deleteMessage(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await communicationService.deleteMessage(parseInt(id));
      res.status(204).send();
    } catch (error) {
      console.error('Error deleting message:', error);
      res.status(500).json({ error: 'Failed to delete message' });
    }
  }

  // Announcements
  async getAnnouncements(req: Request, res: Response) {
    try {
      const { schoolId } = req.query;
      const announcements = await communicationService.getAnnouncements(schoolId as string);
      res.json(announcements);
    } catch (error) {
      console.error('Error getting announcements:', error);
      res.status(500).json({ error: 'Failed to get announcements' });
    }
  }

  async createAnnouncement(req: Request, res: Response) {
    try {
      const { title, description, date, classId, schoolId } = req.body;
      const announcement = await communicationService.createAnnouncement({
        title,
        description,
        date: new Date(date),
        classId: classId ? parseInt(classId) : undefined,
        schoolId,
      });
      res.status(201).json(announcement);
    } catch (error) {
      console.error('Error creating announcement:', error);
      res.status(500).json({ error: 'Failed to create announcement' });
    }
  }

  async updateAnnouncement(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { title, description, date, classId } = req.body;
      const announcement = await communicationService.updateAnnouncement(parseInt(id), {
        title,
        description,
        date: date ? new Date(date) : undefined,
        classId: classId ? parseInt(classId) : undefined,
      });
      res.json(announcement);
    } catch (error) {
      console.error('Error updating announcement:', error);
      res.status(500).json({ error: 'Failed to update announcement' });
    }
  }

  async deleteAnnouncement(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await communicationService.deleteAnnouncement(parseInt(id));
      res.status(204).send();
    } catch (error) {
      console.error('Error deleting announcement:', error);
      res.status(500).json({ error: 'Failed to delete announcement' });
    }
  }

  // Global Announcements
  async getGlobalAnnouncements(req: Request, res: Response) {
    try {
      const announcements = await communicationService.getGlobalAnnouncements();
      res.json(announcements);
    } catch (error) {
      console.error('Error getting global announcements:', error);
      res.status(500).json({ error: 'Failed to get global announcements' });
    }
  }

  async createGlobalAnnouncement(req: Request, res: Response) {
    try {
      const { title, message, type } = req.body;
      const announcement = await communicationService.createGlobalAnnouncement({
        title,
        message,
        type,
      });
      res.status(201).json(announcement);
    } catch (error) {
      console.error('Error creating global announcement:', error);
      res.status(500).json({ error: 'Failed to create global announcement' });
    }
  }

  async deleteGlobalAnnouncement(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await communicationService.deleteGlobalAnnouncement(id);
      res.status(204).send();
    } catch (error) {
      console.error('Error deleting global announcement:', error);
      res.status(500).json({ error: 'Failed to delete global announcement' });
    }
  }
}

export const communicationController = new CommunicationController();
