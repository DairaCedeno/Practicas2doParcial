import { PartialType } from '@nestjs/mapped-types';
import { CreatePronosticoDto } from './create-pronostico.dto';

export class UpdatePronosticoDto extends PartialType(CreatePronosticoDto) {
  idpronostico: number;
}
