import { InputType, Field, Float } from '@nestjs/graphql';

@InputType()
export class CreateDiaFestivoInput {
  @Field()
  codigo: string;

  @Field()
  celebracion: string;

  @Field()
  tipo: string;

  @Field()
  explicacionFeriado: string;

  @Field(type => Float)
  beneficiosEconomicosTurismo: number;

  @Field()
  fechaUltimoDiaFestivo: string;

  @Field()
  empresa: string;
}
