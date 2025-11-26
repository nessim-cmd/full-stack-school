#!/usr/bin/env node
// scripts/start-worker.js
// This script starts the background worker for processing notification jobs

// Load environment variables
require('dotenv').config();

console.log('🚀 Starting notification worker...\n');

// Import the worker
require('../src/lib/queue/worker.ts');

// Keep the process running
process.on('SIGINT', async () => {
    console.log('\n⏹️  Shutting down worker gracefully...');
    process.exit(0);
});

process.on('SIGTERM', async () => {
    console.log('\n⏹️  Shutting down worker gracefully...');
    process.exit(0);
});

console.log('✅ Worker is running and waiting for jobs...');
console.log('📊 Press Ctrl+C to stop\n');
