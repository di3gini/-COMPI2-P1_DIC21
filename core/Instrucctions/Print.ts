import { Object } from "../Abstract/Object";
import { ASTReportNode } from "../Abstract/ASTReportNode";
import { ExceptionObj } from "../SymbolsTable/Exception";
import { Type } from "../SymbolsTable/Type";
import { Primitive } from "../Objects/Primitive";
import { SymbolsTable } from "../SymbolsTable/SymbolsTable";
import { ASTNode } from "../Abstract/ASTNode";
import { Tree } from "../SymbolsTable/Tree";


class Print extends ASTNode{
    row: number;
    colunm: number;
    expresion: any;
    constructor(expresion: any, row: number, colunm: number){
        super();
        this.expresion = expresion;
        this.row = row;
        this.colunm = colunm;
    }

    interpretate(tree: Tree, table: SymbolsTable){
        try{
            let res = "";
            let value = this.expresion.interpretate(tree, table);
            res = res + value.toString();
        } catch(e){
            console.log(e);
        }
    }

    getNode(){
        let node = new ASTReportNode("PRINT");
        return node;
    }
}