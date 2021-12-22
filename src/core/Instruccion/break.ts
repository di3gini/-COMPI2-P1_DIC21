import { Instruccion } from "../Abstract/Instruccion";
import { Expression } from "../Abstract/Expresion";
import { Environment } from "../Simbolo/Entorno";
import { Nodo_Arbol } from '../Graficar_Arbol/nodo_arbol';
import { Temporal } from '../codigo3d/Temporal';

export class Break extends Instruccion{

    constructor(line : number, column : number){
        super(line, column);
    }

    public execute(environment : Environment) {
        return {line : this.line, column: this.column, type : 'Break'};
    }



    public graficar(){

        let breakk= new Nodo_Arbol("BREAK");

        return breakk;
        
    }

    public C3D(env:Environment,Temp:Temporal){}
}