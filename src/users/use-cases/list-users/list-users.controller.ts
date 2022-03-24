import { Controller, Get } from '@nestjs/common';
import { ListUsersService } from './list-users.service';

@Controller('users')
export class ListUsersController {
  constructor(private readonly usersService: ListUsersService) {}

  @Get()
  findAll() {
    return this.usersService.findAll();
  }
}
