import { Injectable } from '@nestjs/common';
import { CreateEncuentroDeportivoDto } from './dto/create-encuentro.dto';
import { UpdateEncuentroDeportivoDto } from './dto/update-encuentro.dto';
import { Repository } from 'typeorm';
import { EncuentroDeportivo } from './entities/encuentro.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class EncuentroDeportivoService {
  constructor(
    @InjectRepository(EncuentroDeportivo)
    private readonly encuentroDeportivoRepository: Repository<EncuentroDeportivo>,
  ) {}

  async create(createEncuentroDeportivoDto: CreateEncuentroDeportivoDto): Promise<EncuentroDeportivo> {
    const encuentroDeportivo = this.encuentroDeportivoRepository.create(createEncuentroDeportivoDto);
    return this.encuentroDeportivoRepository.save(encuentroDeportivo);
  }

  async findAll(): Promise<EncuentroDeportivo[]> {
    return this.encuentroDeportivoRepository.find();
  }

  async findOne(id: number): Promise<EncuentroDeportivo> {
    return this.encuentroDeportivoRepository.findOne({ where: { id } });
  }

  async update(id: number, updateEncuentroDeportivoDto: UpdateEncuentroDeportivoDto): Promise<EncuentroDeportivo> {
    await this.encuentroDeportivoRepository.update(id, updateEncuentroDeportivoDto);
    return this.encuentroDeportivoRepository.findOne({ where: { id } });
  }

  async remove(id: number): Promise<EncuentroDeportivo> {
    await this.encuentroDeportivoRepository.update(id, { estado: 'inactivo' });
    return this.encuentroDeportivoRepository.findOne({ where: { id } });
  }
}
