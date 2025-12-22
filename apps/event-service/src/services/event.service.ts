import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class EventService {
  async getEvents(schoolId: string, filters?: { classId?: number; startDate?: Date; endDate?: Date }) {
    const where: any = { schoolId };
    if (filters?.classId) where.classId = filters.classId;
    if (filters?.startDate && filters?.endDate) {
      where.startTime = {
        gte: filters.startDate,
        lte: filters.endDate,
      };
    }
    
    return prisma.event.findMany({
      where,
      include: { class: true },
      orderBy: { startTime: 'asc' },
    });
  }

  async getEventById(id: number) {
    return prisma.event.findUnique({
      where: { id },
      include: { class: true },
    });
  }

  async createEvent(data: {
    title: string;
    description: string;
    startTime: Date;
    endTime: Date;
    classId?: number;
    schoolId: string;
  }) {
    return prisma.event.create({ data });
  }

  async updateEvent(id: number, data: {
    title?: string;
    description?: string;
    startTime?: Date;
    endTime?: Date;
    classId?: number;
  }) {
    return prisma.event.update({ where: { id }, data });
  }

  async deleteEvent(id: number) {
    return prisma.event.delete({ where: { id } });
  }

  async getUpcomingEvents(schoolId: string, limit?: number) {
    return prisma.event.findMany({
      where: {
        schoolId,
        startTime: { gte: new Date() },
      },
      include: { class: true },
      orderBy: { startTime: 'asc' },
      take: limit || 10,
    });
  }

  async getEventsByClass(classId: number) {
    return prisma.event.findMany({
      where: { classId },
      orderBy: { startTime: 'asc' },
    });
  }

  async getEventsForMonth(schoolId: string, year: number, month: number) {
    const startDate = new Date(year, month - 1, 1);
    const endDate = new Date(year, month, 0);
    
    return prisma.event.findMany({
      where: {
        schoolId,
        startTime: {
          gte: startDate,
          lte: endDate,
        },
      },
      include: { class: true },
      orderBy: { startTime: 'asc' },
    });
  }
}

export const eventService = new EventService();
