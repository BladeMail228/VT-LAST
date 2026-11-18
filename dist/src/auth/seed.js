"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
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
//# sourceMappingURL=seed.js.map