import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import * as dotenv from 'dotenv';
import { worker } from './workers/notification.worker';
import { notificationService } from './services/notification.service';
import { SERVICE_PORTS, HTTP_STATUS } from '@workspace/shared/constants';

dotenv.config();

const host = process.env['HOST'] ?? 'localhost';
const port = process.env['PORT'] ? Number(process.env['PORT']) : SERVICE_PORTS.NOTIFICATION_WORKER;

const app = express();

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// Health check
app.get('/health', (req: Request, res: Response) => {
  res.status(HTTP_STATUS.OK).json({
    status: 'healthy',
    service: 'notification-worker',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
  });
});

// API endpoints for job management
app.post('/api/jobs', async (req: Request, res: Response) => {
  try {
    const job = await notificationService.createJob(req.body);
    res.status(HTTP_STATUS.CREATED).json({ success: true, data: job });
  } catch (error: any) {
    res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: error.message });
  }
});

app.get('/api/jobs/:id', async (req: Request, res: Response) => {
  try {
    const job = await notificationService.getJob(req.params['id']);
    if (!job) {
      res.status(HTTP_STATUS.NOT_FOUND).json({ success: false, error: 'Job not found' });
      return;
    }
    res.status(HTTP_STATUS.OK).json({ success: true, data: job });
  } catch (error: any) {
    res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: error.message });
  }
});

app.post('/api/jobs/:id/cancel', async (req: Request, res: Response) => {
  try {
    const job = await notificationService.cancelJob(req.params['id']);
    res.status(HTTP_STATUS.OK).json({ success: true, data: job });
  } catch (error: any) {
    res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: error.message });
  }
});

// Templates
app.get('/api/templates', async (req: Request, res: Response) => {
  try {
    const templates = await notificationService.getTemplates();
    res.status(HTTP_STATUS.OK).json({ success: true, data: templates });
  } catch (error: any) {
    res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: error.message });
  }
});

app.post('/api/templates', async (req: Request, res: Response) => {
  try {
    const template = await notificationService.createTemplate(req.body);
    res.status(HTTP_STATUS.CREATED).json({ success: true, data: template });
  } catch (error: any) {
    res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: error.message });
  }
});

// Device tokens
app.post('/api/device-tokens', async (req: Request, res: Response) => {
  try {
    const { userId, token, platform } = req.body;
    const deviceToken = await notificationService.registerDeviceToken(userId, token, platform);
    res.status(HTTP_STATUS.CREATED).json({ success: true, data: deviceToken });
  } catch (error: any) {
    res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: error.message });
  }
});

// Statistics
app.get('/api/stats', async (req: Request, res: Response) => {
  try {
    const stats = await notificationService.getJobStats();
    res.status(HTTP_STATUS.OK).json({ success: true, data: stats });
  } catch (error: any) {
    res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: error.message });
  }
});

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

// Start server and worker
app.listen(port, host, () => {
  console.log(`🚀 Notification Worker API running at http://${host}:${port}`);
  
  // Start the background worker
  worker.start();
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM received, shutting down gracefully');
  worker.stop();
  process.exit(0);
});

process.on('SIGINT', () => {
  console.log('SIGINT received, shutting down gracefully');
  worker.stop();
  process.exit(0);
});
