import { Expression } from "../Abstract/Expresion";
import { Retorno, RetornoC3D, Type } from "../Abstract/Retorno";
import { Temporal } from '../C3D/Temporal';
import { Nodo_Arbol } from "../Graficar_Arbol/nodo_arbol"
import { Environment } from '../Simbolo/Entorno';

export class Literal extends Expression {

    constructor(private value: any, line: number, column: number, private type: number) {
        super(line, column);
    }

    public execute(): Retorno {

        if (this.type == 0) {
            return { value: Number(this.value), type: Type.NUMBER };
        }
        else if (this.type == 1) {
            return { value: this.value, type: Type.STRING };
        } else if (this.type == 2) {
            return { value: Boolean(JSON.parse(this.value)), type: Type.BOOLEAN };
        } else if (this.type == 3) {
            return { value: null, type: Type.NULL };
        }
    }

    public graficar() {

        let lit = new Nodo_Arbol("LITERAL");
        let valor = new Nodo_Arbol(this.value);
        lit.agregarHijo(valor);
        return lit;
    }


    public C3D(environment: Environment, Temp: Temporal): RetornoC3D {

        if (this.type == 0) {
            return { value: Number(this.value), type: Type.NUMBER, CD3: this.value };
        }
        else if (this.type == 1) {

            Temp.EscribirC3D(`${Temp.NuevoTemporal()} = H;`, environment.TipoEntorno());
            for (let i = 0; i < this.value.length; i++) {
                
                if(this.value[i]=="\\" && this.value[i+1]=="n"){
                    Temp.EscribirC3D(`Heap[(int)H] = 10;`, environment.TipoEntorno());
                    Temp.EscribirC3D(`H = H + 1;`, environment.TipoEntorno());
                    i++;
                }else if(this.value[i]=="\\" && this.value[i+1]=="t"){
                    Temp.EscribirC3D(`Heap[(int)H] = 9;`, environment.TipoEntorno());
                    Temp.EscribirC3D(`H = H + 1;`, environment.TipoEntorno());
                    i++;
                }else if(this.value[i]=="\\" && this.value[i+1]=="r"){
                    Temp.EscribirC3D(`Heap[(int)H] = 13;`, environment.TipoEntorno());
                    Temp.EscribirC3D(`H = H + 1;`, environment.TipoEntorno());
                    i++;
                }else{

                    Temp.EscribirC3D(`Heap[(int)H] = ${this.value.charCodeAt(i)};`, environment.TipoEntorno());
                    Temp.EscribirC3D(`H = H + 1;`, environment.TipoEntorno());
                }
            }
            Temp.EscribirC3D(`Heap[(int)H] = -1;`, environment.TipoEntorno());
            Temp.EscribirC3D(`H = H + 1;\n`, environment.TipoEntorno());

            return { value: this.value, type: Type.STRING, CD3: Temp.TemporalActual() };
        } else if (this.type == 2) {

            let valor:number = Boolean(this.value) ? 1 : 0;
            Temp.EscribirC3D(`${Temp.NuevoTemporal()} = ${valor};\n`, environment.TipoEntorno());

            return { value: Boolean(JSON.parse(this.value)), type: Type.BOOLEAN, CD3: Temp.TemporalActual() };


        } else if (this.type == 3) {
            return { value: null, type: Type.NULL, CD3: this.value };
        }
    }
}