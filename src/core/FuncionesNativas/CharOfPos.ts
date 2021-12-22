import { Expression } from "../Abstract/Expresion";
import { Retorno, Type } from "../Abstract/Objeto";
import { Environment } from "../Simbolo/Entorno";
import { Nodo_Arbol } from "../Graficar_Arbol/nodo_arbol"

export class CharOfPos extends Expression {
    
        constructor( private value: Expression, private position: Expression, private linea: number, private columna: number) {
            super(linea, columna);
        }

        public execute(environment: Environment): Retorno {

            try{
                const val = this.value.execute(environment);
                const pos = this.position.execute(environment);
                if(val.type == Type.STRING && pos.type == Type.NUMBER){
                    return { value: (String(val.value.toString().charAt(pos.value))), type: Type.STRING };
                } else {
                    let Errores = localStorage.getItem("ErroresEjecucion");
                    Errores = Errores + "   " + "Error Semantico:" + " No se puede operar los tipos " + val.type +", "+ pos.type +". En la linea: " + this.line + " y columna: " + this.column + "\n";
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
}