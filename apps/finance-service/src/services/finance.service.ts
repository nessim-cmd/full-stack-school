import { PrismaClient, InvoiceStatus, PaymentMethod } from '@prisma/client';

const prisma = new PrismaClient();

export class FinanceService {
  // ============= Fee Categories =============
  async getFeeCategories(schoolId: string) {
    return prisma.feeCategory.findMany({
      where: { schoolId },
      include: { feeStructures: true },
      orderBy: { name: 'asc' },
    });
  }

  async createFeeCategory(data: { name: string; description?: string; schoolId: string }) {
    return prisma.feeCategory.create({ data });
  }

  async updateFeeCategory(id: number, data: { name?: string; description?: string }) {
    return prisma.feeCategory.update({ where: { id }, data });
  }

  async deleteFeeCategory(id: number) {
    return prisma.feeCategory.delete({ where: { id } });
  }

  // ============= Fee Structures =============
  async getFeeStructures(schoolId: string, feeCategoryId?: number, gradeId?: number) {
    const where: any = { schoolId };
    if (feeCategoryId) where.feeCategoryId = feeCategoryId;
    if (gradeId) where.gradeId = gradeId;
    
    return prisma.feeStructure.findMany({
      where,
      include: { feeCategory: true, grade: true },
      orderBy: { id: 'desc' },
    });
  }

  async createFeeStructure(data: { amount: number; feeCategoryId: number; gradeId?: number; schoolId: string }) {
    return prisma.feeStructure.create({ data });
  }

  async updateFeeStructure(id: number, data: { amount?: number; gradeId?: number }) {
    return prisma.feeStructure.update({ where: { id }, data });
  }

  async deleteFeeStructure(id: number) {
    return prisma.feeStructure.delete({ where: { id } });
  }

  // ============= Student Invoices =============
  async getStudentInvoices(schoolId: string, studentId?: string, status?: InvoiceStatus) {
    const where: any = { schoolId };
    if (studentId) where.studentId = studentId;
    if (status) where.status = status;
    
    return prisma.studentInvoice.findMany({
      where,
      include: { student: true, payments: true },
      orderBy: { dueDate: 'desc' },
    });
  }

  async getStudentInvoiceById(id: string) {
    return prisma.studentInvoice.findUnique({
      where: { id },
      include: { student: true, payments: true },
    });
  }

  async createStudentInvoice(data: { title: string; amount: number; dueDate: Date; studentId: string; schoolId: string }) {
    return prisma.studentInvoice.create({
      data: {
        title: data.title,
        amount: data.amount,
        dueDate: new Date(data.dueDate),
        status: 'PENDING',
        studentId: data.studentId,
        schoolId: data.schoolId,
      },
    });
  }

  async updateStudentInvoice(id: string, data: { title?: string; amount?: number; dueDate?: Date; status?: InvoiceStatus }) {
    const updateData: any = { ...data };
    if (data.dueDate) updateData.dueDate = new Date(data.dueDate);
    return prisma.studentInvoice.update({ where: { id }, data: updateData });
  }

  async deleteStudentInvoice(id: string) {
    return prisma.studentInvoice.delete({ where: { id } });
  }

  // ============= Payments =============
  async getPayments(schoolId: string, invoiceId?: string) {
    const where: any = { schoolId };
    if (invoiceId) where.invoiceId = invoiceId;
    
    return prisma.payment.findMany({
      where,
      include: { invoice: { include: { student: true } } },
      orderBy: { date: 'desc' },
    });
  }

  async createPayment(data: { amount: number; method: PaymentMethod; invoiceId: string; schoolId: string }) {
    const payment = await prisma.payment.create({
      data: {
        amount: data.amount,
        method: data.method,
        invoiceId: data.invoiceId,
        schoolId: data.schoolId,
      },
    });

    // Update invoice status
    const invoice = await prisma.studentInvoice.findUnique({
      where: { id: data.invoiceId },
      include: { payments: true },
    });

    if (invoice) {
      const totalPaid = invoice.payments.reduce((sum, p) => sum + p.amount, 0);
      const newStatus: InvoiceStatus = totalPaid >= invoice.amount ? 'PAID' : 'PENDING';
      await prisma.studentInvoice.update({
        where: { id: data.invoiceId },
        data: { status: newStatus },
      });
    }

    return payment;
  }

  // ============= Dashboard Stats =============
  async getDashboardStats(schoolId: string) {
    const [totalInvoices, paidInvoices, pendingInvoices] = await Promise.all([
      prisma.studentInvoice.count({ where: { schoolId } }),
      prisma.studentInvoice.count({ where: { schoolId, status: 'PAID' } }),
      prisma.studentInvoice.count({ where: { schoolId, status: 'PENDING' } }),
    ]);

    return { totalInvoices, paidInvoices, pendingInvoices };
  }
}

export const financeService = new FinanceService();
