import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UserService } from './shared/user.service/user.service';
import { User } from './shared/user/user';

@Controller('users')
export class UsersController {
  constructor(private userService: UserService) {}

  @Get()
  async getAll(): Promise<User[]> {
    return this.userService.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: number): Promise<User> {
    return this.userService.getById(id);
  }

  @Post()
  async create(@Body() user: User): Promise<User> {
    return this.userService.create(user);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    this.userService.delete(id);
  }
}