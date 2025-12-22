import { Router } from 'express';
import { authController } from '../controllers/auth.controller';

const router = Router();

// Login routes
router.post('/login', authController.login.bind(authController));
router.post('/manager/login', authController.managerLogin.bind(authController));
router.post('/super-admin/login', authController.superAdminLogin.bind(authController));

// Logout
router.post('/logout', authController.logout.bind(authController));

// Password reset
router.post('/password-reset/request', authController.requestPasswordReset.bind(authController));
router.post('/password-reset/complete', authController.completePasswordReset.bind(authController));

// Token verification
router.get('/verify', authController.verifyToken.bind(authController));

export default router;
