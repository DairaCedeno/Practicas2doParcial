"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PronosticoEntity = void 0;
class PronosticoEntity {
    constructor(resultadoPropuesto, valorApuesta, apostadorId, encuentroDeportivoId) {
        this.resultadoPropuesto = resultadoPropuesto;
        this.valorApuesta = valorApuesta;
        this.apostadorId = apostadorId;
        this.encuentroDeportivoId = encuentroDeportivoId;
    }
    static fromObject(object) {
        const { resultadoPropuesto, valorApuesta, apostadorId, encuentroDeportivoId } = object;
        if (!resultadoPropuesto)
            throw 'Resultado propuesto is required';
        if (valorApuesta === undefined || valorApuesta === null)
            throw 'Valor de apuesta is required';
        if (typeof valorApuesta !== 'number' || valorApuesta <= 0)
            throw 'Valor de apuesta must be a positive number';
        if (!apostadorId || isNaN(Number(apostadorId)))
            throw 'Apostador ID must be a valid number';
        if (!encuentroDeportivoId || isNaN(Number(encuentroDeportivoId)))
            throw 'Encuentro deportivo ID must be a valid number';
        return new PronosticoEntity(resultadoPropuesto, valorApuesta, apostadorId, encuentroDeportivoId);
    }
}
exports.PronosticoEntity = PronosticoEntity;
