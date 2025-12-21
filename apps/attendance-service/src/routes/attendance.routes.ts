import { Router } from 'express';
import { attendanceController } from '../controllers/attendance.controller';

const router = Router();

// Attendance records
router.get('/schools/:schoolId/attendances', attendanceController.getAttendances.bind(attendanceController));
router.get('/attendances/:id', attendanceController.getAttendance.bind(attendanceController));
router.post('/attendances', attendanceController.markAttendance.bind(attendanceController));
router.post('/attendances/bulk', attendanceController.markBulkAttendance.bind(attendanceController));
router.delete('/attendances/:id', attendanceController.deleteAttendance.bind(attendanceController));

// Class attendance
router.get('/schools/:schoolId/lessons/:lessonId/attendance', attendanceController.getClassAttendance.bind(attendanceController));

// Student summary
router.get('/students/:studentId/attendance-summary', attendanceController.getStudentSummary.bind(attendanceController));

// Stats
router.get('/schools/:schoolId/attendance-stats', attendanceController.getStats.bind(attendanceController));

export default router;
