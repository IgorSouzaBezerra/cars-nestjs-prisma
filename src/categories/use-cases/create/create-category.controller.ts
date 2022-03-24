import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { CreateCategoryDto } from 'src/categories/dto/create-category.dto';
import { CreateCategoryService } from './create-category.service';

@Controller('categories')
export class CreateCategoryController {
  constructor(private readonly categoriesService: CreateCategoryService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categoriesService.create(createCategoryDto);
  }
}
