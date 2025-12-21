import { Request, Response } from 'express';
import { platformAdminService } from '../services/platform-admin.service';
import { HTTP_STATUS } from '@workspace/shared/constants';

export class PlatformAdminController {
  // ============= Super Admins =============
  async getSuperAdmins(req: Request, res: Response): Promise<void> {
    try {
      const admins = await platformAdminService.getSuperAdmins();
      res.status(HTTP_STATUS.OK).json({ success: true, data: admins });
    } catch (error) {
      console.error('Get super admins error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to fetch super admins' });
    }
  }

  async getSuperAdminById(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const admin = await platformAdminService.getSuperAdminById(id);
      
      if (!admin) {
        res.status(HTTP_STATUS.NOT_FOUND).json({ success: false, error: 'Super admin not found' });
        return;
      }
      
      res.status(HTTP_STATUS.OK).json({ success: true, data: admin });
    } catch (error) {
      console.error('Get super admin error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to fetch super admin' });
    }
  }

  async createSuperAdmin(req: Request, res: Response): Promise<void> {
    try {
      const admin = await platformAdminService.createSuperAdmin(req.body);
      res.status(HTTP_STATUS.CREATED).json({ success: true, data: admin });
    } catch (error) {
      console.error('Create super admin error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to create super admin' });
    }
  }

  async updateSuperAdmin(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const admin = await platformAdminService.updateSuperAdmin(id, req.body);
      res.status(HTTP_STATUS.OK).json({ success: true, data: admin });
    } catch (error) {
      console.error('Update super admin error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to update super admin' });
    }
  }

  async deleteSuperAdmin(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      await platformAdminService.deleteSuperAdmin(id);
      res.status(HTTP_STATUS.OK).json({ success: true, message: 'Super admin deleted successfully' });
    } catch (error) {
      console.error('Delete super admin error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to delete super admin' });
    }
  }

  // ============= Platform Settings =============
  async getPlatformSettings(req: Request, res: Response): Promise<void> {
    try {
      const settings = await platformAdminService.getPlatformSettings();
      res.status(HTTP_STATUS.OK).json({ success: true, data: settings });
    } catch (error) {
      console.error('Get platform settings error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to fetch platform settings' });
    }
  }

  async updatePlatformSettings(req: Request, res: Response): Promise<void> {
    try {
      const settings = await platformAdminService.updatePlatformSettings(req.body);
      res.status(HTTP_STATUS.OK).json({ success: true, data: settings });
    } catch (error) {
      console.error('Update platform settings error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to update platform settings' });
    }
  }

  // ============= Subscription Plans =============
  async getSubscriptionPlans(req: Request, res: Response): Promise<void> {
    try {
      const { includeInactive } = req.query;
      const plans = await platformAdminService.getSubscriptionPlans(includeInactive === 'true');
      res.status(HTTP_STATUS.OK).json({ success: true, data: plans });
    } catch (error) {
      console.error('Get subscription plans error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to fetch subscription plans' });
    }
  }

  async getSubscriptionPlanById(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const plan = await platformAdminService.getSubscriptionPlanById(id);
      
      if (!plan) {
        res.status(HTTP_STATUS.NOT_FOUND).json({ success: false, error: 'Subscription plan not found' });
        return;
      }
      
      res.status(HTTP_STATUS.OK).json({ success: true, data: plan });
    } catch (error) {
      console.error('Get subscription plan error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to fetch subscription plan' });
    }
  }

  async createSubscriptionPlan(req: Request, res: Response): Promise<void> {
    try {
      const plan = await platformAdminService.createSubscriptionPlan(req.body);
      res.status(HTTP_STATUS.CREATED).json({ success: true, data: plan });
    } catch (error) {
      console.error('Create subscription plan error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to create subscription plan' });
    }
  }

  async updateSubscriptionPlan(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const plan = await platformAdminService.updateSubscriptionPlan(id, req.body);
      res.status(HTTP_STATUS.OK).json({ success: true, data: plan });
    } catch (error) {
      console.error('Update subscription plan error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to update subscription plan' });
    }
  }

  async deleteSubscriptionPlan(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      await platformAdminService.deleteSubscriptionPlan(id);
      res.status(HTTP_STATUS.OK).json({ success: true, message: 'Subscription plan deleted successfully' });
    } catch (error) {
      console.error('Delete subscription plan error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to delete subscription plan' });
    }
  }

  // ============= Subscriptions =============
  async getSubscriptions(req: Request, res: Response): Promise<void> {
    try {
      const { page, limit, status, planId } = req.query;
      
      const result = await platformAdminService.getSubscriptions(
        Number(page) || 1,
        Number(limit) || 20,
        {
          status: status as string,
          planId: planId as string,
        }
      );
      
      res.status(HTTP_STATUS.OK).json({ success: true, ...result });
    } catch (error) {
      console.error('Get subscriptions error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to fetch subscriptions' });
    }
  }

  async getSubscriptionBySchoolId(req: Request, res: Response): Promise<void> {
    try {
      const { schoolId } = req.params;
      const subscription = await platformAdminService.getSubscriptionBySchoolId(schoolId);
      res.status(HTTP_STATUS.OK).json({ success: true, data: subscription });
    } catch (error) {
      console.error('Get subscription error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to fetch subscription' });
    }
  }

  async createSubscription(req: Request, res: Response): Promise<void> {
    try {
      const subscription = await platformAdminService.createSubscription(req.body);
      res.status(HTTP_STATUS.CREATED).json({ success: true, data: subscription });
    } catch (error) {
      console.error('Create subscription error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to create subscription' });
    }
  }

  async updateSubscription(req: Request, res: Response): Promise<void> {
    try {
      const { schoolId } = req.params;
      const subscription = await platformAdminService.updateSubscription(schoolId, req.body);
      res.status(HTTP_STATUS.OK).json({ success: true, data: subscription });
    } catch (error) {
      console.error('Update subscription error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to update subscription' });
    }
  }

  async cancelSubscription(req: Request, res: Response): Promise<void> {
    try {
      const { schoolId } = req.params;
      const subscription = await platformAdminService.cancelSubscription(schoolId);
      res.status(HTTP_STATUS.OK).json({ success: true, data: subscription });
    } catch (error) {
      console.error('Cancel subscription error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to cancel subscription' });
    }
  }

  // ============= Audit Logs =============
  async getAuditLogs(req: Request, res: Response): Promise<void> {
    try {
      const { page, limit, userId, action, resource, startDate, endDate } = req.query;
      
      const result = await platformAdminService.getAuditLogs(
        Number(page) || 1,
        Number(limit) || 50,
        {
          userId: userId as string,
          action: action as string,
          resource: resource as string,
          startDate: startDate ? new Date(startDate as string) : undefined,
          endDate: endDate ? new Date(endDate as string) : undefined,
        }
      );
      
      res.status(HTTP_STATUS.OK).json({ success: true, ...result });
    } catch (error) {
      console.error('Get audit logs error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to fetch audit logs' });
    }
  }

  // ============= Dashboard =============
  async getDashboardStats(req: Request, res: Response): Promise<void> {
    try {
      const stats = await platformAdminService.getDashboardStats();
      res.status(HTTP_STATUS.OK).json({ success: true, data: stats });
    } catch (error) {
      console.error('Get dashboard stats error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to fetch dashboard stats' });
    }
  }
}

export const platformAdminController = new PlatformAdminController();
