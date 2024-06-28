import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pronostico } from './entities/pronostico.entity';
import { CreatePronosticoInput } from './dto/create-pronostico.input';
import { UpdatePronosticoInput } from './dto/update-pronostico.input';

@Injectable()
export class PronosticoService {
  constructor(
    @InjectRepository(Pronostico)
    private readonly pronosticoRepository: Repository<Pronostico>,
  ) {}

  create(createPronosticoDto: CreatePronosticoInput): Promise<Pronostico> {
    const pronostico = this.pronosticoRepository.create(createPronosticoDto);
    return this.pronosticoRepository.save(pronostico);
  }

  findAll(): Promise<Pronostico[]> {
    return this.pronosticoRepository.find();
  }

  findOne(id: number): Promise<Pronostico> {
    return this.pronosticoRepository.findOne({ where: { id } });
  }

  async update(id: number, updatePronosticoDto: UpdatePronosticoInput): Promise<Pronostico> {
    await this.pronosticoRepository.update(id, updatePronosticoDto);
    return this.pronosticoRepository.findOne({ where: { id } });
  }

  async remove(id: number): Promise<Pronostico> {
    const pronostico = await this.pronosticoRepository.findOne({ where: { id } });
    if (pronostico) {
      return this.pronosticoRepository.remove(pronostico);
    }
    return null;
  }
}
