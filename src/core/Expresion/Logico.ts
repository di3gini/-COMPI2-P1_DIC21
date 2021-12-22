import { Expression } from "../Abstract/Expresion";
import { Retorno, Type } from "../Abstract/Objeto";
import { Environment } from "../Simbolo/Entorno";
import { Nodo_Arbol } from "../Graficar_Arbol/nodo_arbol"

export enum LogicalOption {
    AND,
    OR,
    NOT
}

export class Logico extends Expression {

    constructor(private left: Expression, private right: Expression, private type: LogicalOption, line: number, column: number) {
        super(line, column);
    }

    public execute(environment: Environment): Retorno {
        const leftValue = this.left.execute(environment);
        const rightValue = this.right.execute(environment);

        
        if (this.type == LogicalOption.AND) {
            const result = leftValue.value && rightValue.value;
            return { value: result, type: Type.BOOLEAN };
        }
        else if (this.type == LogicalOption.OR) {
            const result = leftValue.value || rightValue.value;
            return { value: result, type: Type.BOOLEAN };
        } else if (this.type == LogicalOption.NOT) {
            const result = !rightValue.value;
            return { value: result, type: Type.BOOLEAN };
        }
    
        else {
            let Errores = localStorage.getItem("ErroresEjecucion");
            Errores = Errores + "   " + "Error Semantico:" + " No se puede operar tipos: " + leftValue.type + ' _ ' + rightValue.type + ". En la linea: " + this.line + " y columna: " + this.column + "\n";
            localStorage.setItem("ErroresEjecucion", Errores);
        }

        
    }

    public graficar() {

        const Log = new Nodo_Arbol("LOGICO");



        if (this.type == LogicalOption.NOT) {
            const right = this.right.graficar();
            const logi = new Nodo_Arbol(this.Tipo(this.type));
            Log.agregarHijo(logi);
            Log.agregarHijo(right);
        } else {
            const left = this.left.graficar();
            const right = this.right.graficar();
            const logi = new Nodo_Arbol(this.Tipo(this.type));
            Log.agregarHijo(left);
            Log.agregarHijo(logi);
            Log.agregarHijo(right);
        }

        return Log;
    }

    public Tipo(tipo: LogicalOption): string {
        if (tipo == LogicalOption.AND) {
            return "&&";
        } else if (tipo == LogicalOption.NOT) {
            return "!";
        } else if (tipo == LogicalOption.OR) {
            return "||";
        }
    }

}