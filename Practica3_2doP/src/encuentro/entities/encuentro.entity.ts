import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Pronostico } from './../../pronostico/entities/pronostico.entity';

@Entity('encuentroDeportivo')
export class EncuentroDeportivo {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('text')
  nombre: string;

  @Column({ type: 'timestamp' })
  fecha: Date;

  @Column('text')
  lugar: string;

  @Column('text')
  equipoLocal: string;

  @Column('text')
  equipoVisitante: string;

  @Column('text', { default: 'Programado' })
  estado: string;

  @OneToMany(() => Pronostico, (pronostico) => pronostico.encuentroDeportivo)
  pronosticos: Pronostico[];
}
