import { Request, Response } from 'express';
import { settingsService } from '../services/settings.service';

export const settingsController = {
  /**
   * Get all site settings for a school
   */
  async getSiteSettings(req: Request, res: Response) {
    try {
      const { schoolId } = req.params;
      const settings = await settingsService.getSiteSettings(schoolId);
      res.json({
        success: true,
        data: settings || {},
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        error: error.message || 'Failed to get settings',
      });
    }
  },

  /**
   * Update site settings for a school
   */
  async updateSiteSettings(req: Request, res: Response) {
    try {
      const { schoolId } = req.params;
      const settings = await settingsService.updateSiteSettings(schoolId, req.body);
      res.json({
        success: true,
        data: settings,
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        error: error.message || 'Failed to update settings',
      });
    }
  },

  /**
   * Get branding settings
   */
  async getBrandingSettings(req: Request, res: Response) {
    try {
      const { schoolId } = req.params;
      const settings = await settingsService.getBrandingSettings(schoolId);
      res.json({
        success: true,
        data: settings,
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        error: error.message || 'Failed to get branding settings',
      });
    }
  },

  /**
   * Update branding settings
   */
  async updateBrandingSettings(req: Request, res: Response) {
    try {
      const { schoolId } = req.params;
      const settings = await settingsService.updateBrandingSettings(schoolId, req.body);
      res.json({
        success: true,
        data: settings,
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        error: error.message || 'Failed to update branding settings',
      });
    }
  },

  /**
   * Get hero settings
   */
  async getHeroSettings(req: Request, res: Response) {
    try {
      const { schoolId } = req.params;
      const settings = await settingsService.getHeroSettings(schoolId);
      res.json({
        success: true,
        data: settings,
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        error: error.message || 'Failed to get hero settings',
      });
    }
  },

  /**
   * Update hero settings
   */
  async updateHeroSettings(req: Request, res: Response) {
    try {
      const { schoolId } = req.params;
      const settings = await settingsService.updateHeroSettings(schoolId, req.body);
      res.json({
        success: true,
        data: settings,
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        error: error.message || 'Failed to update hero settings',
      });
    }
  },

  /**
   * Get stats settings
   */
  async getStatsSettings(req: Request, res: Response) {
    try {
      const { schoolId } = req.params;
      const settings = await settingsService.getStatsSettings(schoolId);
      res.json({
        success: true,
        data: settings,
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        error: error.message || 'Failed to get stats settings',
      });
    }
  },

  /**
   * Update stats settings
   */
  async updateStatsSettings(req: Request, res: Response) {
    try {
      const { schoolId } = req.params;
      const settings = await settingsService.updateStatsSettings(schoolId, req.body);
      res.json({
        success: true,
        data: settings,
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        error: error.message || 'Failed to update stats settings',
      });
    }
  },

  /**
   * Get about settings
   */
  async getAboutSettings(req: Request, res: Response) {
    try {
      const { schoolId } = req.params;
      const settings = await settingsService.getAboutSettings(schoolId);
      res.json({
        success: true,
        data: settings,
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        error: error.message || 'Failed to get about settings',
      });
    }
  },

  /**
   * Update about settings
   */
  async updateAboutSettings(req: Request, res: Response) {
    try {
      const { schoolId } = req.params;
      const settings = await settingsService.updateAboutSettings(schoolId, req.body);
      res.json({
        success: true,
        data: settings,
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        error: error.message || 'Failed to update about settings',
      });
    }
  },
};
