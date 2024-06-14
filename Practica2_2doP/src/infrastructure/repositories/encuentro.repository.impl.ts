import { CreateEncuentroDeportivoDto } from '../../domain/dtos';
import { EncuentroDatasource } from '../../domain/datasources/encuentro.datasource';
import { EncuentroEntity } from '../../domain/entities/encuentro.entity';
import { EncuentroRepository } from '../../domain/repositories/encuentro.repository';
import { UpdateEncuentroDeportivoDto } from '../../domain/dtos';

export class EncuentroRepositoryImpl implements EncuentroRepository {

  constructor(
    private readonly datasource: EncuentroDatasource,
  ) { }

  create(createEncuentroDto: CreateEncuentroDeportivoDto): Promise<EncuentroEntity> {
    return this.datasource.create(createEncuentroDto);
  }

  getAll(): Promise<EncuentroEntity[]> {
    return this.datasource.getAll();
  }

  findById(ID: number): Promise<EncuentroEntity> {
    return this.datasource.findById(ID);
  }

  updateById(updateEncuentroDto: UpdateEncuentroDeportivoDto): Promise<EncuentroEntity> {
    return this.datasource.updateById(updateEncuentroDto);
  }

  deleteById(ID: number): Promise<EncuentroEntity> {
    return this.datasource.deleteById(ID);
  }

}
