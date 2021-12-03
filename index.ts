
var consola = "";

function analizarProyecto(instruccionesXML:any, instruccionesXPath:any){
    consola = "";
    ejecutarXML(instruccionesXML);
    return consola;
}

function ejecutarXML(instrucciones:any){
    agregarLinea("Analizando XML");

    const entornoGlobal:Entorno = new Entorno(null);
    const ast:AST = new AST(instrucciones);

    instrucciones.forEach((element:Instruccion) => {
        element.ejecutar(entornoGlobal,ast);
    });
}

function agregarLinea(texto:string){
    consola+="\n"+texto;
}

/*ejecutarXML(`
    print(1);
    print(true);
    print("hola mundo");
`);*/