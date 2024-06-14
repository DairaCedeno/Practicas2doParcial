export class GetAllEncuentroDeportivoDto {

    private constructor(
        public readonly id?: number,
        public readonly equipo1?: string,
        public readonly equipo2?: string,
        public readonly fecha?: Date,
        public readonly hora?: string,
        public readonly estado?: string
    ) {}

    get values() {
        const returnObj: { [key: string]: any } = {};

        if (this.id !== undefined) returnObj.id = this.id;
        if (this.equipo1) returnObj.equipo1 = this.equipo1;
        if (this.equipo2) returnObj.equipo2 = this.equipo2;
        if (this.fecha) returnObj.fecha = this.fecha;
        if (this.hora) returnObj.hora = this.hora;
        if (this.estado) returnObj.estado = this.estado;

        return returnObj;
    }

    static query(props: { [key: string]: any }): GetAllEncuentroDeportivoDto {
        const { id, equipo1, equipo2, fecha, hora, estado } = props;

        return new GetAllEncuentroDeportivoDto(id, equipo1, equipo2, fecha ? new Date(fecha) : undefined, hora, estado);
    }
}
