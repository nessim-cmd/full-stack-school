import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    console.log('Creating demo support ticket...');

    // Get the first school
    const school = await prisma.school.findFirst();

    if (!school) {
        console.log('No schools found. Please create a school first.');
        return;
    }

    // Create a demo support ticket
    const ticket = await prisma.supportTicket.create({
        data: {
            schoolId: school.id,
            subject: 'Cannot Upload Student Photos',
            message: 'Hello, we are having trouble uploading student profile photos. When we try to upload, we get an error message. Can you please help us fix this issue? Thank you!',
            status: 'OPEN',
            priority: 'HIGH',
        },
    });

    console.log('✅ Demo support ticket created:', ticket.subject);
    console.log('📧 From school:', school.name);
    console.log('🎫 Ticket ID:', ticket.id);
    console.log('\nYou can now view this ticket at: /super-admin/support');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
