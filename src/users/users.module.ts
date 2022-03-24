import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserController } from './use-cases/create/create-user.controller';
import { UserUtils } from './utils/user-utils';
import { CreateUserService } from './use-cases/create/create-user.service';
import { UpdateUserController } from './use-cases/update/update-user.controller';
import { UpdateUserService } from './use-cases/update/update-user.service';
import { ListUserController } from './use-cases/list-user/list-user.controller';
import { ListUserService } from './use-cases/list-user/list-user.service';
import { ListUsersController } from './use-cases/list-users/list-users.controller';
import { ListUsersService } from './use-cases/list-users/list-users.service';

@Module({
  controllers: [
    CreateUserController,
    UpdateUserController,
    ListUserController,
    ListUsersController,
    UsersController,
  ],
  providers: [
    CreateUserService,
    UpdateUserService,
    ListUserService,
    ListUsersService,
    UsersService,
    PrismaService,
    UserUtils,
  ],
})
export class UsersModule {}
