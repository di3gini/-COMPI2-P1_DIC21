import { ArithmethicOperator } from "../../SymbolsTable/Type";
import { ASTReportNode } from "../../Abstract/ASTReportNode";
class Plus extends ASTNode {
    constructor(left, right, row, column) {
        super();
        this.LeftOp = left;
        this.RightOp = right;
        this.row = row;
        this.column = column;
        this.operator = ArithmethicOperator.PLUS;
    }
    interpretate(tree, table) {
        let leftValue = this.LeftOp.interpretate(tree, table);
        let rightValue = this.RightOp.interpretate(tree, table);
        return leftValue + rightValue;
    }
    getNode() {
        let node = new ASTReportNode("ARITHMETIC");
        return node;
    }
}
