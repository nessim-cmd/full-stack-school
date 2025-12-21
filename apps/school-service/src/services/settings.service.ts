import prisma from '../lib/prisma';

export interface SiteSettingsInput {
  primaryColor?: string;
  secondaryColor?: string;
  logo?: string;
  favicon?: string;
  email?: string;
  phone?: string;
  address?: string;
  website?: string;
  academicYearStart?: Date;
  academicYearEnd?: Date;
  timezone?: string;
  dateFormat?: string;
  timeFormat?: string;
}

class SettingsService {
  /**
   * Get settings for a school
   */
  async getSettings(schoolId: string) {
    return prisma.siteSettings.findUnique({
      where: { schoolId },
    });
  }

  /**
   * Create or update settings for a school
   */
  async upsertSettings(schoolId: string, data: SiteSettingsInput) {
    return prisma.siteSettings.upsert({
      where: { schoolId },
      create: {
        schoolId,
        ...data,
      },
      update: data,
    });
  }

  /**
   * Delete settings for a school
   */
  async deleteSettings(schoolId: string) {
    return prisma.siteSettings.delete({
      where: { schoolId },
    });
  }

  /**
   * Get theme settings
   */
  async getThemeSettings(schoolId: string) {
    const settings = await prisma.siteSettings.findUnique({
      where: { schoolId },
      select: {
        primaryColor: true,
        secondaryColor: true,
        logo: true,
        favicon: true,
      },
    });

    return settings || {
      primaryColor: '#1a73e8',
      secondaryColor: '#fbbc04',
      logo: null,
      favicon: null,
    };
  }

  /**
   * Update theme settings
   */
  async updateThemeSettings(
    schoolId: string,
    data: Pick<SiteSettingsInput, 'primaryColor' | 'secondaryColor' | 'logo' | 'favicon'>
  ) {
    return this.upsertSettings(schoolId, data);
  }

  /**
   * Get contact settings
   */
  async getContactSettings(schoolId: string) {
    const settings = await prisma.siteSettings.findUnique({
      where: { schoolId },
      select: {
        email: true,
        phone: true,
        address: true,
        website: true,
      },
    });

    return settings || {
      email: null,
      phone: null,
      address: null,
      website: null,
    };
  }

  /**
   * Update contact settings
   */
  async updateContactSettings(
    schoolId: string,
    data: Pick<SiteSettingsInput, 'email' | 'phone' | 'address' | 'website'>
  ) {
    return this.upsertSettings(schoolId, data);
  }

  /**
   * Get academic year settings
   */
  async getAcademicYearSettings(schoolId: string) {
    const settings = await prisma.siteSettings.findUnique({
      where: { schoolId },
      select: {
        academicYearStart: true,
        academicYearEnd: true,
      },
    });

    return settings || {
      academicYearStart: null,
      academicYearEnd: null,
    };
  }

  /**
   * Update academic year settings
   */
  async updateAcademicYearSettings(
    schoolId: string,
    data: Pick<SiteSettingsInput, 'academicYearStart' | 'academicYearEnd'>
  ) {
    return this.upsertSettings(schoolId, data);
  }
}

export const settingsService = new SettingsService();
