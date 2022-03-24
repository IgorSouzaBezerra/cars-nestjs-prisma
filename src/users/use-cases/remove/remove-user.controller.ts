import {
  Controller,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { RemoveUserService } from './remove-user.service';

@Controller('users')
export class RemoveUserController {
  constructor(private readonly usersService: RemoveUserService) {}

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}
