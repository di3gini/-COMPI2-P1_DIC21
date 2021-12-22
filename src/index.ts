import * as parser from 'parser'

//CLASES DE EJECUCION
import { Instruccion } from './core/Abstract/Instruccion';
import { Environment } from './core/Simbolo/Entorno';
import { Funcion } from './core/Instruccion/Funcion';



const compileBtn = document.getElementById('runtimeBtn')
let data=""

function datos(){
    data=(document.getElementById('editorCodigo') as HTMLInputElement).value;
}

let CodigoEntrada = "";
let CodigoSalida = "";
let Codigo3D="";
let Salida = "";
let ErroresTraduccion = "";
let ErroresEjecucion = "";
let ContErroresTra = 0;
let ContErroresEj = 0;
let ContGTST = 0;
let ContGTSE = 0;
let SIM = [];
let GraficarTSS = [];
let ASTE: any  = "";

compileBtn?.addEventListener('click', () => {
  localStorage.setItem("consola", "");
    localStorage.setItem("ErroresEjecucion", "");
    localStorage.setItem("TS", JSON.stringify(GraficarTSS));
    localStorage.setItem("ASTE", "");

    try {
      datos();
      const arbolEjecucion = parser.parse(data);
      ASTE = arbolEjecucion;

      //Guardando FUnciones
      const env = new Environment(null);
      for (const instr of arbolEjecucion) {
        try {
          if (instr instanceof Funcion) {

            env.setFuncion(instr.id, instr);
            //instr.execute(env);
          }
        } catch (error) {

        }
      }

      //console.log(env);



      //Ejecucion del Arbol
      //const env = new Environment(null);
      for (const instr of arbolEjecucion) {
        try {
          if (instr instanceof Instruccion) {
            instr.execute(env);
          }
        } catch (error) {

        }
      }
    }
    catch (error) {
      console.log(error);
    }

    let terminal = localStorage.getItem("consola");
    Salida = terminal;
    console.log(Salida);
    let errores = localStorage.getItem("ErroresEjecucion");
    console.log(errores);

})

export default {}