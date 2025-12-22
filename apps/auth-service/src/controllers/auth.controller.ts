import { Request, Response } from 'express';
import { authService } from '../services/auth.service';
import { HTTP_STATUS, ERROR_MESSAGES, SUCCESS_MESSAGES, COOKIE_NAMES } from '@workspace/shared/constants';

export class AuthController {
  async login(req: Request, res: Response): Promise<void> {
    try {
      const { username, password, schoolSlug } = req.body;

      if (!username || !password) {
        res.status(HTTP_STATUS.BAD_REQUEST).json({
          success: false,
          error: 'Username and password are required',
        });
        return;
      }

      const result = await authService.login(username, password, schoolSlug);

      res.cookie(COOKIE_NAMES.AUTH_TOKEN, result.token, {
        httpOnly: true,
        secure: process.env['NODE_ENV'] === 'production',
        sameSite: 'strict',
        maxAge: 7 * 24 * 60 * 60 * 1000,
      });

      res.status(HTTP_STATUS.OK).json({
        success: true,
        message: SUCCESS_MESSAGES.LOGIN_SUCCESS,
        data: result.user,
        token: result.token,
      });
    } catch (error) {
      console.error('Login error:', error);
      res.status(HTTP_STATUS.UNAUTHORIZED).json({
        success: false,
        error: (error as Error).message || ERROR_MESSAGES.INTERNAL_ERROR,
      });
    }
  }

  async managerLogin(req: Request, res: Response): Promise<void> {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        res.status(HTTP_STATUS.BAD_REQUEST).json({
          success: false,
          error: 'Email and password are required',
        });
        return;
      }

      const result = await authService.managerLogin(email, password);

      res.cookie(COOKIE_NAMES.AUTH_TOKEN, result.token, {
        httpOnly: true,
        secure: process.env['NODE_ENV'] === 'production',
        sameSite: 'strict',
        maxAge: 7 * 24 * 60 * 60 * 1000,
      });

      res.status(HTTP_STATUS.OK).json({
        success: true,
        data: result.manager,
        token: result.token,
      });
    } catch (error) {
      console.error('Manager login error:', error);
      res.status(HTTP_STATUS.UNAUTHORIZED).json({
        success: false,
        error: (error as Error).message || ERROR_MESSAGES.INTERNAL_ERROR,
      });
    }
  }

  async superAdminLogin(req: Request, res: Response): Promise<void> {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        res.status(HTTP_STATUS.BAD_REQUEST).json({
          success: false,
          error: 'Email and password are required',
        });
        return;
      }

      const result = await authService.superAdminLogin(email, password);

      res.cookie(COOKIE_NAMES.AUTH_TOKEN, result.token, {
        httpOnly: true,
        secure: process.env['NODE_ENV'] === 'production',
        sameSite: 'strict',
        maxAge: 7 * 24 * 60 * 60 * 1000,
      });

      res.status(HTTP_STATUS.OK).json({
        success: true,
        data: result.superAdmin,
        token: result.token,
      });
    } catch (error) {
      console.error('Super admin login error:', error);
      res.status(HTTP_STATUS.UNAUTHORIZED).json({
        success: false,
        error: (error as Error).message || ERROR_MESSAGES.INTERNAL_ERROR,
      });
    }
  }

  async logout(req: Request, res: Response): Promise<void> {
    try {
      res.clearCookie(COOKIE_NAMES.AUTH_TOKEN);
      res.status(HTTP_STATUS.OK).json({
        success: true,
        message: SUCCESS_MESSAGES.LOGOUT_SUCCESS,
      });
    } catch (error) {
      console.error('Logout error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
        success: false,
        error: ERROR_MESSAGES.INTERNAL_ERROR,
      });
    }
  }

  async requestPasswordReset(req: Request, res: Response): Promise<void> {
    try {
      const { email } = req.body;

      if (!email) {
        res.status(HTTP_STATUS.BAD_REQUEST).json({
          success: false,
          error: 'Email is required',
        });
        return;
      }

      await authService.requestPasswordReset(email);

      res.status(HTTP_STATUS.OK).json({
        success: true,
        message: SUCCESS_MESSAGES.PASSWORD_RESET_SENT,
      });
    } catch (error) {
      console.error('Password reset request error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
        success: false,
        error: ERROR_MESSAGES.INTERNAL_ERROR,
      });
    }
  }

  async completePasswordReset(req: Request, res: Response): Promise<void> {
    try {
      const { email, token, newPassword } = req.body;

      if (!email || !token || !newPassword) {
        res.status(HTTP_STATUS.BAD_REQUEST).json({
          success: false,
          error: 'Email, token, and new password are required',
        });
        return;
      }

      await authService.resetPassword(email, token, newPassword);

      res.status(HTTP_STATUS.OK).json({
        success: true,
        message: 'Password reset successfully',
      });
    } catch (error) {
      console.error('Password reset error:', error);
      res.status(HTTP_STATUS.BAD_REQUEST).json({
        success: false,
        error: (error as Error).message || ERROR_MESSAGES.INTERNAL_ERROR,
      });
    }
  }

  async verifyToken(req: Request, res: Response): Promise<void> {
    try {
      const token = req.cookies?.[COOKIE_NAMES.AUTH_TOKEN] || req.headers.authorization?.split(' ')[1];

      if (!token) {
        res.status(HTTP_STATUS.UNAUTHORIZED).json({
          success: false,
          error: 'No token provided',
        });
        return;
      }

      const payload = authService.verifyToken(token);

      if (!payload) {
        res.status(HTTP_STATUS.UNAUTHORIZED).json({
          success: false,
          error: 'Invalid token',
        });
        return;
      }

      res.status(HTTP_STATUS.OK).json({
        success: true,
        data: payload,
      });
    } catch (error) {
      console.error('Token verification error:', error);
      res.status(HTTP_STATUS.UNAUTHORIZED).json({
        success: false,
        error: 'Invalid token',
      });
    }
  }
}

export const authController = new AuthController();
