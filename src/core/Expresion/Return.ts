import { Instruccion } from "../Abstract/Instruccion";
import { Expression } from "../Abstract/Expresion";
import { Environment } from "../Simbolo/Entorno";
import { Nodo_Arbol } from '../Graficar_Arbol/nodo_arbol';
import { Temporal } from "../codigo3d/Temporal";

export class Return extends Instruccion {

    constructor(line: number, column: number, private valor: Expression | null) {
        super(line, column);
    }

    public execute(environment: Environment) {

        if (this.valor != null) {
            let valExp = this.valor.execute(environment);
            return { line: this.line, column: this.column, retorno: 'ReturnExp', value: valExp.value, tipo: valExp.type };
        } else {
            return { line: this.line, column: this.column, retorno: 'ReturnOnly', value: null, tipo: 8 };
        }

    }
    public graficar() {
        let nodo = new Nodo_Arbol("RETURN");
        return nodo;

    }

    public C3D(environment: Environment, Temp: Temporal) {
        
    }
}