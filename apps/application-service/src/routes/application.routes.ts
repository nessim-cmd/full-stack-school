import { Router } from 'express';
import { applicationController } from '../controllers/application.controller';

const router = Router();

// Applications
router.get('/applications', (req, res) => applicationController.getApplications(req, res));
router.get('/applications/:id', (req, res) => applicationController.getApplicationById(req, res));
router.post('/applications', (req, res) => applicationController.createApplication(req, res));
router.patch('/applications/:id/status', (req, res) => applicationController.updateApplicationStatus(req, res));
router.delete('/applications/:id', (req, res) => applicationController.deleteApplication(req, res));
router.get('/schools/:schoolId/applications', (req, res) => applicationController.getApplicationsBySchool(req, res));

export default router;
