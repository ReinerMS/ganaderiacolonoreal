export class DataModel {
    constructor(id, nombre, hato, raza, fecha_nacimiento, nombre_padre, cod_padre, nombre_madre, cod_madre, abuelo_paterno, abuelo_materno, criador, ultimo_propietario) {
      this.id = id;
      this.nombre = nombre;
      this.hato = hato;
      this.raza = raza;
      this.fecha_nacimiento = fecha_nacimiento;
      this.nombre_padre = nombre_padre;
      this.cod_padre = cod_padre;
      this.nombre_madre = nombre_madre;
      this.cod_madre = cod_madre;
      this.abuelo_paterno = abuelo_paterno;
      this.abuelo_materno = abuelo_materno;
      this.criador = criador;
      this.ultimo_propietario = ultimo_propietario;
    }
  }