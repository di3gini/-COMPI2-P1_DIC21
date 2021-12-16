import { ObjectAbs } from "../Abstract/Object";
import { Type } from "../SymbolsTable/Type";

class Primitive extends ObjectAbs {
    value: any;
    type: Type;
    
    constructor(type: Type, value: any) {
        super();
        this.value = value;
        this.type = type;
    }
    getType() {
        return this.type;
    }
    toString() {
        return this.value.toString();
    }
    getValue() {
        return this.value;
    }
}

export { Primitive };
