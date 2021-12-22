import { Expression } from "./Expresion";
import { Environment } from "../Simbolo/Entorno";
import { Nodo_Arbol } from "../Graficar_Arbol/nodo_arbol"
import { Retorno, Type } from "../Abstract/Objeto";

export class AccesoArray extends Expression {

    public idd: string = "";
    constructor(private id: string, private posicion: Expression, line: number, column: number) {
        super(line, column);
        console.log("entre a acceso");
        console.log(this.id,this.posicion);
    }

    public execute(environment: Environment): Retorno {
        const value = environment.getVar(this.id);
        this.idd = value.id;


        if (value == null) {
            let Errores = localStorage.getItem("ErroresEjecucion");
            Errores = Errores + "   " + "Error Semantico: La variable ' " + this.id +" 'no existe. En la linea: " + this.line + " y columna: " + this.column + "\n";
            localStorage.setItem("ErroresEjecucion", Errores);
        }

        let arreglo = value.valor;
        let pos = this.posicion.execute(environment);


        let tiporetorno;
        tiporetorno = value.type;


        return { value: arreglo[pos.value], type:tiporetorno };
    }

    public graficar() {
        const Acceso = new Nodo_Arbol("ACCESO");
        const id = new Nodo_Arbol(this.id);
        Acceso.agregarHijo(id);
        return Acceso;
    }


   
}