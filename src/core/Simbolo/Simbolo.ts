import { Type } from "../Abstract/Retorno";

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




export class SimboloC3D{
    public valor :any;
    public id : string;
    public type : Type;
    public linea: number;
    public columna:number;
    public temporal:any;
    public entorno:boolean;
    //public ambito: boolean;

    constructor(valor: any, id: string, type: Type,temporal:any,entorno:boolean,linea:number,columna:number){
        this.valor = valor;
        this.id = id;
        this.type = type;
        this.linea = linea;
        this.columna = columna;
        this.temporal=temporal;
        this.entorno= entorno;
    }
}
