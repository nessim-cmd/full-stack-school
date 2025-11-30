import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
    console.log("🌱 Seeding Super Admin...");

    const email = "admin@schoolhub.com";
    const password = "SuperAdmin123!";
    const name = "Super Administrator";

    // Check if super admin already exists
    const existing = await prisma.superAdmin.findUnique({
        where: { email },
    });

    if (existing) {
        console.log("✅ Super Admin already exists:", email);
        return;
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create super admin
    const superAdmin = await prisma.superAdmin.create({
        data: {
            email,
            password: hashedPassword,
            name,
        },
    });

    console.log("✅ Super Admin created successfully!");
    console.log("📧 Email:", email);
    console.log("🔑 Password:", password);
    console.log("👤 Name:", name);
    console.log("\n🚀 You can now login at: /super-admin/login");
}

main()
    .catch((e) => {
        console.error("❌ Error seeding super admin:", e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
