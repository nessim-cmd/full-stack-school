// scripts/create-admin.ts
// Run this script to create an initial admin user
// Usage: npx ts-node scripts/create-admin.ts

import { PrismaClient } from "@prisma/client";
import { hashPassword } from "../src/lib/auth";

const prisma = new PrismaClient();

async function createInitialAdmin() {
    const username = "admin";
    const password = "Admin@123"; // Change this to your desired password

    try {
        // Check if admin already exists
        const existingAdmin = await prisma.admin.findUnique({
            where: { username },
        });

        if (existingAdmin) {
            console.log("❌ Admin user already exists!");
            console.log(`Username: ${username}`);
            return;
        }

        // Hash the password
        const hashedPassword = await hashPassword(password);

        // Create the admin user
        const admin = await prisma.admin.create({
            data: {
                id: "admin-001",
                username,
                password: hashedPassword,
            },
        });

        console.log("\n✅ Admin user created successfully!");
        console.log("\n====================================");
        console.log("📋 Login Credentials");
        console.log("====================================");
        console.log(`Username: ${username}`);
        console.log(`Password: ${password}`);
        console.log("====================================");
        console.log("\n⚠️  Please change your password after first login!");
        console.log(`\n🔗 Login at: http://localhost:3000/login\n`);

    } catch (error) {
        console.error("❌ Error creating admin user:", error);
    } finally {
        await prisma.$disconnect();
    }
}

createInitialAdmin();
