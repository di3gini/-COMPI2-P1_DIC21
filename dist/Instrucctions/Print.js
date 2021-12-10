import { ASTReportNode } from "../Abstract/ASTReportNode";
class Print extends ASTNode {
    constructor(expresion, row, colunm) {
        super();
        this.expresion = expresion;
        this.row = row;
        this.colunm = colunm;
    }
    interpretate(tree, table) {
        try {
            let res = "";
            let value = this.expresion.interpretate(tree, table);
            res = res + value.toString();
        }
        catch (e) {
            console.log(e);
        }
    }
    getNode() {
        let node = new ASTReportNode("PRINT");
        return node;
    }
}
