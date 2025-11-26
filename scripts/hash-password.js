// Quick script to generate a hashed password for manual admin creation
const bcrypt = require('bcryptjs');

const password = process.argv[2] || 'admin123';

bcrypt.hash(password, 12).then(hash => {
    console.log('\n=================================');
    console.log('Password:', password);
    console.log('Hashed:', hash);
    console.log('=================================\n');
    console.log('Copy the hashed value above and paste it into Prisma Studio');
    console.log('for the password field of your admin user.\n');
});
