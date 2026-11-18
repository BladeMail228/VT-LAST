import { PrismaService } from '../../prisma/prisma.service';
export declare class UsersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(): import("@prisma/client").Prisma.PrismaPromise<({
        tasks: {
            title: string;
            description: string | null;
            completed: boolean;
            id: number;
            userId: number | null;
        }[];
    } & {
        id: number;
        username: string;
        email: string;
        password: string;
    })[]>;
    findOne(id: number): Promise<{
        tasks: {
            title: string;
            description: string | null;
            completed: boolean;
            id: number;
            userId: number | null;
        }[];
    } & {
        id: number;
        username: string;
        email: string;
        password: string;
    }>;
}
