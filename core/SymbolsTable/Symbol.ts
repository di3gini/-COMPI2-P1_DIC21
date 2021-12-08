class SymbolElement {

    public id:string;
    public type:any;
    public row:number;
    public column:number;
    public value:any;
    public atributes:any;
    
    public getId():string{
        return this.id;
    }
    constructor(id:string, row:number, column:number, value:any){
        this.id = id;
        this.row = row;
        this.column = column;
        this.value = value;
        this.atributes = {};
    }

    //Getters
    public getRow():number{
        return this.row;
    }
    public getColumn():number{
        return this.column;
    }
    public getValue():any{
        return this.value;
    }
    public getAtributes():any{
        return this.atributes;
    }
    public getType():any{
        return this.type;
    }
    
    //Setters
    public setRow(row:number){
        this.row = row;
    }
    public setColumn(column:number){
        this.column = column;
    }
    public setValue(value:any){
        this.value = value;
    }
    public setAtributes(atributes:any){
        this.atributes = atributes;
    }
    public setType(type:any){
        this.type = type;
    }
}

export {SymbolElement};