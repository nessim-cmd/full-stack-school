"use server";

import prisma from "@/lib/prisma";
import { getSchoolId } from "@/lib/authUser";
import { revalidatePath } from "next/cache";

// ============ TEACHER PAYROLL RATE ACTIONS ============

export const setTeacherHourlyRate = async (teacherId: string, hourlyRate: number, effectiveFrom?: Date) => {
    const schoolId = await getSchoolId();
    if (!schoolId) return { success: false, message: "Unauthorized" };

    try {
        // Close any existing active rate
        await prisma.teacherPayrollRate.updateMany({
            where: {
                teacherId,
                schoolId,
                effectiveTo: null,
            },
            data: {
                effectiveTo: effectiveFrom || new Date(),
            },
        });

        // Create new rate
        await prisma.teacherPayrollRate.create({
            data: {
                teacherId,
                hourlyRate,
                effectiveFrom: effectiveFrom || new Date(),
                schoolId,
            },
        });

        revalidatePath("/list/payroll");
        return { success: true, message: "Hourly rate set successfully" };
    } catch (error) {
        console.error("Error setting hourly rate:", error);
        return { success: false, message: "Failed to set hourly rate" };
    }
};

export const getActiveTeacherRate = async (teacherId: string) => {
    const schoolId = await getSchoolId();
    if (!schoolId) return null;

    const rate = await prisma.teacherPayrollRate.findFirst({
        where: {
            teacherId,
            schoolId,
            effectiveTo: null,
        },
        orderBy: { effectiveFrom: "desc" },
    });

    return rate;
};

// ============ PAYROLL CALCULATION ============

export const calculateMonthlyPayroll = async (teacherId: string, month: number, year: number) => {
    const schoolId = await getSchoolId();
    if (!schoolId) return { success: false, message: "Unauthorized" };

    try {
        // Get teacher's hourly rate
        const rate = await getActiveTeacherRate(teacherId);
        if (!rate) {
            return { success: false, message: "No hourly rate set for this teacher" };
        }

        // Calculate total hours from lessons in the month
        const startDate = new Date(year, month - 1, 1);
        const endDate = new Date(year, month, 0, 23, 59, 59);

        const lessons = await prisma.lesson.findMany({
            where: {
                teacherId,
                schoolId,
                startTime: {
                    gte: startDate,
                    lte: endDate,
                },
            },
        });

        const totalHours = lessons.reduce((sum, lesson) => {
            const duration = (new Date(lesson.endTime).getTime() - new Date(lesson.startTime).getTime()) / (1000 * 60 * 60);
            return sum + duration;
        }, 0);

        const baseSalary = totalHours * rate.hourlyRate;

        // Check if payroll already exists
        const existing = await prisma.teacherPayroll.findUnique({
            where: {
                teacherId_month_year_schoolId: {
                    teacherId,
                    month,
                    year,
                    schoolId,
                },
            },
        });

        if (existing) {
            // Update existing
            await prisma.teacherPayroll.update({
                where: { id: existing.id },
                data: {
                    totalHours,
                    hourlyRate: rate.hourlyRate,
                    baseSalary,
                    netSalary: baseSalary - existing.totalDeductions,
                    status: "CALCULATED",
                },
            });
        } else {
            // Create new
            await prisma.teacherPayroll.create({
                data: {
                    teacherId,
                    month,
                    year,
                    totalHours,
                    hourlyRate: rate.hourlyRate,
                    baseSalary,
                    netSalary: baseSalary,
                    status: "CALCULATED",
                    schoolId,
                },
            });
        }

        revalidatePath("/list/payroll");
        return { success: true, message: "Payroll calculated successfully", totalHours, baseSalary };
    } catch (error) {
        console.error("Error calculating payroll:", error);
        return { success: false, message: "Failed to calculate payroll" };
    }
};

export const calculateAllTeachersPayroll = async (month: number, year: number) => {
    const schoolId = await getSchoolId();
    if (!schoolId) return { success: false, message: "Unauthorized" };

    try {
        const teachers = await prisma.teacher.findMany({
            where: { schoolId },
        });

        let successCount = 0;
        for (const teacher of teachers) {
            const result = await calculateMonthlyPayroll(teacher.id, month, year);
            if (result.success) successCount++;
        }

        revalidatePath("/list/payroll");
        return { success: true, message: `Calculated payroll for ${successCount}/${teachers.length} teachers` };
    } catch (error) {
        console.error("Error calculating all payrolls:", error);
        return { success: false, message: "Failed to calculate payrolls" };
    }
};

// ============ DEDUCTIONS ============

export const addPayrollDeduction = async (payrollId: string, reason: string, amount: number, notes?: string) => {
    const schoolId = await getSchoolId();
    if (!schoolId) return { success: false, message: "Unauthorized" };

    try {
        const payroll = await prisma.teacherPayroll.findUnique({
            where: { id: payrollId },
            include: { deductions: true },
        });

        if (!payroll || payroll.schoolId !== schoolId) {
            return { success: false, message: "Payroll not found" };
        }

        // Create deduction
        await prisma.payrollDeduction.create({
            data: {
                payrollId,
                reason,
                amount,
                notes,
            },
        });

        // Update payroll totals
        const newTotalDeductions = payroll.totalDeductions + amount;
        await prisma.teacherPayroll.update({
            where: { id: payrollId },
            data: {
                totalDeductions: newTotalDeductions,
                netSalary: payroll.baseSalary - newTotalDeductions,
            },
        });

        revalidatePath("/list/payroll");
        return { success: true, message: "Deduction added successfully" };
    } catch (error) {
        console.error("Error adding deduction:", error);
        return { success: false, message: "Failed to add deduction" };
    }
};

export const deletePayrollDeduction = async (deductionId: string) => {
    const schoolId = await getSchoolId();
    if (!schoolId) return { success: false, message: "Unauthorized" };

    try {
        const deduction = await prisma.payrollDeduction.findUnique({
            where: { id: deductionId },
            include: { payroll: true },
        });

        if (!deduction || deduction.payroll.schoolId !== schoolId) {
            return { success: false, message: "Deduction not found" };
        }

        // Delete deduction
        await prisma.payrollDeduction.delete({
            where: { id: deductionId },
        });

        // Update payroll totals
        const newTotalDeductions = deduction.payroll.totalDeductions - deduction.amount;
        await prisma.teacherPayroll.update({
            where: { id: deduction.payrollId },
            data: {
                totalDeductions: newTotalDeductions,
                netSalary: deduction.payroll.baseSalary - newTotalDeductions,
            },
        });

        revalidatePath("/list/payroll");
        return { success: true, message: "Deduction removed successfully" };
    } catch (error) {
        console.error("Error deleting deduction:", error);
        return { success: false, message: "Failed to delete deduction" };
    }
};

// ============ PAYMENT ============

export const markPayrollAsPaid = async (payrollId: string, paymentMethod: "CASH" | "BANK_TRANSFER" | "CHECK" | "ONLINE") => {
    const schoolId = await getSchoolId();
    if (!schoolId) return { success: false, message: "Unauthorized" };

    try {
        const payroll = await prisma.teacherPayroll.findUnique({
            where: { id: payrollId },
        });

        if (!payroll || payroll.schoolId !== schoolId) {
            return { success: false, message: "Payroll not found" };
        }

        await prisma.teacherPayroll.update({
            where: { id: payrollId },
            data: {
                status: "PAID",
                paidAt: new Date(),
                paymentMethod,
            },
        });

        revalidatePath("/list/payroll");
        return { success: true, message: "Payroll marked as paid" };
    } catch (error) {
        console.error("Error marking payroll as paid:", error);
        return { success: false, message: "Failed to mark as paid" };
    }
};

export const approvePayroll = async (payrollId: string) => {
    const schoolId = await getSchoolId();
    if (!schoolId) return { success: false, message: "Unauthorized" };

    try {
        await prisma.teacherPayroll.update({
            where: { id: payrollId, schoolId },
            data: { status: "APPROVED" },
        });

        revalidatePath("/list/payroll");
        return { success: true, message: "Payroll approved" };
    } catch (error) {
        console.error("Error approving payroll:", error);
        return { success: false, message: "Failed to approve payroll" };
    }
};
