import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service'; 
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuestionModule } from './question/question.module'; 
import { QuestionController } from './question/question.controller'; 
import { QuestionService } from './question/question.service'; 
import { TeamModule } from './team/team.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'trivia',
    retryDelay: 3000,
    autoLoadEntities: true,
    synchronize: true
  }), QuestionModule, TeamModule, UserModule,],
  controllers: [AppController, QuestionController ],
  providers: [AppService, QuestionService],
})
export class AppModule {}
