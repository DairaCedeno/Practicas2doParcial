"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApostadorEntity = void 0;
class ApostadorEntity {
    constructor(nombre, identificacion) {
        this.nombre = nombre;
        this.identificacion = identificacion;
    }
    static fromObject(object) {
        const { nombre, identificacion } = object;
        if (!nombre)
            throw 'Nombre is required';
        if (!identificacion)
            throw 'Identificación is required';
        return new ApostadorEntity(nombre, identificacion);
    }
}
exports.ApostadorEntity = ApostadorEntity;
