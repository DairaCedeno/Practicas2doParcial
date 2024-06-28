import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Apostador } from './entities/apostador.entity'; 
import { ApostadorService } from './apostador.service'; 
import { ApostadorResolver } from './apostador.resolver'; 

@Module({
  imports: [
    TypeOrmModule.forFeature([Apostador]), 
  ],
  providers: [ApostadorService, ApostadorResolver], 
  exports: [TypeOrmModule, ApostadorService], 
})
export class ApostadorModule {}
