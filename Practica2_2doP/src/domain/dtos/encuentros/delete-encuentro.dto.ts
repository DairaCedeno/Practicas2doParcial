export class DeleteEncuentroDeportivoDto {

    private constructor(
        public readonly id: number
    ) {}

    get values() {
        return { id: this.id };
    }

    static delete(props: { [key: string]: any }): [string?, DeleteEncuentroDeportivoDto?] {
        const { id } = props;

        if (!id || isNaN(Number(id))) {
            return ['id must be a valid number', undefined];
        }

        return [undefined, new DeleteEncuentroDeportivoDto(id)];
    }
}
