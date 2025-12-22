import { Request, Response } from 'express';
import { supportService } from '../services/support.service';
import { TicketStatus, TicketPriority } from '@prisma/client';

export class SupportController {
  // Tickets
  async getTickets(req: Request, res: Response) {
    try {
      const { status, priority, schoolId } = req.query;
      const tickets = await supportService.getTickets({
        status: status as TicketStatus,
        priority: priority as TicketPriority,
        schoolId: schoolId as string,
      });
      res.json(tickets);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch tickets' });
    }
  }

  async getTicketById(req: Request, res: Response) {
    try {
      const ticket = await supportService.getTicketById(req.params['id']);
      if (!ticket) {
        res.status(404).json({ error: 'Ticket not found' });
        return;
      }
      res.json(ticket);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch ticket' });
    }
  }

  async getTicketsBySchool(req: Request, res: Response) {
    try {
      const tickets = await supportService.getTicketsBySchool(req.params['schoolId']);
      res.json(tickets);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch tickets' });
    }
  }

  async createTicket(req: Request, res: Response) {
    try {
      const ticket = await supportService.createTicket(req.body);
      res.status(201).json(ticket);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create ticket' });
    }
  }

  async updateTicket(req: Request, res: Response) {
    try {
      const ticket = await supportService.updateTicket(req.params['id'], req.body);
      res.json(ticket);
    } catch (error) {
      res.status(500).json({ error: 'Failed to update ticket' });
    }
  }

  async closeTicket(req: Request, res: Response) {
    try {
      const ticket = await supportService.closeTicket(req.params['id']);
      res.json(ticket);
    } catch (error) {
      res.status(500).json({ error: 'Failed to close ticket' });
    }
  }

  async deleteTicket(req: Request, res: Response) {
    try {
      await supportService.deleteTicket(req.params['id']);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete ticket' });
    }
  }

  // Replies
  async getReplies(req: Request, res: Response) {
    try {
      const replies = await supportService.getReplies(req.params['ticketId']);
      res.json(replies);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch replies' });
    }
  }

  async createReply(req: Request, res: Response) {
    try {
      const reply = await supportService.createReply({
        ticketId: req.params['ticketId'],
        message: req.body.message,
        isAdmin: req.body.isAdmin || false,
      });
      res.status(201).json(reply);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create reply' });
    }
  }

  // Stats
  async getStats(req: Request, res: Response) {
    try {
      const stats = await supportService.getStats();
      res.json(stats);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch stats' });
    }
  }
}

export const supportController = new SupportController();
