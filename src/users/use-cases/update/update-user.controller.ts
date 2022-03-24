import { Controller, Body, Param, ParseUUIDPipe, Put } from '@nestjs/common';
import { UpdateUserDto } from '../../dto/update-user.dto';
import { UpdateUserService } from './update-user.service';

@Controller('users')
export class UpdateUserController {
  constructor(private readonly usersService: UpdateUserService) {}

  @Put(':id')
  update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.usersService.update(id, updateUserDto);
  }
}
