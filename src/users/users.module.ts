import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserController } from './use-cases/create/create-user.controller';
import { UserUtils } from './utils/user-utils';
import { CreateUserService } from './use-cases/create/create-user.service';
import { UpdateUserController } from './use-cases/update/update-user.controller';
import { UpdateUserService } from './use-cases/update/update-user.service';

@Module({
  controllers: [CreateUserController, UpdateUserController, UsersController],
  providers: [
    CreateUserService,
    UpdateUserService,
    UsersService,
    PrismaService,
    UserUtils,
  ],
})
export class UsersModule {}
