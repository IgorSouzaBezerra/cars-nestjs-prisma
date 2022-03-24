import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserUtils } from 'src/users/utils/user-utils';
import { CreateUserDto } from '../../dto/create-user.dto';

@Injectable()
export class CreateUserService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly userUtils: UserUtils,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const userExist = await this.userUtils.findByEmail(createUserDto.email);
    if (userExist) {
      throw new BadRequestException('User already exists!');
    }

    return this.prisma.users.create({
      data: {
        ...createUserDto,
      },
    });
  }
}
