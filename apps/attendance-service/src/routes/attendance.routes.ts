import { Router } from 'express';
import { attendanceController } from '../controllers/attendance.controller';

const router = Router();

// Attendance records
router.get('/schools/:schoolId/attendances', attendanceController.getAttendance.bind(attendanceController));
router.get('/attendances/:id', attendanceController.getAttendanceById.bind(attendanceController));
router.post('/attendances', attendanceController.markAttendance.bind(attendanceController));
router.post('/attendances/bulk', attendanceController.markBulkAttendance.bind(attendanceController));
router.delete('/attendances/:id', attendanceController.deleteAttendance.bind(attendanceController));

// By student
router.get('/students/:studentId/attendances', attendanceController.getAttendanceByStudent.bind(attendanceController));

// By lesson
router.get('/lessons/:lessonId/attendances', attendanceController.getAttendanceByLesson.bind(attendanceController));

// Stats
router.get('/schools/:schoolId/attendance-stats', attendanceController.getAttendanceStats.bind(attendanceController));

export default router;
