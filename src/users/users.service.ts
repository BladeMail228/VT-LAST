import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}


  findAll() {
    return this.prisma.user.findMany({ include: { tasks: true } });
  }

  async findOne(id: number) {
    const user = await this.prisma.user.findUnique({
      where: { id },
      include: { tasks: true }, 
    });
    if (!user) throw new NotFoundException(`Пользователя с id ${id} нет`);
    return user;
  }
}