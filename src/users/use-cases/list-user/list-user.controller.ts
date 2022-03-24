import { Controller, Get, Param, ParseUUIDPipe } from '@nestjs/common';
import { ListUserService } from './list-user.service';

@Controller('users')
export class ListUserController {
  constructor(private readonly usersService: ListUserService) {}
  @Get(':id')
  findOne(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.usersService.findOne(id);
  }
}
