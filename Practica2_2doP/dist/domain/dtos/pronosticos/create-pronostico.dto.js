"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePronosticoDto = void 0;
class CreatePronosticoDto {
    constructor(resultadoPropuesto, valorApuesta, apostadorId, encuentroDeportivoId, estado = 'Activo') {
        this.resultadoPropuesto = resultadoPropuesto;
        this.valorApuesta = valorApuesta;
        this.apostadorId = apostadorId;
        this.encuentroDeportivoId = encuentroDeportivoId;
        this.estado = estado;
    }
    static create(props) {
        const { resultadoPropuesto, valorApuesta, apostadorId, encuentroDeportivoId, estado } = props;
        if (!resultadoPropuesto)
            return ['resultadoPropuesto property is required', undefined];
        if (valorApuesta === undefined || valorApuesta === null)
            return ['valorApuesta property is required', undefined];
        if (typeof valorApuesta !== 'number' || valorApuesta <= 0)
            return ['valorApuesta must be a positive number', undefined];
        if (!apostadorId || isNaN(Number(apostadorId)))
            return ['apostadorId must be a valid number', undefined];
        if (!encuentroDeportivoId || isNaN(Number(encuentroDeportivoId)))
            return ['encuentroDeportivoId must be a valid number', undefined];
        if (estado !== undefined && typeof estado !== 'string')
            return ['estado must be a string', undefined];
        return [undefined, new CreatePronosticoDto(resultadoPropuesto, valorApuesta, apostadorId, encuentroDeportivoId, estado)];
    }
}
exports.CreatePronosticoDto = CreatePronosticoDto;
