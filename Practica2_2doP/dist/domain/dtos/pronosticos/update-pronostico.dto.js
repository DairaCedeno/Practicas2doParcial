"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePronosticoDto = void 0;
class UpdatePronosticoDto {
    constructor(id, resultadoPropuesto, valorApuesta, apostadorId, encuentroDeportivoId, estado) {
        this.id = id;
        this.resultadoPropuesto = resultadoPropuesto;
        this.valorApuesta = valorApuesta;
        this.apostadorId = apostadorId;
        this.encuentroDeportivoId = encuentroDeportivoId;
        this.estado = estado;
    }
    get values() {
        const returnObj = {};
        if (this.resultadoPropuesto)
            returnObj.resultadoPropuesto = this.resultadoPropuesto;
        if (this.valorApuesta !== undefined)
            returnObj.valorApuesta = this.valorApuesta;
        if (this.apostadorId !== undefined)
            returnObj.apostadorId = this.apostadorId;
        if (this.encuentroDeportivoId !== undefined)
            returnObj.encuentroDeportivoId = this.encuentroDeportivoId;
        if (this.estado)
            returnObj.estado = this.estado;
        return returnObj;
    }
    static create(props) {
        const { id, resultadoPropuesto, valorApuesta, apostadorId, encuentroDeportivoId, estado } = props;
        if (!id || isNaN(Number(id))) {
            return ['id must be a valid number', undefined];
        }
        if (valorApuesta !== undefined && (typeof valorApuesta !== 'number' || valorApuesta <= 0)) {
            return ['valorApuesta must be a positive number', undefined];
        }
        if (estado !== undefined && typeof estado !== 'string') {
            return ['estado must be a string', undefined];
        }
        return [undefined, new UpdatePronosticoDto(id, resultadoPropuesto, valorApuesta, apostadorId, encuentroDeportivoId, estado)];
    }
}
exports.UpdatePronosticoDto = UpdatePronosticoDto;
