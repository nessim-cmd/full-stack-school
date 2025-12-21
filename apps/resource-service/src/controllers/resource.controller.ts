import { Request, Response } from 'express';
import { resourceService } from '../services/resource.service';
import { HTTP_STATUS } from '@workspace/shared/constants';

export class ResourceController {
  // ============= Resources =============
  async getResources(req: Request, res: Response): Promise<void> {
    try {
      const { schoolId } = req.params;
      const { category, subjectId, gradeId, page, limit } = req.query;
      const result = await resourceService.getResources(
        schoolId,
        category as string,
        subjectId ? Number(subjectId) : undefined,
        gradeId ? Number(gradeId) : undefined,
        Number(page) || 1,
        Number(limit) || 20
      );
      res.status(HTTP_STATUS.OK).json({ success: true, ...result });
    } catch (error) {
      console.error('Get resources error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to fetch resources' });
    }
  }

  async createResource(req: Request, res: Response): Promise<void> {
    try {
      const resource = await resourceService.createResource(req.body);
      res.status(HTTP_STATUS.CREATED).json({ success: true, data: resource });
    } catch (error) {
      console.error('Create resource error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to create resource' });
    }
  }

  async updateResource(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const resource = await resourceService.updateResource(Number(id), req.body);
      res.status(HTTP_STATUS.OK).json({ success: true, data: resource });
    } catch (error) {
      console.error('Update resource error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to update resource' });
    }
  }

  async deleteResource(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      await resourceService.deleteResource(Number(id));
      res.status(HTTP_STATUS.OK).json({ success: true, message: 'Resource deleted' });
    } catch (error) {
      console.error('Delete resource error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to delete resource' });
    }
  }

  async downloadResource(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const resource = await resourceService.incrementDownloads(Number(id));
      res.status(HTTP_STATUS.OK).json({ success: true, data: resource });
    } catch (error) {
      console.error('Download resource error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to process download' });
    }
  }

  // ============= Library =============
  async getBooks(req: Request, res: Response): Promise<void> {
    try {
      const { schoolId } = req.params;
      const { category, search, page, limit } = req.query;
      const result = await resourceService.getBooks(
        schoolId,
        category as string,
        search as string,
        Number(page) || 1,
        Number(limit) || 20
      );
      res.status(HTTP_STATUS.OK).json({ success: true, ...result });
    } catch (error) {
      console.error('Get books error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to fetch books' });
    }
  }

  async getBook(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const book = await resourceService.getBookById(Number(id));
      if (!book) {
        res.status(HTTP_STATUS.NOT_FOUND).json({ success: false, error: 'Book not found' });
        return;
      }
      res.status(HTTP_STATUS.OK).json({ success: true, data: book });
    } catch (error) {
      console.error('Get book error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to fetch book' });
    }
  }

  async createBook(req: Request, res: Response): Promise<void> {
    try {
      const book = await resourceService.createBook(req.body);
      res.status(HTTP_STATUS.CREATED).json({ success: true, data: book });
    } catch (error) {
      console.error('Create book error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to create book' });
    }
  }

  async updateBook(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const book = await resourceService.updateBook(Number(id), req.body);
      res.status(HTTP_STATUS.OK).json({ success: true, data: book });
    } catch (error) {
      console.error('Update book error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to update book' });
    }
  }

  async deleteBook(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      await resourceService.deleteBook(Number(id));
      res.status(HTTP_STATUS.OK).json({ success: true, message: 'Book deleted' });
    } catch (error) {
      console.error('Delete book error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to delete book' });
    }
  }

  async borrowBook(req: Request, res: Response): Promise<void> {
    try {
      const { bookId, studentId, studentName, schoolId, dueDate } = req.body;
      const borrowing = await resourceService.borrowBook(
        Number(bookId),
        studentId,
        studentName,
        schoolId,
        new Date(dueDate)
      );
      res.status(HTTP_STATUS.CREATED).json({ success: true, data: borrowing });
    } catch (error: any) {
      console.error('Borrow book error:', error);
      res.status(HTTP_STATUS.BAD_REQUEST).json({ success: false, error: error.message || 'Failed to borrow book' });
    }
  }

  async returnBook(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const borrowing = await resourceService.returnBook(Number(id));
      res.status(HTTP_STATUS.OK).json({ success: true, data: borrowing });
    } catch (error: any) {
      console.error('Return book error:', error);
      res.status(HTTP_STATUS.BAD_REQUEST).json({ success: false, error: error.message || 'Failed to return book' });
    }
  }

  async getBorrowings(req: Request, res: Response): Promise<void> {
    try {
      const { schoolId } = req.params;
      const { studentId, status, page, limit } = req.query;
      const result = await resourceService.getBorrowings(
        schoolId,
        studentId as string,
        status as string,
        Number(page) || 1,
        Number(limit) || 20
      );
      res.status(HTTP_STATUS.OK).json({ success: true, ...result });
    } catch (error) {
      console.error('Get borrowings error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to fetch borrowings' });
    }
  }

  // ============= Equipment =============
  async getEquipment(req: Request, res: Response): Promise<void> {
    try {
      const { schoolId } = req.params;
      const { category, condition } = req.query;
      const equipment = await resourceService.getEquipment(schoolId, category as string, condition as string);
      res.status(HTTP_STATUS.OK).json({ success: true, data: equipment });
    } catch (error) {
      console.error('Get equipment error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to fetch equipment' });
    }
  }

  async createEquipment(req: Request, res: Response): Promise<void> {
    try {
      const equipment = await resourceService.createEquipment(req.body);
      res.status(HTTP_STATUS.CREATED).json({ success: true, data: equipment });
    } catch (error) {
      console.error('Create equipment error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to create equipment' });
    }
  }

  async updateEquipment(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const equipment = await resourceService.updateEquipment(Number(id), req.body);
      res.status(HTTP_STATUS.OK).json({ success: true, data: equipment });
    } catch (error) {
      console.error('Update equipment error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to update equipment' });
    }
  }

  async deleteEquipment(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      await resourceService.deleteEquipment(Number(id));
      res.status(HTTP_STATUS.OK).json({ success: true, message: 'Equipment deleted' });
    } catch (error) {
      console.error('Delete equipment error:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: 'Failed to delete equipment' });
    }
  }
}

export const resourceController = new ResourceController();
