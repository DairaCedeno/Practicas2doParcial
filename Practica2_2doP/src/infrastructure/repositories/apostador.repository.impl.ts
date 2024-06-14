import { CreateApostadorDto } from '../../domain/dtos';
import { ApostadorDatasource } from '../../domain/datasources/apostador.datasource';
import { ApostadorEntity } from '../../domain/entities/apostador.entity';
import { ApostadorRepository } from '../../domain/repositories/apostador.repository';
import { UpdateApostadorDto } from '../../domain/dtos';

export class ApostadorRepositoryImpl implements ApostadorRepository {

  constructor(
    private readonly datasource: ApostadorDatasource,
  ) { }

  create(createApostadorDto: CreateApostadorDto): Promise<ApostadorEntity> {
    return this.datasource.create(createApostadorDto);
  }

  getAll(): Promise<ApostadorEntity[]> {
    return this.datasource.getAll();
  }

  findById(ID: number): Promise<ApostadorEntity> {
    return this.datasource.findById(ID);
  }

  updateById(updateApostadorDto: UpdateApostadorDto): Promise<ApostadorEntity> {
    return this.datasource.updateById(updateApostadorDto);
  }

  deleteById(ID: number): Promise<ApostadorEntity> {
    return this.datasource.deleteById(ID);
  }

}
