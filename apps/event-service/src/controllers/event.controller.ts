import { Request, Response } from 'express';
import { eventService } from '../services/event.service';

export class EventController {
  async getEvents(req: Request, res: Response) {
    try {
      const { schoolId, classId, startDate, endDate } = req.query;
      const events = await eventService.getEvents(schoolId as string, {
        classId: classId ? parseInt(classId as string) : undefined,
        startDate: startDate ? new Date(startDate as string) : undefined,
        endDate: endDate ? new Date(endDate as string) : undefined,
      });
      res.json(events);
    } catch (error) {
      console.error('Error getting events:', error);
      res.status(500).json({ error: 'Failed to get events' });
    }
  }

  async getEventById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const event = await eventService.getEventById(parseInt(id));
      if (!event) {
        res.status(404).json({ error: 'Event not found' });
        return;
      }
      res.json(event);
    } catch (error) {
      console.error('Error getting event:', error);
      res.status(500).json({ error: 'Failed to get event' });
    }
  }

  async createEvent(req: Request, res: Response) {
    try {
      const { title, description, startTime, endTime, classId, schoolId } = req.body;
      const event = await eventService.createEvent({
        title,
        description,
        startTime: new Date(startTime),
        endTime: new Date(endTime),
        classId: classId ? parseInt(classId) : undefined,
        schoolId,
      });
      res.status(201).json(event);
    } catch (error) {
      console.error('Error creating event:', error);
      res.status(500).json({ error: 'Failed to create event' });
    }
  }

  async updateEvent(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { title, description, startTime, endTime, classId } = req.body;
      const event = await eventService.updateEvent(parseInt(id), {
        title,
        description,
        startTime: startTime ? new Date(startTime) : undefined,
        endTime: endTime ? new Date(endTime) : undefined,
        classId: classId ? parseInt(classId) : undefined,
      });
      res.json(event);
    } catch (error) {
      console.error('Error updating event:', error);
      res.status(500).json({ error: 'Failed to update event' });
    }
  }

  async deleteEvent(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await eventService.deleteEvent(parseInt(id));
      res.status(204).send();
    } catch (error) {
      console.error('Error deleting event:', error);
      res.status(500).json({ error: 'Failed to delete event' });
    }
  }

  async getUpcomingEvents(req: Request, res: Response) {
    try {
      const { schoolId, limit } = req.query;
      const events = await eventService.getUpcomingEvents(
        schoolId as string,
        limit ? parseInt(limit as string) : undefined
      );
      res.json(events);
    } catch (error) {
      console.error('Error getting upcoming events:', error);
      res.status(500).json({ error: 'Failed to get upcoming events' });
    }
  }

  async getEventsByClass(req: Request, res: Response) {
    try {
      const { classId } = req.params;
      const events = await eventService.getEventsByClass(parseInt(classId));
      res.json(events);
    } catch (error) {
      console.error('Error getting events by class:', error);
      res.status(500).json({ error: 'Failed to get events' });
    }
  }

  async getEventsForMonth(req: Request, res: Response) {
    try {
      const { schoolId, year, month } = req.query;
      const events = await eventService.getEventsForMonth(
        schoolId as string,
        parseInt(year as string),
        parseInt(month as string)
      );
      res.json(events);
    } catch (error) {
      console.error('Error getting events for month:', error);
      res.status(500).json({ error: 'Failed to get events' });
    }
  }
}

export const eventController = new EventController();
