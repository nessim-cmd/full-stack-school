import { Router } from 'express';
import { schoolController } from '../controllers/school.controller';

const router = Router();

// School CRUD routes
router.post('/', schoolController.createSchool.bind(schoolController));
router.get('/', schoolController.getSchools.bind(schoolController));
router.get('/check-slug/:slug', schoolController.checkSlugAvailability.bind(schoolController));
router.get('/slug/:slug', schoolController.getSchoolBySlug.bind(schoolController));
router.get('/:id', schoolController.getSchoolById.bind(schoolController));
router.put('/:id', schoolController.updateSchool.bind(schoolController));
router.delete('/:id', schoolController.deleteSchool.bind(schoolController));
router.get('/:id/stats', schoolController.getSchoolStats.bind(schoolController));

export default router;
