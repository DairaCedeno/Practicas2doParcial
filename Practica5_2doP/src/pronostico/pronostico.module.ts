import { Module } from '@nestjs/common';
import { PronosticoService } from './pronostico.service';
import { PronosticoGateway } from './pronostico.gateway';

@Module({
  providers: [PronosticoGateway, PronosticoService],
})
export class PronosticoModule {}
