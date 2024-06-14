export class ApostadorEntity {

  constructor(
      public nombre: string,
      public identificacion: string
  ) {}

  public static fromObject(object: { [key: string]: any }): ApostadorEntity {
      const { nombre, identificacion } = object;

      if (!nombre) throw 'Nombre is required';
      if (!identificacion) throw 'Identificación is required';

      return new ApostadorEntity(nombre, identificacion);
  }
}
