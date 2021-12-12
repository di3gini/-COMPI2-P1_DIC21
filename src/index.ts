import * as parser from 'parser'

let code: string = 'int x = 0;'

const compileBtn = document.getElementById('runtimeBtn')
var data=""

function datos(){
    data=(document.getElementById('editorCodigo') as HTMLInputElement).value;
}


compileBtn?.addEventListener('click', () => {
  try {
    datos()
    console.log(data)
    parser.parse(data)
  } catch {
    console.log("Error al analizar")
  }
})

export default {}