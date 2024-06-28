import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pronostico } from './entities/pronostico.entity'; 
import { PronosticoService } from './pronostico.service';
import { PronosticoResolver } from './pronostico.resolver'; 

@Module({
  imports: [
    TypeOrmModule.forFeature([Pronostico]), 
  ],
  providers: [PronosticoService, PronosticoResolver], 
  exports: [TypeOrmModule, PronosticoService],
})
export class PronosticoModule {}
