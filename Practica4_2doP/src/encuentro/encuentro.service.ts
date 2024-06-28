import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EncuentroDeportivo } from './entities/encuentro.entity'; 
import { CreateEncuentroDeportivoInput } from './dto/create-encuentro.input'; 
import { UpdateEncuentroDeportivoInput } from './dto/update-encuentro.input'; 
@Injectable()
export class EncuentroDeportivoService {
  constructor(
    @InjectRepository(EncuentroDeportivo)
    private readonly encuentroRepository: Repository<EncuentroDeportivo>,
  ) {}

  create(createEncuentroDto: CreateEncuentroDeportivoInput): Promise<EncuentroDeportivo> {
    const encuentro = this.encuentroRepository.create(createEncuentroDto);
    if (!encuentro.estado) {
      encuentro.estado = 'Programado'; 
    }
    return this.encuentroRepository.save(encuentro);
  }

  findAll(): Promise<EncuentroDeportivo[]> {
    return this.encuentroRepository.find();
  }

  findOne(id: number): Promise<EncuentroDeportivo> {
    return this.encuentroRepository.findOne(id);
  }

  async update(id: number, updateEncuentroDto: UpdateEncuentroDeportivoInput): Promise<EncuentroDeportivo> {
    await this.encuentroRepository.update(id, updateEncuentroDto);
    return this.encuentroRepository.findOne(id);
  }

  async remove(id: number): Promise<EncuentroDeportivo> {
    const encuentro = await this.encuentroRepository.findOne(id);
    if (encuentro) {
      encuentro.estado = 'Cancelado';
      return this.encuentroRepository.save(encuentro);
    }
    return null;
  }
}
