import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
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
