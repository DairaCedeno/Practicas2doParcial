import { PartialType } from '@nestjs/mapped-types';
import { CreateApostadorDto } from './create-apostador.dto';

export class UpdateApostadorDto extends PartialType(CreateApostadorDto) {}
