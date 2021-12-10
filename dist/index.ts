import { Tree } from "./core/SymbolsTable/Tree";

var consola = "";

function analizarProyecto(instruccionesJava:any){
    consola = "";
    ejecutarJava(instruccionesJava);
    return consola;
}

function ejecutarJava(instrucciones:any){
    agregarLinea("Analizando Java");

    const ast: Tree = new Tree(instrucciones);

    instrucciones.forEach((element: Tree) => {
        element.setInstrucctions(ast)
    });
}

function agregarLinea(texto:string){
    consola+="\n"+texto;
}