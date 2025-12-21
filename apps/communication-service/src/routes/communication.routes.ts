import { Router } from 'express';
import { communicationController } from '../controllers/communication.controller';

const router = Router();

// Notifications
router.get('/users/:userId/:userRole/notifications', communicationController.getNotifications.bind(communicationController));
router.get('/users/:userId/:userRole/notifications/unread-count', communicationController.getUnreadCount.bind(communicationController));
router.post('/notifications', communicationController.createNotification.bind(communicationController));
router.post('/notifications/bulk', communicationController.createBulkNotifications.bind(communicationController));
router.patch('/notifications/:id/read', communicationController.markAsRead.bind(communicationController));
router.patch('/users/:userId/:userRole/notifications/read-all', communicationController.markAllAsRead.bind(communicationController));
router.delete('/notifications/:id', communicationController.deleteNotification.bind(communicationController));

// Messages
router.get('/users/:userId/:userRole/messages', communicationController.getMessages.bind(communicationController));
router.get('/conversations', communicationController.getConversation.bind(communicationController));
router.post('/messages', communicationController.sendMessage.bind(communicationController));
router.patch('/messages/:id/read', communicationController.markMessageAsRead.bind(communicationController));
router.delete('/messages/:id', communicationController.deleteMessage.bind(communicationController));

// Announcements
router.get('/schools/:schoolId/announcements', communicationController.getAnnouncements.bind(communicationController));
router.post('/announcements', communicationController.createAnnouncement.bind(communicationController));
router.put('/announcements/:id', communicationController.updateAnnouncement.bind(communicationController));
router.delete('/announcements/:id', communicationController.deleteAnnouncement.bind(communicationController));

// Email Templates
router.get('/schools/:schoolId/email-templates', communicationController.getEmailTemplates.bind(communicationController));
router.post('/email-templates', communicationController.createEmailTemplate.bind(communicationController));
router.put('/email-templates/:id', communicationController.updateEmailTemplate.bind(communicationController));
router.delete('/email-templates/:id', communicationController.deleteEmailTemplate.bind(communicationController));

export default router;
