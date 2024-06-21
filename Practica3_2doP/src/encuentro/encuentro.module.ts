import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EncuentroDeportivo } from './entities/encuentro.entity';
import { EncuentroDeportivoService } from './encuentro.service';
import { EncuentroDeportivoController } from './encuentro.controller';

@Module({
  imports: [TypeOrmModule.forFeature([EncuentroDeportivo])],
  controllers: [EncuentroDeportivoController],
  providers: [EncuentroDeportivoService],
})
export class EncuentroDeportivoModule {}
