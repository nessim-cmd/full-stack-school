import { Request, Response } from 'express';
import { schoolService } from '../services/school.service';
import { PlanType, SubscriptionStatus } from '@prisma/client';

export class SchoolController {
  async getSchools(req: Request, res: Response) {
    try {
      const { planType, status } = req.query;
      const schools = await schoolService.getSchools({
        subscriptionStatus: status as SubscriptionStatus,
        planType: planType as PlanType,
      });
      res.json(schools);
    } catch (error) {
      console.error('Error getting schools:', error);
      res.status(500).json({ error: 'Failed to get schools' });
    }
  }

  async getSchoolById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const school = await schoolService.getSchoolById(id);
      if (!school) {
        res.status(404).json({ error: 'School not found' });
        return;
      }
      res.json(school);
    } catch (error) {
      console.error('Error getting school:', error);
      res.status(500).json({ error: 'Failed to get school' });
    }
  }

  async getSchoolBySlug(req: Request, res: Response) {
    try {
      const { slug } = req.params;
      const school = await schoolService.getSchoolBySlug(slug);
      if (!school) {
        res.status(404).json({ error: 'School not found' });
        return;
      }
      res.json(school);
    } catch (error) {
      console.error('Error getting school by slug:', error);
      res.status(500).json({ error: 'Failed to get school' });
    }
  }

  async createSchool(req: Request, res: Response) {
    try {
      const { name, slug, address, phone, email, logo, planType } = req.body;
      
      const isAvailable = await schoolService.isSlugAvailable(slug);
      if (!isAvailable) {
        res.status(400).json({ error: 'Slug is already taken' });
        return;
      }
      
      const school = await schoolService.createSchool({
        name,
        slug,
        address,
        phone,
        email,
        logo,
        planType,
      });
      res.status(201).json(school);
    } catch (error) {
      console.error('Error creating school:', error);
      res.status(500).json({ error: 'Failed to create school' });
    }
  }

  async updateSchool(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { name, slug, address, phone, email, logo, planType, subscriptionStatus, subscriptionEndDate } = req.body;
      
      if (slug) {
        const isAvailable = await schoolService.isSlugAvailable(slug, id);
        if (!isAvailable) {
          res.status(400).json({ error: 'Slug is already taken' });
          return;
        }
      }
      
      const school = await schoolService.updateSchool(id, {
        name,
        slug,
        address,
        phone,
        email,
        logo,
        plan: planType,
        subscriptionStatus: subscriptionStatus as SubscriptionStatus,
        subscriptionEndsAt: subscriptionEndDate ? new Date(subscriptionEndDate) : undefined,
      });
      res.json(school);
    } catch (error) {
      console.error('Error updating school:', error);
      res.status(500).json({ error: 'Failed to update school' });
    }
  }

  async deleteSchool(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await schoolService.deleteSchool(id);
      res.status(204).send();
    } catch (error) {
      console.error('Error deleting school:', error);
      res.status(500).json({ error: 'Failed to delete school' });
    }
  }

  async checkSlugAvailability(req: Request, res: Response) {
    try {
      const { slug } = req.params;
      const { excludeId } = req.query;
      const isAvailable = await schoolService.isSlugAvailable(slug, excludeId as string);
      res.json({ available: isAvailable });
    } catch (error) {
      console.error('Error checking slug:', error);
      res.status(500).json({ error: 'Failed to check slug availability' });
    }
  }

  async getSchoolStats(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const stats = await schoolService.getSchoolStats(id);
      res.json(stats);
    } catch (error) {
      console.error('Error getting school stats:', error);
      res.status(500).json({ error: 'Failed to get school stats' });
    }
  }

  async getSchoolManagers(req: Request, res: Response) {
    try {
      const managers = await schoolService.getSchoolManagers();
      res.json(managers);
    } catch (error) {
      console.error('Error getting school managers:', error);
      res.status(500).json({ error: 'Failed to get school managers' });
    }
  }

  async getSchoolManagerById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const manager = await schoolService.getSchoolManagerById(id);
      if (!manager) {
        res.status(404).json({ error: 'Manager not found' });
        return;
      }
      res.json(manager);
    } catch (error) {
      console.error('Error getting school manager:', error);
      res.status(500).json({ error: 'Failed to get school manager' });
    }
  }
}

export const schoolController = new SchoolController();
