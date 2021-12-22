import { Expression } from "../Abstract/Expresion";
import { Retorno, RetornoC3D, Type } from "../Abstract/Objeto";
import { Environment } from "../Simbolo/Entorno";
import { Nodo_Arbol } from "../Graficar_Arbol/nodo_arbol"
import { Temporal } from "../codigo3d/Temporal";

export class UpperCase extends Expression {
    
        constructor( private value: Expression, private linea: number, private columna: number) {
            super(linea, columna);
        }

        public execute(environment: Environment): Retorno {

            try{
                
                const val = this.value.execute(environment);
                if(val.type == Type.STRING){
                    return { value: (String(val.value).toUpperCase()), type: Type.STRING };
                } else {
                    let Errores = localStorage.getItem("ErroresEjecucion");
                    Errores = Errores + "   " + "Error Semantico:" + " No se puede operar el tipo " + val.type +". En la linea: " + this.line + " y columna: " + this.column + "\n";
                    localStorage.setItem("ErroresEjecucion", Errores);
                }
            }
            catch(e){
                let Errores = localStorage.getItem("ErroresEjecucion");
                Errores = Errores + "   " + "Error Semantico:" + " No se puede operar. En la linea: " + this.line + " y columna: " + this.column + "\n";
                localStorage.setItem("ErroresEjecucion", Errores);
            }          
        }
    
        graficar(): Nodo_Arbol {
            const NodoAritmetica = new Nodo_Arbol("UPPERCASE");
            
            const value = new Nodo_Arbol("EXPRESION");
    
            value.agregarHijo(this.value.graficar());
            NodoAritmetica.agregarHijo(value);
            return NodoAritmetica;
        }
        public C3D(environment: Environment, Temp: Temporal): RetornoC3D {
            return
        }
}