import { Pronostico } from './../../pronostico/entities/pronostico.entity';
export declare class Apostador {
    id: number;
    nombre: string;
    identificacion: string;
    estado: string;
    pronosticos: Pronostico[];
}
