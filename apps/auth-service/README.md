# Auth Service

Authentication microservice for the School Management System.

## Overview

The Auth Service handles authentication and authorization for all user types in the system:
- Super Admin (platform-level)
- School Manager (manages schools)
- School Admin
- Teachers
- Students
- Parents

## Features

- ✅ User login with JWT token generation
- ✅ Password reset with OTP
- ✅ Token verification for inter-service communication
- ✅ HTTP-only cookie-based sessions
- ✅ Multi-role authentication
- ✅ Secure password hashing with bcrypt

## Tech Stack

- **Framework**: Express.js
- **Database**: PostgreSQL (auth schema)
- **ORM**: Prisma
- **Authentication**: JWT + bcrypt
- **Validation**: Zod (via @workspace/validation)

## API Endpoints

### POST /api/auth/login
Login endpoint for all user types.

**Request Body:**
```json
{
  "username": "string",
  "password": "string",
  "role": "ADMIN | TEACHER | STUDENT | PARENT | MANAGER | SUPER_ADMIN" // optional
}
```

**Response:**
```json
{
  "success": true,
  "token": "jwt-token",
  "user": {
    "id": "uuid",
    "username": "string",
    "role": "ADMIN",
    "schoolId": "uuid",
    "name": "string"
  }
}
```

### POST /api/auth/logout
Logout endpoint (clears authentication cookies).

**Response:**
```json
{
  "success": true,
  "message": "Logged out successfully"
}
```

### POST /api/auth/password-reset/request
Request password reset (sends OTP via email).

**Request Body:**
```json
{
  "email": "user@example.com"
}
```

**Response:**
```json
{
  "success": true,
  "message": "OTP sent to your email"
}
```

### POST /api/auth/password-reset/verify
Verify OTP code.

**Request Body:**
```json
{
  "email": "user@example.com",
  "otp": "123456"
}
```

**Response:**
```json
{
  "success": true,
  "message": "OTP verified"
}
```

### POST /api/auth/password-reset/complete
Complete password reset with OTP.

**Request Body:**
```json
{
  "email": "user@example.com",
  "otp": "123456",
  "newPassword": "newSecurePassword123"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Password reset successful"
}
```

### POST /api/auth/verify
Verify JWT token (for inter-service communication).

**Request Body:**
```json
{
  "token": "jwt-token"
}
```

**Response:**
```json
{
  "success": true,
  "payload": {
    "id": "uuid",
    "username": "string",
    "role": "ADMIN",
    "schoolId": "uuid"
  }
}
```

## Database Schema

The auth service uses a separate PostgreSQL schema (`auth`) with the following models:

- **Admin**: School administrators
- **Teacher**: Teaching staff
- **Student**: Students
- **Parent**: Student parents/guardians
- **SchoolManager**: Multi-school managers
- **SuperAdmin**: Platform administrators
- **PasswordResetToken**: OTP tokens for password reset

## Environment Variables

Copy `.env.example` to `.env` and configure:

```env
# Server
PORT=3001
HOST=localhost
NODE_ENV=development

# CORS
CORS_ORIGIN=http://localhost:3000,http://localhost:4200

# Database
DATABASE_URL="postgresql://postgres:password@localhost:5432/school_management?schema=auth"

# JWT
JWT_SECRET=your-jwt-secret-key-change-in-production
JWT_EXPIRES_IN=7d

# Email Service
EMAIL_SERVICE_URL=http://localhost:3010
```

## Setup

1. **Install dependencies** (from workspace root):
   ```bash
   npm install
   ```

2. **Generate Prisma client**:
   ```bash
   npx prisma generate --schema=apps/auth-service/prisma/schema.prisma
   ```

3. **Run migrations**:
   ```bash
   npx prisma migrate dev --schema=apps/auth-service/prisma/schema.prisma
   ```

4. **Build the service**:
   ```bash
   npx nx build auth-service
   ```

5. **Start the service**:
   ```bash
   npx nx serve auth-service
   ```

## Development

### Build
```bash
npx nx build auth-service
```

### Serve (development mode with hot reload)
```bash
npx nx serve auth-service
```

### Test
```bash
npx nx test auth-service
```

### Lint
```bash
npx nx lint auth-service
```

## Architecture

```
auth-service/
├── src/
│   ├── controllers/       # Request handlers
│   │   └── auth.controller.ts
│   ├── services/          # Business logic
│   │   └── auth.service.ts
│   ├── routes/            # API routes
│   │   └── auth.routes.ts
│   ├── lib/               # Utilities
│   │   └── prisma.ts      # Prisma client
│   └── main.ts            # Express app entry
├── prisma/
│   └── schema.prisma      # Database schema
└── .env.example           # Environment template
```

## Security

- Passwords are hashed using bcrypt (10 rounds)
- JWT tokens expire after 7 days (configurable)
- HTTP-only cookies prevent XSS attacks
- Helmet.js provides security headers
- CORS configured for trusted origins
- OTP tokens expire after 10 minutes
- One-time OTP usage enforced

## Dependencies

### Production
- `express` - Web framework
- `@prisma/client` - Database ORM
- `bcryptjs` - Password hashing
- `jsonwebtoken` - JWT authentication
- `cookie-parser` - Cookie parsing
- `cors` - CORS middleware
- `helmet` - Security headers
- `morgan` - Request logging
- `dotenv` - Environment variables

### Shared Libraries
- `@workspace/shared/types` - TypeScript types
- `@workspace/shared/constants` - Constants
- `@workspace/shared/utils` - Utility functions
- `@workspace/auth` - Auth utilities
- `@workspace/validation` - Zod schemas

## Inter-Service Communication

Other services can verify JWT tokens by calling:

```typescript
POST /api/auth/verify
Content-Type: application/json

{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

This endpoint is used by the API Gateway to authenticate requests before routing them to domain services.

## Future Enhancements

- [ ] Refresh token support
- [ ] OAuth2 integration (Google, Microsoft)
- [ ] Two-factor authentication (2FA)
- [ ] Session management
- [ ] Rate limiting for login attempts
- [ ] Account lockout after failed attempts
- [ ] Email service integration for OTP delivery
- [ ] SMS OTP support
- [ ] Audit logs for authentication events

## Contributing

This service is part of the School Management Microservices monorepo. See the main README for contribution guidelines.

## License

Private - All Rights Reserved
