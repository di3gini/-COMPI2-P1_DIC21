export class EtiquetaFV {

    EtiquetaFalsa: string;
    EtiquetaVerdadera: string;
    EsNot: boolean = false;

    constructor(verdadera: string, falsa: string, Not: boolean) {

        this.EtiquetaFalsa = falsa;
        this.EtiquetaVerdadera = verdadera;
        this.EsNot = Not;
    }

    public getEtiquetaFalsa(): string {
        return this.EtiquetaFalsa;
    }

    public getEtiquetaVerdadera(): string {

        return this.EtiquetaVerdadera;
    }

    public NOT(): boolean {

        return this.EsNot;
    }


}