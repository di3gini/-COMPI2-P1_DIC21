import { Simbolo } from "./Simbolo";
import { Type } from "../Abstract/Objeto";
import { Funcion } from "../Instruccion/Funcion";

export class Environment {

    private variables: Map<string, Simbolo>;
    public funciones: Map<string, Funcion>;
    private Entorno:boolean;
    private Peso:number;
    private ContadorEtiquetas=0;

    constructor(public anterior: Environment | null) {
        this.variables = new Map();
        this.funciones = new Map();
        this.Entorno=false;
        this.Peso = 0;
    }


    public NuevaEtiqueta():string{
        this.ContadorEtiquetas++;
        return "L"+ this.ContadorEtiquetas;
    }

    public EtiquetaActual():string{
        return "L"+ this.ContadorEtiquetas;

    }

    public EtiquetaAnterior():string{
        return "L"+ (this.ContadorEtiquetas-1);

    }

    

    public setEntorno(entorno:boolean){
        this.Entorno= entorno;
    }

    public getEntorno():boolean{
        return this.Entorno;
    }

    public TipoEntorno():boolean{

        return this.Entorno;
    }

    //========================== EJECUCION NORMAL


    //Guardar Variables
    public setVar(id: string, valor: any, type: Type, linea: number, columna: number) {
        let env: Environment | null = this;
        while (env != null) {
            if (env.variables.has(id)) {
                env.variables.set(id, new Simbolo(valor, id, type,linea, columna));
                return;
            }
            env = env.anterior;
        }
        this.variables.set(id, new Simbolo(valor, id, type, linea, columna));


    }

    public setEntornoActual(id: string, valor: any, type: Type, linea: number, columna: number) {
        let env: Environment | null = this;
        while (env != null) {
            if (env.variables.has(id)) {
                env.variables.set(id, new Simbolo(valor, id, type, linea, columna));
                return;
            }
            env = null;
        }
        this.variables.set(id, new Simbolo(valor, id, type, linea, columna));

    }

    public getVar(id: string): Simbolo | undefined | null {
        let env: Environment | null = this;

        while (env != null) {
            if (env.variables.has(id)) {
                return env.variables.get(id);
            }
            env = env.anterior;
        }
        return null;
    }

    public getVarLocal(id: string): Simbolo | undefined | null {
        let env: Environment | null = this;

        while (env != null) {
            if (env.variables.has(id)) {
                return env.variables.get(id);
            }
            env = null;
        }
        return null;
    }


    public setFuncion(id: string, funcion: Funcion) {
    
        let env: Environment | null = this;

        if (env.funciones.has(id)) {
            console.log("ya existe una funcion con el mismo nombre");
            return;
        }else{

            this.funciones.set(id, funcion);
        }
       
    }


    public getFuncion(id: string): Funcion | undefined {
        let env: Environment | null = this;
        while (env != null) {
            if (env.funciones.has(id)) {
                return env.funciones.get(id);
            }
            env = env.anterior;
        }
        return undefined;
    }

    public getGlobal(): Environment {
        let env: Environment | null = this;
        while (env?.anterior != null) {
            env = env.anterior;
        }
        return env;
    }
}