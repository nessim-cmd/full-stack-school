import prisma from '../lib/prisma';

export class FinanceService {
  // ============= Fee Structures =============
  async getFeeStructures(schoolId: string, gradeId?: number) {
    const where: any = { schoolId };
    if (gradeId) where.gradeId = gradeId;
    
    return prisma.feeStructure.findMany({
      where,
      orderBy: { name: 'asc' },
    });
  }

  async createFeeStructure(data: {
    name: string;
    amount: number;
    frequency: string;
    gradeId?: number;
    schoolId: string;
  }) {
    return prisma.feeStructure.create({ data });
  }

  async updateFeeStructure(id: number, data: any) {
    return prisma.feeStructure.update({ where: { id }, data });
  }

  async deleteFeeStructure(id: number) {
    return prisma.feeStructure.delete({ where: { id } });
  }

  // ============= Payments =============
  async getPayments(schoolId: string, studentId?: string, status?: string, page = 1, limit = 10) {
    const skip = (page - 1) * limit;
    const where: any = { schoolId };
    if (studentId) where.studentId = studentId;
    if (status) where.status = status;
    
    const [payments, total] = await Promise.all([
      prisma.payment.findMany({
        where,
        skip,
        take: limit,
        include: { feeStructure: true },
        orderBy: { createdAt: 'desc' },
      }),
      prisma.payment.count({ where }),
    ]);
    
    return {
      data: payments,
      pagination: { page, limit, total, totalPages: Math.ceil(total / limit) },
    };
  }

  async createPayment(data: {
    amount: number;
    method: string;
    status: string;
    studentId: string;
    feeStructureId?: number;
    schoolId: string;
    notes?: string;
    transactionId?: string;
  }) {
    return prisma.payment.create({
      data: {
        ...data,
        paidAt: data.status === 'COMPLETED' ? new Date() : null,
      },
      include: { feeStructure: true },
    });
  }

  async updatePayment(id: number, data: any) {
    if (data.status === 'COMPLETED' && !data.paidAt) {
      data.paidAt = new Date();
    }
    return prisma.payment.update({
      where: { id },
      data,
      include: { feeStructure: true },
    });
  }

  async deletePayment(id: number) {
    return prisma.payment.delete({ where: { id } });
  }

  // ============= Invoices =============
  async getInvoices(schoolId: string, studentId?: string, status?: string, page = 1, limit = 10) {
    const skip = (page - 1) * limit;
    const where: any = { schoolId };
    if (studentId) where.studentId = studentId;
    if (status) where.status = status;
    
    const [invoices, total] = await Promise.all([
      prisma.invoice.findMany({
        where,
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' },
      }),
      prisma.invoice.count({ where }),
    ]);
    
    return {
      data: invoices,
      pagination: { page, limit, total, totalPages: Math.ceil(total / limit) },
    };
  }

  async createInvoice(data: {
    amount: number;
    dueDate: Date;
    studentId: string;
    schoolId: string;
    items: any[];
  }) {
    const invoiceNo = `INV-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
    return prisma.invoice.create({
      data: {
        ...data,
        invoiceNo,
        status: 'PENDING',
      },
    });
  }

  async updateInvoice(id: number, data: any) {
    return prisma.invoice.update({ where: { id }, data });
  }

  async deleteInvoice(id: number) {
    return prisma.invoice.delete({ where: { id } });
  }

  // ============= Expenses =============
  async getExpenses(schoolId: string, category?: string, status?: string, page = 1, limit = 10) {
    const skip = (page - 1) * limit;
    const where: any = { schoolId };
    if (category) where.category = category;
    if (status) where.status = status;
    
    const [expenses, total] = await Promise.all([
      prisma.expense.findMany({
        where,
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' },
      }),
      prisma.expense.count({ where }),
    ]);
    
    return {
      data: expenses,
      pagination: { page, limit, total, totalPages: Math.ceil(total / limit) },
    };
  }

  async createExpense(data: {
    title: string;
    amount: number;
    category: string;
    description?: string;
    receiptUrl?: string;
    schoolId: string;
  }) {
    return prisma.expense.create({ data });
  }

  async updateExpense(id: number, data: any) {
    return prisma.expense.update({ where: { id }, data });
  }

  async approveExpense(id: number, approvedBy: string) {
    return prisma.expense.update({
      where: { id },
      data: { status: 'APPROVED', approvedBy },
    });
  }

  async rejectExpense(id: number) {
    return prisma.expense.update({
      where: { id },
      data: { status: 'REJECTED' },
    });
  }

  async deleteExpense(id: number) {
    return prisma.expense.delete({ where: { id } });
  }

  // ============= Budgets =============
  async getBudgets(schoolId: string, category?: string) {
    const where: any = { schoolId };
    if (category) where.category = category;
    
    return prisma.budget.findMany({
      where,
      orderBy: { startDate: 'desc' },
    });
  }

  async createBudget(data: {
    name: string;
    amount: number;
    category: string;
    startDate: Date;
    endDate: Date;
    schoolId: string;
  }) {
    return prisma.budget.create({ data });
  }

  async updateBudget(id: number, data: any) {
    return prisma.budget.update({ where: { id }, data });
  }

  async deleteBudget(id: number) {
    return prisma.budget.delete({ where: { id } });
  }

  // ============= Reports =============
  async getFinancialSummary(schoolId: string, startDate: Date, endDate: Date) {
    const [payments, expenses] = await Promise.all([
      prisma.payment.findMany({
        where: {
          schoolId,
          status: 'COMPLETED',
          paidAt: { gte: startDate, lte: endDate },
        },
      }),
      prisma.expense.findMany({
        where: {
          schoolId,
          status: 'APPROVED',
          createdAt: { gte: startDate, lte: endDate },
        },
      }),
    ]);
    
    const totalRevenue = payments.reduce((sum, p) => sum + p.amount, 0);
    const totalExpenses = expenses.reduce((sum, e) => sum + e.amount, 0);
    
    return {
      totalRevenue,
      totalExpenses,
      netIncome: totalRevenue - totalExpenses,
      paymentsCount: payments.length,
      expensesCount: expenses.length,
    };
  }
}

export const financeService = new FinanceService();
