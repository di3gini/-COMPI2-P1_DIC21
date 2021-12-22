import { Expression } from "../Abstract/Expresion";
import { Retorno, Type } from "../Abstract/Objeto";
import { Environment } from "../Simbolo/Entorno";
import { Nodo_Arbol } from "../Graficar_Arbol/nodo_arbol"

export class Pow extends Expression {
    
        constructor(private leftValue: Expression, private rightValue: Expression, private linea: number, private columna: number) {
            super(linea, columna);
        }

        
        public execute(environment: Environment): Retorno {

            const right = this.rightValue.execute(environment);
            const left = this.leftValue.execute(environment);

            if (right.type == Type.NUMBER && left.type == Type.NUMBER) {
                return { value: (Math.pow(left.value, right.value)), type: Type.NUMBER };
            } else if (right.type == Type.DECIMAL || left.type == Type.DECIMAL) {
                return { value: (Math.pow(left.value, right.value)), type: Type.DECIMAL };
            } else {
                let Errores = localStorage.getItem("ErroresEjecucion");
                Errores = Errores + "   " + "Error Semantico:" + " No se puede operar: " + left.type + ' _ ' + right.type + ". En la linea: " + this.line + " y columna: " + this.column + "\n";
                localStorage.setItem("ErroresEjecucion", Errores);
            }          
        }
    
        graficar(): Nodo_Arbol {
            const NodoAritmetica = new Nodo_Arbol("POW");

            const Leftvalue = new Nodo_Arbol("EXPRESION");
            const Rightvalue = new Nodo_Arbol("EXPRESION");
    
            Leftvalue.agregarHijo(this.leftValue.graficar());
            Rightvalue.agregarHijo(this.rightValue.graficar());
            NodoAritmetica.agregarHijo(Leftvalue);
            NodoAritmetica.agregarHijo(Rightvalue);
            return NodoAritmetica;
        }
}