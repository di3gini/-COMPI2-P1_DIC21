import { Instruccion } from "../Abstract/Instruccion";
import { Environment } from "../Simbolo/Entorno";
import { Expression } from "../Abstract/Expresion";
import { Nodo_Arbol } from "../Graficar_Arbol/nodo_arbol"
import { Type } from "../Abstract/Objeto";
import { Temporal } from '../codigo3d/Temporal';



export enum AumentoOption {
    PLUSPLUS,
    LESSLESS
}



export class Aumento extends Instruccion {

    constructor(private id: string, private type: AumentoOption, line: number, column: number) {
        super(line, column);
    }

    public execute(environment: Environment) {


        const value = environment.getVar(this.id);
        if (value == null) {
            let Errores = localStorage.getItem("ErroresEjecucion");
            Errores = Errores + "   " + "Error Semantico:" + " No se puede operar ya que " + this.id + " no existe. En la linea: " + this.line + " y columna: " + this.column + "\n";
            localStorage.setItem("ErroresEjecucion", Errores);
        } else {
            if (value.type == Type.NUMBER || value.type == Type.DECIMAL) {
                if (this.type == AumentoOption.PLUSPLUS) {
                    environment.setVar(this.id, value.valor + 1, value.type, this.line, this.column);
                    return { value: Number(value.valor + 1), type: value.type }
                } else if (this.type == AumentoOption.LESSLESS) {
    
                    environment.setVar(this.id, value.valor - 1, value.type, this.line, this.column);
                    return { value: Number(value.valor - 1), type: value.type }
                }
            } else {
                let Errores = localStorage.getItem("ErroresEjecucion");
                Errores = Errores + "   " + "Error Semantico:" + " No se puede operar: El tipo de la variable" + this.id + " no es de tipo int o decimal. En la linea: " + this.line + " y columna: " + this.column + "\n";
                localStorage.setItem("ErroresEjecucion", Errores);
            }
    
            
            
        }
    }


    public graficar() {

        const Aumento = new Nodo_Arbol("AUMENTO");
        const id = new Nodo_Arbol(this.id);
        const aumento = new Nodo_Arbol(this.Tipo(this.type));

        Aumento.agregarHijo(id);
        Aumento.agregarHijo(aumento);

        return Aumento;

    }


    public Tipo(type: AumentoOption) {

        if (type == 0) {

            return "++"
        } else if (type == 1) {

            return "--"
        }
    }

    public C3D(env:Environment,Temp:Temporal){}

}