import { Type } from "../Abstract/Objeto";

export class Simbolo{
    public valor :any;
    public id : string;
    public type : Type;
    public linea: number;
    public columna:number;

    constructor(valor: any, id: string, type: Type,linea:number,columna:number){
        this.valor = valor;
        this.id = id;
        this.type = type;
        this.linea = linea;
        this.columna = columna;
       
    }
}
