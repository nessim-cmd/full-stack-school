# 📋 Manual Testing Checklist

Use this checklist to verify all features through the browser interface.

---

## 🔐 Authentication Tests

### Login
- [ ] Navigate to http://localhost:3000/login
- [ ] Try logging in with admin credentials
- [ ] Verify successful redirect to admin dashboard
- [ ] Check that JWT token is stored
- [ ] Verify logout functionality

### Password Reset
- [ ] Click "Forgot Password" link
- [ ] Enter email address
- [ ] Verify OTP is sent (check email or logs)
- [ ] Enter OTP code
- [ ] Set new password
- [ ] Verify password visibility toggle works
- [ ] Login with new password

---

## 👨‍💼 Admin Dashboard Tests

### Students Management
- [ ] Navigate to /admin/students
- [ ] **Create Student:**
  - [ ] Click "Create" button
  - [ ] Fill in all required fields
  - [ ] Select parent from dropdown
  - [ ] Select class and grade
  - [ ] Submit form
  - [ ] Verify success message
  - [ ] Check student appears in table
- [ ] **Update Student:**
  - [ ] Click edit icon on a student
  - [ ] Modify information
  - [ ] Submit form
  - [ ] Verify changes are saved
- [ ] **Delete Student:**
  - [ ] Click delete icon
  - [ ] Confirm deletion
  - [ ] Verify student is removed
- [ ] **Search:**
  - [ ] Use search bar to find students
  - [ ] Verify results are filtered
- [ ] **Pagination:**
  - [ ] Navigate through pages
  - [ ] Verify correct items per page

### Teachers Management
- [ ] Navigate to /admin/teachers
- [ ] **Create Teacher:**
  - [ ] Click "Create" button
  - [ ] Fill in all required fields
  - [ ] Select subjects
  - [ ] Submit form
  - [ ] Verify success message
- [ ] **Update Teacher:**
  - [ ] Edit teacher information
  - [ ] Change assigned subjects
  - [ ] Save changes
- [ ] **Delete Teacher:**
  - [ ] Delete a teacher
  - [ ] Verify cascade handling
- [ ] **Search & Filter:**
  - [ ] Test search functionality
  - [ ] Test subject filter

### Parents Management
- [ ] Navigate to /admin/parents
- [ ] **Create Parent:**
  - [ ] Fill in parent details
  - [ ] Submit form
  - [ ] Verify creation
- [ ] **Update Parent:**
  - [ ] Edit parent information
  - [ ] Save changes
- [ ] **Delete Parent:**
  - [ ] Try deleting parent with children (should fail)
  - [ ] Delete parent without children
- [ ] **Search:**
  - [ ] Search for parents

### Classes Management
- [ ] Navigate to /admin/classes
- [ ] **Create Class:**
  - [ ] Enter class name
  - [ ] Set capacity
  - [ ] Select grade
  - [ ] Assign supervisor (teacher)
  - [ ] Submit form
- [ ] **Update Class:**
  - [ ] Change class details
  - [ ] Change supervisor
  - [ ] Save changes
- [ ] **Delete Class:**
  - [ ] Delete a class
  - [ ] Verify cascade handling

### Subjects Management
- [ ] Navigate to /admin/subjects
- [ ] **Create Subject:**
  - [ ] Enter subject name
  - [ ] Assign teachers
  - [ ] Submit form
- [ ] **Update Subject:**
  - [ ] Change subject name
  - [ ] Change assigned teachers
  - [ ] Save changes
- [ ] **Delete Subject:**
  - [ ] Delete a subject

### Lessons Management
- [ ] Navigate to /admin/lessons
- [ ] **Create Lesson:**
  - [ ] Enter lesson name
  - [ ] Select day
  - [ ] Set start and end time
  - [ ] Select subject, class, and teacher
  - [ ] Submit form
- [ ] **Update Lesson:**
  - [ ] Change lesson details
  - [ ] Save changes
- [ ] **Delete Lesson:**
  - [ ] Delete a lesson

### Exams Management
- [ ] Navigate to /admin/exams
- [ ] **Create Exam:**
  - [ ] Enter exam title
  - [ ] Set start and end time
  - [ ] Select lesson
  - [ ] Submit form
- [ ] **Update Exam:**
  - [ ] Edit exam details
  - [ ] Save changes
- [ ] **Delete Exam:**
  - [ ] Delete an exam

### Assignments Management
- [ ] Navigate to /admin/assignments
- [ ] **Create Assignment:**
  - [ ] Enter assignment title
  - [ ] Set start date and due date
  - [ ] Select lesson
  - [ ] Submit form
- [ ] **Update Assignment:**
  - [ ] Edit assignment details
  - [ ] Save changes
- [ ] **Delete Assignment:**
  - [ ] Delete an assignment

### Results Management
- [ ] Navigate to /admin/results
- [ ] **Create Result:**
  - [ ] Select student
  - [ ] Select exam or assignment
  - [ ] Enter score
  - [ ] Submit form
- [ ] **Update Result:**
  - [ ] Change score
  - [ ] Save changes
- [ ] **Delete Result:**
  - [ ] Delete a result
- [ ] **View Results:**
  - [ ] Filter by student
  - [ ] Filter by exam/assignment

### Attendance Management
- [ ] Navigate to /admin/attendance
- [ ] **Mark Attendance:**
  - [ ] Select date
  - [ ] Select lesson
  - [ ] Select student
  - [ ] Mark present/absent
  - [ ] Submit form
- [ ] **Verify Notifications:**
  - [ ] Mark student absent
  - [ ] Check student receives notification
  - [ ] Check parent receives notification
- [ ] **View Attendance:**
  - [ ] Filter by date
  - [ ] Filter by student
  - [ ] Filter by lesson

### Events Management
- [ ] Navigate to /admin/events
- [ ] **Create Event:**
  - [ ] Enter event title and description
  - [ ] Set start and end time
  - [ ] Optionally select class
  - [ ] Submit form
- [ ] **Update Event:**
  - [ ] Edit event details
  - [ ] Save changes
- [ ] **Delete Event:**
  - [ ] Delete an event

### Messages
- [ ] Navigate to /admin/messages
- [ ] **Compose Message:**
  - [ ] Click "Compose" button
  - [ ] Enter subject
  - [ ] Enter message content
  - [ ] Select recipients (role or specific users)
  - [ ] Send message
- [ ] **View Inbox:**
  - [ ] Check received messages
  - [ ] Open a message
  - [ ] Verify read status updates
- [ ] **View Sent:**
  - [ ] Check sent messages
  - [ ] Verify recipients list

### Notifications
- [ ] Navigate to /admin/notifications
- [ ] **View Notifications:**
  - [ ] Check notification list
  - [ ] Verify unread count in navbar
  - [ ] Click on a notification
  - [ ] Verify it marks as read
- [ ] **Test Notification Types:**
  - [ ] Change password → verify notification
  - [ ] Mark student absent → verify notification

### Registration Requests
- [ ] Navigate to /admin/registrations
- [ ] **View Requests:**
  - [ ] See pending applications
  - [ ] View request details
- [ ] **Approve Request:**
  - [ ] Click approve on a request
  - [ ] Verify student and parent are created
  - [ ] Verify status changes to APPROVED
- [ ] **Reject Request:**
  - [ ] Click reject on a request
  - [ ] Verify status changes to REJECTED

---

## 👨‍🏫 Teacher Dashboard Tests

### Login as Teacher
- [ ] Login with teacher credentials
- [ ] Verify redirect to teacher dashboard
- [ ] Check accessible menu items

### View Classes
- [ ] Navigate to teacher classes view
- [ ] Verify only assigned classes are shown

### Manage Lessons
- [ ] View assigned lessons
- [ ] Create/edit lessons (if permitted)

### Manage Exams
- [ ] Create exams for assigned lessons
- [ ] Grade exams
- [ ] View exam results

### Manage Assignments
- [ ] Create assignments for assigned lessons
- [ ] Grade assignments
- [ ] View assignment submissions

### Mark Attendance
- [ ] Navigate to attendance page
- [ ] Mark students present/absent
- [ ] Verify notifications are sent

### Upload Resources
- [ ] Navigate to resources page
- [ ] Click "Upload Resource"
- [ ] Select file
- [ ] Enter title
- [ ] Link to lesson or assignment
- [ ] Upload file
- [ ] Verify file appears in list

### Send Messages
- [ ] Compose message to students
- [ ] Compose message to parents
- [ ] Compose message to admin
- [ ] View inbox and sent messages

### View Notifications
- [ ] Check notification bell
- [ ] View all notifications
- [ ] Mark as read

---

## 👨‍🎓 Student Dashboard Tests

### Login as Student
- [ ] Login with student credentials
- [ ] Verify redirect to student dashboard
- [ ] Check accessible menu items

### View Schedule
- [ ] Navigate to schedule/lessons page
- [ ] Verify only assigned class lessons are shown
- [ ] Check lesson times and teachers

### View Grades
- [ ] Navigate to results page
- [ ] View exam grades
- [ ] View assignment grades
- [ ] Verify only own grades are visible

### View Attendance
- [ ] Navigate to attendance page
- [ ] View attendance records
- [ ] Check present/absent status

### Download Resources
- [ ] Navigate to resources page
- [ ] View available course materials
- [ ] Download a file
- [ ] Verify file downloads correctly

### View Messages
- [ ] Check inbox
- [ ] Read messages from teachers/admin
- [ ] Reply to messages (if permitted)

### View Notifications
- [ ] Check notifications
- [ ] Verify absence notifications appear
- [ ] Verify password change notifications

---

## 👨‍👩‍👧 Parent Dashboard Tests

### Login as Parent
- [ ] Login with parent credentials
- [ ] Verify redirect to parent dashboard
- [ ] Check accessible menu items

### View Children
- [ ] Navigate to students page
- [ ] Verify only own children are shown
- [ ] View child details

### View Children's Grades
- [ ] Navigate to results page
- [ ] View children's exam grades
- [ ] View children's assignment grades

### View Children's Attendance
- [ ] Navigate to attendance page
- [ ] View children's attendance records
- [ ] Check absence notifications

### Send Messages
- [ ] Compose message to teachers
- [ ] Compose message to admin
- [ ] View inbox and sent messages

### View Notifications
- [ ] Check notifications
- [ ] Verify child absence notifications
- [ ] Mark notifications as read

---

## 🌐 Public Pages Tests

### Homepage
- [ ] Navigate to http://localhost:3000/
- [ ] Verify school branding displays
- [ ] Check hero section
- [ ] Verify statistics display
- [ ] Check about section (Mission, Vision, Values)
- [ ] Verify programs section
- [ ] Check certifications
- [ ] Verify contact information
- [ ] Test navigation links
- [ ] Click "Apply Now" button
- [ ] Click "Login" button

### Application Form
- [ ] Navigate to /apply
- [ ] Fill in student information
- [ ] Fill in parent information
- [ ] Submit application
- [ ] Verify success message
- [ ] Check application appears in admin panel

---

## 📁 File Management Tests

### Upload Files
- [ ] Navigate to resources page (as teacher/admin)
- [ ] Click upload button
- [ ] Select a PDF file
- [ ] Enter title
- [ ] Link to lesson
- [ ] Submit upload
- [ ] Verify file appears in list

### Download Files
- [ ] Navigate to resources page (as student/teacher)
- [ ] Click download link
- [ ] Verify file downloads correctly
- [ ] Open downloaded file

### Delete Files
- [ ] Navigate to resources page (as admin/teacher)
- [ ] Delete a resource
- [ ] Verify it's removed from list

---

## 🔔 Notification Tests

### Password Change Notification
- [ ] Login as any user
- [ ] Change password
- [ ] Check notifications
- [ ] Verify password change notification appears

### Absence Notification (Student)
- [ ] Admin/Teacher marks student absent
- [ ] Login as that student
- [ ] Check notifications
- [ ] Verify absence notification appears

### Absence Notification (Parent)
- [ ] Admin/Teacher marks student absent
- [ ] Login as that student's parent
- [ ] Check notifications
- [ ] Verify child absence notification appears

---

## 🔒 Security Tests

### Access Control
- [ ] Login as student
- [ ] Try accessing /admin URL directly
- [ ] Verify redirect to unauthorized page
- [ ] Try accessing teacher-only pages
- [ ] Verify access denied

### Data Isolation
- [ ] Login as teacher
- [ ] Try viewing other teachers' data
- [ ] Verify only own data is visible
- [ ] Login as student
- [ ] Try viewing other students' grades
- [ ] Verify only own grades are visible

### Session Management
- [ ] Login to application
- [ ] Close browser
- [ ] Reopen browser
- [ ] Navigate to protected page
- [ ] Verify session persistence (or re-login required)

---

## 🎨 UI/UX Tests

### Responsive Design
- [ ] Test on desktop (1920x1080)
- [ ] Test on tablet (768x1024)
- [ ] Test on mobile (375x667)
- [ ] Verify all elements are accessible
- [ ] Check navigation menu on mobile

### Forms
- [ ] Test all form validations
- [ ] Verify error messages display
- [ ] Check success messages
- [ ] Test form reset functionality

### Tables
- [ ] Test sorting (if implemented)
- [ ] Test filtering
- [ ] Test pagination
- [ ] Verify data loads correctly

### Modals
- [ ] Open create/edit modals
- [ ] Verify close functionality
- [ ] Test form submission in modals
- [ ] Check modal backdrop

---

## 🐛 Error Handling Tests

### Invalid Data
- [ ] Submit form with missing required fields
- [ ] Verify validation errors display
- [ ] Submit form with invalid email
- [ ] Submit form with invalid phone number

### Network Errors
- [ ] Stop database container
- [ ] Try loading a page
- [ ] Verify error message displays
- [ ] Restart database
- [ ] Verify app recovers

### 404 Pages
- [ ] Navigate to non-existent URL
- [ ] Verify 404 page displays
- [ ] Check "Go Home" link works

---

## ✅ Completion Checklist

### Critical Features
- [ ] Authentication works
- [ ] All CRUD operations work
- [ ] File upload/download works
- [ ] Notifications work
- [ ] Messages work
- [ ] Data isolation works

### Nice to Have
- [ ] All forms validate correctly
- [ ] All error messages are clear
- [ ] UI is responsive
- [ ] Performance is acceptable
- [ ] No console errors

---

## 📊 Test Results

**Date Tested:** _______________  
**Tested By:** _______________  
**Browser:** _______________  
**OS:** _______________

**Total Tests:** _____ / _____  
**Passed:** _____  
**Failed:** _____  
**Blocked:** _____

### Issues Found:
1. _______________________________________________
2. _______________________________________________
3. _______________________________________________

### Notes:
_______________________________________________
_______________________________________________
_______________________________________________
