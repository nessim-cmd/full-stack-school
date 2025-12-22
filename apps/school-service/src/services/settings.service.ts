import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class SettingsService {
  // Get full site settings
  async getSiteSettings(schoolId: string) {
    return prisma.siteSettings.findUnique({
      where: { schoolId },
    });
  }

  // Update site settings
  async updateSiteSettings(schoolId: string, data: Record<string, any>) {
    const existing = await prisma.siteSettings.findUnique({
      where: { schoolId },
    });
    
    if (existing) {
      return prisma.siteSettings.update({
        where: { schoolId },
        data,
      });
    }
    
    return prisma.siteSettings.create({
      data: { schoolId, ...data },
    });
  }

  // Get branding settings
  async getBrandingSettings(schoolId: string) {
    return prisma.siteSettings.findUnique({
      where: { schoolId },
      select: {
        schoolName: true,
        schoolLogo: true,
        schoolTagline: true,
      },
    });
  }

  async updateBrandingSettings(schoolId: string, data: {
    schoolName?: string;
    schoolLogo?: string;
    schoolTagline?: string;
  }) {
    return this.updateSiteSettings(schoolId, data);
  }

  // Get hero settings
  async getHeroSettings(schoolId: string) {
    return prisma.siteSettings.findUnique({
      where: { schoolId },
      select: {
        heroTitle: true,
        heroDescription: true,
        heroImage: true,
      },
    });
  }

  async updateHeroSettings(schoolId: string, data: {
    heroTitle?: string;
    heroDescription?: string;
    heroImage?: string;
  }) {
    return this.updateSiteSettings(schoolId, data);
  }

  // Get stats settings
  async getStatsSettings(schoolId: string) {
    return prisma.siteSettings.findUnique({
      where: { schoolId },
      select: {
        totalStudents: true,
        totalTeachers: true,
        successRate: true,
        yearsExperience: true,
      },
    });
  }

  async updateStatsSettings(schoolId: string, data: {
    totalStudents?: string;
    totalTeachers?: string;
    successRate?: string;
    yearsExperience?: string;
  }) {
    return this.updateSiteSettings(schoolId, data);
  }

  // Get about settings
  async getAboutSettings(schoolId: string) {
    return prisma.siteSettings.findUnique({
      where: { schoolId },
      select: {
        missionTitle: true,
        missionText: true,
        visionTitle: true,
        visionText: true,
        valuesTitle: true,
        valuesText: true,
      },
    });
  }

  async updateAboutSettings(schoolId: string, data: {
    missionTitle?: string;
    missionText?: string;
    visionTitle?: string;
    visionText?: string;
    valuesTitle?: string;
    valuesText?: string;
  }) {
    return this.updateSiteSettings(schoolId, data);
  }
}

export const settingsService = new SettingsService();
