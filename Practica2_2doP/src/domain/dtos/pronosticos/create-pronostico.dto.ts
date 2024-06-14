export class CreatePronosticoDto {

    private constructor(
        public readonly resultadoPropuesto: string,
        public readonly valorApuesta: number,
        public readonly apostadorId: number,
        public readonly encuentroDeportivoId: number,
        public readonly estado: string = 'Activo'
    ) {}

    static create(props: { [key: string]: any }): [string?, CreatePronosticoDto?] {
        const { resultadoPropuesto, valorApuesta, apostadorId, encuentroDeportivoId, estado } = props;

        if (!resultadoPropuesto) return ['resultadoPropuesto property is required', undefined];
        if (valorApuesta === undefined || valorApuesta === null) return ['valorApuesta property is required', undefined];
        if (typeof valorApuesta !== 'number' || valorApuesta <= 0) return ['valorApuesta must be a positive number', undefined];
        if (!apostadorId || isNaN(Number(apostadorId))) return ['apostadorId must be a valid number', undefined];
        if (!encuentroDeportivoId || isNaN(Number(encuentroDeportivoId))) return ['encuentroDeportivoId must be a valid number', undefined];
        if (estado !== undefined && typeof estado !== 'string') return ['estado must be a string', undefined];

        return [undefined, new CreatePronosticoDto(resultadoPropuesto, valorApuesta, apostadorId, encuentroDeportivoId, estado)];
    }
}
