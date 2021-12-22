import { Expression } from "../Abstract/Expresion";
import { Retorno, Type } from "../Abstract/Objeto";
import { Environment } from "../Simbolo/Entorno";
import { Nodo_Arbol } from "../Graficar_Arbol/nodo_arbol"

export class Concat extends Expression {
    
        constructor(private leftValue: Expression, private rightValue: Expression, private linea: number, private columna: number) {
            super(linea, columna);
        }

        
        public execute(environment: Environment): Retorno {
            const leftval = this.leftValue.execute(environment);
            const rightval = this.rightValue.execute(environment);
            if (leftval.type == Type.STRING && rightval.type == Type.STRING) {
                const res = leftval.value.toString().concat(rightval.value.toString());
                return { value: res, type: Type.STRING };
            } else {
                let Errores = localStorage.getItem("ErroresEjecucion");
                Errores = Errores + "   " + "Error Semantico:" + " No se puede operar tipos que no sean STRING: " + leftval.type + ", " + rightval.type + ". En la linea: " + this.line + " y columna: " + this.column + "\n";
                localStorage.setItem("ErroresEjecucion", Errores);
            }          
        }
    
        graficar(): Nodo_Arbol {
            const NodoAritmetica = new Nodo_Arbol("CONCAT");

            const Leftvalue = new Nodo_Arbol("EXPRESION");
            const operador = new Nodo_Arbol("&");
            const Rightvalue = new Nodo_Arbol("EXPRESION");
    
            Leftvalue.agregarHijo(this.leftValue.graficar());
            Rightvalue.agregarHijo(this.rightValue.graficar());
            NodoAritmetica.agregarHijo(Leftvalue);
            NodoAritmetica.agregarHijo(operador);
            NodoAritmetica.agregarHijo(Rightvalue);
            return NodoAritmetica;
        }
}