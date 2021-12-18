import { Instruccion } from "../Abstract/Instruccion";
import { Expression } from "../Abstract/Expresion";
import { Environment } from "../Simbolo/Entorno";
import { Nodo_Arbol } from "../Graficar_Arbol/nodo_arbol";
import { Type } from '../Abstract/Retorno';

export class Print extends Instruccion {

    constructor(private value: Expression, line: number, column: number, code: string) {
        super(line, column, code);
    }

    public execute(environment: Environment) {
        const value = this.value.execute(environment);
        let terminal = localStorage.getItem("consola");
        let cadenaSinFormato = "";
        let cadenaFinal;


        if (value.type == Type.NUMBER || value.type == Type.STRING || value.type == Type.BOOLEAN) {


            cadenaSinFormato = value["value"].toString();

            if (cadenaSinFormato.includes("\\n")) {
                cadenaSinFormato = cadenaSinFormato.replace(/\\n/g, "\n")
            }
            if (cadenaSinFormato.includes("\\t")) {
                cadenaSinFormato = cadenaSinFormato.replace(/\\t/g, "\t");
            }
            if (cadenaSinFormato.includes("\\r")) {
                cadenaSinFormato = cadenaSinFormato.replace(/\\r/g, "\r");
            }


        } else {

            cadenaSinFormato = "[";

            for (let i of value.value) {
                cadenaSinFormato = cadenaSinFormato + i + ",";
            }

            cadenaSinFormato = cadenaSinFormato + "]";

        }



        cadenaFinal = cadenaSinFormato;
        terminal = terminal + cadenaFinal + "\n";
        localStorage.setItem("consola", terminal);

    }

   

    public graficar() {

        let NodoImprimir = new Nodo_Arbol("IMPRIMIR");
        let Ex = new Nodo_Arbol("EXPRESION");

        Ex.agregarHijo(this.value.graficar());

        NodoImprimir.agregarHijo(Ex);

        return NodoImprimir;



    }

}  