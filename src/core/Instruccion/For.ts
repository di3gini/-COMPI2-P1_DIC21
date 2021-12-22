import { Instruccion } from "../Abstract/Instruccion";
import { Expression } from "../Abstract/Expresion";
import { Environment } from "../Simbolo/Entorno";
import { Type } from "../Abstract/Objeto";
import { Nodo_Arbol } from '../Graficar_Arbol/nodo_arbol';
import { Temporal } from "../codigo3d/Temporal";


export class For extends Instruccion {

    constructor(private condition: Expression, private code: Instruccion, line: number, column: number) {
        super(line, column);
    }

    public execute(env: Environment) {

       
        let condition = this.condition.execute(env);

        if (condition.type != Type.BOOLEAN) {
            //throw {error: "La condicion no es booleana", linea: this.line, columna : this.column};
            let Errores = localStorage.getItem("ErroresEjecucion");
            Errores = Errores + "   " + "Error Semantico: La condicion no es boolean. En la linea: " + this.line + " y columna: " + this.column + "\n";
            localStorage.setItem("ErroresEjecucion", Errores);
        }

        
        while (condition.value == true) {
            const element = this.code.execute(env);

            //const element = this.InstruccionesWhile.execute(env);
            if (element != null || element != undefined) {
                console.log(element);
                if (element.type == 'Break')
                    break;
                else if (element.type == 'Continue')
                    continue;
            }

            condition = this.condition.execute(env);
            if (condition.type != Type.BOOLEAN) {
                //throw {error: "La condicion no es booleana", linea: this.line, columna : this.column};
                let Errores = localStorage.getItem("ErroresEjecucion");
                Errores = Errores + "   " + "Error Semantico: La condicion no es boolean. En la linea: " + this.line + " y columna: " + this.column + "\n";
                localStorage.setItem("ErroresEjecucion", Errores);
            }
        }
    }


    public graficar(){
        let fr = new Nodo_Arbol("FOR");

        fr.agregarHijo(this.code.graficar());
        

        return fr;

    }

    public C3D(environment: Environment, Temp: Temporal) {
        
    }

}