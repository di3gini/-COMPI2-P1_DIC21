/// <reference path="index.d.ts" />
import * as parser from 'Gramatica';

const { SymbolsTable } = require ( "./core/SymbolsTable/SymbolsTable" );
const { Tree } = require ( "./core/SymbolsTable/Tree" );

let instruccionesQuetzal: any[];
var consola = "";

const compileBtn = document.getElementById('btnEjecutar')
compileBtn?.addEventListener('click', () => {
  try {
    parser.parse("print(5+5);")
  } catch {
    console.log("Error al analizar")
  }
})

function analizarProyecto(instruccionesJava:any){
    consola = "";
    parser.parse(instruccionesJava);
    console.log("Analizis realizado");
    return consola;
}

function ejecutarJava(instrucciones:any){
    agregarLinea("Analizando Java");

    let TSGlobal: typeof SymbolsTable= new SymbolsTable("Global");
    let ast: typeof Tree = new Tree(instrucciones);

    instrucciones.forEach((element: any) => {
        element.ejecutar(instrucciones)
    });
}

function agregarLinea(texto:string){
    consola+="\n"+texto;
}

export default {}