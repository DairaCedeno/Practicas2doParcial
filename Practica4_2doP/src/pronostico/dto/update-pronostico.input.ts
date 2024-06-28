import { CreatePronosticoInput } from './create-pronostico.input';
import { InputType, Field, Int, PartialType, ID } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';


@InputType()
export class UpdatePronosticoInput extends PartialType(CreatePronosticoInput) {
  @Field(() => ID)
  @IsNotEmpty()
  idpronostico: number;
}
