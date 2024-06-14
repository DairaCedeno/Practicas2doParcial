"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateApostadorDto = void 0;
class UpdateApostadorDto {
    constructor(id, nombre, identificacion, estado) {
        this.id = id;
        this.nombre = nombre;
        this.identificacion = identificacion;
        this.estado = estado;
    }
    get values() {
        const returnObj = {};
        if (this.nombre)
            returnObj.nombre = this.nombre;
        if (this.identificacion)
            returnObj.identificacion = this.identificacion;
        if (this.estado)
            returnObj.estado = this.estado;
        return returnObj;
    }
    static create(props) {
        const { id, nombre, identificacion, estado } = props;
        if (!id || isNaN(Number(id))) {
            return ['id must be a valid number', undefined];
        }
        if (estado !== undefined && typeof estado !== 'string') {
            return ['estado must be a string', undefined];
        }
        return [undefined, new UpdateApostadorDto(id, nombre, identificacion, estado)];
    }
}
exports.UpdateApostadorDto = UpdateApostadorDto;
