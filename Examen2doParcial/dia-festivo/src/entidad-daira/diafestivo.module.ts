import { Module } from '@nestjs/common';
import { DiaFestivoService } from './diafestivo.service';
import { DiaFestivoGateway } from './diafestivo.gateway';

@Module({
  providers: [DiaFestivoService, DiaFestivoGateway],
})
export class DiaFestivoModule {}
