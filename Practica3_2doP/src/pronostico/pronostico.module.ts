import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pronostico } from './entities/pronostico.entity';
import { PronosticoService } from './pronostico.service';
import { PronosticoController } from './pronostico.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Pronostico])],
  controllers: [PronosticoController],
  
  providers: [PronosticoService],
})
export class PronosticoModule {}
