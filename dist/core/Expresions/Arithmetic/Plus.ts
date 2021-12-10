import { ArithmethicOperator } from "../../SymbolsTable/Type";
import { SymbolsTable } from "../../SymbolsTable/SymbolsTable";
import { ExceptionObj } from "../../SymbolsTable/Exception";
import { ASTReportNode } from "../../Abstract/ASTReportNode";
import { Primitive } from "../../Objects/Primitive";
import { ASTNode } from "../../Abstract/ASTNode";
import { Tree } from "../../SymbolsTable/Tree";

class Plus extends ASTNode {

    operator: ArithmethicOperator;
    RightOp: any;
    LeftOp: any;
    row: number;
    column: number;

    constructor(left: ASTNode, right: ASTNode, row: number, column: number) {
        super();
        this.LeftOp = left;
        this.RightOp = right;
        this.row = row;
        this.column = column;
        this.operator = ArithmethicOperator.PLUS;
    }

    interpretate(tree: Tree, table: SymbolsTable) {
        let leftValue = this.LeftOp.interpretate(tree, table);
        let rightValue = this.RightOp.interpretate(tree, table);
        return leftValue + rightValue;
    }

    getNode(): ASTReportNode {
        let node = new ASTReportNode("ARITHMETIC");
        return node;
    }

}