"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateEncuentroDeportivoDto = void 0;
class UpdateEncuentroDeportivoDto {
    constructor(id, equipo1, equipo2, fecha, hora, estado) {
        this.id = id;
        this.equipo1 = equipo1;
        this.equipo2 = equipo2;
        this.fecha = fecha;
        this.hora = hora;
        this.estado = estado;
    }
    get values() {
        const returnObj = {};
        if (this.equipo1)
            returnObj.equipo1 = this.equipo1;
        if (this.equipo2)
            returnObj.equipo2 = this.equipo2;
        if (this.fecha)
            returnObj.fecha = this.fecha;
        if (this.hora)
            returnObj.hora = this.hora;
        if (this.estado)
            returnObj.estado = this.estado;
        return returnObj;
    }
    static create(props) {
        const { id, equipo1, equipo2, fecha, hora, estado } = props;
        if (!id || isNaN(Number(id))) {
            return ['id must be a valid number', undefined];
        }
        if (fecha !== undefined && isNaN(new Date(fecha).getTime())) {
            return ['fecha must be a valid date', undefined];
        }
        if (estado !== undefined && typeof estado !== 'string') {
            return ['estado must be a string', undefined];
        }
        return [undefined, new UpdateEncuentroDeportivoDto(id, equipo1, equipo2, fecha ? new Date(fecha) : undefined, hora, estado)];
    }
}
exports.UpdateEncuentroDeportivoDto = UpdateEncuentroDeportivoDto;
