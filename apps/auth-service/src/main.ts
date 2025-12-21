import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes';
import { SERVICE_PORTS } from '@workspace/shared/constants';
import { HTTP_STATUS } from '@workspace/shared/constants';

// Load environment variables
dotenv.config();

const host = process.env['HOST'] ?? 'localhost';
const port = process.env['PORT'] ? Number(process.env['PORT']) : SERVICE_PORTS.AUTH_SERVICE;

// Initialize Express app
const app = express();

// Middleware
app.use(helmet()); // Security headers
app.use(cors({
  origin: process.env['CORS_ORIGIN']?.split(',') || '*',
  credentials: true,
}));
app.use(morgan('combined')); // Logging
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Health check endpoint
app.get('/health', (req: Request, res: Response) => {
  res.status(HTTP_STATUS.OK).json({
    status: 'healthy',
    service: 'auth-service',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
  });
});

// API routes
app.use('/api/auth', authRoutes);

// 404 handler
app.use((req: Request, res: Response) => {
  res.status(HTTP_STATUS.NOT_FOUND).json({
    success: false,
    error: 'Route not found',
  });
});

// Global error handler
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error('Error:', err);
  res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
    success: false,
    error: process.env['NODE_ENV'] === 'production' ? 'Internal server error' : err.message,
  });
});

// Start server
app.listen(port, host, () => {
  console.log(`✅ Auth Service running at http://${host}:${port}`);
  console.log(`📊 Health check: http://${host}:${port}/health`);
  console.log(`🔐 Auth API: http://${host}:${port}/api/auth`);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM received, shutting down gracefully...');
  process.exit(0);
});

process.on('SIGINT', () => {
  console.log('SIGINT received, shutting down gracefully...');
  process.exit(0);
});
