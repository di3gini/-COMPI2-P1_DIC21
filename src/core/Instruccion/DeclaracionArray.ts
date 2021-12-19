import { Instruccion } from "../Abstract/Instruccion";
import { Environment } from "../Simbolo/Entorno";
import { Expression } from "../Abstract/Expresion";
import { Type } from "../Abstract/Objeto"
import { Nodo_Arbol } from "../Graficar_Arbol/nodo_arbol";



export class DeclaracionArray extends Instruccion {

    private id: string;
    private Dim: number;
    private value = {};



    constructor(id: string, private tipo: Type, Dimension: [], private valores: Expression[], line: number, column: number) {
        super(line, column);
        this.id = id;
        this.Dim = Dimension.length;


    }

    public execute(environment: Environment) {


        if (this.Dim == 1) {
            if (this.tipo == Type.NUMBER) {
                //number
                let arreglo: number[] = [];

                for (let valor of this.valores) {
                    let a = valor.execute(environment);
                    arreglo.push(a.value);
                    //console.log(a);
                }

                environment.setEntornoActual(this.id, arreglo, 40, this.line, this.column);

            } else if (this.tipo == Type.STRING) {
                //string
                let arreglo: string[] = [];

                for (let valor of this.valores) {
                    let a = valor.execute(environment);
                    arreglo.push(a.value);
                }

                environment.setEntornoActual(this.id, arreglo, 41, this.line, this.column);

            } else if (this.tipo == Type.BOOLEAN) {
                //boolean
                let arreglo: boolean[] = [];

                for (let valor of this.valores) {
                    let a = valor.execute(environment);
                    arreglo.push(a.value);
                    //console.log(a);
                }

                environment.setEntornoActual(this.id, arreglo, 42, this.line, this.column);
            }


        } else if (this.Dim == 2) {


        } else if (this.Dim == 3) {


        }

    }

    public graficar() {

        let NodoDeclaracion = new Nodo_Arbol("DECLARACION");
        let idv = new Nodo_Arbol(this.id);
        let equ = new Nodo_Arbol("=");
        let Ex = new Nodo_Arbol("EXPRESION");
        // Ex.agregarHijo(this.value.graficar());


        NodoDeclaracion.agregarHijo(idv);
        NodoDeclaracion.agregarHijo(equ);
        NodoDeclaracion.agregarHijo(Ex);

        return NodoDeclaracion;


    }


}