import { prisma } from '../../data/postgres';
import { CreateApostadorDto } from '../../domain/dtos';
import { ApostadorDatasource } from '../../domain/datasources/apostador.datasource';
import { ApostadorEntity } from '../../domain/entities/apostador.entity';
import { UpdateApostadorDto } from '../../domain/dtos';

export class ApostadorDatasourceImpl implements ApostadorDatasource {

  async create(createApostadorDto: CreateApostadorDto): Promise<ApostadorEntity> {
    const apostador = await prisma.apostador.create({
      data: createApostadorDto
    });

    return ApostadorEntity.fromObject(apostador);
  }

  async getAll(): Promise<ApostadorEntity[]> {
    const apostadores = await prisma.apostador.findMany();
    return apostadores.map(apostador => ApostadorEntity.fromObject(apostador));
  }

  async findById(id: number): Promise<ApostadorEntity> {
    const apostador = await prisma.apostador.findFirst({
      where: { id }
    });

    if (!apostador) throw `Apostador with ID ${id} not found`;
    return ApostadorEntity.fromObject(apostador);
  }

  async updateById(updateApostadorDto: UpdateApostadorDto): Promise<ApostadorEntity> {
    await this.findById(updateApostadorDto.id);
    
    const updatedApostador = await prisma.apostador.update({
      where: { id: updateApostadorDto.id },
      data: updateApostadorDto.values
    });

    return ApostadorEntity.fromObject(updatedApostador);
  }

  async deleteById(id: number): Promise<ApostadorEntity> {
    await this.findById(id);
    const deleted = await prisma.apostador.delete({
      where: { id }
    });

    return ApostadorEntity.fromObject(deleted);
  }

}
