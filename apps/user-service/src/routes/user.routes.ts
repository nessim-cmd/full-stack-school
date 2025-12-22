import { Router } from 'express';
import { userController } from '../controllers/user.controller';

const router = Router();

// Students
router.get('/schools/:schoolId/students', userController.getStudents.bind(userController));
router.get('/students/:id', userController.getStudentById.bind(userController));
router.post('/students', userController.createStudent.bind(userController));
router.put('/students/:id', userController.updateStudent.bind(userController));
router.delete('/students/:id', userController.deleteStudent.bind(userController));

// Teachers
router.get('/schools/:schoolId/teachers', userController.getTeachers.bind(userController));
router.get('/teachers/:id', userController.getTeacherById.bind(userController));
router.post('/teachers', userController.createTeacher.bind(userController));
router.put('/teachers/:id', userController.updateTeacher.bind(userController));
router.delete('/teachers/:id', userController.deleteTeacher.bind(userController));

// Parents
router.get('/schools/:schoolId/parents', userController.getParents.bind(userController));
router.get('/parents/:id', userController.getParentById.bind(userController));
router.post('/parents', userController.createParent.bind(userController));
router.put('/parents/:id', userController.updateParent.bind(userController));
router.delete('/parents/:id', userController.deleteParent.bind(userController));

// Admins
router.get('/schools/:schoolId/admins', userController.getAdmins.bind(userController));
router.get('/admins/:id', userController.getAdminById.bind(userController));
router.post('/admins', userController.createAdmin.bind(userController));
router.delete('/admins/:id', userController.deleteAdmin.bind(userController));

// Stats
router.get('/schools/:schoolId/user-counts', userController.getUserCounts.bind(userController));

export default router;
