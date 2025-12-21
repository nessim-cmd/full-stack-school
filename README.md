# Getting Started - School Microservices

## Prerequisites

- **Node.js** v18+ and **npm** v9+
- **Docker** and **Docker Compose** v2+
- **PostgreSQL** 16+ (or use Docker)
- **Redis** 7+ (or use Docker)
- **Git**

## Quick Start

### 1. Clone and Setup

```bash
# Navigate to the microservices directory
cd school-microservices

# Copy environment variables
cp .env.example .env

# Edit .env with your configuration
nano .env
```

### 2. Install Dependencies

```bash
# Install all dependencies
npm install

# This will install dependencies for the entire monorepo
```

### 3. Start Infrastructure (Docker)

```bash
# Start PostgreSQL, Redis, and RabbitMQ
docker-compose up postgres redis rabbitmq -d

# Check if services are healthy
docker-compose ps
```

### 4. Database Setup

```bash
# The init-db.sql script will automatically create schemas
# when PostgreSQL container starts for the first time

# To manually run migrations later (after creating Prisma schemas):
# npm run migrate:auth
# npm run migrate:school
# npm run migrate:user
# etc...
```

### 5. Start Services

#### Option A: Start All Services with Docker Compose
```bash
# Start everything (infrastructure + services + frontends)
docker-compose up

# Or run in detached mode
docker-compose up -d

# View logs
docker-compose logs -f
```

#### Option B: Start Services Individually (Development)
```bash
# Terminal 1: API Gateway
npm run dev:api-gateway

# Terminal 2: Auth Service
npm run dev:auth-service

# Terminal 3: School Service
npm run dev:school-service

# Terminal 4: User Service
npm run dev:user-service

# Terminal 5: Admin Frontend
npm run dev:admin-frontend

# etc...
```

#### Option C: Use NX Run-Many (Parallel)
```bash
# Start multiple backend services
nx run-many -t serve -p api-gateway auth-service school-service user-service

# Start all frontends
nx run-many -t serve -p admin-frontend teacher-frontend student-frontend parent-frontend
```

## Access Points

Once everything is running:

### Frontends
- **Admin Dashboard**: http://localhost:4000
- **Teacher Portal**: http://localhost:4001
- **Student Portal**: http://localhost:4002
- **Parent Portal**: http://localhost:4003
- **Manager Dashboard**: http://localhost:4004
- **Super Admin Dashboard**: http://localhost:4005
- **Landing Page**: http://localhost:4006

### Backend
- **API Gateway**: http://localhost:3000
- **Auth Service**: http://localhost:3001
- **School Service**: http://localhost:3002
- **User Service**: http://localhost:3003
- **Academic Service**: http://localhost:3004
- **Attendance Service**: http://localhost:3005
- **Communication Service**: http://localhost:3006
- **Event Service**: http://localhost:3007
- **Finance Service**: http://localhost:3008
- **Resource Service**: http://localhost:3009
- **Application Service**: http://localhost:3010
- **Support Service**: http://localhost:3011
- **Platform Admin Service**: http://localhost:3012

### Infrastructure
- **RabbitMQ Management**: http://localhost:15672 (guest/guest)
- **PostgreSQL**: localhost:5432 (school_user/school_password)
- **Redis**: localhost:6379

## Development Commands

### NX Commands

```bash
# Generate dependency graph
npm run graph

# Build all projects
npm run build:all

# Test all projects
npm run test:all

# Lint all projects
npm run lint:all

# Build only affected projects (based on git changes)
npm run affected:build

# Test only affected projects
npm run affected:test
```

### Docker Commands

```bash
# Start all services
npm run docker:up

# Stop all services
npm run docker:down

# View logs
npm run docker:logs

# Rebuild specific service
docker-compose up --build auth-service

# Remove volumes (reset database)
docker-compose down -v
```

## Project Structure

```
school-microservices/
├── apps/                      # All applications
│   ├── api-gateway/          # API Gateway (Express.js)
│   ├── auth-service/         # Auth microservice
│   ├── school-service/       # School microservice
│   ├── user-service/         # User microservice
│   ├── ...                   # Other backend services
│   ├── admin-frontend/       # Admin UI (Next.js)
│   ├── teacher-frontend/     # Teacher UI (Next.js)
│   └── ...                   # Other frontend apps
├── libs/                     # Shared libraries
│   ├── shared/
│   │   ├── types/
│   │   ├── utils/
│   │   └── constants/
│   ├── auth/
│   ├── database/
│   ├── messaging/
│   └── validation/
├── scripts/                  # Utility scripts
│   └── init-db.sql
├── docker-compose.yml        # Docker orchestration
├── .env.example             # Environment template
├── nx.json                  # NX configuration
└── package.json             # Root dependencies
```

## Next Steps

1. ✅ **NX Workspace is set up**
2. 🔄 **Next: Create shared libraries** (types, auth, database, messaging)
3. 📝 **Then: Build auth-service** (first microservice)
4. 📝 **Then: Build school-service** (second microservice)
5. 📝 **Then: Build api-gateway** (routing layer)
6. 📝 **Continue with remaining services...**

## Resources

- [NX Documentation](https://nx.dev) - See also: `README-NX.md`
- [ARCHITECTURE.md](./ARCHITECTURE.md) - Complete system architecture
- [Express.js Guide](https://expressjs.com)
- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [RabbitMQ Tutorials](https://www.rabbitmq.com/tutorials)

## Support

For issues or questions:
- Check existing documentation in `/docs`
- Review service-specific README files
- Consult ARCHITECTURE.md for system overview
