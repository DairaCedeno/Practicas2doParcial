import { CreateEncuentroDeportivoDto, UpdateEncuentroDeportivoDto } from '../dtos';
import { EncuentroEntity } from '../entities/encuentro.entity';

export abstract class EncuentroDatasource {

  abstract create(createTodoDto: CreateEncuentroDeportivoDto): Promise<EncuentroEntity>;
  abstract getAll(): Promise<EncuentroEntity[]>;
  abstract findById(id: number): Promise<EncuentroEntity>;
  abstract updateById(updateTodoDto: UpdateEncuentroDeportivoDto): Promise<EncuentroEntity>;
  abstract deleteById(id: number): Promise<EncuentroEntity>;

}


