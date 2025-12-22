import { Router } from 'express';
import { financeController } from '../controllers/finance.controller';

const router = Router();

// Fee Categories
router.get('/schools/:schoolId/fee-categories', financeController.getFeeCategories.bind(financeController));
router.post('/fee-categories', financeController.createFeeCategory.bind(financeController));
router.put('/fee-categories/:id', financeController.updateFeeCategory.bind(financeController));
router.delete('/fee-categories/:id', financeController.deleteFeeCategory.bind(financeController));

// Fee Structures
router.get('/schools/:schoolId/fee-structures', financeController.getFeeStructures.bind(financeController));
router.post('/fee-structures', financeController.createFeeStructure.bind(financeController));
router.put('/fee-structures/:id', financeController.updateFeeStructure.bind(financeController));
router.delete('/fee-structures/:id', financeController.deleteFeeStructure.bind(financeController));

// Student Invoices
router.get('/schools/:schoolId/student-invoices', financeController.getStudentInvoices.bind(financeController));
router.get('/student-invoices/:id', financeController.getStudentInvoiceById.bind(financeController));
router.post('/student-invoices', financeController.createStudentInvoice.bind(financeController));
router.put('/student-invoices/:id', financeController.updateStudentInvoice.bind(financeController));
router.delete('/student-invoices/:id', financeController.deleteStudentInvoice.bind(financeController));

// Payments
router.get('/schools/:schoolId/payments', financeController.getPayments.bind(financeController));
router.post('/payments', financeController.createPayment.bind(financeController));

// Dashboard
router.get('/schools/:schoolId/dashboard-stats', financeController.getDashboardStats.bind(financeController));

export default router;
