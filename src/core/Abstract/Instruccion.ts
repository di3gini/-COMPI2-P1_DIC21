import { Environment } from "../Simbolo/Entorno";
import { Temporal } from '../codigo3d/Temporal';

export abstract class Instruccion {

    public line: number;
    public column: number;


    constructor(line: number, column: number,code?:string) {
        this.line = line;
        this.column = column;
     
    }

    public abstract execute(environment : Environment) : any;


    public abstract graficar();
   
    public abstract C3D(environment : Environment,Temp:Temporal) : any;




}