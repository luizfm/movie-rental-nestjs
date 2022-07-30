import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UserDto, UserType } from './dto/user.dto';
import { UserService } from './user.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UserService) {}

  @Get()
  async findAllUsers(): Promise<UserDto[]> {
    return this.userService.findAll();
  }

  @Get(':email')
  async findOneByEmail(@Param('email') email: string): Promise<UserDto> {
    return this.userService.findOneByEmail(email);
  }

  @Post()
  async createUser(@Body() user: UserType): Promise<UserDto> {
    return this.userService.create(user);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string): Promise<UserDto> {
    return this.userService.delete(id);
  }
}
