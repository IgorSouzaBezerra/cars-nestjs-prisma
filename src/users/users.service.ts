import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    const userExist = await this.findByEmail(createUserDto.email);
    if (userExist) {
      throw new BadRequestException('User already exists!');
    }

    return this.prisma.users.create({
      data: {
        ...createUserDto,
      },
    });
  }

  async findAll() {
    return this.prisma.users.findMany();
  }

  async findOne(id: string) {
    return this.findById(id);
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.findById(id);

    const userUpdate = await this.prisma.users.update({
      where: { id: user.id },
      data: updateUserDto,
    });

    return userUpdate;
  }

  async remove(id: string) {
    const user = await this.findById(id);

    await this.prisma.users.delete({
      where: { id: user.id },
    });
  }

  private async findById(id: string) {
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

  private async findByEmail(email: string) {
    const user = await this.prisma.users.findUnique({
      where: {
        email,
      },
    });

    return user ?? null;
  }
}
