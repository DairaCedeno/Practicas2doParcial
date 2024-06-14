export class PronosticoEntity {

    constructor(
        public resultadoPropuesto: string,
        public valorApuesta: number,
        public apostadorId: number,
        public encuentroDeportivoId: number
    ) {}

    public static fromObject(object: { [key: string]: any }): PronosticoEntity {
        const { resultadoPropuesto, valorApuesta, apostadorId, encuentroDeportivoId } = object;

        if (!resultadoPropuesto) throw 'Resultado propuesto is required';
        if (valorApuesta === undefined || valorApuesta === null) throw 'Valor de apuesta is required';
        if (typeof valorApuesta !== 'number' || valorApuesta <= 0) throw 'Valor de apuesta must be a positive number';
        if (!apostadorId || isNaN(Number(apostadorId))) throw 'Apostador ID must be a valid number';
        if (!encuentroDeportivoId || isNaN(Number(encuentroDeportivoId))) throw 'Encuentro deportivo ID must be a valid number';

        return new PronosticoEntity(resultadoPropuesto, valorApuesta, apostadorId, encuentroDeportivoId);
    }
}
