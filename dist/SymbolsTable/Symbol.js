class SymbolElement {
    constructor(id, row, column, value) {
        this.id = id;
        this.row = row;
        this.column = column;
        this.value = value;
        this.atributes = {};
    }
    getId() {
        return this.id;
    }
    //Getters
    getRow() {
        return this.row;
    }
    getColumn() {
        return this.column;
    }
    getValue() {
        return this.value;
    }
    getAtributes() {
        return this.atributes;
    }
    getType() {
        return this.type;
    }
    //Setters
    setRow(row) {
        this.row = row;
    }
    setColumn(column) {
        this.column = column;
    }
    setValue(value) {
        this.value = value;
    }
    setAtributes(atributes) {
        this.atributes = atributes;
    }
    setType(type) {
        this.type = type;
    }
}
export { SymbolElement };
