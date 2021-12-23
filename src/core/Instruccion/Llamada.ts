import { Expression } from "../Abstract/Expresion";
import { Environment } from "../Simbolo/Entorno";
import { Retorno, Type } from "../Abstract/Objeto";
import { Funcion } from './Funcion';
import { Instruccion } from '../Abstract/Instruccion';
import { Nodo_Arbol } from '../Graficar_Arbol/nodo_arbol';
import { Literal } from '../Expresion/Literal';
import { Temporal } from "../codigo3d/Temporal";


export class Llamada extends Instruccion {

    constructor(private id, private parametros: Array<Expression>, line, column) {
        super(line, column);
    }


    public execute(env: Environment): Literal {
     
    
        //BUSCAR FUNCION EN LA TS CON EL ID
        let FUN: Funcion = env.getFuncion(this.id);


        //VERIFICAR SI TIENEN LA MISMA CANTIDAD DE PARAMETROS
        let PARAMETROS = [];
        for (let pare of this.parametros) {
            let a = pare.execute(env);
            PARAMETROS.push({
                valor: a.value,
                tipo: a.type
            })
        }


        //{valor:4,tipo0},{valor:4,tipo0}}
        //{id: a ,valor=null, tipo:0}

       //-- console.log(env);
        //-- console.log(PARAMETROS);

        /* Verifica la cantidad de parametros y si los tipos coinciden;
         Si todo coincide (la cantidad y los tipos), se pasan los valores de los parametros de entrada
         y se ejecuta las sentencias de la funcion*/
        if (FUN.verificarCantidadParametros(PARAMETROS.length)) {


            if (FUN.verificarTiposParametros(PARAMETROS)) {
                let retornoFuncion = FUN.execute(env);
                return new Literal(retornoFuncion.value, this.line, this.column, retornoFuncion.type);

            } else {

                let Errores = localStorage.getItem("ErroresEjecucion");
                Errores = Errores + "   " + "Error Semantico: La funcion " + this.id + " no recibe los mismos TIPOS de parametros. En la linea: " + this.line + " y columna: " + this.column + "\n";
                
                localStorage.setItem("ErroresEjecucion", Errores);

            }

        } else {

            let Errores = localStorage.getItem("ErroresEjecucion");
            Errores = Errores + "   " + "Error Semantico: La funcion " + this.id + " no recibe la misma cantidad de parametros. En la linea: " + this.line + " y columna: " + this.column + "\n";
            localStorage.setItem("ErroresEjecucion", Errores);

        }


        return new Literal("null",this.line,this.column,Type.NULL);


    }



    public graficar() {

        let fun = new Nodo_Arbol("LLAMADA["+this.id+"]");
        let nombreFun = new Nodo_Arbol(this.id);
        fun.agregarHijo(nombreFun);
        return fun;

    }

    public C3D(environment: Environment, Temp: Temporal) {
        
    }

}