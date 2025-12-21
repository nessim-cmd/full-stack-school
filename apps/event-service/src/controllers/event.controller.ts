import { Request, Response } from 'express';
import { eventService } from '../services/event.service';
import { HTTP_STATUS } from '@workspace/shared/constants';

export class EventController {
  // ============= Events =============
  async getEvents(req: Request, res: Response): Promise<void> {
    try {
      const { schoolId } = req.params;
      const { page, limit, startDate, endDate, type, classId } = req.query;
      
      const result = await eventService.getEvents(
        schoolId,
        Number(page) || 1,
        Number(limit) || 20,
        {
          startDate: startDate ? new Date(startDate as string) : undefined,
          endDate: endDate ? new Date(endDate as string) : undefined,
          type: type as string,
          classId: classId ? Number(classId) : undefined,
        }
      );
      
      res.status(HTTP_STATUS.OK).json({ success: true, ...result });
    } catch (error) {
      console.error('Get events error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to fetch events' });
    }
  }

  async getEventById(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const event = await eventService.getEventById(id);
      
      if (!event) {
        res.status(HTTP_STATUS.NOT_FOUND).json({ success: false, error: 'Event not found' });
        return;
      }
      
      res.status(HTTP_STATUS.OK).json({ success: true, data: event });
    } catch (error) {
      console.error('Get event error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to fetch event' });
    }
  }

  async createEvent(req: Request, res: Response): Promise<void> {
    try {
      const event = await eventService.createEvent(req.body);
      res.status(HTTP_STATUS.CREATED).json({ success: true, data: event });
    } catch (error) {
      console.error('Create event error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to create event' });
    }
  }

  async updateEvent(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const event = await eventService.updateEvent(id, req.body);
      res.status(HTTP_STATUS.OK).json({ success: true, data: event });
    } catch (error) {
      console.error('Update event error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to update event' });
    }
  }

  async deleteEvent(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      await eventService.deleteEvent(id);
      res.status(HTTP_STATUS.OK).json({ success: true, message: 'Event deleted successfully' });
    } catch (error) {
      console.error('Delete event error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to delete event' });
    }
  }

  // ============= Attendees =============
  async addAttendee(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const { userId, userType } = req.body;
      const attendee = await eventService.addAttendee(id, userId, userType);
      res.status(HTTP_STATUS.CREATED).json({ success: true, data: attendee });
    } catch (error) {
      console.error('Add attendee error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to add attendee' });
    }
  }

  async updateAttendeeStatus(req: Request, res: Response): Promise<void> {
    try {
      const { id, userId } = req.params;
      const { status } = req.body;
      const attendee = await eventService.updateAttendeeStatus(id, userId, status);
      res.status(HTTP_STATUS.OK).json({ success: true, data: attendee });
    } catch (error) {
      console.error('Update attendee status error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to update attendee status' });
    }
  }

  async removeAttendee(req: Request, res: Response): Promise<void> {
    try {
      const { id, userId } = req.params;
      await eventService.removeAttendee(id, userId);
      res.status(HTTP_STATUS.OK).json({ success: true, message: 'Attendee removed successfully' });
    } catch (error) {
      console.error('Remove attendee error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to remove attendee' });
    }
  }

  // ============= Holidays =============
  async getHolidays(req: Request, res: Response): Promise<void> {
    try {
      const { schoolId } = req.params;
      const { year } = req.query;
      const holidays = await eventService.getHolidays(schoolId, year ? Number(year) : undefined);
      res.status(HTTP_STATUS.OK).json({ success: true, data: holidays });
    } catch (error) {
      console.error('Get holidays error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to fetch holidays' });
    }
  }

  async createHoliday(req: Request, res: Response): Promise<void> {
    try {
      const holiday = await eventService.createHoliday(req.body);
      res.status(HTTP_STATUS.CREATED).json({ success: true, data: holiday });
    } catch (error) {
      console.error('Create holiday error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to create holiday' });
    }
  }

  async updateHoliday(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const holiday = await eventService.updateHoliday(id, req.body);
      res.status(HTTP_STATUS.OK).json({ success: true, data: holiday });
    } catch (error) {
      console.error('Update holiday error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to update holiday' });
    }
  }

  async deleteHoliday(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      await eventService.deleteHoliday(id);
      res.status(HTTP_STATUS.OK).json({ success: true, message: 'Holiday deleted successfully' });
    } catch (error) {
      console.error('Delete holiday error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to delete holiday' });
    }
  }

  // ============= Academic Calendar =============
  async getAcademicCalendar(req: Request, res: Response): Promise<void> {
    try {
      const { schoolId } = req.params;
      const calendar = await eventService.getAcademicCalendar(schoolId);
      res.status(HTTP_STATUS.OK).json({ success: true, data: calendar });
    } catch (error) {
      console.error('Get academic calendar error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to fetch academic calendar' });
    }
  }

  async createAcademicCalendar(req: Request, res: Response): Promise<void> {
    try {
      const calendar = await eventService.createAcademicCalendar(req.body);
      res.status(HTTP_STATUS.CREATED).json({ success: true, data: calendar });
    } catch (error) {
      console.error('Create academic calendar error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to create academic calendar' });
    }
  }

  async updateAcademicCalendar(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const calendar = await eventService.updateAcademicCalendar(id, req.body);
      res.status(HTTP_STATUS.OK).json({ success: true, data: calendar });
    } catch (error) {
      console.error('Update academic calendar error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to update academic calendar' });
    }
  }

  async addTerm(req: Request, res: Response): Promise<void> {
    try {
      const { calendarId } = req.params;
      const term = await eventService.addTerm(calendarId, req.body);
      res.status(HTTP_STATUS.CREATED).json({ success: true, data: term });
    } catch (error) {
      console.error('Add term error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to add term' });
    }
  }

  async updateTerm(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const term = await eventService.updateTerm(id, req.body);
      res.status(HTTP_STATUS.OK).json({ success: true, data: term });
    } catch (error) {
      console.error('Update term error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to update term' });
    }
  }

  async deleteTerm(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      await eventService.deleteTerm(id);
      res.status(HTTP_STATUS.OK).json({ success: true, message: 'Term deleted successfully' });
    } catch (error) {
      console.error('Delete term error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to delete term' });
    }
  }

  // ============= Upcoming Events =============
  async getUpcomingEvents(req: Request, res: Response): Promise<void> {
    try {
      const { schoolId } = req.params;
      const { days } = req.query;
      const events = await eventService.getUpcomingEvents(schoolId, days ? Number(days) : 7);
      res.status(HTTP_STATUS.OK).json({ success: true, data: events });
    } catch (error) {
      console.error('Get upcoming events error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to fetch upcoming events' });
    }
  }
}

export const eventController = new EventController();
