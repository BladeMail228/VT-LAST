import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.role.upsert({
    where: { name: 'administrator' },
    update: {},
    create: { name: 'administrator' },
  });
  await prisma.role.upsert({
    where: { name: 'user' },
    update: {},
    create: { name: 'user' },
  });
  console.log('Роли успешно добавлены!');
}

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());