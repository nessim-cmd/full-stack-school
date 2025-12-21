// src/lib/auth.ts
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const SALT_ROUNDS = 12;
const JWT_SECRET = process.env.JWT_SECRET || "change-me-please";
const JWT_EXPIRES_IN = "7d";

/** Hash a plain‑text password */
export async function hashPassword(plain: string): Promise<string> {
    return await bcrypt.hash(plain, SALT_ROUNDS);
}

/** Compare a plain‑text password with a bcrypt hash */
export async function comparePassword(plain: string, hash: string): Promise<boolean> {
    return await bcrypt.compare(plain, hash);
}

/** Sign a JWT payload */
export function signToken(payload: Record<string, unknown>): string {
    return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
}

/** Verify a JWT and return its payload (or null) */
export function verifyToken(token: string): Record<string, unknown> | null {
    try {
        return jwt.verify(token, JWT_SECRET) as Record<string, unknown>;
    } catch {
        return null;
    }
}
