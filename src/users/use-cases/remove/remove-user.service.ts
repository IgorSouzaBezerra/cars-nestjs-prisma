import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserUtils } from 'src/users/utils/user-utils';

@Injectable()
export class RemoveUserService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly userUtils: UserUtils,
  ) {}

  async remove(id: string) {
    const user = await this.userUtils.findById(id);

    await this.prisma.users.delete({
      where: { id: user.id },
    });
  }
}
