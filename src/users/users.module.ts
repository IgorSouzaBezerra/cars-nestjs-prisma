import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserController } from './use-cases/create/create-user.controller';
import { UserUtils } from './utils/user-utils';
import { CreateUserService } from './use-cases/create/create-user.service';

@Module({
  controllers: [CreateUserController, UsersController],
  providers: [CreateUserService, UsersService, PrismaService, UserUtils],
})
export class UsersModule {}
