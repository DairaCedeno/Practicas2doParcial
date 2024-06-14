import { prisma } from '../../data/postgres';
import { CreatePronosticoDto } from '../../domain/dtos';
import { PronosticoDatasource } from '../../domain/datasources/pronostico.datasource';
import { PronosticoEntity } from '../../domain/entities/pronostico.entity';
import { UpdatePronosticoDto } from '../../domain/dtos';

export class PronosticoDatasourceImpl implements PronosticoDatasource {

  async create(createPronosticoDto: CreatePronosticoDto): Promise<PronosticoEntity> {
    const pronostico = await prisma.pronostico.create({
      data: createPronosticoDto
    });

    return PronosticoEntity.fromObject(pronostico);
  }

  async getAll(): Promise<PronosticoEntity[]> {
    const pronosticos = await prisma.pronostico.findMany();
    return pronosticos.map(pronostico => PronosticoEntity.fromObject(pronostico));
  }

  async findById(id: number): Promise<PronosticoEntity> {
    const pronostico = await prisma.pronostico.findFirst({
      where: { id }
    });

    if (!pronostico) throw `Pronostico with ID ${id} not found`;
    return PronosticoEntity.fromObject(pronostico);
  }

  async updateById(updatePronosticoDto: UpdatePronosticoDto): Promise<PronosticoEntity> {
    await this.findById(updatePronosticoDto.id);
    
    const updatedPronostico = await prisma.pronostico.update({
      where: { id: updatePronosticoDto.id },
      data: updatePronosticoDto.values
    });

    return PronosticoEntity.fromObject(updatedPronostico);
  }

  async deleteById(id: number): Promise<PronosticoEntity> {
    await this.findById(id);
    const deleted = await prisma.pronostico.delete({
      where: { id }
    });

    return PronosticoEntity.fromObject(deleted);
  }

}

