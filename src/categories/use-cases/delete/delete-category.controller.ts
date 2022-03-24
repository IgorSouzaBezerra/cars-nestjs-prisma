import {
  Controller,
  Param,
  Delete,
  ParseUUIDPipe,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { DeleteCategoryService } from './delete-category.service';

@Controller('categories')
export class DeleteCategoryController {
  constructor(private readonly categoriesService: DeleteCategoryService) {}

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.categoriesService.remove(id);
  }
}
