// src/lib/authUser.ts
import { cookies } from "next/headers";
import { verifyToken } from "./auth";

export interface SessionUser {
    userId: string;
    username: string;
    userType: "manager" | "admin" | "teacher" | "student" | "parent";
    role: string;
    schoolId: string;
    managerId?: string; // Only present for managers
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
        userId: payload.userId as string,
        username: payload.username as string,
        userType: payload.userType as any,
        role: payload.role as string,
        schoolId: payload.schoolId as string,
        managerId: payload.managerId as string | undefined,
    };
}

/**
 * Helper function to get just the schoolId from the session
 * Throws an error if no session exists
 */
export async function getSchoolId(): Promise<string> {
    const session = await getSessionUser();
    if (!session?.schoolId) {
        throw new Error("No active school session");
    }
    return session.schoolId;
}
