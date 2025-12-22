import { Request, Response } from 'express';
import { resourceService } from '../services/resource.service';

export class ResourceController {
  async getResources(req: Request, res: Response) {
    try {
      const { schoolId, lessonId } = req.query;
      const resources = await resourceService.getResources(
        schoolId as string,
        lessonId ? parseInt(lessonId as string) : undefined
      );
      res.json(resources);
    } catch (error) {
      console.error('Error getting resources:', error);
      res.status(500).json({ error: 'Failed to get resources' });
    }
  }

  async getResourceById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const resource = await resourceService.getResourceById(parseInt(id));
      if (!resource) {
        return res.status(404).json({ error: 'Resource not found' });
      }
      res.json(resource);
    } catch (error) {
      console.error('Error getting resource:', error);
      res.status(500).json({ error: 'Failed to get resource' });
    }
  }

  async createResource(req: Request, res: Response) {
    try {
      const { title, url, lessonId, assignmentId, schoolId } = req.body;
      const resource = await resourceService.createResource({
        title,
        url,
        lessonId: lessonId ? parseInt(lessonId) : undefined,
        assignmentId: assignmentId ? parseInt(assignmentId) : undefined,
        schoolId,
      });
      res.status(201).json(resource);
    } catch (error) {
      console.error('Error creating resource:', error);
      res.status(500).json({ error: 'Failed to create resource' });
    }
  }

  async updateResource(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { title, url } = req.body;
      const resource = await resourceService.updateResource(parseInt(id), { title, url });
      res.json(resource);
    } catch (error) {
      console.error('Error updating resource:', error);
      res.status(500).json({ error: 'Failed to update resource' });
    }
  }

  async deleteResource(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await resourceService.deleteResource(parseInt(id));
      res.status(204).send();
    } catch (error) {
      console.error('Error deleting resource:', error);
      res.status(500).json({ error: 'Failed to delete resource' });
    }
  }

  async getResourcesByLesson(req: Request, res: Response) {
    try {
      const { lessonId } = req.params;
      const resources = await resourceService.getResourcesByLesson(parseInt(lessonId));
      res.json(resources);
    } catch (error) {
      console.error('Error getting resources by lesson:', error);
      res.status(500).json({ error: 'Failed to get resources' });
    }
  }

  async searchResources(req: Request, res: Response) {
    try {
      const { schoolId, query } = req.query;
      const resources = await resourceService.searchResources(
        schoolId as string,
        query as string
      );
      res.json(resources);
    } catch (error) {
      console.error('Error searching resources:', error);
      res.status(500).json({ error: 'Failed to search resources' });
    }
  }
}

export const resourceController = new ResourceController();
