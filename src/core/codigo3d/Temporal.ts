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
    return this.Encabezado + this.Temporales + this.Main + this.MetodosNativos();
  }

  public MetodosNativos(): string {

    return `\n\nvoid ImprimirCadena(){

    //OBTENGO LA  CADENA A IMPRIMIR
      t1 = P + 1 ; //Me posicion Relativamente en el  Stack
      t2 = Stack[(int)t1] ; //Obtengo la ref de la cadena
      t3 = 0 - 1 ; //Para validar el fin de la cadena
      
    
      L1:
        t4 = Heap[(int)t2];
        if(t4==t3)goto L2;
        printf(\"%c\", (char)t4);
        t2 = t2 +1;
        goto L1;
      L2:
        printf(\"\\n\");
        return;
}



void ConcatenarCadenas(){
 
    //OBTENGO LA PRIMERA CADENA 
    t5 = P + 1 ; //Me posicion Relativamente en el  Stack
    t6 = Stack[(int)t5] ; //Obtengo la ref de la cadena
    t7 = 0 - 1 ; //Para validar el fin de la cadena
  
    L1:
        t8 = Heap[(int)t6];
        if(t8==t7)goto L2;
        Heap[(int)H]=t8;
        H=H+1;
        t6 = t6 +1;
        goto L1;
    
  
    L2:
        //OBTENGO LA SEGUNDA CADENA 
        t9 = P + 2 ; //Me posicion Relativamente en el  Stack
        t10 = Stack[(int)t9] ; //Obtengo la ref de la cadena
        t11 = 0 - 1 ; //Para validar el fin de la cadena
    
    L3:
        t12 = Heap[(int)t10];
        if(t12==t11)goto L4;
        Heap[(int)H]=t12;
        H=H+1;
        t10 = t10 +1;
        goto L3;
    
    L4:
        Heap[(int)H]=-1;
        H=H+1;
        return;
}





void NumericoACadena(){
    t13 = P +1;
    t14 = Stack[(int)t13];
  
  
  //------------------Primero obtengo la longitud del numero------------
  
    //Verifico si es negativo----SI: L1----NO: L2------
    if(t14 < 0) goto L1;
    goto L2;
  
  
    L1:
      //Escribo el '-'
      t15 = H;
      Heap[(int)t15] = 45;
      H = H + 1;
      //Convierto el numero a positivo
      t16 = 0 - 1;
      t14 = t14 * t16;
  
  
  
  
  
  
    L2: 
      //Longitud Inicial del numero
      t17 = 0;
      //Parte entera 
      t18= (int)t14;
      //Parte Decimal
      t19 = t14 - t18;
  
      //Parte Entera o decimal Auxiliar (en este punto toma la entera)
      t20 = (int)t18;
  
  
  
  
  
  
    //Si la parte entera es 0 
    if(t18==0)goto L3;
    goto L4;
  
    L3:
      t17 = t17 +1;
      goto L6;
  
    
    //Recorro parte entera si y solo si la parte entera no es 0
    L4:
      if( t20 > 0) goto L5;
      goto L6;
    L5:
      t21 = t20 / 10;
      t20 = (int)t21;
      t17 = t17 + 1;
      goto L4;
    L6:
      if(t19!=0)goto L7;
      goto L8;
  
    //Recorro la parte decimal
    L7:
      //Espacio para el punto
      t17 = t17 + 1;
      //Parte Entera o decimal Auxiliar (en este punto toma la decimal)
      t20 = t19 * 1000000;
      t19 = 0;
      goto L4;
  
    L8:
  
  
    //ESCRIBIR EL NUMERO EN LA HEAP 
      t30 = t17;
  
      t17 = t17 - 1;
  
    
    
      //Parte Decimal
      t22 = t14 - t18;
      t22 = t22 * 1000000;
      
   
      if((int)t22==0)goto L12;
      goto L9;
  
  
    L9:
      if( t22 > 0) goto L10;
      goto L11;
    L10:
      t23 = t22 / 10;
      t24 = fmod(t22,10);
      t22 = (int)t23;
      t25 = H + t17;
      Heap[(int)t25]= 48 + (int)t24;
      t17 = t17 - 1;
      goto L9;
  
    L11:
      t26 = H +t17;
      Heap[(int)t26] = 46;
      t17 = t17 - 1;
   
  
    L12:
      
      if(t18==0)goto L13;
      goto L14;
  
    L13:
      t26 = H +t17;
      Heap[(int)t26] = 48;
      t17 = t17 - 1;
  
    L14:
      if( t18 > 0) goto L15;
      goto L16;
    L15:
      t27 = t18 / 10;
      t28 = fmod(t18,10);
      t18 = (int)t27;
      t29 = H + t17;
      Heap[(int)t29]= 48 + (int)t28;
      t17 = t17 - 1;
      goto L14;
  
  
    L16:
  
      H = H + t30;
      Heap[(int)H] = -1;
      H = H + 1;
   
      return;
  
  
}

void TrueOrFalse(){


  t31 = P + 1;
  t32 = Stack[(int)t31];

  if(t32 == 1)goto L1;
  goto L2;

  L1:
    Heap[(int)H]= 116;
    H = H +1;
    Heap[(int)H]= 114;
    H = H +1;
    Heap[(int)H]= 117;
    H = H +1;
    Heap[(int)H]= 101;
    H = H +1;
    Heap[(int)H]= -1;
    H = H +1;
    goto L3;
  L2:
    Heap[(int)H]= 102;
    H = H +1;
    Heap[(int)H]= 97;
    H = H +1;
    Heap[(int)H]= 108;
    H = H +1;
    Heap[(int)H]= 115;
    H = H +1;
    Heap[(int)H]= 101;
    H = H +1;
    Heap[(int)H]= -1;
    H = H +1;

  L3:
    return;
}


void Potencia(){
  
  //BASE
  t33 = P + 0;
  t34 = t33 + 1;
  t35 = Stack[(int)t34];

  //POTENCIA
  t36 = P + 0;
  t37 = t36 + 2;
  t38 = Stack[(int)t37];


  t39 = 1;//resultado inicial si es 0
  t40 = 1;//contador

  if(t38 == 0)goto L2;
 
  L3:
  if(t40 <=t38)goto L1;
  goto L2;

  L1:
    t39 = t39 * t35;
  
    t40 = t40 + 1;
    goto L3;
  L2:
    t36 = P + 0;
    Stack[(int)t36] = t39;
    return;
}
`;
  }



}