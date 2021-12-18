import { Instruccion } from "../Abstract/Instruccion";
import { Environment } from "../Simbolo/Entorno";
import { Expression } from "../Abstract/Expresion";
import { Caso } from "../Instruccion/Caso";
import { Type, Retorno } from "../Abstract/Objeto";
import { Break } from './break';
import { Nodo_Arbol } from '../Graficar_Arbol/nodo_arbol';

export class Switch extends Instruccion {


    constructor(private condicion: Expression, private casos: Caso[], line: number, column: number) {
        super(line, column);
    }

    public execute(env: Environment) {
        const entornoHijo = new Environment(env);
        //let id = this.condicion["id"];

        let valorCond = this.condicion.execute(env);
       
        console.log(this.casos);

        for (const instr of this.casos) {
            try {

                if (instr instanceof Caso) {
            
                    

                    let element: Retorno = instr.executecase(entornoHijo, valorCond);
                    console.log(element);

                    if (element.value == false) {
                        if (element.type == Type.BREAK)
                            break;
                        else if (element.type == Type.CONTINUE) {
                            continue;
                        }
                    }

                }
            } catch (error) {
                console.log(error);
                let Errores = localStorage.getItem("ErroresEjecucion");
                Errores = Errores + "   " + "Error Semantico: Ocurrio un error en la sentencia Switch. En la linea: " + this.line + " y columna: " + this.column + "\n";
                localStorage.setItem("ErroresEjecucion", Errores);
            }
        }
    }

    public graficar() {
        const swt = new Nodo_Arbol("SWITCH");

        for (const instr of this.casos) {
            try {

                if (instr instanceof Caso) {

                    swt.agregarHijo(instr.graficar());



                }
            } catch (error) {

            }
        }

        return swt;
    }


}

