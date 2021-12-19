import { Instruccion } from "../Abstract/Instruccion";
import { Environment } from "../Simbolo/Entorno";
import { Retorno, Type } from '../Abstract/Objeto';
import { Nodo_Arbol } from '../Graficar_Arbol/nodo_arbol';

export class ListadoSentencias extends Instruccion {


    constructor(private code: Array<Instruccion>, line: number, column: number) {
        super(line, column);
    }

    public execute(env: Environment) {
     
        
        
        const newEnv = new Environment(env);
        for(const instr of this.code){
            try {
                const element = instr.execute(newEnv);
                if(element != undefined || element != null)
                    return element;                
            } catch (error) {
                //errores.push(error);
            }
        }




    }


    
    public graficar(){

        let LS = new Nodo_Arbol("SENTENCIAS");
        for (const instr of this.code) {
            try {
              
                if (instr instanceof Instruccion) {
                    LS.agregarHijo(instr.graficar());
                }
            } catch (error) {

            }
        }

        return LS;
        
    }

}
