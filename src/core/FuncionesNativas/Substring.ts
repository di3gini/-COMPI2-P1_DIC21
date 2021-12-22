import { Expression } from "../Abstract/Expresion";
import { Retorno, RetornoC3D, Type } from "../Abstract/Objeto";
import { Environment } from "../Simbolo/Entorno";
import { Nodo_Arbol } from "../Graficar_Arbol/nodo_arbol"
import { Temporal } from "../codigo3d/Temporal";

export class Substring extends Expression {
    
        constructor( private value: Expression, private initPos: Expression, private finalPos: Expression, private linea: number, private columna: number) {
            super(linea, columna);
        }

        public execute(environment: Environment): Retorno {

            try{
                const val = this.value.execute(environment);
                const iniPos = this.initPos.execute(environment);
                const endPos = this.finalPos.execute(environment);
                if(val.type == Type.STRING && iniPos.type == Type.NUMBER && endPos.type == Type.NUMBER){
                    return { value: (String(val.value.toString().substring(iniPos.value, endPos.value))), type: Type.STRING };
                } else {
                    let Errores = localStorage.getItem("ErroresEjecucion");
                    Errores = Errores + "   " + "Error Semantico:" + " No se puede operar los tipos " + val.type +", "+ iniPos.type + ", "+ endPos.type + ". En la linea: " + this.line + " y columna: " + this.column + "\n";
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
            const NodoAritmetica = new Nodo_Arbol("SUBSTRING");
            
            const value = new Nodo_Arbol("EXPRESION");
            const iniPos = new Nodo_Arbol("EXPRESION");
            const endPos = new Nodo_Arbol("EXPRESION");
            value.agregarHijo(this.value.graficar());
            iniPos.agregarHijo(this.initPos.graficar());
            endPos.agregarHijo(this.finalPos.graficar());
            NodoAritmetica.agregarHijo(value);
            NodoAritmetica.agregarHijo(iniPos);
            NodoAritmetica.agregarHijo(endPos);
            return NodoAritmetica;
        }

        public C3D(environment: Environment, Temp: Temporal): RetornoC3D {
            return
        }
}