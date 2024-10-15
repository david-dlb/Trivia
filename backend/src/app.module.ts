import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NoticiaController } from './noticia/noticia.controller';
import { TeamModule } from './team/team.module';
import { UserModule } from './user/user.module';
import { GameModule } from './game/game.module';

@Module({
  imports: [TeamModule, UserModule, GameModule],
  controllers: [AppController, NoticiaController, ],
  providers: [AppService],
})
export class AppModule {}
