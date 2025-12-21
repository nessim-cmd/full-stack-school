import { Request, Response } from 'express';
import { financeService } from '../services/finance.service';
import { HTTP_STATUS } from '@workspace/shared/constants';

export class FinanceController {
  // ============= Fee Structures =============
  async getFeeStructures(req: Request, res: Response): Promise<void> {
    try {
      const { schoolId } = req.params;
      const { gradeId } = req.query;
      const fees = await financeService.getFeeStructures(schoolId, gradeId ? Number(gradeId) : undefined);
      res.status(HTTP_STATUS.OK).json({ success: true, data: fees });
    } catch (error) {
      console.error('Get fee structures error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to fetch fee structures' });
    }
  }

  async createFeeStructure(req: Request, res: Response): Promise<void> {
    try {
      const fee = await financeService.createFeeStructure(req.body);
      res.status(HTTP_STATUS.CREATED).json({ success: true, data: fee });
    } catch (error) {
      console.error('Create fee structure error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to create fee structure' });
    }
  }

  async updateFeeStructure(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const fee = await financeService.updateFeeStructure(Number(id), req.body);
      res.status(HTTP_STATUS.OK).json({ success: true, data: fee });
    } catch (error) {
      console.error('Update fee structure error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to update fee structure' });
    }
  }

  async deleteFeeStructure(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      await financeService.deleteFeeStructure(Number(id));
      res.status(HTTP_STATUS.OK).json({ success: true, message: 'Fee structure deleted' });
    } catch (error) {
      console.error('Delete fee structure error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to delete fee structure' });
    }
  }

  // ============= Payments =============
  async getPayments(req: Request, res: Response): Promise<void> {
    try {
      const { schoolId } = req.params;
      const { studentId, status, page, limit } = req.query;
      const result = await financeService.getPayments(
        schoolId,
        studentId as string,
        status as string,
        Number(page) || 1,
        Number(limit) || 10
      );
      res.status(HTTP_STATUS.OK).json({ success: true, ...result });
    } catch (error) {
      console.error('Get payments error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to fetch payments' });
    }
  }

  async createPayment(req: Request, res: Response): Promise<void> {
    try {
      const payment = await financeService.createPayment(req.body);
      res.status(HTTP_STATUS.CREATED).json({ success: true, data: payment });
    } catch (error) {
      console.error('Create payment error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to create payment' });
    }
  }

  async updatePayment(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const payment = await financeService.updatePayment(Number(id), req.body);
      res.status(HTTP_STATUS.OK).json({ success: true, data: payment });
    } catch (error) {
      console.error('Update payment error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to update payment' });
    }
  }

  async deletePayment(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      await financeService.deletePayment(Number(id));
      res.status(HTTP_STATUS.OK).json({ success: true, message: 'Payment deleted' });
    } catch (error) {
      console.error('Delete payment error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to delete payment' });
    }
  }

  // ============= Invoices =============
  async getInvoices(req: Request, res: Response): Promise<void> {
    try {
      const { schoolId } = req.params;
      const { studentId, status, page, limit } = req.query;
      const result = await financeService.getInvoices(
        schoolId,
        studentId as string,
        status as string,
        Number(page) || 1,
        Number(limit) || 10
      );
      res.status(HTTP_STATUS.OK).json({ success: true, ...result });
    } catch (error) {
      console.error('Get invoices error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to fetch invoices' });
    }
  }

  async createInvoice(req: Request, res: Response): Promise<void> {
    try {
      const invoice = await financeService.createInvoice(req.body);
      res.status(HTTP_STATUS.CREATED).json({ success: true, data: invoice });
    } catch (error) {
      console.error('Create invoice error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to create invoice' });
    }
  }

  async updateInvoice(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const invoice = await financeService.updateInvoice(Number(id), req.body);
      res.status(HTTP_STATUS.OK).json({ success: true, data: invoice });
    } catch (error) {
      console.error('Update invoice error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to update invoice' });
    }
  }

  async deleteInvoice(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      await financeService.deleteInvoice(Number(id));
      res.status(HTTP_STATUS.OK).json({ success: true, message: 'Invoice deleted' });
    } catch (error) {
      console.error('Delete invoice error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to delete invoice' });
    }
  }

  // ============= Expenses =============
  async getExpenses(req: Request, res: Response): Promise<void> {
    try {
      const { schoolId } = req.params;
      const { category, status, page, limit } = req.query;
      const result = await financeService.getExpenses(
        schoolId,
        category as string,
        status as string,
        Number(page) || 1,
        Number(limit) || 10
      );
      res.status(HTTP_STATUS.OK).json({ success: true, ...result });
    } catch (error) {
      console.error('Get expenses error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to fetch expenses' });
    }
  }

  async createExpense(req: Request, res: Response): Promise<void> {
    try {
      const expense = await financeService.createExpense(req.body);
      res.status(HTTP_STATUS.CREATED).json({ success: true, data: expense });
    } catch (error) {
      console.error('Create expense error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to create expense' });
    }
  }

  async updateExpense(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const expense = await financeService.updateExpense(Number(id), req.body);
      res.status(HTTP_STATUS.OK).json({ success: true, data: expense });
    } catch (error) {
      console.error('Update expense error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to update expense' });
    }
  }

  async approveExpense(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const { approvedBy } = req.body;
      const expense = await financeService.approveExpense(Number(id), approvedBy);
      res.status(HTTP_STATUS.OK).json({ success: true, data: expense });
    } catch (error) {
      console.error('Approve expense error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to approve expense' });
    }
  }

  async rejectExpense(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const expense = await financeService.rejectExpense(Number(id));
      res.status(HTTP_STATUS.OK).json({ success: true, data: expense });
    } catch (error) {
      console.error('Reject expense error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to reject expense' });
    }
  }

  async deleteExpense(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      await financeService.deleteExpense(Number(id));
      res.status(HTTP_STATUS.OK).json({ success: true, message: 'Expense deleted' });
    } catch (error) {
      console.error('Delete expense error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to delete expense' });
    }
  }

  // ============= Budgets =============
  async getBudgets(req: Request, res: Response): Promise<void> {
    try {
      const { schoolId } = req.params;
      const { category } = req.query;
      const budgets = await financeService.getBudgets(schoolId, category as string);
      res.status(HTTP_STATUS.OK).json({ success: true, data: budgets });
    } catch (error) {
      console.error('Get budgets error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to fetch budgets' });
    }
  }

  async createBudget(req: Request, res: Response): Promise<void> {
    try {
      const budget = await financeService.createBudget(req.body);
      res.status(HTTP_STATUS.CREATED).json({ success: true, data: budget });
    } catch (error) {
      console.error('Create budget error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to create budget' });
    }
  }

  async updateBudget(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const budget = await financeService.updateBudget(Number(id), req.body);
      res.status(HTTP_STATUS.OK).json({ success: true, data: budget });
    } catch (error) {
      console.error('Update budget error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to update budget' });
    }
  }

  async deleteBudget(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      await financeService.deleteBudget(Number(id));
      res.status(HTTP_STATUS.OK).json({ success: true, message: 'Budget deleted' });
    } catch (error) {
      console.error('Delete budget error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to delete budget' });
    }
  }

  // ============= Reports =============
  async getFinancialSummary(req: Request, res: Response): Promise<void> {
    try {
      const { schoolId } = req.params;
      const { startDate, endDate } = req.query;
      const summary = await financeService.getFinancialSummary(
        schoolId,
        new Date(startDate as string),
        new Date(endDate as string)
      );
      res.status(HTTP_STATUS.OK).json({ success: true, data: summary });
    } catch (error) {
      console.error('Get financial summary error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to fetch summary' });
    }
  }
}

export const financeController = new FinanceController();
