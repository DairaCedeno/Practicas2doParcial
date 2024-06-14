import { CreateApostadorDto, UpdateApostadorDto } from '../dtos';
import { ApostadorEntity } from '../entities/apostador.entity';



export abstract class ApostadorDatasource {

  abstract create( createTodoDto: CreateApostadorDto ): Promise<ApostadorEntity>;
  abstract getAll(): Promise<ApostadorEntity[]>;
  abstract findById( id: number ): Promise<ApostadorEntity>;
  abstract updateById( updateTodoDto: UpdateApostadorDto ): Promise<ApostadorEntity>;
  abstract deleteById( id: number ): Promise<ApostadorEntity>;

}
