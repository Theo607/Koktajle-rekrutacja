import { CocktailsService } from './cocktails.service';
export declare class CocktailsController {
    private readonly cocktailsService;
    constructor(cocktailsService: CocktailsService);
    findAll(): import("@prisma/client").Prisma.PrismaPromise<({
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
    findOne(id: string): import("@prisma/client").Prisma.Prisma__CocktailClient<({
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
    }) | null, null, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    create(data: any): import("@prisma/client").Prisma.Prisma__CocktailClient<{
        name: string;
        id: number;
        category: string;
        instructions: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    update(id: string, data: any): import("@prisma/client").Prisma.Prisma__CocktailClient<{
        name: string;
        id: number;
        category: string;
        instructions: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    remove(id: string): import("@prisma/client").Prisma.Prisma__CocktailClient<{
        name: string;
        id: number;
        category: string;
        instructions: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
}
