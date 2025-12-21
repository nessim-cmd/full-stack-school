import { Request, Response } from 'express';
import { schoolService } from '../services/school.service';

export const schoolController = {
  /**
   * Create a new school
   */
  async createSchool(req: Request, res: Response) {
    try {
      const school = await schoolService.createSchool(req.body);
      res.status(201).json({
        success: true,
        data: school,
      });
    } catch (error: any) {
      if (error.code === 'P2002') {
        return res.status(400).json({
          success: false,
          error: 'School with this slug or domain already exists',
        });
      }
      res.status(500).json({
        success: false,
        error: error.message || 'Failed to create school',
      });
    }
  },

  /**
   * Get a school by ID
   */
  async getSchool(req: Request, res: Response) {
    try {
      const school = await schoolService.getSchoolById(req.params.id);
      if (!school) {
        return res.status(404).json({
          success: false,
          error: 'School not found',
        });
      }
      res.json({
        success: true,
        data: school,
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        error: error.message || 'Failed to get school',
      });
    }
  },

  /**
   * Get a school by slug (subdomain)
   */
  async getSchoolBySlug(req: Request, res: Response) {
    try {
      const school = await schoolService.getSchoolBySlug(req.params.slug);
      if (!school) {
        return res.status(404).json({
          success: false,
          error: 'School not found',
        });
      }
      res.json({
        success: true,
        data: school,
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        error: error.message || 'Failed to get school',
      });
    }
  },

  /**
   * Get a school by custom domain
   */
  async getSchoolByDomain(req: Request, res: Response) {
    try {
      const school = await schoolService.getSchoolByDomain(req.params.domain);
      if (!school) {
        return res.status(404).json({
          success: false,
          error: 'School not found',
        });
      }
      res.json({
        success: true,
        data: school,
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        error: error.message || 'Failed to get school',
      });
    }
  },

  /**
   * List all schools with optional filtering
   */
  async listSchools(req: Request, res: Response) {
    try {
      const { page = '1', limit = '10', plan, subscriptionStatus, search } = req.query;

      const result = await schoolService.listSchools(
        {
          plan: plan as any,
          subscriptionStatus: subscriptionStatus as any,
          search: search as string,
        },
        parseInt(page as string),
        parseInt(limit as string)
      );

      res.json({
        success: true,
        data: result.schools,
        pagination: result.pagination,
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        error: error.message || 'Failed to list schools',
      });
    }
  },

  /**
   * Update a school
   */
  async updateSchool(req: Request, res: Response) {
    try {
      const school = await schoolService.updateSchool(req.params.id, req.body);
      res.json({
        success: true,
        data: school,
      });
    } catch (error: any) {
      if (error.code === 'P2025') {
        return res.status(404).json({
          success: false,
          error: 'School not found',
        });
      }
      if (error.code === 'P2002') {
        return res.status(400).json({
          success: false,
          error: 'School with this slug or domain already exists',
        });
      }
      res.status(500).json({
        success: false,
        error: error.message || 'Failed to update school',
      });
    }
  },

  /**
   * Delete a school
   */
  async deleteSchool(req: Request, res: Response) {
    try {
      await schoolService.deleteSchool(req.params.id);
      res.json({
        success: true,
        message: 'School deleted successfully',
      });
    } catch (error: any) {
      if (error.code === 'P2025') {
        return res.status(404).json({
          success: false,
          error: 'School not found',
        });
      }
      res.status(500).json({
        success: false,
        error: error.message || 'Failed to delete school',
      });
    }
  },

  /**
   * Update subscription
   */
  async updateSubscription(req: Request, res: Response) {
    try {
      const { plan, status, subscriptionEndsAt } = req.body;
      const school = await schoolService.updateSubscription(
        req.params.id,
        plan,
        status,
        subscriptionEndsAt ? new Date(subscriptionEndsAt) : undefined
      );
      res.json({
        success: true,
        data: school,
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        error: error.message || 'Failed to update subscription',
      });
    }
  },

  /**
   * Get enabled services
   */
  async getEnabledServices(req: Request, res: Response) {
    try {
      const services = await schoolService.getEnabledServices(req.params.id);
      res.json({
        success: true,
        data: services,
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        error: error.message || 'Failed to get enabled services',
      });
    }
  },

  /**
   * Update enabled services
   */
  async updateEnabledServices(req: Request, res: Response) {
    try {
      const { services } = req.body;
      const school = await schoolService.updateEnabledServices(req.params.id, services);
      res.json({
        success: true,
        data: school,
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        error: error.message || 'Failed to update enabled services',
      });
    }
  },

  /**
   * Check if slug is available
   */
  async checkSlugAvailability(req: Request, res: Response) {
    try {
      const { slug, excludeId } = req.query;
      const available = await schoolService.isSlugAvailable(
        slug as string,
        excludeId as string
      );
      res.json({
        success: true,
        data: { available },
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        error: error.message || 'Failed to check slug availability',
      });
    }
  },

  /**
   * Check if domain is available
   */
  async checkDomainAvailability(req: Request, res: Response) {
    try {
      const { domain, excludeId } = req.query;
      const available = await schoolService.isDomainAvailable(
        domain as string,
        excludeId as string
      );
      res.json({
        success: true,
        data: { available },
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        error: error.message || 'Failed to check domain availability',
      });
    }
  },
};
