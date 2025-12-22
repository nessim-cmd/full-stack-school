import { Router } from 'express';
import { communicationController } from '../controllers/communication.controller';

const router = Router();

// Notifications
router.get('/notifications', (req, res) => communicationController.getNotifications(req, res));
router.post('/notifications', (req, res) => communicationController.createNotification(req, res));
router.patch('/notifications/:id/read', (req, res) => communicationController.markNotificationAsRead(req, res));
router.delete('/notifications/:id', (req, res) => communicationController.deleteNotification(req, res));
router.get('/notifications/unread/count', (req, res) => communicationController.getUnreadCount(req, res));

// Messages
router.get('/messages', (req, res) => communicationController.getMessages(req, res));
router.get('/messages/:id', (req, res) => communicationController.getMessageById(req, res));
router.post('/messages', (req, res) => communicationController.sendMessage(req, res));
router.patch('/messages/:id/read', (req, res) => communicationController.markMessageAsRead(req, res));
router.delete('/messages/:id', (req, res) => communicationController.deleteMessage(req, res));

// Announcements
router.get('/announcements', (req, res) => communicationController.getAnnouncements(req, res));
router.post('/announcements', (req, res) => communicationController.createAnnouncement(req, res));
router.put('/announcements/:id', (req, res) => communicationController.updateAnnouncement(req, res));
router.delete('/announcements/:id', (req, res) => communicationController.deleteAnnouncement(req, res));

// Global Announcements
router.get('/global-announcements', (req, res) => communicationController.getGlobalAnnouncements(req, res));
router.post('/global-announcements', (req, res) => communicationController.createGlobalAnnouncement(req, res));
router.delete('/global-announcements/:id', (req, res) => communicationController.deleteGlobalAnnouncement(req, res));

export default router;
