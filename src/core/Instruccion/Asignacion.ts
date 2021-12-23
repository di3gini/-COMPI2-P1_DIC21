import { Instruccion } from "../Abstract/Instruccion";
import { Environment } from "../Simbolo/Entorno";
import { Retorno } from "../Abstract/Objeto";
import { Expression } from "../Abstract/Expresion";
import { Nodo_Arbol} from "../Graficar_Arbol/nodo_arbol";
import { Temporal } from '../codigo3d/Temporal';

export class Asignacion extends Instruccion {

    constructor(private id: string, private expresion: Expression, line: number, column: number) {
        super(line, column);
    }

    public execute(environment: Environment) {
        const expresion = environment.getVar(this.id);
        if (expresion == null) {
            let Errores = localStorage.getItem("ErroresEjecucion");
            Errores = Errores + "   " + "Error Semantico: La variable ' " + this.id +" 'no existe. En la linea: " + this.line + " y columna: " + this.column + "\n";
            localStorage.setItem("ErroresEjecucion",Errores);
        } else {
            const val = this.expresion.execute(environment);
            if (val.type == expresion.type) {
                environment.setVar(this.id, val.value, val.type,this.line,this.column);
            } else {
                let Errores = localStorage.getItem("ErroresEjecucion");
                Errores= Errores +"   "+"Error Semantico: No se puede asignar un tipo distinto al declarado. En la linea: "+this.line+" y columna: "+this.column +"\n";
                localStorage.setItem("ErroresEjecucion",Errores);
            }
        }
    }


    public graficar(){

        let asignacion = new Nodo_Arbol("ASGINACION");
        let id = new Nodo_Arbol(this.id);
        let igual = new Nodo_Arbol("=")
        let ex = new Nodo_Arbol("EXPRESION");
        ex.agregarHijo(this.expresion.graficar());


        asignacion.agregarHijo(id);
        asignacion.agregarHijo(igual);
        asignacion.agregarHijo(ex);

        return asignacion;
        
    }

    public C3D(env:Environment,Temp:Temporal){
        const value = env.getVarC3D(this.id);


        if (value == null) {
            // throw new Error("La variable no existe");
             let Errores = localStorage.getItem("ErroresEjecucion");
             Errores= Errores +"   "+"Error Semantico: La variable no existe. En la linea: "+this.line+" y columna: "+this.column +"\n";
             localStorage.setItem("ErroresEjecucion",Errores);
         } else {
             const val = this.expresion.C3D(env,Temp);
             console.log(value);
             console.log(val);

             if(value.entorno){

                Temp.EscribirC3D(`Heap[(int)${value.temporal}]= ${val.CD3};\n`, env.TipoEntorno());
                
             }
        }
    }
}