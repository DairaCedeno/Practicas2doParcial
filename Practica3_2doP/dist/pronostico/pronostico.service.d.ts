import { CreatePronosticoDto } from './dto/create-pronostico.dto';
import { UpdatePronosticoDto } from './dto/update-pronostico.dto';
import { Repository } from 'typeorm';
import { Pronostico } from './entities/pronostico.entity';
export declare class PronosticoService {
    private readonly pronosticoRepository;
    constructor(pronosticoRepository: Repository<Pronostico>);
    create(createPronosticoDto: CreatePronosticoDto): Promise<Pronostico>;
    findAll(): Promise<Pronostico[]>;
    findOne(id: number): Promise<Pronostico>;
    update(id: number, updatePronosticoDto: UpdatePronosticoDto): Promise<Pronostico>;
    remove(id: number): Promise<Pronostico>;
}
