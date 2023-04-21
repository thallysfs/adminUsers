import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UserService } from './shared/user.service/user.service';
import { UserSchema } from './schemas/user.schema';

@Module({
  controllers: [UsersController],
  providers: [UserService],
})
export class UsersModule {}
