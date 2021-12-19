export class  Nodo_Arbol{

    public id :number;
    public valor:string ;
   
    public hijos:Nodo_Arbol[];

    constructor(valor){
        this.id=0;
        this.valor=valor;
       // this.tipo=tipo;
        this.hijos=[];

    }
    getValor(){
        this.valor;
    }
    getTipo(){
        //this.tipo;
    }

    agregarHijo(hijo){
        this.hijos.push(hijo);
    }

}
