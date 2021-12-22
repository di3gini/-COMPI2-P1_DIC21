import { Instruccion } from "../Abstract/Instruccion";
import { Expression } from "../Abstract/Expresion";
import { Environment } from "../Simbolo/Entorno";
import { Type } from "../Abstract/Objeto";
import { Nodo_Arbol } from '../Graficar_Arbol/nodo_arbol';
import { Temporal } from "../codigo3d/Temporal";




export class If extends Instruccion {

    constructor(private condition: Expression, private InstruccionesIf: Instruccion, private InstruccionesElse: Instruccion | null,
        line: number, column: number) {
        super(line, column);
    }

    public execute(env: Environment) {
          //const entornoHijo = new Environment(env);
        let cond = this.condition.execute(env);
        if (cond.type != Type.BOOLEAN) {
            let Errores = localStorage.getItem("ErroresEjecucion");
            Errores = Errores + "   " + "Error Semantico: La condicion no es boolean. En la linea: " + this.line + " y columna: " + this.column + "\n";
            localStorage.setItem("ErroresEjecucion", Errores);
        } else {
            if (cond.value == true) {
                return this.InstruccionesIf.execute(env);
            }
            else {
                console.log("entro a else");
                return this.InstruccionesElse.execute(env);
            }
        }
    }


    public graficar() {

        let iff = new Nodo_Arbol("IF");

        let cif = new Nodo_Arbol("Cuerpo_IF");
        cif.agregarHijo(this.InstruccionesIf.graficar());

        let els = new Nodo_Arbol("ELSE");
        els.agregarHijo(this.InstruccionesElse.graficar());

        iff.agregarHijo(cif);
        iff.agregarHijo(els);

        return iff;


    }

    public C3D(environment: Environment, Temp: Temporal) {
        
    }

}


