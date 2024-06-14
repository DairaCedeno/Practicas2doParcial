export class EncuentroEntity {

    constructor(
        public equipo1: string,
        public equipo2: string,
        public fecha: Date,
        public hora: string
    ) {}

    public static fromObject(object: { [key: string]: any }): EncuentroEntity {
        const { equipo1, equipo2, fecha, hora } = object;

        if (!equipo1) throw 'Equipo 1 is required';
        if (!equipo2) throw 'Equipo 2 is required';
        if (!fecha) throw 'Fecha is required';
        if (!hora) throw 'Hora is required';

        return new EncuentroEntity(equipo1, equipo2, new Date(fecha), hora);
    }
}
