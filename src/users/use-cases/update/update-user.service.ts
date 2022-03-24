import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserUtils } from 'src/users/utils/user-utils';
import { UpdateUserDto } from '../../dto/update-user.dto';

@Injectable()
export class UpdateUserService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly userUtils: UserUtils,
  ) {}
  async update(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.userUtils.findById(id);

    const userUpdate = await this.prisma.users.update({
      where: { id: user.id },
      data: updateUserDto,
    });

    return userUpdate;
  }
}
