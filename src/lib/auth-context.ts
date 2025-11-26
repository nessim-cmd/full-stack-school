// src/lib/auth-context.ts
// Custom auth context for server components (replacement for Clerk's auth())
import { cookies } from "next/headers";
import { verifyToken } from "./auth-edge";

export interface AuthUser {
    userId: string;
    role: string;
}

/**
 * Get the current authenticated user from JWT cookie
 * Use this in Server Components as a replacement for Clerk's auth()
 */
export async function auth(): Promise<AuthUser | null> {
    const cookieStore = cookies();
    const token = cookieStore.get("auth")?.value;

    if (!token) {
        return null;
    }

    const payload = await verifyToken(token);

    if (!payload) {
        return null;
    }

    return {
        userId: payload.id as string,
        role: payload.role as string,
    };
}
