import { Router } from 'express';
import { authController } from '../controllers/auth.controller';

const router = Router();

/**
 * POST /api/auth/login
 * Login endpoint for all user types
 */
router.post('/login', authController.login);

/**
 * POST /api/auth/logout
 * Logout endpoint (clears cookies)
 */
router.post('/logout', authController.logout);

/**
 * POST /api/auth/password-reset/request
 * Request password reset (send OTP via email)
 */
router.post('/password-reset/request', authController.requestPasswordReset);

/**
 * POST /api/auth/password-reset/verify
 * Verify OTP
 */
router.post('/password-reset/verify', authController.verifyOTP);

/**
 * POST /api/auth/password-reset/complete
 * Complete password reset with OTP
 */
router.post('/password-reset/complete', authController.completePasswordReset);

/**
 * POST /api/auth/verify
 * Verify JWT token (for inter-service communication)
 */
router.post('/verify', authController.verifyToken);

export default router;
