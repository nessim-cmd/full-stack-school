import { Request, Response } from 'express';
import { applicationService } from '../services/application.service';
import { RequestStatus, UserSex } from '@prisma/client';

export class ApplicationController {
  async getApplications(req: Request, res: Response) {
    try {
      const { schoolId, status } = req.query;
      const applications = await applicationService.getApplications(
        schoolId as string,
        status as RequestStatus
      );
      res.json(applications);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch applications' });
    }
  }

  async getApplicationById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const application = await applicationService.getApplicationById(parseInt(id));
      if (!application) {
        res.status(404).json({ error: 'Application not found' });
        return;
      }
      res.json(application);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch application' });
    }
  }

  async createApplication(req: Request, res: Response) {
    try {
      const {
        studentName,
        studentSurname,
        studentEmail,
        studentPhone,
        studentAddress,
        studentBloodType,
        studentSex,
        studentBirthday,
        gradeId,
        parentName,
        parentSurname,
        parentEmail,
        parentPhone,
        parentAddress,
        schoolId,
        notes,
      } = req.body;

      const application = await applicationService.createApplication({
        studentName,
        studentSurname,
        studentEmail,
        studentPhone,
        studentAddress,
        studentBloodType,
        studentSex: studentSex as UserSex,
        studentBirthday: new Date(studentBirthday),
        gradeId: parseInt(gradeId),
        parentName,
        parentSurname,
        parentEmail,
        parentPhone,
        parentAddress,
        schoolId,
        notes,
      });
      res.status(201).json(application);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create application' });
    }
  }

  async updateApplicationStatus(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { status } = req.body;
      const application = await applicationService.updateApplicationStatus(
        parseInt(id),
        status as RequestStatus
      );
      res.json(application);
    } catch (error) {
      res.status(500).json({ error: 'Failed to update application status' });
    }
  }

  async deleteApplication(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await applicationService.deleteApplication(parseInt(id));
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete application' });
    }
  }

  async getApplicationsBySchool(req: Request, res: Response) {
    try {
      const { schoolId } = req.params;
      const applications = await applicationService.getApplicationsBySchool(schoolId);
      res.json(applications);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch applications' });
    }
  }
}

export const applicationController = new ApplicationController();
