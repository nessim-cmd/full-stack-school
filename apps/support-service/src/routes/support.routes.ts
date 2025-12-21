import { Router } from 'express';
import { supportController } from '../controllers/support.controller';

const router = Router();

// Statistics
router.get('/stats', (req, res) => supportController.getTicketStats(req, res));

// Tickets
router.get('/tickets', (req, res) => supportController.getTickets(req, res));
router.get('/tickets/:id', (req, res) => supportController.getTicketById(req, res));
router.get('/tickets/no/:ticketNo', (req, res) => supportController.getTicketByNo(req, res));
router.post('/tickets', (req, res) => supportController.createTicket(req, res));
router.put('/tickets/:id', (req, res) => supportController.updateTicket(req, res));
router.post('/tickets/:id/assign', (req, res) => supportController.assignTicket(req, res));
router.post('/tickets/:id/resolve', (req, res) => supportController.resolveTicket(req, res));
router.post('/tickets/:id/close', (req, res) => supportController.closeTicket(req, res));
router.post('/tickets/:id/rate', (req, res) => supportController.rateTicket(req, res));

// Messages
router.post('/tickets/:id/messages', (req, res) => supportController.addMessage(req, res));

// Attachments
router.post('/tickets/:id/attachments', (req, res) => supportController.addAttachment(req, res));
router.delete('/tickets/:id/attachments/:attachmentId', (req, res) => supportController.deleteAttachment(req, res));

// Knowledge Base
router.get('/knowledge-base', (req, res) => supportController.getKnowledgeBaseArticles(req, res));
router.get('/knowledge-base/:slug', (req, res) => supportController.getKnowledgeBaseArticleBySlug(req, res));
router.post('/knowledge-base', (req, res) => supportController.createKnowledgeBaseArticle(req, res));
router.put('/knowledge-base/:id', (req, res) => supportController.updateKnowledgeBaseArticle(req, res));
router.delete('/knowledge-base/:id', (req, res) => supportController.deleteKnowledgeBaseArticle(req, res));
router.post('/knowledge-base/:id/helpful', (req, res) => supportController.markArticleHelpful(req, res));

// FAQs
router.get('/faqs', (req, res) => supportController.getFAQs(req, res));
router.post('/faqs', (req, res) => supportController.createFAQ(req, res));
router.put('/faqs/:id', (req, res) => supportController.updateFAQ(req, res));
router.delete('/faqs/:id', (req, res) => supportController.deleteFAQ(req, res));

export default router;
