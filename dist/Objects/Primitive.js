class Primitive extends Object {
    constructor(type, value) {
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
