// src/lib/authUser.ts
import { cookies } from "next/headers";
import { verifyToken } from "./auth";

export interface SessionUser {
    id: string;
    username: string;
    role: string;
}

/**
 * Get the current session user from the JWT cookie
 * Returns null if no valid session exists
 * This should be used in Server Components
 */
export async function getSessionUser(): Promise<SessionUser | null> {
    const cookieStore = await cookies();
    const token = cookieStore.get("auth")?.value;

    if (!token) {
        return null;
    }

    const payload = verifyToken(token);
    if (!payload) {
        return null;
    }

    return {
        id: payload.id as string,
        username: payload.username as string,
        role: payload.role as string,
    };
}
