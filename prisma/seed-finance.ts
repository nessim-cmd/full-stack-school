import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
    console.log('🌱 Starting finance seed...');

    // Get the first school (or create a test school)
    let school = await prisma.school.findFirst();

    if (!school) {
        console.log('Creating test school...');
        school = await prisma.school.create({
            data: {
                name: "Demo School",
                slug: "demo",
                plan: "FREE",
                subscriptionStatus: "TRIAL",
                trialEndsAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days from now
            }
        });

        // Create admin for the school
        const hashedPassword = await bcrypt.hash("admin123", 10);
        await prisma.admin.create({
            data: {
                id: `admin_${school.id}`,
                username: "admin",
                password: hashedPassword,
                schoolId: school.id,
            }
        });
    }

    console.log(`✅ Using school: ${school.name} (${school.id})`);

    // Create Grades if they don't exist
    const grades = [];
    for (let level = 1; level <= 12; level++) {
        const grade = await prisma.grade.upsert({
            where: {
                level_schoolId: {
                    level,
                    schoolId: school.id
                }
            },
            update: {},
            create: {
                level,
                schoolId: school.id,
            }
        });
        grades.push(grade);
    }
    console.log(`✅ Created/verified ${grades.length} grades`);

    // Create a parent
    const parent = await prisma.parent.upsert({
        where: { username: "parent_demo" },
        update: {},
        create: {
            id: `parent_${school.id}_1`,
            username: "parent_demo",
            password: await bcrypt.hash("parent123", 10),
            name: "John",
            surname: "Doe",
            email: "parent@demo.com",
            phone: "+1234567890",
            address: "123 Main St",
            schoolId: school.id,
        }
    });
    console.log(`✅ Created parent: ${parent.name} ${parent.surname}`);

    // Create a class for Grade 10
    const grade10 = grades.find(g => g.level === 10);
    if (!grade10) throw new Error("Grade 10 not found");

    const class10A = await prisma.class.upsert({
        where: {
            name_schoolId: {
                name: "10A",
                schoolId: school.id
            }
        },
        update: {},
        create: {
            name: "10A",
            capacity: 30,
            gradeId: grade10.id,
            schoolId: school.id,
        }
    });
    console.log(`✅ Created class: ${class10A.name}`);

    // Create 5 students
    const studentNames = [
        { name: "Alice", surname: "Johnson" },
        { name: "Bob", surname: "Smith" },
        { name: "Charlie", surname: "Brown" },
        { name: "Diana", surname: "Williams" },
        { name: "Eve", surname: "Davis" },
    ];

    const students = [];
    for (let i = 0; i < studentNames.length; i++) {
        const student = await prisma.student.upsert({
            where: { username: `student_${i + 1}` },
            update: {},
            create: {
                id: `student_${school.id}_${i + 1}`,
                username: `student_${i + 1}`,
                password: await bcrypt.hash("student123", 10),
                name: studentNames[i].name,
                surname: studentNames[i].surname,
                email: `student${i + 1}@demo.com`,
                phone: `+123456789${i}`,
                address: `${i + 1}23 Main St`,
                bloodType: "O+",
                sex: i % 2 === 0 ? "FEMALE" : "MALE",
                birthday: new Date(2008, i, 15),
                parentId: parent.id,
                classId: class10A.id,
                gradeId: grade10.id,
                schoolId: school.id,
            }
        });
        students.push(student);
    }
    console.log(`✅ Created ${students.length} students`);

    // Create Fee Categories
    const tuitionCategory = await prisma.feeCategory.create({
        data: {
            name: "Tuition Fee",
            description: "Annual tuition fee",
            schoolId: school.id,
        }
    });

    const busCategory = await prisma.feeCategory.create({
        data: {
            name: "Bus Fee",
            description: "School bus transportation",
            schoolId: school.id,
        }
    });

    const labCategory = await prisma.feeCategory.create({
        data: {
            name: "Lab Fee",
            description: "Science lab materials",
            schoolId: school.id,
        }
    });

    console.log(`✅ Created 3 fee categories`);

    // Create Fee Structures for Grade 10
    await prisma.feeStructure.create({
        data: {
            amount: 5000,
            feeCategoryId: tuitionCategory.id,
            gradeId: grade10.id,
            schoolId: school.id,
        }
    });

    await prisma.feeStructure.create({
        data: {
            amount: 500,
            feeCategoryId: busCategory.id,
            gradeId: grade10.id,
            schoolId: school.id,
        }
    });

    await prisma.feeStructure.create({
        data: {
            amount: 200,
            feeCategoryId: labCategory.id,
            gradeId: grade10.id,
            schoolId: school.id,
        }
    });

    console.log(`✅ Created fee structures for Grade 10`);

    // Create invoices for all students
    const totalAmount = 5000 + 500 + 200; // 5700
    const dueDate = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000); // 30 days from now

    for (const student of students) {
        await prisma.studentInvoice.create({
            data: {
                title: "Term 1 Fees 2025",
                amount: totalAmount,
                dueDate,
                studentId: student.id,
                schoolId: school.id,
                status: "PENDING",
            }
        });
    }

    console.log(`✅ Created invoices for ${students.length} students`);

    // Create some sample payments for the first 2 students
    const invoice1 = await prisma.studentInvoice.findFirst({
        where: { studentId: students[0].id }
    });

    const invoice2 = await prisma.studentInvoice.findFirst({
        where: { studentId: students[1].id }
    });

    if (invoice1) {
        // Full payment for student 1
        await prisma.payment.create({
            data: {
                amount: totalAmount,
                method: "BANK_TRANSFER",
                invoiceId: invoice1.id,
                schoolId: school.id,
            }
        });

        await prisma.studentInvoice.update({
            where: { id: invoice1.id },
            data: { status: "PAID" }
        });
    }

    if (invoice2) {
        // Partial payment for student 2
        await prisma.payment.create({
            data: {
                amount: 3000,
                method: "CASH",
                invoiceId: invoice2.id,
                schoolId: school.id,
            }
        });
    }

    console.log(`✅ Created sample payments`);

    console.log('\n🎉 Finance seed completed successfully!');
    console.log('\n📊 Summary:');
    console.log(`   - School: ${school.name}`);
    console.log(`   - Students: ${students.length}`);
    console.log(`   - Fee Categories: 3`);
    console.log(`   - Invoices: ${students.length}`);
    console.log(`   - Total Invoiced: $${totalAmount * students.length}`);
    console.log(`   - Total Collected: $${totalAmount + 3000}`);
    console.log('\n🔑 Login credentials:');
    console.log(`   Username: admin`);
    console.log(`   Password: admin123`);
    console.log(`   URL: http://localhost:3001/login`);
}

main()
    .catch((e) => {
        console.error('❌ Seed failed:', e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
