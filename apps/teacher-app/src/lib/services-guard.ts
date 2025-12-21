import { redirect } from 'next/navigation';
import prisma from '@/lib/prisma';
import { getSessionUser } from '@/lib/authUser';

export async function checkServicesConfigured(schoolId: string) {
  try {
    const school = await prisma.school.findUnique({
      where: { id: schoolId },
      select: { enabledServices: true },
    });

    if (!school) {
      return false;
    }

    // Parse enabled services
    let enabledServices: string[] = [];
    if (school.enabledServices) {
      try {
        enabledServices = JSON.parse(school.enabledServices);
      } catch {
        enabledServices = [];
      }
    }

    // If no services are configured, redirect to configuration page
    if (!enabledServices || enabledServices.length === 0) {
      return false;
    }

    return true;
  } catch (error) {
    console.error('Error checking services:', error);
    return false;
  }
}

export async function requireServicesConfigured(schoolId: string, redirectPath?: string) {
  const isConfigured = await checkServicesConfigured(schoolId);
  
  if (!isConfigured) {
    redirect(redirectPath || `/admin/school/${schoolId}/configure-services`);
  }
}
