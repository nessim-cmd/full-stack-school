import { Request, Response } from 'express';
import { settingsService } from '../services/settings.service';

export const settingsController = {
  /**
   * Get all settings for a school
   */
  async getSettings(req: Request, res: Response) {
    try {
      const { schoolId } = req.params;
      const settings = await settingsService.getSettings(schoolId);
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
   * Update settings for a school
   */
  async updateSettings(req: Request, res: Response) {
    try {
      const { schoolId } = req.params;
      const settings = await settingsService.upsertSettings(schoolId, req.body);
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
   * Get theme settings
   */
  async getThemeSettings(req: Request, res: Response) {
    try {
      const { schoolId } = req.params;
      const settings = await settingsService.getThemeSettings(schoolId);
      res.json({
        success: true,
        data: settings,
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        error: error.message || 'Failed to get theme settings',
      });
    }
  },

  /**
   * Update theme settings
   */
  async updateThemeSettings(req: Request, res: Response) {
    try {
      const { schoolId } = req.params;
      const settings = await settingsService.updateThemeSettings(schoolId, req.body);
      res.json({
        success: true,
        data: settings,
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        error: error.message || 'Failed to update theme settings',
      });
    }
  },

  /**
   * Get contact settings
   */
  async getContactSettings(req: Request, res: Response) {
    try {
      const { schoolId } = req.params;
      const settings = await settingsService.getContactSettings(schoolId);
      res.json({
        success: true,
        data: settings,
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        error: error.message || 'Failed to get contact settings',
      });
    }
  },

  /**
   * Update contact settings
   */
  async updateContactSettings(req: Request, res: Response) {
    try {
      const { schoolId } = req.params;
      const settings = await settingsService.updateContactSettings(schoolId, req.body);
      res.json({
        success: true,
        data: settings,
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        error: error.message || 'Failed to update contact settings',
      });
    }
  },

  /**
   * Get academic year settings
   */
  async getAcademicYearSettings(req: Request, res: Response) {
    try {
      const { schoolId } = req.params;
      const settings = await settingsService.getAcademicYearSettings(schoolId);
      res.json({
        success: true,
        data: settings,
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        error: error.message || 'Failed to get academic year settings',
      });
    }
  },

  /**
   * Update academic year settings
   */
  async updateAcademicYearSettings(req: Request, res: Response) {
    try {
      const { schoolId } = req.params;
      const settings = await settingsService.updateAcademicYearSettings(schoolId, req.body);
      res.json({
        success: true,
        data: settings,
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        error: error.message || 'Failed to update academic year settings',
      });
    }
  },
};
