import { Controller, Get } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { UserService } from './user.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UserService) {}

  @Get()
  async findAllUsers(): Promise<UserDto[]> {
    return this.userService.findAll();
  }
}
