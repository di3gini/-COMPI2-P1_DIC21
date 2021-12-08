class ASTReportNode {
    constructor(value) {
        this.value = value;
        this.childrens = [];
    }
    setChildrens(childrens) {
        this.childrens = childrens;
    }
    addChildren(children) {
        this.childrens.push(children);
    }
    addChildrens(childrens) {
        for (let children of childrens) {
            this.childrens.push(children);
        }
    }
    addChildrenNode(children) {
        this.childrens.push(children);
    }
    addFirstChildren(childrenValue) {
        this.childrens.unshift(new ASTReportNode(childrenValue));
    }
    firstNodeChildren(children) {
        this.childrens.unshift(children);
    }
    getValue() {
        return this.value;
    }
    setValue(value) {
        this.value = value;
    }
    getChildrens() {
        return this.childrens;
    }
}
export { ASTReportNode };
