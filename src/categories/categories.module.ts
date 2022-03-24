import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCategoryController } from './use-cases/create/create-category.controller';
import { CreateCategoryService } from './use-cases/create/create-category.service';

@Module({
  controllers: [CreateCategoryController],
  providers: [CreateCategoryService, PrismaService],
})
export class CategoriesModule {}
