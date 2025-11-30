import { Day, PrismaClient, UserSex } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  // Clean up existing data
  // Delete leaf nodes first
  await prisma.resource.deleteMany();
  await prisma.result.deleteMany();
  await prisma.attendance.deleteMany();
  await prisma.notification.deleteMany();
  await prisma.message.deleteMany();
  await prisma.registrationRequest.deleteMany();

  // Delete middle nodes
  await prisma.exam.deleteMany();
  await prisma.assignment.deleteMany();
  await prisma.event.deleteMany();
  await prisma.announcement.deleteMany();
  await prisma.lesson.deleteMany();

  // Delete core entities
  await prisma.student.deleteMany();
  await prisma.class.deleteMany();
  await prisma.teacher.deleteMany();
  await prisma.parent.deleteMany();
  await prisma.admin.deleteMany();
  await prisma.grade.deleteMany();
  await prisma.subject.deleteMany();
  await prisma.siteSettings.deleteMany();

  // Delete school relationships and root
  await prisma.schoolMembership.deleteMany();
  await prisma.schoolManager.deleteMany();
  await prisma.school.deleteMany();

  const hashedPassword = await bcrypt.hash("password", 12);

  // Create Default School
  const school = await prisma.school.create({
    data: {
      name: "SchoolHub Demo",
      slug: "demo",
      trialEndsAt: new Date(new Date().setDate(new Date().getDate() + 30)), // 30 days trial
    }
  });

  console.log(`Created school: ${school.name} (${school.id})`);

  // Create School Manager (can manage multiple schools)
  const manager = await prisma.schoolManager.create({
    data: {
      email: "manager@demo.com",
      password: hashedPassword,
      name: "Demo Manager",
    }
  });

  console.log(`Created school manager: ${manager.name} (${manager.email})`);

  // Link Manager to School
  await prisma.schoolMembership.create({
    data: {
      managerId: manager.id,
      schoolId: school.id,
      role: "owner",
    }
  });

  console.log(`Linked manager to school`);

  // Create Site Settings for the school
  await prisma.siteSettings.create({
    data: {
      schoolId: school.id,
      schoolName: "SchoolHub Demo",
    }
  });

  // ADMIN
  await prisma.admin.create({
    data: {
      id: "admin1",
      username: "admin1",
      password: hashedPassword,
      schoolId: school.id,
    },
  });
  await prisma.admin.create({
    data: {
      id: "admin2",
      username: "admin2",
      password: hashedPassword,
      schoolId: school.id,
    },
  });

  // GRADE
  for (let i = 1; i <= 6; i++) {
    await prisma.grade.create({
      data: {
        level: i,
        schoolId: school.id,
      },
    });
  }

  // CLASS
  for (let i = 1; i <= 6; i++) {
    await prisma.class.create({
      data: {
        name: `${i}A`,
        gradeId: i,
        capacity: Math.floor(Math.random() * (20 - 15 + 1)) + 15,
        schoolId: school.id,
      },
    });
  }

  // SUBJECT
  const subjectData = [
    { name: "Mathematics" },
    { name: "Science" },
    { name: "English" },
    { name: "History" },
    { name: "Geography" },
    { name: "Physics" },
    { name: "Chemistry" },
    { name: "Biology" },
    { name: "Computer Science" },
    { name: "Art" },
  ];

  for (const subject of subjectData) {
    await prisma.subject.create({
      data: {
        ...subject,
        schoolId: school.id,
      }
    });
  }

  // TEACHER
  for (let i = 1; i <= 15; i++) {
    await prisma.teacher.create({
      data: {
        id: `teacher${i}`, // Unique ID for the teacher
        username: `teacher${i}`,
        password: hashedPassword,
        name: `TName${i}`,
        surname: `TSurname${i}`,
        email: `teacher${i}@example.com`,
        phone: `123-456-789${i}`,
        address: `Address${i}`,
        bloodType: "A+",
        sex: i % 2 === 0 ? UserSex.MALE : UserSex.FEMALE,
        subjects: { connect: [{ id: (i % 10) + 1 }] },
        classes: { connect: [{ id: (i % 6) + 1 }] },
        birthday: new Date(new Date().setFullYear(new Date().getFullYear() - 30)),
        schoolId: school.id,
      },
    });
  }

  // LESSON
  for (let i = 1; i <= 30; i++) {
    await prisma.lesson.create({
      data: {
        name: `Lesson${i}`,
        day: Day[
          Object.keys(Day)[
          Math.floor(Math.random() * Object.keys(Day).length)
          ] as keyof typeof Day
        ],
        startTime: new Date(new Date().setHours(new Date().getHours() + 1)),
        endTime: new Date(new Date().setHours(new Date().getHours() + 3)),
        subjectId: (i % 10) + 1,
        classId: (i % 6) + 1,
        teacherId: `teacher${(i % 15) + 1}`,
        schoolId: school.id,
      },
    });
  }

  // PARENT
  for (let i = 1; i <= 25; i++) {
    await prisma.parent.create({
      data: {
        id: `parentId${i}`,
        username: `parentId${i}`,
        password: hashedPassword,
        name: `PName ${i}`,
        surname: `PSurname ${i}`,
        email: `parent${i}@example.com`,
        phone: `123-456-789${i}`,
        address: `Address${i}`,
        schoolId: school.id,
      },
    });
  }

  // STUDENT
  for (let i = 1; i <= 50; i++) {
    await prisma.student.create({
      data: {
        id: `student${i}`,
        username: `student${i}`,
        password: hashedPassword,
        name: `SName${i}`,
        surname: `SSurname ${i}`,
        email: `student${i}@example.com`,
        phone: `987-654-321${i}`,
        address: `Address${i}`,
        bloodType: "O-",
        sex: i % 2 === 0 ? UserSex.MALE : UserSex.FEMALE,
        parentId: `parentId${Math.ceil(i / 2) % 25 || 25}`,
        gradeId: (i % 6) + 1,
        classId: (i % 6) + 1,
        birthday: new Date(new Date().setFullYear(new Date().getFullYear() - 10)),
        schoolId: school.id,
      },
    });
  }

  // EXAM
  for (let i = 1; i <= 10; i++) {
    await prisma.exam.create({
      data: {
        title: `Exam ${i}`,
        startTime: new Date(new Date().setHours(new Date().getHours() + 1)),
        endTime: new Date(new Date().setHours(new Date().getHours() + 2)),
        lessonId: (i % 30) + 1,
        schoolId: school.id,
      },
    });
  }

  // ASSIGNMENT
  for (let i = 1; i <= 10; i++) {
    await prisma.assignment.create({
      data: {
        title: `Assignment ${i}`,
        startDate: new Date(new Date().setHours(new Date().getHours() + 1)),
        dueDate: new Date(new Date().setDate(new Date().getDate() + 1)),
        lessonId: (i % 30) + 1,
        schoolId: school.id,
      },
    });
  }

  // RESULT
  for (let i = 1; i <= 10; i++) {
    await prisma.result.create({
      data: {
        score: 90,
        studentId: `student${i}`,
        ...(i <= 5 ? { examId: i } : { assignmentId: i - 5 }),
        schoolId: school.id,
      },
    });
  }

  // ATTENDANCE
  for (let i = 1; i <= 10; i++) {
    await prisma.attendance.create({
      data: {
        date: new Date(),
        present: true,
        studentId: `student${i}`,
        lessonId: (i % 30) + 1,
        schoolId: school.id,
      },
    });
  }

  // EVENT
  for (let i = 1; i <= 5; i++) {
    await prisma.event.create({
      data: {
        title: `Event ${i}`,
        description: `Description for Event ${i}`,
        startTime: new Date(new Date().setHours(new Date().getHours() + 1)),
        endTime: new Date(new Date().setHours(new Date().getHours() + 2)),
        classId: (i % 5) + 1,
        schoolId: school.id,
      },
    });
  }

  // ANNOUNCEMENT
  for (let i = 1; i <= 5; i++) {
    await prisma.announcement.create({
      data: {
        title: `Announcement ${i}`,
        description: `Description for Announcement ${i}`,
        date: new Date(),
        classId: (i % 5) + 1,
        schoolId: school.id,
      },
    });
  }

  console.log("Seeding completed successfully.");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
