class ASTReportNode{
    value: any;
    childrens: any;
    constructor(value:any){
        this.value = value;
        this.childrens = [];
    }
    setChildrens(childrens:any){
        this.childrens = childrens;
    }
    addChildren(children:any){
        this.childrens.push(children);
    }
    addChildrens(childrens:any){
        for (let children of childrens){
            this.childrens.push(children);
        }
    }

    addChildrenNode(children:any){
        this.childrens.push(children);
    }

    addFirstChildren(childrenValue:any){
        this.childrens.unshift(new ASTReportNode(childrenValue));
    }

    firstNodeChildren(children:any){
        this.childrens.unshift(children);
    }

    getValue(){
        return this.value;
    }
    
    setValue(value:any){
        this.value = value;
    }

    getChildrens(){
        return this.childrens;
    }


}

export { ASTReportNode };