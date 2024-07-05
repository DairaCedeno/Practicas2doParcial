import { CreatePronosticoDto } from './create-pronostico.dto';
declare const UpdatePronosticoDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreatePronosticoDto>>;
export declare class UpdatePronosticoDto extends UpdatePronosticoDto_base {
    idpronostico: number;
}
export {};
