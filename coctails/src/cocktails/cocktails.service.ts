import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class CocktailsService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.cocktail.findMany({
      include: { ingredients: { include: { ingredient: true } } },
    });
  }

  findOne(id: number) {
    return this.prisma.cocktail.findUnique({
      where: { id },
      include: { ingredients: { include: { ingredient: true } } },
    });
  }

  create(data: Prisma.CocktailCreateInput) {
    return this.prisma.cocktail.create({ data });
  }

  update(id: number, data: Prisma.CocktailUpdateInput) {
    return this.prisma.cocktail.update({ where: { id }, data });
  }

  remove(id: number) {
    return this.prisma.cocktail.delete({ where: { id } });
  }
}
