import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EncuentroDeportivo } from './entities/encuentro.entity'; 
import { EncuentroDeportivoService } from './encuentro.service'; 
import { EncuentroDeportivoResolver } from './encuentro.resolver'; 

@Module({
  imports: [
    TypeOrmModule.forFeature([EncuentroDeportivo]), 
  ],
  providers: [EncuentroDeportivoService, EncuentroDeportivoResolver], 
  exports: [TypeOrmModule, EncuentroDeportivoService], 
})
export class EncuentroDeportivoModule {}
