import { PrismaClient, TicketStatus, TicketPriority } from '@prisma/client';

const prisma = new PrismaClient();

export class SupportService {
  // Support Tickets - id is String UUID
  async getTickets(filters?: { status?: TicketStatus; priority?: TicketPriority; schoolId?: string }) {
    return prisma.supportTicket.findMany({
      where: {
        ...(filters?.status && { status: filters.status }),
        ...(filters?.priority && { priority: filters.priority }),
        ...(filters?.schoolId && { schoolId: filters.schoolId }),
      },
      include: {
        school: true,
        replies: {
          orderBy: { createdAt: 'asc' },
        },
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async getTicketById(id: string) {
    return prisma.supportTicket.findUnique({
      where: { id },
      include: {
        school: true,
        replies: {
          orderBy: { createdAt: 'asc' },
        },
      },
    });
  }

  async getTicketsBySchool(schoolId: string) {
    return prisma.supportTicket.findMany({
      where: { schoolId },
      include: {
        replies: {
          orderBy: { createdAt: 'asc' },
        },
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async createTicket(data: {
    subject: string;
    message: string;
    priority?: TicketPriority;
    schoolId: string;
  }) {
    return prisma.supportTicket.create({
      data: {
        subject: data.subject,
        message: data.message,
        priority: data.priority || 'MEDIUM',
        status: 'OPEN',
        schoolId: data.schoolId,
      },
      include: { school: true },
    });
  }

  async updateTicket(
    id: string,
    data: { status?: TicketStatus; priority?: TicketPriority }
  ) {
    return prisma.supportTicket.update({
      where: { id },
      data,
      include: { school: true },
    });
  }

  async closeTicket(id: string) {
    return prisma.supportTicket.update({
      where: { id },
      data: {
        status: 'CLOSED',
      },
    });
  }

  async deleteTicket(id: string) {
    await prisma.supportTicketReply.deleteMany({
      where: { ticketId: id },
    });
    return prisma.supportTicket.delete({
      where: { id },
    });
  }

  // Ticket Replies
  async getReplies(ticketId: string) {
    return prisma.supportTicketReply.findMany({
      where: { ticketId },
      orderBy: { createdAt: 'asc' },
    });
  }

  async createReply(data: {
    ticketId: string;
    message: string;
    isAdmin: boolean;
  }) {
    return prisma.supportTicketReply.create({
      data: {
        ticketId: data.ticketId,
        message: data.message,
        isAdmin: data.isAdmin,
      },
    });
  }

  // Dashboard Stats
  async getStats() {
    const [openTickets, inProgressTickets, closedTickets, highPriorityTickets] =
      await Promise.all([
        prisma.supportTicket.count({ where: { status: 'OPEN' } }),
        prisma.supportTicket.count({ where: { status: 'IN_PROGRESS' } }),
        prisma.supportTicket.count({ where: { status: 'CLOSED' } }),
        prisma.supportTicket.count({ where: { priority: 'HIGH' } }),
      ]);

    return {
      openTickets,
      inProgressTickets,
      closedTickets,
      highPriorityTickets,
      totalTickets: openTickets + inProgressTickets + closedTickets,
    };
  }
}

export const supportService = new SupportService();
