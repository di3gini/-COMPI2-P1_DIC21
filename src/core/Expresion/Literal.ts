import { Expression } from "../Abstract/Expresion";
import { Retorno, RetornoC3D, Type } from "../Abstract/Objeto";
import { Temporal } from "../codigo3d/Temporal";
import { Nodo_Arbol } from "../Graficar_Arbol/nodo_arbol"
import { Environment } from '../Simbolo/Entorno';

export class Literal extends Expression {

    constructor(private value: any, line: number, column: number, private type: number) {
        super(line, column);
    }

    public execute(): Retorno {

        if (this.type == 0) {
            return { value: Number(this.value), type: Type.NUMBER };
        }
        else if (this.type == 1) {
            return { value: this.value, type: Type.STRING };
        } else if (this.type == 2) {
            return { value: Boolean(JSON.parse(this.value)), type: Type.BOOLEAN };
        } else if (this.type == 3) {
            return { value: null, type: Type.NULL };
        } else if (this.type == 9) {
            return { value: Number(this.value), type: Type.DECIMAL };
        }
    }

    public graficar() {

        let lit = new Nodo_Arbol("LITERAL");
        let valor = new Nodo_Arbol(this.value);
        lit.agregarHijo(valor);
        return lit;
    }


    public C3D(environment: Environment, Temp: Temporal): RetornoC3D {
        return
    }
}