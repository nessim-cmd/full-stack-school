import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import { SERVICE_PORTS } from '@workspace/shared/constants';
import { schoolRoutes, settingsRoutes } from './routes';

const app = express();

// Middleware
app.use(helmet());
app.use(cors({
  origin: process.env['CORS_ORIGIN'] || '*',
  credentials: true,
}));
app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'school-service' });
});

// Routes
app.use('/api/schools', schoolRoutes);
app.use('/api/settings', settingsRoutes);

// Error handling
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error('Error:', err);
  res.status(err.status || 500).json({
    success: false,
    error: err.message || 'Internal Server Error',
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: 'Not Found',
  });
});

const port = process.env['PORT'] || SERVICE_PORTS.SCHOOL_SERVICE;
const host = process.env['HOST'] || 'localhost';

app.listen(port, () => {
  console.log(`🏫 School Service running at http://${host}:${port}`);
});
