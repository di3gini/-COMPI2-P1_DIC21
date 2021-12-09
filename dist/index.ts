var consola = "";

function analizarProyecto(instruccionesJava:any){
    consola = "";
    ejecutarJava(instruccionesJava);
    return consola;
}

function ejecutarJava(instrucciones:any){
    agregarLinea("Analizando Java");

    const entornoGlobal:Entorno = new Entorno(null);
    const ast:AST = new AST(instrucciones);

    instrucciones.forEach((element:Instruccion) => {
        element.ejecutar(entornoGlobal,ast);
    });
}

function agregarLinea(texto:string){
    consola+="\n"+texto;
}