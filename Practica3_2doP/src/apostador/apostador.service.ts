import { Injectable } from '@nestjs/common';
import { CreateApostadorDto } from './dto/create-apostador.dto';
import { UpdateApostadorDto } from './dto/update-apostador.dto';
import { Repository } from 'typeorm';
import { Apostador } from './entities/apostador.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ApostadorService {
  constructor(
    @InjectRepository(Apostador)
    private readonly apostadorRepository: Repository<Apostador>,
  ) {}

  async create(createApostadorDto: CreateApostadorDto): Promise<Apostador> {
    const apostador = this.apostadorRepository.create(createApostadorDto);
    return this.apostadorRepository.save(apostador);
  }

  async findAll(): Promise<Apostador[]> {
    return this.apostadorRepository.find();
  }

  async findOne(id: number): Promise<Apostador> {
    return this.apostadorRepository.findOne({ where: { id } });
  }

  async update(id: number, updateApostadorDto: UpdateApostadorDto): Promise<Apostador> {
    await this.apostadorRepository.update(id, updateApostadorDto);
    return this.apostadorRepository.findOne({ where: { id } });
  }

  async remove(id: number): Promise<Apostador> {
    await this.apostadorRepository.update(id, { estado: 'inactivo' });
    return this.apostadorRepository.findOne({ where: { id } });
  }
}
