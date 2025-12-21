import prisma from '../lib/prisma';

export class EventService {
  // ============= Events =============
  async getEvents(
    schoolId: string,
    page: number = 1,
    limit: number = 20,
    filters?: {
      startDate?: Date;
      endDate?: Date;
      type?: string;
      classId?: number;
    }
  ) {
    const skip = (page - 1) * limit;

    const where: any = { schoolId };

    if (filters?.startDate && filters?.endDate) {
      where.OR = [
        {
          startDate: { gte: filters.startDate, lte: filters.endDate },
        },
        {
          endDate: { gte: filters.startDate, lte: filters.endDate },
        },
      ];
    }

    if (filters?.type) {
      where.type = filters.type;
    }

    if (filters?.classId) {
      where.classId = filters.classId;
    }

    const [events, total] = await Promise.all([
      prisma.event.findMany({
        where,
        include: {
          attendees: true,
        },
        skip,
        take: limit,
        orderBy: { startDate: 'asc' },
      }),
      prisma.event.count({ where }),
    ]);

    return {
      events,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  async getEventById(id: string) {
    return prisma.event.findUnique({
      where: { id },
      include: {
        attendees: true,
      },
    });
  }

  async createEvent(data: any) {
    return prisma.event.create({
      data: {
        ...data,
        startDate: new Date(data.startDate),
        endDate: new Date(data.endDate),
      },
      include: {
        attendees: true,
      },
    });
  }

  async updateEvent(id: string, data: any) {
    const updateData: any = { ...data };
    if (data.startDate) updateData.startDate = new Date(data.startDate);
    if (data.endDate) updateData.endDate = new Date(data.endDate);

    return prisma.event.update({
      where: { id },
      data: updateData,
      include: {
        attendees: true,
      },
    });
  }

  async deleteEvent(id: string) {
    return prisma.event.delete({
      where: { id },
    });
  }

  // ============= Event Attendees =============
  async addAttendee(eventId: string, userId: string, userType: string) {
    return prisma.eventAttendee.create({
      data: {
        eventId,
        userId,
        userType,
      },
    });
  }

  async updateAttendeeStatus(eventId: string, userId: string, status: 'PENDING' | 'ACCEPTED' | 'DECLINED') {
    return prisma.eventAttendee.update({
      where: {
        eventId_userId: { eventId, userId },
      },
      data: { status },
    });
  }

  async removeAttendee(eventId: string, userId: string) {
    return prisma.eventAttendee.delete({
      where: {
        eventId_userId: { eventId, userId },
      },
    });
  }

  // ============= Holidays =============
  async getHolidays(schoolId: string, year?: number) {
    const where: any = { schoolId };

    if (year) {
      where.date = {
        gte: new Date(`${year}-01-01`),
        lt: new Date(`${year + 1}-01-01`),
      };
    }

    return prisma.holiday.findMany({
      where,
      orderBy: { date: 'asc' },
    });
  }

  async createHoliday(data: any) {
    return prisma.holiday.create({
      data: {
        ...data,
        date: new Date(data.date),
        endDate: data.endDate ? new Date(data.endDate) : null,
      },
    });
  }

  async updateHoliday(id: string, data: any) {
    const updateData: any = { ...data };
    if (data.date) updateData.date = new Date(data.date);
    if (data.endDate) updateData.endDate = new Date(data.endDate);

    return prisma.holiday.update({
      where: { id },
      data: updateData,
    });
  }

  async deleteHoliday(id: string) {
    return prisma.holiday.delete({
      where: { id },
    });
  }

  // ============= Academic Calendar =============
  async getAcademicCalendar(schoolId: string) {
    return prisma.academicCalendar.findUnique({
      where: { schoolId },
      include: {
        terms: {
          orderBy: { startDate: 'asc' },
        },
      },
    });
  }

  async createAcademicCalendar(data: any) {
    return prisma.academicCalendar.create({
      data: {
        schoolId: data.schoolId,
        academicYear: data.academicYear,
        startDate: new Date(data.startDate),
        endDate: new Date(data.endDate),
        terms: data.terms ? {
          create: data.terms.map((term: any) => ({
            name: term.name,
            startDate: new Date(term.startDate),
            endDate: new Date(term.endDate),
          })),
        } : undefined,
      },
      include: {
        terms: true,
      },
    });
  }

  async updateAcademicCalendar(id: string, data: any) {
    const updateData: any = { ...data };
    if (data.startDate) updateData.startDate = new Date(data.startDate);
    if (data.endDate) updateData.endDate = new Date(data.endDate);

    return prisma.academicCalendar.update({
      where: { id },
      data: updateData,
      include: {
        terms: true,
      },
    });
  }

  async addTerm(calendarId: string, data: any) {
    return prisma.term.create({
      data: {
        calendarId,
        name: data.name,
        startDate: new Date(data.startDate),
        endDate: new Date(data.endDate),
      },
    });
  }

  async updateTerm(id: string, data: any) {
    const updateData: any = { ...data };
    if (data.startDate) updateData.startDate = new Date(data.startDate);
    if (data.endDate) updateData.endDate = new Date(data.endDate);

    return prisma.term.update({
      where: { id },
      data: updateData,
    });
  }

  async deleteTerm(id: string) {
    return prisma.term.delete({
      where: { id },
    });
  }

  // ============= Upcoming Events =============
  async getUpcomingEvents(schoolId: string, days: number = 7) {
    const now = new Date();
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + days);

    return prisma.event.findMany({
      where: {
        schoolId,
        startDate: {
          gte: now,
          lte: endDate,
        },
      },
      include: {
        attendees: true,
      },
      orderBy: { startDate: 'asc' },
    });
  }
}

export const eventService = new EventService();
