"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateEncuentroDeportivoDto = void 0;
class CreateEncuentroDeportivoDto {
    constructor(equipo1, equipo2, fecha, hora, estado = 'Activo') {
        this.equipo1 = equipo1;
        this.equipo2 = equipo2;
        this.fecha = fecha;
        this.hora = hora;
        this.estado = estado;
    }
    static create(props) {
        const { equipo1, equipo2, fecha, hora, estado } = props;
        if (!equipo1)
            return ['equipo1 property is required', undefined];
        if (!equipo2)
            return ['equipo2 property is required', undefined];
        if (!fecha || isNaN(new Date(fecha).getTime()))
            return ['fecha must be a valid date', undefined];
        if (!hora)
            return ['hora property is required', undefined];
        if (estado !== undefined && typeof estado !== 'string')
            return ['estado must be a string', undefined];
        return [undefined, new CreateEncuentroDeportivoDto(equipo1, equipo2, new Date(fecha), hora, estado)];
    }
}
exports.CreateEncuentroDeportivoDto = CreateEncuentroDeportivoDto;
