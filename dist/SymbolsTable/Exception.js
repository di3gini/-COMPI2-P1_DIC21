import { Object } from '../Abstract/Object';
import { Type } from '../SymbolsTable/Type';
class ExceptionObj extends Object {
    constructor(errorType, description, row, column) {
        super();
        this.errorType = errorType;
        this.description = description;
        this.row = row;
        this.column = column;
        this.type = Type.ERROR;
    }
    toString() {
        return `${this.errorType} ${this.description}`;
    }
    getValue() {
        return this.errorType;
    }
    getType() {
        return this.type;
    }
}
export { ExceptionObj };
