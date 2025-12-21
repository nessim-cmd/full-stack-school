import { Router } from 'express';
import { settingsController } from '../controllers/settings.controller';

const router = Router();

// Settings routes for a specific school
router.get('/:schoolId', settingsController.getSettings);
router.put('/:schoolId', settingsController.updateSettings);

// Theme settings
router.get('/:schoolId/theme', settingsController.getThemeSettings);
router.put('/:schoolId/theme', settingsController.updateThemeSettings);

// Contact settings
router.get('/:schoolId/contact', settingsController.getContactSettings);
router.put('/:schoolId/contact', settingsController.updateContactSettings);

// Academic year settings
router.get('/:schoolId/academic-year', settingsController.getAcademicYearSettings);
router.put('/:schoolId/academic-year', settingsController.updateAcademicYearSettings);

export default router;
