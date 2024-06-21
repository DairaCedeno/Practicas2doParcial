import { Injectable } from '@nestjs/common';
import { CreatePronosticoDto } from './dto/create-pronostico.dto';
import { UpdatePronosticoDto } from './dto/update-pronostico.dto';
import { Repository } from 'typeorm';
import { Pronostico } from './entities/pronostico.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PronosticoService {
  constructor(
    
    @InjectRepository(Pronostico)
    private readonly pronosticoRepository: Repository<Pronostico>,
  ) {}

  async create(createPronosticoDto: CreatePronosticoDto): Promise<Pronostico> {
    const pronostico = this.pronosticoRepository.create(createPronosticoDto);
    return this.pronosticoRepository.save(pronostico);
  }

  async findAll(): Promise<Pronostico[]> {
    return this.pronosticoRepository.find();
  }

  async findOne(id: number): Promise<Pronostico> {
    return this.pronosticoRepository.findOne({ where: { id } });
  }

  async update(id: number, updatePronosticoDto: UpdatePronosticoDto): Promise<Pronostico> {
    await this.pronosticoRepository.update(id, updatePronosticoDto);
    return this.pronosticoRepository.findOne({ where: { id } });
  }

  async remove(id: number): Promise<Pronostico> {
    await this.pronosticoRepository.update(id, { estado: 'inactivo' });
    return this.pronosticoRepository.findOne({ where: { id } });
  }
}
