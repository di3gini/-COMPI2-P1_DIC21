import { Expression } from "../Abstract/Expresion";
import { Retorno, Type } from "../Abstract/Objeto";
import { Environment } from "../Simbolo/Entorno";
import { Nodo_Arbol } from "../Graficar_Arbol/nodo_arbol"


export enum ArithmeticOption {
    PLUS,
    MINUS,
    TIMES,
    DIV,
    POT,
    UNARIO
}

export class Arithmetic extends Expression {

    constructor(private left: Expression, private right: Expression, private type: ArithmeticOption, line: number, column: number) {
        super(line, column);
    }

    public execute(environment: Environment): Retorno {

        const leftValue = this.left.execute(environment);
        const rightValue = this.right.execute(environment);
        let result: Retorno;
       
        //SUMA
        if (this.type == ArithmeticOption.PLUS) {

            if (leftValue.type == Type.NUMBER && rightValue.type == Type.NUMBER) {
                result = { value: (leftValue.value + rightValue.value), type: Type.NUMBER };
            }
            else if ((leftValue.type == Type.DECIMAL && rightValue.type == Type.DECIMAL) ||
                (leftValue.type == Type.DECIMAL && rightValue.type == Type.NUMBER)|| 
                (leftValue.type == Type.NUMBER && rightValue.type == Type.DECIMAL)) {
                    result = { value: (leftValue.value + rightValue.value), type: Type.NUMBER };
            }
            else {
                let Errores = localStorage.getItem("ErroresEjecucion");
                Errores = Errores + "   " + "Error Semantico:" + " No se puede operar: " + leftValue.type + ' _ ' + rightValue.type + ". En la linea: " + this.line + " y columna: " + this.column + "\n";
                localStorage.setItem("ErroresEjecucion", Errores);
            }

        }


        else if (this.type == ArithmeticOption.MINUS) {
            if (leftValue.type == Type.NUMBER && rightValue.type == Type.NUMBER) {
                result = { value: (leftValue.value - rightValue.value), type: Type.NUMBER };
            }
            else if ((leftValue.type == Type.DECIMAL && rightValue.type == Type.DECIMAL) ||
                (leftValue.type == Type.DECIMAL && rightValue.type == Type.NUMBER)|| 
                (leftValue.type == Type.NUMBER && rightValue.type == Type.DECIMAL)) {
                    result = { value: (leftValue.value - rightValue.value), type: Type.DECIMAL };
            }
            else {
                let Errores = localStorage.getItem("ErroresEjecucion");
                Errores = Errores + "   " + "Error Semantico:" + " No se puede operar: " + leftValue.type + ' _ ' + rightValue.type + ". En la linea: " + this.line + " y columna: " + this.column + "\n";
                localStorage.setItem("ErroresEjecucion", Errores);
            }
        }



        else if (this.type == ArithmeticOption.TIMES) {
            if (leftValue.type == Type.NUMBER && rightValue.type == Type.NUMBER) {
                result = { value: (leftValue.value * rightValue.value), type: Type.NUMBER };
            }
            else if ((leftValue.type == Type.DECIMAL && rightValue.type == Type.DECIMAL) ||
                (leftValue.type == Type.DECIMAL && rightValue.type == Type.NUMBER)|| 
                (leftValue.type == Type.NUMBER && rightValue.type == Type.DECIMAL)) {
                    result = { value: (leftValue.value * rightValue.value), type: Type.DECIMAL };
            }
            else {
                let Errores = localStorage.getItem("ErroresEjecucion");
                Errores = Errores + "   " + "Error Semantico:" + " No se puede operar: " + leftValue.type + ' _ ' + rightValue.type + ". En la linea: " + this.line + " y columna: " + this.column + "\n";
                localStorage.setItem("ErroresEjecucion", Errores);
            }
        }


        else if (this.type == ArithmeticOption.POT) {
            if (leftValue.type == Type.NUMBER && rightValue.type == Type.NUMBER) {
                result = { value: (Math.pow(leftValue.value, rightValue.value)), type: Type.NUMBER };
            }
            else if ((leftValue.type == Type.DECIMAL && rightValue.type == Type.DECIMAL) ||
                (leftValue.type == Type.DECIMAL && rightValue.type == Type.NUMBER)|| 
                (leftValue.type == Type.NUMBER && rightValue.type == Type.DECIMAL)) {
                    result = { value: (Math.pow(leftValue.value, rightValue.value)), type: Type.DECIMAL };
            }
            else {
                let Errores = localStorage.getItem("ErroresEjecucion");
                Errores = Errores + "   " + "Error Semantico:" + " No se puede operar: " + leftValue.type + ' _ ' + rightValue.type + ". En la linea: " + this.line + " y columna: " + this.column + "\n";
                localStorage.setItem("ErroresEjecucion", Errores);
            }
        }

        else if (this.type == ArithmeticOption.UNARIO) {

            if (rightValue.type == Type.NUMBER) {
                result = { value: (leftValue.value * -1), type: Type.NUMBER };
            }
            else if (rightValue.type == Type.DECIMAL) {
                result = { value: (leftValue.value * -1), type: Type.DECIMAL };
            }
            else {
                let Errores = localStorage.getItem("ErroresEjecucion");
                Errores = Errores + "   " + "Error Semantico:" + " No se puede operar: " + leftValue.type + ' _ ' + rightValue.type + ". En la linea: " + this.line + " y columna: " + this.column + "\n";
                localStorage.setItem("ErroresEjecucion", Errores);
            }
        }
        else if (this.type == ArithmeticOption.DIV) {
            if (rightValue.value == 0 || rightValue.value == 0.0) {

                let Errores = localStorage.getItem("ErroresEjecucion");
                Errores = Errores + "   " + "Error Semantico:" + " No se puede dividir entre 0" + ". En la linea: " + this.line + " y columna: " + this.column + "\n";
                localStorage.setItem("ErroresEjecucion", Errores);
            }
            else {
                if (leftValue.type == Type.NUMBER && rightValue.type == Type.NUMBER) {
                    result = { value: (leftValue.value / rightValue.value), type: Type.NUMBER };
                }
                else if ((leftValue.type == Type.DECIMAL && rightValue.type == Type.DECIMAL) ||
                    (leftValue.type == Type.DECIMAL && rightValue.type == Type.NUMBER)|| 
                    (leftValue.type == Type.NUMBER && rightValue.type == Type.DECIMAL)) {
                        result = { value: (leftValue.value / rightValue.value), type: Type.DECIMAL };
                }
                else {
                    let Errores = localStorage.getItem("ErroresEjecucion");
                    Errores = Errores + "   " + "Error Semantico:" + " No se puede operar: " + leftValue.type + ' _ ' + rightValue.type + ". En la linea: " + this.line + " y columna: " + this.column + "\n";
                    localStorage.setItem("ErroresEjecucion", Errores);
                }
            }
        }
        return result;
    }


    public graficar() {
        const NodoAritmetica = new Nodo_Arbol("ARITMETICA");

        const Leftvalue = new Nodo_Arbol("EXPRESION");
        const igual = new Nodo_Arbol(this.Tipo(this.type));
        const Rightvalue = new Nodo_Arbol("EXPRESION");

        Leftvalue.agregarHijo(this.left.graficar());
        Rightvalue.agregarHijo(this.right.graficar());
        NodoAritmetica.agregarHijo(Leftvalue);
        NodoAritmetica.agregarHijo(igual);
        NodoAritmetica.agregarHijo(Rightvalue);
        return NodoAritmetica;


    }


    public Tipo(Tipo: ArithmeticOption): string {

        if (Tipo == 0) {
            return "+";
        } else if (Tipo == 1) {
            return "-";
        } else if (Tipo == 2) {
            return "*";
        } else if (Tipo == 3) {
            return "/"
        } else if (Tipo == 4) {
            return "**"
        } else if (Tipo == 5) {
            return "-"
        }

    }




}

