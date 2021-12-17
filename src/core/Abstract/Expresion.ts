import { Retorno, Type } from "./Retorno";
import { Environment } from "../Simbolo/Entorno";
import { tipos } from "../Simbolo/TablaTipos";
import { Nodo_Arbol} from "../Graficar_Arbol/nodo_arbol";


export abstract class Expression {

    public line: number;
    public column: number;

    constructor(line: number, column: number) {
        this.line = line;
        this.column = column;
    }

    public abstract execute(environment: Environment): Retorno;

    public tipoDominante(tipo1: Type, tipo2: Type): Type {
        
        const type = tipos[tipo1][tipo2];
        return type;
    }


    public abstract graficar();


}

