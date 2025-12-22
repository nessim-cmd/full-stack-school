import { Router } from 'express';
import { eventController } from '../controllers/event.controller';

const router = Router();

// Events
router.get('/events', (req, res) => eventController.getEvents(req, res));
router.get('/events/:id', (req, res) => eventController.getEventById(req, res));
router.post('/events', (req, res) => eventController.createEvent(req, res));
router.put('/events/:id', (req, res) => eventController.updateEvent(req, res));
router.delete('/events/:id', (req, res) => eventController.deleteEvent(req, res));
router.get('/events/upcoming', (req, res) => eventController.getUpcomingEvents(req, res));
router.get('/events/class/:classId', (req, res) => eventController.getEventsByClass(req, res));
router.get('/events/month', (req, res) => eventController.getEventsForMonth(req, res));

export default router;
