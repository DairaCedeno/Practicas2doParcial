export class GetAllPronosticoDto {

    private constructor(
        public readonly id?: number,
        public readonly resultadoPropuesto?: string,
        public readonly valorApuesta?: number,
        public readonly apostadorId?: number,
        public readonly encuentroDeportivoId?: number,
        public readonly estado?: string
    ) {}

    get values() {
        const returnObj: { [key: string]: any } = {};

        if (this.id !== undefined) returnObj.id = this.id;
        if (this.resultadoPropuesto) returnObj.resultadoPropuesto = this.resultadoPropuesto;
        if (this.valorApuesta !== undefined) returnObj.valorApuesta = this.valorApuesta;
        if (this.apostadorId !== undefined) returnObj.apostadorId = this.apostadorId;
        if (this.encuentroDeportivoId !== undefined) returnObj.encuentroDeportivoId = this.encuentroDeportivoId;
        if (this.estado) returnObj.estado = this.estado;

        return returnObj;
    }

    static query(props: { [key: string]: any }): GetAllPronosticoDto {
        const { id, resultadoPropuesto, valorApuesta, apostadorId, encuentroDeportivoId, estado } = props;

        return new GetAllPronosticoDto(id, resultadoPropuesto, valorApuesta, apostadorId, encuentroDeportivoId, estado);
    }
}
