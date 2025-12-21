import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import * as dotenv from 'dotenv';
import applicationRoutes from './routes/application.routes';
import { SERVICE_PORTS, HTTP_STATUS } from '@workspace/shared/constants';

dotenv.config();

const host = process.env['HOST'] ?? 'localhost';
const port = process.env['PORT'] ? Number(process.env['PORT']) : SERVICE_PORTS.APPLICATION_SERVICE;

const app = express();

// Middleware
app.use(helmet());
app.use(cors({
  origin: process.env['CORS_ORIGIN']?.split(',') || '*',
  credentials: true,
}));
app.use(morgan('combined'));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Health check
app.get('/health', (req: Request, res: Response) => {
  res.status(HTTP_STATUS.OK).json({
    status: 'healthy',
    service: 'application-service',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
  });
});

// API routes
app.use('/api/applications', applicationRoutes);

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
  console.log(`🚀 Application service running at http://${host}:${port}`);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM received, shutting down gracefully');
  process.exit(0);
});

process.on('SIGINT', () => {
  console.log('SIGINT received, shutting down gracefully');
  process.exit(0);
});
