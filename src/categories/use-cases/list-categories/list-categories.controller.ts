import { Controller, Get } from '@nestjs/common';
import { ListCategoriesService } from './list-categories.service';

@Controller('categories')
export class ListCategoriesController {
  constructor(private readonly categoriesService: ListCategoriesService) {}

  @Get()
  async findAll() {
    return this.categoriesService.findAll();
  }
}
