import { PrismaClient, RequestStatus, UserSex } from '@prisma/client';

const prisma = new PrismaClient();

export class ApplicationService {
  async getApplications(schoolId?: string, status?: RequestStatus) {
    const where: any = {};
    if (schoolId) where.schoolId = schoolId;
    if (status) where.status = status;

    return prisma.registrationRequest.findMany({
      where,
      include: { school: true },
      orderBy: { createdAt: 'desc' },
    });
  }

  async getApplicationById(id: number) {
    return prisma.registrationRequest.findUnique({
      where: { id },
      include: { school: true },
    });
  }

  async createApplication(data: {
    studentName: string;
    studentSurname: string;
    studentEmail?: string;
    studentPhone?: string;
    studentAddress: string;
    studentBloodType: string;
    studentSex: UserSex;
    studentBirthday: Date;
    gradeId: number;
    parentName: string;
    parentSurname: string;
    parentEmail: string;
    parentPhone: string;
    parentAddress: string;
    schoolId: string;
    notes?: string;
  }) {
    return prisma.registrationRequest.create({
      data: {
        studentName: data.studentName,
        studentSurname: data.studentSurname,
        studentEmail: data.studentEmail,
        studentPhone: data.studentPhone,
        studentAddress: data.studentAddress,
        studentBloodType: data.studentBloodType,
        studentSex: data.studentSex,
        studentBirthday: data.studentBirthday,
        gradeId: data.gradeId,
        parentName: data.parentName,
        parentSurname: data.parentSurname,
        parentEmail: data.parentEmail,
        parentPhone: data.parentPhone,
        parentAddress: data.parentAddress,
        schoolId: data.schoolId,
        status: 'PENDING',
      },
    });
  }

  async updateApplicationStatus(id: number, status: RequestStatus) {
    return prisma.registrationRequest.update({
      where: { id },
      data: { status },
    });
  }

  async deleteApplication(id: number) {
    return prisma.registrationRequest.delete({ where: { id } });
  }

  async getApplicationsBySchool(schoolId: string) {
    return prisma.registrationRequest.findMany({
      where: { schoolId },
      orderBy: { createdAt: 'desc' },
    });
  }

  async getApplicationStats(schoolId: string) {
    const [pending, approved, rejected] = await Promise.all([
      prisma.registrationRequest.count({ where: { schoolId, status: 'PENDING' } }),
      prisma.registrationRequest.count({ where: { schoolId, status: 'APPROVED' } }),
      prisma.registrationRequest.count({ where: { schoolId, status: 'REJECTED' } }),
    ]);

    return { pending, approved, rejected, total: pending + approved + rejected };
  }
}

export const applicationService = new ApplicationService();
