import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Pronostico } from './../../pronostico/entities/pronostico.entity';

@ObjectType()
@Entity('apostador')
export class Apostador {
  @Field(() => Int)
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Field()
  @Column('text')
  nombre: string;

  @Field()
  @Column('text')
  identificacion: string;

  @Field()
  @Column('text', { default: 'Activo' })
  estado: string;

  @Field(() => [Pronostico])
  @OneToMany(() => Pronostico, (pronostico) => pronostico.apostador)
  pronosticos: Pronostico[];
}
