import { NextRequest, NextResponse } from 'next/server';
import { cookies, headers } from 'next/headers';
import prisma from '@/lib/prisma';
import { comparePassword, signToken } from '@/lib/auth';

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

export async function POST(request: NextRequest) {
  try {
    const { username, password } = await request.json();

    if (!username || !password) {
      return NextResponse.json(
        { error: 'Username and password are required' },
        { status: 400 }
      );
    }

    // Get school from subdomain
    const headersList = await headers();
    const host = headersList.get('host') || '';
    const schoolSlug = headersList.get('x-school-slug') || getSchoolSlug(host);

    if (!schoolSlug) {
      return NextResponse.json(
        { error: 'Invalid school. Please access through your school subdomain.' },
        { status: 400 }
      );
    }

    // Find the school first
    const school = await prisma.school.findFirst({
      where: { slug: schoolSlug },
    });

    if (!school) {
      return NextResponse.json(
        { error: 'School not found' },
        { status: 404 }
      );
    }

    // Try to find admin by username for this specific school
    const admin = await prisma.admin.findFirst({
      where: { 
        username,
        schoolId: school.id,  // Only admins from this school
      },
      include: { school: true },
    });

    if (!admin) {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      );
    }

    // Verify password
    const isValidPassword = await comparePassword(password, admin.password);
    if (!isValidPassword) {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      );
    }

    // Create JWT token
    const token = signToken({
      userId: admin.id,
      username: admin.username,
      userType: 'admin',
      role: 'admin',
      schoolId: admin.schoolId,
      schoolSlug: school.slug,
    });

    // Set cookie
    const cookieStore = await cookies();
    cookieStore.set('auth', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: '/',
    });

    // Also set school_token for middleware
    const schoolToken = Buffer.from(JSON.stringify({
      userId: admin.id,
      username: admin.username,
      role: 'admin',
      schoolId: admin.schoolId,
      schoolSlug: school.slug,
    })).toString('base64');

    cookieStore.set('school_token', schoolToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7,
      path: '/',
    });

    return NextResponse.json({
      success: true,
      user: {
        id: admin.id,
        username: admin.username,
        schoolId: admin.schoolId,
        schoolName: admin.school?.name,
        schoolSlug: school.slug,
      },
    });
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
