import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting seed...');

  // Hash password
  const hashedPassword = await bcrypt.hash('admin123', 12);

  // Create a school first
  const trialEndsAt = new Date();
  trialEndsAt.setDate(trialEndsAt.getDate() + 30); // 30 days trial

  const school = await prisma.school.upsert({
    where: { id: 'school-1' },
    update: {},
    create: {
      id: 'school-1',
      name: 'Demo School',
      slug: 'demo-school',
      trialEndsAt: trialEndsAt,
    },
  });

  console.log('✅ School created:', school.name);

  // Create admin user
  const admin = await prisma.admin.upsert({
    where: { id: 'admin-1' },
    update: { password: hashedPassword },
    create: {
      id: 'admin-1',
      username: 'admin',
      password: hashedPassword,
      schoolId: school.id,
    },
  });

  console.log('✅ Admin created:', admin.username);

  // Create some grades
  const grades = await Promise.all(
    [1, 2, 3, 4, 5, 6].map((level) =>
      prisma.grade.upsert({
        where: { id: level },
        update: {},
        create: {
          id: level,
          level,
          schoolId: school.id,
        },
      })
    )
  );

  console.log('✅ Grades created:', grades.length);

  // Create subjects
  const subjectNames = ['Mathematics', 'Science', 'English', 'History', 'Art'];
  const subjects = await Promise.all(
    subjectNames.map((name, index) =>
      prisma.subject.upsert({
        where: { id: index + 1 },
        update: {},
        create: {
          id: index + 1,
          name,
          schoolId: school.id,
        },
      })
    )
  );

  console.log('✅ Subjects created:', subjects.length);

  // Create a class
  const classItem = await prisma.class.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      name: 'Class 1A',
      capacity: 30,
      gradeId: 1,
      schoolId: school.id,
    },
  });

  console.log('✅ Class created:', classItem.name);

  // Create a parent
  const parent = await prisma.parent.upsert({
    where: { id: 'parent-1' },
    update: {},
    create: {
      id: 'parent-1',
      username: 'parent',
      password: hashedPassword,
      name: 'John',
      surname: 'Parent',
      email: 'parent@example.com',
      phone: '555-0001',
      address: '456 Parent Street',
      schoolId: school.id,
    },
  });

  console.log('✅ Parent created:', parent.username);

  // Create a teacher
  const teacher = await prisma.teacher.upsert({
    where: { id: 'teacher-1' },
    update: {},
    create: {
      id: 'teacher-1',
      username: 'teacher',
      password: hashedPassword,
      name: 'Jane',
      surname: 'Teacher',
      email: 'teacher@example.com',
      phone: '555-0002',
      address: '789 Teacher Ave',
      bloodType: 'A+',
      sex: 'FEMALE',
      birthday: new Date('1985-05-15'),
      schoolId: school.id,
    },
  });

  console.log('✅ Teacher created:', teacher.username);

  // Create a student
  const student = await prisma.student.upsert({
    where: { id: 'student-1' },
    update: {},
    create: {
      id: 'student-1',
      username: 'student',
      password: hashedPassword,
      name: 'Mike',
      surname: 'Student',
      email: 'student@example.com',
      phone: '555-0003',
      address: '321 Student Lane',
      bloodType: 'B+',
      sex: 'MALE',
      birthday: new Date('2010-09-01'),
      parentId: parent.id,
      classId: classItem.id,
      gradeId: 1,
      schoolId: school.id,
    },
  });

  console.log('✅ Student created:', student.username);

  // Create a school manager
  const manager = await prisma.schoolManager.upsert({
    where: { id: 'manager-1' },
    update: { password: hashedPassword },
    create: {
      id: 'manager-1',
      email: 'manager@demo.com',
      password: hashedPassword,
      name: 'Demo Manager',
    },
  });

  console.log('✅ School Manager created:', manager.email);

  // Link manager to school
  await prisma.schoolMembership.upsert({
    where: {
      managerId_schoolId: {
        managerId: manager.id,
        schoolId: school.id,
      },
    },
    update: {},
    create: {
      managerId: manager.id,
      schoolId: school.id,
      role: 'owner',
    },
  });

  console.log('✅ Manager linked to Demo School');

  // Create a second school (Polytech)
  const polytech = await prisma.school.upsert({
    where: { id: 'school-2' },
    update: {},
    create: {
      id: 'school-2',
      name: 'Polytech University',
      slug: 'polytech',
      trialEndsAt: trialEndsAt,
      plan: 'MONTHLY',
    },
  });

  console.log('✅ Polytech School created:', polytech.name);

  // Create admin for Polytech
  await prisma.admin.upsert({
    where: { id: 'admin-2' },
    update: { password: hashedPassword },
    create: {
      id: 'admin-2',
      username: 'polytech-admin',
      password: hashedPassword,
      schoolId: polytech.id,
    },
  });

  console.log('✅ Polytech Admin created');

  // Create grade for Polytech
  await prisma.grade.upsert({
    where: { id: 10 },
    update: {},
    create: {
      id: 10,
      level: 10,
      schoolId: polytech.id,
    },
  });

  // Create class for Polytech
  await prisma.class.upsert({
    where: { id: 10 },
    update: {},
    create: {
      id: 10,
      name: 'CS-101',
      capacity: 50,
      gradeId: 10,
      schoolId: polytech.id,
    },
  });

  // Link manager to Polytech
  await prisma.schoolMembership.upsert({
    where: {
      managerId_schoolId: {
        managerId: manager.id,
        schoolId: polytech.id,
      },
    },
    update: {},
    create: {
      managerId: manager.id,
      schoolId: polytech.id,
      role: 'owner',
    },
  });

  console.log('✅ Manager linked to Polytech');

  console.log('');
  console.log('🎉 Seed completed!');
  console.log('');
  console.log('📋 Login credentials:');
  console.log('');
  console.log('   🔑 Manager (SaaS Platform):');
  console.log('      Email: manager@demo.com');
  console.log('      Password: admin123');
  console.log('');
  console.log('   🏫 Demo School (demo-school.localhost:4000):');
  console.log('      Admin:   admin / admin123');
  console.log('      Teacher: teacher / admin123');
  console.log('      Student: student / admin123');
  console.log('      Parent:  parent / admin123');
  console.log('');
  console.log('   🏫 Polytech (polytech.localhost:4000):');
  console.log('      Admin:   polytech-admin / admin123');
}

main()
  .catch((e) => {
    console.error('❌ Seed error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
