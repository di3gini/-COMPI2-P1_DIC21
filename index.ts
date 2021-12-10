import { SymbolsTable } from "./core/SymbolsTable/SymbolsTable";
import { Tree } from "./core/SymbolsTable/Tree";


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

    instrucciones.forEach((element: Tree) => {
        element.setInstrucctions(ast)
    });
}

function agregarLinea(texto:string){
    consola+="\n"+texto;
}