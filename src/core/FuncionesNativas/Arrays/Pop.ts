import { Expression } from "../../Abstract/Expresion";
import { Retorno, Type } from "../../Abstract/Objeto";
import { Environment } from "../../Simbolo/Entorno";
import { Nodo_Arbol } from "../../Graficar_Arbol/nodo_arbol"
import { Instruccion } from "../../Abstract/Instruccion";
import { Temporal } from "../../codigo3d/Temporal";

export class Pop extends Instruccion {
    
        constructor( private arr: Expression, private linea: number, private columna: number) {
            super(linea, columna);
        }
        
        public execute(environment: Environment) {

            console.log("EJECUTATE PUTA MADRE");
            const arr = this.arr.execute(environment);
            if(arr.type == Type.ARRAY) {
                arr.value.pop();
            } else {
                let Errores = localStorage.getItem("ErroresEjecucion");
                Errores = Errores + "   " + "Error Semantico:" + " No se puede realizar el pop. En la linea: " + this.line + " y columna: " + this.column + "\n";
                localStorage.setItem("ErroresEjecucion", Errores);
            }
  
        }
    
        graficar(): Nodo_Arbol {
            const NodoAritmetica = new Nodo_Arbol("POP");
            
            const value = new Nodo_Arbol("EXPRESION");
    
            value.agregarHijo(this.arr.graficar());
            NodoAritmetica.agregarHijo(value);
            return NodoAritmetica;
        }
        public C3D(environment: Environment, Temp: Temporal) {
            
        }
}