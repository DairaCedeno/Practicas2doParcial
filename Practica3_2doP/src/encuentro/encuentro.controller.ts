import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EncuentroDeportivoService } from './encuentro.service';
import { CreateEncuentroDeportivoDto } from './dto/create-encuentro.dto';
import { UpdateEncuentroDeportivoDto } from './dto/update-encuentro.dto';

@Controller('encuentro-deportivo')
export class EncuentroDeportivoController {
  constructor(private readonly encuentroDeportivoService: EncuentroDeportivoService) {}

  @Post()
  create(@Body() createEncuentroDeportivoDto: CreateEncuentroDeportivoDto) {
    return this.encuentroDeportivoService.create(createEncuentroDeportivoDto);
  }

  @Get()
  findAll() {
    return this.encuentroDeportivoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.encuentroDeportivoService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateEncuentroDeportivoDto: UpdateEncuentroDeportivoDto) {
    return this.encuentroDeportivoService.update(id, updateEncuentroDeportivoDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    const encuentroDeportivo = await this.encuentroDeportivoService.remove(id);
    return encuentroDeportivo;
  }
}
