import { Expression } from "../Abstract/Expresion";
import { Retorno, Type } from "../Abstract/Objeto";
import { Environment } from "../Simbolo/Entorno";
import { Nodo_Arbol } from "../Graficar_Arbol/nodo_arbol"

export class toInt extends Expression {
    
        constructor(private value: Expression, private linea: number, private columna: number) {
            super(linea, columna);
        }

        
        public execute(environment: Environment): Retorno {

            const val = this.value.execute(environment);
            
            if (val.type == Type.DECIMAL) {
                return { value: (parseInt(val.value)), type: Type.NUMBER };
            } else {
                let Errores = localStorage.getItem("ErroresEjecucion");
                Errores = Errores + "   " + "Error Semantico:" + " No se puede operar: " + val.type + ". En la linea: " + this.line + " y columna: " + this.column + "\n";
                localStorage.setItem("ErroresEjecucion", Errores);
            }          
        }
    
        graficar(): Nodo_Arbol {
            const NodoAritmetica = new Nodo_Arbol("SIN");

            const value = new Nodo_Arbol("EXPRESION");
    
            value.agregarHijo(this.value.graficar());
            NodoAritmetica.agregarHijo(value);
            return NodoAritmetica;
        }
}