import { Test, TestingModule } from '@nestjs/testing';
import { CocktailsService } from './cocktails.service';
import { PrismaService } from '../../prisma/prisma.service';

describe('CocktailsService', () => {
  let service: CocktailsService;

  // Mock PrismaService
  const mockPrisma = {
    cocktail: {
      findMany: jest.fn().mockResolvedValue([
        {
          id: 1,
          name: 'Mojito',
          category: 'Cocktail',
          instructions: 'Mix mint with rum',
          ingredients: [],
        },
      ]),
    },
    cocktailIngredient: {
      create: jest.fn().mockResolvedValue({}),
    },
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CocktailsService,
        { provide: PrismaService, useValue: mockPrisma }, // <-- provide mock
      ],
    }).compile();

    service = module.get<CocktailsService>(CocktailsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return all cocktails', async () => {
    const result = await service.findAll();
    expect(result).toEqual([
      {
        id: 1,
        name: 'Mojito',
        category: 'Cocktail',
        instructions: 'Mix mint with rum',
        ingredients: [],
      },
    ]);
  });
});
