"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllEncuentroDeportivoDto = void 0;
class GetAllEncuentroDeportivoDto {
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
        if (this.id !== undefined)
            returnObj.id = this.id;
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
    static query(props) {
        const { id, equipo1, equipo2, fecha, hora, estado } = props;
        return new GetAllEncuentroDeportivoDto(id, equipo1, equipo2, fecha ? new Date(fecha) : undefined, hora, estado);
    }
}
exports.GetAllEncuentroDeportivoDto = GetAllEncuentroDeportivoDto;
