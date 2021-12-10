
var EDITOR_CODIGO = "editorCodigo";
var EDITOR_CONSOLA = "editorConsola";

var editorCodigo = CodeMirror.fromTextArea(document.getElementById(EDITOR_CODIGO), {
    lineNumbers: true,
    firstLineNumber: 0,
    dragDrop: true
});

var editorConsola = CodeMirror.fromTextArea(document.getElementById(EDITOR_CONSOLA), {
    lineNumbers: true,
    firstLineNumber: 0,
    readOnly: 'nocursor'
});

$(document).ready(function () {
    editorCodigo.setSize(600, 400);
    editorConsola.setSize(1200, 400);
})

function limpiarEditor(tipo) {
    if (tipo === EDITOR_CODIGO) {
        editorCodigo.setValue("");
        editorCodigo.clearHistory();
        editorConsola.setValue("");
        editorConsola.clearHistory();
    }

}

function guardarArchivo(tipo) {
    var extension;
    var editorElegido;
    if (tipo === EDITOR_CODIGO) {
        extension = "txt";
        editorElegido = editorXML;
    }

    var textToWrite = editorElegido.getValue();
    var textToWrite = textToWrite.replace(/\n/g, "\r\n");

    var textFileAsBlob = new Blob([textToWrite], { type: 'text/plain' });
    var fileNameToSaveAs = tipo + "." + extension;

    var downloadLink = document.createElement("a");
    downloadLink.download = fileNameToSaveAs;
    downloadLink.innerHTML = "LINKTITLE";

    window.URL = window.URL || window.webkitURL;

    downloadLink.href = window.URL.createObjectURL(textFileAsBlob);

    downloadLink.onclick = destroyClickedElement;
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);
    downloadLink.click();
}

function destroyClickedElement(event) {
    document.body.removeChild(event.target);
}

function analizar(){
    intruccionesQuetzal = Quetzal.parse(editorCodigo.getValue());
    analizarProyecto(instruccionesQuetzal);
}