import { SymbolsTable } from "./core/SymbolsTable/SymbolsTable";
import { Tree } from "./core/SymbolsTable/Tree";

let instruccionesQuetzal: any[];
var consola = "";

function analizarProyecto(instruccionesJava:any){
    consola = "";
    ejecutarJava(instruccionesJava);
    return consola;
}

function ejecutarJava(instrucciones:any){
    agregarLinea("Analizando Java");

    let TSGlobal: SymbolsTable= new SymbolsTable("Global");
    let ast: Tree = new Tree(instrucciones);

    instrucciones.forEach((element: any) => {
        element.ejecutar(instrucciones)
    });
}

function agregarLinea(texto:string){
    consola+="\n"+texto;
}