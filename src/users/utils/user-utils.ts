import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserUtils {
  constructor(private readonly prisma: PrismaService) {}

  async findById(id: string) {
    const user = await this.prisma.users.findUnique({
      where: {
        id,
      },
    });

    if (!user) {
      throw new NotFoundException('User not found!');
    }

    return user;
  }

  async findByEmail(email: string) {
    const user = await this.prisma.users.findUnique({
      where: {
        email,
      },
    });

    return user ?? null;
  }
}
