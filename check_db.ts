import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const school = await prisma.school.findFirst({
    select: { id: true, name: true, enabledServices: true }
  });
  console.log("School data:", JSON.stringify(school, null, 2));
  await prisma.$disconnect();
}

main();
