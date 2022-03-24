import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCategoryDto } from '../../dto/create-category.dto';

@Injectable()
export class CreateCategoryService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createCategoryDto: CreateCategoryDto) {
    const categoryExists = await this.prisma.categories.findUnique({
      where: { name: createCategoryDto.name },
    });

    if (categoryExists)
      throw new BadRequestException('Category already exists!');

    const category = await this.prisma.categories.create({
      data: createCategoryDto,
    });

    return category;
  }
}
