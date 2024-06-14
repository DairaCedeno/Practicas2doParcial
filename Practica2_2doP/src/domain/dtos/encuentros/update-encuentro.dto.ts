export class UpdateEncuentroDeportivoDto {

    private constructor(
        public readonly id: number,
        public readonly equipo1?: string,
        public readonly equipo2?: string,
        public readonly fecha?: Date,
        public readonly hora?: string,
        public readonly estado?: string
    ) {}

    get values() {
        const returnObj: { [key: string]: any } = {};

        if (this.equipo1) returnObj.equipo1 = this.equipo1;
        if (this.equipo2) returnObj.equipo2 = this.equipo2;
        if (this.fecha) returnObj.fecha = this.fecha;
        if (this.hora) returnObj.hora = this.hora;
        if (this.estado) returnObj.estado = this.estado;

        return returnObj;
    }

    static create(props: { [key: string]: any }): [string?, UpdateEncuentroDeportivoDto?] {
        const { id, equipo1, equipo2, fecha, hora, estado } = props;

        if (!id || isNaN(Number(id))) {
            return ['id must be a valid number', undefined];
        }

        if (fecha !== undefined && isNaN(new Date(fecha).getTime())) {
            return ['fecha must be a valid date', undefined];
        }

        if (estado !== undefined && typeof estado !== 'string') {
            return ['estado must be a string', undefined];
        }

        return [undefined, new UpdateEncuentroDeportivoDto(id, equipo1, equipo2, fecha ? new Date(fecha) : undefined, hora, estado)];
    }
}
