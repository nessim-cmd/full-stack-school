# Quick Start: Modular ERP Service Management

## 🚀 Getting Started (5 minutes)

### Prerequisites
- Database running: `docker-compose up -d postgres`
- Server running: `npm run dev`
- Manager logged in at: `http://localhost:3000/saas/manager-dashboard`

---

## Step 1: Access Service Configuration

1. Open **Manager Dashboard**: `http://localhost:3000/saas/manager-dashboard`
2. Login with:
   - Email: `manager@demo.com`
   - Password: `password`
3. Find your school card (e.g., "SchoolHub Demo")
4. Click the **orange "Configure Services"** button

---

## Step 2: Configure Services

You'll see a modal with 11 services grouped by category:

### Core Services (always shown)
- 👥 User Management
- 📚 Academic Management

### Communication
- 💬 Internal Messaging
- 📢 Announcements  
- 🔔 Notifications

### Academic
- ✓ Attendance Tracking
- 📚 Course Resources

### Finance
- 💰 Finance & Payroll

### Administration
- 📅 School Calendar
- 📝 Student Applications
- 🌐 Landing Page

---

## Step 3: Enable/Disable Services

**To enable a service:**
- Click the service card
- It will highlight in blue with a checkmark
- All related menu items will appear in dashboards

**To disable a service:**
- Click the service card again
- It will return to gray
- All related menu items will disappear from dashboards

---

## Step 4: Save Changes

Click the **"Save Services"** button at the bottom right.

You'll see a success message: "Services updated successfully!"

---

## Step 5: Verify the Changes

1. Go to the school dashboard:
   - `http://[school-slug].localhost:3000/login`
   - Example: `http://demo-high.localhost:3000/login`

2. Login with admin credentials

3. Check the left sidebar menu:
   - Only enabled services appear
   - For example, if Finance is disabled:
     - ❌ Finance menu item is hidden
     - ❌ Payroll menu item is hidden
     - ✅ All other enabled services still show

---

## 📋 Service to Menu Item Mapping

### Academic Service
Shows these menu items:
- Classes
- Subjects
- Lessons
- Exams
- Assignments
- Results

### User Management Service
Shows these menu items:
- Teachers
- Students
- Parents

### Attendance Service
Shows these menu items:
- Mark Attendance (for teachers)
- Attendance (for all users)

### Messaging Service
Shows these menu items:
- Messages

### Announcements Service
Shows these menu items:
- Announcements

### Finance Service
Shows these menu items:
- Finance
- Payroll

### Applications Service
Shows these menu items:
- Applications (for admin)

### Events Service
Shows these menu items:
- Events

### Resources Service
Shows these menu items:
- Resources

### Notifications Service
Shows these menu items:
- Notifications

---

## 🎯 Example Scenarios

### Scenario 1: Disable Finance Module
1. Click "Configure Services"
2. Uncheck "Finance & Payroll"
3. Click "Save Services"
4. Login to admin dashboard
5. Finance and Payroll menu items are gone ✅

### Scenario 2: Basic School (Only Academic + Users)
1. Uncheck all services except:
   - User Management
   - Academic Management
2. Click "Save Services"
3. Admin only sees basic educational features ✅

### Scenario 3: Communications-Heavy School
1. Keep all communication services enabled:
   - Internal Messaging
   - Announcements
   - Notifications
2. Disable Finance and Applications
3. Focus on student-teacher communication ✅

---

## 🔧 Developer Notes

### To use services in your code:

**Server Component (Check services server-side):**
```typescript
import { parseEnabledServices } from "@/lib/services";
import prisma from "@/lib/prisma";

export default async function MyComponent() {
  const session = await getSessionUser();
  const school = await prisma.school.findUnique({
    where: { id: session.schoolId }
  });
  
  const enabled = parseEnabledServices(school?.enabledServices);
  const hasFinance = enabled.includes("finance");
  
  if (hasFinance) {
    return <FinanceComponent />;
  }
  return <p>Finance disabled</p>;
}
```

**Client Component (Check services client-side):**
```typescript
"use client";
import { useEnabledServices } from "@/hooks/useEnabledServices";

export function MyComponent() {
  const { enabledServices, isServiceEnabled } = useEnabledServices();
  
  return isServiceEnabled("messaging") ? 
    <MessagingFeature /> : 
    <p>Messaging disabled</p>;
}
```

---

## ❓ FAQ

**Q: Can I change services for multiple schools?**
A: Yes! Each school has its own service configuration. You can set different services for different schools.

**Q: What happens to data when I disable a service?**
A: Data is not deleted. If you disable and re-enable a service, all data comes back.

**Q: Do students see disabled services?**
A: No! Students only see menu items for enabled services in their dashboard.

**Q: Can I add new services?**
A: Yes! See MODULAR_ERP_SYSTEM.md for instructions on adding new services.

**Q: Is there a default configuration?**
A: Yes, all services are enabled by default for new schools. You can change this in `src/lib/services.ts` in the `getDefaultServices()` function.

---

## 📞 Support

For detailed technical documentation, see: **MODULAR_ERP_SYSTEM.md**

For issues or questions, refer to the main README.md
