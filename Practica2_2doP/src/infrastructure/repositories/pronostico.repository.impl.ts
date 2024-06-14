import { CreatePronosticoDto } from '../../domain/dtos';
import { PronosticoDatasource } from '../../domain/datasources/pronostico.datasource';
import { PronosticoEntity } from '../../domain/entities/pronostico.entity';
import { PronosticoRepository } from '../../domain/repositories/pronostico.repository';
import { UpdatePronosticoDto } from '../../domain/dtos';

export class PronosticoRepositoryImpl implements PronosticoRepository {

  constructor(
    private readonly datasource: PronosticoDatasource,
  ) { }

  create(createPronosticoDto: CreatePronosticoDto): Promise<PronosticoEntity> {
    return this.datasource.create(createPronosticoDto);
  }

  getAll(): Promise<PronosticoEntity[]> {
    return this.datasource.getAll();
  }

  findById(ID: number): Promise<PronosticoEntity> {
    return this.datasource.findById(ID);
  }

  updateById(updatePronosticoDto: UpdatePronosticoDto): Promise<PronosticoEntity> {
    return this.datasource.updateById(updatePronosticoDto);
  }

  deleteById(ID: number): Promise<PronosticoEntity> {
    return this.datasource.deleteById(ID);
  }

}
