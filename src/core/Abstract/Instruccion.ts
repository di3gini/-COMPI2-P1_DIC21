import { Environment } from "../Simbolo/Entorno";


export abstract class Instruccion {

    public line: number;
    public column: number;


    constructor(line: number, column: number,code?:string) {
        this.line = line;
        this.column = column;
     
    }

    public abstract execute(environment : Environment) : any;


    public abstract graficar();
   





}