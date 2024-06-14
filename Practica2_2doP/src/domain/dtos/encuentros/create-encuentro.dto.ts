export class CreateEncuentroDeportivoDto {

    private constructor(
        public readonly equipo1: string,
        public readonly equipo2: string,
        public readonly fecha: Date,
        public readonly hora: string,
        public readonly estado: string = 'Activo'
    ) {}

    static create(props: { [key: string]: any }): [string?, CreateEncuentroDeportivoDto?] {
        const { equipo1, equipo2, fecha, hora, estado } = props;

        if (!equipo1) return ['equipo1 property is required', undefined];
        if (!equipo2) return ['equipo2 property is required', undefined];
        if (!fecha || isNaN(new Date(fecha).getTime())) return ['fecha must be a valid date', undefined];
        if (!hora) return ['hora property is required', undefined];
        if (estado !== undefined && typeof estado !== 'string') return ['estado must be a string', undefined];

        return [undefined, new CreateEncuentroDeportivoDto(equipo1, equipo2, new Date(fecha), hora, estado)];
    }
}
