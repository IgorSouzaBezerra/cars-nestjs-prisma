import { Controller, Param, Delete } from '@nestjs/common';
import { RemoveUserService } from './remove-user.service';

@Controller('users')
export class RemoveUserController {
  constructor(private readonly usersService: RemoveUserService) {}

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}
