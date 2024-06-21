import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Apostador } from './entities/apostador.entity';
import { ApostadorService } from './apostador.service';
import { ApostadorController } from './apostador.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Apostador])],
  controllers: [ApostadorController],
  providers: [ApostadorService],
})
export class ApostadorModule {}
