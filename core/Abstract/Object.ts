import { Type } from "../SymbolsTable/Type";

abstract class ObjectAbs {
    abstract toString(): string;

    abstract getValue(): any;

    abstract getType(): Type;
}

export { ObjectAbs };