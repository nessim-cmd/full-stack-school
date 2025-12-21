import { Request, Response } from 'express';
import { academicService } from '../services/academic.service';
import { HTTP_STATUS } from '@workspace/shared/constants';

export class AcademicController {
  // ============= Grades =============
  async getGrades(req: Request, res: Response): Promise<void> {
    try {
      const { schoolId } = req.params;
      const grades = await academicService.getGrades(schoolId);
      res.status(HTTP_STATUS.OK).json({ success: true, data: grades });
    } catch (error) {
      console.error('Get grades error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to fetch grades' });
    }
  }

  async createGrade(req: Request, res: Response): Promise<void> {
    try {
      const grade = await academicService.createGrade(req.body);
      res.status(HTTP_STATUS.CREATED).json({ success: true, data: grade });
    } catch (error) {
      console.error('Create grade error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to create grade' });
    }
  }

  async updateGrade(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const grade = await academicService.updateGrade(Number(id), req.body);
      res.status(HTTP_STATUS.OK).json({ success: true, data: grade });
    } catch (error) {
      console.error('Update grade error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to update grade' });
    }
  }

  async deleteGrade(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      await academicService.deleteGrade(Number(id));
      res.status(HTTP_STATUS.OK).json({ success: true, message: 'Grade deleted' });
    } catch (error) {
      console.error('Delete grade error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to delete grade' });
    }
  }

  // ============= Classes =============
  async getClasses(req: Request, res: Response): Promise<void> {
    try {
      const { schoolId } = req.params;
      const { gradeId } = req.query;
      const classes = await academicService.getClasses(schoolId, gradeId ? Number(gradeId) : undefined);
      res.status(HTTP_STATUS.OK).json({ success: true, data: classes });
    } catch (error) {
      console.error('Get classes error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to fetch classes' });
    }
  }

  async getClass(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const classData = await academicService.getClassById(Number(id));
      if (!classData) {
        res.status(HTTP_STATUS.NOT_FOUND).json({ success: false, error: 'Class not found' });
        return;
      }
      res.status(HTTP_STATUS.OK).json({ success: true, data: classData });
    } catch (error) {
      console.error('Get class error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to fetch class' });
    }
  }

  async createClass(req: Request, res: Response): Promise<void> {
    try {
      const classData = await academicService.createClass(req.body);
      res.status(HTTP_STATUS.CREATED).json({ success: true, data: classData });
    } catch (error) {
      console.error('Create class error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to create class' });
    }
  }

  async updateClass(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const classData = await academicService.updateClass(Number(id), req.body);
      res.status(HTTP_STATUS.OK).json({ success: true, data: classData });
    } catch (error) {
      console.error('Update class error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to update class' });
    }
  }

  async deleteClass(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      await academicService.deleteClass(Number(id));
      res.status(HTTP_STATUS.OK).json({ success: true, message: 'Class deleted' });
    } catch (error) {
      console.error('Delete class error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to delete class' });
    }
  }

  // ============= Subjects =============
  async getSubjects(req: Request, res: Response): Promise<void> {
    try {
      const { schoolId } = req.params;
      const { gradeId } = req.query;
      const subjects = await academicService.getSubjects(schoolId, gradeId ? Number(gradeId) : undefined);
      res.status(HTTP_STATUS.OK).json({ success: true, data: subjects });
    } catch (error) {
      console.error('Get subjects error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to fetch subjects' });
    }
  }

  async createSubject(req: Request, res: Response): Promise<void> {
    try {
      const subject = await academicService.createSubject(req.body);
      res.status(HTTP_STATUS.CREATED).json({ success: true, data: subject });
    } catch (error) {
      console.error('Create subject error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to create subject' });
    }
  }

  async updateSubject(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const subject = await academicService.updateSubject(Number(id), req.body);
      res.status(HTTP_STATUS.OK).json({ success: true, data: subject });
    } catch (error) {
      console.error('Update subject error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to update subject' });
    }
  }

  async deleteSubject(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      await academicService.deleteSubject(Number(id));
      res.status(HTTP_STATUS.OK).json({ success: true, message: 'Subject deleted' });
    } catch (error) {
      console.error('Delete subject error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to delete subject' });
    }
  }

  // ============= Lessons =============
  async getLessons(req: Request, res: Response): Promise<void> {
    try {
      const { schoolId } = req.params;
      const { classId, teacherId } = req.query;
      const lessons = await academicService.getLessons(
        schoolId,
        classId ? Number(classId) : undefined,
        teacherId as string
      );
      res.status(HTTP_STATUS.OK).json({ success: true, data: lessons });
    } catch (error) {
      console.error('Get lessons error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to fetch lessons' });
    }
  }

  async createLesson(req: Request, res: Response): Promise<void> {
    try {
      const lesson = await academicService.createLesson(req.body);
      res.status(HTTP_STATUS.CREATED).json({ success: true, data: lesson });
    } catch (error) {
      console.error('Create lesson error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to create lesson' });
    }
  }

  async updateLesson(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const lesson = await academicService.updateLesson(Number(id), req.body);
      res.status(HTTP_STATUS.OK).json({ success: true, data: lesson });
    } catch (error) {
      console.error('Update lesson error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to update lesson' });
    }
  }

  async deleteLesson(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      await academicService.deleteLesson(Number(id));
      res.status(HTTP_STATUS.OK).json({ success: true, message: 'Lesson deleted' });
    } catch (error) {
      console.error('Delete lesson error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to delete lesson' });
    }
  }

  // ============= Exams =============
  async getExams(req: Request, res: Response): Promise<void> {
    try {
      const { schoolId } = req.params;
      const { page, limit } = req.query;
      const result = await academicService.getExams(schoolId, Number(page) || 1, Number(limit) || 10);
      res.status(HTTP_STATUS.OK).json({ success: true, ...result });
    } catch (error) {
      console.error('Get exams error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to fetch exams' });
    }
  }

  async createExam(req: Request, res: Response): Promise<void> {
    try {
      const exam = await academicService.createExam(req.body);
      res.status(HTTP_STATUS.CREATED).json({ success: true, data: exam });
    } catch (error) {
      console.error('Create exam error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to create exam' });
    }
  }

  async updateExam(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const exam = await academicService.updateExam(Number(id), req.body);
      res.status(HTTP_STATUS.OK).json({ success: true, data: exam });
    } catch (error) {
      console.error('Update exam error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to update exam' });
    }
  }

  async deleteExam(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      await academicService.deleteExam(Number(id));
      res.status(HTTP_STATUS.OK).json({ success: true, message: 'Exam deleted' });
    } catch (error) {
      console.error('Delete exam error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to delete exam' });
    }
  }

  // ============= Results =============
  async getResults(req: Request, res: Response): Promise<void> {
    try {
      const { schoolId } = req.params;
      const { studentId, examId } = req.query;
      const results = await academicService.getResults(
        schoolId,
        studentId as string,
        examId ? Number(examId) : undefined
      );
      res.status(HTTP_STATUS.OK).json({ success: true, data: results });
    } catch (error) {
      console.error('Get results error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to fetch results' });
    }
  }

  async createResult(req: Request, res: Response): Promise<void> {
    try {
      const result = await academicService.createResult(req.body);
      res.status(HTTP_STATUS.CREATED).json({ success: true, data: result });
    } catch (error) {
      console.error('Create result error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to create result' });
    }
  }

  async updateResult(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const result = await academicService.updateResult(Number(id), req.body);
      res.status(HTTP_STATUS.OK).json({ success: true, data: result });
    } catch (error) {
      console.error('Update result error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to update result' });
    }
  }

  async deleteResult(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      await academicService.deleteResult(Number(id));
      res.status(HTTP_STATUS.OK).json({ success: true, message: 'Result deleted' });
    } catch (error) {
      console.error('Delete result error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to delete result' });
    }
  }

  // ============= Assignments =============
  async getAssignments(req: Request, res: Response): Promise<void> {
    try {
      const { schoolId } = req.params;
      const { lessonId } = req.query;
      const assignments = await academicService.getAssignments(schoolId, lessonId ? Number(lessonId) : undefined);
      res.status(HTTP_STATUS.OK).json({ success: true, data: assignments });
    } catch (error) {
      console.error('Get assignments error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to fetch assignments' });
    }
  }

  async createAssignment(req: Request, res: Response): Promise<void> {
    try {
      const assignment = await academicService.createAssignment(req.body);
      res.status(HTTP_STATUS.CREATED).json({ success: true, data: assignment });
    } catch (error) {
      console.error('Create assignment error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to create assignment' });
    }
  }

  async updateAssignment(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const assignment = await academicService.updateAssignment(Number(id), req.body);
      res.status(HTTP_STATUS.OK).json({ success: true, data: assignment });
    } catch (error) {
      console.error('Update assignment error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to update assignment' });
    }
  }

  async deleteAssignment(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      await academicService.deleteAssignment(Number(id));
      res.status(HTTP_STATUS.OK).json({ success: true, message: 'Assignment deleted' });
    } catch (error) {
      console.error('Delete assignment error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to delete assignment' });
    }
  }

  // ============= Events =============
  async getEvents(req: Request, res: Response): Promise<void> {
    try {
      const { schoolId } = req.params;
      const { classId } = req.query;
      const events = await academicService.getEvents(schoolId, classId ? Number(classId) : undefined);
      res.status(HTTP_STATUS.OK).json({ success: true, data: events });
    } catch (error) {
      console.error('Get events error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to fetch events' });
    }
  }

  async createEvent(req: Request, res: Response): Promise<void> {
    try {
      const event = await academicService.createEvent(req.body);
      res.status(HTTP_STATUS.CREATED).json({ success: true, data: event });
    } catch (error) {
      console.error('Create event error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to create event' });
    }
  }

  async updateEvent(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const event = await academicService.updateEvent(Number(id), req.body);
      res.status(HTTP_STATUS.OK).json({ success: true, data: event });
    } catch (error) {
      console.error('Update event error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to update event' });
    }
  }

  async deleteEvent(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      await academicService.deleteEvent(Number(id));
      res.status(HTTP_STATUS.OK).json({ success: true, message: 'Event deleted' });
    } catch (error) {
      console.error('Delete event error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to delete event' });
    }
  }

  // ============= Announcements =============
  async getAnnouncements(req: Request, res: Response): Promise<void> {
    try {
      const { schoolId } = req.params;
      const { classId } = req.query;
      const announcements = await academicService.getAnnouncements(schoolId, classId ? Number(classId) : undefined);
      res.status(HTTP_STATUS.OK).json({ success: true, data: announcements });
    } catch (error) {
      console.error('Get announcements error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to fetch announcements' });
    }
  }

  async createAnnouncement(req: Request, res: Response): Promise<void> {
    try {
      const announcement = await academicService.createAnnouncement(req.body);
      res.status(HTTP_STATUS.CREATED).json({ success: true, data: announcement });
    } catch (error) {
      console.error('Create announcement error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to create announcement' });
    }
  }

  async updateAnnouncement(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const announcement = await academicService.updateAnnouncement(Number(id), req.body);
      res.status(HTTP_STATUS.OK).json({ success: true, data: announcement });
    } catch (error) {
      console.error('Update announcement error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to update announcement' });
    }
  }

  async deleteAnnouncement(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      await academicService.deleteAnnouncement(Number(id));
      res.status(HTTP_STATUS.OK).json({ success: true, message: 'Announcement deleted' });
    } catch (error) {
      console.error('Delete announcement error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to delete announcement' });
    }
  }
}

export const academicController = new AcademicController();
