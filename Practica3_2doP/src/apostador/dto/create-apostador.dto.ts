import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateApostadorDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsString()
  @IsNotEmpty()
  identificacion: string;

  @IsString()
  @IsNotEmpty()
  estado: string;
}
