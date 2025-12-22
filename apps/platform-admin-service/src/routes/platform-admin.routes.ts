import { Router } from 'express';
import { platformAdminController } from '../controllers/platform-admin.controller';

const router = Router();

// Super Admins
router.get('/super-admins', (req, res) => platformAdminController.getSuperAdmins(req, res));
router.get('/super-admins/:id', (req, res) => platformAdminController.getSuperAdminById(req, res));

// Dashboard
router.get('/dashboard/stats', (req, res) => platformAdminController.getDashboardStats(req, res));

// Audit Logs
router.get('/audit-logs', (req, res) => platformAdminController.getAuditLogs(req, res));
router.post('/audit-logs', (req, res) => platformAdminController.createAuditLog(req, res));

// SaaS Settings
router.get('/saas-settings', (req, res) => platformAdminController.getSaasSettings(req, res));
router.put('/saas-settings', (req, res) => platformAdminController.updateSaasSettings(req, res));

// Site Settings
router.get('/site-settings', (req, res) => platformAdminController.getSiteSettings(req, res));
router.put('/site-settings', (req, res) => platformAdminController.updateSiteSettings(req, res));

// Schools Management
router.get('/schools', (req, res) => platformAdminController.getAllSchools(req, res));
router.patch('/schools/:id/status', (req, res) => platformAdminController.toggleSchoolStatus(req, res));

// Invoices
router.get('/invoices', (req, res) => platformAdminController.getInvoices(req, res));
router.post('/invoices', (req, res) => platformAdminController.createInvoice(req, res));

export default router;
