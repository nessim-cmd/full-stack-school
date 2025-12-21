import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get('manager_token')?.value;

    if (!token) {
      return NextResponse.json(
        { error: 'Not authenticated' },
        { status: 401 }
      );
    }

    // Decode token
    let payload;
    try {
      payload = JSON.parse(Buffer.from(token, 'base64').toString());
    } catch {
      return NextResponse.json(
        { error: 'Invalid token' },
        { status: 401 }
      );
    }

    // Get manager with schools
    const manager = await prisma.schoolManager.findUnique({
      where: { id: payload.id },
      include: {
        schools: {
          include: {
            school: {
              include: {
                _count: {
                  select: {
                    students: true,
                    teachers: true,
                  },
                },
              },
            },
          },
        },
      },
    });

    if (!manager) {
      return NextResponse.json(
        { error: 'Manager not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      manager: {
        id: manager.id,
        name: manager.name,
        email: manager.email,
        schools: manager.schools.map((m) => ({
          id: m.school.id,
          name: m.school.name,
          slug: m.school.slug,
          role: m.role,
          plan: m.school.plan,
          studentCount: m.school._count.students,
          teacherCount: m.school._count.teachers,
        })),
      },
    });
  } catch (error) {
    console.error('Profile error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
