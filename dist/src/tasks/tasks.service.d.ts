import { PrismaService } from '../../prisma/prisma.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
export declare class TasksService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateTaskDto, userId: number): import("@prisma/client").Prisma.Prisma__TaskClient<{
        user: {
            id: number;
            username: string;
            email: string;
            password: string;
        } | null;
    } & {
        title: string;
        description: string | null;
        completed: boolean;
        id: number;
        userId: number | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    findAll(): import("@prisma/client").Prisma.PrismaPromise<({
        user: {
            id: number;
            username: string;
            email: string;
            password: string;
        } | null;
    } & {
        title: string;
        description: string | null;
        completed: boolean;
        id: number;
        userId: number | null;
    })[]>;
    findOne(id: number): Promise<{
        user: {
            id: number;
            username: string;
            email: string;
            password: string;
        } | null;
    } & {
        title: string;
        description: string | null;
        completed: boolean;
        id: number;
        userId: number | null;
    }>;
    findByUser(userId: number): import("@prisma/client").Prisma.PrismaPromise<({
        user: {
            id: number;
            username: string;
            email: string;
            password: string;
        } | null;
    } & {
        title: string;
        description: string | null;
        completed: boolean;
        id: number;
        userId: number | null;
    })[]>;
    update(id: number, dto: UpdateTaskDto): import("@prisma/client").Prisma.Prisma__TaskClient<{
        title: string;
        description: string | null;
        completed: boolean;
        id: number;
        userId: number | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    remove(id: number): import("@prisma/client").Prisma.Prisma__TaskClient<{
        title: string;
        description: string | null;
        completed: boolean;
        id: number;
        userId: number | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
}
