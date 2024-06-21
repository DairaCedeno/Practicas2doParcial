import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreatePronosticoDto {
  @IsString()
  @IsNotEmpty()
  resultadoPropuesto: string;

  @IsNumber()
  @IsNotEmpty()
  valorApuesta: number;

  @IsString()
  @IsNotEmpty()
  estado: string;
}
