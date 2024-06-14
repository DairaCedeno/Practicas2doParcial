export class UpdateApostadorDto {

  private constructor(
      public readonly id: number,
      public readonly nombre?: string,
      public readonly identificacion?: string,
      public readonly estado?: string
  ) {}

  get values() {
      const returnObj: { [key: string]: any } = {};

      if (this.nombre) returnObj.nombre = this.nombre;
      if (this.identificacion) returnObj.identificacion = this.identificacion;
      if (this.estado) returnObj.estado = this.estado;

      return returnObj;
  }

  static create(props: { [key: string]: any }): [string?, UpdateApostadorDto?] {
      const { id, nombre, identificacion, estado } = props;

      if (!id || isNaN(Number(id))) {
          return ['id must be a valid number', undefined];
      }

      if (estado !== undefined && typeof estado !== 'string') {
          return ['estado must be a string', undefined];
      }

      return [undefined, new UpdateApostadorDto(id, nombre, identificacion, estado)];
  }
}
