"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateApostadorDto = void 0;
class CreateApostadorDto {
    constructor(nombre, identificacion, estado = 'Activo' // Default value for 'estado'
    ) {
        this.nombre = nombre;
        this.identificacion = identificacion;
        this.estado = estado;
    }
    static create(props) {
        const { nombre, identificacion, estado } = props;
        if (!nombre)
            return ['Nombre property is required', undefined];
        if (!identificacion)
            return ['Identificacion property is required', undefined];
        // If estado is provided, ensure it is a valid string
        if (estado !== undefined && typeof estado !== 'string')
            return ['Estado must be a string', undefined];
        return [undefined, new CreateApostadorDto(nombre, identificacion, estado)];
    }
}
exports.CreateApostadorDto = CreateApostadorDto;
