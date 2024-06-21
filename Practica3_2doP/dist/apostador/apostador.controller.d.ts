import { ApostadorService } from './apostador.service';
import { CreateApostadorDto } from './dto/create-apostador.dto';
import { UpdateApostadorDto } from './dto/update-apostador.dto';
export declare class ApostadorController {
    private readonly apostadorService;
    constructor(apostadorService: ApostadorService);
    create(createApostadorDto: CreateApostadorDto): Promise<import("./entities/apostador.entity").Apostador>;
    findAll(): Promise<import("./entities/apostador.entity").Apostador[]>;
    findOne(id: number): Promise<import("./entities/apostador.entity").Apostador>;
    update(id: number, updateApostadorDto: UpdateApostadorDto): Promise<import("./entities/apostador.entity").Apostador>;
    remove(id: number): Promise<import("./entities/apostador.entity").Apostador>;
}
