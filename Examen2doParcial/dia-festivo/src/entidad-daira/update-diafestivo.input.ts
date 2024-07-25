import { InputType, Field, Float, PartialType } from '@nestjs/graphql';
import { CreateDiaFestivoInput } from './create-diafestivo.input';

@InputType()
export class UpdateDiaFestivoInput extends PartialType(CreateDiaFestivoInput) {}
