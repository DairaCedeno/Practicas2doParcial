import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PronosticoModule } from './pronostico/pronostico.module';

@Module({
  imports: [PronosticoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

