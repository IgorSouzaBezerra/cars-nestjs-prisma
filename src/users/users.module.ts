import { Module } from '@nestjs/common';
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
import { RemoveUserController } from './use-cases/remove/remove-user.controller';
import { RemoveUserService } from './use-cases/remove/remove-user.service';

@Module({
  controllers: [
    CreateUserController,
    UpdateUserController,
    ListUserController,
    ListUsersController,
    RemoveUserController,
  ],
  providers: [
    CreateUserService,
    UpdateUserService,
    ListUserService,
    ListUsersService,
    RemoveUserService,
    PrismaService,
    UserUtils,
  ],
})
export class UsersModule {}
