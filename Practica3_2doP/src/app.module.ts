import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApostadorModule } from './apostador/apostador.module';
import { EncuentroDeportivoModule } from './encuentro/encuentro.module';
import { PronosticoModule } from './pronostico/pronostico.module';
import { Apostador } from './apostador/entities/apostador.entity';
import { EncuentroDeportivo } from './encuentro/entities/encuentro.entity';
import { Pronostico } from './pronostico/entities/pronostico.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'aby4eli.',
      database: 'minuevabasededatos',
      entities: [Apostador, Pronostico, EncuentroDeportivo],
      synchronize: true,
    }),
    ApostadorModule,
    PronosticoModule,
    EncuentroDeportivoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

