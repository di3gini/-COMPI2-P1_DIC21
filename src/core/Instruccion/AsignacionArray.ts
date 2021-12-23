import { Instruccion } from "../Abstract/Instruccion";
import { Environment } from "../Simbolo/Entorno";
import { Retorno, Type } from "../Abstract/Objeto";
import { Expression } from "../Abstract/Expresion";
import { Nodo_Arbol } from "../Graficar_Arbol/nodo_arbol";
import { Temporal } from '../codigo3d/Temporal';
export class AsignacionArray extends Instruccion {
    public idd: string = "";
    constructor(private id: string, private posicion: Expression, private valor: Expression, line: number, column: number) {
        super(line, column);
    }

    public execute(environment: Environment) {
        const value = environment.getVar(this.id);
        this.idd = value.id;
        //this.idd =
        if (value == null) {
            let Errores = localStorage.getItem("ErroresEjecucion");
            Errores = Errores + "   " + "Error Semantico: La variable no existe. En la linea: " + this.line + " y columna: " + this.column + "\n";
            localStorage.setItem("ErroresEjecucion", Errores);
        } else {
            
            let arreglo = value.valor;
            let arreglotipo = value.type;
            let valoragregar = this.valor.execute(environment);
            if (this.posicion != null) {
                let pos = this.posicion.execute(environment);
                if (((value.type == Type.NUMBER || value.type == Type.DECIMAL)) && (typeof (arreglo[pos.value]) == "number")) {

                    arreglo[pos.value] = valoragregar.value;


                } else if (value.type == Type.STRING && typeof (arreglo[pos.value]) == "string") {
                    arreglo[pos.value] = valoragregar.value;
                } else if (value.type == Type.BOOLEAN && typeof (arreglo[pos.value]) == "boolean") {
                    arreglo[pos.value] = valoragregar.value;
                } else {
                    let Errores = localStorage.getItem("ErroresEjecucion");
                    arreglo[pos.value] = valoragregar.value;
                    Errores = Errores + "   " + "Error Semantico: No corresponde el tipo en el push. En la linea: " + this.line + " y columna: " + this.column + "\n";
                    localStorage.setItem("ErroresEjecucion", Errores);
                }
            } else {
                arreglo = [];
            }

        }
    }


    public graficar() {

        const Aumento = new Nodo_Arbol(this.idd);
        const id = new Nodo_Arbol("PUSH");


        Aumento.agregarHijo(id);
        // Aumento.agregarHijo(aumento);

        return Aumento;

    }

    public C3D(env:Environment,Temp:Temporal){}


}