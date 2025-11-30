# 🎯 Step-by-Step Guide: Create Manager with Two Schools

## 📋 What You'll Create:
- 1 School Manager account (John Manager)
- 2 Schools:
  - School 1: "Springfield High School"
  - School 2: "Riverside Academy"
- Each school will have its own admin account

---

## 🚀 PART 1: Create Your Manager Account & First School

### Step 1: Open Your Browser
1. Open your web browser (Chrome, Firefox, Safari, etc.)
2. Navigate to:
   ```
   http://localhost:3000/saas
   ```

### Step 2: View the SaaS Landing Page
You should see:
- ✅ "SchoolHub SaaS" logo at the top
- ✅ "Modern School Management Made Simple" heading
- ✅ Features section
- ✅ Pricing section
- ✅ "Start Free Trial" button (blue/purple gradient)
- ✅ "Manager Login" link in the top right

### Step 3: Start Registration
1. Click the **"Start Free Trial"** button
   - OR click "Sign Up" in the navigation
   - OR go directly to: `http://localhost:3000/saas/register-school`

2. You should see a registration form with 3 steps:
   - Step 1: School Info (highlighted in blue)
   - Step 2: Your Account (gray)
   - Step 3: Choose Plan (gray)

---

### Step 4: Fill in School Information (Step 1)

**School Name:**
```
Springfield High School
```

**School Subdomain:**
```
springfield-high
```
*(This will auto-fill as you type the school name)*

**What this means:**
- Your school will be accessible at: `springfield-high.localhost:3000`
- This is your school's unique identifier

**Then click:** **"Continue"** button

---

### Step 5: Create Your Manager Account (Step 2)

Now you'll see Step 2 highlighted. Fill in:

**Your Full Name:**
```
John Manager
```

**Email Address:**
```
john.manager@example.com
```

**Password:**
```
Manager123!
```

**Confirm Password:**
```
Manager123!
```

**Important Notes:**
- ✅ Use a password you'll remember
- ✅ This email/password is for the MANAGER account (not school admin)
- ✅ You'll use this to login to the manager dashboard

**Then click:** **"Continue"** button

---

### Step 6: Choose Your Plan (Step 3)

You'll see 3 plan options:

1. **Free Trial** - $0 for 30 days ⭐ (Select this one)
2. **Monthly Plan** - $49/month
3. **Yearly Plan** - $490/year

**Select:** **"Free Trial"** (click the radio button)

**Then click:** **"Create School"** button

---

### Step 7: Save Your Admin Credentials! 🚨 IMPORTANT

After clicking "Create School", you'll see a success message with:

```
✅ School created successfully!

Admin Credentials for Springfield High School:
Username: admin_springfield-high
Password: [random password like: abc123xy]

⚠️ SAVE THESE CREDENTIALS NOW!
You'll need them to access your school dashboard.
```

**ACTION REQUIRED:**
1. **Copy the username:** `admin_springfield-high`
2. **Copy the password:** (the random one shown)
3. **Save them in a text file or notepad**

Example:
```
School 1: Springfield High School
Admin Username: admin_springfield-high
Admin Password: abc123xy
School URL: http://springfield-high.localhost:3000
```

---

### Step 8: Login to Manager Dashboard

After registration, you'll be redirected to:
```
http://localhost:3000/saas/manager-login
```

**Login with:**
- Email: `john.manager@example.com`
- Password: `Manager123!`

**Click:** **"Sign In"** button

---

### Step 9: View Your Manager Dashboard

You should now see:
- ✅ "Welcome back, John Manager!" heading
- ✅ Your first school card: "Springfield High School"
- ✅ Trial status: "Trial: 30 days left"
- ✅ Plan: "FREE"
- ✅ Subdomain: "springfield-high.schoolhub.com"
- ✅ "Open Dashboard" button
- ✅ Settings icon (gear)
- ✅ "Add New School" button at the top

**Congratulations! 🎉 You've created your first school!**

---

## 🚀 PART 2: Create Your Second School

### Step 10: Add Second School

From your Manager Dashboard:

1. Click the **"+ Add New School"** button (blue/purple gradient button at the top)

2. You'll be taken back to the registration form

---

### Step 11: Fill in Second School Information (Step 1)

**School Name:**
```
Riverside Academy
```

**School Subdomain:**
```
riverside-academy
```
*(Auto-filled)*

**Then click:** **"Continue"**

---

### Step 12: Manager Account (Step 2)

**Good news!** Since you're already logged in as a manager, the form should remember your details:

**Your Full Name:**
```
John Manager
```
*(Already filled)*

**Email Address:**
```
john.manager@example.com
```
*(Already filled)*

**Password:**
```
Manager123!
```

**Confirm Password:**
```
Manager123!
```

**Then click:** **"Continue"**

---

### Step 13: Choose Plan for Second School (Step 3)

**Select:** **"Free Trial"** (30 days)

**Then click:** **"Create School"**

---

### Step 14: Save Second School Admin Credentials! 🚨 IMPORTANT

You'll see:

```
✅ School created successfully!

Admin Credentials for Riverside Academy:
Username: admin_riverside-academy
Password: [different random password like: xyz789ab]

⚠️ SAVE THESE CREDENTIALS NOW!
```

**ACTION REQUIRED:**
1. **Copy the username:** `admin_riverside-academy`
2. **Copy the password:** (the random one shown)
3. **Add to your notes**

Example:
```
School 2: Riverside Academy
Admin Username: admin_riverside-academy
Admin Password: xyz789ab
School URL: http://riverside-academy.localhost:3000
```

---

### Step 15: View Both Schools in Manager Dashboard

You'll be redirected back to manager login. Login again with:
- Email: `john.manager@example.com`
- Password: `Manager123!`

**You should now see TWO school cards:**

**Card 1: Springfield High School**
- Trial: 30 days left
- Plan: FREE
- Subdomain: springfield-high.schoolhub.com
- [Open Dashboard] [⚙️]

**Card 2: Riverside Academy**
- Trial: 30 days left
- Plan: FREE
- Subdomain: riverside-academy.schoolhub.com
- [Open Dashboard] [⚙️]

**Congratulations! 🎉 You now manage TWO schools!**

---

## 🎓 PART 3: Access Your Schools

### Option A: Access Springfield High School

**Method 1: From Manager Dashboard**
1. Click **"Open Dashboard"** on Springfield High School card
2. You'll be taken to: `http://springfield-high.localhost:3000`

**Method 2: Direct URL**
1. Open new tab
2. Go to: `http://springfield-high.localhost:3000`

**You should see:**
- Springfield High School homepage
- "Welcome to Springfield High School" heading
- School branding and information

---

### Option B: Access Riverside Academy

**Method 1: From Manager Dashboard**
1. Click **"Open Dashboard"** on Riverside Academy card
2. You'll be taken to: `http://riverside-academy.localhost:3000`

**Method 2: Direct URL**
1. Open new tab
2. Go to: `http://riverside-academy.localhost:3000`

**You should see:**
- Riverside Academy homepage
- "Welcome to Riverside Academy" heading
- School branding and information

---

## 🔑 PART 4: Login as School Admin

### Login to Springfield High School Admin

1. Go to: `http://springfield-high.localhost:3000/login`

2. **Login with:**
   - Username: `admin_springfield-high`
   - Password: (the one you saved in Step 7)

3. Click **"Sign In"**

4. **You should see:**
   - Admin Dashboard
   - Left sidebar with menu items
   - Students, Teachers, Parents, Classes, etc.
   - Welcome message

**Now you can:**
- ✅ Create teachers
- ✅ Create students
- ✅ Create classes
- ✅ Manage the entire school

---

### Login to Riverside Academy Admin

1. **Open a NEW browser tab** (or use incognito/private mode)

2. Go to: `http://riverside-academy.localhost:3000/login`

3. **Login with:**
   - Username: `admin_riverside-academy`
   - Password: (the one you saved in Step 14)

4. Click **"Sign In"**

5. **You should see:**
   - Admin Dashboard for Riverside Academy
   - Completely separate from Springfield High

**Now you can:**
- ✅ Manage Riverside Academy independently
- ✅ Create different teachers, students, classes
- ✅ Data is completely isolated from Springfield High

---

## 📊 Summary: What You Now Have

### 1 Manager Account:
```
Email: john.manager@example.com
Password: Manager123!
Dashboard: http://localhost:3000/saas/manager-dashboard
```

### School 1: Springfield High School
```
Subdomain: springfield-high
Homepage: http://springfield-high.localhost:3000
Admin Login: http://springfield-high.localhost:3000/login
Admin Username: admin_springfield-high
Admin Password: [your saved password]
Trial: 30 days
Plan: FREE
```

### School 2: Riverside Academy
```
Subdomain: riverside-academy
Homepage: http://riverside-academy.localhost:3000
Admin Login: http://riverside-academy.localhost:3000/login
Admin Username: admin_riverside-academy
Admin Password: [your saved password]
Trial: 30 days
Plan: FREE
```

---

## 🎯 Quick Reference: All Your URLs

| Purpose | URL |
|---------|-----|
| **SaaS Landing** | http://localhost:3000/saas |
| **Manager Login** | http://localhost:3000/saas/manager-login |
| **Manager Dashboard** | http://localhost:3000/saas/manager-dashboard |
| **Springfield Homepage** | http://springfield-high.localhost:3000 |
| **Springfield Login** | http://springfield-high.localhost:3000/login |
| **Springfield Admin** | http://springfield-high.localhost:3000/admin |
| **Riverside Homepage** | http://riverside-academy.localhost:3000 |
| **Riverside Login** | http://riverside-academy.localhost:3000/login |
| **Riverside Admin** | http://riverside-academy.localhost:3000/admin |

---

## 🔄 Switching Between Schools

### As Manager:
1. Go to: `http://localhost:3000/saas/manager-dashboard`
2. Login with: `john.manager@example.com` / `Manager123!`
3. Click "Open Dashboard" on any school
4. Switch between schools anytime from manager dashboard

### As Admin:
- Each school has its own login
- Use different browser tabs or profiles
- Or logout from one school and login to another

---

## ✅ Verification Checklist

Check that everything works:

- [ ] Can access SaaS landing page
- [ ] Created manager account successfully
- [ ] Created Springfield High School
- [ ] Saved Springfield admin credentials
- [ ] Created Riverside Academy
- [ ] Saved Riverside admin credentials
- [ ] Can see both schools in manager dashboard
- [ ] Can access Springfield homepage
- [ ] Can login to Springfield admin
- [ ] Can access Riverside homepage
- [ ] Can login to Riverside admin
- [ ] Both schools have separate data

---

## 🎊 Next Steps

Now that you have 2 schools, you can:

### In Springfield High School:
1. Login as admin
2. Create teachers (e.g., Math Teacher, English Teacher)
3. Create classes (e.g., Grade 10A, Grade 11B)
4. Create students
5. Create parents
6. Set up lessons and schedules

### In Riverside Academy:
1. Login as admin
2. Create DIFFERENT teachers
3. Create DIFFERENT classes
4. Create DIFFERENT students
5. Verify data is completely separate

### As Manager:
1. Monitor both schools from dashboard
2. Check trial days remaining
3. Create more schools if needed
4. Upgrade plans when ready

---

## 🐛 Troubleshooting

### Can't see second school in manager dashboard?
- Logout and login again
- Refresh the page
- Check database for SchoolMembership records

### Forgot admin password?
- Check your saved notes
- Or check console logs during registration
- Or reset via database (advanced)

### Schools showing same data?
- Make sure you're using different subdomains
- Check that schoolId is different in database
- Verify you're logged into correct school

### Can't access school homepage?
- Make sure you're using the correct subdomain
- Check that school was created successfully
- Verify database has the school record

---

## 📝 Your Credentials Template

**Copy this and fill in your actual passwords:**

```
=================================
MANAGER ACCOUNT
=================================
Email: john.manager@example.com
Password: Manager123!
Manager Dashboard: http://localhost:3000/saas/manager-dashboard

=================================
SPRINGFIELD HIGH SCHOOL
=================================
School Name: Springfield High School
Subdomain: springfield-high
Homepage: http://springfield-high.localhost:3000
Admin Login: http://springfield-high.localhost:3000/login
Admin Username: admin_springfield-high
Admin Password: _________________ (fill this in!)

=================================
RIVERSIDE ACADEMY
=================================
School Name: Riverside Academy
Subdomain: riverside-academy
Homepage: http://riverside-academy.localhost:3000
Admin Login: http://riverside-academy.localhost:3000/login
Admin Username: admin_riverside-academy
Admin Password: _________________ (fill this in!)
```

---

## 🎉 You're All Set!

You now have:
- ✅ 1 Manager account
- ✅ 2 Schools with complete isolation
- ✅ 2 Admin accounts (one per school)
- ✅ Full control over both schools

**Happy School Managing! 🎓**

---

## 📞 Need Help?

If you get stuck:
1. Check the troubleshooting section above
2. Review the SAAS_GUIDE.md for detailed info
3. Check console logs for errors
4. Verify database is running: `docker compose ps`
