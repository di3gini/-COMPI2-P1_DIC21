import { Instruccion } from "../Abstract/Instruccion";
import { Expression } from "../Abstract/Expresion";
import { Environment } from "../Simbolo/Entorno";
import { Nodo_Arbol } from "../Graficar_Arbol/nodo_arbol";
import { Type } from '../Abstract/Objeto';
import { Temporal } from "../codigo3d/Temporal";

export class Print extends Instruccion {

    constructor(private value: Expression[], private println: boolean, line: number, column: number, code: string) {
        super(line, column, code);
    }

    public execute(environment: Environment) {

        let terminal = localStorage.getItem("consola");
        let cadenaSinFormato = "";
        let cadenaFinal = "";
        for (let expresion of this.value) {

            const value = expresion.execute(environment);



            if (value.type == Type.NUMBER || value.type == Type.STRING || value.type == Type.BOOLEAN 
                || value.type == Type.DECIMAL || value.type == Type.NULL) {


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
            cadenaFinal = cadenaFinal + cadenaSinFormato + " ";
    }
    let finalCadena = "";

    if (this.println) {
        finalCadena = "\n";
    } else {
        finalCadena = "";
    }
    terminal = terminal + cadenaFinal + finalCadena;
    localStorage.setItem("consola", terminal);
}

   

    public graficar() {

        let NodoImprimir = new Nodo_Arbol("IMPRIMIR");
        let Ex = new Nodo_Arbol("EXPRESION_IMPRIMIR");

        for (let expresion of this.value) {
            Ex.agregarHijo(expresion.graficar());

            NodoImprimir.agregarHijo(Ex);
        }

        return NodoImprimir;



    }


    public C3D(environment: Environment, Temp: Temporal) {
        
        const value = this.value[0].C3D(environment, Temp);
      
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
    }

}  