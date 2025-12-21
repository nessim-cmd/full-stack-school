import { Router } from 'express';
import { schoolController } from '../controllers/school.controller';

const router = Router();

// School CRUD routes
router.post('/', schoolController.createSchool);
router.get('/', schoolController.listSchools);
router.get('/check-slug', schoolController.checkSlugAvailability);
router.get('/check-domain', schoolController.checkDomainAvailability);
router.get('/slug/:slug', schoolController.getSchoolBySlug);
router.get('/domain/:domain', schoolController.getSchoolByDomain);
router.get('/:id', schoolController.getSchool);
router.put('/:id', schoolController.updateSchool);
router.delete('/:id', schoolController.deleteSchool);

// Subscription routes
router.put('/:id/subscription', schoolController.updateSubscription);

// Services routes
router.get('/:id/services', schoolController.getEnabledServices);
router.put('/:id/services', schoolController.updateEnabledServices);

export default router;
