"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const child_process_1 = require("child_process");
async function bootstrap() {
    try {
        console.log('Применение миграций Prisma...');
        (0, child_process_1.execSync)('npx prisma migrate deploy', { stdio: 'inherit' });
        console.log('Миграции успешно применены!');
    }
    catch (error) {
        console.error('Ошибка при миграциях:', error);
    }
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    await app.listen(process.env.PORT ?? 3000, '0.0.0.0');
}
bootstrap();
//# sourceMappingURL=main.js.map