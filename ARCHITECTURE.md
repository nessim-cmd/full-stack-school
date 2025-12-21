# School Management System - Microservices Architecture

## 📋 Overview

This is a **multi-tenant SaaS platform** for school management, built using **NX monorepo** with microservices architecture. The system is designed for scalability, maintainability, and independent deployment.

## 🏗️ Architecture Components

### Backend Services (Express.js)
1. **api-gateway** - Main entry point, JWT verification, request routing & aggregation
2. **auth-service** - Authentication, JWT generation, password management
3. **school-service** - School CRUD, subscription management, multi-tenancy
4. **user-service** - Teacher/Student/Parent/Admin management
5. **academic-service** - Classes, Subjects, Lessons, Exams, Assignments, Results
6. **attendance-service** - Attendance tracking and reporting
7. **communication-service** - Messages, Notifications, Announcements (with SSE)
8. **event-service** - Calendar events and scheduling
9. **finance-service** - Invoices, Payments, Fee structures, Payroll
10. **resource-service** - File uploads, course materials (Cloudinary)
11. **application-service** - Student registration requests
12. **support-service** - Ticketing system for schools
13. **platform-admin-service** - Super Admin operations, analytics, audit logs
14. **notification-worker** - Background job processor (BullMQ)

### Frontend Applications (Next.js 14)
1. **admin-frontend** - School administrator dashboard
2. **teacher-frontend** - Teacher portal
3. **student-frontend** - Student portal
4. **parent-frontend** - Parent portal
5. **manager-frontend** - SaaS manager dashboard (multi-school management)
6. **super-admin-frontend** - Platform admin dashboard
7. **landing-page** - Public marketing website

### Shared Libraries
- **@workspace/shared/types** - TypeScript interfaces and types
- **@workspace/shared/utils** - Common utility functions
- **@workspace/shared/constants** - Shared constants and enums
- **@workspace/auth** - JWT utilities, middleware, decorators
- **@workspace/database** - Prisma schemas, database utilities
- **@workspace/messaging** - Event bus integration (RabbitMQ/Kafka)
- **@workspace/validation** - Zod schemas for validation

## 🎯 Key Features Preserved

### Multi-Tenancy
- Every service filters by `schoolId` (tenant identifier)
- Subdomain-based routing for schools
- Complete data isolation between schools
- Manager can manage multiple schools

### Modular ERP System
- 11 configurable services per school:
  - Academic Management
  - User Management
  - Attendance Tracking
  - Internal Messaging
  - Announcements
  - School Calendar
  - Finance & Payroll
  - Student Applications
  - Landing Page CMS
  - Course Resources
  - Notifications
- Schools enable/disable services via manager dashboard
- Dynamic menu filtering based on enabled services

### Real-Time Features
- Server-Sent Events (SSE) for live notifications
- Redis Pub/Sub for inter-service messaging
- Real-time support ticket updates
- Live attendance tracking

### Background Jobs
- BullMQ + Redis queue system
- Async email sending
- Event notification distribution
- Message notification processing
- Retry logic with exponential backoff

### Subscription & Billing
- Free 30-day trial
- Plan types: FREE, MONTHLY ($49), YEARLY ($490)
- Subscription status tracking
- Trial expiry notifications

### Security
- JWT-based authentication
- Role-based access control (RBAC)
- HTTP-only cookies (XSS protection)
- bcryptjs password hashing
- Service-level access control
- Data isolation per tenant

## 🔄 Communication Patterns

### Synchronous (HTTP/REST)
- Frontend → API Gateway → Microservices
- Used for queries and immediate responses
- API Gateway aggregates data from multiple services

### Asynchronous (Event Bus)
- Service → Event Bus → Subscribing Services
- Used for commands and state changes
- Event types:
  - `user.created`, `user.updated`, `user.deleted`
  - `student.enrolled`, `student.graduated`
  - `attendance.marked`, `absence.detected`
  - `message.sent`, `notification.created`
  - `invoice.generated`, `payment.received`
  - `exam.created`, `assignment.submitted`
  - `ticket.created`, `ticket.replied`

## 📊 Database Strategy

### Phase 1: Separate Schemas (Current)
- Single PostgreSQL instance
- Separate schema per service
- Example: `auth_schema`, `users_schema`, `academic_schema`

### Phase 2: Separate Databases (Future)
- Complete database isolation
- Independent scaling per service
- Backup and recovery per service

### Data Synchronization
- Event-driven replication for read models
- Services maintain local copies of needed data
- Eventually consistent model

## 🚀 Development Workflow

### Local Development
```bash
# Install dependencies
npm install

# Run all services with Docker Compose
docker-compose up

# Run specific service
npm run dev:auth-service

# Run specific frontend
npm run dev:admin-frontend

# Run API Gateway
npm run dev:api-gateway

# Run background worker
npm run dev:notification-worker
```

### NX Commands
```bash
# Build affected projects
nx affected -t build

# Test affected projects
nx affected -t test

# Lint affected projects
nx affected -t lint

# Run specific project
nx serve auth-service

# Build specific project
nx build auth-service

# Generate dependency graph
nx graph
```

### Testing
```bash
# Unit tests
nx test auth-service

# Integration tests
nx test-integration auth-service

# E2E tests
nx e2e admin-frontend-e2e
```

## 📦 Deployment

### Docker
- Each service has its own Dockerfile
- Docker Compose for local development
- Production: Kubernetes or Docker Swarm

### Kubernetes
- Helm charts for service deployment
- Horizontal Pod Autoscaler (HPA)
- Service mesh (Istio - optional)

### CI/CD
- GitHub Actions / GitLab CI
- NX Cloud for caching and incremental builds
- Automated testing pipeline
- Blue-green or canary deployments

## 🔧 Infrastructure Requirements

### Required Services
- **PostgreSQL** - Primary database
- **Redis** - Caching, Pub/Sub, Queue
- **RabbitMQ/Kafka** - Event bus
- **Cloudinary** - File storage
- **SMTP Server** - Email delivery

### Monitoring & Observability
- **Prometheus** - Metrics collection
- **Grafana** - Metrics visualization
- **Jaeger/Zipkin** - Distributed tracing
- **ELK Stack** - Centralized logging

## 📝 Project Structure

```
school-microservices/
├── apps/
│   ├── api-gateway/           # API Gateway (Express.js)
│   ├── auth-service/          # Authentication Service
│   ├── school-service/        # School Management Service
│   ├── user-service/          # User Management Service
│   ├── academic-service/      # Academic Service
│   ├── attendance-service/    # Attendance Service
│   ├── communication-service/ # Communication Service
│   ├── event-service/         # Event Service
│   ├── finance-service/       # Finance Service
│   ├── resource-service/      # Resource Service
│   ├── application-service/   # Application Service
│   ├── support-service/       # Support Service
│   ├── platform-admin-service/# Platform Admin Service
│   ├── notification-worker/   # Background Worker
│   ├── admin-frontend/        # Admin Dashboard (Next.js)
│   ├── teacher-frontend/      # Teacher Portal (Next.js)
│   ├── student-frontend/      # Student Portal (Next.js)
│   ├── parent-frontend/       # Parent Portal (Next.js)
│   ├── manager-frontend/      # Manager Dashboard (Next.js)
│   ├── super-admin-frontend/  # Super Admin Dashboard (Next.js)
│   └── landing-page/          # Public Website (Next.js)
├── libs/
│   ├── shared/
│   │   ├── types/             # TypeScript types
│   │   ├── utils/             # Utility functions
│   │   └── constants/         # Constants and enums
│   ├── auth/                  # Auth utilities
│   ├── database/              # Database utilities
│   ├── messaging/             # Event bus integration
│   └── validation/            # Validation schemas
├── docker-compose.yml         # Local development
├── kubernetes/                # K8s manifests
├── nx.json                    # NX configuration
├── package.json               # Root dependencies
└── README.md                  # Getting started
```

## 🎓 Migration Progress

- [x] Phase 1: NX Workspace Setup
- [ ] Phase 2: Shared Libraries
- [ ] Phase 3: Core Services (Auth, School, API Gateway)
- [ ] Phase 4: Domain Services (User, Academic, Communication, etc.)
- [ ] Phase 5: Event Bus Implementation
- [ ] Phase 6: Frontend Migration
- [ ] Phase 7: Docker Compose Setup
- [ ] Phase 8: Testing & Validation
- [ ] Phase 9: Production Deployment

## 📚 Documentation

- [API Gateway Documentation](./apps/api-gateway/README.md)
- [Authentication Service](./apps/auth-service/README.md)
- [Event Bus Guide](./docs/EVENT_BUS.md)
- [Database Strategy](./docs/DATABASE_STRATEGY.md)
- [Deployment Guide](./docs/DEPLOYMENT.md)

## 🤝 Contributing

1. Create feature branch from `main`
2. Make changes in affected services
3. Run `nx affected -t test` to test changes
4. Submit pull request

## 📄 License

Private - School Management SaaS Platform
