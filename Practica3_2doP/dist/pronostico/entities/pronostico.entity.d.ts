import { EncuentroDeportivo } from './../../encuentro/entities/encuentro.entity';
import { Apostador } from './../../apostador/entities/apostador.entity';
export declare class Pronostico {
    id: number;
    descripcion: string;
    resultadoEsperado: string;
    encuentroDeportivo: EncuentroDeportivo;
    apostador: Apostador;
}
