import { InputType, Field } from '@nestjs/graphql';
import { IsString, IsNotEmpty, IsDateString } from 'class-validator';

@InputType()
export class CreateEncuentroDeportivoInput {
  @Field()
  @IsString()
  @IsNotEmpty()
  equipo1: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  equipo2: string;

  @Field()
  @IsDateString()
  @IsNotEmpty()
  fecha: Date;

  @Field()
  @IsString()
  @IsNotEmpty()
  hora: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  estado: string;
}
