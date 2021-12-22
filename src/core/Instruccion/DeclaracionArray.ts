import { Instruccion } from "../Abstract/Instruccion";
import { Environment } from "../Simbolo/Entorno";
import { Expression } from "../Abstract/Expresion";
import { Type } from "../Abstract/Objeto"
import { Nodo_Arbol } from "../Graficar_Arbol/nodo_arbol";
import { Temporal } from "../codigo3d/Temporal";



export class DeclaracionArray extends Instruccion {

    private id: string;
    private Dim: number;
    private value = {};



    constructor(id: string, private tipo: Type, private valores: Expression[], line: number, column: number) {
        super(line, column);
        this.id = id;
    }

    public execute(environment: Environment) {

        
            if (this.tipo == Type.NUMBER) {
                //number
                let arreglo: number[] = [];
                
                for (let valor of this.valores) {
                    let a = valor.execute(environment);
                    arreglo.push(a.value);
                    //console.log(a);
                }

                environment.setVar(this.id, arreglo, 40, this.line, this.column);

            } else if (this.tipo == Type.STRING) {
                //string
                let arreglo: string[] = [];
                
                for (let valor of this.valores) {
                    let a = valor.execute(environment);
                    arreglo.push(a.value);
                }
                environment.setVar(this.id, arreglo, 41, this.line, this.column);

            } else if (this.tipo == Type.BOOLEAN) {
                //boolean
                let arreglo: boolean[] = [];
                console.log("boolean array");
                for (let valor of this.valores) {
                    let a = valor.execute(environment);
                    arreglo.push(a.value);
                    //console.log(a);
                }

                environment.setVar(this.id, arreglo, 42, this.line, this.column);
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

    public C3D(environment: Environment, Temp: Temporal) {
        
    }

}