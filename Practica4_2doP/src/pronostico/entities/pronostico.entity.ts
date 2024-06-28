import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { EncuentroDeportivo } from './../../encuentro/entities/encuentro.entity';
import { Apostador } from './../../apostador/entities/apostador.entity';

@ObjectType()
@Entity('pronostico')
export class Pronostico {
  @Field(() => Int)
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Field()
  @Column('text')
  descripcion: string;

  @Field()
  @Column('text')
  resultadoEsperado: string;

  @Field(() => EncuentroDeportivo)
  @ManyToOne(() => EncuentroDeportivo, (encuentroDeportivo) => encuentroDeportivo.pronosticos)
  encuentroDeportivo: EncuentroDeportivo;

  @Field(() => Apostador)
  @ManyToOne(() => Apostador, (apostador) => apostador.pronosticos)
  apostador: Apostador;
}
