import { Module } from '@nestjs/common';
import { CocktailsController } from './cocktails.controller';
import { CocktailsService } from './cocktails.service';
import { PrismaModule } from 'prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [CocktailsController],
  providers: [CocktailsService],
})
export class CocktailsModule {}
