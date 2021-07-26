import { Registro } from "./registro.model";

export class Persona{
    constructor(public id: number,
         public fecha : Date, public registros:Registro[]) {}
}