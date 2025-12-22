import { Request, Response } from 'express';
import { userService } from '../services/user.service';
import { UserSex } from '@prisma/client';

export class UserController {
  // Students
  async getStudents(req: Request, res: Response) {
    try {
      const { schoolId, classId, gradeId, search } = req.query;
      const students = await userService.getStudents(schoolId as string, {
        classId: classId ? parseInt(classId as string) : undefined,
        gradeId: gradeId ? parseInt(gradeId as string) : undefined,
        search: search as string,
      });
      res.json(students);
    } catch (error) {
      console.error('Error getting students:', error);
      res.status(500).json({ error: 'Failed to get students' });
    }
  }

  async getStudentById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const student = await userService.getStudentById(id);
      if (!student) {
        return res.status(404).json({ error: 'Student not found' });
      }
      res.json(student);
    } catch (error) {
      console.error('Error getting student:', error);
      res.status(500).json({ error: 'Failed to get student' });
    }
  }

  async createStudent(req: Request, res: Response) {
    try {
      const student = await userService.createStudent({
        ...req.body,
        birthday: new Date(req.body.birthday),
        gradeId: parseInt(req.body.gradeId),
        classId: parseInt(req.body.classId),
        sex: req.body.sex as UserSex,
      });
      res.status(201).json(student);
    } catch (error) {
      console.error('Error creating student:', error);
      res.status(500).json({ error: 'Failed to create student' });
    }
  }

  async updateStudent(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const data = { ...req.body };
      if (data.birthday) data.birthday = new Date(data.birthday);
      if (data.gradeId) data.gradeId = parseInt(data.gradeId);
      if (data.classId) data.classId = parseInt(data.classId);
      
      const student = await userService.updateStudent(id, data);
      res.json(student);
    } catch (error) {
      console.error('Error updating student:', error);
      res.status(500).json({ error: 'Failed to update student' });
    }
  }

  async deleteStudent(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await userService.deleteStudent(id);
      res.status(204).send();
    } catch (error) {
      console.error('Error deleting student:', error);
      res.status(500).json({ error: 'Failed to delete student' });
    }
  }

  // Teachers
  async getTeachers(req: Request, res: Response) {
    try {
      const { schoolId, subjectId, search } = req.query;
      const teachers = await userService.getTeachers(schoolId as string, {
        subjectId: subjectId ? parseInt(subjectId as string) : undefined,
        search: search as string,
      });
      res.json(teachers);
    } catch (error) {
      console.error('Error getting teachers:', error);
      res.status(500).json({ error: 'Failed to get teachers' });
    }
  }

  async getTeacherById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const teacher = await userService.getTeacherById(id);
      if (!teacher) {
        return res.status(404).json({ error: 'Teacher not found' });
      }
      res.json(teacher);
    } catch (error) {
      console.error('Error getting teacher:', error);
      res.status(500).json({ error: 'Failed to get teacher' });
    }
  }

  async createTeacher(req: Request, res: Response) {
    try {
      const teacher = await userService.createTeacher({
        ...req.body,
        birthday: new Date(req.body.birthday),
        sex: req.body.sex as UserSex,
      });
      res.status(201).json(teacher);
    } catch (error) {
      console.error('Error creating teacher:', error);
      res.status(500).json({ error: 'Failed to create teacher' });
    }
  }

  async updateTeacher(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const data = { ...req.body };
      if (data.birthday) data.birthday = new Date(data.birthday);
      
      const teacher = await userService.updateTeacher(id, data);
      res.json(teacher);
    } catch (error) {
      console.error('Error updating teacher:', error);
      res.status(500).json({ error: 'Failed to update teacher' });
    }
  }

  async deleteTeacher(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await userService.deleteTeacher(id);
      res.status(204).send();
    } catch (error) {
      console.error('Error deleting teacher:', error);
      res.status(500).json({ error: 'Failed to delete teacher' });
    }
  }

  // Parents
  async getParents(req: Request, res: Response) {
    try {
      const { schoolId, search } = req.query;
      const parents = await userService.getParents(schoolId as string, search as string);
      res.json(parents);
    } catch (error) {
      console.error('Error getting parents:', error);
      res.status(500).json({ error: 'Failed to get parents' });
    }
  }

  async getParentById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const parent = await userService.getParentById(id);
      if (!parent) {
        return res.status(404).json({ error: 'Parent not found' });
      }
      res.json(parent);
    } catch (error) {
      console.error('Error getting parent:', error);
      res.status(500).json({ error: 'Failed to get parent' });
    }
  }

  async createParent(req: Request, res: Response) {
    try {
      const parent = await userService.createParent(req.body);
      res.status(201).json(parent);
    } catch (error) {
      console.error('Error creating parent:', error);
      res.status(500).json({ error: 'Failed to create parent' });
    }
  }

  async updateParent(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const parent = await userService.updateParent(id, req.body);
      res.json(parent);
    } catch (error) {
      console.error('Error updating parent:', error);
      res.status(500).json({ error: 'Failed to update parent' });
    }
  }

  async deleteParent(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await userService.deleteParent(id);
      res.status(204).send();
    } catch (error) {
      console.error('Error deleting parent:', error);
      res.status(500).json({ error: 'Failed to delete parent' });
    }
  }

  // Admins
  async getAdmins(req: Request, res: Response) {
    try {
      const { schoolId } = req.query;
      const admins = await userService.getAdmins(schoolId as string);
      res.json(admins);
    } catch (error) {
      console.error('Error getting admins:', error);
      res.status(500).json({ error: 'Failed to get admins' });
    }
  }

  async getAdminById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const admin = await userService.getAdminById(id);
      if (!admin) {
        return res.status(404).json({ error: 'Admin not found' });
      }
      res.json(admin);
    } catch (error) {
      console.error('Error getting admin:', error);
      res.status(500).json({ error: 'Failed to get admin' });
    }
  }

  async createAdmin(req: Request, res: Response) {
    try {
      const admin = await userService.createAdmin(req.body);
      res.status(201).json(admin);
    } catch (error) {
      console.error('Error creating admin:', error);
      res.status(500).json({ error: 'Failed to create admin' });
    }
  }

  async deleteAdmin(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await userService.deleteAdmin(id);
      res.status(204).send();
    } catch (error) {
      console.error('Error deleting admin:', error);
      res.status(500).json({ error: 'Failed to delete admin' });
    }
  }

  // User counts
  async getUserCounts(req: Request, res: Response) {
    try {
      const { schoolId } = req.params;
      const counts = await userService.getUserCounts(schoolId);
      res.json(counts);
    } catch (error) {
      console.error('Error getting user counts:', error);
      res.status(500).json({ error: 'Failed to get user counts' });
    }
  }
}

export const userController = new UserController();
