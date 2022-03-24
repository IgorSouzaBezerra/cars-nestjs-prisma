import { Controller, Post, Body } from '@nestjs/common';
import { CreateCategoryDto } from 'src/categories/dto/create-category.dto';
import { CreateCategoryService } from './create-category.service';

@Controller('categories')
export class CreateCategoryController {
  constructor(private readonly categoriesService: CreateCategoryService) {}

  @Post()
  create(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categoriesService.create(createCategoryDto);
  }
}
