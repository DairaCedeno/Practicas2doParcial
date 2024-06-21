import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Pronostico } from './../../pronostico/entities/pronostico.entity'

@Entity('apostador')
export class Apostador {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('text')
  nombre: string;

  @Column('text')
  identificacion: string;

  @Column('text', { default: 'Activo' })
  estado: string;

  @OneToMany(() => Pronostico, (pronostico) => pronostico.apostador)
  pronosticos: Pronostico[];
}
