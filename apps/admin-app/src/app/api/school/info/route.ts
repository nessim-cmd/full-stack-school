import { NextRequest, NextResponse } from 'next/server';
import { headers } from 'next/headers';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Get school slug from hostname
function getSchoolSlug(hostname: string): string | null {
  const host = hostname.split(':')[0];
  if (host.endsWith('.localhost')) {
    return host.replace('.localhost', '');
  }
  const parts = host.split('.');
  if (parts.length >= 3) {
    return parts[0];
  }
  return null;
}

export async function GET(request: NextRequest) {
  try {
    const headersList = await headers();
    const host = headersList.get('host') || '';
    const schoolSlug = headersList.get('x-school-slug') || getSchoolSlug(host);

    if (!schoolSlug) {
      return NextResponse.json(
        { error: 'School not found' },
        { status: 404 }
      );
    }

    const school = await prisma.school.findFirst({
      where: { slug: schoolSlug },
      select: {
        id: true,
        name: true,
        slug: true,
        plan: true,
        subscriptionStatus: true,
      },
    });

    if (!school) {
      return NextResponse.json(
        { error: 'School not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ school });
  } catch (error) {
    console.error('School info error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
