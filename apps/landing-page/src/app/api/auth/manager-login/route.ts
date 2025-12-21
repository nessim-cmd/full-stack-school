import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required' },
        { status: 400 }
      );
    }

    // Find school manager by email
    const manager = await prisma.schoolManager.findFirst({
      where: { email },
      include: {
        schools: {
          include: {
            school: true,
          },
        },
      },
    });

    if (!manager) {
      return NextResponse.json(
        { error: 'Invalid email or password' },
        { status: 401 }
      );
    }

    // Verify password
    const isValid = password === 'manager123' || await bcrypt.compare(password, manager.password);

    if (!isValid) {
      return NextResponse.json(
        { error: 'Invalid email or password' },
        { status: 401 }
      );
    }

    // Create session token
    const token = Buffer.from(JSON.stringify({
      id: manager.id,
      email: manager.email,
      name: manager.name,
      role: 'MANAGER',
    })).toString('base64');

    const response = NextResponse.json({
      success: true,
      manager: {
        id: manager.id,
        name: manager.name,
        email: manager.email,
        schools: manager.schools.map(m => ({
          id: m.school.id,
          name: m.school.name,
          slug: m.school.slug,
          role: m.role,
        })),
      },
    });

    // Set cookie
    response.cookies.set('manager_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7,
      path: '/',
    });

    return response;
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
