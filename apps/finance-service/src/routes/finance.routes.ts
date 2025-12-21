import { Router } from 'express';
import { financeController } from '../controllers/finance.controller';

const router = Router();

// Fee Structures
router.get('/schools/:schoolId/fee-structures', financeController.getFeeStructures.bind(financeController));
router.post('/fee-structures', financeController.createFeeStructure.bind(financeController));
router.put('/fee-structures/:id', financeController.updateFeeStructure.bind(financeController));
router.delete('/fee-structures/:id', financeController.deleteFeeStructure.bind(financeController));

// Payments
router.get('/schools/:schoolId/payments', financeController.getPayments.bind(financeController));
router.post('/payments', financeController.createPayment.bind(financeController));
router.put('/payments/:id', financeController.updatePayment.bind(financeController));
router.delete('/payments/:id', financeController.deletePayment.bind(financeController));

// Invoices
router.get('/schools/:schoolId/invoices', financeController.getInvoices.bind(financeController));
router.post('/invoices', financeController.createInvoice.bind(financeController));
router.put('/invoices/:id', financeController.updateInvoice.bind(financeController));
router.delete('/invoices/:id', financeController.deleteInvoice.bind(financeController));

// Expenses
router.get('/schools/:schoolId/expenses', financeController.getExpenses.bind(financeController));
router.post('/expenses', financeController.createExpense.bind(financeController));
router.put('/expenses/:id', financeController.updateExpense.bind(financeController));
router.post('/expenses/:id/approve', financeController.approveExpense.bind(financeController));
router.post('/expenses/:id/reject', financeController.rejectExpense.bind(financeController));
router.delete('/expenses/:id', financeController.deleteExpense.bind(financeController));

// Budgets
router.get('/schools/:schoolId/budgets', financeController.getBudgets.bind(financeController));
router.post('/budgets', financeController.createBudget.bind(financeController));
router.put('/budgets/:id', financeController.updateBudget.bind(financeController));
router.delete('/budgets/:id', financeController.deleteBudget.bind(financeController));

// Reports
router.get('/schools/:schoolId/financial-summary', financeController.getFinancialSummary.bind(financeController));

export default router;
