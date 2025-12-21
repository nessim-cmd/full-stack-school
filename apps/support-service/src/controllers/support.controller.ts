import { Request, Response } from 'express';
import { supportService } from '../services/support.service';
import { HTTP_STATUS } from '@workspace/shared/constants';

export class SupportController {
  // ============= Tickets =============
  async getTickets(req: Request, res: Response): Promise<void> {
    try {
      const { page, limit, schoolId, userId, status, priority, category, assignedTo, search } = req.query;
      
      const result = await supportService.getTickets(
        Number(page) || 1,
        Number(limit) || 20,
        {
          schoolId: schoolId as string,
          userId: userId as string,
          status: status as string,
          priority: priority as string,
          category: category as string,
          assignedTo: assignedTo as string,
          search: search as string,
        }
      );
      
      res.status(HTTP_STATUS.OK).json({ success: true, ...result });
    } catch (error) {
      console.error('Get tickets error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to fetch tickets' });
    }
  }

  async getTicketById(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const ticket = await supportService.getTicketById(id);
      
      if (!ticket) {
        res.status(HTTP_STATUS.NOT_FOUND).json({ success: false, error: 'Ticket not found' });
        return;
      }
      
      res.status(HTTP_STATUS.OK).json({ success: true, data: ticket });
    } catch (error) {
      console.error('Get ticket error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to fetch ticket' });
    }
  }

  async getTicketByNo(req: Request, res: Response): Promise<void> {
    try {
      const { ticketNo } = req.params;
      const ticket = await supportService.getTicketByNo(ticketNo);
      
      if (!ticket) {
        res.status(HTTP_STATUS.NOT_FOUND).json({ success: false, error: 'Ticket not found' });
        return;
      }
      
      res.status(HTTP_STATUS.OK).json({ success: true, data: ticket });
    } catch (error) {
      console.error('Get ticket error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to fetch ticket' });
    }
  }

  async createTicket(req: Request, res: Response): Promise<void> {
    try {
      const ticket = await supportService.createTicket(req.body);
      res.status(HTTP_STATUS.CREATED).json({ success: true, data: ticket });
    } catch (error) {
      console.error('Create ticket error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to create ticket' });
    }
  }

  async updateTicket(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const ticket = await supportService.updateTicket(id, req.body);
      res.status(HTTP_STATUS.OK).json({ success: true, data: ticket });
    } catch (error) {
      console.error('Update ticket error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to update ticket' });
    }
  }

  async assignTicket(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const { assignedTo } = req.body;
      const ticket = await supportService.assignTicket(id, assignedTo);
      res.status(HTTP_STATUS.OK).json({ success: true, data: ticket });
    } catch (error) {
      console.error('Assign ticket error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to assign ticket' });
    }
  }

  async resolveTicket(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const { resolution } = req.body;
      const ticket = await supportService.resolveTicket(id, resolution);
      res.status(HTTP_STATUS.OK).json({ success: true, data: ticket });
    } catch (error) {
      console.error('Resolve ticket error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to resolve ticket' });
    }
  }

  async closeTicket(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const ticket = await supportService.closeTicket(id);
      res.status(HTTP_STATUS.OK).json({ success: true, data: ticket });
    } catch (error) {
      console.error('Close ticket error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to close ticket' });
    }
  }

  async rateTicket(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const { rating, feedback } = req.body;
      const ticket = await supportService.rateTicket(id, rating, feedback);
      res.status(HTTP_STATUS.OK).json({ success: true, data: ticket });
    } catch (error) {
      console.error('Rate ticket error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to rate ticket' });
    }
  }

  // ============= Messages =============
  async addMessage(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const message = await supportService.addMessage(id, req.body);
      res.status(HTTP_STATUS.CREATED).json({ success: true, data: message });
    } catch (error) {
      console.error('Add message error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to add message' });
    }
  }

  // ============= Attachments =============
  async addAttachment(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const attachment = await supportService.addAttachment(id, req.body);
      res.status(HTTP_STATUS.CREATED).json({ success: true, data: attachment });
    } catch (error) {
      console.error('Add attachment error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to add attachment' });
    }
  }

  async deleteAttachment(req: Request, res: Response): Promise<void> {
    try {
      const { attachmentId } = req.params;
      await supportService.deleteAttachment(attachmentId);
      res.status(HTTP_STATUS.OK).json({ success: true, message: 'Attachment deleted successfully' });
    } catch (error) {
      console.error('Delete attachment error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to delete attachment' });
    }
  }

  // ============= Knowledge Base =============
  async getKnowledgeBaseArticles(req: Request, res: Response): Promise<void> {
    try {
      const { page, limit, category, search, isPublished } = req.query;
      
      const result = await supportService.getKnowledgeBaseArticles(
        Number(page) || 1,
        Number(limit) || 20,
        {
          category: category as string,
          search: search as string,
          isPublished: isPublished === 'true' ? true : isPublished === 'false' ? false : undefined,
        }
      );
      
      res.status(HTTP_STATUS.OK).json({ success: true, ...result });
    } catch (error) {
      console.error('Get knowledge base articles error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to fetch articles' });
    }
  }

  async getKnowledgeBaseArticleBySlug(req: Request, res: Response): Promise<void> {
    try {
      const { slug } = req.params;
      const article = await supportService.getKnowledgeBaseArticleBySlug(slug);
      
      if (!article) {
        res.status(HTTP_STATUS.NOT_FOUND).json({ success: false, error: 'Article not found' });
        return;
      }
      
      res.status(HTTP_STATUS.OK).json({ success: true, data: article });
    } catch (error) {
      console.error('Get article error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to fetch article' });
    }
  }

  async createKnowledgeBaseArticle(req: Request, res: Response): Promise<void> {
    try {
      const article = await supportService.createKnowledgeBaseArticle(req.body);
      res.status(HTTP_STATUS.CREATED).json({ success: true, data: article });
    } catch (error) {
      console.error('Create article error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to create article' });
    }
  }

  async updateKnowledgeBaseArticle(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const article = await supportService.updateKnowledgeBaseArticle(id, req.body);
      res.status(HTTP_STATUS.OK).json({ success: true, data: article });
    } catch (error) {
      console.error('Update article error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to update article' });
    }
  }

  async deleteKnowledgeBaseArticle(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      await supportService.deleteKnowledgeBaseArticle(id);
      res.status(HTTP_STATUS.OK).json({ success: true, message: 'Article deleted successfully' });
    } catch (error) {
      console.error('Delete article error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to delete article' });
    }
  }

  async markArticleHelpful(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      await supportService.markArticleHelpful(id);
      res.status(HTTP_STATUS.OK).json({ success: true, message: 'Thank you for your feedback' });
    } catch (error) {
      console.error('Mark article helpful error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to mark article helpful' });
    }
  }

  // ============= FAQs =============
  async getFAQs(req: Request, res: Response): Promise<void> {
    try {
      const { category } = req.query;
      const faqs = await supportService.getFAQs(category as string);
      res.status(HTTP_STATUS.OK).json({ success: true, data: faqs });
    } catch (error) {
      console.error('Get FAQs error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to fetch FAQs' });
    }
  }

  async createFAQ(req: Request, res: Response): Promise<void> {
    try {
      const faq = await supportService.createFAQ(req.body);
      res.status(HTTP_STATUS.CREATED).json({ success: true, data: faq });
    } catch (error) {
      console.error('Create FAQ error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to create FAQ' });
    }
  }

  async updateFAQ(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const faq = await supportService.updateFAQ(id, req.body);
      res.status(HTTP_STATUS.OK).json({ success: true, data: faq });
    } catch (error) {
      console.error('Update FAQ error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to update FAQ' });
    }
  }

  async deleteFAQ(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      await supportService.deleteFAQ(id);
      res.status(HTTP_STATUS.OK).json({ success: true, message: 'FAQ deleted successfully' });
    } catch (error) {
      console.error('Delete FAQ error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to delete FAQ' });
    }
  }

  // ============= Statistics =============
  async getTicketStats(req: Request, res: Response): Promise<void> {
    try {
      const { schoolId } = req.query;
      const stats = await supportService.getTicketStats(schoolId as string);
      res.status(HTTP_STATUS.OK).json({ success: true, data: stats });
    } catch (error) {
      console.error('Get ticket stats error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to fetch statistics' });
    }
  }
}

export const supportController = new SupportController();
