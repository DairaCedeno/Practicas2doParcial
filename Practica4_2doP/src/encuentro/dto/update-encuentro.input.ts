import { CreateEncuentroDeportivoInput } from './create-encuentro.input';
import { InputType, Field, Int, PartialType, ID } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';


@InputType()
export class UpdateEncuentroDeportivoInput extends PartialType(CreateEncuentroDeportivoInput ) {
  @Field(() => ID)
  @IsNotEmpty()
  idencuentro: number;
}
