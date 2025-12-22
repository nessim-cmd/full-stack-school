import { Router } from 'express';
import { supportController } from '../controllers/support.controller';

const router = Router();

// Tickets
router.get('/tickets', supportController.getTickets.bind(supportController));
router.get('/tickets/:id', supportController.getTicketById.bind(supportController));
router.get('/schools/:schoolId/tickets', supportController.getTicketsBySchool.bind(supportController));
router.post('/tickets', supportController.createTicket.bind(supportController));
router.patch('/tickets/:id', supportController.updateTicket.bind(supportController));
router.post('/tickets/:id/close', supportController.closeTicket.bind(supportController));
router.delete('/tickets/:id', supportController.deleteTicket.bind(supportController));

// Replies
router.get('/tickets/:ticketId/replies', supportController.getReplies.bind(supportController));
router.post('/tickets/:ticketId/replies', supportController.createReply.bind(supportController));

// Stats
router.get('/stats', supportController.getStats.bind(supportController));

export default router;
