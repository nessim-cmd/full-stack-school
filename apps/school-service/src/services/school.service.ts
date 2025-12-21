import prisma from '../lib/prisma';
import { PlanType, SubscriptionStatus } from '../generated/prisma-client';

export interface CreateSchoolInput {
  name: string;
  slug: string;
  domain?: string;
  plan?: PlanType;
  enabledServices?: string[];
}

export interface UpdateSchoolInput {
  name?: string;
  slug?: string;
  domain?: string;
  plan?: PlanType;
  subscriptionStatus?: SubscriptionStatus;
  trialEndsAt?: Date;
  subscriptionEndsAt?: Date;
  enabledServices?: string[];
}

export interface SchoolFilter {
  plan?: PlanType;
  subscriptionStatus?: SubscriptionStatus;
  search?: string;
}

class SchoolService {
  /**
   * Create a new school
   */
  async createSchool(data: CreateSchoolInput) {
    const trialEndsAt = new Date();
    trialEndsAt.setDate(trialEndsAt.getDate() + 14); // 14-day trial

    return prisma.school.create({
      data: {
        name: data.name,
        slug: data.slug,
        domain: data.domain,
        plan: data.plan || 'FREE',
        subscriptionStatus: 'TRIAL',
        trialEndsAt,
        enabledServices: JSON.stringify(data.enabledServices || []),
      },
    });
  }

  /**
   * Get a school by ID
   */
  async getSchoolById(id: string) {
    return prisma.school.findUnique({
      where: { id },
      include: {
        settings: true,
        memberships: {
          include: { manager: true },
        },
      },
    });
  }

  /**
   * Get a school by slug (subdomain)
   */
  async getSchoolBySlug(slug: string) {
    return prisma.school.findUnique({
      where: { slug },
      include: {
        settings: true,
      },
    });
  }

  /**
   * Get a school by custom domain
   */
  async getSchoolByDomain(domain: string) {
    return prisma.school.findUnique({
      where: { domain },
      include: {
        settings: true,
      },
    });
  }

  /**
   * List all schools with optional filtering
   */
  async listSchools(filter?: SchoolFilter, page = 1, limit = 10) {
    const where: any = {};

    if (filter?.plan) {
      where.plan = filter.plan;
    }

    if (filter?.subscriptionStatus) {
      where.subscriptionStatus = filter.subscriptionStatus;
    }

    if (filter?.search) {
      where.OR = [
        { name: { contains: filter.search, mode: 'insensitive' } },
        { slug: { contains: filter.search, mode: 'insensitive' } },
      ];
    }

    const [schools, total] = await Promise.all([
      prisma.school.findMany({
        where,
        skip: (page - 1) * limit,
        take: limit,
        orderBy: { createdAt: 'desc' },
        include: { settings: true },
      }),
      prisma.school.count({ where }),
    ]);

    return {
      schools,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  /**
   * Update a school
   */
  async updateSchool(id: string, data: UpdateSchoolInput) {
    const updateData: any = { ...data };

    if (data.enabledServices) {
      updateData.enabledServices = JSON.stringify(data.enabledServices);
    }

    return prisma.school.update({
      where: { id },
      data: updateData,
    });
  }

  /**
   * Delete a school
   */
  async deleteSchool(id: string) {
    return prisma.school.delete({
      where: { id },
    });
  }

  /**
   * Update school subscription
   */
  async updateSubscription(
    id: string,
    plan: PlanType,
    status: SubscriptionStatus,
    subscriptionEndsAt?: Date
  ) {
    return prisma.school.update({
      where: { id },
      data: {
        plan,
        subscriptionStatus: status,
        subscriptionEndsAt,
      },
    });
  }

  /**
   * Get enabled services for a school
   */
  async getEnabledServices(id: string): Promise<string[]> {
    const school = await prisma.school.findUnique({
      where: { id },
      select: { enabledServices: true },
    });

    if (!school) return [];

    try {
      return JSON.parse(school.enabledServices);
    } catch {
      return [];
    }
  }

  /**
   * Update enabled services for a school
   */
  async updateEnabledServices(id: string, services: string[]) {
    return prisma.school.update({
      where: { id },
      data: {
        enabledServices: JSON.stringify(services),
      },
    });
  }

  /**
   * Check if a slug is available
   */
  async isSlugAvailable(slug: string, excludeId?: string): Promise<boolean> {
    const existing = await prisma.school.findUnique({
      where: { slug },
      select: { id: true },
    });

    if (!existing) return true;
    if (excludeId && existing.id === excludeId) return true;
    return false;
  }

  /**
   * Check if a domain is available
   */
  async isDomainAvailable(domain: string, excludeId?: string): Promise<boolean> {
    const existing = await prisma.school.findUnique({
      where: { domain },
      select: { id: true },
    });

    if (!existing) return true;
    if (excludeId && existing.id === excludeId) return true;
    return false;
  }
}

export const schoolService = new SchoolService();
