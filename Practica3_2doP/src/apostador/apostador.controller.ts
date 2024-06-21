import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApostadorService } from './apostador.service';
import { CreateApostadorDto } from './dto/create-apostador.dto';
import { UpdateApostadorDto } from './dto/update-apostador.dto';

@Controller('apostador')
export class ApostadorController {
  constructor(private readonly apostadorService: ApostadorService) {}

  @Post()
  create(@Body() createApostadorDto: CreateApostadorDto) {
    return this.apostadorService.create(createApostadorDto);
  }

  @Get()
  findAll() {
    return this.apostadorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.apostadorService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateApostadorDto: UpdateApostadorDto) {
    return this.apostadorService.update(id, updateApostadorDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    const apostador = await this.apostadorService.remove(id);
    return apostador;
  }
}
