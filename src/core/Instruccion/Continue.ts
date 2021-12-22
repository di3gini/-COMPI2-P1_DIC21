import { Instruccion } from "../Abstract/Instruccion";
import { Expression } from "../Abstract/Expresion";
import { Environment } from "../Simbolo/Entorno";
import { Nodo_Arbol } from '../Graficar_Arbol/nodo_arbol';
import { Temporal } from "../codigo3d/Temporal";

export class Continue extends Instruccion{

    constructor(line : number, column : number){
        super(line, column);
    }

    public execute(environment : Environment) {
        return {line : this.line, column: this.column, type : 'Continue'};
    }


    public graficar(){
        let grf = new Nodo_Arbol("CONTINUE");

        return grf;

        
    }

    public C3D(environment: Environment, Temp: Temporal) {
        
    }
}