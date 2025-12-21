import prisma from '../lib/prisma';

export class ApplicationService {
  // ============= Applications =============
  async getApplications(
    schoolId: string,
    page: number = 1,
    limit: number = 20,
    filters?: {
      status?: string;
      gradeApplying?: number;
      academicYear?: string;
      search?: string;
    }
  ) {
    const skip = (page - 1) * limit;

    const where: any = { schoolId };

    if (filters?.status) {
      where.status = filters.status;
    }

    if (filters?.gradeApplying) {
      where.gradeApplying = filters.gradeApplying;
    }

    if (filters?.academicYear) {
      where.academicYear = filters.academicYear;
    }

    if (filters?.search) {
      where.OR = [
        { firstName: { contains: filters.search, mode: 'insensitive' } },
        { lastName: { contains: filters.search, mode: 'insensitive' } },
        { email: { contains: filters.search, mode: 'insensitive' } },
        { applicationNo: { contains: filters.search, mode: 'insensitive' } },
      ];
    }

    const [applications, total] = await Promise.all([
      prisma.application.findMany({
        where,
        include: {
          documents: true,
        },
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' },
      }),
      prisma.application.count({ where }),
    ]);

    return {
      applications,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  async getApplicationById(id: string) {
    return prisma.application.findUnique({
      where: { id },
      include: {
        documents: true,
      },
    });
  }

  async getApplicationByNo(applicationNo: string) {
    return prisma.application.findUnique({
      where: { applicationNo },
      include: {
        documents: true,
      },
    });
  }

  async createApplication(data: any) {
    const applicationNo = await this.generateApplicationNo(data.schoolId);
    
    return prisma.application.create({
      data: {
        ...data,
        applicationNo,
        dateOfBirth: new Date(data.dateOfBirth),
      },
      include: {
        documents: true,
      },
    });
  }

  async updateApplication(id: string, data: any) {
    const updateData: any = { ...data };
    if (data.dateOfBirth) updateData.dateOfBirth = new Date(data.dateOfBirth);

    return prisma.application.update({
      where: { id },
      data: updateData,
      include: {
        documents: true,
      },
    });
  }

  async updateApplicationStatus(id: string, status: string, reviewedBy?: string, reviewNotes?: string) {
    return prisma.application.update({
      where: { id },
      data: {
        status: status as any,
        reviewedBy,
        reviewNotes,
        reviewedAt: new Date(),
      },
    });
  }

  async deleteApplication(id: string) {
    return prisma.application.delete({
      where: { id },
    });
  }

  private async generateApplicationNo(schoolId: string): Promise<string> {
    const year = new Date().getFullYear();
    const count = await prisma.application.count({
      where: {
        schoolId,
        createdAt: {
          gte: new Date(`${year}-01-01`),
          lt: new Date(`${year + 1}-01-01`),
        },
      },
    });
    return `APP-${year}-${String(count + 1).padStart(5, '0')}`;
  }

  // ============= Documents =============
  async addDocument(applicationId: string, data: any) {
    return prisma.applicationDocument.create({
      data: {
        applicationId,
        ...data,
      },
    });
  }

  async deleteDocument(id: string) {
    return prisma.applicationDocument.delete({
      where: { id },
    });
  }

  // ============= Admission Criteria =============
  async getAdmissionCriteria(schoolId: string) {
    return prisma.admissionCriteria.findUnique({
      where: { schoolId },
    });
  }

  async createOrUpdateAdmissionCriteria(schoolId: string, data: any) {
    return prisma.admissionCriteria.upsert({
      where: { schoolId },
      update: data,
      create: {
        schoolId,
        ...data,
      },
    });
  }

  // ============= Entrance Exams =============
  async scheduleEntranceExam(data: any) {
    return prisma.entranceExam.create({
      data: {
        ...data,
        examDate: new Date(data.examDate),
      },
    });
  }

  async getEntranceExam(applicationId: string) {
    return prisma.entranceExam.findFirst({
      where: { applicationId },
    });
  }

  async updateEntranceExamResult(id: string, data: any) {
    return prisma.entranceExam.update({
      where: { id },
      data: {
        ...data,
        conductedAt: new Date(),
      },
    });
  }

  // ============= Interviews =============
  async scheduleInterview(data: any) {
    return prisma.interview.create({
      data: {
        ...data,
        scheduledDate: new Date(data.scheduledDate),
      },
    });
  }

  async getInterview(applicationId: string) {
    return prisma.interview.findFirst({
      where: { applicationId },
    });
  }

  async updateInterviewResult(id: string, data: any) {
    return prisma.interview.update({
      where: { id },
      data: {
        ...data,
        status: 'COMPLETED',
        conductedAt: new Date(),
      },
    });
  }

  // ============= Admission =============
  async admitStudent(applicationId: string, studentId: string) {
    return prisma.application.update({
      where: { id: applicationId },
      data: {
        status: 'ADMITTED',
        studentId,
        admissionDate: new Date(),
      },
    });
  }

  // ============= Statistics =============
  async getApplicationStats(schoolId: string, academicYear?: string) {
    const where: any = { schoolId };
    if (academicYear) {
      where.academicYear = academicYear;
    }

    const [total, byStatus] = await Promise.all([
      prisma.application.count({ where }),
      prisma.application.groupBy({
        by: ['status'],
        where,
        _count: true,
      }),
    ]);

    return {
      total,
      byStatus: byStatus.reduce((acc, item) => {
        acc[item.status] = item._count;
        return acc;
      }, {} as Record<string, number>),
    };
  }
}

export const applicationService = new ApplicationService();
