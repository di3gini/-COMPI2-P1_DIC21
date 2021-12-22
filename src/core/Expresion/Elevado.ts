import { Expression } from "../Abstract/Expresion";
import { Retorno, Type, RetornoC3D } from "../Abstract/Objeto";
import { Environment } from "../Simbolo/Entorno";
import { Nodo_Arbol } from "../Graficar_Arbol/nodo_arbol"
import { Temporal } from '../codigo3d/Temporal';

export class Elevado extends Expression {

    constructor(private left: Expression, private right: Expression, line: number, column: number) {
        super(line, column);
    }

    public execute(environment: Environment): Retorno {

        const leftValue = this.left.execute(environment);
        const rightValue = this.right.execute(environment);
        let cadenaSalida = "";

        if (leftValue.type == Type.STRING && rightValue.type == Type.NUMBER) {
            for (let i = 0; i < rightValue.value; i++) {
                cadenaSalida = cadenaSalida + leftValue.value;
            }
            return { value: cadenaSalida, type: Type.STRING };
        }

    }
    graficar(): Nodo_Arbol {
        const NodoAritmetica = new Nodo_Arbol("REPETICION");

        const Leftvalue = new Nodo_Arbol("EXPRESION");
        const Rightvalue = new Nodo_Arbol("EXPRESION");

        Leftvalue.agregarHijo(this.left.graficar());
        Rightvalue.agregarHijo(this.right.graficar());
        NodoAritmetica.agregarHijo(Leftvalue);
        NodoAritmetica.agregarHijo(Rightvalue);
        return NodoAritmetica;
    }


    public C3D(env:Environment,Temp:Temporal): RetornoC3D{
        return
    }

}