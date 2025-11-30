"use server";

import { revalidatePath } from "next/cache";
import prisma from "./prisma";
import { hashPassword } from "./auth";
import { randomUUID } from "crypto";
import { getSchoolId, getSessionUser } from "./authUser";

type CurrentState = { success: boolean; error: boolean; message?: string };

export const createAdmin = async (
    currentState: CurrentState,
    formData: FormData
) => {
    try {
        const username = formData.get("username") as string;
        const password = formData.get("password") as string;

        const hashedPassword = await hashPassword(password);
        const id = randomUUID();
        const schoolId = await getSchoolId();

        await prisma.admin.create({
            data: {
                id: id,
                password: hashedPassword,
                username: username,
                school: {
                    connect: { id: schoolId }
                }
            },
        });

        revalidatePath("/admin/admins");
        return { success: true, error: false };
    } catch (err: any) {
        console.log(err);
        if (err.code === "P2002") {
            return { success: false, error: true, message: "Username already exists!" };
        }
        return { success: false, error: true, message: "Something went wrong!" };
    }
};

export const updateAdmin = async (
    currentState: CurrentState,
    formData: FormData
) => {
    const id = formData.get("id") as string;
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;

    if (!id) {
        return { success: false, error: true };
    }

    try {
        const schoolId = await getSchoolId();

        // Check ownership
        const admin = await prisma.admin.findFirst({
            where: { id: id, schoolId: schoolId }
        });

        if (!admin) {
            return { success: false, error: true, message: "Admin not found or access denied" };
        }

        const updateData: any = {
            username: username,
        };

        if (password && password.trim() !== "") {
            updateData.password = await hashPassword(password);
        }

        await prisma.admin.update({
            where: {
                id: id,
            },
            data: updateData,
        });

        revalidatePath("/admin/admins");
        return { success: true, error: false };
    } catch (err: any) {
        console.log(err);
        if (err.code === "P2002") {
            return { success: false, error: true, message: "Username already exists!" };
        }
        return { success: false, error: true, message: "Something went wrong!" };
    }
};

export const deleteAdmin = async (
    currentState: CurrentState,
    formData: FormData
) => {
    const id = formData.get("id") as string;
    try {
        const schoolId = await getSchoolId();

        // Prevent deleting yourself
        const session = await getSessionUser();
        if (session?.userId === id) {
            return { success: false, error: true, message: "You cannot delete your own account!" };
        }

        await prisma.admin.deleteMany({
            where: {
                id: id,
                schoolId: schoolId,
            },
        });

        revalidatePath("/admin/admins");
        return { success: true, error: false };
    } catch (err) {
        console.log(err);
        return { success: false, error: true, message: "Something went wrong!" };
    }
};
