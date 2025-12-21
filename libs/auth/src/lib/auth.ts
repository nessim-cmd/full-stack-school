import bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import { TokenPayload } from '@workspace/shared/types';
import { DEFAULTS } from '@workspace/shared/constants';

const JWT_SECRET: jwt.Secret = process.env['JWT_SECRET'] || 'change-me-in-production';
const JWT_EXPIRES_IN: string = process.env['JWT_EXPIRES_IN'] || DEFAULTS.JWT_EXPIRES_IN;
const SALT_ROUNDS = DEFAULTS.SALT_ROUNDS;

/**
 * Hash a plain-text password using bcrypt
 * @param plainPassword - The plain text password to hash
 * @returns Hashed password
 */
export async function hashPassword(plainPassword: string): Promise<string> {
  return await bcrypt.hash(plainPassword, SALT_ROUNDS);
}

/**
 * Compare a plain-text password with a bcrypt hash
 * @param plainPassword - The plain text password
 * @param hashedPassword - The hashed password to compare against
 * @returns True if passwords match, false otherwise
 */
export async function comparePassword(
  plainPassword: string,
  hashedPassword: string
): Promise<boolean> {
  return await bcrypt.compare(plainPassword, hashedPassword);
}

/**
 * Sign a JWT token with the given payload
 * @param payload - The data to encode in the token
 * @returns Signed JWT token
 */
export function signToken(payload: Omit<TokenPayload, 'iat' | 'exp'>): string {
  const options: jwt.SignOptions = {
    expiresIn: JWT_EXPIRES_IN as any,
  };
  return jwt.sign(payload as jwt.JwtPayload, JWT_SECRET, options);
}

/**
 * Verify and decode a JWT token
 * @param token - The JWT token to verify
 * @returns Decoded token payload or null if invalid
 */
export function verifyToken(token: string): TokenPayload | null {
  try {
    return jwt.verify(token, JWT_SECRET) as TokenPayload;
  } catch (error) {
    return null;
  }
}

/**
 * Decode a JWT token without verification (use with caution)
 * @param token - The JWT token to decode
 * @returns Decoded token payload or null if invalid
 */
export function decodeToken(token: string): TokenPayload | null {
  try {
    return jwt.decode(token) as TokenPayload;
  } catch (error) {
    return null;
  }
}

/**
 * Extract token from Authorization header (Bearer token)
 * @param authHeader - The Authorization header value
 * @returns Token string or null
 */
export function extractTokenFromHeader(authHeader: string | undefined): string | null {
  if (!authHeader) return null;
  
  const parts = authHeader.split(' ');
  if (parts.length !== 2 || parts[0] !== 'Bearer') return null;
  
  return parts[1];
}

/**
 * Check if a token has expired
 * @param token - The JWT token or decoded payload
 * @returns True if expired, false otherwise
 */
export function isTokenExpired(token: string | TokenPayload): boolean {
  try {
    const payload = typeof token === 'string' ? decodeToken(token) : token;
    if (!payload || !payload.exp) return true;
    
    return Date.now() >= payload.exp * 1000;
  } catch {
    return true;
  }
}

/**
 * Generate a secure random token (for password reset, etc.)
 * @param length - Length of the token
 * @returns Random token string
 */
export function generateSecureToken(length: number = 32): string {
  const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let token = '';
  
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    token += charset[randomIndex];
  }
  
  return token;
}
