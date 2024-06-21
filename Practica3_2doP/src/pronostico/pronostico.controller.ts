import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PronosticoService } from './pronostico.service';
import { CreatePronosticoDto } from './dto/create-pronostico.dto';
import { UpdatePronosticoDto } from './dto/update-pronostico.dto';

@Controller('pronostico')
export class PronosticoController {
  constructor(private readonly pronosticoService: PronosticoService) {}

  @Post()
  create(@Body() createPronosticoDto: CreatePronosticoDto) {
    return this.pronosticoService.create(createPronosticoDto);
  }

  @Get()
  findAll() {
    return this.pronosticoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.pronosticoService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updatePronosticoDto: UpdatePronosticoDto) {
    return this.pronosticoService.update(id, updatePronosticoDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    const pronostico = await this.pronosticoService.remove(id);
    return pronostico;
  }
}
