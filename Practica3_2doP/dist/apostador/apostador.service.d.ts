import { CreateApostadorDto } from './dto/create-apostador.dto';
import { UpdateApostadorDto } from './dto/update-apostador.dto';
import { Repository } from 'typeorm';
import { Apostador } from './entities/apostador.entity';
export declare class ApostadorService {
    private readonly apostadorRepository;
    constructor(apostadorRepository: Repository<Apostador>);
    create(createApostadorDto: CreateApostadorDto): Promise<Apostador>;
    findAll(): Promise<Apostador[]>;
    findOne(id: number): Promise<Apostador>;
    update(id: number, updateApostadorDto: UpdateApostadorDto): Promise<Apostador>;
    remove(id: number): Promise<Apostador>;
}
