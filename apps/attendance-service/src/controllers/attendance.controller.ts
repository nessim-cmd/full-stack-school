import { Request, Response } from 'express';
import { attendanceService } from '../services/attendance.service';

export class AttendanceController {
  async getAttendance(req: Request, res: Response) {
    try {
      const { schoolId, studentId, lessonId, date } = req.query;
      const attendance = await attendanceService.getAttendance(
        schoolId as string,
        {
          studentId: studentId as string,
          lessonId: lessonId ? parseInt(lessonId as string) : undefined,
          date: date ? new Date(date as string) : undefined,
        }
      );
      res.json(attendance);
    } catch (error) {
      console.error('Error getting attendance:', error);
      res.status(500).json({ error: 'Failed to get attendance' });
    }
  }

  async getAttendanceById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const attendance = await attendanceService.getAttendanceById(parseInt(id));
      if (!attendance) {
        res.status(404).json({ error: 'Attendance record not found' });
        return;
      }
      res.json(attendance);
    } catch (error) {
      console.error('Error getting attendance:', error);
      res.status(500).json({ error: 'Failed to get attendance' });
    }
  }

  async markAttendance(req: Request, res: Response) {
    try {
      const { studentId, lessonId, date, present, schoolId } = req.body;
      const attendance = await attendanceService.markAttendance({
        studentId,
        lessonId: parseInt(lessonId),
        date: new Date(date),
        present,
        schoolId,
      });
      res.status(201).json(attendance);
    } catch (error) {
      console.error('Error marking attendance:', error);
      res.status(500).json({ error: 'Failed to mark attendance' });
    }
  }

  async markBulkAttendance(req: Request, res: Response) {
    try {
      const { records, lessonId, date, schoolId } = req.body;
      const parsedRecords = records.map((r: any) => ({
        studentId: r.studentId,
        present: r.present,
      }));
      const results = await attendanceService.markBulkAttendance(
        parsedRecords,
        parseInt(lessonId),
        new Date(date),
        schoolId
      );
      res.status(201).json(results);
    } catch (error) {
      console.error('Error marking bulk attendance:', error);
      res.status(500).json({ error: 'Failed to mark bulk attendance' });
    }
  }

  async getAttendanceByStudent(req: Request, res: Response) {
    try {
      const { studentId } = req.params;
      const attendance = await attendanceService.getAttendanceByStudent(studentId);
      res.json(attendance);
    } catch (error) {
      console.error('Error getting student attendance:', error);
      res.status(500).json({ error: 'Failed to get student attendance' });
    }
  }

  async getAttendanceByLesson(req: Request, res: Response) {
    try {
      const { lessonId } = req.params;
      const { date } = req.query;
      const attendance = await attendanceService.getAttendanceByLesson(
        parseInt(lessonId),
        date ? new Date(date as string) : undefined
      );
      res.json(attendance);
    } catch (error) {
      console.error('Error getting lesson attendance:', error);
      res.status(500).json({ error: 'Failed to get lesson attendance' });
    }
  }

  async getAttendanceStats(req: Request, res: Response) {
    try {
      const { schoolId } = req.params;
      const { startDate, endDate } = req.query;
      const dateRange = startDate && endDate
        ? { start: new Date(startDate as string), end: new Date(endDate as string) }
        : undefined;
      const stats = await attendanceService.getAttendanceStats(schoolId, dateRange);
      res.json(stats);
    } catch (error) {
      console.error('Error getting attendance stats:', error);
      res.status(500).json({ error: 'Failed to get attendance stats' });
    }
  }

  async deleteAttendance(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await attendanceService.deleteAttendance(parseInt(id));
      res.status(204).send();
    } catch (error) {
      console.error('Error deleting attendance:', error);
      res.status(500).json({ error: 'Failed to delete attendance' });
    }
  }
}

export const attendanceController = new AttendanceController();
