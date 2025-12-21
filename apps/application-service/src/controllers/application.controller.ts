import { Request, Response } from 'express';
import { applicationService } from '../services/application.service';
import { HTTP_STATUS } from '@workspace/shared/constants';

export class ApplicationController {
  // ============= Applications =============
  async getApplications(req: Request, res: Response): Promise<void> {
    try {
      const { schoolId } = req.params;
      const { page, limit, status, gradeApplying, academicYear, search } = req.query;
      
      const result = await applicationService.getApplications(
        schoolId,
        Number(page) || 1,
        Number(limit) || 20,
        {
          status: status as string,
          gradeApplying: gradeApplying ? Number(gradeApplying) : undefined,
          academicYear: academicYear as string,
          search: search as string,
        }
      );
      
      res.status(HTTP_STATUS.OK).json({ success: true, ...result });
    } catch (error) {
      console.error('Get applications error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to fetch applications' });
    }
  }

  async getApplicationById(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const application = await applicationService.getApplicationById(id);
      
      if (!application) {
        res.status(HTTP_STATUS.NOT_FOUND).json({ success: false, error: 'Application not found' });
        return;
      }
      
      res.status(HTTP_STATUS.OK).json({ success: true, data: application });
    } catch (error) {
      console.error('Get application error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to fetch application' });
    }
  }

  async getApplicationByNo(req: Request, res: Response): Promise<void> {
    try {
      const { applicationNo } = req.params;
      const application = await applicationService.getApplicationByNo(applicationNo);
      
      if (!application) {
        res.status(HTTP_STATUS.NOT_FOUND).json({ success: false, error: 'Application not found' });
        return;
      }
      
      res.status(HTTP_STATUS.OK).json({ success: true, data: application });
    } catch (error) {
      console.error('Get application error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to fetch application' });
    }
  }

  async createApplication(req: Request, res: Response): Promise<void> {
    try {
      const application = await applicationService.createApplication(req.body);
      res.status(HTTP_STATUS.CREATED).json({ success: true, data: application });
    } catch (error) {
      console.error('Create application error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to create application' });
    }
  }

  async updateApplication(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const application = await applicationService.updateApplication(id, req.body);
      res.status(HTTP_STATUS.OK).json({ success: true, data: application });
    } catch (error) {
      console.error('Update application error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to update application' });
    }
  }

  async updateApplicationStatus(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const { status, reviewNotes } = req.body;
      const reviewedBy = (req as any).user?.id;
      
      const application = await applicationService.updateApplicationStatus(id, status, reviewedBy, reviewNotes);
      res.status(HTTP_STATUS.OK).json({ success: true, data: application });
    } catch (error) {
      console.error('Update application status error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to update application status' });
    }
  }

  async deleteApplication(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      await applicationService.deleteApplication(id);
      res.status(HTTP_STATUS.OK).json({ success: true, message: 'Application deleted successfully' });
    } catch (error) {
      console.error('Delete application error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to delete application' });
    }
  }

  // ============= Documents =============
  async addDocument(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const document = await applicationService.addDocument(id, req.body);
      res.status(HTTP_STATUS.CREATED).json({ success: true, data: document });
    } catch (error) {
      console.error('Add document error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to add document' });
    }
  }

  async deleteDocument(req: Request, res: Response): Promise<void> {
    try {
      const { docId } = req.params;
      await applicationService.deleteDocument(docId);
      res.status(HTTP_STATUS.OK).json({ success: true, message: 'Document deleted successfully' });
    } catch (error) {
      console.error('Delete document error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to delete document' });
    }
  }

  // ============= Admission Criteria =============
  async getAdmissionCriteria(req: Request, res: Response): Promise<void> {
    try {
      const { schoolId } = req.params;
      const criteria = await applicationService.getAdmissionCriteria(schoolId);
      res.status(HTTP_STATUS.OK).json({ success: true, data: criteria });
    } catch (error) {
      console.error('Get admission criteria error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to fetch admission criteria' });
    }
  }

  async createOrUpdateAdmissionCriteria(req: Request, res: Response): Promise<void> {
    try {
      const { schoolId } = req.params;
      const criteria = await applicationService.createOrUpdateAdmissionCriteria(schoolId, req.body);
      res.status(HTTP_STATUS.OK).json({ success: true, data: criteria });
    } catch (error) {
      console.error('Update admission criteria error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to update admission criteria' });
    }
  }

  // ============= Entrance Exams =============
  async scheduleEntranceExam(req: Request, res: Response): Promise<void> {
    try {
      const exam = await applicationService.scheduleEntranceExam(req.body);
      res.status(HTTP_STATUS.CREATED).json({ success: true, data: exam });
    } catch (error) {
      console.error('Schedule entrance exam error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to schedule entrance exam' });
    }
  }

  async getEntranceExam(req: Request, res: Response): Promise<void> {
    try {
      const { applicationId } = req.params;
      const exam = await applicationService.getEntranceExam(applicationId);
      res.status(HTTP_STATUS.OK).json({ success: true, data: exam });
    } catch (error) {
      console.error('Get entrance exam error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to fetch entrance exam' });
    }
  }

  async updateEntranceExamResult(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const exam = await applicationService.updateEntranceExamResult(id, req.body);
      res.status(HTTP_STATUS.OK).json({ success: true, data: exam });
    } catch (error) {
      console.error('Update entrance exam error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to update entrance exam' });
    }
  }

  // ============= Interviews =============
  async scheduleInterview(req: Request, res: Response): Promise<void> {
    try {
      const interview = await applicationService.scheduleInterview(req.body);
      res.status(HTTP_STATUS.CREATED).json({ success: true, data: interview });
    } catch (error) {
      console.error('Schedule interview error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to schedule interview' });
    }
  }

  async getInterview(req: Request, res: Response): Promise<void> {
    try {
      const { applicationId } = req.params;
      const interview = await applicationService.getInterview(applicationId);
      res.status(HTTP_STATUS.OK).json({ success: true, data: interview });
    } catch (error) {
      console.error('Get interview error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to fetch interview' });
    }
  }

  async updateInterviewResult(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const interview = await applicationService.updateInterviewResult(id, req.body);
      res.status(HTTP_STATUS.OK).json({ success: true, data: interview });
    } catch (error) {
      console.error('Update interview error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to update interview' });
    }
  }

  // ============= Admission =============
  async admitStudent(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const { studentId } = req.body;
      const application = await applicationService.admitStudent(id, studentId);
      res.status(HTTP_STATUS.OK).json({ success: true, data: application });
    } catch (error) {
      console.error('Admit student error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to admit student' });
    }
  }

  // ============= Statistics =============
  async getApplicationStats(req: Request, res: Response): Promise<void> {
    try {
      const { schoolId } = req.params;
      const { academicYear } = req.query;
      const stats = await applicationService.getApplicationStats(schoolId, academicYear as string);
      res.status(HTTP_STATUS.OK).json({ success: true, data: stats });
    } catch (error) {
      console.error('Get application stats error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to fetch application statistics' });
    }
  }
}

export const applicationController = new ApplicationController();
