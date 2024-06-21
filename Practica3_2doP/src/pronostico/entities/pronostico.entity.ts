import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { EncuentroDeportivo } from './../../encuentro/entities/encuentro.entity';
import { Apostador } from './../../apostador/entities/apostador.entity';

@Entity('pronostico')
export class Pronostico {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('text')
  descripcion: string;

  @Column('text')
  resultadoEsperado: string;

  @ManyToOne(() => EncuentroDeportivo, (encuentroDeportivo) => encuentroDeportivo.pronosticos)
  encuentroDeportivo: EncuentroDeportivo;

  @ManyToOne(() => Apostador, (apostador) => apostador.pronosticos)
  apostador: Apostador;
}
