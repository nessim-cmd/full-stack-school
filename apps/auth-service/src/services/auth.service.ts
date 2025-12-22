import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

export enum UserRole {
  ADMIN = 'admin',
  TEACHER = 'teacher',
  STUDENT = 'student',
  PARENT = 'parent',
  MANAGER = 'manager',
  SUPER_ADMIN = 'super_admin',
}

export class AuthService {
  // Login for school users (admin, teacher, student, parent)
  async login(username: string, password: string, schoolSlug?: string) {
    let user = null;
    let role = '';
    let schoolId = '';

    // Try Admin
    const admin = await prisma.admin.findFirst({
      where: { username },
      include: { school: true },
    });
    if (admin) {
      const isValid = await bcrypt.compare(password, admin.password);
      if (isValid) {
        user = admin;
        role = UserRole.ADMIN;
        schoolId = admin.schoolId;
      }
    }

    // Try Teacher
    if (!user) {
      const teacher = await prisma.teacher.findFirst({
        where: { username },
        include: { school: true },
      });
      if (teacher) {
        const isValid = await bcrypt.compare(password, teacher.password);
        if (isValid) {
          user = teacher;
          role = UserRole.TEACHER;
          schoolId = teacher.schoolId;
        }
      }
    }

    // Try Student
    if (!user) {
      const student = await prisma.student.findFirst({
        where: { username },
        include: { school: true },
      });
      if (student) {
        const isValid = await bcrypt.compare(password, student.password);
        if (isValid) {
          user = student;
          role = UserRole.STUDENT;
          schoolId = student.schoolId;
        }
      }
    }

    // Try Parent
    if (!user) {
      const parent = await prisma.parent.findFirst({
        where: { username },
        include: { school: true },
      });
      if (parent) {
        const isValid = await bcrypt.compare(password, parent.password);
        if (isValid) {
          user = parent;
          role = UserRole.PARENT;
          schoolId = parent.schoolId;
        }
      }
    }

    if (!user) {
      throw new Error('Invalid credentials');
    }

    // Verify school slug if provided
    if (schoolSlug && (user as any).school?.slug !== schoolSlug) {
      throw new Error('Invalid school access');
    }

    const token = this.generateToken({
      userId: user.id,
      username: user.username,
      role,
      schoolId,
      schoolSlug: (user as any).school?.slug,
    });

    return {
      token,
      user: {
        id: user.id,
        username: user.username,
        role,
        schoolId,
        schoolName: (user as any).school?.name,
        schoolSlug: (user as any).school?.slug,
      },
    };
  }

  // Login for school managers
  async managerLogin(email: string, password: string) {
    const manager = await prisma.schoolManager.findFirst({
      where: { email },
      include: {
        schools: {
          include: { school: true },
        },
      },
    });

    if (!manager) {
      throw new Error('Invalid credentials');
    }

    const isValid = await bcrypt.compare(password, manager.password);
    if (!isValid) {
      throw new Error('Invalid credentials');
    }

    const token = this.generateToken({
      userId: manager.id,
      email: manager.email,
      role: UserRole.MANAGER,
      name: manager.name,
    });

    return {
      token,
      manager: {
        id: manager.id,
        name: manager.name,
        email: manager.email,
        schools: manager.schools.map((m) => ({
          id: m.school.id,
          name: m.school.name,
          slug: m.school.slug,
          role: m.role,
        })),
      },
    };
  }

  // Login for super admin
  async superAdminLogin(email: string, password: string) {
    const superAdmin = await prisma.superAdmin.findFirst({
      where: { email },
    });

    if (!superAdmin) {
      throw new Error('Invalid credentials');
    }

    const isValid = await bcrypt.compare(password, superAdmin.password);
    if (!isValid) {
      throw new Error('Invalid credentials');
    }

    const token = this.generateToken({
      userId: superAdmin.id,
      email: superAdmin.email,
      role: UserRole.SUPER_ADMIN,
      name: superAdmin.name,
    });

    return {
      token,
      superAdmin: {
        id: superAdmin.id,
        name: superAdmin.name,
        email: superAdmin.email,
      },
    };
  }

  // Request password reset
  async requestPasswordReset(email: string) {
    const teacher = await prisma.teacher.findFirst({ where: { email } });
    const student = await prisma.student.findFirst({ where: { email } });
    const parent = await prisma.parent.findFirst({ where: { email } });
    const manager = await prisma.schoolManager.findFirst({ where: { email } });

    const user = teacher || student || parent || manager;
    if (!user) {
      return { success: true };
    }

    const token = Math.random().toString(36).substring(2, 15);
    const expiresAt = new Date(Date.now() + 3600000);

    await prisma.passwordResetToken.upsert({
      where: { email },
      update: { token, expiresAt },
      create: { email, token, expiresAt },
    });

    console.log(`Password reset token for ${email}: ${token}`);
    return { success: true };
  }

  // Reset password
  async resetPassword(email: string, token: string, newPassword: string) {
    const resetToken = await prisma.passwordResetToken.findFirst({
      where: {
        email,
        token,
        expiresAt: { gt: new Date() },
      },
    });

    if (!resetToken) {
      throw new Error('Invalid or expired token');
    }

    const hashedPassword = await bcrypt.hash(newPassword, 12);

    await prisma.teacher.updateMany({ where: { email }, data: { password: hashedPassword } });
    await prisma.student.updateMany({ where: { email }, data: { password: hashedPassword } });
    await prisma.parent.updateMany({ where: { email }, data: { password: hashedPassword } });
    await prisma.schoolManager.updateMany({ where: { email }, data: { password: hashedPassword } });

    await prisma.passwordResetToken.delete({ where: { id: resetToken.id } });

    return { success: true };
  }

  // Verify token
  verifyToken(token: string) {
    try {
      return jwt.verify(token, JWT_SECRET);
    } catch {
      return null;
    }
  }

  private generateToken(payload: any) {
    return jwt.sign(payload, JWT_SECRET, { expiresIn: '7d' });
  }
}

export const authService = new AuthService();
