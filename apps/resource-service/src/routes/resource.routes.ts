import { Router } from 'express';
import { resourceController } from '../controllers/resource.controller';

const router = Router();

// Resources
router.get('/schools/:schoolId/resources', resourceController.getResources.bind(resourceController));
router.post('/resources', resourceController.createResource.bind(resourceController));
router.put('/resources/:id', resourceController.updateResource.bind(resourceController));
router.post('/resources/:id/download', resourceController.downloadResource.bind(resourceController));
router.delete('/resources/:id', resourceController.deleteResource.bind(resourceController));

// Library Books
router.get('/schools/:schoolId/books', resourceController.getBooks.bind(resourceController));
router.get('/books/:id', resourceController.getBook.bind(resourceController));
router.post('/books', resourceController.createBook.bind(resourceController));
router.put('/books/:id', resourceController.updateBook.bind(resourceController));
router.delete('/books/:id', resourceController.deleteBook.bind(resourceController));

// Book Borrowings
router.get('/schools/:schoolId/borrowings', resourceController.getBorrowings.bind(resourceController));
router.post('/borrowings', resourceController.borrowBook.bind(resourceController));
router.post('/borrowings/:id/return', resourceController.returnBook.bind(resourceController));

// Equipment
router.get('/schools/:schoolId/equipment', resourceController.getEquipment.bind(resourceController));
router.post('/equipment', resourceController.createEquipment.bind(resourceController));
router.put('/equipment/:id', resourceController.updateEquipment.bind(resourceController));
router.delete('/equipment/:id', resourceController.deleteEquipment.bind(resourceController));

export default router;
