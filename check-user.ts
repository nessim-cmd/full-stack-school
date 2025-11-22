const { createClerkClient } = require('@clerk/nextjs/server');
require('dotenv').config();

const clerkClient = createClerkClient({ secretKey: process.env.CLERK_SECRET_KEY });

async function main() {
  const users = await clerkClient.users.getUserList();
  console.log("Found users:", users.totalCount);
  for (const user of users.data) {
    console.log("User:", user.username || user.emailAddresses[0].emailAddress);
    console.log("ID:", user.id);
    console.log("Public Metadata:", JSON.stringify(user.publicMetadata, null, 2));
    console.log("-------------------");
  }
}

main().catch(console.error);
