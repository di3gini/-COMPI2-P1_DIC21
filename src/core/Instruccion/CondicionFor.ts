import { Expression } from "../Abstract/Expresion";
import { Retorno, Type, RetornoC3D } from "../Abstract/Objeto";
import { Environment } from "../Simbolo/Entorno";
import { Nodo_Arbol } from '../Graficar_Arbol/nodo_arbol';
import { Temporal } from '../codigo3d/Temporal';

export enum ForOption {
    NORMALD,
    NORMAL,
    OFD,
    OF,
    IND,
    IN,
}

export class CondicionFor extends Expression {

    constructor(private id: string, private valor: Expression, private condicion: Expression, private aumento: Expression, private type: ForOption, line: number, column: number) {
        super(line, column);
    }



    public execute(env: Environment): Retorno {



        if (this.type == ForOption.NORMALD) {

          
            //Se declara la variable en el entorno si no esta declarada (si ya lo esta no hace nada)
            const existeVar = env.getVarLocal(this.id);
            if(existeVar == null){
                const val = this.valor.execute(env);
                env.setEntornoActual(this.id, val.value, val.type,this.line,this.column);
            }else{
                this.aumento.execute(env);
            }
          
          
            let condition = this.condicion.execute(env);
            if (condition.value == false)
                return { value: false, type: Type.BOOLEAN };

        
              
            return { value: true, type: Type.BOOLEAN };


        }
        else if (this.type == ForOption.NORMAL) {
            //Se declara la variable en el entorno si no esta declarada (si ya lo esta no hace nada)
           
     
        
              
            return { value: true, type: Type.BOOLEAN };

        } else if (this.type == ForOption.OF) {

        } else if (this.type == ForOption.OFD) {

        } else if (this.type == ForOption.IN) {

        } else if (this.type == ForOption.IND) {

        }


        return { value: false, type: Type.BOOLEAN };
    }

    public graficar(){
        
        let condf = new Nodo_Arbol("CondicionFor");

        let decl = new Nodo_Arbol("DECLARACION");
        let idd = new Nodo_Arbol(this.id);
        let equ = new Nodo_Arbol("=");
        let Ex = new Nodo_Arbol("EXPRESION");
        Ex.agregarHijo(this.valor.graficar());
        decl.agregarHijo(idd);
        decl.agregarHijo(equ);
        decl.agregarHijo(Ex);

        
        let cond = new Nodo_Arbol("CONDICION");
        let Ex2 = new Nodo_Arbol('EXPRESION');
        Ex2.agregarHijo(this.condicion.graficar());
        cond.agregarHijo(Ex2); 


        let aum = new Nodo_Arbol("AUMENTO");
        let Ex3 = new Nodo_Arbol("EXPRESION");
        Ex3.agregarHijo(this.aumento.graficar());
        aum.agregarHijo(Ex3);



        condf.agregarHijo(decl);
        condf.agregarHijo(cond);
        condf.agregarHijo(aum);

        return condf;



    }

    public C3D(env:Environment): RetornoC3D{
        return
    }
}