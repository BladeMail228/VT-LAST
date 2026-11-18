import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { execSync } from 'child_process'; 

async function bootstrap() {

  try {
    console.log('Применение миграций Prisma...');
    execSync('npx prisma migrate deploy', { stdio: 'inherit' });
    console.log('Миграции успешно применены!');
  } catch (error) {
    console.error('Ошибка при миграциях:', error);
  }

  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000, '0.0.0.0'); 
}
bootstrap();
