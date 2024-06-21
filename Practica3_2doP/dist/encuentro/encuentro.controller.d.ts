import { EncuentroDeportivoService } from './encuentro.service';
import { CreateEncuentroDeportivoDto } from './dto/create-encuentro.dto';
import { UpdateEncuentroDeportivoDto } from './dto/update-encuentro.dto';
export declare class EncuentroDeportivoController {
    private readonly encuentroDeportivoService;
    constructor(encuentroDeportivoService: EncuentroDeportivoService);
    create(createEncuentroDeportivoDto: CreateEncuentroDeportivoDto): Promise<import("./entities/encuentro.entity").EncuentroDeportivo>;
    findAll(): Promise<import("./entities/encuentro.entity").EncuentroDeportivo[]>;
    findOne(id: number): Promise<import("./entities/encuentro.entity").EncuentroDeportivo>;
    update(id: number, updateEncuentroDeportivoDto: UpdateEncuentroDeportivoDto): Promise<import("./entities/encuentro.entity").EncuentroDeportivo>;
    remove(id: number): Promise<import("./entities/encuentro.entity").EncuentroDeportivo>;
}
