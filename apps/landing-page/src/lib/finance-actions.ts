"use server";

import prisma from "@/lib/prisma";
import { getSchoolId } from "@/lib/authUser";
import { revalidatePath } from "next/cache";

export const createFeeCategory = async (data: { name: string; description?: string }) => {
    const schoolId = await getSchoolId();
    if (!schoolId) return { success: false, message: "Unauthorized" };

    try {
        await prisma.feeCategory.create({
            data: {
                ...data,
                schoolId,
            },
        });
        revalidatePath("/list/finance");
        return { success: true, message: "Fee category created successfully" };
    } catch (error) {
        console.error("Error creating fee category:", error);
        return { success: false, message: "Failed to create fee category" };
    }
};

export const updateFeeCategory = async (id: number, data: { name: string; description?: string }) => {
    const schoolId = await getSchoolId();
    if (!schoolId) return { success: false, message: "Unauthorized" };

    try {
        await prisma.feeCategory.update({
            where: { id, schoolId },
            data,
        });
        revalidatePath("/list/finance");
        return { success: true, message: "Fee category updated successfully" };
    } catch (error) {
        console.error("Error updating fee category:", error);
        return { success: false, message: "Failed to update fee category" };
    }
};

export const deleteFeeCategory = async (id: number) => {
    const schoolId = await getSchoolId();
    if (!schoolId) return { success: false, message: "Unauthorized" };

    try {
        await prisma.feeCategory.delete({
            where: { id, schoolId },
        });
        revalidatePath("/list/finance");
        return { success: true, message: "Fee category deleted successfully" };
    } catch (error) {
        console.error("Error deleting fee category:", error);
        return { success: false, message: "Failed to delete fee category" };
    }
};

export const createFeeStructure = async (data: { feeCategoryId: number; gradeId: number; amount: number }) => {
    const schoolId = await getSchoolId();
    if (!schoolId) return { success: false, message: "Unauthorized" };

    try {
        await prisma.feeStructure.create({
            data: {
                ...data,
                schoolId,
            },
        });
        revalidatePath("/list/finance");
        return { success: true, message: "Fee structure created successfully" };
    } catch (error) {
        console.error("Error creating fee structure:", error);
        return { success: false, message: "Failed to create fee structure" };
    }
};

export const deleteFeeStructure = async (id: number) => {
    const schoolId = await getSchoolId();
    if (!schoolId) return { success: false, message: "Unauthorized" };

    try {
        await prisma.feeStructure.delete({
            where: { id, schoolId },
        });
        revalidatePath("/list/finance");
        return { success: true, message: "Fee structure deleted successfully" };
    } catch (error) {
        console.error("Error deleting fee structure:", error);
        return { success: false, message: "Failed to delete fee structure" };
    }
};

export const generateInvoicesForGrade = async (gradeId: number, dueDate: Date, title: string) => {
    const schoolId = await getSchoolId();
    if (!schoolId) return { success: false, message: "Unauthorized" };

    try {
        // 1. Get all students in the grade
        const students = await prisma.student.findMany({
            where: { gradeId, schoolId },
        });

        if (students.length === 0) return { success: false, message: "No students found in this grade" };

        // 2. Get all fee structures for this grade
        const fees = await prisma.feeStructure.findMany({
            where: { gradeId, schoolId },
            include: { feeCategory: true },
        });

        if (fees.length === 0) return { success: false, message: "No fee structure defined for this grade" };

        const totalAmount = fees.reduce((sum, fee) => sum + fee.amount, 0);

        // 3. Create invoices for each student
        const invoiceData = students.map(student => ({
            title,
            amount: totalAmount,
            dueDate,
            studentId: student.id,
            schoolId,
            status: "PENDING" as const,
        }));

        await prisma.studentInvoice.createMany({
            data: invoiceData,
        });

        revalidatePath("/list/finance");
        return { success: true, message: `Generated ${students.length} invoices successfully` };
    } catch (error) {
        console.error("Error generating invoices:", error);
        return { success: false, message: "Failed to generate invoices" };
    }
};

export const recordPayment = async (invoiceId: string, amount: number, method: "CASH" | "BANK_TRANSFER" | "CHECK" | "ONLINE") => {
    const schoolId = await getSchoolId();
    if (!schoolId) return { success: false, message: "Unauthorized" };

    try {
        const invoice = await prisma.studentInvoice.findUnique({
            where: { id: invoiceId, schoolId },
            include: { payments: true },
        });

        if (!invoice) return { success: false, message: "Invoice not found" };

        const totalPaid = invoice.payments.reduce((sum, p) => sum + p.amount, 0);
        const remaining = invoice.amount - totalPaid;

        if (amount > remaining) {
            return { success: false, message: "Payment amount exceeds remaining balance" };
        }

        await prisma.payment.create({
            data: {
                amount,
                method,
                invoiceId,
                schoolId,
            },
        });

        // Update invoice status
        const newTotalPaid = totalPaid + amount;
        if (newTotalPaid >= invoice.amount) {
            await prisma.studentInvoice.update({
                where: { id: invoiceId },
                data: { status: "PAID" },
            });
        }

        revalidatePath("/list/finance");
        return { success: true, message: "Payment recorded successfully" };
    } catch (error) {
        console.error("Error recording payment:", error);
        return { success: false, message: "Failed to record payment" };
    }
};
