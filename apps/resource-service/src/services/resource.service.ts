import prisma from '../lib/prisma';

export class ResourceService {
  // ============= Resources =============
  async getResources(schoolId: string, category?: string, subjectId?: number, gradeId?: number, page = 1, limit = 20) {
    const skip = (page - 1) * limit;
    const where: any = { schoolId };
    if (category) where.category = category;
    if (subjectId) where.subjectId = subjectId;
    if (gradeId) where.gradeId = gradeId;
    
    const [resources, total] = await Promise.all([
      prisma.resource.findMany({
        where,
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' },
      }),
      prisma.resource.count({ where }),
    ]);
    
    return {
      data: resources,
      pagination: { page, limit, total, totalPages: Math.ceil(total / limit) },
    };
  }

  async createResource(data: {
    title: string;
    description?: string;
    type: string;
    url: string;
    size?: number;
    mimeType?: string;
    category: string;
    subjectId?: number;
    gradeId?: number;
    classId?: number;
    uploadedBy: string;
    uploaderName: string;
    schoolId: string;
    isPublic?: boolean;
  }) {
    return prisma.resource.create({ data });
  }

  async updateResource(id: number, data: any) {
    return prisma.resource.update({ where: { id }, data });
  }

  async deleteResource(id: number) {
    return prisma.resource.delete({ where: { id } });
  }

  async incrementDownloads(id: number) {
    return prisma.resource.update({
      where: { id },
      data: { downloads: { increment: 1 } },
    });
  }

  // ============= Library =============
  async getBooks(schoolId: string, category?: string, search?: string, page = 1, limit = 20) {
    const skip = (page - 1) * limit;
    const where: any = { schoolId };
    if (category) where.category = category;
    if (search) {
      where.OR = [
        { title: { contains: search, mode: 'insensitive' } },
        { author: { contains: search, mode: 'insensitive' } },
        { isbn: { contains: search, mode: 'insensitive' } },
      ];
    }
    
    const [books, total] = await Promise.all([
      prisma.libraryBook.findMany({
        where,
        skip,
        take: limit,
        orderBy: { title: 'asc' },
      }),
      prisma.libraryBook.count({ where }),
    ]);
    
    return {
      data: books,
      pagination: { page, limit, total, totalPages: Math.ceil(total / limit) },
    };
  }

  async getBookById(id: number) {
    return prisma.libraryBook.findUnique({
      where: { id },
      include: { borrowings: { where: { returnedAt: null } } },
    });
  }

  async createBook(data: {
    title: string;
    author: string;
    isbn?: string;
    publisher?: string;
    publishYear?: number;
    category: string;
    description?: string;
    coverImage?: string;
    totalCopies?: number;
    location?: string;
    schoolId: string;
  }) {
    return prisma.libraryBook.create({
      data: {
        ...data,
        availableCopies: data.totalCopies || 1,
      },
    });
  }

  async updateBook(id: number, data: any) {
    return prisma.libraryBook.update({ where: { id }, data });
  }

  async deleteBook(id: number) {
    return prisma.libraryBook.delete({ where: { id } });
  }

  async borrowBook(bookId: number, studentId: string, studentName: string, schoolId: string, dueDate: Date) {
    const book = await prisma.libraryBook.findUnique({ where: { id: bookId } });
    if (!book || book.availableCopies <= 0) {
      throw new Error('Book not available');
    }
    
    const [borrowing] = await prisma.$transaction([
      prisma.bookBorrowing.create({
        data: { bookId, studentId, studentName, dueDate, schoolId },
      }),
      prisma.libraryBook.update({
        where: { id: bookId },
        data: { availableCopies: { decrement: 1 } },
      }),
    ]);
    
    return borrowing;
  }

  async returnBook(borrowingId: number) {
    const borrowing = await prisma.bookBorrowing.findUnique({ where: { id: borrowingId } });
    if (!borrowing || borrowing.returnedAt) {
      throw new Error('Invalid borrowing record');
    }
    
    const [updatedBorrowing] = await prisma.$transaction([
      prisma.bookBorrowing.update({
        where: { id: borrowingId },
        data: { returnedAt: new Date(), status: 'RETURNED' },
      }),
      prisma.libraryBook.update({
        where: { id: borrowing.bookId },
        data: { availableCopies: { increment: 1 } },
      }),
    ]);
    
    return updatedBorrowing;
  }

  async getBorrowings(schoolId: string, studentId?: string, status?: string, page = 1, limit = 20) {
    const skip = (page - 1) * limit;
    const where: any = { schoolId };
    if (studentId) where.studentId = studentId;
    if (status) where.status = status;
    
    const [borrowings, total] = await Promise.all([
      prisma.bookBorrowing.findMany({
        where,
        skip,
        take: limit,
        include: { book: true },
        orderBy: { borrowedAt: 'desc' },
      }),
      prisma.bookBorrowing.count({ where }),
    ]);
    
    return {
      data: borrowings,
      pagination: { page, limit, total, totalPages: Math.ceil(total / limit) },
    };
  }

  // ============= Equipment =============
  async getEquipment(schoolId: string, category?: string, condition?: string) {
    const where: any = { schoolId };
    if (category) where.category = category;
    if (condition) where.condition = condition;
    
    return prisma.equipment.findMany({
      where,
      orderBy: { name: 'asc' },
    });
  }

  async createEquipment(data: {
    name: string;
    description?: string;
    category: string;
    serialNumber?: string;
    purchaseDate?: Date;
    condition?: string;
    location?: string;
    assignedTo?: string;
    schoolId: string;
  }) {
    return prisma.equipment.create({ data });
  }

  async updateEquipment(id: number, data: any) {
    return prisma.equipment.update({ where: { id }, data });
  }

  async deleteEquipment(id: number) {
    return prisma.equipment.delete({ where: { id } });
  }
}

export const resourceService = new ResourceService();
