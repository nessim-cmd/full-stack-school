// scripts/start-worker.ts
// This script starts the background worker for processing notification jobs

import '../src/lib/queue/worker';

console.log('✅ Worker is running and waiting for jobs...');
console.log('📊 Press Ctrl+C to stop\n');

// Keep the process running
process.on('SIGINT', async () => {
    console.log('\n⏹️  Shutting down worker gracefully...');
    process.exit(0);
});

process.on('SIGTERM', async () => {
    console.log('\n⏹️  Shutting down worker gracefully...');
    process.exit(0);
});
