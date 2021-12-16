import {ObjectAbs} from '../Abstract/Object';
import {Type} from '../SymbolsTable/Type';

class ExceptionObj extends Object {
    errorType: any;
    description: any;
    row: number;
    column: number;
    type: Type;
    constructor(errorType: any, description: any, row: number, column: number) {
        super();
        this.errorType = errorType;
        this.description = description;
        this.row = row;
        this.column = column;
        this.type = Type.ERROR;
    }

    toString(): string {
        return `${this.errorType} ${this.description}`;
    }

    getValue(): any {
        return this.errorType;
    }

    getType(): Type {     
        return this.type;
    }   

}

export {ExceptionObj};