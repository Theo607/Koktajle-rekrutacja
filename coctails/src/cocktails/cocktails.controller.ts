import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Delete,
  Put,
} from '@nestjs/common';
import { CocktailsService } from './cocktails.service';

@Controller('cocktails')
export class CocktailsController {
  constructor(private readonly cocktailsService: CocktailsService) {}

  @Get()
  findAll() {
    return this.cocktailsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cocktailsService.findOne(+id);
  }

  @Post()
  create(@Body() data: any) {
    return this.cocktailsService.create(data);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: any) {
    return this.cocktailsService.update(+id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cocktailsService.remove(+id);
  }
}
