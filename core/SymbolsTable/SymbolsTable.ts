import { SymbolElement } from "./Symbol";
import { ExceptionObj } from "./Exception";
import { Object } from "../Abstract/Object";

class SymbolsTable {
    table: {[key: string]: any} = {}
    previous: any;
    ambit: any;
    constructor(ambit: any, previous: any = null) {
        this.previous = previous;
        this.ambit = ambit;
    }

    getAmbit() {
        return this.ambit;
    }

    setTable(symbol: SymbolElement) : any{
        if (symbol.id in this.table) {
            throw new ExceptionObj("Semantico", "El identificador " + symbol.id + 
            " ya ha sido declarado", symbol.row , symbol.column);
        } else {
            this.table[symbol.id] = symbol;
        }
    }

    getTable(id: string) : any{
        let Currtable = this;
        while (Currtable.previous != null) {
            if (id in Currtable.table) {
                return Currtable.table[id];
            }
            Currtable = Currtable.previous;
        }
        return null;
    }

    getTableGlb(symbol: SymbolElement) : any{
        let Currtable = this;
        while (Currtable.previous != null) {
            Currtable = Currtable.previous;
        }
        if (symbol.id in Currtable.table) {
            return Currtable.table[symbol.id];
        }
        return null;
    }

    getGlobal() : any{
        let Currtable = this;
        while (Currtable.previous != null) {
            Currtable = Currtable.previous;
        }
        return Currtable;
    }

    updateTable(symbol: SymbolElement) : any{
        let current = this;
        while (current.previous != null) {
            if (symbol.id in current.table) {
                current.table[symbol.id] = symbol;
                return null;
            } else{
                current = current.previous;
            }
        }
        this.table[symbol.id] = symbol
        return null;
    }
}

export { SymbolsTable };