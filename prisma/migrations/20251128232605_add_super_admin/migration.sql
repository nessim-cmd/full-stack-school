/*
  Warnings:

  - You are about to drop the column `read` on the `Message` table. All the data in the column will be lost.
  - You are about to drop the column `receiverId` on the `Message` table. All the data in the column will be lost.
  - You are about to drop the column `receiverName` on the `Message` table. All the data in the column will be lost.
  - You are about to drop the column `receiverRole` on the `Message` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name,schoolId]` on the table `Class` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[level,schoolId]` on the table `Grade` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name,schoolId]` on the table `Subject` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `schoolId` to the `Admin` table without a default value. This is not possible if the table is not empty.
  - Added the required column `schoolId` to the `Announcement` table without a default value. This is not possible if the table is not empty.
  - Added the required column `schoolId` to the `Assignment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `schoolId` to the `Attendance` table without a default value. This is not possible if the table is not empty.
  - Added the required column `schoolId` to the `Class` table without a default value. This is not possible if the table is not empty.
  - Added the required column `schoolId` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `schoolId` to the `Exam` table without a default value. This is not possible if the table is not empty.
  - Added the required column `schoolId` to the `Grade` table without a default value. This is not possible if the table is not empty.
  - Added the required column `schoolId` to the `Lesson` table without a default value. This is not possible if the table is not empty.
  - Added the required column `schoolId` to the `Message` table without a default value. This is not possible if the table is not empty.
  - Added the required column `schoolId` to the `Notification` table without a default value. This is not possible if the table is not empty.
  - Added the required column `schoolId` to the `Parent` table without a default value. This is not possible if the table is not empty.
  - Added the required column `schoolId` to the `Resource` table without a default value. This is not possible if the table is not empty.
  - Added the required column `schoolId` to the `Result` table without a default value. This is not possible if the table is not empty.
  - Added the required column `schoolId` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `schoolId` to the `Subject` table without a default value. This is not possible if the table is not empty.
  - Added the required column `schoolId` to the `Teacher` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "PlanType" AS ENUM ('FREE', 'MONTHLY', 'YEARLY');

-- CreateEnum
CREATE TYPE "SubscriptionStatus" AS ENUM ('TRIAL', 'ACTIVE', 'PAST_DUE', 'CANCELED');

-- CreateEnum
CREATE TYPE "RequestStatus" AS ENUM ('PENDING', 'APPROVED', 'REJECTED');

-- DropIndex
DROP INDEX "Class_name_key";

-- DropIndex
DROP INDEX "Grade_level_key";

-- DropIndex
DROP INDEX "Subject_name_key";

-- AlterTable
ALTER TABLE "Admin" ADD COLUMN     "schoolId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Announcement" ADD COLUMN     "schoolId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Assignment" ADD COLUMN     "schoolId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Attendance" ADD COLUMN     "schoolId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Class" ADD COLUMN     "schoolId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Event" ADD COLUMN     "schoolId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Exam" ADD COLUMN     "schoolId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Grade" ADD COLUMN     "schoolId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Lesson" ADD COLUMN     "schoolId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Message" DROP COLUMN "read",
DROP COLUMN "receiverId",
DROP COLUMN "receiverName",
DROP COLUMN "receiverRole",
ADD COLUMN     "schoolId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Notification" ADD COLUMN     "schoolId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Parent" ADD COLUMN     "schoolId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Resource" ADD COLUMN     "schoolId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Result" ADD COLUMN     "schoolId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Student" ADD COLUMN     "schoolId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Subject" ADD COLUMN     "schoolId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Teacher" ADD COLUMN     "schoolId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "SuperAdmin" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SuperAdmin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AuditLog" (
    "id" SERIAL NOT NULL,
    "action" TEXT NOT NULL,
    "entity" TEXT NOT NULL,
    "entityId" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "metadata" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "superAdminId" TEXT NOT NULL,

    CONSTRAINT "AuditLog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "School" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "domain" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "plan" "PlanType" NOT NULL DEFAULT 'FREE',
    "subscriptionStatus" "SubscriptionStatus" NOT NULL DEFAULT 'TRIAL',
    "trialEndsAt" TIMESTAMP(3) NOT NULL,
    "subscriptionEndsAt" TIMESTAMP(3),

    CONSTRAINT "School_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SchoolManager" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SchoolManager_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SchoolMembership" (
    "id" TEXT NOT NULL,
    "managerId" TEXT NOT NULL,
    "schoolId" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'owner',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SchoolMembership_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MessageRecipient" (
    "id" TEXT NOT NULL,
    "messageId" INTEGER NOT NULL,
    "recipientId" TEXT NOT NULL,
    "recipientName" TEXT NOT NULL,
    "recipientRole" TEXT NOT NULL,
    "read" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "MessageRecipient_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PasswordResetToken" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PasswordResetToken_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RegistrationRequest" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" "RequestStatus" NOT NULL DEFAULT 'PENDING',
    "studentName" TEXT NOT NULL,
    "studentSurname" TEXT NOT NULL,
    "studentEmail" TEXT,
    "studentPhone" TEXT,
    "studentAddress" TEXT NOT NULL,
    "studentBloodType" TEXT NOT NULL,
    "studentSex" "UserSex" NOT NULL,
    "studentBirthday" TIMESTAMP(3) NOT NULL,
    "gradeId" INTEGER NOT NULL,
    "parentName" TEXT NOT NULL,
    "parentSurname" TEXT NOT NULL,
    "parentEmail" TEXT NOT NULL,
    "parentPhone" TEXT NOT NULL,
    "parentAddress" TEXT NOT NULL,
    "schoolId" TEXT NOT NULL,

    CONSTRAINT "RegistrationRequest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SiteSettings" (
    "id" TEXT NOT NULL,
    "schoolName" TEXT NOT NULL DEFAULT 'SchoolHub',
    "schoolLogo" TEXT,
    "schoolTagline" TEXT NOT NULL DEFAULT 'Excellence in Education Since 1995',
    "heroTitle" TEXT NOT NULL DEFAULT 'Welcome to SchoolHub',
    "heroDescription" TEXT NOT NULL DEFAULT 'Empowering students to achieve their full potential through innovative learning, dedicated teachers, and a nurturing environment. Join our community of excellence.',
    "heroImage" TEXT,
    "totalStudents" TEXT NOT NULL DEFAULT '2,500+',
    "totalTeachers" TEXT NOT NULL DEFAULT '150+',
    "successRate" TEXT NOT NULL DEFAULT '98%',
    "yearsExperience" TEXT NOT NULL DEFAULT '30+',
    "missionTitle" TEXT NOT NULL DEFAULT 'Our Mission',
    "missionText" TEXT NOT NULL DEFAULT 'To provide world-class education that nurtures critical thinking, creativity, and character development in every student.',
    "visionTitle" TEXT NOT NULL DEFAULT 'Our Vision',
    "visionText" TEXT NOT NULL DEFAULT 'To be the leading educational institution that prepares students for global citizenship and lifelong success.',
    "valuesTitle" TEXT NOT NULL DEFAULT 'Our Values',
    "valuesText" TEXT NOT NULL DEFAULT 'Excellence, Integrity, Innovation, Respect, and Community - the pillars that guide everything we do.',
    "programs" TEXT NOT NULL DEFAULT '[{"grade":"Elementary","range":"Grades 1-5","description":"Building strong foundations in core subjects with engaging, hands-on learning.","color":"from-green-400 to-emerald-500"},{"grade":"Middle School","range":"Grades 6-8","description":"Developing critical thinking and preparing for advanced academic challenges.","color":"from-blue-400 to-cyan-500"},{"grade":"High School","range":"Grades 9-12","description":"College preparation with AP courses and comprehensive career guidance.","color":"from-purple-400 to-pink-500"}]',
    "certifications" TEXT NOT NULL DEFAULT '["International Baccalaureate","Ministry of Education","Cambridge Assessment","ISO 9001:2015 Certified"]',
    "address" TEXT NOT NULL DEFAULT '123 Education Street, Knowledge City, KC 12345',
    "phone" TEXT NOT NULL DEFAULT '+1 (555) 123-4567',
    "email" TEXT NOT NULL DEFAULT 'info@schoolhub.edu',
    "facebookUrl" TEXT,
    "twitterUrl" TEXT,
    "instagramUrl" TEXT,
    "ctaTitle" TEXT NOT NULL DEFAULT 'Ready to Join Our Community?',
    "ctaDescription" TEXT NOT NULL DEFAULT 'Start your journey towards academic excellence today. Apply now and become part of our thriving educational family.',
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "schoolId" TEXT NOT NULL,

    CONSTRAINT "SiteSettings_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "SuperAdmin_email_key" ON "SuperAdmin"("email");

-- CreateIndex
CREATE UNIQUE INDEX "School_slug_key" ON "School"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "School_domain_key" ON "School"("domain");

-- CreateIndex
CREATE UNIQUE INDEX "SchoolManager_email_key" ON "SchoolManager"("email");

-- CreateIndex
CREATE UNIQUE INDEX "SchoolMembership_managerId_schoolId_key" ON "SchoolMembership"("managerId", "schoolId");

-- CreateIndex
CREATE UNIQUE INDEX "PasswordResetToken_email_key" ON "PasswordResetToken"("email");

-- CreateIndex
CREATE UNIQUE INDEX "SiteSettings_schoolId_key" ON "SiteSettings"("schoolId");

-- CreateIndex
CREATE UNIQUE INDEX "Class_name_schoolId_key" ON "Class"("name", "schoolId");

-- CreateIndex
CREATE UNIQUE INDEX "Grade_level_schoolId_key" ON "Grade"("level", "schoolId");

-- CreateIndex
CREATE UNIQUE INDEX "Subject_name_schoolId_key" ON "Subject"("name", "schoolId");

-- AddForeignKey
ALTER TABLE "AuditLog" ADD CONSTRAINT "AuditLog_superAdminId_fkey" FOREIGN KEY ("superAdminId") REFERENCES "SuperAdmin"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SchoolMembership" ADD CONSTRAINT "SchoolMembership_managerId_fkey" FOREIGN KEY ("managerId") REFERENCES "SchoolManager"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SchoolMembership" ADD CONSTRAINT "SchoolMembership_schoolId_fkey" FOREIGN KEY ("schoolId") REFERENCES "School"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Admin" ADD CONSTRAINT "Admin_schoolId_fkey" FOREIGN KEY ("schoolId") REFERENCES "School"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_schoolId_fkey" FOREIGN KEY ("schoolId") REFERENCES "School"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Teacher" ADD CONSTRAINT "Teacher_schoolId_fkey" FOREIGN KEY ("schoolId") REFERENCES "School"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Parent" ADD CONSTRAINT "Parent_schoolId_fkey" FOREIGN KEY ("schoolId") REFERENCES "School"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Grade" ADD CONSTRAINT "Grade_schoolId_fkey" FOREIGN KEY ("schoolId") REFERENCES "School"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Class" ADD CONSTRAINT "Class_schoolId_fkey" FOREIGN KEY ("schoolId") REFERENCES "School"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Subject" ADD CONSTRAINT "Subject_schoolId_fkey" FOREIGN KEY ("schoolId") REFERENCES "School"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Lesson" ADD CONSTRAINT "Lesson_schoolId_fkey" FOREIGN KEY ("schoolId") REFERENCES "School"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Exam" ADD CONSTRAINT "Exam_schoolId_fkey" FOREIGN KEY ("schoolId") REFERENCES "School"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Assignment" ADD CONSTRAINT "Assignment_schoolId_fkey" FOREIGN KEY ("schoolId") REFERENCES "School"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Result" ADD CONSTRAINT "Result_schoolId_fkey" FOREIGN KEY ("schoolId") REFERENCES "School"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Resource" ADD CONSTRAINT "Resource_schoolId_fkey" FOREIGN KEY ("schoolId") REFERENCES "School"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Attendance" ADD CONSTRAINT "Attendance_schoolId_fkey" FOREIGN KEY ("schoolId") REFERENCES "School"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_schoolId_fkey" FOREIGN KEY ("schoolId") REFERENCES "School"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Announcement" ADD CONSTRAINT "Announcement_schoolId_fkey" FOREIGN KEY ("schoolId") REFERENCES "School"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_schoolId_fkey" FOREIGN KEY ("schoolId") REFERENCES "School"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_schoolId_fkey" FOREIGN KEY ("schoolId") REFERENCES "School"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MessageRecipient" ADD CONSTRAINT "MessageRecipient_messageId_fkey" FOREIGN KEY ("messageId") REFERENCES "Message"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RegistrationRequest" ADD CONSTRAINT "RegistrationRequest_schoolId_fkey" FOREIGN KEY ("schoolId") REFERENCES "School"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SiteSettings" ADD CONSTRAINT "SiteSettings_schoolId_fkey" FOREIGN KEY ("schoolId") REFERENCES "School"("id") ON DELETE CASCADE ON UPDATE CASCADE;
