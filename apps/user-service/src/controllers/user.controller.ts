import { Request, Response } from 'express';
import { userService } from '../services/user.service';
import { HTTP_STATUS } from '@workspace/shared/constants';
import { UserRole } from '@workspace/shared/types';

export class UserController {
  // ============= Teachers =============
  async getTeachers(req: Request, res: Response): Promise<void> {
    try {
      const { schoolId } = req.params;
      const { page = 1, limit = 10, search } = req.query;
      
      const result = await userService.getTeachers(
        schoolId,
        Number(page),
        Number(limit),
        search as string
      );
      
      res.status(HTTP_STATUS.OK).json({ success: true, ...result });
    } catch (error) {
      console.error('Get teachers error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
        success: false,
        error: 'Failed to fetch teachers',
      });
    }
  }

  async getTeacher(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const teacher = await userService.getTeacherById(id);
      
      if (!teacher) {
        res.status(HTTP_STATUS.NOT_FOUND).json({
          success: false,
          error: 'Teacher not found',
        });
        return;
      }
      
      res.status(HTTP_STATUS.OK).json({ success: true, data: teacher });
    } catch (error) {
      console.error('Get teacher error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
        success: false,
        error: 'Failed to fetch teacher',
      });
    }
  }

  async createTeacher(req: Request, res: Response): Promise<void> {
    try {
      const teacher = await userService.createTeacher(req.body);
      res.status(HTTP_STATUS.CREATED).json({ success: true, data: teacher });
    } catch (error) {
      console.error('Create teacher error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
        success: false,
        error: 'Failed to create teacher',
      });
    }
  }

  async updateTeacher(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const teacher = await userService.updateTeacher(id, req.body);
      res.status(HTTP_STATUS.OK).json({ success: true, data: teacher });
    } catch (error) {
      console.error('Update teacher error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
        success: false,
        error: 'Failed to update teacher',
      });
    }
  }

  async deleteTeacher(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      await userService.deleteTeacher(id);
      res.status(HTTP_STATUS.OK).json({ success: true, message: 'Teacher deleted' });
    } catch (error) {
      console.error('Delete teacher error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
        success: false,
        error: 'Failed to delete teacher',
      });
    }
  }

  // ============= Students =============
  async getStudents(req: Request, res: Response): Promise<void> {
    try {
      const { schoolId } = req.params;
      const { page = 1, limit = 10, search, classId, gradeId } = req.query;
      
      const result = await userService.getStudents(
        schoolId,
        Number(page),
        Number(limit),
        search as string,
        classId ? Number(classId) : undefined,
        gradeId ? Number(gradeId) : undefined
      );
      
      res.status(HTTP_STATUS.OK).json({ success: true, ...result });
    } catch (error) {
      console.error('Get students error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
        success: false,
        error: 'Failed to fetch students',
      });
    }
  }

  async getStudent(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const student = await userService.getStudentById(id);
      
      if (!student) {
        res.status(HTTP_STATUS.NOT_FOUND).json({
          success: false,
          error: 'Student not found',
        });
        return;
      }
      
      res.status(HTTP_STATUS.OK).json({ success: true, data: student });
    } catch (error) {
      console.error('Get student error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
        success: false,
        error: 'Failed to fetch student',
      });
    }
  }

  async createStudent(req: Request, res: Response): Promise<void> {
    try {
      const student = await userService.createStudent(req.body);
      res.status(HTTP_STATUS.CREATED).json({ success: true, data: student });
    } catch (error) {
      console.error('Create student error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
        success: false,
        error: 'Failed to create student',
      });
    }
  }

  async updateStudent(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const student = await userService.updateStudent(id, req.body);
      res.status(HTTP_STATUS.OK).json({ success: true, data: student });
    } catch (error) {
      console.error('Update student error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
        success: false,
        error: 'Failed to update student',
      });
    }
  }

  async deleteStudent(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      await userService.deleteStudent(id);
      res.status(HTTP_STATUS.OK).json({ success: true, message: 'Student deleted' });
    } catch (error) {
      console.error('Delete student error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
        success: false,
        error: 'Failed to delete student',
      });
    }
  }

  // ============= Parents =============
  async getParents(req: Request, res: Response): Promise<void> {
    try {
      const { schoolId } = req.params;
      const { page = 1, limit = 10, search } = req.query;
      
      const result = await userService.getParents(
        schoolId,
        Number(page),
        Number(limit),
        search as string
      );
      
      res.status(HTTP_STATUS.OK).json({ success: true, ...result });
    } catch (error) {
      console.error('Get parents error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
        success: false,
        error: 'Failed to fetch parents',
      });
    }
  }

  async getParent(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const parent = await userService.getParentById(id);
      
      if (!parent) {
        res.status(HTTP_STATUS.NOT_FOUND).json({
          success: false,
          error: 'Parent not found',
        });
        return;
      }
      
      res.status(HTTP_STATUS.OK).json({ success: true, data: parent });
    } catch (error) {
      console.error('Get parent error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
        success: false,
        error: 'Failed to fetch parent',
      });
    }
  }

  async createParent(req: Request, res: Response): Promise<void> {
    try {
      const parent = await userService.createParent(req.body);
      res.status(HTTP_STATUS.CREATED).json({ success: true, data: parent });
    } catch (error) {
      console.error('Create parent error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
        success: false,
        error: 'Failed to create parent',
      });
    }
  }

  async updateParent(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const parent = await userService.updateParent(id, req.body);
      res.status(HTTP_STATUS.OK).json({ success: true, data: parent });
    } catch (error) {
      console.error('Update parent error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
        success: false,
        error: 'Failed to update parent',
      });
    }
  }

  async deleteParent(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      await userService.deleteParent(id);
      res.status(HTTP_STATUS.OK).json({ success: true, message: 'Parent deleted' });
    } catch (error) {
      console.error('Delete parent error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
        success: false,
        error: 'Failed to delete parent',
      });
    }
  }

  // ============= Admins =============
  async getAdmins(req: Request, res: Response): Promise<void> {
    try {
      const { schoolId } = req.params;
      const admins = await userService.getAdmins(schoolId);
      res.status(HTTP_STATUS.OK).json({ success: true, data: admins });
    } catch (error) {
      console.error('Get admins error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
        success: false,
        error: 'Failed to fetch admins',
      });
    }
  }

  async createAdmin(req: Request, res: Response): Promise<void> {
    try {
      const admin = await userService.createAdmin(req.body);
      res.status(HTTP_STATUS.CREATED).json({ success: true, data: admin });
    } catch (error) {
      console.error('Create admin error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
        success: false,
        error: 'Failed to create admin',
      });
    }
  }
}

export const userController = new UserController();
