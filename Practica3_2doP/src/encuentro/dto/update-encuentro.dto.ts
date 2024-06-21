import { PartialType } from '@nestjs/mapped-types';
import { CreateEncuentroDeportivoDto } from './create-encuentro.dto';

export class UpdateEncuentroDeportivoDto extends PartialType(CreateEncuentroDeportivoDto) {}
