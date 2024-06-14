export class GetAllApostadorDto {

    private constructor(
        public readonly id?: number,
        public readonly nombre?: string,
        public readonly identificacion?: string,
        public readonly estado?: string
    ) {}

    get values() {
        const returnObj: { [key: string]: any } = {};

        if (this.id !== undefined) returnObj.id = this.id;
        if (this.nombre) returnObj.nombre = this.nombre;
        if (this.identificacion) returnObj.identificacion = this.identificacion;
        if (this.estado) returnObj.estado = this.estado;

        return returnObj;
    }

    static query(props: { [key: string]: any }): GetAllApostadorDto {
        const { id, nombre, identificacion, estado } = props;

        return new GetAllApostadorDto(id, nombre, identificacion, estado);
    }
}
