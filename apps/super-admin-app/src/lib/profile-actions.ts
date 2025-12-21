"use server";

import { comparePassword, hashPassword } from "./auth";
import prisma from "./prisma";
import { revalidatePath } from "next/cache";
import { createNotification } from "./notification-actions";

export async function updateProfile(formData: FormData) {
    try {
        const id = formData.get("id") as string;
        const role = formData.get("role") as string;
        const username = formData.get("username") as string;
        const currentPassword = formData.get("currentPassword") as string;
        const newPassword = formData.get("newPassword") as string;
        const confirmPassword = formData.get("confirmPassword") as string;
        const img = formData.get("img") as string;

        // Validate passwords match if new password is provided
        if (newPassword && newPassword !== confirmPassword) {
            return { success: false, message: "New passwords do not match" };
        }

        // Get current user data based on role
        let currentUser: any = null;
        switch (role) {
            case "admin":
                currentUser = await prisma.admin.findUnique({ where: { id } });
                break;
            case "teacher":
                currentUser = await prisma.teacher.findUnique({ where: { id } });
                break;
            case "student":
                currentUser = await prisma.student.findUnique({ where: { id } });
                break;
            case "parent":
                currentUser = await prisma.parent.findUnique({ where: { id } });
                break;
        }

        if (!currentUser) {
            return { success: false, message: "User not found" };
        }

        // Verify current password
        const isPasswordValid = await comparePassword(
            currentPassword,
            currentUser.password
        );

        if (!isPasswordValid) {
            return { success: false, message: "Current password is incorrect" };
        }

        // Prepare update data
        const updateData: any = {
            username,
            img,
        };

        // Track if password was changed
        let passwordChanged = false;

        // Add new password if provided
        if (newPassword) {
            updateData.password = await hashPassword(newPassword);
            passwordChanged = true;
        }

        // Update based on role
        switch (role) {
            case "admin":
                await prisma.admin.update({
                    where: { id },
                    data: updateData,
                });
                break;
            case "teacher":
                await prisma.teacher.update({
                    where: { id },
                    data: updateData,
                });
                break;
            case "student":
                await prisma.student.update({
                    where: { id },
                    data: updateData,
                });
                break;
            case "parent":
                await prisma.parent.update({
                    where: { id },
                    data: updateData,
                });
                break;
        }

        // Create notification if password was changed
        if (passwordChanged) {
            await createNotification(
                id,
                role,
                "Password Changed",
                `Your password was successfully changed on ${new Date().toLocaleString()}.`,
                "password_change"
            );
        }

        revalidatePath("/profile");
        return { success: true, message: "Profile updated successfully" };
    } catch (error) {
        console.error("Profile update error:", error);
        return { success: false, message: "Failed to update profile" };
    }
}
