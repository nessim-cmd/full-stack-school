import { Request, Response, NextFunction } from 'express';
import { verifyToken, extractTokenFromHeader } from './auth';
import { TokenPayload, UserRole } from '@workspace/shared/types';
import { HTTP_STATUS, ERROR_MESSAGES, HEADER_NAMES } from '@workspace/shared/constants';

// Extend Express Request to include user
declare global {
  namespace Express {
    interface Request {
      user?: TokenPayload;
    }
  }
}

/**
 * Middleware to authenticate requests using JWT
 * Verifies the token and attaches user info to request
 */
export function authenticate(req: Request, res: Response, next: NextFunction): void {
  const authHeader = req.headers[HEADER_NAMES.AUTHORIZATION.toLowerCase()];
  const token = extractTokenFromHeader(authHeader as string);

  if (!token) {
    res.status(HTTP_STATUS.UNAUTHORIZED).json({
      success: false,
      error: ERROR_MESSAGES.MISSING_TOKEN,
    });
    return;
  }

  const payload = verifyToken(token);

  if (!payload) {
    res.status(HTTP_STATUS.UNAUTHORIZED).json({
      success: false,
      error: ERROR_MESSAGES.INVALID_TOKEN,
    });
    return;
  }

  req.user = payload;
  next();
}

/**
 * Middleware to authorize based on user roles
 * @param allowedRoles - Array of roles allowed to access the route
 */
export function authorize(...allowedRoles: UserRole[]) {
  return (req: Request, res: Response, next: NextFunction): void => {
    if (!req.user) {
      res.status(HTTP_STATUS.UNAUTHORIZED).json({
        success: false,
        error: ERROR_MESSAGES.UNAUTHORIZED,
      });
      return;
    }

    if (!allowedRoles.includes(req.user.role)) {
      res.status(HTTP_STATUS.FORBIDDEN).json({
        success: false,
        error: ERROR_MESSAGES.FORBIDDEN,
      });
      return;
    }

    next();
  };
}

/**
 * Middleware to check if user belongs to a specific school
 * @param schoolIdParam - Name of the route parameter containing schoolId
 */
export function checkSchoolAccess(schoolIdParam: string = 'schoolId') {
  return (req: Request, res: Response, next: NextFunction): void => {
    if (!req.user) {
      res.status(HTTP_STATUS.UNAUTHORIZED).json({
        success: false,
        error: ERROR_MESSAGES.UNAUTHORIZED,
      });
      return;
    }

    const schoolId = req.params[schoolIdParam] || req.body.schoolId || req.query.schoolId;

    // Super admin can access any school
    if (req.user.role === UserRole.SUPER_ADMIN) {
      next();
      return;
    }

    // Check if user's schoolId matches the requested schoolId
    if (req.user.schoolId !== schoolId) {
      res.status(HTTP_STATUS.FORBIDDEN).json({
        success: false,
        error: ERROR_MESSAGES.FORBIDDEN,
      });
      return;
    }

    next();
  };
}

/**
 * Optional authentication middleware
 * Attaches user if token is valid, but doesn't block request if not
 */
export function optionalAuthenticate(req: Request, res: Response, next: NextFunction): void {
  const authHeader = req.headers[HEADER_NAMES.AUTHORIZATION.toLowerCase()];
  const token = extractTokenFromHeader(authHeader as string);

  if (token) {
    const payload = verifyToken(token);
    if (payload) {
      req.user = payload;
    }
  }

  next();
}
