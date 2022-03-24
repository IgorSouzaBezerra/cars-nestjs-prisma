import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateCategoryDto } from 'src/categories/dto/update-category.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UpdateCategoryService {
  constructor(private readonly prisma: PrismaService) {}

  async update(id: string, updateCategoryDto: UpdateCategoryDto) {
    const categoryExist = await this.prisma.categories.findUnique({
      where: { id },
    });

    if (!categoryExist) throw new NotFoundException('Category does not exists');

    return this.prisma.categories.update({
      where: { id },
      data: updateCategoryDto,
    });
  }
}
