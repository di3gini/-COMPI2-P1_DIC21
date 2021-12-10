import { Type } from "../SymbolsTable/Type";

abstract class Object {
    abstract toString(): string;

    abstract getValue(): any;

    abstract getType(): Type;
}

export { Object };