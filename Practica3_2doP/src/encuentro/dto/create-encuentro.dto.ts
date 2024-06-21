import { IsString, IsNotEmpty, IsNumber, IsDateString } from 'class-validator';

export class CreateEncuentroDeportivoDto {
  @IsString()
  @IsNotEmpty()
  equipo1: string;

  @IsString()
  @IsNotEmpty()
  equipo2: string;

  @IsDateString()
  @IsNotEmpty()
  fecha: Date;

  @IsString()
  @IsNotEmpty()
  hora: string;

  @IsString()
  @IsNotEmpty()
  estado: string;
}
