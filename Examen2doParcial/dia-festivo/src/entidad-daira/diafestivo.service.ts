import { Injectable } from '@nestjs/common';
import { DiaFestivo } from './diafestivo.model';
import { CreateDiaFestivoInput } from './create-diafestivo.input';
import { UpdateDiaFestivoInput } from './update-diafestivo.input';
@Injectable()
export class DiaFestivoService {
  private diasFestivos: DiaFestivo[] = [
    {
      id: 1,
      codigo: 'Ene01',
      celebracion: 'Independencia de Cuenca',
      tipo: 'Local',
      explicacionFeriado: 'Se celebra la independencia de la ciudad de Cuenca desde 1820',
      beneficiosEconomicosTurismo: 3000000,
      fechaUltimoDiaFestivo: '2023-09-01',
      empresa: 'Manta Mall. S.A.',
    },
    {
      id: 2,
      codigo: 'Feb02',
      celebracion: 'Navidad',
      tipo: 'Nacional',
      explicacionFeriado: 'Celebración de la Navidad en todo el país',
      beneficiosEconomicosTurismo: 112000,
      fechaUltimoDiaFestivo: '2023-12-25',
      empresa: 'Chone Ltda',
    },
  ]; // Simulación de base de datos

  private deletedDiasFestivos: DiaFestivo[] = []; // Simulación de datos eliminados

  findAll(): DiaFestivo[] {
    return this.diasFestivos;
  }

  findAllIncludingDeleted(): DiaFestivo[] {
    return [...this.diasFestivos, ...this.deletedDiasFestivos];
  }

  findById(id: number): DiaFestivo | undefined {
    return this.diasFestivos.find(dia => dia.id === id);
  }

  findByCodigo(codigo: string): DiaFestivo | undefined {
    return this.diasFestivos.find(dia => dia.codigo === codigo);
  }

  findByBeneficiosEconomicosTurismo(beneficiosEconomicosTurismo: number): DiaFestivo[] {
    return this.diasFestivos.filter(dia => dia.beneficiosEconomicosTurismo <= beneficiosEconomicosTurismo);
  }

  create(input: CreateDiaFestivoInput): DiaFestivo {
    const nuevoDiaFestivo: DiaFestivo = {
      id: Date.now(), // Simplemente para simular un ID único
      ...input,
    };
    this.diasFestivos.push(nuevoDiaFestivo);
    return nuevoDiaFestivo;
  }

  update(id: number, input: UpdateDiaFestivoInput): DiaFestivo | undefined {
    const index = this.diasFestivos.findIndex(dia => dia.id === id);
    if (index === -1) return undefined;

    this.diasFestivos[index] = { ...this.diasFestivos[index], ...input };
    return this.diasFestivos[index];
  }

  deletePhysical(id: number): boolean {
    const index = this.diasFestivos.findIndex(dia => dia.id === id);
    if (index === -1) return false;

    this.diasFestivos.splice(index, 1);
    return true;
  }

  deleteLogical(id: number): boolean {
    const index = this.diasFestivos.findIndex(dia => dia.id === id);
    if (index === -1) return false;

    const [deleted] = this.diasFestivos.splice(index, 1);
    this.deletedDiasFestivos.push(deleted);
    return true;
  }
}

