import { Expression } from "../Abstract/Expresion";
import { Retorno, RetornoC3D, Type } from "../Abstract/Objeto";
import { Environment } from "../Simbolo/Entorno";
import { Nodo_Arbol } from "../Graficar_Arbol/nodo_arbol"
import { Temporal } from "../codigo3d/Temporal";

export class StringFunc extends Expression {
    
        constructor(private value: Expression, private linea: number, private columna: number) {
            super(linea, columna);
        }

        public execute(environment: Environment): Retorno {
            const value = this.value.execute(environment);
            try{
                
                const val = value.value;
                return { value: (String(val)), type: Type.STRING };
            }
            catch(e){
                let Errores = localStorage.getItem("ErroresEjecucion");
                Errores = Errores + "   " + "Error Semantico:" + " No se puede operar. En la linea: " + this.line + " y columna: " + this.column + "\n";
                localStorage.setItem("ErroresEjecucion", Errores);
            }          
        }
    
        graficar(): Nodo_Arbol {
            const NodoAritmetica = new Nodo_Arbol("STRING");
            
            const value = new Nodo_Arbol("EXPRESION");
    
            value.agregarHijo(this.value);
            NodoAritmetica.agregarHijo(value);
            return NodoAritmetica;
        }
        public C3D(environment: Environment, Temp: Temporal): RetornoC3D {
            return
        }
}