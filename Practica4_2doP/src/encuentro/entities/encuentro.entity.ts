import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Pronostico } from './../../pronostico/entities/pronostico.entity';

@ObjectType()
@Entity('encuentroDeportivo')
export class EncuentroDeportivo {
  @Field(() => Int)
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Field()
  @Column('text')
  nombre: string;

  @Field()
  @Column({ type: 'timestamp' })
  fecha: Date;

  @Field()
  @Column('text')
  lugar: string;

  @Field()
  @Column('text')
  equipoLocal: string;

  @Field()
  @Column('text')
  equipoVisitante: string;

  @Field()
  @Column('text', { default: 'Programado' })
  estado: string;

  @Field(() => [Pronostico])
  @OneToMany(() => Pronostico, (pronostico) => pronostico.encuentroDeportivo)
  pronosticos: Pronostico[];
}

