import { Router } from 'express';
import { applicationController } from '../controllers/application.controller';

const router = Router();

// Applications
router.get('/schools/:schoolId/applications', (req, res) => applicationController.getApplications(req, res));
router.get('/schools/:schoolId/applications/stats', (req, res) => applicationController.getApplicationStats(req, res));
router.get('/applications/:id', (req, res) => applicationController.getApplicationById(req, res));
router.get('/applications/no/:applicationNo', (req, res) => applicationController.getApplicationByNo(req, res));
router.post('/applications', (req, res) => applicationController.createApplication(req, res));
router.put('/applications/:id', (req, res) => applicationController.updateApplication(req, res));
router.patch('/applications/:id/status', (req, res) => applicationController.updateApplicationStatus(req, res));
router.delete('/applications/:id', (req, res) => applicationController.deleteApplication(req, res));

// Documents
router.post('/applications/:id/documents', (req, res) => applicationController.addDocument(req, res));
router.delete('/applications/:id/documents/:docId', (req, res) => applicationController.deleteDocument(req, res));

// Admission Criteria
router.get('/schools/:schoolId/admission-criteria', (req, res) => applicationController.getAdmissionCriteria(req, res));
router.put('/schools/:schoolId/admission-criteria', (req, res) => applicationController.createOrUpdateAdmissionCriteria(req, res));

// Entrance Exams
router.post('/entrance-exams', (req, res) => applicationController.scheduleEntranceExam(req, res));
router.get('/applications/:applicationId/entrance-exam', (req, res) => applicationController.getEntranceExam(req, res));
router.put('/entrance-exams/:id', (req, res) => applicationController.updateEntranceExamResult(req, res));

// Interviews
router.post('/interviews', (req, res) => applicationController.scheduleInterview(req, res));
router.get('/applications/:applicationId/interview', (req, res) => applicationController.getInterview(req, res));
router.put('/interviews/:id', (req, res) => applicationController.updateInterviewResult(req, res));

// Admission
router.post('/applications/:id/admit', (req, res) => applicationController.admitStudent(req, res));

export default router;
