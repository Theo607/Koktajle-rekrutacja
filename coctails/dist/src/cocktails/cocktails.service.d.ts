import { PrismaService } from 'prisma/prisma.service';
import { Prisma } from '@prisma/client';
export declare class CocktailsService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): Prisma.PrismaPromise<({
        ingredients: ({
            ingredient: {
                name: string;
                description: string;
                isAlcohol: boolean;
                imageUrl: string;
                id: number;
            };
        } & {
            id: number;
            quantity: string;
            ingredientId: number;
            cocktailId: number;
        })[];
    } & {
        name: string;
        id: number;
        category: string;
        instructions: string;
    })[]>;
    findOne(id: number): Prisma.Prisma__CocktailClient<({
        ingredients: ({
            ingredient: {
                name: string;
                description: string;
                isAlcohol: boolean;
                imageUrl: string;
                id: number;
            };
        } & {
            id: number;
            quantity: string;
            ingredientId: number;
            cocktailId: number;
        })[];
    } & {
        name: string;
        id: number;
        category: string;
        instructions: string;
    }) | null, null, import("@prisma/client/runtime/library").DefaultArgs, Prisma.PrismaClientOptions>;
    create(data: Prisma.CocktailCreateInput): Prisma.Prisma__CocktailClient<{
        name: string;
        id: number;
        category: string;
        instructions: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, Prisma.PrismaClientOptions>;
    update(id: number, data: Prisma.CocktailUpdateInput): Prisma.Prisma__CocktailClient<{
        name: string;
        id: number;
        category: string;
        instructions: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, Prisma.PrismaClientOptions>;
    remove(id: number): Prisma.Prisma__CocktailClient<{
        name: string;
        id: number;
        category: string;
        instructions: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, Prisma.PrismaClientOptions>;
}
