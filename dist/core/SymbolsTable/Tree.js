"use strict";
class Tree {
    constructor(instrucctions) {
        this.functions = {};
        this.instrucctions = instrucctions;
        this.exceptions = [];
        this.output = "";
        this.globalTS = null;
        this.counter = 0;
        this.symRepo = {};
    }
    addSymbolReport(symbol) {
        this.symRepo.push(symbol);
    }
    getSymbolReport() {
        return this.symRepo;
    }
    getInstrucctions() {
        return this.instrucctions;
    }
    setInstrucctions(instrucctions) {
        this.instrucctions = instrucctions;
    }
    getFunctions() {
        return this.functions;
    }
    getFunction(name) {
        if (name in this.functions) {
            return this.functions[name];
        }
        return null;
    }
    addFunction(name, functionNode) {
        if (name in this.functions) {
            throw new Error("Function " + name + " already exists");
        }
        else {
            this.functions[name] = functionNode;
        }
    }
    getExceptions() {
        return this.exceptions;
    }
    getOutput() {
        return this.output;
    }
    setOutput(output) {
        this.output = output;
    }
    updateOutput(output) {
        this.output += output;
    }
    updateOutputLine(output) {
        this.output += output + "\n";
    }
    setGlobalTS(globalTS) {
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
export {Tree};