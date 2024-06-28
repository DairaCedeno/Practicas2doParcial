import { InputType, Field, Float } from '@nestjs/graphql';
import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

@InputType()
export class CreatePronosticoInput {
  @Field()
  @IsString()
  @IsNotEmpty()
  resultadoPropuesto: string;

  @Field(() => Float)
  @IsNumber()
  @IsNotEmpty()
  valorApuesta: number;

  @Field()
  @IsString()
  @IsNotEmpty()
  estado: string;
}
