import { Expression } from "../Abstract/Expresion";
import { Retorno, RetornoC3D, Type } from "../Abstract/Retorno";
import { Environment } from "../Simbolo/Entorno";
import { Nodo_Arbol } from "../Graficar_Arbol/nodo_arbol"
import { Temporal } from "../C3D/Temporal";

export enum ArithmeticOption {
    PLUS,
    MINUS,
    TIMES,
    DIV,
    POT,
    UNARIO
}

export class Arithmetic extends Expression {

    constructor(private left: Expression, private right: Expression, private type: ArithmeticOption, line: number, column: number) {
        super(line, column);
    }

    public C3D(environment: Environment, Temp: Temporal): RetornoC3D {

        const leftValue = this.left.C3D(environment, Temp);
        const rightValue = this.right.C3D(environment, Temp);
        let result: RetornoC3D;

        const tipoDominante = this.tipoDominante(leftValue.type, rightValue.type);

        //SUMA
        if (this.type == ArithmeticOption.PLUS) {

            if (tipoDominante == Type.STRING) {

                let TempRetorno = Temp.NuevoTemporal();
                //SI ALGUN OPERANDO ES NUMERICO
                if (leftValue.type == Type.NUMBER) {


                    let temporal = Temp.NuevoTemporal();

                    Temp.EscribirC3D(`${temporal} = H;`, environment.TipoEntorno());
                    Temp.EscribirC3D(`${Temp.NuevoTemporal()} = P + ${environment.ObtenerPeso()};`, environment.TipoEntorno());
                    Temp.EscribirC3D(`${Temp.NuevoTemporal()} = ${Temp.TemporalAnterior()} + 1;`, environment.TipoEntorno());

                    Temp.EscribirC3D(`Stack[(int)${Temp.TemporalActual()}] = ${leftValue.CD3};`, environment.TipoEntorno());

                    Temp.EscribirC3D(`P = P + 0;`, environment.TipoEntorno());
                    Temp.EscribirC3D(`NumericoACadena();`, environment.TipoEntorno());
                    Temp.EscribirC3D(`P = P - 0;\n`, environment.TipoEntorno());


                    Temp.EscribirC3D(`${Temp.NuevoTemporal()} = P + ${environment.ObtenerPeso()};`, environment.TipoEntorno());
                    Temp.EscribirC3D(`${Temp.NuevoTemporal()} = ${Temp.TemporalAnterior()} + 1;`, environment.TipoEntorno());

                    Temp.EscribirC3D(`Stack[(int)${Temp.TemporalActual()}] = ${temporal};\n`, environment.TipoEntorno());



                } else if (rightValue.type == Type.NUMBER) {

                    let temporal = Temp.NuevoTemporal();

                    Temp.EscribirC3D(`${temporal} = H;`, environment.TipoEntorno());
                    Temp.EscribirC3D(`${Temp.NuevoTemporal()} = P + ${environment.ObtenerPeso()};`, environment.TipoEntorno());
                    Temp.EscribirC3D(`${Temp.NuevoTemporal()} = ${Temp.TemporalAnterior()} + 1;`, environment.TipoEntorno());

                    Temp.EscribirC3D(`Stack[(int)${Temp.TemporalActual()}] = ${rightValue.CD3};`, environment.TipoEntorno());

                    Temp.EscribirC3D(`P = P + 0;`, environment.TipoEntorno());
                    Temp.EscribirC3D(`NumericoACadena();`, environment.TipoEntorno());
                    Temp.EscribirC3D(`P = P - 0;\n`, environment.TipoEntorno());


                    Temp.EscribirC3D(`${Temp.NuevoTemporal()} = P + ${environment.ObtenerPeso()};`, environment.TipoEntorno());
                    Temp.EscribirC3D(`${Temp.NuevoTemporal()} = ${Temp.TemporalAnterior()} + 2;`, environment.TipoEntorno());

                    Temp.EscribirC3D(`Stack[(int)${Temp.TemporalActual()}] = ${temporal};\n`, environment.TipoEntorno());

                }


                //SI ALGUN OPERANDO ES BOOLEANO 
                if (leftValue.type == Type.BOOLEAN) {
                    let boolTemp: string = Temp.NuevoTemporal();
                    Temp.EscribirC3D(`${boolTemp} = H;`, environment.TipoEntorno());
                    Temp.EscribirC3D(`${Temp.NuevoTemporal()} = P + ${environment.ObtenerPeso()};`, environment.TipoEntorno());
                    Temp.EscribirC3D(`${Temp.NuevoTemporal()} = ${Temp.TemporalAnterior()} + 1;`, environment.TipoEntorno());
                    Temp.EscribirC3D(`Stack[(int)${Temp.TemporalActual()}] = ${leftValue.CD3};\n`, environment.TipoEntorno());

                    Temp.EscribirC3D(`P = P + ${environment.ObtenerPeso()};`, environment.TipoEntorno());
                    Temp.EscribirC3D(`TrueOrFalse();`, environment.TipoEntorno());
                    Temp.EscribirC3D(`P = P - ${environment.ObtenerPeso()};\n`, environment.TipoEntorno());

                    Temp.EscribirC3D(`${Temp.NuevoTemporal()} = P + ${environment.ObtenerPeso()};`, environment.TipoEntorno());
                    Temp.EscribirC3D(`${Temp.NuevoTemporal()} = ${Temp.TemporalAnterior()} + 1;`, environment.TipoEntorno());
                    Temp.EscribirC3D(`Stack[(int)${Temp.TemporalActual()}] = ${boolTemp};\n`, environment.TipoEntorno());


                }
                else if (rightValue.type == Type.BOOLEAN) {

                    let boolTemp: string = Temp.NuevoTemporal();
                    Temp.EscribirC3D(`${boolTemp} = H;`, environment.TipoEntorno());
                    Temp.EscribirC3D(`${Temp.NuevoTemporal()} = P + ${environment.ObtenerPeso()};`, environment.TipoEntorno());
                    Temp.EscribirC3D(`${Temp.NuevoTemporal()} = ${Temp.TemporalAnterior()} + 1;`, environment.TipoEntorno());
                    Temp.EscribirC3D(`Stack[(int)${Temp.TemporalActual()}] = ${rightValue.CD3};\n`, environment.TipoEntorno());

                    Temp.EscribirC3D(`P = P + ${environment.ObtenerPeso()};`, environment.TipoEntorno());
                    Temp.EscribirC3D(`TrueOrFalse();`, environment.TipoEntorno());
                    Temp.EscribirC3D(`P = P - ${environment.ObtenerPeso()};\n`, environment.TipoEntorno());

                    Temp.EscribirC3D(`${Temp.NuevoTemporal()} = P + ${environment.ObtenerPeso()};`, environment.TipoEntorno());
                    Temp.EscribirC3D(`${Temp.NuevoTemporal()} = ${Temp.TemporalAnterior()} + 2;`, environment.TipoEntorno());
                    Temp.EscribirC3D(`Stack[(int)${Temp.TemporalActual()}] = ${boolTemp};\n`, environment.TipoEntorno());

                }

                Temp.EscribirC3D(`${TempRetorno} = H;\n`, environment.TipoEntorno());

                //SI ALGUN OPERANDO ES STRING
                if (leftValue.type == Type.STRING) {
                    Temp.EscribirC3D(`${Temp.NuevoTemporal()} = P + 0;`, environment.TipoEntorno());
                    Temp.EscribirC3D(`${Temp.NuevoTemporal()} = ${Temp.TemporalAnterior()} + 1;`, environment.TipoEntorno());
                    Temp.EscribirC3D(`Stack[(int)${Temp.TemporalActual()}] = ${leftValue.CD3};\n`, environment.TipoEntorno());
                }

                if (rightValue.type == Type.STRING) {
                    Temp.EscribirC3D(`${Temp.NuevoTemporal()} = P + 0;`, environment.TipoEntorno());
                    Temp.EscribirC3D(`${Temp.NuevoTemporal()} = ${Temp.TemporalAnterior()} + 2;`, environment.TipoEntorno());
                    Temp.EscribirC3D(`Stack[(int)${Temp.TemporalActual()}] = ${rightValue.CD3};\n`, environment.TipoEntorno());
                }


                Temp.EscribirC3D(`P = P + 0;`, environment.TipoEntorno());
                Temp.EscribirC3D(`ConcatenarCadenas();`, environment.TipoEntorno());
                Temp.EscribirC3D(`P = P - 0;\n`, environment.TipoEntorno());

                result = { value: (leftValue.value.toString() + rightValue.value.toString()), type: Type.STRING, CD3: TempRetorno };

            }
            else if (tipoDominante == Type.NUMBER) {


                Temp.EscribirC3D(`${Temp.NuevoTemporal()}=${leftValue.CD3}+${rightValue.CD3};`, environment.TipoEntorno());
                result = { value: (leftValue.value + rightValue.value), type: Type.NUMBER, CD3: Temp.TemporalActual() };

            }
            else {
                let Errores = localStorage.getItem("ErroresEjecucion");
                Errores = Errores + "   " + "Error Semantico:" + " No se puede operar: " + leftValue.type + ' _ ' + rightValue.type + ". En la linea: " + this.line + " y columna: " + this.column + "\n";
                localStorage.setItem("ErroresEjecucion", Errores);
            }

        }

        //RESTA
        else if (this.type == ArithmeticOption.MINUS) {
            if (tipoDominante == Type.STRING) {

                let Errores = localStorage.getItem("ErroresEjecucion");
                Errores = Errores + "   " + "Error Semantico:" + " No se puede operar: " + leftValue.type + ' - ' + rightValue.type + ". En la linea: " + this.line + " y columna: " + this.column + "\n";
                localStorage.setItem("ErroresEjecucion", Errores);
            }

            Temp.EscribirC3D(`${Temp.NuevoTemporal()}=${leftValue.CD3}-${rightValue.CD3};`, environment.TipoEntorno());
            result = { value: (leftValue.value - rightValue.value), type: Type.NUMBER, CD3: Temp.TemporalActual() };
        }


        //MULTIPLICACION
        else if (this.type == ArithmeticOption.TIMES) {

            Temp.EscribirC3D(`${Temp.NuevoTemporal()}=${leftValue.CD3}*${rightValue.CD3};`, environment.TipoEntorno());
            result = { value: (leftValue.value * rightValue.value), type: Type.NUMBER, CD3: Temp.TemporalActual() };

        }

        //POTENCIA
        else if (this.type == ArithmeticOption.POT) {
         
            Temp.EscribirC3D(`${Temp.NuevoTemporal()}= P+ 0;`, environment.TipoEntorno());
            Temp.EscribirC3D(`${Temp.NuevoTemporal()}=${Temp.TemporalAnterior()}+ 1;`, environment.TipoEntorno());
            Temp.EscribirC3D(`Stack[(int)${Temp.TemporalActual()}]=${leftValue.CD3};\n`, environment.TipoEntorno());



            Temp.EscribirC3D(`${Temp.NuevoTemporal()}= P+ 0;`, environment.TipoEntorno());
            Temp.EscribirC3D(`${Temp.NuevoTemporal()}=${Temp.TemporalAnterior()}+ 2;`, environment.TipoEntorno());
            Temp.EscribirC3D(`Stack[(int)${Temp.TemporalActual()}]=${rightValue.CD3};\n`, environment.TipoEntorno());

            Temp.EscribirC3D(`P = P + 0;`, environment.TipoEntorno());
            Temp.EscribirC3D(`Potencia();`, environment.TipoEntorno());
            Temp.EscribirC3D(`P = P - 0;\n`, environment.TipoEntorno());

            Temp.EscribirC3D(`${Temp.NuevoTemporal()} = P + 0;`, environment.TipoEntorno());
            Temp.EscribirC3D(`${Temp.NuevoTemporal()} = Stack[(int)${Temp.TemporalAnterior()}];\n`, environment.TipoEntorno());


            result = { value: (Math.pow(leftValue.value, rightValue.value)), type: Type.NUMBER, CD3: Temp.TemporalActual() };
        }

        //UNARIO
        else if (this.type == ArithmeticOption.UNARIO) {
            Temp.EscribirC3D(`${Temp.NuevoTemporal()}=0-${rightValue.CD3};`, environment.TipoEntorno());
            result = { value: (rightValue.value * (-1)), type: Type.NUMBER, CD3: Temp.TemporalActual() };
        }

        //DIVISION
        else {
            if (rightValue.value == 0) {
                let Errores = localStorage.getItem("ErroresEjecucion");
                Errores = Errores + "   " + "Error Semantico:" + " No se puede dividir entre 0" + ". En la linea: " + this.line + " y columna: " + this.column + "\n";
                localStorage.setItem("ErroresEjecucion", Errores);
            }

            Temp.EscribirC3D(`${Temp.NuevoTemporal()}=${leftValue.CD3}/${rightValue.CD3};`, environment.TipoEntorno());
            result = { value: (leftValue.value / rightValue.value), type: Type.NUMBER, CD3: Temp.TemporalActual() };
        }


        return result;

    }




    public execute(environment: Environment): Retorno {

        const leftValue = this.left.execute(environment);
        const rightValue = this.right.execute(environment);
        let result: Retorno;
        const tipoDominante = this.tipoDominante(leftValue.type, rightValue.type);
        //SUMA
        if (this.type == ArithmeticOption.PLUS) {

            if (tipoDominante == Type.STRING)
                result = { value: (leftValue.value.toString() + rightValue.value.toString()), type: Type.STRING };
            else if (tipoDominante == Type.NUMBER) {
                result = { value: (leftValue.value + rightValue.value), type: Type.NUMBER };

            }
            else {
                //throw new Error_(this.line, this.column, 'Semantico', 'No se puede operar: ' + leftValue.type + ' _ ' + rightValue.type);

                let Errores = localStorage.getItem("ErroresEjecucion");
                Errores = Errores + "   " + "Error Semantico:" + " No se puede operar: " + leftValue.type + ' _ ' + rightValue.type + ". En la linea: " + this.line + " y columna: " + this.column + "\n";
                localStorage.setItem("ErroresEjecucion", Errores);
            }

        }


        else if (this.type == ArithmeticOption.MINUS) {
            if (tipoDominante == Type.STRING) {
                //throw new Error_(this.line, this.column, 'Semantico', 'No se puede operar: ' + leftValue.type + ' _ ' + rightValue.type);
                //console.log("Error Semantico");
                let Errores = localStorage.getItem("ErroresEjecucion");
                Errores = Errores + "   " + "Error Semantico:" + " No se puede operar: " + leftValue.type + ' _ ' + rightValue.type + ". En la linea: " + this.line + " y columna: " + this.column + "\n";
                localStorage.setItem("ErroresEjecucion", Errores);
            }
            result = { value: (leftValue.value - rightValue.value), type: Type.NUMBER };
        }



        else if (this.type == ArithmeticOption.TIMES) {
            result = { value: (leftValue.value * rightValue.value), type: Type.NUMBER };
        }


        else if (this.type == ArithmeticOption.POT) {

            result = { value: (Math.pow(leftValue.value, rightValue.value)), type: Type.NUMBER };
        }

        else if (this.type == ArithmeticOption.UNARIO) {

            result = { value: (rightValue.value * (-1)), type: Type.NUMBER };
        }
        else {
            if (rightValue.value == 0) {
                //throw new Error_(this.line, this.column, "Semantico", "No se puede dividir entre 0");
                //console.log("Error Semantico");

                let Errores = localStorage.getItem("ErroresEjecucion");
                Errores = Errores + "   " + "Error Semantico:" + " No se puede dividir entre 0" + ". En la linea: " + this.line + " y columna: " + this.column + "\n";
                localStorage.setItem("ErroresEjecucion", Errores);
            }
            result = { value: (leftValue.value / rightValue.value), type: Type.NUMBER };
        }
        return result;
    }


    public graficar() {
        const NodoAritmetica = new Nodo_Arbol("ARITMETICA");

        const Leftvalue = new Nodo_Arbol("EXPRESION");
        const igual = new Nodo_Arbol(this.Tipo(this.type));
        const Rightvalue = new Nodo_Arbol("EXPRESION");

        Leftvalue.agregarHijo(this.left.graficar());
        Rightvalue.agregarHijo(this.right.graficar());
        NodoAritmetica.agregarHijo(Leftvalue);
        NodoAritmetica.agregarHijo(igual);
        NodoAritmetica.agregarHijo(Rightvalue);
        return NodoAritmetica;


    }


    public Tipo(Tipo: ArithmeticOption): string {

        if (Tipo == 0) {
            return "+";
        } else if (Tipo == 1) {
            return "-";
        } else if (Tipo == 2) {
            return "*";
        } else if (Tipo == 3) {
            return "/"
        } else if (Tipo == 4) {
            return "**"
        } else if (Tipo == 5) {
            return "-"
        }

    }




}

