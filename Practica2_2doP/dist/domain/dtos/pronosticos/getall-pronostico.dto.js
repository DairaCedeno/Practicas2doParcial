"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllPronosticoDto = void 0;
class GetAllPronosticoDto {
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
        if (this.id !== undefined)
            returnObj.id = this.id;
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
    static query(props) {
        const { id, resultadoPropuesto, valorApuesta, apostadorId, encuentroDeportivoId, estado } = props;
        return new GetAllPronosticoDto(id, resultadoPropuesto, valorApuesta, apostadorId, encuentroDeportivoId, estado);
    }
}
exports.GetAllPronosticoDto = GetAllPronosticoDto;
