import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DeleteCategoryService {
  constructor(private readonly prisma: PrismaService) {}

  async remove(id: string) {
    const cateogoryExists = await this.prisma.categories.findUnique({
      where: { id },
    });

    if (!cateogoryExists)
      throw new NotFoundException('Category does not exists!');

    await this.prisma.categories.delete({ where: { id } });
  }
}
