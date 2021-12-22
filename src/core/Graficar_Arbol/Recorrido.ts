var pos = 0;
var cclass=0;
    
var id_n=1;
export class Recorrido_Arbol{

    constructor(){ 
    }
 
    recorrer(nodo)
    {
        var concatena;
        if(nodo.id==0){
            nodo.id=id_n;
            id_n++;
        }
        concatena = nodo.id + ' [label= "'+ nodo.valor +'"];';
            nodo.hijos.forEach(element => {
                concatena += nodo.id+'->'+ id_n +";";
                concatena+=this.recorrer(element);
            });
        return concatena;
    }
}

