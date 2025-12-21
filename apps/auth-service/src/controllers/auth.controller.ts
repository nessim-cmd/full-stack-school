import { Request, Response } from 'express';
import { authService } from '../services/auth.service';
import { HTTP_STATUS, ERROR_MESSAGES, SUCCESS_MESSAGES, COOKIE_NAMES } from '@workspace/shared/constants';
import { LoginRequest, PasswordResetRequest, PasswordResetVerify, PasswordResetComplete } from '@workspace/shared/types';

export class AuthController {
  /**
   * Login endpoint for all user types
   * POST /api/auth/login
   */
  async login(req: Request, res: Response): Promise<void> {
    try {
      const loginData: LoginRequest = req.body;

      if (!loginData.username || !loginData.password) {
        res.status(HTTP_STATUS.BAD_REQUEST).json({
          success: false,
          error: 'Username and password are required',
        });
        return;
      }

      const result = await authService.login(loginData);

      if (!result.success) {
        res.status(HTTP_STATUS.UNAUTHORIZED).json(result);
        return;
      }

      // Set HTTP-only cookie
      res.cookie(COOKIE_NAMES.AUTH_TOKEN, result.token, {
        httpOnly: true,
        secure: process.env['NODE_ENV'] === 'production',
        sameSite: 'strict',
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
      });

      res.status(HTTP_STATUS.OK).json({
        success: true,
        message: SUCCESS_MESSAGES.LOGIN_SUCCESS,
        data: result.user,
        token: result.token,
      });
    } catch (error) {
      console.error('Login error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
        success: false,
        error: ERROR_MESSAGES.INTERNAL_ERROR,
      });
    }
  }

  /**
   * Logout endpoint
   * POST /api/auth/logout
   */
  async logout(req: Request, res: Response): Promise<void> {
    try {
      // Clear cookie
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

  /**
   * Request password reset
   * POST /api/auth/password-reset/request
   */
  async requestPasswordReset(req: Request, res: Response): Promise<void> {
    try {
      const data: PasswordResetRequest = req.body;

      if (!data.email) {
        res.status(HTTP_STATUS.BAD_REQUEST).json({
          success: false,
          error: 'Email is required',
        });
        return;
      }

      await authService.requestPasswordReset(data.email);

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

  /**
   * Verify OTP
   * POST /api/auth/password-reset/verify
   */
  async verifyOTP(req: Request, res: Response): Promise<void> {
    try {
      const data: PasswordResetVerify = req.body;

      if (!data.email || !data.otp) {
        res.status(HTTP_STATUS.BAD_REQUEST).json({
          success: false,
          error: 'Email and OTP are required',
        });
        return;
      }

      const isValid = await authService.verifyOTP(data.email, data.otp);

      if (!isValid) {
        res.status(HTTP_STATUS.BAD_REQUEST).json({
          success: false,
          error: 'Invalid or expired OTP',
        });
        return;
      }

      res.status(HTTP_STATUS.OK).json({
        success: true,
        message: 'OTP verified successfully',
      });
    } catch (error) {
      console.error('OTP verification error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
        success: false,
        error: ERROR_MESSAGES.INTERNAL_ERROR,
      });
    }
  }

  /**
   * Complete password reset
   * POST /api/auth/password-reset/complete
   */
  async completePasswordReset(req: Request, res: Response): Promise<void> {
    try {
      const data: PasswordResetComplete = req.body;

      if (!data.email || !data.otp || !data.newPassword) {
        res.status(HTTP_STATUS.BAD_REQUEST).json({
          success: false,
          error: 'Email, OTP, and new password are required',
        });
        return;
      }

      const result = await authService.resetPassword(data.email, data.otp, data.newPassword);

      if (!result) {
        res.status(HTTP_STATUS.BAD_REQUEST).json({
          success: false,
          error: 'Invalid or expired OTP',
        });
        return;
      }

      res.status(HTTP_STATUS.OK).json({
        success: true,
        message: SUCCESS_MESSAGES.PASSWORD_CHANGED,
      });
    } catch (error) {
      console.error('Password reset completion error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
        success: false,
        error: ERROR_MESSAGES.INTERNAL_ERROR,
      });
    }
  }

  /**
   * Verify token (for other services)
   * POST /api/auth/verify
   */
  async verifyToken(req: Request, res: Response): Promise<void> {
    try {
      const { token } = req.body;

      if (!token) {
        res.status(HTTP_STATUS.BAD_REQUEST).json({
          success: false,
          error: 'Token is required',
        });
        return;
      }

      const result = await authService.verifyToken(token);

      if (!result) {
        res.status(HTTP_STATUS.UNAUTHORIZED).json({
          success: false,
          error: ERROR_MESSAGES.INVALID_TOKEN,
        });
        return;
      }

      res.status(HTTP_STATUS.OK).json({
        success: true,
        data: result,
      });
    } catch (error) {
      console.error('Token verification error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
        success: false,
        error: ERROR_MESSAGES.INTERNAL_ERROR,
      });
    }
  }
}

export const authController = new AuthController();
