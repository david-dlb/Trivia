import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TeamService } from 'src/team/team.service';

@Module({
  providers: [UserService, TeamService],
  controllers: [UserController]
})
export class UserModule {}
