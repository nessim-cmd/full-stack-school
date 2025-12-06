# Testing Modular Services System 🧪

## Quick Start - Test Account

**Email:** `bennasrnessim@outlook.com`  
**Password:** `911992.2`

---

## Step 1: Start Your Application

Make sure your Next.js application is running:

```bash
npm run dev
```

The app should be available at `http://localhost:3000`

---

## Step 2: Log In as Manager

1. Navigate to the login page
2. Enter your test credentials:
   - **Email:** `bennasrnessim@outlook.com`
   - **Password:** `911992.2`
3. Click "Sign In"

---

## Step 3: Access Manager Dashboard

After logging in, you should be redirected to the **Manager Dashboard** where you'll see:

- School cards showing all schools you manage
- Each school card displays:
  - School name: "SchoolHub Demo"
  - Settings icon in the top-right corner
  - Basic school information

---

## Step 4: Test Service Configuration Modal

### Opening the Modal

1. Look for the **"Configure Services"** button (orange/amber gradient)
2. Click the settings/gear icon on a school card
3. The **SchoolServicesModal** should appear

### What You Should See

The modal displays services organized by **5 categories**:

#### 📚 **Academic Services** (Blue Badge)
- ✅ Classes & Timetable
- ✅ Assignments
- ✅ Exams & Results

#### 👥 **Users & Organization** (Purple Badge)
- ✅ Staff Management
- ✅ Student Management
- ✅ Parent Portal

#### 📢 **Communication** (Green Badge)
- ✅ Messaging System
- ✅ Announcements
- ✅ Event Calendar

#### 💰 **Operations** (Orange Badge)
- ✅ Finance Management
- ✅ Attendance Tracking

#### 📊 **Additional** (Indigo Badge)
- ✅ Resources

---

## Step 5: Test Service Toggles

### Enable/Disable Services

1. **Find a service** - e.g., "Messaging System"
2. **Click the service card** to toggle it on/off
3. **Visual Feedback:**
   - ✅ **Enabled** = Blue checkmark, card is highlighted
   - ❌ **Disabled** = Gray appearance, no checkmark

4. **Click "Save Changes"** button to persist the configuration

### Expected Behavior

- Services toggle smoothly with visual feedback
- Success toast notification appears: "✓ Services updated successfully!"
- Modal closes after saving
- Changes are persisted to the database

---

## Step 6: Verify Menu Updates

After saving service configuration:

1. **Navigate to Dashboard** or **School Users** area
2. **Open the side menu**
3. **Menu items should filter based on enabled services:**

**If Messaging is ENABLED:**
- ✅ "Messages" menu item appears

**If Messaging is DISABLED:**
- ❌ "Messages" menu item disappears

**If Finance is ENABLED:**
- ✅ "Finance" menu item appears

**If Finance is DISABLED:**
- ❌ "Finance" menu item disappears

**Similarly for other services:**
- Attendance Tracking → "Attendance" menu
- Classes → "Classes" menu
- Students → "Students" menu
- Teachers → "Teachers" menu
- Announcements → "Announcements" menu
- Events → "Events" menu
- Resources → "Resources" menu

---

## Step 7: Test API Endpoints (Optional)

### Get Enabled Services for a School

**Request:**
```bash
curl -H "Authorization: Bearer YOUR_TOKEN" \
  "http://localhost:3000/api/saas/manager/services?schoolId=SCHOOL_ID"
```

**Expected Response:**
```json
{
  "schoolId": "6d77f47e-5b20-42f6-b152-70b32b046ec9",
  "enabledServices": [
    "academic",
    "users",
    "messaging",
    "attendance",
    "finance"
  ]
}
```

### Update Enabled Services

**Request:**
```bash
curl -X PUT -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "schoolId": "6d77f47e-5b20-42f6-b152-70b32b046ec9",
    "enabledServices": ["academic", "users", "messaging"]
  }' \
  "http://localhost:3000/api/saas/manager/services"
```

---

## Step 8: Test with Multiple Schools (Advanced)

If you want to test with multiple schools:

1. **Create another test school:**
   ```bash
   # Use admin panel or create via API
   ```

2. **Link your test manager to another school**

3. **Test different service configurations per school:**
   - School 1: All services enabled
   - School 2: Only academic services enabled
   - School 3: Only communication services enabled

4. **Verify menu filtering works correctly for each school**

---

## Testing Checklist ✅

### UI/UX Tests
- [ ] Modal opens without errors
- [ ] All 11 services display correctly
- [ ] Services are grouped by category
- [ ] Category badges show correct colors
- [ ] Toggle buttons work on each service
- [ ] Visual feedback appears on toggle
- [ ] "Save Changes" button works
- [ ] Success notification appears
- [ ] Modal closes after save
- [ ] Responsive design works on mobile/tablet

### Functionality Tests
- [ ] Services save correctly to database
- [ ] Menu filters based on enabled services
- [ ] Menu shows/hides items dynamically
- [ ] Multiple schools have independent service configs
- [ ] API endpoints return correct data
- [ ] API endpoints update data correctly

### Error Handling Tests
- [ ] Test closing modal without saving
- [ ] Test enabling/disabling all services
- [ ] Test rapid clicking on toggles
- [ ] Test with bad/invalid data (optional)
- [ ] Test with no internet (optional)

### Performance Tests
- [ ] Modal opens quickly (< 1 second)
- [ ] Toggle response is instant
- [ ] Save completes in < 2 seconds
- [ ] Menu filtering is instant

---

## Troubleshooting

### Issue: Modal doesn't open
**Solution:**
- Check browser console for errors
- Verify you're logged in as a manager
- Clear browser cache and reload

### Issue: Services don't toggle
**Solution:**
- Check network tab for API failures
- Verify JWT token is valid
- Check server logs for errors

### Issue: Menu doesn't update
**Solution:**
- Hard refresh the page (Ctrl+Shift+R)
- Clear browser cache
- Check if DynamicMenu is properly imported in layout

### Issue: "Services updated" notification doesn't appear
**Solution:**
- Check if react-toastify is installed
- Verify Toaster component is in your layout

### Issue: Database shows wrong data
**Solution:**
- Run `npx prisma migrate reset` to reset database
- Re-run seed: `npx tsx prisma/seed.ts`

---

## Database Verification

To manually check what services are enabled:

```bash
npx prisma studio
```

Then:
1. Navigate to the **School** table
2. Find the school: "SchoolHub Demo"
3. Check the **enabledServices** field
4. Should contain a JSON array of enabled service keys

**Example:**
```json
["academic", "users", "messaging", "attendance", "finance", "announcements", "events", "resources", "userManagement", "staffManagement", "parentPortal"]
```

---

## Additional Test Data

Your test account comes with:

- **1 School:** SchoolHub Demo
- **6 Grades:** Grade 1-6
- **6 Classes:** 1A-6A
- **10 Subjects:** Math, Science, English, etc.
- **15 Teachers:** teacher1-teacher15
- **25 Parents:** parentId1-parentId25
- **50 Students:** student1-student50
- **5 Events:** Event 1-5
- **5 Announcements:** Announcement 1-5
- **30 Lessons:** Lesson 1-30
- **10 Exams:** Exam 1-10
- **10 Assignments:** Assignment 1-10

Use these for additional testing of service features!

---

## Support & Feedback

If you encounter any issues:

1. Check the **browser console** for errors (F12)
2. Check the **server logs** in terminal
3. Review the **MODULAR_SERVICES_IMPLEMENTATION.md** for technical details
4. Check **MODULAR_ERP_SYSTEM.md** for architecture overview

---

**Happy Testing! 🚀**
