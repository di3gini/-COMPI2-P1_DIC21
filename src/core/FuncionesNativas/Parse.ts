import { Expression } from "../Abstract/Expresion";
import { Retorno, Type } from "../Abstract/Objeto";
import { Environment } from "../Simbolo/Entorno";
import { Nodo_Arbol } from "../Graficar_Arbol/nodo_arbol"

export class Parse extends Expression {
    
        constructor(private tipo: Type, private value: Expression, private linea: number, private columna: number) {
            super(linea, columna);
        }

        public execute(environment: Environment): Retorno {

            const val = this.value.execute(environment);
            console.log("Ejecutando Parse: Tipo: " + this.tipo + " Valor: " + val.value);
            if (val.type == Type.STRING) {
                switch (this.tipo) {
                    case Type.NUMBER:
                        return { value: parseInt(val.value), type: Type.NUMBER };
                    case Type.DECIMAL:
                        return { value: parseFloat(val.value), type: Type.DECIMAL };
                    case Type.BOOLEAN:
                        return { value: Boolean(val.value), type: Type.BOOLEAN };
                    default:
                        let Errores = localStorage.getItem("ErroresEjecucion");
                        Errores = Errores + "   " + "Error Semantico:" + " No se puede operar: " + this.tipo + ". En la linea: " + this.line + " y columna: " + this.column + "\n";
                        localStorage.setItem("ErroresEjecucion", Errores);
                        break;
                }
            }else {
                let Errores = localStorage.getItem("ErroresEjecucion");
                Errores = Errores + "   " + "Error Semantico:" + " No se puede operar: " + val.type + ". En la linea: " + this.line + " y columna: " + this.column + "\n";
                localStorage.setItem("ErroresEjecucion", Errores);
            }          
        }
    
        graficar(): Nodo_Arbol {
            const NodoAritmetica = new Nodo_Arbol("PARSE");
            
            const value = new Nodo_Arbol("EXPRESION");
    
            value.agregarHijo(this.value.graficar());
            NodoAritmetica.agregarHijo(value);
            return NodoAritmetica;
        }
}