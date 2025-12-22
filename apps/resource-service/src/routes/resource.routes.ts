import { Router } from 'express';
import { resourceController } from '../controllers/resource.controller';

const router = Router();

// Resources
router.get('/schools/:schoolId/resources', resourceController.getResources.bind(resourceController));
router.get('/resources/:id', resourceController.getResourceById.bind(resourceController));
router.post('/resources', resourceController.createResource.bind(resourceController));
router.put('/resources/:id', resourceController.updateResource.bind(resourceController));
router.delete('/resources/:id', resourceController.deleteResource.bind(resourceController));
router.get('/lessons/:lessonId/resources', resourceController.getResourcesByLesson.bind(resourceController));
router.get('/schools/:schoolId/resources/search', resourceController.searchResources.bind(resourceController));

export default router;
