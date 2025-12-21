import { notificationService } from '../services/notification.service';
import { emailProvider, pushProvider, smsProvider } from '../services/providers';

export class NotificationWorker {
  private isRunning = false;
  private pollInterval = 5000; // 5 seconds

  async start() {
    if (this.isRunning) {
      console.log('Worker is already running');
      return;
    }

    this.isRunning = true;
    console.log('🚀 Notification worker started');

    while (this.isRunning) {
      try {
        await this.processJobs();
      } catch (error) {
        console.error('Error processing jobs:', error);
      }

      await this.sleep(this.pollInterval);
    }
  }

  stop() {
    this.isRunning = false;
    console.log('⏹️ Notification worker stopped');
  }

  private async processJobs() {
    // Get pending jobs
    const pendingJobs = await notificationService.getPendingJobs(50);

    for (const job of pendingJobs) {
      try {
        console.log(`Processing job ${job.id} (${job.type})`);
        
        await notificationService.updateJobStatus(job.id, 'PROCESSING');

        const results: { channel: string; success: boolean; error?: string }[] = [];

        for (const channel of job.channels) {
          let result: { success: boolean; error?: string };

          switch (channel) {
            case 'email':
              if (job.userEmail) {
                result = await emailProvider.send(
                  job.userEmail,
                  job.subject || job.title,
                  job.body
                );
              } else {
                result = { success: false, error: 'No email address' };
              }
              break;

            case 'push':
              if (job.userId) {
                result = await pushProvider.send(
                  job.userId,
                  job.title,
                  job.body,
                  job.data
                );
              } else {
                result = { success: false, error: 'No user ID' };
              }
              break;

            case 'sms':
              if (job.userPhone) {
                result = await smsProvider.send(job.userPhone, job.body);
              } else {
                result = { success: false, error: 'No phone number' };
              }
              break;

            default:
              result = { success: false, error: `Unknown channel: ${channel}` };
          }

          results.push({ channel, ...result });
        }

        // Check if all channels succeeded
        const allSucceeded = results.every(r => r.success);
        const errors = results.filter(r => !r.success).map(r => `${r.channel}: ${r.error}`);

        if (allSucceeded) {
          await notificationService.updateJobStatus(job.id, 'COMPLETED');
          console.log(`✅ Job ${job.id} completed successfully`);
        } else {
          await notificationService.updateJobStatus(job.id, 'FAILED', errors.join('; '));
          console.log(`❌ Job ${job.id} failed: ${errors.join('; ')}`);
        }
      } catch (error: any) {
        console.error(`Error processing job ${job.id}:`, error);
        await notificationService.updateJobStatus(job.id, 'FAILED', error.message);
      }
    }

    // Process retry jobs
    const retryJobs = await notificationService.getRetryableJobs(20);
    
    for (const job of retryJobs) {
      // Reset status to pending for reprocessing
      await notificationService.updateJobStatus(job.id, 'PENDING');
    }
  }

  private sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

export const worker = new NotificationWorker();
