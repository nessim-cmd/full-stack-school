import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import { createProxyMiddleware } from 'http-proxy-middleware';
import { SERVICE_PORTS } from '@workspace/shared/constants';

const app = express();

// Middleware
app.use(helmet());
app.use(cors({
  origin: process.env['CORS_ORIGIN'] || '*',
  credentials: true,
}));
app.use(morgan('combined'));
app.use(cookieParser());

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'api-gateway' });
});

// Service URLs
const SERVICE_URLS = {
  auth: process.env['AUTH_SERVICE_URL'] || `http://localhost:${SERVICE_PORTS.AUTH_SERVICE}`,
  school: process.env['SCHOOL_SERVICE_URL'] || `http://localhost:${SERVICE_PORTS.SCHOOL_SERVICE}`,
  user: process.env['USER_SERVICE_URL'] || `http://localhost:${SERVICE_PORTS.USER_SERVICE}`,
  academic: process.env['ACADEMIC_SERVICE_URL'] || `http://localhost:${SERVICE_PORTS.ACADEMIC_SERVICE}`,
  attendance: process.env['ATTENDANCE_SERVICE_URL'] || `http://localhost:${SERVICE_PORTS.ATTENDANCE_SERVICE}`,
  communication: process.env['COMMUNICATION_SERVICE_URL'] || `http://localhost:${SERVICE_PORTS.COMMUNICATION_SERVICE}`,
  event: process.env['EVENT_SERVICE_URL'] || `http://localhost:${SERVICE_PORTS.EVENT_SERVICE}`,
  finance: process.env['FINANCE_SERVICE_URL'] || `http://localhost:${SERVICE_PORTS.FINANCE_SERVICE}`,
  resource: process.env['RESOURCE_SERVICE_URL'] || `http://localhost:${SERVICE_PORTS.RESOURCE_SERVICE}`,
  application: process.env['APPLICATION_SERVICE_URL'] || `http://localhost:${SERVICE_PORTS.APPLICATION_SERVICE}`,
  support: process.env['SUPPORT_SERVICE_URL'] || `http://localhost:${SERVICE_PORTS.SUPPORT_SERVICE}`,
  platformAdmin: process.env['PLATFORM_ADMIN_SERVICE_URL'] || `http://localhost:${SERVICE_PORTS.PLATFORM_ADMIN_SERVICE}`,
};

// Proxy configuration
const createProxy = (target: string) => createProxyMiddleware({
  target,
  changeOrigin: true,
});

// Auth Service routes
app.use('/api/auth', createProxy(SERVICE_URLS.auth));

// School Service routes
app.use('/api/schools', createProxy(SERVICE_URLS.school));
app.use('/api/settings', createProxy(SERVICE_URLS.school));

// User Service routes
app.use('/api/users', createProxy(SERVICE_URLS.user));
app.use('/api/admins', createProxy(SERVICE_URLS.user));
app.use('/api/teachers', createProxy(SERVICE_URLS.user));
app.use('/api/students', createProxy(SERVICE_URLS.user));
app.use('/api/parents', createProxy(SERVICE_URLS.user));

// Academic Service routes
app.use('/api/grades', createProxy(SERVICE_URLS.academic));
app.use('/api/classes', createProxy(SERVICE_URLS.academic));
app.use('/api/subjects', createProxy(SERVICE_URLS.academic));
app.use('/api/lessons', createProxy(SERVICE_URLS.academic));
app.use('/api/exams', createProxy(SERVICE_URLS.academic));
app.use('/api/assignments', createProxy(SERVICE_URLS.academic));
app.use('/api/results', createProxy(SERVICE_URLS.academic));

// Attendance Service routes
app.use('/api/attendance', createProxy(SERVICE_URLS.attendance));

// Communication Service routes
app.use('/api/announcements', createProxy(SERVICE_URLS.communication));
app.use('/api/messages', createProxy(SERVICE_URLS.communication));
app.use('/api/notifications', createProxy(SERVICE_URLS.communication));

// Event Service routes
app.use('/api/events', createProxy(SERVICE_URLS.event));
app.use('/api/calendar', createProxy(SERVICE_URLS.event));

// Finance Service routes
app.use('/api/invoices', createProxy(SERVICE_URLS.finance));
app.use('/api/payments', createProxy(SERVICE_URLS.finance));
app.use('/api/fees', createProxy(SERVICE_URLS.finance));

// Resource Service routes
app.use('/api/resources', createProxy(SERVICE_URLS.resource));

// Application Service routes
app.use('/api/applications', createProxy(SERVICE_URLS.application));
app.use('/api/registration', createProxy(SERVICE_URLS.application));

// Support Service routes
app.use('/api/tickets', createProxy(SERVICE_URLS.support));
app.use('/api/support', createProxy(SERVICE_URLS.support));

// Platform Admin Service routes
app.use('/api/platform', createProxy(SERVICE_URLS.platformAdmin));
app.use('/api/super-admin', createProxy(SERVICE_URLS.platformAdmin));

// Error handling
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error('Gateway Error:', err);
  res.status(err.status || 500).json({
    success: false,
    error: err.message || 'Internal Server Error',
  });
});

// 404 handler
app.use((req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    error: 'Not Found',
  });
});

const port = process.env['PORT'] || 3000;
const host = process.env['HOST'] || 'localhost';

app.listen(port, () => {
  console.log(`🚀 API Gateway running at http://${host}:${port}`);
  console.log(`📦 Services connected:`);
  Object.entries(SERVICE_URLS).forEach(([name, url]) => {
    console.log(`   - ${name}: ${url}`);
  });
});
