import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCategoryController } from './use-cases/create/create-category.controller';
import { CreateCategoryService } from './use-cases/create/create-category.service';
import { DeleteCategoryController } from './use-cases/delete/delete-category.controller';
import { DeleteCategoryService } from './use-cases/delete/delete-category.service';
import { ListCategoriesController } from './use-cases/list-categories/list-categories.controller';
import { ListCategoriesService } from './use-cases/list-categories/list-categories.service';
import { ListCategoryController } from './use-cases/list-category/list-category.controller';
import { ListCategoryService } from './use-cases/list-category/list-category.service';
import { UpdateCategoryController } from './use-cases/update/update-category.controller';
import { UpdateCategoryService } from './use-cases/update/update-category.service';

@Module({
  controllers: [
    CreateCategoryController,
    ListCategoryController,
    ListCategoriesController,
    UpdateCategoryController,
    DeleteCategoryController,
  ],
  providers: [
    CreateCategoryService,
    ListCategoryService,
    ListCategoriesService,
    UpdateCategoryService,
    DeleteCategoryService,
    PrismaService,
  ],
})
export class CategoriesModule {}
