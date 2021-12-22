
import { Expression } from "../Abstract/Expresion";
import { Instruccion } from "../Abstract/Instruccion";
import { Environment } from "../Simbolo/Entorno";
import { Type, Retorno, RetornoC3D } from "../Abstract/Objeto";
import { Nodo_Arbol } from '../Graficar_Arbol/nodo_arbol';

export class Funcion extends Expression {

    public id;
    public ParametrosFuncion: any[] = [];
    constructor(nombre: string, private parametros: Array<Instruccion>, private InstruccionesFuncion: Instruccion, private tipo: Type, line, column) {
        super(line, column);
        this.id = nombre;
    }

    public execute(env: Environment): Retorno | null {

        // funcion o metodo?
        let retorna = this.tipo != 8 ? true : false;


        let entornoFuncion;
        entornoFuncion = new Environment(env);
        


 
        for (let parametro of this.ParametrosFuncion) {
            entornoFuncion.setEntornoActual(parametro.id, parametro.valor, parametro.tipo, this.line, this.column);
        }
        
        //EJECTA LAS INSTRUCCIONES DE LA FUNCION Y ESPERA SI HAY UN RETURN
        let element = this.InstruccionesFuncion.execute(entornoFuncion);



        //SI HAY UN RETURN VERIFICA QUE TIPO DE RETURN
        if (element != null || element != undefined) {
            //RETURN CON EXPRESION
            if (element.retorno == 'ReturnExp') {

                if (element.tipo == this.tipo) {
                    //--  console.log(element);
                    return { value: element.value, type: this.tipo }
                } else {
                    let Errores = localStorage.getItem("ErroresEjecucion");
                    Errores = Errores + "   " + "Error Semantico:El tipo de la funcion no coincide con el tipo de retorno. En la linea: " + this.line + " y columna: " + this.column + "\n";
                    localStorage.setItem("ErroresEjecucion", Errores);
                }
                //RETURN SIN EXPRESION
            } else if (element.retorno == "ReturnOnly") {
                if (!retorna)
                    return { value: null, type: Type.VOID };
                else {
                    let Errores = localStorage.getItem("ErroresEjecucion");
                    Errores = Errores + "   " + "Error Semantico: La funcion " + this.id + " debe retornar un valor de tipo: " + this.Tipo(this.tipo) + ". En la linea: " + this.line + " y columna: " + this.column + "\n";
                    localStorage.setItem("ErroresEjecucion", Errores);
                    return { value: null, type: Type.VOID };
                }
            }
        }


        //EJECUTO TODAS LAS INSTRUCCIONES (NO ENCONTRO NINGUN RETURN) Y VERIFICA SI TENIA QUE RETORNA ALGO
        if (!retorna) {
            return { value: null, type: Type.VOID };
        } else {
            let Errores = localStorage.getItem("ErroresEjecucion");
            Errores = Errores + "   " + "Error Semantico: La funcion " + this.id + " debe retornar un valor de tipo: " + this.Tipo(this.tipo) + ". En la linea: " + this.line + " y columna: " + this.column + "\n";
            localStorage.setItem("ErroresEjecucion", Errores);
        }

    }



    public verificarCantidadParametros(CantParametros: number): boolean {
        return CantParametros == this.parametros.length;
    }

    public verificarTiposParametros(parametrosEntrada: any[]): boolean {
        this.ParametrosFuncion = [];


        for (let de of this.parametros) {
            this.ParametrosFuncion.push({
                id: de["id"],
                valor: de["value"]["value"],
                tipo: de["value"]["type"]
            });
        }


        let res = parametrosEntrada.length == this.ParametrosFuncion.length && this.ParametrosFuncion.every(function (v, i) {

            if (v.tipo === parametrosEntrada[i].tipo) {
                v.valor = parametrosEntrada[i].valor
                return true
            } else {
                return false
            }

        });



        return res;
    }





    public Tipo(tipo: Type): string {

        if (tipo == Type.NUMBER) {
            return "Numerico";
        } else if (tipo == Type.STRING) {
            return "String";
        } else if (tipo == Type.BOOLEAN) {
            return "Booleano"
        } else if (tipo == Type.ARRAY) {
            return "Array";
        }
    }

    public graficar() {

        let fun = new Nodo_Arbol("FUN[" + this.id + "]");
        let nombreFun = new Nodo_Arbol("PARAMETROS");

        fun.agregarHijo(this.InstruccionesFuncion.graficar());
        fun.agregarHijo(nombreFun);

        return fun;
    }

    public C3D(env: Environment): RetornoC3D | null {
        return
    }
}