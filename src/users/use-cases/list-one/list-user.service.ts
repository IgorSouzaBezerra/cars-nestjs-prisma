import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserUtils } from 'src/users/utils/user-utils';

@Injectable()
export class ListUserService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly userUtils: UserUtils,
  ) {}

  async findOne(id: string) {
    return this.userUtils.findById(id);
  }
}
