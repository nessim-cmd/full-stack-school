import prisma from '../lib/prisma';

export class SupportService {
  // ============= Tickets =============
  async getTickets(
    page: number = 1,
    limit: number = 20,
    filters?: {
      schoolId?: string;
      userId?: string;
      status?: string;
      priority?: string;
      category?: string;
      assignedTo?: string;
      search?: string;
    }
  ) {
    const skip = (page - 1) * limit;

    const where: any = {};

    if (filters?.schoolId) {
      where.schoolId = filters.schoolId;
    }

    if (filters?.userId) {
      where.userId = filters.userId;
    }

    if (filters?.status) {
      where.status = filters.status;
    }

    if (filters?.priority) {
      where.priority = filters.priority;
    }

    if (filters?.category) {
      where.category = filters.category;
    }

    if (filters?.assignedTo) {
      where.assignedTo = filters.assignedTo;
    }

    if (filters?.search) {
      where.OR = [
        { subject: { contains: filters.search, mode: 'insensitive' } },
        { ticketNo: { contains: filters.search, mode: 'insensitive' } },
        { userName: { contains: filters.search, mode: 'insensitive' } },
      ];
    }

    const [tickets, total] = await Promise.all([
      prisma.supportTicket.findMany({
        where,
        include: {
          messages: {
            take: 1,
            orderBy: { createdAt: 'desc' },
          },
          _count: {
            select: { messages: true, attachments: true },
          },
        },
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' },
      }),
      prisma.supportTicket.count({ where }),
    ]);

    return {
      tickets,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  async getTicketById(id: string) {
    return prisma.supportTicket.findUnique({
      where: { id },
      include: {
        messages: {
          orderBy: { createdAt: 'asc' },
        },
        attachments: true,
      },
    });
  }

  async getTicketByNo(ticketNo: string) {
    return prisma.supportTicket.findUnique({
      where: { ticketNo },
      include: {
        messages: {
          orderBy: { createdAt: 'asc' },
        },
        attachments: true,
      },
    });
  }

  async createTicket(data: any) {
    const ticketNo = await this.generateTicketNo();
    
    return prisma.supportTicket.create({
      data: {
        ...data,
        ticketNo,
      },
      include: {
        messages: true,
        attachments: true,
      },
    });
  }

  async updateTicket(id: string, data: any) {
    return prisma.supportTicket.update({
      where: { id },
      data,
      include: {
        messages: true,
        attachments: true,
      },
    });
  }

  async assignTicket(id: string, assignedTo: string) {
    return prisma.supportTicket.update({
      where: { id },
      data: {
        assignedTo,
        assignedAt: new Date(),
        status: 'IN_PROGRESS',
      },
    });
  }

  async resolveTicket(id: string, resolution: string) {
    return prisma.supportTicket.update({
      where: { id },
      data: {
        status: 'RESOLVED',
        resolution,
        resolvedAt: new Date(),
      },
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

  async rateTicket(id: string, rating: number, feedback?: string) {
    return prisma.supportTicket.update({
      where: { id },
      data: {
        rating,
        feedback,
      },
    });
  }

  private async generateTicketNo(): Promise<string> {
    const today = new Date();
    const prefix = `TKT-${today.getFullYear()}${String(today.getMonth() + 1).padStart(2, '0')}`;
    
    const count = await prisma.supportTicket.count({
      where: {
        ticketNo: { startsWith: prefix },
      },
    });
    
    return `${prefix}-${String(count + 1).padStart(5, '0')}`;
  }

  // ============= Messages =============
  async addMessage(ticketId: string, data: any) {
    const message = await prisma.ticketMessage.create({
      data: {
        ticketId,
        ...data,
      },
    });

    // Update ticket status if waiting for customer and user replies
    if (data.senderType === 'user') {
      await prisma.supportTicket.update({
        where: { id: ticketId },
        data: { status: 'IN_PROGRESS' },
      });
    }

    return message;
  }

  // ============= Attachments =============
  async addAttachment(ticketId: string, data: any) {
    return prisma.ticketAttachment.create({
      data: {
        ticketId,
        ...data,
      },
    });
  }

  async deleteAttachment(id: string) {
    return prisma.ticketAttachment.delete({
      where: { id },
    });
  }

  // ============= Knowledge Base =============
  async getKnowledgeBaseArticles(
    page: number = 1,
    limit: number = 20,
    filters?: {
      category?: string;
      search?: string;
      isPublished?: boolean;
    }
  ) {
    const skip = (page - 1) * limit;

    const where: any = {};

    if (filters?.category) {
      where.category = filters.category;
    }

    if (filters?.isPublished !== undefined) {
      where.isPublished = filters.isPublished;
    }

    if (filters?.search) {
      where.OR = [
        { title: { contains: filters.search, mode: 'insensitive' } },
        { content: { contains: filters.search, mode: 'insensitive' } },
        { tags: { hasSome: [filters.search] } },
      ];
    }

    const [articles, total] = await Promise.all([
      prisma.knowledgeBase.findMany({
        where,
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' },
      }),
      prisma.knowledgeBase.count({ where }),
    ]);

    return {
      articles,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  async getKnowledgeBaseArticleBySlug(slug: string) {
    const article = await prisma.knowledgeBase.findUnique({
      where: { slug },
    });

    if (article) {
      await prisma.knowledgeBase.update({
        where: { id: article.id },
        data: { viewCount: { increment: 1 } },
      });
    }

    return article;
  }

  async createKnowledgeBaseArticle(data: any) {
    return prisma.knowledgeBase.create({
      data,
    });
  }

  async updateKnowledgeBaseArticle(id: string, data: any) {
    return prisma.knowledgeBase.update({
      where: { id },
      data,
    });
  }

  async deleteKnowledgeBaseArticle(id: string) {
    return prisma.knowledgeBase.delete({
      where: { id },
    });
  }

  async markArticleHelpful(id: string) {
    return prisma.knowledgeBase.update({
      where: { id },
      data: { helpfulCount: { increment: 1 } },
    });
  }

  // ============= FAQs =============
  async getFAQs(category?: string) {
    const where: any = { isPublished: true };
    if (category) {
      where.category = category;
    }

    return prisma.fAQ.findMany({
      where,
      orderBy: [{ category: 'asc' }, { sortOrder: 'asc' }],
    });
  }

  async createFAQ(data: any) {
    return prisma.fAQ.create({
      data,
    });
  }

  async updateFAQ(id: string, data: any) {
    return prisma.fAQ.update({
      where: { id },
      data,
    });
  }

  async deleteFAQ(id: string) {
    return prisma.fAQ.delete({
      where: { id },
    });
  }

  // ============= Statistics =============
  async getTicketStats(schoolId?: string) {
    const where: any = schoolId ? { schoolId } : {};

    const [total, byStatus, byPriority, byCategory, avgResolutionTime] = await Promise.all([
      prisma.supportTicket.count({ where }),
      prisma.supportTicket.groupBy({
        by: ['status'],
        where,
        _count: true,
      }),
      prisma.supportTicket.groupBy({
        by: ['priority'],
        where,
        _count: true,
      }),
      prisma.supportTicket.groupBy({
        by: ['category'],
        where,
        _count: true,
      }),
      prisma.supportTicket.aggregate({
        where: {
          ...where,
          resolvedAt: { not: null },
        },
        _avg: {
          rating: true,
        },
      }),
    ]);

    return {
      total,
      byStatus: byStatus.reduce((acc, item) => {
        acc[item.status] = item._count;
        return acc;
      }, {} as Record<string, number>),
      byPriority: byPriority.reduce((acc, item) => {
        acc[item.priority] = item._count;
        return acc;
      }, {} as Record<string, number>),
      byCategory: byCategory.reduce((acc, item) => {
        acc[item.category] = item._count;
        return acc;
      }, {} as Record<string, number>),
      avgRating: avgResolutionTime._avg.rating,
    };
  }
}

export const supportService = new SupportService();
