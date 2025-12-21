import { Router } from 'express';
import { academicController } from '../controllers/academic.controller';

const router = Router();

// Grades
router.get('/schools/:schoolId/grades', academicController.getGrades.bind(academicController));
router.post('/grades', academicController.createGrade.bind(academicController));
router.put('/grades/:id', academicController.updateGrade.bind(academicController));
router.delete('/grades/:id', academicController.deleteGrade.bind(academicController));

// Classes
router.get('/schools/:schoolId/classes', academicController.getClasses.bind(academicController));
router.get('/classes/:id', academicController.getClass.bind(academicController));
router.post('/classes', academicController.createClass.bind(academicController));
router.put('/classes/:id', academicController.updateClass.bind(academicController));
router.delete('/classes/:id', academicController.deleteClass.bind(academicController));

// Subjects
router.get('/schools/:schoolId/subjects', academicController.getSubjects.bind(academicController));
router.post('/subjects', academicController.createSubject.bind(academicController));
router.put('/subjects/:id', academicController.updateSubject.bind(academicController));
router.delete('/subjects/:id', academicController.deleteSubject.bind(academicController));

// Lessons
router.get('/schools/:schoolId/lessons', academicController.getLessons.bind(academicController));
router.post('/lessons', academicController.createLesson.bind(academicController));
router.put('/lessons/:id', academicController.updateLesson.bind(academicController));
router.delete('/lessons/:id', academicController.deleteLesson.bind(academicController));

// Exams
router.get('/schools/:schoolId/exams', academicController.getExams.bind(academicController));
router.post('/exams', academicController.createExam.bind(academicController));
router.put('/exams/:id', academicController.updateExam.bind(academicController));
router.delete('/exams/:id', academicController.deleteExam.bind(academicController));

// Results
router.get('/schools/:schoolId/results', academicController.getResults.bind(academicController));
router.post('/results', academicController.createResult.bind(academicController));
router.put('/results/:id', academicController.updateResult.bind(academicController));
router.delete('/results/:id', academicController.deleteResult.bind(academicController));

// Assignments
router.get('/schools/:schoolId/assignments', academicController.getAssignments.bind(academicController));
router.post('/assignments', academicController.createAssignment.bind(academicController));
router.put('/assignments/:id', academicController.updateAssignment.bind(academicController));
router.delete('/assignments/:id', academicController.deleteAssignment.bind(academicController));

// Events
router.get('/schools/:schoolId/events', academicController.getEvents.bind(academicController));
router.post('/events', academicController.createEvent.bind(academicController));
router.put('/events/:id', academicController.updateEvent.bind(academicController));
router.delete('/events/:id', academicController.deleteEvent.bind(academicController));

// Announcements
router.get('/schools/:schoolId/announcements', academicController.getAnnouncements.bind(academicController));
router.post('/announcements', academicController.createAnnouncement.bind(academicController));
router.put('/announcements/:id', academicController.updateAnnouncement.bind(academicController));
router.delete('/announcements/:id', academicController.deleteAnnouncement.bind(academicController));

export default router;
