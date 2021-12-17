import { Instruccion } from "../Abstract/Instruccion";
import { Expression } from "../Abstract/Expresion";
import { Environment } from "../Simbolo/Entorno";
import { Nodo_Arbol } from "../Graficar_Arbol/nodo_arbol";
import { Type } from '../Abstract/Retorno';
import { Temporal } from '../C3D/Temporal';
export class Print extends Instruccion {

    constructor(private value: Expression, line: number, column: number, code: string) {
        super(line, column, code);
    }

    public execute(environment: Environment) {
        const value = this.value.execute(environment);
        let terminal = localStorage.getItem("consola");
        let cadenaSinFormato = "";
        let cadenaFinal;


        if (value.type == Type.NUMBER || value.type == Type.STRING || value.type == Type.BOOLEAN) {


            cadenaSinFormato = value["value"].toString();

            if (cadenaSinFormato.includes("\\n")) {
                cadenaSinFormato = cadenaSinFormato.replace(/\\n/g, "\n")
            }
            if (cadenaSinFormato.includes("\\t")) {
                cadenaSinFormato = cadenaSinFormato.replace(/\\t/g, "\t");
            }
            if (cadenaSinFormato.includes("\\r")) {
                cadenaSinFormato = cadenaSinFormato.replace(/\\r/g, "\r");
            }


        } else {

            cadenaSinFormato = "[";

            for (let i of value.value) {
                cadenaSinFormato = cadenaSinFormato + i + ",";
            }

            cadenaSinFormato = cadenaSinFormato + "]";

        }



        cadenaFinal = cadenaSinFormato;
        terminal = terminal + cadenaFinal + "\n";
        localStorage.setItem("consola", terminal);

    }

   

    public graficar() {

        let NodoImprimir = new Nodo_Arbol("IMPRIMIR");
        let Ex = new Nodo_Arbol("EXPRESION");

        Ex.agregarHijo(this.value.graficar());

        NodoImprimir.agregarHijo(Ex);

        return NodoImprimir;



    }



    public C3D(environment: Environment, Temp: Temporal) {
  
        const value = this.value.C3D(environment, Temp);
      

      

        if (value.type == Type.NUMBER) {
            //Temp.EscribirC3D(`${Temp.NuevoTemporal()}= Heap[(int)${value.CD3}];`, environment.TipoEntorno());
            Temp.EscribirC3D(`printf("%d \\n",(int)${Temp.TemporalActual()});`, environment.TipoEntorno());


        } else if ( value.type == Type.STRING ) {
       
            Temp.EscribirC3D(`${Temp.NuevoTemporal()} = P + 0;`, environment.TipoEntorno());
            Temp.EscribirC3D(`${Temp.NuevoTemporal()} = ${Temp.TemporalAnterior()} + 1;`, environment.TipoEntorno());
            Temp.EscribirC3D(`Stack[(int)${Temp.TemporalActual()}] = ${value.CD3};\n`, environment.TipoEntorno());
            Temp.EscribirC3D(`P = P + 0;`, environment.TipoEntorno());
            Temp.EscribirC3D(`ImprimirCadena();`, environment.TipoEntorno());
            Temp.EscribirC3D(`P = P - 0;\n`, environment.TipoEntorno());

        } else if(value.type == Type.BOOLEAN){

            
        }
        /*let terminal = localStorage.getItem("consola");
        let cadenaSinFormato = "";
        let cadenaFinal;


        if (value.type == 40 || value.type == 41 || value.type == 42) {

            cadenaSinFormato = "[";

            for (let i of value.value) {
                cadenaSinFormato = cadenaSinFormato + i + ",";
            }

            cadenaSinFormato = cadenaSinFormato + "]";


        } else {

            cadenaSinFormato = value["value"].toString();

            if (cadenaSinFormato.includes("\\n")) {
                cadenaSinFormato = cadenaSinFormato.replace(/\\n/g, "\n")
            }
            if (cadenaSinFormato.includes("\\t")) {
                cadenaSinFormato = cadenaSinFormato.replace(/\\t/g, "\t");
            }
            if (cadenaSinFormato.includes("\\r")) {
                cadenaSinFormato = cadenaSinFormato.replace(/\\r/g, "\r");
            }

        }



        cadenaFinal = cadenaSinFormato;
        terminal = terminal + cadenaFinal + "\n";
        localStorage.setItem("consola", terminal);*/

    }




}  