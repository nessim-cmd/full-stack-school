import { Request, Response } from 'express';
import { financeService } from '../services/finance.service';

const HTTP_STATUS = { OK: 200, CREATED: 201, BAD_REQUEST: 400, NOT_FOUND: 404, INTERNAL_SERVER_ERROR: 500 };

export class FinanceController {
  // Fee Categories
  async getFeeCategories(req: Request, res: Response): Promise<void> {
    try {
      const { schoolId } = req.params;
      const categories = await financeService.getFeeCategories(schoolId);
      res.status(HTTP_STATUS.OK).json({ success: true, data: categories });
    } catch (error) {
      console.error('Get fee categories error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to get fee categories' });
    }
  }

  async createFeeCategory(req: Request, res: Response): Promise<void> {
    try {
      const category = await financeService.createFeeCategory(req.body);
      res.status(HTTP_STATUS.CREATED).json({ success: true, data: category });
    } catch (error) {
      console.error('Create fee category error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to create fee category' });
    }
  }

  async updateFeeCategory(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const category = await financeService.updateFeeCategory(Number(id), req.body);
      res.status(HTTP_STATUS.OK).json({ success: true, data: category });
    } catch (error) {
      console.error('Update fee category error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to update fee category' });
    }
  }

  async deleteFeeCategory(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      await financeService.deleteFeeCategory(Number(id));
      res.status(HTTP_STATUS.OK).json({ success: true, message: 'Fee category deleted' });
    } catch (error) {
      console.error('Delete fee category error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to delete fee category' });
    }
  }

  // Fee Structures
  async getFeeStructures(req: Request, res: Response): Promise<void> {
    try {
      const { schoolId } = req.params;
      const { feeCategoryId, gradeId } = req.query;
      const structures = await financeService.getFeeStructures(
        schoolId,
        feeCategoryId ? Number(feeCategoryId) : undefined,
        gradeId ? Number(gradeId) : undefined
      );
      res.status(HTTP_STATUS.OK).json({ success: true, data: structures });
    } catch (error) {
      console.error('Get fee structures error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to get fee structures' });
    }
  }

  async createFeeStructure(req: Request, res: Response): Promise<void> {
    try {
      const structure = await financeService.createFeeStructure(req.body);
      res.status(HTTP_STATUS.CREATED).json({ success: true, data: structure });
    } catch (error) {
      console.error('Create fee structure error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to create fee structure' });
    }
  }

  async updateFeeStructure(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const structure = await financeService.updateFeeStructure(Number(id), req.body);
      res.status(HTTP_STATUS.OK).json({ success: true, data: structure });
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

  // Student Invoices
  async getStudentInvoices(req: Request, res: Response): Promise<void> {
    try {
      const { schoolId } = req.params;
      const { studentId, status } = req.query;
      const invoices = await financeService.getStudentInvoices(schoolId, studentId as string, status as any);
      res.status(HTTP_STATUS.OK).json({ success: true, data: invoices });
    } catch (error) {
      console.error('Get student invoices error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to get invoices' });
    }
  }

  async getStudentInvoiceById(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const invoice = await financeService.getStudentInvoiceById(id);
      if (!invoice) {
        res.status(HTTP_STATUS.NOT_FOUND).json({ success: false, error: 'Invoice not found' });
        return;
      }
      res.status(HTTP_STATUS.OK).json({ success: true, data: invoice });
    } catch (error) {
      console.error('Get invoice error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to get invoice' });
    }
  }

  async createStudentInvoice(req: Request, res: Response): Promise<void> {
    try {
      const invoice = await financeService.createStudentInvoice(req.body);
      res.status(HTTP_STATUS.CREATED).json({ success: true, data: invoice });
    } catch (error) {
      console.error('Create invoice error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to create invoice' });
    }
  }

  async updateStudentInvoice(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const invoice = await financeService.updateStudentInvoice(id, req.body);
      res.status(HTTP_STATUS.OK).json({ success: true, data: invoice });
    } catch (error) {
      console.error('Update invoice error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to update invoice' });
    }
  }

  async deleteStudentInvoice(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      await financeService.deleteStudentInvoice(id);
      res.status(HTTP_STATUS.OK).json({ success: true, message: 'Invoice deleted' });
    } catch (error) {
      console.error('Delete invoice error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to delete invoice' });
    }
  }

  // Payments
  async getPayments(req: Request, res: Response): Promise<void> {
    try {
      const { schoolId } = req.params;
      const { invoiceId } = req.query;
      const payments = await financeService.getPayments(schoolId, invoiceId as string);
      res.status(HTTP_STATUS.OK).json({ success: true, data: payments });
    } catch (error) {
      console.error('Get payments error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to get payments' });
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

  // Dashboard
  async getDashboardStats(req: Request, res: Response): Promise<void> {
    try {
      const { schoolId } = req.params;
      const stats = await financeService.getDashboardStats(schoolId);
      res.status(HTTP_STATUS.OK).json({ success: true, data: stats });
    } catch (error) {
      console.error('Get stats error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to get stats' });
    }
  }
}

export const financeController = new FinanceController();
