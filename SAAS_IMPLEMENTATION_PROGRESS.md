# SaaS Multi-Tenancy Implementation Progress

## Overview
Transforming the school management system into a multi-tenant SaaS application where multiple schools can use the same platform with isolated data.

## ✅ Completed Steps

### 1. Database Schema Update (Multi-Tenancy)
- **Created `School` model** with:
  - Unique slug for subdomain/URL identification
  - Subscription fields: `plan`, `subscriptionStatus`, `trialEndsAt`, `subscriptionEndsAt`
  - Support for FREE, MONTHLY, and YEARLY plans
  - Subscription statuses: TRIAL, ACTIVE, PAST_DUE, CANCELED

- **Added `schoolId` to ALL models**:
  - Users: Admin, Teacher, Student, Parent
  - Academic: Grade, Class, Subject, Lesson, Exam, Assignment, Result
  - Communication: Message, Notification, Announcement, Event
  - Resources: Resource, Attendance, RegistrationRequest
  - Settings: SiteSettings (one-to-one with School)

- **Unique Constraints Strategy**:
  - **Global unique**: `username`, `email`, `phone` for users (simplifies login)
  - **School-scoped unique**: `Grade.level`, `Class.name`, `Subject.name` (each school can have "Grade 1", "Class A", etc.)

### 2. Authentication Updates
- **Updated JWT Token Payload**:
  - Now includes: `{ id, role, schoolId }`
  - Login route (`/api/auth/login`) extracts `schoolId` from user record and includes it in token

- **Updated Session Management**:
  - `SessionUser` interface now includes `schoolId`
  - `getSessionUser()` function returns `schoolId` for use in Server Components

### 3. Database Seeding
- **Created default "SchoolHub Demo" school**
- All seed data (admins, teachers, students, etc.) linked to this demo school
- Proper deletion order to respect foreign key constraints

## 🚧 Next Steps Required

### Step 1: Update ALL Prisma Queries (CRITICAL)
Every `prisma.*.findMany()`, `create()`, `update()`, `delete()` call must filter by `schoolId`.

**Files to Update** (estimated 50+ files):
- `/src/app/(dashboard)/list/*/page.tsx` - All list pages
- `/src/lib/actions.ts` - All CRUD actions
- `/src/app/api/*/route.ts` - All API routes
- `/src/components/*Table.tsx` - Table components

**Example Changes**:
```typescript
// BEFORE
const students = await prisma.student.findMany();

// AFTER
const session = await getSessionUser();
const students = await prisma.student.findMany({
  where: { schoolId: session.schoolId }
});
```

### Step 2: Create School Registration Flow
**New Pages Needed**:
1. **`/register-school`** - School manager registration form
   - Fields: School Name, Admin Name, Admin Email, Plan Selection
   - Generates: School record, Admin user, SiteSettings
   - Sends: Welcome email with login credentials

2. **`/pricing`** - Plan selection page (FREE, MONTHLY, YEARLY)
   - Display features for each plan
   - For now: UI only (no payment integration)

**New API Routes**:
- `/api/schools/register` - Creates new school + admin user
- `/api/schools/check-slug` - Validates school slug availability

### Step 3: Subscription & Trial Management
**Dashboard Layout Update** (`/src/app/(dashboard)/layout.tsx`):
```typescript
const session = await getSessionUser();
const school = await prisma.school.findUnique({
  where: { id: session.schoolId }
});

// Check trial status
if (new Date() > school.trialEndsAt && school.subscriptionStatus === 'TRIAL') {
  redirect('/billing/trial-expired');
}

// Check subscription status
if (school.subscriptionStatus === 'PAST_DUE' || school.subscriptionStatus === 'CANCELED') {
  redirect('/billing/payment-required');
}
```

**New Pages**:
- `/billing` - Billing dashboard (UI only for now)
- `/billing/trial-expired` - Trial expiration notice
- `/billing/payment-required` - Payment required page

### Step 4: School-Specific Landing Pages
**Update `/src/app/page.tsx`**:
- Detect if accessing via school context (cookie, subdomain, or path)
- If no school: Show SaaS marketing page
- If school exists: Show that school's custom landing page

**Options for School Identification**:
1. **Path-based** (easiest for dev): `/s/[slug]` → school landing
2. **Cookie-based**: Set `schoolSlug` cookie on first visit
3. **Subdomain** (production): `lincoln.yourapp.com`

### Step 5: Update Settings Page
**`/src/app/(dashboard)/settings/page.tsx`**:
- Currently updates `SiteSettings` with hardcoded ID
- Must update to use `session.schoolId`:
```typescript
const settings = await prisma.siteSettings.findUnique({
  where: { schoolId: session.schoolId }
});
```

### Step 6: Update Registration/Application Flow
**`/src/app/apply/page.tsx`** and `/api/registration/*`:
- Need to know which school the applicant is applying to
- Options:
  - URL parameter: `/apply?school=demo`
  - Cookie from landing page visit
  - Subdomain detection

## 📋 Estimated Work Remaining

| Task | Complexity | Time Estimate |
|------|-----------|---------------|
| Update all Prisma queries | High | 4-6 hours |
| School registration flow | Medium | 2-3 hours |
| Trial/subscription checks | Medium | 2-3 hours |
| School landing pages | Medium | 2-3 hours |
| Billing UI pages | Low | 1-2 hours |
| Testing & bug fixes | High | 3-4 hours |
| **TOTAL** | | **14-21 hours** |

## 🎯 Current Status
- **Database**: ✅ Fully multi-tenant ready
- **Authentication**: ✅ Includes schoolId
- **Queries**: ❌ Still global (CRITICAL - must fix)
- **Registration**: ❌ Not implemented
- **Billing**: ❌ Not implemented
- **Landing Pages**: ⚠️ Partially ready (needs school detection)

## 🔧 Immediate Next Action
The most critical task is **updating all Prisma queries** to filter by `schoolId`. Without this, schools will see each other's data, which is a major security issue.

Would you like me to:
1. Start updating the Prisma queries systematically?
2. Create the school registration flow first?
3. Implement the trial/subscription checking logic?
