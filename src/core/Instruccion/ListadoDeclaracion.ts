import { Instruccion } from "../Abstract/Instruccion";
import { Environment } from "../Simbolo/Entorno";
import { Nodo_Arbol } from '../Graficar_Arbol/nodo_arbol';
import { Retorno, Type } from "../Abstract/Objeto";

import { Expression } from "../Abstract/Expresion";
import { Asignacion } from "./Asignacion";
import { Literal } from "../Expresion/Literal";

export class ListadoDeclaracion extends Instruccion {

    
    constructor(private tipo: Retorno, private variables: string[], line: number, column: number) {
        super(line, column);
    }

    public execute(env: Environment) {
     
        for (const id of this.variables) {
            try {
                switch (this.tipo.type) {
                    case Type.NUMBER:
                        env.setEntornoActual(id, 0, Type.NUMBER,this.line,this.column);
                        break;
                    case Type.STRING:
                        env.setEntornoActual(id, "", Type.STRING,this.line,this.column);
                        break;
                    case Type.BOOLEAN:
                        env.setEntornoActual(id, false, Type.BOOLEAN,this.line,this.column);
                        break;
                    case Type.DECIMAL:
                        env.setEntornoActual(id, 0.0, Type.DECIMAL,this.line,this.column);
                        break;
                    
                }
            } catch (error) {
        }
    }
}


    public graficar(){
        
    }

}
