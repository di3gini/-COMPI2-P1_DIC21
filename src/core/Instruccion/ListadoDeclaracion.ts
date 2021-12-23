import { Instruccion } from "../Abstract/Instruccion";
import { Environment } from "../Simbolo/Entorno";
import { Nodo_Arbol } from '../Graficar_Arbol/nodo_arbol';
import { Type } from "../Abstract/Objeto";


export class ListadoDeclaracion extends Instruccion {

    
    constructor(private tipo: Type, private variables: string[], line: number, column: number) {
        super(line, column);

    }

    public execute(env: Environment) {
     
        for (const id of this.variables) {
            try {
                switch (this.tipo) {
                    case Type.NUMBER:
                        env.setEntornoActual(id, 0, Type.NUMBER,this.line,this.column);
                        break;
                    case Type.STRING:
                        env.setEntornoActual(id, "", Type.STRING,this.line,this.column);
                        break;
                    case Type.BOOLEAN:
                        env.setEntornoActual(id, false, Type.BOOLEAN,this.line,this.column);
                        break;
                    case Type.DECIMAL:
                        env.setEntornoActual(id, 0, Type.DECIMAL,this.line,this.column);
                        break;
                    
                }
            } catch (error) {
                
        }
    }
}


    public graficar(){
        
    }

}
