import { SymbolsTable } from "./core/SymbolsTable/SymbolsTable";
import { Tree } from "./core/SymbolsTable/Tree";
var consola = "";
function analizarProyecto(instruccionesJava) {
    consola = "";
    ejecutarJava(instruccionesJava);
    return consola;
}
function ejecutarJava(instrucciones) {
    agregarLinea("Analizando Java");
    let TSGlobal = new SymbolsTable("Global");
    let ast = new Tree(instrucciones);
    instrucciones.forEach((element) => {
        element.setInstrucctions(ast);
    });
}
function agregarLinea(texto) {
    consola += "\n" + texto;
}
