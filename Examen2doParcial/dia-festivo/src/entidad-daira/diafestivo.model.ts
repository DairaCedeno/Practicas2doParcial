import { ObjectType, Field, ID, Float } from '@nestjs/graphql';

@ObjectType()
export class DiaFestivo {
  @Field(type => ID)
  id: number;

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
