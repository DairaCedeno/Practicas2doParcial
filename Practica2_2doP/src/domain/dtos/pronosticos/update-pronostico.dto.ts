export class UpdatePronosticoDto {

    private constructor(
        public readonly id: number,
        public readonly resultadoPropuesto?: string,
        public readonly valorApuesta?: number,
        public readonly apostadorId?: number,
        public readonly encuentroDeportivoId?: number,
        public readonly estado?: string
    ) {}

    get values() {
        const returnObj: { [key: string]: any } = {};

        if (this.resultadoPropuesto) returnObj.resultadoPropuesto = this.resultadoPropuesto;
        if (this.valorApuesta !== undefined) returnObj.valorApuesta = this.valorApuesta;
        if (this.apostadorId !== undefined) returnObj.apostadorId = this.apostadorId;
        if (this.encuentroDeportivoId !== undefined) returnObj.encuentroDeportivoId = this.encuentroDeportivoId;
        if (this.estado) returnObj.estado = this.estado;

        return returnObj;
    }

    static create(props: { [key: string]: any }): [string?, UpdatePronosticoDto?] {
        const { id, resultadoPropuesto, valorApuesta, apostadorId, encuentroDeportivoId, estado } = props;

        if (!id || isNaN(Number(id))) {
            return ['id must be a valid number', undefined];
        }

        if (valorApuesta !== undefined && (typeof valorApuesta !== 'number' || valorApuesta <= 0)) {
            return ['valorApuesta must be a positive number', undefined];
        }

        if (estado !== undefined && typeof estado !== 'string') {
            return ['estado must be a string', undefined];
        }

        return [undefined, new UpdatePronosticoDto(id, resultadoPropuesto, valorApuesta, apostadorId, encuentroDeportivoId, estado)];
    }
}
