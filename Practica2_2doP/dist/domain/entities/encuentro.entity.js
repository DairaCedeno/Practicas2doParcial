"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EncuentroEntity = void 0;
class EncuentroEntity {
    constructor(equipo1, equipo2, fecha, hora) {
        this.equipo1 = equipo1;
        this.equipo2 = equipo2;
        this.fecha = fecha;
        this.hora = hora;
    }
    static fromObject(object) {
        const { equipo1, equipo2, fecha, hora } = object;
        if (!equipo1)
            throw 'Equipo 1 is required';
        if (!equipo2)
            throw 'Equipo 2 is required';
        if (!fecha)
            throw 'Fecha is required';
        if (!hora)
            throw 'Hora is required';
        return new EncuentroEntity(equipo1, equipo2, new Date(fecha), hora);
    }
}
exports.EncuentroEntity = EncuentroEntity;
