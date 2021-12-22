import { Expression } from "./Expresion";
import { Environment } from "../Simbolo/Entorno";
import { Retorno, RetornoC3D, Type } from "../Abstract/Objeto";
import { Nodo_Arbol} from "../Graficar_Arbol/nodo_arbol"
import { Temporal } from "../codigo3d/Temporal";


export class Access extends Expression{

    constructor(private id: string, line : number, column: number){
        super(line, column);
    }

    public execute(environment: Environment): Retorno {
        const value = environment.getVar(this.id);
        if(value == null){
            let Errores = localStorage.getItem("ErroresEjecucion");
            Errores = Errores + "   " + "Error Semantico: La variable ' " + this.id +" 'no existe. En la linea: " + this.line + " y columna: " + this.column + "\n";
            localStorage.setItem("ErroresEjecucion", Errores);
        }
         

        return {value : value.valor, type : value.type};
    }

    public graficar(){
        const Acceso = new Nodo_Arbol("ACCESO");
        const id = new Nodo_Arbol(this.id);
        Acceso.agregarHijo(id);
        return Acceso;
    }

   public C3D(environment: Environment, Temp: Temporal): RetornoC3D {
       return
   }
}