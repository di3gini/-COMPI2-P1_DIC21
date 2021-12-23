import { Expression } from "../../Abstract/Expresion";
import { Retorno, Type } from "../../Abstract/Objeto";
import { Environment } from "../../Simbolo/Entorno";
import { Nodo_Arbol } from "../../Graficar_Arbol/nodo_arbol"
import { Instruccion } from "../../Abstract/Instruccion";

export class Push extends Instruccion {
    
        constructor( private arr: Expression, private value: Expression, private linea: number, private columna: number) {
            super(linea, columna);
        }

        public execute(environment: Environment) {

                const val = this.value.execute(environment);
                const arr = this.arr.execute(environment);
                if(arr.type == Type.ARRAY) {
                    arr.value.push(val.value);
                } else {
                    let Errores = localStorage.getItem("ErroresEjecucion");
                    Errores = Errores + "   " + "Error Semantico:" + " No se puede operar los tipos " + val.type  +". En la linea: " + this.line + " y columna: " + this.column + "\n";
                    localStorage.setItem("ErroresEjecucion", Errores);
                }
  
        }
    
        graficar(): Nodo_Arbol {
            const NodoAritmetica = new Nodo_Arbol("PUSH");
            
            const value = new Nodo_Arbol("EXPRESION");
    
            value.agregarHijo(this.value.graficar());
            NodoAritmetica.agregarHijo(value);
            return NodoAritmetica;
        }
}