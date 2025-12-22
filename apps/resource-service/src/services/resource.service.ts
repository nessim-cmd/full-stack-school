import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class ResourceService {
  async getResources(schoolId: string, lessonId?: number) {
    const where: any = { schoolId };
    if (lessonId) where.lessonId = lessonId;
    
    return prisma.resource.findMany({
      where,
      include: { lesson: true },
      orderBy: { createdAt: 'desc' },
    });
  }

  async getResourceById(id: number) {
    return prisma.resource.findUnique({
      where: { id },
      include: { lesson: true },
    });
  }

  async createResource(data: { title: string; url: string; lessonId?: number; assignmentId?: number; schoolId: string }) {
    return prisma.resource.create({ data });
  }

  async updateResource(id: number, data: { title?: string; url?: string }) {
    return prisma.resource.update({ where: { id }, data });
  }

  async deleteResource(id: number) {
    return prisma.resource.delete({ where: { id } });
  }

  async getResourcesByLesson(lessonId: number) {
    return prisma.resource.findMany({
      where: { lessonId },
      orderBy: { createdAt: 'desc' },
    });
  }

  async searchResources(schoolId: string, query: string) {
    return prisma.resource.findMany({
      where: {
        schoolId,
        title: { contains: query, mode: 'insensitive' },
      },
      include: { lesson: true },
      orderBy: { createdAt: 'desc' },
      take: 50,
    });
  }
}

export const resourceService = new ResourceService();
