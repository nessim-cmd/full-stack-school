import { Router } from 'express';
import { platformAdminController } from '../controllers/platform-admin.controller';

const router = Router();

// Dashboard
router.get('/dashboard', (req, res) => platformAdminController.getDashboardStats(req, res));

// Super Admins
router.get('/super-admins', (req, res) => platformAdminController.getSuperAdmins(req, res));
router.get('/super-admins/:id', (req, res) => platformAdminController.getSuperAdminById(req, res));
router.post('/super-admins', (req, res) => platformAdminController.createSuperAdmin(req, res));
router.put('/super-admins/:id', (req, res) => platformAdminController.updateSuperAdmin(req, res));
router.delete('/super-admins/:id', (req, res) => platformAdminController.deleteSuperAdmin(req, res));

// Platform Settings
router.get('/settings', (req, res) => platformAdminController.getPlatformSettings(req, res));
router.put('/settings', (req, res) => platformAdminController.updatePlatformSettings(req, res));

// Subscription Plans
router.get('/plans', (req, res) => platformAdminController.getSubscriptionPlans(req, res));
router.get('/plans/:id', (req, res) => platformAdminController.getSubscriptionPlanById(req, res));
router.post('/plans', (req, res) => platformAdminController.createSubscriptionPlan(req, res));
router.put('/plans/:id', (req, res) => platformAdminController.updateSubscriptionPlan(req, res));
router.delete('/plans/:id', (req, res) => platformAdminController.deleteSubscriptionPlan(req, res));

// Subscriptions
router.get('/subscriptions', (req, res) => platformAdminController.getSubscriptions(req, res));
router.get('/subscriptions/school/:schoolId', (req, res) => platformAdminController.getSubscriptionBySchoolId(req, res));
router.post('/subscriptions', (req, res) => platformAdminController.createSubscription(req, res));
router.put('/subscriptions/school/:schoolId', (req, res) => platformAdminController.updateSubscription(req, res));
router.post('/subscriptions/school/:schoolId/cancel', (req, res) => platformAdminController.cancelSubscription(req, res));

// Audit Logs
router.get('/audit-logs', (req, res) => platformAdminController.getAuditLogs(req, res));

export default router;
