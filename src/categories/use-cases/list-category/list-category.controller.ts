import { Controller, Get, Param, ParseUUIDPipe } from '@nestjs/common';
import { ListCategoryService } from './list-category.service';

@Controller('categories')
export class ListCategoryController {
  constructor(private readonly categoriesService: ListCategoryService) {}

  @Get(':id')
  async findOne(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.categoriesService.findOne(id);
  }
}
