import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TasksService {
  constructor(private readonly prisma: PrismaService) {}

  create(dto: CreateTaskDto, userId: number) {
    return this.prisma.task.create({
      data: {
        title: dto.title,
        description: dto.description,
        userId: userId, 
      },
      include: { user: true },
    });
  }


  findAll() {
    return this.prisma.task.findMany({ include: { user: true } });
  }

  async findOne(id: number) {
    const task = await this.prisma.task.findUnique({
      where: { id },
      include: { user: true },
    });
    if (!task) throw new NotFoundException(`Таски с айди ${id} нет`);
    return task;
  }

  findByUser(userId: number) {
    return this.prisma.task.findMany({
      where: { userId },
      include: { user: true },
    });
  }

  update(id: number, dto: UpdateTaskDto) {
    return this.prisma.task.update({
      where: { id },
      data: dto,
    });
  }

  remove(id: number) {
    return this.prisma.task.delete({ where: { id } });
  }
}