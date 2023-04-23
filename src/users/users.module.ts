import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UserService } from './shared/user.service/user.service';
import { UserSchema } from './schemas/user.schema';

import * as mongoose from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
  controllers: [UsersController],
  providers: [UserService],
  exports: [UserService],
})
export class UsersModule {}
