"use server";

import prisma from "./prisma";
import { sendAbsenceNotification } from "./absence-mail";
import { createNotification } from "./notification-actions";
import { revalidatePath } from "next/cache";

export async function markAttendance(
    studentId: string,
    lessonId: number,
    date: Date,
    present: boolean
) {
    try {
        // Check if attendance already exists for this student, lesson, and date
        const existingAttendance = await prisma.attendance.findFirst({
            where: {
                studentId,
                lessonId,
                date: {
                    gte: new Date(date.setHours(0, 0, 0, 0)),
                    lt: new Date(date.setHours(23, 59, 59, 999)),
                },
            },
        });

        if (existingAttendance) {
            // Update existing attendance
            await prisma.attendance.update({
                where: { id: existingAttendance.id },
                data: { present },
            });
        } else {
            // Create new attendance record
            await prisma.attendance.create({
                data: {
                    studentId,
                    lessonId,
                    date,
                    present,
                },
            });
        }

        // Send email notification and create in-app notification if student is absent
        if (!present) {
            console.log("[Attendance] Student marked absent, creating notifications...");

            const student = await prisma.student.findUnique({
                where: { id: studentId },
            });

            const lesson = await prisma.lesson.findUnique({
                where: { id: lessonId },
                include: {
                    subject: true,
                },
            });

            if (student && lesson) {
                const startTime = lesson.startTime.toLocaleTimeString("en-US", {
                    hour: "2-digit",
                    minute: "2-digit",
                });
                const endTime = lesson.endTime.toLocaleTimeString("en-US", {
                    hour: "2-digit",
                    minute: "2-digit",
                });

                const absenceMessage = `You were marked absent for ${lesson.subject.name} on ${date.toLocaleDateString()} (${startTime} - ${endTime}).`;

                // Send email if student has email
                if (student.email) {
                    console.log("[Attendance] Sending email to:", student.email);
                    await sendAbsenceNotification(
                        student.email,
                        `${student.name} ${student.surname}`,
                        date.toLocaleDateString(),
                        lesson.subject.name,
                        { start: startTime, end: endTime }
                    );
                }

                // Create in-app notification for student
                console.log("[Attendance] Creating notification for student:", studentId);
                const studentNotif = await createNotification(
                    studentId,
                    "student",
                    "Absence Recorded",
                    absenceMessage,
                    "absence"
                );
                console.log("[Attendance] Student notification result:", studentNotif);

                // Create notification for parent if student has a parent
                if (student.parentId) {
                    console.log("[Attendance] Creating notification for parent:", student.parentId);
                    const parentMessage = `Your child ${student.name} ${student.surname} was marked absent for ${lesson.subject.name} on ${date.toLocaleDateString()} (${startTime} - ${endTime}).`;

                    const parentNotif = await createNotification(
                        student.parentId,
                        "parent",
                        "Child Absence Alert",
                        parentMessage,
                        "absence"
                    );
                    console.log("[Attendance] Parent notification result:", parentNotif);
                }
            }
        }

        revalidatePath("/list/attendance");
        return { success: true };
    } catch (error) {
        console.error("Error marking attendance:", error);
        return { success: false, error: "Failed to mark attendance" };
    }
}

export async function bulkMarkAttendance(
    attendanceData: Array<{
        studentId: string;
        lessonId: number;
        date: Date;
        present: boolean;
    }>
) {
    try {
        const results = await Promise.all(
            attendanceData.map((data) =>
                markAttendance(data.studentId, data.lessonId, data.date, data.present)
            )
        );

        const allSuccess = results.every((r) => r.success);
        revalidatePath("/list/attendance");

        return {
            success: allSuccess,
            message: allSuccess
                ? "Attendance marked successfully"
                : "Some attendance records failed to save",
        };
    } catch (error) {
        console.error("Error in bulk attendance:", error);
        return { success: false, message: "Failed to mark attendance" };
    }
}
