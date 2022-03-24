import { Controller, Body, Patch, Param, ParseUUIDPipe } from '@nestjs/common';
import { UpdateCategoryDto } from 'src/categories/dto/update-category.dto';
import { UpdateCategoryService } from './update-category.service';

@Controller('categories')
export class UpdateCategoryController {
  constructor(private readonly categoriesService: UpdateCategoryService) {}

  @Patch(':id')
  async update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() updateCategoryDto: UpdateCategoryDto,
  ) {
    return this.categoriesService.update(id, updateCategoryDto);
  }
}
