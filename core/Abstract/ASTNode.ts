abstract class ASTNode {
    public abstract interpretate(tree: Tree, table: any): any;

    public abstract getNode(): any;
}

export {ASTNode};