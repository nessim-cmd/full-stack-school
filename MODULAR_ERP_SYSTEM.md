# 🎯 Modular Service Management System - ERP Implementation

## Overview

We've implemented a complete modular service management system that allows school managers to enable/disable different features for each school, similar to Odoo's module system.

## What's New

### 1. **Service/Module System** 
Each school can now enable/disable 11 different services:

| Service | Icon | Description | Category |
|---------|------|-------------|----------|
| **Academic Management** | 📚 | Classes, subjects, lessons, exams, assignments | Core |
| **User Management** | 👥 | Teachers, students, parents | Core |
| **Attendance Tracking** | ✓ | Mark and track student attendance | Academic |
| **Internal Messaging** | 💬 | Messages between school users | Communication |
| **Announcements** | 📢 | School announcements | Communication |
| **School Calendar** | 📅 | Events and calendar management | Admin |
| **Finance & Payroll** | 💰 | Fees, invoices, payments, salaries | Finance |
| **Student Applications** | 📝 | Registration/application system | Admin |
| **Landing Page** | 🌐 | Customize school's public website | Admin |
| **Course Resources** | 📚 | Share course materials | Academic |
| **Notifications** | 🔔 | System notifications | Communication |

---

## How It Works

### For School Managers:

1. **Go to Manager Dashboard**
   - URL: `http://localhost:3000/saas/manager-dashboard`
   - Login with your manager credentials

2. **Click "Configure Services"** (orange button on school card)
   - Beautiful modal opens with all available services
   - Services are grouped by category (Core, Communication, Academic, Finance, Admin)
   - Each service shows icon, name, and description

3. **Enable/Disable Services**
   - Click on any service card to toggle it
   - Selected services show a blue highlight with checkmark
   - No limit on how many services can be enabled

4. **Save Changes**
   - Click "Save Services" button
   - Changes are immediately applied
   - Menu items in the admin/teacher/student dashboards will update

### For School Users (Admin, Teachers, Students, Parents):

The dashboard menu automatically adapts:
- **Only enabled services appear** in the left sidebar
- If a service is disabled, all related menu items are hidden
- For example:
  - If **Finance** is disabled → No Finance or Payroll menu items
  - If **Messaging** is disabled → No Messages menu item
  - If **Academic** is disabled → No Classes, Subjects, Lessons, Exams, Assignments

---

## Technical Architecture

### Files Created/Modified:

#### 1. **Service Configuration** (`src/lib/services.ts`)
- Defines all available services with metadata
- Helper functions:
  - `parseEnabledServices()` - Parse JSON to array
  - `serializeEnabledServices()` - Convert array to JSON
  - `isServiceEnabled()` - Check if service is enabled
  - `getEnabledServicesWithDetails()` - Get service objects with details
  - `getAllServicesWithStatus()` - Get all services with enabled/disabled status

#### 2. **API Endpoints**
- **`GET /api/saas/manager/services?schoolId=xxx`**
  - Fetch current enabled services for a school
  - Manager token required
  
- **`PUT /api/saas/manager/services`**
  - Update enabled services for a school
  - Body: `{ schoolId, enabledServices: ["service1", "service2", ...] }`
  - Manager token required

- **`GET /api/school/enabled-services`**
  - Fetch enabled services for current school
  - Auth token required
  - Used by school users (admin, teacher, student, parent)

#### 3. **UI Components**

**SchoolServicesModal** (`src/components/SchoolServicesModal.tsx`)
- Beautiful modal interface for managers to configure services
- Features:
  - Groups services by category with colored badges
  - Toggle switches for each service
  - Real-time UI updates
  - Save/Cancel buttons
  - Loading states
  - Toast notifications (success/error)
  - Responsive design

**DynamicMenu** (`src/components/DynamicMenu.tsx`)
- Enhanced menu component for school dashboards
- Filters menu items based on:
  - User role (admin, teacher, student, parent)
  - Enabled services for the school
- Each menu item can specify `requiredService` field
- Only visible items appear in the menu

#### 4. **React Hook**
**useEnabledServices** (`src/hooks/useEnabledServices.ts`)
- Custom hook for client components to fetch enabled services
- Returns: `{ enabledServices, loading, error, isServiceEnabled }`
- Can be used in any component that needs service information

#### 5. **Database**
- Added `enabledServices` field to `School` model (stores JSON array)
- Example: `"["academic", "users", "messaging"]"`

#### 6. **Manager Dashboard Updates**
- Updated `/saas/manager-dashboard/page.tsx`
- Added "Configure Services" button (orange, with gear icon)
- Integrated SchoolServicesModal

---

## Usage Examples

### For Developers:

#### Check if a service is enabled in a server component:
```typescript
import { parseEnabledServices } from "@/lib/services";

const school = await prisma.school.findUnique(...);
const enabledServices = parseEnabledServices(school.enabledServices);
const hasMessaging = enabledServices.includes("messaging");
```

#### Use DynamicMenu in layout:
```typescript
// In your layout.tsx
import DynamicMenu from "@/components/DynamicMenu";

export default function DashboardLayout({ children }) {
  return (
    <div>
      <DynamicMenu /> {/* Replaces the old Menu component */}
      {children}
    </div>
  );
}
```

#### Filter menu items in a client component:
```typescript
"use client";
import { useEnabledServices } from "@/hooks/useEnabledServices";

export function MyComponent() {
  const { enabledServices, isServiceEnabled } = useEnabledServices();
  
  if (isServiceEnabled("messaging")) {
    return <MessagingFeature />;
  }
  
  return <p>Messaging is disabled for this school</p>;
}
```

### For Product Managers:

#### Add a new service:

1. Add to `ALL_SERVICES` in `src/lib/services.ts`:
```typescript
new_service: {
  key: "new_service",
  name: "New Service",
  description: "What this service does",
  icon: "🆕",
  category: "academic",
}
```

2. Update type definition:
```typescript
export type ServiceKey = 
  | "academic"
  | "users"
  // ... add new service
  | "new_service";
```

3. Add menu items in `src/components/DynamicMenu.tsx`:
```typescript
{
  icon: "/icon.png",
  label: "New Feature",
  href: "/list/new-feature",
  visible: ["admin"],
  requiredService: "new_service",
}
```

---

## Features & Benefits

✅ **Manager Control**: Full control over which services are available
✅ **Clean UI**: Services organized by category with beautiful modal
✅ **Automatic Menu Filtering**: No need to manually hide/show menu items
✅ **Flexible**: Easy to add new services in the future
✅ **Professional**: Similar to Odoo/enterprise ERP systems
✅ **Performance**: Server-side filtering prevents unauthorized access
✅ **User Experience**: Clear indication of which features are available

---

## Default Configuration

When a new school is created, **all services are enabled by default**.

To change this, update `getDefaultServices()` in `src/lib/services.ts`:
```typescript
export function getDefaultServices(): ServiceKey[] {
  return [
    "academic",
    "users",
    "attendance",
    // Only include services you want enabled by default
    // Remove "finance" if you want it disabled by default, etc.
  ];
}
```

---

## Testing the Feature

### Step 1: Login to Manager Dashboard
```
URL: http://localhost:3000/saas/manager-dashboard
Email: manager@demo.com
Password: password
```

### Step 2: Click "Configure Services" on a school card
- Orange button with gear icon

### Step 3: Try enabling/disabling services
- Click on service cards to toggle
- Click "Save Services"

### Step 4: Login to the school dashboard
```
URL: http://[school-slug].localhost:3000/login
```
- Notice that menu items are filtered based on enabled services
- For example, if Finance is disabled, you won't see Finance or Payroll menu items

### Step 5: Disable a service and check again
- Go back to Manager Dashboard
- Disable "Finance" service
- Login to school dashboard again
- Verify that Finance/Payroll menu items are gone

---

## Future Enhancements

1. **Service Plans**
   - Different plans include different services
   - Premium plan includes all services, Free plan includes only basics

2. **Service Analytics**
   - Track which services are used most
   - Usage metrics per service

3. **Service Marketplace**
   - Allow schools to purchase additional modules
   - One-click installation

4. **Conditional Features**
   - Some services might require other services
   - Automatically enable dependencies

5. **Custom Services**
   - Allow schools to create custom modules
   - White-label features

---

## Summary

You now have a fully functional modular ERP system where:
- ✅ Managers can enable/disable services per school
- ✅ Beautiful, professional UI for service management
- ✅ Automatic menu filtering based on enabled services
- ✅ Easy to add new services in the future
- ✅ Similar to Odoo/enterprise systems

The system is production-ready and can be extended further based on your needs!
