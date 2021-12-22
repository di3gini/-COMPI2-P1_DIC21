import { Instruccion } from "../Abstract/Instruccion";
import { Expression } from "../Abstract/Expresion";
import { Environment } from "../Simbolo/Entorno";
import { Type, Retorno } from "../Abstract/Objeto";
import { Nodo_Arbol } from '../Graficar_Arbol/nodo_arbol';

export enum CaseOption {
    NORMAL,
    DEFAULT
}

export class Caso extends Instruccion {

    constructor(private rightvalue: Expression, private code: Instruccion[], private type: CaseOption, line: number, column: number) {
        super(line, column);
    }

    public execute(env: Environment) {

    }

    public executecase(env: Environment, leftvalue: any): Retorno {

     
        const Valor = this.rightvalue.execute(env);
        //const existeVar = env.getVarLocal(leftvalue);


        console.log(leftvalue.value);
        console.log("=");
        console.log(Valor.value);

        if (this.type == CaseOption.DEFAULT) {
            //Valor.value = existeVar.valor;
            Valor.value = leftvalue.value;
        }

        if (leftvalue.value == Valor.value) {

            console.log("entre");
            for (const instr of this.code) {
                try {

                    if (instr instanceof Instruccion) {
                        let element = instr.execute(env);
                        if (element != null || element != undefined) {
                            if (element.type == 'Break')
                                return { value: false, type: Type.BREAK };
                            else if (element.type == 'Continue') {
                                return { value: false, type: Type.BREAK };
                            }
                        }
                    }
                } catch (error) {
                    let Errores = localStorage.getItem("ErroresEjecucion");
                    Errores = Errores + "   " + "Error Semantico: Al momento de ejecutar el \"Case\". En la linea: " + this.line + " y columna: " + this.column + "\n";
                    localStorage.setItem("ErroresEjecucion", Errores);
                }
            }


        }


        return { value: true, type: Type.NULL };


    }

    public graficar() {

        let cas = new Nodo_Arbol("CASO");


        for (const instr of this.code) {
            try {

                if (instr instanceof Instruccion) {
                    cas.agregarHijo(instr.graficar());

                }
            } catch (error) {

            }
        }


        return cas;

    }
}


