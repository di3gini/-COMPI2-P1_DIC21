export class Temporal {

  private ContadorTemporal: number;
  private Encabezado: string;
  private Code: string;
  private Temporales: string;
  private Main: string;
  private Globales: string;

  constructor() {
    this.ContadorTemporal = 40;
    this.Encabezado = "";
    this.Temporales = "";
    this.Code = "";
    this.Main = "";
    this.Globales = "";

  }

  public GenerarEncabezado(): void {

    this.Encabezado = `#include <stdio.h>\n#include <math.h>\n\ndouble Heap[16384];\ndouble Stack[16394];\ndouble P;\ndouble H;\ndouble `;

  }

  public GenerarTemporales(): void {

    let separador = 0;
    let i = 0;
    for (i = 0; i <= this.ContadorTemporal; i++) {

      if (separador < 15) {
        this.Temporales = this.Temporales + "t" + i + ", ";
        separador++;
      } else {
        this.Temporales = this.Temporales + "t" + i + ";\n";
        this.Temporales = this.Temporales + "double ";
        separador = 0;
      }
    }

    this.Temporales = this.Temporales + "t" + i + ";\n";

  }



  public GenerarMain() {
    this.Main = `\n\nvoid ConcatenarCadenas();\nvoid ImprimirCadena();\nvoid NumericoACadena();\nvoid TrueOrFalse();\nvoid Potencia();\n\n\nint main(void) {\n ${this.Globales} return 0;\n}`;
  }





  public NuevoTemporal(): string {
    this.ContadorTemporal++;

    return 't' + this.ContadorTemporal;
  }


  public CantidadTemporales(): number {
    return this.ContadorTemporal;
  }


  public TemporalActual() {
    return 't' + this.ContadorTemporal;
  }


  public TemporalAnterior() {
    return 't' + (this.ContadorTemporal - 1);
  }


  public EscribirC3D(Codigo: string, ambito: boolean) {

    if (ambito) {
      this.Globales = this.Globales + Codigo + "\n";
      console.log("esta en escribir c3d");
    } else {
      this.Code = this.Code + Codigo + "\n";
    }
  }

  public EscribirC3DSinSalto(Codigo: string, ambito: boolean) {

    if (ambito) {
      this.Globales = this.Globales + Codigo ;
    } else {
      this.Code = this.Code + Codigo ;
    }
  }

  public GenerarC3D(): string {
    this.GenerarEncabezado();
    this.GenerarTemporales();
    this.GenerarMain();
    return this.Encabezado + this.Temporales + this.Main;
  }
}