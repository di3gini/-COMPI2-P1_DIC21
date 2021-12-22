import { Expression } from "../Abstract/Expresion";
import { Retorno, Type } from "../Abstract/Objeto";
import { Environment } from "../Simbolo/Entorno";
import { Instruccion} from "../Abstract/Instruccion";
import { Nodo_Arbol } from '../Graficar_Arbol/nodo_arbol';



export class Ternario extends Expression {

    constructor(private Condicion: Expression, private ValueTrue: Expression, private ValueFalse: Expression, line: number, column: number) {
        super(line, column);
    }

    public execute(environment: Environment):Retorno{
        let result: Retorno;
        const condition = this.Condicion.execute(environment);
        
        if(condition.type != Type.BOOLEAN){
            let Errores = localStorage.getItem("ErroresEjecucion");
            Errores= Errores +"   "+"Error Semantico: No coinciden los tipos. En la linea: "+this.line+" y columna: "+this.column +"\n";
            localStorage.setItem("ErroresEjecucion",Errores);

        }


        if(condition.value == true){
            let valor= this.ValueTrue.execute(environment);
            result = { value: valor.value, type: Type.TERNARIO };
            
        }
        else{
            let valor = this.ValueFalse.execute(environment);
            result = { value: valor.value, type: Type.TERNARIO };
        }
       
        return result;
    }


    public graficar(){
        const Tern = new Nodo_Arbol("TERNARIO");

        const exp = new Nodo_Arbol(this.Condicion.graficar());
        const tr = new Nodo_Arbol("?");
        const ifs = new Nodo_Arbol(this.ValueTrue.graficar());
        const fl = new Nodo_Arbol(":");
        const els = new Nodo_Arbol(this.ValueFalse.graficar());
        
        Tern.agregarHijo(exp);
        Tern.agregarHijo(tr);
        Tern.agregarHijo(ifs);
        Tern.agregarHijo(fl);
        Tern.agregarHijo(els);

        return Tern;
    }

}

