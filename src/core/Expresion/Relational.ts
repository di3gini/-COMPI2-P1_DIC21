import { Expression } from "../Abstract/Expresion";
import { Retorno, Type } from "../Abstract/Objeto";
import { Environment } from "../Simbolo/Entorno";
import { Nodo_Arbol } from "../Graficar_Arbol/nodo_arbol"




export enum RelationalOption {
    EQUAL,//==
    NOTEQUAL, //!=
    LESS,//<
    LESSOREQUAL,//<=
    GREATER,//>
    GREATEROREQUAL//>=
}

export class Relational extends Expression {

    constructor(private left: Expression, private right: Expression, private type: RelationalOption, line: number, column: number) {
        super(line, column);
    }

    public execute(environment: Environment): Retorno {
        const leftValue = this.left.execute(environment);
        const rightValue = this.right.execute(environment);

        if ((leftValue.type == Type.NUMBER || leftValue.type == Type.DECIMAL) && 
            (rightValue.type == Type.NUMBER || rightValue.type == Type.DECIMAL)) {

            if (this.type == RelationalOption.EQUAL) {
                const result = leftValue.value == rightValue.value;
                return { value: result, type: Type.BOOLEAN };
            }
            else if (this.type == RelationalOption.NOTEQUAL) {
                const result = leftValue.value != rightValue.value;
                return { value: result, type: Type.BOOLEAN };
            } else if (this.type == RelationalOption.LESS) {
                const result = leftValue.value < rightValue.value;
                return { value: result, type: Type.BOOLEAN };
            } else if (this.type == RelationalOption.LESSOREQUAL) {
                const result = leftValue.value <= rightValue.value;
                return { value: result, type: Type.BOOLEAN };
            } else if (this.type == RelationalOption.GREATER) {
                const result = leftValue.value > rightValue.value;
                return { value: result, type: Type.BOOLEAN };
            } else if (this.type == RelationalOption.GREATEROREQUAL) {
                const result = leftValue.value >= rightValue.value;
                return { value: result, type: Type.BOOLEAN };
            }
            return { value: 0, type: Type.NUMBER }
        }
        else {
            let Errores = localStorage.getItem("ErroresEjecucion");
            Errores = Errores + "   " + "Error Semantico:" + " No se puede operar: " + leftValue.type + ' _ ' + rightValue.type + ". En la linea: " + this.line + " y columna: " + this.column + "\n";
            localStorage.setItem("ErroresEjecucion", Errores);
        }
    }


    public graficar() {

        const rela = new Nodo_Arbol("RELACIONAL");
        const lef = new Nodo_Arbol(this.left.graficar());
        const op = new Nodo_Arbol(this.Tipo(this.type));
        const rig = new Nodo_Arbol(this.right.graficar());
        rela.agregarHijo(lef);
        rela.agregarHijo(op);
        rela.agregarHijo(rig);

        return rela;


    }


    public Tipo(tipo: RelationalOption): string {

        if (tipo == RelationalOption.EQUAL) {
            return "==";
        } else if (tipo == RelationalOption.GREATER) {
            return ">";
        } else if (tipo == RelationalOption.GREATEROREQUAL) {
            return ">="
        } else if (tipo == RelationalOption.LESS) {
            return "<";
        } else if (tipo == RelationalOption.LESSOREQUAL) {
            return "<=";
        } else if (tipo == RelationalOption.NOTEQUAL) {
            return "!=";
        }
    }
}