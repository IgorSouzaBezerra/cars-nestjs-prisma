import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { CreateUserDto } from '../../dto/create-user.dto';
import { CreateUserService } from './create-user.service';

@Controller('users')
export class CreateUserController {
  constructor(private readonly usersService: CreateUserService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }
}
