import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ListCategoryService {
  constructor(private readonly prisma: PrismaService) {}

  async findOne(id: string) {
    const category = await this.prisma.categories.findUnique({ where: { id } });

    if (!category) throw new NotFoundException('Category does not exists!');

    return category;
  }
}
