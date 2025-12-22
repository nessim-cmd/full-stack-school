import { Request, Response } from 'express';
import { platformAdminService } from '../services/platform-admin.service';

export class PlatformAdminController {
  // Super Admin
  async getSuperAdmins(req: Request, res: Response) {
    try {
      const superAdmins = await platformAdminService.getSuperAdmins();
      res.json(superAdmins);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch super admins' });
    }
  }

  async getSuperAdminById(req: Request, res: Response) {
    try {
      const superAdmin = await platformAdminService.getSuperAdminById(req.params['id']);
      if (!superAdmin) {
        res.status(404).json({ error: 'Super admin not found' });
        return;
      }
      res.json(superAdmin);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch super admin' });
    }
  }

  // Dashboard
  async getDashboardStats(req: Request, res: Response) {
    try {
      const stats = await platformAdminService.getDashboardStats();
      res.json(stats);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch dashboard stats' });
    }
  }

  // Audit Logs
  async getAuditLogs(req: Request, res: Response) {
    try {
      const { superAdminId, action, limit } = req.query;
      const logs = await platformAdminService.getAuditLogs({
        superAdminId: superAdminId as string,
        action: action as string,
        limit: limit ? parseInt(limit as string) : undefined,
      });
      res.json(logs);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch audit logs' });
    }
  }

  async createAuditLog(req: Request, res: Response) {
    try {
      const log = await platformAdminService.createAuditLog(req.body);
      res.status(201).json(log);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create audit log' });
    }
  }

  // Schools
  async getAllSchools(req: Request, res: Response) {
    try {
      const schools = await platformAdminService.getAllSchoolsWithDetails();
      res.json(schools);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch schools' });
    }
  }

  async toggleSchoolStatus(req: Request, res: Response) {
    try {
      const { status } = req.body;
      const school = await platformAdminService.toggleSchoolStatus(req.params['id'], status);
      res.json(school);
    } catch (error) {
      res.status(500).json({ error: 'Failed to update school status' });
    }
  }

  // SaaS Settings
  async getSaasSettings(req: Request, res: Response) {
    try {
      const settings = await platformAdminService.getSaasSettings();
      res.json(settings);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch SaaS settings' });
    }
  }

  async updateSaasSettings(req: Request, res: Response) {
    try {
      const settings = await platformAdminService.updateSaasSettings(req.body);
      res.json(settings);
    } catch (error) {
      res.status(500).json({ error: 'Failed to update SaaS settings' });
    }
  }

  // Site Settings
  async getSiteSettings(req: Request, res: Response) {
    try {
      const settings = await platformAdminService.getSiteSettings(req.params['schoolId']);
      res.json(settings);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch site settings' });
    }
  }

  async updateSiteSettings(req: Request, res: Response) {
    try {
      const settings = await platformAdminService.updateSiteSettings(
        req.params['schoolId'],
        req.body
      );
      res.json(settings);
    } catch (error) {
      res.status(500).json({ error: 'Failed to update site settings' });
    }
  }

  // Invoices
  async getInvoices(req: Request, res: Response) {
    try {
      const { schoolId } = req.query;
      const invoices = await platformAdminService.getInvoices(schoolId as string);
      res.json(invoices);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch invoices' });
    }
  }

  async createInvoice(req: Request, res: Response) {
    try {
      const invoice = await platformAdminService.createInvoice(req.body);
      res.status(201).json(invoice);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create invoice' });
    }
  }
}

export const platformAdminController = new PlatformAdminController();
