import { prisma } from '../../data/postgres';
import { CreateEncuentroDeportivoDto } from '../../domain/dtos';
import { EncuentroDatasource } from '../../domain/datasources/encuentro.datasource';
import { EncuentroEntity } from '../../domain/entities/encuentro.entity';
import { UpdateEncuentroDeportivoDto } from '../../domain/dtos';

export class EncuentroDatasourceImpl implements EncuentroDatasource {

  async create(createEncuentroDto: CreateEncuentroDeportivoDto): Promise<EncuentroEntity> {
    const encuentro = await prisma.encuentroDeportivo.create({
      data: createEncuentroDto
    });

    return EncuentroEntity.fromObject(encuentro);
  }

  async getAll(): Promise<EncuentroEntity[]> {
    const encuentros = await prisma.encuentroDeportivo.findMany();
    return encuentros.map(encuentro => EncuentroEntity.fromObject(encuentro));
  }

  async findById(id: number): Promise<EncuentroEntity> {
    const encuentro = await prisma.encuentroDeportivo.findFirst({
      where: { id }
    });

    if (!encuentro) throw `Encuentro with ID ${id} not found`;
    return EncuentroEntity.fromObject(encuentro);
  }

  async updateById(updateEncuentroDto: UpdateEncuentroDeportivoDto): Promise<EncuentroEntity> {
    await this.findById(updateEncuentroDto.id);
    
    const updatedEncuentro = await prisma.encuentroDeportivo.update({
      where: { id: updateEncuentroDto.id },
      data: updateEncuentroDto.values
    });

    return EncuentroEntity.fromObject(updatedEncuentro);
  }

  async deleteById(id: number): Promise<EncuentroEntity> {
    await this.findById(id);
    const deleted = await prisma.encuentroDeportivo.delete({
      where: { id }
    });

    return EncuentroEntity.fromObject(deleted);
  }

}


