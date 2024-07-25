import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { DiaFestivoService } from './diafestivo.service';
import { CreateDiaFestivoInput } from './create-diafestivo.input';

@Controller('dias-festivos')
export class DiaFestivoController {
  constructor(private readonly diaFestivoService: DiaFestivoService) {}

  @Get()
  getAll() {
    return this.diaFestivoService.findAll();
  }

  @Get('all-including-deleted')
  getAllIncludingDeleted() {
    return this.diaFestivoService.findAllIncludingDeleted();
  }

  @Get(':id')
  getById(@Param('id') id: number) {
    return this.diaFestivoService.findById(id);
  }

  @Get('codigo/:codigo')
  getByCodigo(@Param('codigo') codigo: string) {
    return this.diaFestivoService.findByCodigo(codigo);
  }

  @Get('beneficios/:beneficios')
  getByBeneficiosEconomicosTurismo(@Param('beneficios') beneficiosEconomicosTurismo: number) {
    return this.diaFestivoService.findByBeneficiosEconomicosTurismo(beneficiosEconomicosTurismo);
  }

  @Post()
  create(@Body() createDiaFestivoInput: CreateDiaFestivoInput) {
    return this.diaFestivoService.create(createDiaFestivoInput);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() datosActualizados: CreateDiaFestivoInput) {
    return this.diaFestivoService.update(id, datosActualizados);
  }

  @Delete(':id/physical')
  deletePhysical(@Param('id') id: number) {
    return this.diaFestivoService.deletePhysical(id);
  }

  @Delete(':id/logical')
  deleteLogical(@Param('id') id: number) {
    return this.diaFestivoService.deleteLogical(id);
  }
}
