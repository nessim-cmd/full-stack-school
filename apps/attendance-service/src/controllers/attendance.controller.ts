import { Request, Response } from 'express';
import { attendanceService } from '../services/attendance.service';
import { HTTP_STATUS } from '@workspace/shared/constants';

export class AttendanceController {
  async getAttendances(req: Request, res: Response): Promise<void> {
    try {
      const { schoolId } = req.params;
      const { studentId, lessonId, date, startDate, endDate } = req.query;
      
      const attendances = await attendanceService.getAttendances(
        schoolId,
        studentId as string,
        lessonId ? Number(lessonId) : undefined,
        date ? new Date(date as string) : undefined,
        startDate ? new Date(startDate as string) : undefined,
        endDate ? new Date(endDate as string) : undefined
      );
      
      res.status(HTTP_STATUS.OK).json({ success: true, data: attendances });
    } catch (error) {
      console.error('Get attendances error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to fetch attendances' });
    }
  }

  async getAttendance(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const attendance = await attendanceService.getAttendanceById(Number(id));
      
      if (!attendance) {
        res.status(HTTP_STATUS.NOT_FOUND).json({ success: false, error: 'Attendance not found' });
        return;
      }
      
      res.status(HTTP_STATUS.OK).json({ success: true, data: attendance });
    } catch (error) {
      console.error('Get attendance error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to fetch attendance' });
    }
  }

  async markAttendance(req: Request, res: Response): Promise<void> {
    try {
      const attendance = await attendanceService.markAttendance(req.body);
      res.status(HTTP_STATUS.CREATED).json({ success: true, data: attendance });
    } catch (error) {
      console.error('Mark attendance error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to mark attendance' });
    }
  }

  async markBulkAttendance(req: Request, res: Response): Promise<void> {
    try {
      const { records } = req.body;
      const attendances = await attendanceService.markBulkAttendance(records);
      res.status(HTTP_STATUS.CREATED).json({ success: true, data: attendances });
    } catch (error) {
      console.error('Mark bulk attendance error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to mark bulk attendance' });
    }
  }

  async deleteAttendance(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      await attendanceService.deleteAttendance(Number(id));
      res.status(HTTP_STATUS.OK).json({ success: true, message: 'Attendance deleted' });
    } catch (error) {
      console.error('Delete attendance error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to delete attendance' });
    }
  }

  async getStudentSummary(req: Request, res: Response): Promise<void> {
    try {
      const { studentId } = req.params;
      const { month, year } = req.query;
      
      const summary = await attendanceService.getStudentAttendanceSummary(
        studentId,
        month ? Number(month) : undefined,
        year ? Number(year) : undefined
      );
      
      res.status(HTTP_STATUS.OK).json({ success: true, data: summary });
    } catch (error) {
      console.error('Get student summary error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to fetch summary' });
    }
  }

  async getClassAttendance(req: Request, res: Response): Promise<void> {
    try {
      const { schoolId, lessonId } = req.params;
      const { date } = req.query;
      
      const attendances = await attendanceService.getClassAttendance(
        schoolId,
        Number(lessonId),
        new Date(date as string)
      );
      
      res.status(HTTP_STATUS.OK).json({ success: true, data: attendances });
    } catch (error) {
      console.error('Get class attendance error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to fetch class attendance' });
    }
  }

  async getStats(req: Request, res: Response): Promise<void> {
    try {
      const { schoolId } = req.params;
      const { startDate, endDate } = req.query;
      
      const stats = await attendanceService.getAttendanceStats(
        schoolId,
        new Date(startDate as string),
        new Date(endDate as string)
      );
      
      res.status(HTTP_STATUS.OK).json({ success: true, data: stats });
    } catch (error) {
      console.error('Get stats error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to fetch stats' });
    }
  }
}

export const attendanceController = new AttendanceController();
