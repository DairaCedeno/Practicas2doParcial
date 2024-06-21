import { PronosticoService } from './pronostico.service';
import { CreatePronosticoDto } from './dto/create-pronostico.dto';
import { UpdatePronosticoDto } from './dto/update-pronostico.dto';
export declare class PronosticoController {
    private readonly pronosticoService;
    constructor(pronosticoService: PronosticoService);
    create(createPronosticoDto: CreatePronosticoDto): Promise<import("./entities/pronostico.entity").Pronostico>;
    findAll(): Promise<import("./entities/pronostico.entity").Pronostico[]>;
    findOne(id: number): Promise<import("./entities/pronostico.entity").Pronostico>;
    update(id: number, updatePronosticoDto: UpdatePronosticoDto): Promise<import("./entities/pronostico.entity").Pronostico>;
    remove(id: number): Promise<import("./entities/pronostico.entity").Pronostico>;
}
