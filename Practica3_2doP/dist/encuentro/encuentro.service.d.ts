import { CreateEncuentroDeportivoDto } from './dto/create-encuentro.dto';
import { UpdateEncuentroDeportivoDto } from './dto/update-encuentro.dto';
import { Repository } from 'typeorm';
import { EncuentroDeportivo } from './entities/encuentro.entity';
export declare class EncuentroDeportivoService {
    private readonly encuentroDeportivoRepository;
    constructor(encuentroDeportivoRepository: Repository<EncuentroDeportivo>);
    create(createEncuentroDeportivoDto: CreateEncuentroDeportivoDto): Promise<EncuentroDeportivo>;
    findAll(): Promise<EncuentroDeportivo[]>;
    findOne(id: number): Promise<EncuentroDeportivo>;
    update(id: number, updateEncuentroDeportivoDto: UpdateEncuentroDeportivoDto): Promise<EncuentroDeportivo>;
    remove(id: number): Promise<EncuentroDeportivo>;
}
