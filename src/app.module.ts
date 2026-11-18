import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { TasksModule } from './tasks/tasks.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { JwtModule } from '@nestjs/jwt'; 

@Module({
  imports: [
    PrismaModule, 
    TasksModule, 
    UsersModule, 
    AuthModule,
    JwtModule.register({
      global: true, 
      secret: 'SUPER_SECRET_KEY_123', 
      signOptions: { expiresIn: '1h' }, 
    }),
  ],
})
export class AppModule {}