import { Instruccion } from "../Abstract/Instruccion";
import { Environment } from "../Simbolo/Entorno";
import { Expression } from "../Abstract/Expresion";
import { Type } from "../Abstract/Objeto"
import { Nodo_Arbol} from "../Graficar_Arbol/nodo_arbol";
import { Temporal } from "../codigo3d/Temporal";

export class Declaration extends Instruccion {

    private id: string;
    private value: Expression;

    constructor(id: string, value: Expression, line: number, column: number, private tipo?: Type) {
        super(line, column);
        this.id = id;
        this.value = value;
    }

    public execute(environment: Environment) {
        const val = this.value.execute(environment);

        if (this.tipo == val.type) {
            environment.setEntornoActual(this.id, val.value, val.type,this.line,this.column);
        }else{

            let Errores = localStorage.getItem("ErroresEjecucion");
            Errores= Errores +"   "+"Error Semantico: No coinciden los tipos. En la linea: "+this.line+" y columna: "+this.column +"\n";
            localStorage.setItem("ErroresEjecucion",Errores);
        }
    }

    public graficar(){

            let NodoDeclaracion = new Nodo_Arbol("DECLARACION");
            let idv = new Nodo_Arbol (this.id);
            let equ = new Nodo_Arbol ("=");
            let Ex = new Nodo_Arbol("EXPRESION");
            Ex.agregarHijo(this.value.graficar());


            NodoDeclaracion.agregarHijo(idv);
            NodoDeclaracion.agregarHijo(equ);
            NodoDeclaracion.agregarHijo(Ex);

            return NodoDeclaracion;


    }

    public C3D(environment: Environment, Temp: Temporal) {
        
    }

}