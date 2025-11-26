"use server";

import { revalidatePath } from "next/cache";
import prisma from "./prisma";
import { hashPassword } from "./auth";
import { randomUUID } from "crypto";

type CurrentState = { success: boolean; error: boolean };

export const createAdmin = async (
    currentState: CurrentState,
    formData: FormData
) => {
    try {
        const username = formData.get("username") as string;
        const password = formData.get("password") as string;

        const hashedPassword = await hashPassword(password);
        const id = randomUUID();

        await prisma.admin.create({
            data: {
                id: id,
                password: hashedPassword,
                username: username,
            },
        });

        revalidatePath("/admin/admins");
        return { success: true, error: false };
    } catch (err) {
        console.log(err);
        return { success: false, error: true };
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
    } catch (err) {
        console.log(err);
        return { success: false, error: true };
    }
};

export const deleteAdmin = async (
    currentState: CurrentState,
    formData: FormData
) => {
    const id = formData.get("id") as string;
    try {
        await prisma.admin.delete({
            where: {
                id: id,
            },
        });

        revalidatePath("/admin/admins");
        return { success: true, error: false };
    } catch (err) {
        console.log(err);
        return { success: false, error: true };
    }
};
