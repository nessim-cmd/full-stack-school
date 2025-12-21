import prisma from '../lib/prisma';
import { hashPassword, comparePassword, signToken, verifyToken as verifyJWT, generateSecureToken } from '@workspace/auth';
import { LoginRequest, TokenPayload, UserRole } from '@workspace/shared/types';
import { generateOTP } from '@workspace/shared/utils';
import { DEFAULTS } from '@workspace/shared/constants';

export class AuthService {
  /**
   * Login user (any role)
   */
  async login(data: LoginRequest): Promise<any> {
    const { username, password, role } = data;

    let user: any = null;
    let userRole: UserRole;
    let schoolId: string | undefined;

    // Determine which table to query based on role or try all
    if (role === UserRole.SUPER_ADMIN || !role) {
      user = await prisma.superAdmin.findUnique({ where: { email: username } });
      if (user) {
        userRole = UserRole.SUPER_ADMIN;
        schoolId = undefined;
      }
    }

    if (!user && (role === UserRole.MANAGER || !role)) {
      user = await prisma.schoolManager.findUnique({ where: { email: username } });
      if (user) {
        userRole = UserRole.MANAGER;
        schoolId = undefined;
      }
    }

    if (!user && (role === UserRole.ADMIN || !role)) {
      user = await prisma.admin.findUnique({ where: { username } });
      if (user) {
        userRole = UserRole.ADMIN;
        schoolId = user.schoolId;
      }
    }

    if (!user && (role === UserRole.TEACHER || !role)) {
      user = await prisma.teacher.findUnique({ where: { username } });
      if (user) {
        userRole = UserRole.TEACHER;
        schoolId = user.schoolId;
      }
    }

    if (!user && (role === UserRole.STUDENT || !role)) {
      user = await prisma.student.findUnique({ where: { username } });
      if (user) {
        userRole = UserRole.STUDENT;
        schoolId = user.schoolId;
      }
    }

    if (!user && (role === UserRole.PARENT || !role)) {
      user = await prisma.parent.findUnique({ where: { username } });
      if (user) {
        userRole = UserRole.PARENT;
        schoolId = user.schoolId;
      }
    }

    if (!user) {
      return {
        success: false,
        error: 'Invalid credentials',
      };
    }

    // Verify password
    const isValidPassword = await comparePassword(password, user.password);
    if (!isValidPassword) {
      return {
        success: false,
        error: 'Invalid credentials',
      };
    }

    // Generate JWT token
    const tokenPayload: Omit<TokenPayload, 'iat' | 'exp'> = {
      id: user.id,
      username: user.username || user.email,
      role: userRole!,
      schoolId,
    };

    const token = signToken(tokenPayload);

    return {
      success: true,
      token,
      user: {
        id: user.id,
        username: user.username || user.email,
        role: userRole!,
        schoolId,
        name: user.name,
      },
    };
  }

  /**
   * Request password reset (send OTP)
   */
  async requestPasswordReset(email: string): Promise<void> {
    // Check if user exists (any role with email)
    const superAdmin = await prisma.superAdmin.findUnique({ where: { email } });
    const manager = await prisma.schoolManager.findUnique({ where: { email } });

    if (!superAdmin && !manager) {
      // Don't reveal if user exists or not
      return;
    }

    // Generate OTP
    const otp = generateOTP(DEFAULTS.OTP_LENGTH);
    const expiresAt = new Date(Date.now() + DEFAULTS.OTP_EXPIRES_IN);

    // Save OTP to database
    await prisma.passwordResetToken.create({
      data: {
        email,
        otp,
        expiresAt,
      },
    });

    // TODO: Send OTP via email (integrate with email service)
    console.log(`Password reset OTP for ${email}: ${otp}`);
  }

  /**
   * Verify OTP
   */
  async verifyOTP(email: string, otp: string): Promise<boolean> {
    const token = await prisma.passwordResetToken.findFirst({
      where: {
        email,
        otp,
        used: false,
        expiresAt: {
          gt: new Date(),
        },
      },
    });

    return !!token;
  }

  /**
   * Reset password with OTP
   */
  async resetPassword(email: string, otp: string, newPassword: string): Promise<boolean> {
    // Verify OTP
    const token = await prisma.passwordResetToken.findFirst({
      where: {
        email,
        otp,
        used: false,
        expiresAt: {
          gt: new Date(),
        },
      },
    });

    if (!token) {
      return false;
    }

    // Hash new password
    const hashedPassword = await hashPassword(newPassword);

    // Update password in appropriate table
    const superAdmin = await prisma.superAdmin.findUnique({ where: { email } });
    if (superAdmin) {
      await prisma.superAdmin.update({
        where: { id: superAdmin.id },
        data: { password: hashedPassword },
      });
    }

    const manager = await prisma.schoolManager.findUnique({ where: { email } });
    if (manager) {
      await prisma.schoolManager.update({
        where: { id: manager.id },
        data: { password: hashedPassword },
      });
    }

    // Mark OTP as used
    await prisma.passwordResetToken.update({
      where: { id: token.id },
      data: { used: true },
    });

    return true;
  }

  /**
   * Verify JWT token (for inter-service communication)
   */
  async verifyToken(token: string): Promise<TokenPayload | null> {
    return verifyJWT(token);
  }

  /**
   * Create user credentials (called by other services)
   */
  async createUser(data: {
    id: string;
    username: string;
    password: string;
    role: UserRole;
    schoolId?: string;
  }): Promise<void> {
    const hashedPassword = await hashPassword(data.password);

    switch (data.role) {
      case UserRole.ADMIN:
        await prisma.admin.create({
          data: {
            id: data.id,
            username: data.username,
            password: hashedPassword,
            schoolId: data.schoolId!,
          },
        });
        break;

      case UserRole.TEACHER:
        await prisma.teacher.create({
          data: {
            id: data.id,
            username: data.username,
            password: hashedPassword,
            schoolId: data.schoolId!,
          },
        });
        break;

      case UserRole.STUDENT:
        await prisma.student.create({
          data: {
            id: data.id,
            username: data.username,
            password: hashedPassword,
            schoolId: data.schoolId!,
          },
        });
        break;

      case UserRole.PARENT:
        await prisma.parent.create({
          data: {
            id: data.id,
            username: data.username,
            password: hashedPassword,
            schoolId: data.schoolId!,
          },
        });
        break;

      default:
        throw new Error(`Unsupported user role: ${data.role}`);
    }
  }

  /**
   * Update user password
   */
  async updatePassword(id: string, role: UserRole, newPassword: string): Promise<void> {
    const hashedPassword = await hashPassword(newPassword);

    switch (role) {
      case UserRole.ADMIN:
        await prisma.admin.update({
          where: { id },
          data: { password: hashedPassword },
        });
        break;

      case UserRole.TEACHER:
        await prisma.teacher.update({
          where: { id },
          data: { password: hashedPassword },
        });
        break;

      case UserRole.STUDENT:
        await prisma.student.update({
          where: { id },
          data: { password: hashedPassword },
        });
        break;

      case UserRole.PARENT:
        await prisma.parent.update({
          where: { id },
          data: { password: hashedPassword },
        });
        break;

      case UserRole.SUPER_ADMIN:
        await prisma.superAdmin.update({
          where: { id },
          data: { password: hashedPassword },
        });
        break;

      case UserRole.MANAGER:
        await prisma.schoolManager.update({
          where: { id },
          data: { password: hashedPassword },
        });
        break;

      default:
        throw new Error(`Unsupported user role: ${role}`);
    }
  }

  /**
   * Delete user credentials
   */
  async deleteUser(id: string, role: UserRole): Promise<void> {
    switch (role) {
      case UserRole.ADMIN:
        await prisma.admin.delete({ where: { id } });
        break;

      case UserRole.TEACHER:
        await prisma.teacher.delete({ where: { id } });
        break;

      case UserRole.STUDENT:
        await prisma.student.delete({ where: { id } });
        break;

      case UserRole.PARENT:
        await prisma.parent.delete({ where: { id } });
        break;

      default:
        throw new Error(`Unsupported user role: ${role}`);
    }
  }
}

export const authService = new AuthService();
