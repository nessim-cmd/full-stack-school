// src/lib/auth-edge.ts
// Edge-compatible JWT verification using jose library
import * as jose from "jose";

const JWT_SECRET = new TextEncoder().encode(
    process.env.JWT_SECRET || "change-me-please"
);

/** Verify a JWT and return its payload (or null) - Edge Runtime compatible */
export async function verifyToken(token: string): Promise<Record<string, unknown> | null> {
    try {
        const { payload } = await jose.jwtVerify(token, JWT_SECRET);
        return payload as Record<string, unknown>;
    } catch {
        return null;
    }
}

/** Sign a JWT payload - Edge Runtime compatible */
export async function signToken(payload: Record<string, unknown>): Promise<string> {
    const token = await new jose.SignJWT(payload)
        .setProtectedHeader({ alg: "HS256" })
        .setIssuedAt()
        .setExpirationTime("7d")
        .sign(JWT_SECRET);
    return token;
}
