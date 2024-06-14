"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllApostadorDto = void 0;
class GetAllApostadorDto {
    constructor(id, nombre, identificacion, estado) {
        this.id = id;
        this.nombre = nombre;
        this.identificacion = identificacion;
        this.estado = estado;
    }
    get values() {
        const returnObj = {};
        if (this.id !== undefined)
            returnObj.id = this.id;
        if (this.nombre)
            returnObj.nombre = this.nombre;
        if (this.identificacion)
            returnObj.identificacion = this.identificacion;
        if (this.estado)
            returnObj.estado = this.estado;
        return returnObj;
    }
    static query(props) {
        const { id, nombre, identificacion, estado } = props;
        return new GetAllApostadorDto(id, nombre, identificacion, estado);
    }
}
exports.GetAllApostadorDto = GetAllApostadorDto;
