import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import bcrypt from "bcrypt";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { schoolName, slug, managerName, managerEmail, managerPassword, plan } = body;

        // Validation
        if (!schoolName || !slug || !managerName || !managerEmail || !managerPassword) {
            return NextResponse.json(
                { error: "All fields are required" },
                { status: 400 }
            );
        }

        // Check if slug is already taken
        const existingSchool = await prisma.school.findUnique({
            where: { slug }
        });

        if (existingSchool) {
            return NextResponse.json(
                { error: "This subdomain is already taken. Please choose another." },
                { status: 400 }
            );
        }

        // Check if email is already taken
        const existingManager = await prisma.schoolManager.findUnique({
            where: { email: managerEmail }
        });

        let managerId = "";

        if (existingManager) {
            // Verify password
            const passwordMatch = await bcrypt.compare(managerPassword, existingManager.password);

            if (!passwordMatch) {
                return NextResponse.json(
                    { error: "This email is already registered. Please use the correct password to add a new school to your account." },
                    { status: 400 }
                );
            }

            managerId = existingManager.id;
        } else {
            // Create new manager
            const hashedPassword = await bcrypt.hash(managerPassword, 10);
            const newManager = await prisma.schoolManager.create({
                data: {
                    email: managerEmail,
                    password: hashedPassword,
                    name: managerName
                }
            });
            managerId = newManager.id;
        }

        // Calculate trial end date (30 days from now)
        const trialEndsAt = new Date();
        trialEndsAt.setDate(trialEndsAt.getDate() + 30);

        // Create school and membership in a transaction
        const result = await prisma.$transaction(async (tx) => {
            // Create school
            const school = await tx.school.create({
                data: {
                    name: schoolName,
                    slug: slug,
                    plan: plan || "FREE",
                    subscriptionStatus: "TRIAL",
                    trialEndsAt: trialEndsAt
                }
            });

            // Create membership (link manager to school)
            const membership = await tx.schoolMembership.create({
                data: {
                    managerId: managerId,
                    schoolId: school.id,
                    role: "owner"
                }
            });

            // Create default admin account for the school
            const adminUsername = `admin_${slug}`;
            const adminPassword = Math.random().toString(36).slice(-8);
            const hashedAdminPassword = await bcrypt.hash(adminPassword, 10);

            const admin = await tx.admin.create({
                data: {
                    id: `admin_${Date.now()}`,
                    username: adminUsername,
                    password: hashedAdminPassword,
                    schoolId: school.id
                }
            });

            // Create default site settings
            await tx.siteSettings.create({
                data: {
                    schoolId: school.id,
                    schoolName: schoolName
                }
            });

            // Create default grades (1 to 12)
            for (let i = 1; i <= 12; i++) {
                await tx.grade.create({
                    data: {
                        level: i,
                        schoolId: school.id
                    }
                });
            }

            return { school, membership, admin, adminPassword };
        });

        // Determine base URL based on environment
        const baseUrl = process.env.NODE_ENV === 'production' 
            ? `https://${slug}.${process.env.NEXT_PUBLIC_DOMAIN || 'erpschool-two.vercel.app'}`
            : `http://${slug}.localhost:3000`;
        
        // TODO: Send welcome email with admin credentials
        console.log("Admin credentials:", {
            username: `admin_${slug}`,
            password: result.adminPassword,
            loginUrl: `${baseUrl}/login`
        });

        return NextResponse.json({
            success: true,
            message: "School created successfully!",
            school: {
                id: result.school.id,
                name: result.school.name,
                slug: result.school.slug,
                trialEndsAt: result.school.trialEndsAt
            },
            adminCredentials: {
                username: `admin_${slug}`,
                password: result.adminPassword,
                note: "Save these credentials! You'll need them to access your school dashboard."
            }
        });

    } catch (error: any) {
        console.error("School registration error:", error);
        return NextResponse.json(
            { error: error.message || "Failed to create school" },
            { status: 500 }
        );
    }
}
