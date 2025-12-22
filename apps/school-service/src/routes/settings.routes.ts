import { Router } from 'express';
import { settingsController } from '../controllers/settings.controller';

const router = Router();

// Full site settings for a specific school
router.get('/:schoolId', settingsController.getSiteSettings);
router.put('/:schoolId', settingsController.updateSiteSettings);

// Branding settings (schoolName, logo, tagline)
router.get('/:schoolId/branding', settingsController.getBrandingSettings);
router.put('/:schoolId/branding', settingsController.updateBrandingSettings);

// Hero settings (hero section)
router.get('/:schoolId/hero', settingsController.getHeroSettings);
router.put('/:schoolId/hero', settingsController.updateHeroSettings);

// Stats settings (numbers/metrics)
router.get('/:schoolId/stats', settingsController.getStatsSettings);
router.put('/:schoolId/stats', settingsController.updateStatsSettings);

// About settings (mission, vision, values)
router.get('/:schoolId/about', settingsController.getAboutSettings);
router.put('/:schoolId/about', settingsController.updateAboutSettings);

export default router;
