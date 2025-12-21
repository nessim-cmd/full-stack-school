import { Router } from 'express';
import { eventController } from '../controllers/event.controller';

const router = Router();

// Events
router.get('/schools/:schoolId/events', (req, res) => eventController.getEvents(req, res));
router.get('/schools/:schoolId/events/upcoming', (req, res) => eventController.getUpcomingEvents(req, res));
router.get('/events/:id', (req, res) => eventController.getEventById(req, res));
router.post('/events', (req, res) => eventController.createEvent(req, res));
router.put('/events/:id', (req, res) => eventController.updateEvent(req, res));
router.delete('/events/:id', (req, res) => eventController.deleteEvent(req, res));

// Event Attendees
router.post('/events/:id/attendees', (req, res) => eventController.addAttendee(req, res));
router.put('/events/:id/attendees/:userId', (req, res) => eventController.updateAttendeeStatus(req, res));
router.delete('/events/:id/attendees/:userId', (req, res) => eventController.removeAttendee(req, res));

// Holidays
router.get('/schools/:schoolId/holidays', (req, res) => eventController.getHolidays(req, res));
router.post('/holidays', (req, res) => eventController.createHoliday(req, res));
router.put('/holidays/:id', (req, res) => eventController.updateHoliday(req, res));
router.delete('/holidays/:id', (req, res) => eventController.deleteHoliday(req, res));

// Academic Calendar
router.get('/schools/:schoolId/calendar', (req, res) => eventController.getAcademicCalendar(req, res));
router.post('/calendar', (req, res) => eventController.createAcademicCalendar(req, res));
router.put('/calendar/:id', (req, res) => eventController.updateAcademicCalendar(req, res));

// Terms
router.post('/calendar/:calendarId/terms', (req, res) => eventController.addTerm(req, res));
router.put('/terms/:id', (req, res) => eventController.updateTerm(req, res));
router.delete('/terms/:id', (req, res) => eventController.deleteTerm(req, res));

export default router;
