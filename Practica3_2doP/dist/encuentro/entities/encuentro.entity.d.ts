import { Pronostico } from './../../pronostico/entities/pronostico.entity';
export declare class EncuentroDeportivo {
    id: number;
    nombre: string;
    fecha: Date;
    lugar: string;
    equipoLocal: string;
    equipoVisitante: string;
    estado: string;
    pronosticos: Pronostico[];
}
