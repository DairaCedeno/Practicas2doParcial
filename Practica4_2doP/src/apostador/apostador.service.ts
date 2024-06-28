import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Apostador } from './entities/apostador.entity'; 
import { CreateApostadorInput } from './dto/create-apostador.input';
import { UpdateApostadorInput } from './dto/update-apostador.input'; 

@Injectable()
export class ApostadorService {
  constructor(
    @InjectRepository(Apostador)
    private readonly apostadorRepository: Repository<Apostador>,
  ) {}

  create(CreateApostadorInput: CreateApostadorInput): Promise<Apostador> {
    const apostador = this.apostadorRepository.create(CreateApostadorInput);
    if (!apostador.estado) {
      apostador.estado = 'Activo';
    }
    return this.apostadorRepository.save(apostador);
  }

  findAll(): Promise<Apostador[]> {
    return this.apostadorRepository.find();
  }

  findOne(id: number): Promise<Apostador> {
    return this.apostadorRepository.findOne(id);
  }

  async update(id: number, updateApostadorDto: UpdateApostadorInput): Promise<Apostador> {
    await this.apostadorRepository.update(id, updateApostadorDto);
    return this.apostadorRepository.findOne(id);
  }

  async remove(id: number): Promise<Apostador> {
    const apostador = await this.apostadorRepository.findOne(id);
    if (apostador) {
      apostador.estado = 'Inactivo';
      return this.apostadorRepository.save(apostador);
    }
    return null;
  }
}
