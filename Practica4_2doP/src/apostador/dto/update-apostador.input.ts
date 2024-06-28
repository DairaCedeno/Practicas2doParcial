import { CreateApostadorInput } from './create-apostador.input';
import { InputType, Field, Int, PartialType, ID } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';


@InputType()
export class UpdateApostadorInput extends PartialType(CreateApostadorInput) {
  @Field(() => ID)
  @IsNotEmpty()
  idapostador: number;
}
