import { Module } from '@nestjs/common';
import { CocktailsModule } from './cocktails/cocktails.module'; // <-- note './cocktails'
import { PrismaModule } from 'prisma/prisma.module';

@Module({
  imports: [PrismaModule, CocktailsModule], // import the module here
})
export class AppModule {}
