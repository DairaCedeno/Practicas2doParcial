export class CreateApostadorDto {

  private constructor(
      public readonly nombre: string,
      public readonly identificacion: string,
      public readonly estado: string = 'Activo' // Default value for 'estado'
  ) {}

  static create(props: { [key: string]: any }): [string?, CreateApostadorDto?] {
      const { nombre, identificacion, estado } = props;

      if (!nombre) return ['Nombre property is required', undefined];
      if (!identificacion) return ['Identificacion property is required', undefined];
      
      // If estado is provided, ensure it is a valid string
      if (estado !== undefined && typeof estado !== 'string') return ['Estado must be a string', undefined];
      
      return [undefined, new CreateApostadorDto(nombre, identificacion, estado)];
  }
}
