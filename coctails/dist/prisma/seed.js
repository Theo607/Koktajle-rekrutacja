"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function main() {
    const vodka = await prisma.ingredient.create({
        data: {
            name: 'Vodka',
            description: 'Clear distilled alcoholic beverage',
            isAlcohol: true,
            imageUrl: 'https://example.com/vodka.jpg',
        },
    });
    const orangeJuice = await prisma.ingredient.create({
        data: {
            name: 'Orange juice',
            description: 'Freshly squeezed orange juice',
            isAlcohol: false,
            imageUrl: 'https://example.com/oj.jpg',
        },
    });
    await prisma.cocktail.create({
        data: {
            name: 'Screwdriver',
            category: 'Alcoholic',
            instructions: 'Mix vodka with orange juice over ice.',
            ingredients: {
                create: [
                    { ingredientId: vodka.id, quantity: '50ml' },
                    { ingredientId: orangeJuice.id, quantity: '100ml' },
                ],
            },
        },
    });
}
main()
    .catch((e) => console.error(e))
    .finally(async () => await prisma.$disconnect());
//# sourceMappingURL=seed.js.map