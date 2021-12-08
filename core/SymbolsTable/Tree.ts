class Tree {

    instrucctions: any;
    functions: {[key: string]: any} = {};
    exceptions: any;
    output: string;
    globalTS: any;
    counter: number;
    symRepo: any;
    constructor(instrucctions:any) {
        this.instrucctions = instrucctions;
        this.exceptions = [];
        this.output = "";
        this.globalTS = null;
        this.counter = 0;
        this.symRepo = {};
    }

    addSymbolReport(symbol:any){
        this.symRepo.push(symbol);
    }

    getSymbolReport(){
        return this.symRepo;
    }

    getInstrucctions() {
        return this.instrucctions;
    }
    setInstrucctions(instrucctions:any) {
        this.instrucctions = instrucctions;
    }
    getFunctions() {
        return this.functions;
    }
    getFunction(name:string) {
        if (name in this.functions) {
            return this.functions[name];
        }
        return null;
    }

    addFunction(name:string, functionNode:any) {
        if (name in this.functions) {
            throw new Error("Function " + name + " already exists");
        }else{
            this.functions[name] = functionNode;
        }
    }

    getExceptions() {
        return this.exceptions;
    }
    getOutput() {
        return this.output;
    }
    setOutput(output:string) {
        this.output = output;
    }

    updateOutput(output:string) {
        this.output += output;
    }

    updateOutputLine(output:string) {
        this.output += output + "\n";
    }

    setGlobalTS(globalTS:any) {
        this.globalTS = globalTS;
    } 

    getGlobalTS() {
        return this.globalTS;
    }   

    getTextExceptions() {
        let text = "";
        for (let exception of this.exceptions) {
            text += exception.getText() + "\n";
        }
        return text;
    }
}