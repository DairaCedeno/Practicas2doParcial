import { CreatePronosticoDto, UpdatePronosticoDto } from '../dtos';
import { PronosticoEntity } from '../entities/pronostico.entity';

export abstract class PronosticoRepository {

  abstract create(createTodoDto: CreatePronosticoDto): Promise<PronosticoEntity>;
  abstract getAll(): Promise<PronosticoEntity[]>;
  abstract findById(id: number): Promise<PronosticoEntity>;
  abstract updateById(updateTodoDto: UpdatePronosticoDto): Promise<PronosticoEntity>;
  abstract deleteById(id: number): Promise<PronosticoEntity>;

}
