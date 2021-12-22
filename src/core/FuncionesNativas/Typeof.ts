import { Expression } from "../Abstract/Expresion";
import { Retorno, Type } from "../Abstract/Objeto";
import { Environment } from "../Simbolo/Entorno";
import { Nodo_Arbol } from "../Graficar_Arbol/nodo_arbol"

export class TypeOf extends Expression {
    
        constructor( private value: Expression, private linea: number, private columna: number) {
            super(linea, columna);
        }

        public execute(environment: Environment): Retorno {

            
            try{

                const val = this.value.execute(environment);
                console.log("valor de val: ",val, "typeof val: ", val.type);
                if (val.type == Type.STRING) {
                    return { value: "String", type: Type.STRING };
                } else if (val.type == Type.NUMBER) {
                    return { value: "int", type: Type.STRING };
                } else if (val.type == Type.BOOLEAN) {
                    return { value: "boolean", type: Type.STRING };
                } else if (val.type == Type.DECIMAL) {
                    return { value: "double", type: Type.STRING };
                } else if (val.type == Type.NULL) {
                    return { value: "null", type: Type.STRING };
                } else if (val.type == Type.ARRAY) {
                    return { value: "Array", type: Type.STRING };
                }
            }
            catch(e){
                let Errores = localStorage.getItem("ErroresEjecucion");
                Errores = Errores + "   " + "Error Semantico:" + " No se puede operar. En la linea: " + this.line + " y columna: " + this.column + "\n";
                localStorage.setItem("ErroresEjecucion", Errores);
            }          
        }
    
        graficar(): Nodo_Arbol {
            const NodoAritmetica = new Nodo_Arbol("LOWERCASE");
            
            const value = new Nodo_Arbol("EXPRESION");
    
            value.agregarHijo(this.value.graficar());
            NodoAritmetica.agregarHijo(value);
            return NodoAritmetica;
        }
}