

define(function(require){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,17],$V1=[1,18],$V2=[1,20],$V3=[1,21],$V4=[1,22],$V5=[1,24],$V6=[1,25],$V7=[1,26],$V8=[1,27],$V9=[1,28],$Va=[1,34],$Vb=[1,29],$Vc=[1,30],$Vd=[1,31],$Ve=[1,32],$Vf=[1,33],$Vg=[2,5,20,25,27,31,45,48,51,53,54,55,56,57,66,68,69,70,71,75],$Vh=[1,42],$Vi=[1,45],$Vj=[1,50],$Vk=[1,51],$Vl=[1,57],$Vm=[1,65],$Vn=[1,74],$Vo=[1,63],$Vp=[1,64],$Vq=[1,67],$Vr=[1,68],$Vs=[1,69],$Vt=[1,70],$Vu=[1,71],$Vv=[1,72],$Vw=[1,85],$Vx=[24,29],$Vy=[23,24,29,32,34,39,42,59,60,76,77,78,79,80,81,82,83,84,85,86,87,88,90],$Vz=[1,124],$VA=[1,111],$VB=[1,110],$VC=[1,112],$VD=[1,113],$VE=[1,114],$VF=[1,115],$VG=[1,116],$VH=[1,117],$VI=[1,118],$VJ=[1,119],$VK=[1,120],$VL=[1,121],$VM=[1,122],$VN=[1,123],$VO=[2,115],$VP=[1,128],$VQ=[1,129],$VR=[1,138],$VS=[1,134],$VT=[1,135],$VU=[1,136],$VV=[1,137],$VW=[32,49],$VX=[23,29],$VY=[1,155],$VZ=[2,5,20,25,27,31,45,47,48,51,53,54,55,56,57,66,68,69,70,71,75],$V_=[23,24,29,34,41,49,51],$V$=[1,198],$V01=[23,24,29,32,34,42,59,60,76,77],$V11=[23,24,29,32,34,42,59,60,76,77,78,79],$V21=[23,24,29,32,34,42,59,60,76,77,78,79,81,82,83,84,85,86,87,88,90],$V31=[23,24,29,32,34,42,59,60,76,77,78,79,85,86,87,88,90],$V41=[1,223],$V51=[24,29,34,41],$V61=[1,234],$V71=[1,235],$V81=[29,51],$V91=[1,247],$Va1=[51,53,54],$Vb1=[24,29,42],$Vc1=[29,42];
var parser = {trace: function trace () { },
yy: {},
symbols_: {"error":2,"Init":3,"INSTRUCCIONES":4,"EOF":5,"INSTRUCCION":6,"IMPRIMIR":7,"FUNCION":8,"DECLARACION":9,"ASIGNACION":10,"IF":11,"SWITCH":12,"WHILE":13,"DO_WHILE":14,"FOR":15,"TRANSFERENCIA":16,"TYPE":17,"GRAFICAR_TS":18,"LLAMADA":19,"rimprimir":20,"parIz":21,"EXPRESION":22,"parDer":23,"pcoma":24,"let":25,"VARIABLE_LET":26,"const":27,"VARIABLE_CONST":28,"coma":29,"LETS":30,"Identificador":31,"dospuntos":32,"TIPOS":33,"igual":34,"DIMENSION_ARRAY":35,"ASIGNACION_ARRAY":36,"CONSTA":37,"AUMENTO":38,"punto":39,"push":40,"llaveizq":41,"llaveder":42,"TAM_ARRAY":43,"LISTADO_ARRAY":44,"if":45,"CUERPO_SENTENCIAS":46,"else":47,"switch":48,"corcheIz":49,"CUERPO_SWITCH":50,"corcheDer":51,"CASO":52,"case":53,"default":54,"while":55,"do":56,"for":57,"CONDICION_FOR":58,"in":59,"of":60,"NOMBRE_FUNCION":61,"PARAMETROS":62,"CUERPO_FUNCIONES":63,"LISTADO_PARAMETROS":64,"PARAMETRO":65,"fun":66,"PARAMETROS_ENTRADA":67,"break":68,"continue":69,"return":70,"type":71,"CUERPO_TYPE":72,"LISTADO_VALORES":73,"CLAVE_VALOR":74,"graficarts":75,"menos":76,"mas":77,"por":78,"div":79,"potencia":80,"mayor":81,"menor":82,"mayorigual":83,"menorigual":84,"igualacion":85,"diferente":86,"and":87,"or":88,"not":89,"interrogacion":90,"len":91,"pop":92,"LITERAL":93,"decimal":94,"numerico":95,"cadena":96,"verdadero":97,"falso":98,"nulo":99,"aumento":100,"decremento":101,"string":102,"bolean":103,"number":104,"void":105,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",20:"rimprimir",21:"parIz",23:"parDer",24:"pcoma",25:"let",27:"const",29:"coma",31:"Identificador",32:"dospuntos",34:"igual",39:"punto",40:"push",41:"llaveizq",42:"llaveder",45:"if",47:"else",48:"switch",49:"corcheIz",51:"corcheDer",53:"case",54:"default",55:"while",56:"do",57:"for",59:"in",60:"of",66:"fun",68:"break",69:"continue",70:"return",71:"type",75:"graficarts",76:"menos",77:"mas",78:"por",79:"div",80:"potencia",81:"mayor",82:"menor",83:"mayorigual",84:"menorigual",85:"igualacion",86:"diferente",87:"and",88:"or",89:"not",90:"interrogacion",91:"len",92:"pop",94:"decimal",95:"numerico",96:"cadena",97:"verdadero",98:"falso",99:"nulo",100:"aumento",101:"decremento",102:"string",103:"bolean",104:"number",105:"void"},
productions_: [0,[3,2],[4,2],[4,1],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[7,5],[9,3],[9,3],[26,3],[26,1],[30,3],[30,5],[30,1],[30,3],[30,4],[30,6],[28,3],[28,1],[37,5],[37,3],[10,4],[10,2],[10,7],[10,7],[35,2],[35,1],[43,2],[36,3],[36,2],[44,3],[44,3],[44,1],[44,1],[11,5],[11,7],[11,7],[12,7],[50,2],[50,1],[52,4],[52,3],[13,5],[14,7],[15,5],[58,8],[58,7],[58,4],[58,3],[58,4],[58,3],[8,3],[8,5],[62,3],[62,2],[63,3],[63,2],[64,3],[64,1],[65,3],[61,2],[19,4],[19,5],[67,3],[67,1],[16,2],[16,2],[16,3],[16,2],[17,5],[72,3],[72,2],[73,3],[73,1],[74,3],[18,4],[22,2],[22,3],[22,3],[22,3],[22,3],[22,3],[22,3],[22,3],[22,3],[22,3],[22,3],[22,3],[22,3],[22,3],[22,2],[22,5],[22,3],[22,5],[22,3],[22,1],[93,1],[93,1],[93,1],[93,1],[93,1],[93,1],[93,1],[93,1],[93,3],[93,4],[93,4],[38,2],[38,2],[33,1],[33,1],[33,1],[33,1],[33,1],[46,3],[46,2]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:

        localStorage.setItem("ErroresEjecucion", LISTADOERRORES);
        return $$[$0-1];
    
break;
case 2:

                $$[$0-1].push($$[$0]);
                this.$= $$[$0-1];
            
break;
case 3: case 22:

                this.$=[$$[$0]];
            
break;
case 4: case 5: case 6:
 this.$=$$[$0]; 
break;
case 7: case 8: case 9: case 10: case 11: case 12: case 13: case 14: case 15: case 16: case 72: case 85: case 114: case 125:
this.$=$$[$0];
break;
case 17:
 
                        if(this._$.first_column == 0){
                            LISTADOERRORES= LISTADOERRORES +"   "+ ERRS[0];
                            ERRS=[];   
                            this.$="\n";
                        }else{

                            ERRS.push("Error Sintactico: \""+ yytext + "\" en la Linea: "+ this._$.first_line + " y Columna: "+ this._$.first_column +"\n");
                        }
                    
break;
case 18:
 
                this.$ = new Print($$[$0-2], _$[$0-4].first_line, _$[$0-4].first_column,[$$[$0-4],$$[$0-3],$$[$0-2],$$[$0-1],$$[$0]]);
            
break;
case 19: case 20:
this.$=new ListadoDeclaracion($$[$0-1],this._$.first_line ,this._$.first_column);
break;
case 21:

                $$[$0-2].push($$[$0]);
                this.$=$$[$0-2];
            
break;
case 23:

            this.$=new  Declaration($$[$0-2], new Literal("null",this._$.first_line ,this._$.first_column,3), this._$.first_line ,this._$.first_column);
        
break;
case 24:

            this.$=new  Declaration($$[$0-4],$$[$0], this._$.first_line ,this._$.first_column,$$[$0-2]);
        
break;
case 25:

            this.$=new  Declaration($$[$0],new Literal("null",this._$.first_line ,this._$.first_column,3), this._$.first_line ,this._$.first_column);
        
break;
case 26:

            this.$=new  Declaration($$[$0-2],$$[$0], this._$.first_line ,this._$.first_column);
        
break;
case 27:

            this.$= new DeclaracionArray($$[$0-3],$$[$0-1],$$[$0],[],this._$.first_line ,this._$.first_column);
        
break;
case 28:

      //id,tipo,dimesion[],valores[],linea,columna      
            this.$= new DeclaracionArray($$[$0-5],$$[$0-3],$$[$0-2],$$[$0],this._$.first_line ,this._$.first_column);
        
break;
case 29: case 42: case 43:

                    $$[$0-2].push($$[$0]);
                    this.$=$$[$0-2];
                
break;
case 30: case 51:

                    this.$=[$$[$0]];
                
break;
case 31:

                this.$=new  Declaration($$[$0-4],$$[$0], this._$.first_line ,this._$.first_column);
            
break;
case 32:

                this.$=new  Declaration($$[$0-2],$$[$0], this._$.first_line ,this._$.first_column);
            
break;
case 33:

                console.log("asignacion");
                this.$=new Asignacion($$[$0-3],$$[$0-1], _$[$0-3].first_line, _$[$0-3].first_column);

            
break;
case 34:

                this.$=$$[$0-1];
            
break;
case 35:

                this.$=new Push($$[$0-6],$$[$0-2],_$[$0-6].first_line, _$[$0-6].first_column);
            
break;
case 36:

                console.log("nueva produccion");
                this.$=new AsignacionArray($$[$0-6],$$[$0-4],$$[$0-1],_$[$0-6].first_line, _$[$0-6].first_column);
            
break;
case 37:

                        $$[$0-1].push($$[$0]);
                        this.$=$$[$0-1];
                    
break;
case 38: case 44: case 45: case 76:
this.$=[$$[$0]];
break;
case 39: case 41: case 123:
this.$=0;
break;
case 40: case 65:
this.$=$$[$0-1];
break;
case 46:
 
        this.$= new If($$[$0-2],$$[$0],null, _$[$0-4].first_line, _$[$0-4].first_column);
    
break;
case 47: case 48:

        this.$= new If($$[$0-4],$$[$0-2],$$[$0], _$[$0-6].first_line, _$[$0-6].first_column);
    
break;
case 49:

            this.$=new Switch($$[$0-4],$$[$0-1],_$[$0-6].first_line, _$[$0-6].first_column);
        
break;
case 50:

                    $$[$0-1].push($$[$0]);
                    this.$=$$[$0-1];
                
break;
case 52:

            this.$= new Caso($$[$0-2],$$[$0],CaseOption.NORMAL,_$[$0-3].first_line, _$[$0-3].first_column);
        
break;
case 53:

            this.$= new Caso(new Literal("true",this._$.first_line ,this._$.first_column,2),$$[$0],CaseOption.DEFAULT,_$[$0-2].first_line, _$[$0-2].first_column);
        
break;
case 54:

            this.$ = new While($$[$0-2], $$[$0], _$[$0-4].first_line, _$[$0-4].first_column);
        
break;
case 55:

            this.$ = new DoWhile($$[$0-2], $$[$0-5], _$[$0-6].first_line, _$[$0-6].first_column);
        
break;
case 56:

        this.$= new For($$[$0-2], $$[$0], _$[$0-4].first_line, _$[$0-4].first_column);
    
break;
case 57:

                    this.$=new CondicionFor($$[$0-6],$$[$0-4],$$[$0-2],$$[$0],ForOption.NORMALD,_$[$0-7].first_line, _$[$0-7].first_column);
                
break;
case 58:

                    this.$=new CondicionFor($$[$0-5],$$[$0-3],$$[$0-1],$$[$01],ForOption.NORMAL,_$[$0-6].first_line, _$[$0-6].first_column);
                
break;
case 59: case 61:
this.$=$$[$0-3]+" "+$$[$0-2]+" "+$$[$0-1]+" "+$$[$0];
break;
case 60: case 62:
this.$=$$[$0-2]+" "+$$[$0-1]+" "+$$[$0];
break;
case 63:
      
                this.$= new Funcion($$[$0-2],$$[$0-1],$$[$0],8,_$[$0-2].first_line, _$[$0-2].first_column);
            
break;
case 64:

                this.$= new Funcion($$[$0-4],$$[$0-3],$$[$0],$$[$0-1],_$[$0-4].first_line, _$[$0-4].first_column);
            
break;
case 66:
this.$=[];
break;
case 67:

                        this.$=new CuerpoFuncion($$[$0-1],this._$.first_line ,this._$.first_column);
                    
break;
case 68: case 127:
this.$=null;
break;
case 69: case 75:

                        $$[$0-2].push($$[$0]);
                        this.$=$$[$0-2];
                    
break;
case 70:

                        this.$=[$$[$0]];
                    
break;
case 71:

            this.$=this.$=new  Declaration($$[$0-2], new Literal("null",this._$.first_line ,this._$.first_column,$$[$0]), this._$.first_line ,this._$.first_column);
        
break;
case 73:

                this.$=new Llamada($$[$0-3],[],_$[$0-3].first_line, _$[$0-3].first_column);
            
break;
case 74:

                this.$=new Llamada($$[$0-4],$$[$0-2],_$[$0-4].first_line, _$[$0-4].first_column);
            
break;
case 77:
this.$=new Break(_$[$0-1].first_line, _$[$0-1].first_column);
break;
case 78:
this.$=new Continue(_$[$0-1].first_line, _$[$0-1].first_column);
break;
case 79:
this.$=new Return(_$[$0-2].first_line, _$[$0-2].first_column,$$[$0-1]);
break;
case 80:
this.$=new Return(_$[$0-1].first_line, _$[$0-1].first_column,null);
break;
case 81:
this.$=$$[$0-4]+" "+$$[$0-3]+$$[$0-2]+$$[$0-1]+"\n";
break;
case 82:
this.$=$$[$0-2]+"\n"+$$[$0-1]+"\n"+$$[$0];
break;
case 83:
this.$=$$[$0-1]+"\n\n"+$$[$0];
break;
case 84:
this.$=$$[$0-2]+$$[$0-1]+"\n"+$$[$0];
break;
case 86:
this.$=$$[$0-2]+$$[$0-1]+$$[$0];
break;
case 87:

                this.$ = new GraficarTS(this._$.first_line ,this._$.first_column);
            
break;
case 88:

                this.$=new Arithmetic($$[$0],$$[$0],ArithmeticOption.UNARIO,this._$.first_line ,this._$.first_column);
            
break;
case 89:

                this.$=new Arithmetic($$[$0-2],$$[$0],ArithmeticOption.PLUS,this._$.first_line ,this._$.first_column);
            
break;
case 90:

                this.$=new Arithmetic($$[$0-2],$$[$0],ArithmeticOption.MINUS,this._$.first_line ,this._$.first_column);
            
break;
case 91:

                this.$=new Arithmetic($$[$0-2],$$[$0],ArithmeticOption.TIMES,this._$.first_line ,this._$.first_column);
            
break;
case 92:

                this.$=new Arithmetic($$[$0-2],$$[$0],ArithmeticOption.DIV,this._$.first_line ,this._$.first_column);
            
break;
case 93:

                this.$=new Arithmetic($$[$0-2],$$[$0],ArithmeticOption.POT,this._$.first_line ,this._$.first_column);
            
break;
case 94:

                 this.$=new Relational($$[$0-2],$$[$0],RelationalOption.GREATER,this._$.first_line ,this._$.first_column);
            
break;
case 95:

                 this.$=new Relational($$[$0-2],$$[$0],RelationalOption.LESS,this._$.first_line ,this._$.first_column);
            
break;
case 96:

                 this.$=new Relational($$[$0-2],$$[$0],RelationalOption.GREATEROREQUAL,this._$.first_line ,this._$.first_column);
            
break;
case 97:

                 this.$=new Relational($$[$0-2],$$[$0],RelationalOption.LESSOREQUAL,this._$.first_line ,this._$.first_column);
            
break;
case 98:

                 this.$=new Relational($$[$0-2],$$[$0],RelationalOption.EQUAL,this._$.first_line ,this._$.first_column);
            
break;
case 99:

                 this.$=new Relational($$[$0-2],$$[$0],RelationalOption.NOTEQUAL,this._$.first_line ,this._$.first_column);
            
break;
case 100:

                 this.$=new Logico($$[$0-2],$$[$0],LogicalOption.AND,this._$.first_line ,this._$.first_column);
            
break;
case 101:

                 this.$=new Logico($$[$0-2],$$[$0],LogicalOption.OR,this._$.first_line ,this._$.first_column);
            
break;
case 102:

                 this.$=new Logico($$[$0],$$[$0],LogicalOption.NOT,this._$.first_line ,this._$.first_column);
            
break;
case 103:

                 this.$= new Ternario($$[$0-4],$$[$0-2],$$[$0],this._$.first_line ,this._$.first_column);
            
break;
case 104:
this.$=new Length($$[$0-2],this._$.first_line ,this._$.first_column);
break;
case 105:
this.$=new Pop($$[$0-4],this._$.first_line ,this._$.first_column);
break;
case 106:
this.$ =$$[$0-1];
break;
case 107:
 this.$=$$[$0];
break;
case 108: case 109:
this.$=new Literal($$[$0],this._$.first_line ,this._$.first_column,0);
break;
case 110:
this.$=new Literal($$[$0].replace(/\"/g,""),this._$.first_line ,this._$.first_column,1);
break;
case 111: case 112:
this.$=new Literal($$[$0],this._$.first_line ,this._$.first_column,2);
break;
case 113:
this.$=new Literal($$[$0],this._$.first_line ,this._$.first_column,3);
break;
case 115:
this.$=new Access($$[$0], _$[$0].first_line, _$[$0].first_column);
break;
case 116:

                this.$=new Llamada($$[$0-2],[],_$[$0-2].first_line, _$[$0-2].first_column);
            
break;
case 117:

                this.$=new Llamada($$[$0-3],$$[$0-1],_$[$0-3].first_line, _$[$0-3].first_column);
            
break;
case 118:

                this.$= new AccesoArray($$[$0-3],$$[$0-1],_$[$0-3].first_line, _$[$0-3].first_column);
          
break;
case 119:

            this.$=new Aumento($$[$0-1],AumentoOption.PLUSPLUS,this._$.first_line ,this._$.first_column);
        
break;
case 120:

            this.$=new Aumento($$[$0-1],AumentoOption.LESSLESS,this._$.first_line ,this._$.first_column);
        
break;
case 121:
this.$=1;
break;
case 122:
this.$=2;
break;
case 124:
this.$=8;
break;
case 126:

                        this.$=new ListadoSentencias($$[$0-1],this._$.first_line ,this._$.first_column);
                    
break;
}
},
table: [{2:$V0,3:1,4:2,6:3,7:4,8:5,9:6,10:7,11:8,12:9,13:10,14:11,15:12,16:13,17:14,18:15,19:16,20:$V1,25:$V2,27:$V3,31:$V4,38:23,45:$V5,48:$V6,55:$V7,56:$V8,57:$V9,61:19,66:$Va,68:$Vb,69:$Vc,70:$Vd,71:$Ve,75:$Vf},{1:[3]},{2:$V0,5:[1,35],6:36,7:4,8:5,9:6,10:7,11:8,12:9,13:10,14:11,15:12,16:13,17:14,18:15,19:16,20:$V1,25:$V2,27:$V3,31:$V4,38:23,45:$V5,48:$V6,55:$V7,56:$V8,57:$V9,61:19,66:$Va,68:$Vb,69:$Vc,70:$Vd,71:$Ve,75:$Vf},o($Vg,[2,3]),o($Vg,[2,4]),o($Vg,[2,5]),o($Vg,[2,6]),o($Vg,[2,7]),o($Vg,[2,8]),o($Vg,[2,9]),o($Vg,[2,10]),o($Vg,[2,11]),o($Vg,[2,12]),o($Vg,[2,13]),o($Vg,[2,14]),o($Vg,[2,15]),o($Vg,[2,16]),o($Vg,[2,17]),{21:[1,37]},{21:[1,39],62:38},{26:40,30:41,31:$Vh},{28:43,31:$Vi,37:44},{21:[1,49],34:[1,46],39:[1,47],41:[1,48],100:$Vj,101:$Vk},{24:[1,52]},{21:[1,53]},{21:[1,54]},{21:[1,55]},{46:56,49:$Vl},{21:[1,58]},{24:[1,59]},{24:[1,60]},{21:$Vm,22:61,24:[1,62],31:$Vn,38:73,76:$Vo,89:$Vp,93:66,94:$Vq,95:$Vr,96:$Vs,97:$Vt,98:$Vu,99:$Vv},{31:[1,75]},{21:[1,76]},{31:[1,77]},{1:[2,1]},o($Vg,[2,2]),{21:$Vm,22:78,31:$Vn,38:73,76:$Vo,89:$Vp,93:66,94:$Vq,95:$Vr,96:$Vs,97:$Vt,98:$Vu,99:$Vv},{32:[1,80],49:[1,81],63:79},{23:[1,83],31:$Vw,64:82,65:84},{24:[1,86],29:[1,87]},o($Vx,[2,22]),o($Vx,[2,25],{32:[1,88],34:[1,89]}),{24:[1,90],29:[1,91]},o($Vx,[2,30]),{32:[1,92],34:[1,93]},{21:$Vm,22:94,31:$Vn,38:73,76:$Vo,89:$Vp,93:66,94:$Vq,95:$Vr,96:$Vs,97:$Vt,98:$Vu,99:$Vv},{40:[1,95]},{21:$Vm,22:96,31:$Vn,38:73,76:$Vo,89:$Vp,93:66,94:$Vq,95:$Vr,96:$Vs,97:$Vt,98:$Vu,99:$Vv},{21:$Vm,22:99,23:[1,97],31:$Vn,38:73,67:98,76:$Vo,89:$Vp,93:66,94:$Vq,95:$Vr,96:$Vs,97:$Vt,98:$Vu,99:$Vv},o($Vy,[2,119]),o($Vy,[2,120]),o($Vg,[2,34]),{21:$Vm,22:100,31:$Vn,38:73,76:$Vo,89:$Vp,93:66,94:$Vq,95:$Vr,96:$Vs,97:$Vt,98:$Vu,99:$Vv},{21:$Vm,22:101,31:$Vn,38:73,76:$Vo,89:$Vp,93:66,94:$Vq,95:$Vr,96:$Vs,97:$Vt,98:$Vu,99:$Vv},{21:$Vm,22:102,31:$Vn,38:73,76:$Vo,89:$Vp,93:66,94:$Vq,95:$Vr,96:$Vs,97:$Vt,98:$Vu,99:$Vv},{55:[1,103]},{2:$V0,4:104,6:3,7:4,8:5,9:6,10:7,11:8,12:9,13:10,14:11,15:12,16:13,17:14,18:15,19:16,20:$V1,25:$V2,27:$V3,31:$V4,38:23,45:$V5,48:$V6,51:[1,105],55:$V7,56:$V8,57:$V9,61:19,66:$Va,68:$Vb,69:$Vc,70:$Vd,71:$Ve,75:$Vf},{21:$Vm,22:108,25:[1,107],31:$Vn,38:73,58:106,76:$Vo,89:$Vp,93:66,94:$Vq,95:$Vr,96:$Vs,97:$Vt,98:$Vu,99:$Vv},o($Vg,[2,77]),o($Vg,[2,78]),{24:[1,109],39:$Vz,76:$VA,77:$VB,78:$VC,79:$VD,80:$VE,81:$VF,82:$VG,83:$VH,84:$VI,85:$VJ,86:$VK,87:$VL,88:$VM,90:$VN},o($Vg,[2,80]),{21:$Vm,22:125,31:$Vn,38:73,76:$Vo,89:$Vp,93:66,94:$Vq,95:$Vr,96:$Vs,97:$Vt,98:$Vu,99:$Vv},{21:$Vm,22:126,31:$Vn,38:73,76:$Vo,89:$Vp,93:66,94:$Vq,95:$Vr,96:$Vs,97:$Vt,98:$Vu,99:$Vv},{21:$Vm,22:127,31:$Vn,38:73,76:$Vo,89:$Vp,93:66,94:$Vq,95:$Vr,96:$Vs,97:$Vt,98:$Vu,99:$Vv},o($Vy,[2,107]),o($Vy,[2,108]),o($Vy,[2,109]),o($Vy,[2,110]),o($Vy,[2,111]),o($Vy,[2,112]),o($Vy,[2,113]),o($Vy,[2,114]),o($Vy,$VO,{21:$VP,41:$VQ,100:$Vj,101:$Vk}),{34:[1,130]},{23:[1,131]},{21:[2,72]},{23:[1,132],39:$Vz,76:$VA,77:$VB,78:$VC,79:$VD,80:$VE,81:$VF,82:$VG,83:$VH,84:$VI,85:$VJ,86:$VK,87:$VL,88:$VM,90:$VN},o($Vg,[2,63]),{31:$VR,33:133,102:$VS,103:$VT,104:$VU,105:$VV},{2:$V0,4:139,6:3,7:4,8:5,9:6,10:7,11:8,12:9,13:10,14:11,15:12,16:13,17:14,18:15,19:16,20:$V1,25:$V2,27:$V3,31:$V4,38:23,45:$V5,48:$V6,51:[1,140],55:$V7,56:$V8,57:$V9,61:19,66:$Va,68:$Vb,69:$Vc,70:$Vd,71:$Ve,75:$Vf},{23:[1,141],29:[1,142]},o($VW,[2,66]),o($VX,[2,70]),{32:[1,143]},o($Vg,[2,19]),{30:144,31:$Vh},{31:$VR,33:145,102:$VS,103:$VT,104:$VU,105:$VV},{21:$Vm,22:146,31:$Vn,38:73,76:$Vo,89:$Vp,93:66,94:$Vq,95:$Vr,96:$Vs,97:$Vt,98:$Vu,99:$Vv},o($Vg,[2,20]),{31:$Vi,37:147},{31:$VR,33:148,102:$VS,103:$VT,104:$VU,105:$VV},{21:$Vm,22:149,31:$Vn,38:73,76:$Vo,89:$Vp,93:66,94:$Vq,95:$Vr,96:$Vs,97:$Vt,98:$Vu,99:$Vv},{24:[1,150],39:$Vz,76:$VA,77:$VB,78:$VC,79:$VD,80:$VE,81:$VF,82:$VG,83:$VH,84:$VI,85:$VJ,86:$VK,87:$VL,88:$VM,90:$VN},{21:[1,151]},{39:$Vz,42:[1,152],76:$VA,77:$VB,78:$VC,79:$VD,80:$VE,81:$VF,82:$VG,83:$VH,84:$VI,85:$VJ,86:$VK,87:$VL,88:$VM,90:$VN},{24:[1,153]},{23:[1,154],29:$VY},o($VX,[2,76],{39:$Vz,76:$VA,77:$VB,78:$VC,79:$VD,80:$VE,81:$VF,82:$VG,83:$VH,84:$VI,85:$VJ,86:$VK,87:$VL,88:$VM,90:$VN}),{23:[1,156],39:$Vz,76:$VA,77:$VB,78:$VC,79:$VD,80:$VE,81:$VF,82:$VG,83:$VH,84:$VI,85:$VJ,86:$VK,87:$VL,88:$VM,90:$VN},{23:[1,157],39:$Vz,76:$VA,77:$VB,78:$VC,79:$VD,80:$VE,81:$VF,82:$VG,83:$VH,84:$VI,85:$VJ,86:$VK,87:$VL,88:$VM,90:$VN},{23:[1,158],39:$Vz,76:$VA,77:$VB,78:$VC,79:$VD,80:$VE,81:$VF,82:$VG,83:$VH,84:$VI,85:$VJ,86:$VK,87:$VL,88:$VM,90:$VN},{21:[1,159]},{2:$V0,6:36,7:4,8:5,9:6,10:7,11:8,12:9,13:10,14:11,15:12,16:13,17:14,18:15,19:16,20:$V1,25:$V2,27:$V3,31:$V4,38:23,45:$V5,48:$V6,51:[1,160],55:$V7,56:$V8,57:$V9,61:19,66:$Va,68:$Vb,69:$Vc,70:$Vd,71:$Ve,75:$Vf},o($VZ,[2,127]),{23:[1,161]},{21:$Vm,22:163,31:[1,162],38:73,76:$Vo,89:$Vp,93:66,94:$Vq,95:$Vr,96:$Vs,97:$Vt,98:$Vu,99:$Vv},{34:[1,164],39:$Vz,59:[1,165],60:[1,166],76:$VA,77:$VB,78:$VC,79:$VD,80:$VE,81:$VF,82:$VG,83:$VH,84:$VI,85:$VJ,86:$VK,87:$VL,88:$VM,90:$VN},o($Vg,[2,79]),{21:$Vm,22:167,31:$Vn,38:73,76:$Vo,89:$Vp,93:66,94:$Vq,95:$Vr,96:$Vs,97:$Vt,98:$Vu,99:$Vv},{21:$Vm,22:168,31:$Vn,38:73,76:$Vo,89:$Vp,93:66,94:$Vq,95:$Vr,96:$Vs,97:$Vt,98:$Vu,99:$Vv},{21:$Vm,22:169,31:$Vn,38:73,76:$Vo,89:$Vp,93:66,94:$Vq,95:$Vr,96:$Vs,97:$Vt,98:$Vu,99:$Vv},{21:$Vm,22:170,31:$Vn,38:73,76:$Vo,89:$Vp,93:66,94:$Vq,95:$Vr,96:$Vs,97:$Vt,98:$Vu,99:$Vv},{21:$Vm,22:171,31:$Vn,38:73,76:$Vo,89:$Vp,93:66,94:$Vq,95:$Vr,96:$Vs,97:$Vt,98:$Vu,99:$Vv},{21:$Vm,22:172,31:$Vn,38:73,76:$Vo,89:$Vp,93:66,94:$Vq,95:$Vr,96:$Vs,97:$Vt,98:$Vu,99:$Vv},{21:$Vm,22:173,31:$Vn,38:73,76:$Vo,89:$Vp,93:66,94:$Vq,95:$Vr,96:$Vs,97:$Vt,98:$Vu,99:$Vv},{21:$Vm,22:174,31:$Vn,38:73,76:$Vo,89:$Vp,93:66,94:$Vq,95:$Vr,96:$Vs,97:$Vt,98:$Vu,99:$Vv},{21:$Vm,22:175,31:$Vn,38:73,76:$Vo,89:$Vp,93:66,94:$Vq,95:$Vr,96:$Vs,97:$Vt,98:$Vu,99:$Vv},{21:$Vm,22:176,31:$Vn,38:73,76:$Vo,89:$Vp,93:66,94:$Vq,95:$Vr,96:$Vs,97:$Vt,98:$Vu,99:$Vv},{21:$Vm,22:177,31:$Vn,38:73,76:$Vo,89:$Vp,93:66,94:$Vq,95:$Vr,96:$Vs,97:$Vt,98:$Vu,99:$Vv},{21:$Vm,22:178,31:$Vn,38:73,76:$Vo,89:$Vp,93:66,94:$Vq,95:$Vr,96:$Vs,97:$Vt,98:$Vu,99:$Vv},{21:$Vm,22:179,31:$Vn,38:73,76:$Vo,89:$Vp,93:66,94:$Vq,95:$Vr,96:$Vs,97:$Vt,98:$Vu,99:$Vv},{21:$Vm,22:180,31:$Vn,38:73,76:$Vo,89:$Vp,93:66,94:$Vq,95:$Vr,96:$Vs,97:$Vt,98:$Vu,99:$Vv},{91:[1,181],92:[1,182]},o($Vy,[2,88]),o($Vy,[2,102]),{23:[1,183],39:$Vz,76:$VA,77:$VB,78:$VC,79:$VD,80:$VE,81:$VF,82:$VG,83:$VH,84:$VI,85:$VJ,86:$VK,87:$VL,88:$VM,90:$VN},{21:$Vm,22:99,23:[1,184],31:$Vn,38:73,67:185,76:$Vo,89:$Vp,93:66,94:$Vq,95:$Vr,96:$Vs,97:$Vt,98:$Vu,99:$Vv},{21:$Vm,22:186,31:$Vn,38:73,76:$Vo,89:$Vp,93:66,94:$Vq,95:$Vr,96:$Vs,97:$Vt,98:$Vu,99:$Vv},{49:[1,188],72:187},{24:[1,189]},{24:[1,190]},{46:191,49:$Vl},o($V_,[2,121]),o($V_,[2,122]),o($V_,[2,123]),o($V_,[2,124]),o($V_,[2,125]),{2:$V0,6:36,7:4,8:5,9:6,10:7,11:8,12:9,13:10,14:11,15:12,16:13,17:14,18:15,19:16,20:$V1,25:$V2,27:$V3,31:$V4,38:23,45:$V5,48:$V6,51:[1,192],55:$V7,56:$V8,57:$V9,61:19,66:$Va,68:$Vb,69:$Vc,70:$Vd,71:$Ve,75:$Vf},o($Vg,[2,68]),o($VW,[2,65]),{31:$Vw,65:193},{31:$VR,33:194,102:$VS,103:$VT,104:$VU,105:$VV},o($Vx,[2,21]),o($Vx,[2,23],{35:196,43:197,34:[1,195],41:$V$}),o($Vx,[2,26],{39:$Vz,76:$VA,77:$VB,78:$VC,79:$VD,80:$VE,81:$VF,82:$VG,83:$VH,84:$VI,85:$VJ,86:$VK,87:$VL,88:$VM,90:$VN}),o($Vx,[2,29]),{34:[1,199]},o($Vx,[2,32],{39:$Vz,76:$VA,77:$VB,78:$VC,79:$VD,80:$VE,81:$VF,82:$VG,83:$VH,84:$VI,85:$VJ,86:$VK,87:$VL,88:$VM,90:$VN}),o($Vg,[2,33]),{21:$Vm,22:200,31:$Vn,38:73,76:$Vo,89:$Vp,93:66,94:$Vq,95:$Vr,96:$Vs,97:$Vt,98:$Vu,99:$Vv},{34:[1,201]},o($Vg,[2,73]),{24:[1,202]},{21:$Vm,22:203,31:$Vn,38:73,76:$Vo,89:$Vp,93:66,94:$Vq,95:$Vr,96:$Vs,97:$Vt,98:$Vu,99:$Vv},{46:204,49:$Vl},{49:[1,205]},{46:206,49:$Vl},{21:$Vm,22:207,31:$Vn,38:73,76:$Vo,89:$Vp,93:66,94:$Vq,95:$Vr,96:$Vs,97:$Vt,98:$Vu,99:$Vv},o($VZ,[2,126]),{46:208,49:$Vl},o([39,59,60,76,77,78,79,80,81,82,83,84,85,86,87,88,90],$VO,{21:$VP,34:[1,209],41:$VQ,100:$Vj,101:$Vk}),{39:$Vz,59:[1,210],60:[1,211],76:$VA,77:$VB,78:$VC,79:$VD,80:$VE,81:$VF,82:$VG,83:$VH,84:$VI,85:$VJ,86:$VK,87:$VL,88:$VM,90:$VN},{21:$Vm,22:212,31:$Vn,38:73,76:$Vo,89:$Vp,93:66,94:$Vq,95:$Vr,96:$Vs,97:$Vt,98:$Vu,99:$Vv},{21:$Vm,22:213,31:$Vn,38:73,76:$Vo,89:$Vp,93:66,94:$Vq,95:$Vr,96:$Vs,97:$Vt,98:$Vu,99:$Vv},{21:$Vm,22:214,31:$Vn,38:73,76:$Vo,89:$Vp,93:66,94:$Vq,95:$Vr,96:$Vs,97:$Vt,98:$Vu,99:$Vv},o($V01,[2,89],{39:$Vz,78:$VC,79:$VD,80:$VE,81:$VF,82:$VG,83:$VH,84:$VI,85:$VJ,86:$VK,87:$VL,88:$VM,90:$VN}),o($V01,[2,90],{39:$Vz,78:$VC,79:$VD,80:$VE,81:$VF,82:$VG,83:$VH,84:$VI,85:$VJ,86:$VK,87:$VL,88:$VM,90:$VN}),o($V11,[2,91],{39:$Vz,80:$VE,81:$VF,82:$VG,83:$VH,84:$VI,85:$VJ,86:$VK,87:$VL,88:$VM,90:$VN}),o($V11,[2,92],{39:$Vz,80:$VE,81:$VF,82:$VG,83:$VH,84:$VI,85:$VJ,86:$VK,87:$VL,88:$VM,90:$VN}),o([23,24,29,32,34,42,59,60,76,77,78,79,80,81,82,83,84,85,86,87,88,90],[2,93],{39:$Vz}),o($V21,[2,94],{39:$Vz,80:$VE}),o($V21,[2,95],{39:$Vz,80:$VE}),o($V21,[2,96],{39:$Vz,80:$VE}),o($V21,[2,97],{39:$Vz,80:$VE}),o($V31,[2,98],{39:$Vz,80:$VE,81:$VF,82:$VG,83:$VH,84:$VI}),o($V31,[2,99],{39:$Vz,80:$VE,81:$VF,82:$VG,83:$VH,84:$VI}),o([23,24,29,32,34,42,59,60,76,77,78,79,87,88],[2,100],{39:$Vz,80:$VE,81:$VF,82:$VG,83:$VH,84:$VI,85:$VJ,86:$VK,90:$VN}),o([23,24,29,32,34,42,59,60,76,77,78,79,88],[2,101],{39:$Vz,80:$VE,81:$VF,82:$VG,83:$VH,84:$VI,85:$VJ,86:$VK,87:$VL,90:$VN}),{32:[1,215],39:$Vz,76:$VA,77:$VB,78:$VC,79:$VD,80:$VE,81:$VF,82:$VG,83:$VH,84:$VI,85:$VJ,86:$VK,87:$VL,88:$VM,90:$VN},o($Vy,[2,104]),{21:[1,216]},o($Vy,[2,106]),o($Vy,[2,116]),{23:[1,217],29:$VY},{39:$Vz,42:[1,218],76:$VA,77:$VB,78:$VC,79:$VD,80:$VE,81:$VF,82:$VG,83:$VH,84:$VI,85:$VJ,86:$VK,87:$VL,88:$VM,90:$VN},{24:[1,219]},{31:$V41,51:[1,221],73:220,74:222},o($Vg,[2,87]),o($Vg,[2,18]),o($Vg,[2,64]),o($Vg,[2,67]),o($VX,[2,69]),o($VX,[2,71]),{21:$Vm,22:224,31:$Vn,38:73,76:$Vo,89:$Vp,93:66,94:$Vq,95:$Vr,96:$Vs,97:$Vt,98:$Vu,99:$Vv},o($Vx,[2,27],{43:226,34:[1,225],41:$V$}),o($V51,[2,38]),{42:[1,227]},{21:$Vm,22:228,31:$Vn,38:73,76:$Vo,89:$Vp,93:66,94:$Vq,95:$Vr,96:$Vs,97:$Vt,98:$Vu,99:$Vv},{23:[1,229],39:$Vz,76:$VA,77:$VB,78:$VC,79:$VD,80:$VE,81:$VF,82:$VG,83:$VH,84:$VI,85:$VJ,86:$VK,87:$VL,88:$VM,90:$VN},{21:$Vm,22:230,31:$Vn,38:73,76:$Vo,89:$Vp,93:66,94:$Vq,95:$Vr,96:$Vs,97:$Vt,98:$Vu,99:$Vv},o($Vg,[2,74]),o($VX,[2,75],{39:$Vz,76:$VA,77:$VB,78:$VC,79:$VD,80:$VE,81:$VF,82:$VG,83:$VH,84:$VI,85:$VJ,86:$VK,87:$VL,88:$VM,90:$VN}),o($Vg,[2,46],{47:[1,231]}),{50:232,52:233,53:$V61,54:$V71},o($Vg,[2,54]),{23:[1,236],39:$Vz,76:$VA,77:$VB,78:$VC,79:$VD,80:$VE,81:$VF,82:$VG,83:$VH,84:$VI,85:$VJ,86:$VK,87:$VL,88:$VM,90:$VN},o($Vg,[2,56]),{21:$Vm,22:237,31:$Vn,38:73,76:$Vo,89:$Vp,93:66,94:$Vq,95:$Vr,96:$Vs,97:$Vt,98:$Vu,99:$Vv},{21:$Vm,22:238,31:$Vn,38:73,76:$Vo,89:$Vp,93:66,94:$Vq,95:$Vr,96:$Vs,97:$Vt,98:$Vu,99:$Vv},{21:$Vm,22:239,31:$Vn,38:73,76:$Vo,89:$Vp,93:66,94:$Vq,95:$Vr,96:$Vs,97:$Vt,98:$Vu,99:$Vv},{24:[1,240],39:$Vz,76:$VA,77:$VB,78:$VC,79:$VD,80:$VE,81:$VF,82:$VG,83:$VH,84:$VI,85:$VJ,86:$VK,87:$VL,88:$VM,90:$VN},{23:[2,60],39:$Vz,76:$VA,77:$VB,78:$VC,79:$VD,80:$VE,81:$VF,82:$VG,83:$VH,84:$VI,85:$VJ,86:$VK,87:$VL,88:$VM,90:$VN},{23:[2,62],39:$Vz,76:$VA,77:$VB,78:$VC,79:$VD,80:$VE,81:$VF,82:$VG,83:$VH,84:$VI,85:$VJ,86:$VK,87:$VL,88:$VM,90:$VN},{21:$Vm,22:241,31:$Vn,38:73,76:$Vo,89:$Vp,93:66,94:$Vq,95:$Vr,96:$Vs,97:$Vt,98:$Vu,99:$Vv},{23:[1,242]},o($Vy,[2,117]),o($Vy,[2,118]),o($Vg,[2,81]),{29:[1,244],51:[1,243]},{24:[2,83]},o($V81,[2,85]),{32:[1,245]},o($Vx,[2,24],{39:$Vz,76:$VA,77:$VB,78:$VC,79:$VD,80:$VE,81:$VF,82:$VG,83:$VH,84:$VI,85:$VJ,86:$VK,87:$VL,88:$VM,90:$VN}),{36:246,41:$V91},o($V51,[2,37]),o($V51,[2,39]),o($Vx,[2,31],{39:$Vz,76:$VA,77:$VB,78:$VC,79:$VD,80:$VE,81:$VF,82:$VG,83:$VH,84:$VI,85:$VJ,86:$VK,87:$VL,88:$VM,90:$VN}),{24:[1,248]},{24:[1,249],39:$Vz,76:$VA,77:$VB,78:$VC,79:$VD,80:$VE,81:$VF,82:$VG,83:$VH,84:$VI,85:$VJ,86:$VK,87:$VL,88:$VM,90:$VN},{11:250,45:$V5,46:251,49:$Vl},{51:[1,252],52:253,53:$V61,54:$V71},o($Va1,[2,51]),{21:$Vm,22:254,31:$Vn,38:73,76:$Vo,89:$Vp,93:66,94:$Vq,95:$Vr,96:$Vs,97:$Vt,98:$Vu,99:$Vv},{32:[1,255]},{24:[1,256]},{24:[1,257],39:$Vz,76:$VA,77:$VB,78:$VC,79:$VD,80:$VE,81:$VF,82:$VG,83:$VH,84:$VI,85:$VJ,86:$VK,87:$VL,88:$VM,90:$VN},{23:[2,59],39:$Vz,76:$VA,77:$VB,78:$VC,79:$VD,80:$VE,81:$VF,82:$VG,83:$VH,84:$VI,85:$VJ,86:$VK,87:$VL,88:$VM,90:$VN},{23:[2,61],39:$Vz,76:$VA,77:$VB,78:$VC,79:$VD,80:$VE,81:$VF,82:$VG,83:$VH,84:$VI,85:$VJ,86:$VK,87:$VL,88:$VM,90:$VN},{21:$Vm,22:258,31:$Vn,38:73,76:$Vo,89:$Vp,93:66,94:$Vq,95:$Vr,96:$Vs,97:$Vt,98:$Vu,99:$Vv},o($V31,[2,103],{39:$Vz,80:$VE,81:$VF,82:$VG,83:$VH,84:$VI}),o($Vy,[2,105]),{24:[2,82]},{31:$V41,74:259},{31:$VR,33:260,102:$VS,103:$VT,104:$VU,105:$VV},o($Vx,[2,28]),{21:$Vm,22:264,31:$Vn,36:263,38:73,41:$V91,42:[1,262],44:261,76:$Vo,89:$Vp,93:66,94:$Vq,95:$Vr,96:$Vs,97:$Vt,98:$Vu,99:$Vv},o($Vg,[2,35]),o($Vg,[2,36]),o($Vg,[2,47]),o($Vg,[2,48]),o($Vg,[2,49]),o($Va1,[2,50]),{32:[1,265],39:$Vz,76:$VA,77:$VB,78:$VC,79:$VD,80:$VE,81:$VF,82:$VG,83:$VH,84:$VI,85:$VJ,86:$VK,87:$VL,88:$VM,90:$VN},{2:$V0,4:266,6:3,7:4,8:5,9:6,10:7,11:8,12:9,13:10,14:11,15:12,16:13,17:14,18:15,19:16,20:$V1,25:$V2,27:$V3,31:$V4,38:23,45:$V5,48:$V6,55:$V7,56:$V8,57:$V9,61:19,66:$Va,68:$Vb,69:$Vc,70:$Vd,71:$Ve,75:$Vf},o($Vg,[2,55]),{21:$Vm,22:267,31:$Vn,38:73,76:$Vo,89:$Vp,93:66,94:$Vq,95:$Vr,96:$Vs,97:$Vt,98:$Vu,99:$Vv},{24:[1,268],39:$Vz,76:$VA,77:$VB,78:$VC,79:$VD,80:$VE,81:$VF,82:$VG,83:$VH,84:$VI,85:$VJ,86:$VK,87:$VL,88:$VM,90:$VN},o($V81,[2,84]),o($V81,[2,86]),{29:[1,270],42:[1,269]},o($Vb1,[2,41]),o($Vc1,[2,44]),o($Vc1,[2,45],{39:$Vz,76:$VA,77:$VB,78:$VC,79:$VD,80:$VE,81:$VF,82:$VG,83:$VH,84:$VI,85:$VJ,86:$VK,87:$VL,88:$VM,90:$VN}),{2:$V0,4:271,6:3,7:4,8:5,9:6,10:7,11:8,12:9,13:10,14:11,15:12,16:13,17:14,18:15,19:16,20:$V1,25:$V2,27:$V3,31:$V4,38:23,45:$V5,48:$V6,55:$V7,56:$V8,57:$V9,61:19,66:$Va,68:$Vb,69:$Vc,70:$Vd,71:$Ve,75:$Vf},o($Va1,[2,53],{7:4,8:5,9:6,10:7,11:8,12:9,13:10,14:11,15:12,16:13,17:14,18:15,19:16,61:19,38:23,6:36,2:$V0,20:$V1,25:$V2,27:$V3,31:$V4,45:$V5,48:$V6,55:$V7,56:$V8,57:$V9,66:$Va,68:$Vb,69:$Vc,70:$Vd,71:$Ve,75:$Vf}),{24:[1,272],39:$Vz,76:$VA,77:$VB,78:$VC,79:$VD,80:$VE,81:$VF,82:$VG,83:$VH,84:$VI,85:$VJ,86:$VK,87:$VL,88:$VM,90:$VN},{21:$Vm,22:273,31:$Vn,38:73,76:$Vo,89:$Vp,93:66,94:$Vq,95:$Vr,96:$Vs,97:$Vt,98:$Vu,99:$Vv},o($Vb1,[2,40]),{21:$Vm,22:275,31:$Vn,36:274,38:73,41:$V91,76:$Vo,89:$Vp,93:66,94:$Vq,95:$Vr,96:$Vs,97:$Vt,98:$Vu,99:$Vv},o($Va1,[2,52],{7:4,8:5,9:6,10:7,11:8,12:9,13:10,14:11,15:12,16:13,17:14,18:15,19:16,61:19,38:23,6:36,2:$V0,20:$V1,25:$V2,27:$V3,31:$V4,45:$V5,48:$V6,55:$V7,56:$V8,57:$V9,66:$Va,68:$Vb,69:$Vc,70:$Vd,71:$Ve,75:$Vf}),{21:$Vm,22:276,31:$Vn,38:73,76:$Vo,89:$Vp,93:66,94:$Vq,95:$Vr,96:$Vs,97:$Vt,98:$Vu,99:$Vv},{23:[2,58],39:$Vz,76:$VA,77:$VB,78:$VC,79:$VD,80:$VE,81:$VF,82:$VG,83:$VH,84:$VI,85:$VJ,86:$VK,87:$VL,88:$VM,90:$VN},o($Vc1,[2,42]),o($Vc1,[2,43],{39:$Vz,76:$VA,77:$VB,78:$VC,79:$VD,80:$VE,81:$VF,82:$VG,83:$VH,84:$VI,85:$VJ,86:$VK,87:$VL,88:$VM,90:$VN}),{23:[2,57],39:$Vz,76:$VA,77:$VB,78:$VC,79:$VD,80:$VE,81:$VF,82:$VG,83:$VH,84:$VI,85:$VJ,86:$VK,87:$VL,88:$VM,90:$VN}],
defaultActions: {35:[2,1],77:[2,72],221:[2,83],243:[2,82]},
parseError: function parseError (str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        var error = new Error(str);
        error.hash = hash;
        throw error;
    }
},
parse: function parse (input) {
    var self = this,
        stack = [0],
        tstack = [], // token stack
        vstack = [null], // semantic value stack
        lstack = [], // location stack
        table = this.table,
        yytext = '',
        yylineno = 0,
        yyleng = 0,
        recovering = 0,
        TERROR = 2,
        EOF = 1;

    var args = lstack.slice.call(arguments, 1);

    //this.reductionCount = this.shiftCount = 0;

    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    // copy state
    for (var k in this.yy) {
      if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
        sharedState.yy[k] = this.yy[k];
      }
    }

    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);

    var ranges = lexer.options && lexer.options.ranges;

    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }

    function popStack (n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }

_token_stack:
    var lex = function () {
        var token;
        token = lexer.lex() || EOF;
        // if token isn't its numeric value, convert
        if (typeof token !== 'number') {
            token = self.symbols_[token] || token;
        }
        return token;
    }

    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        // retreive state number from top of stack
        state = stack[stack.length - 1];

        // use default actions if available
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            // read action for current state and first input
            action = table[state] && table[state][symbol];
        }

_handle_error:
        // handle parse error
        if (typeof action === 'undefined' || !action.length || !action[0]) {
            var error_rule_depth;
            var errStr = '';

            // Return the rule stack depth where the nearest error rule can be found.
            // Return FALSE when no error recovery rule was found.
            function locateNearestErrorRecoveryRule(state) {
                var stack_probe = stack.length - 1;
                var depth = 0;

                // try to recover from error
                for(;;) {
                    // check for error recovery rule in this state
                    if ((TERROR.toString()) in table[state]) {
                        return depth;
                    }
                    if (state === 0 || stack_probe < 2) {
                        return false; // No suitable error recovery rule available.
                    }
                    stack_probe -= 2; // popStack(1): [symbol, action]
                    state = stack[stack_probe];
                    ++depth;
                }
            }

            if (!recovering) {
                // first see if there's any chance at hitting an error recovery rule:
                error_rule_depth = locateNearestErrorRecoveryRule(state);

                // Report error
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push("'"+this.terminals_[p]+"'");
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line '+(yylineno+1)+":\n"+lexer.showPosition()+"\nExpecting "+expected.join(', ') + ", got '" + (this.terminals_[symbol] || symbol)+ "'";
                } else {
                    errStr = 'Parse error on line '+(yylineno+1)+": Unexpected " +
                                  (symbol == EOF ? "end of input" :
                                              ("'"+(this.terminals_[symbol] || symbol)+"'"));
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected,
                    recoverable: (error_rule_depth !== false)
                });
            } else if (preErrorSymbol !== EOF) {
                error_rule_depth = locateNearestErrorRecoveryRule(state);
            }

            // just recovered from another error
            if (recovering == 3) {
                if (symbol === EOF || preErrorSymbol === EOF) {
                    throw new Error(errStr || 'Parsing halted while starting to recover from another error.');
                }

                // discard current lookahead and grab another
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                symbol = lex();
            }

            // try to recover from error
            if (error_rule_depth === false) {
                throw new Error(errStr || 'Parsing halted. No suitable error recovery rule available.');
            }
            popStack(error_rule_depth);

            preErrorSymbol = (symbol == TERROR ? null : symbol); // save the lookahead token
            symbol = TERROR;         // insert generic error symbol as new lookahead
            state = stack[stack.length-1];
            action = table[state] && table[state][TERROR];
            recovering = 3; // allow 3 real symbols to be shifted before reporting a new error
        }

        // this shouldn't happen, unless resolve defaults are off
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: '+state+', token: '+symbol);
        }

        switch (action[0]) {
            case 1: // shift
                //this.shiftCount++;

                stack.push(symbol);
                vstack.push(lexer.yytext);
                lstack.push(lexer.yylloc);
                stack.push(action[1]); // push state
                symbol = null;
                if (!preErrorSymbol) { // normal execution/no error
                    yyleng = lexer.yyleng;
                    yytext = lexer.yytext;
                    yylineno = lexer.yylineno;
                    yyloc = lexer.yylloc;
                    if (recovering > 0) {
                        recovering--;
                    }
                } else {
                    // error just occurred, resume old lookahead f/ before error
                    symbol = preErrorSymbol;
                    preErrorSymbol = null;
                }
                break;

            case 2:
                // reduce
                //this.reductionCount++;

                len = this.productions_[action[1]][1];

                // perform semantic action
                yyval.$ = vstack[vstack.length-len]; // default to $$ = $1
                // default location, uses first token for firsts, last for lasts
                yyval._$ = {
                    first_line: lstack[lstack.length-(len||1)].first_line,
                    last_line: lstack[lstack.length-1].last_line,
                    first_column: lstack[lstack.length-(len||1)].first_column,
                    last_column: lstack[lstack.length-1].last_column
                };
                if (ranges) {
                  yyval._$.range = [lstack[lstack.length-(len||1)].range[0], lstack[lstack.length-1].range[1]];
                }
                r = this.performAction.apply(yyval, [yytext, yyleng, yylineno, sharedState.yy, action[1], vstack, lstack].concat(args));

                if (typeof r !== 'undefined') {
                    return r;
                }

                // pop off stack
                if (len) {
                    stack = stack.slice(0,-1*len*2);
                    vstack = vstack.slice(0, -1*len);
                    lstack = lstack.slice(0, -1*len);
                }

                stack.push(this.productions_[action[1]][0]);    // push nonterminal (reduce)
                vstack.push(yyval.$);
                lstack.push(yyval._$);
                // goto new state = table[STATE][NONTERMINAL]
                newState = table[stack[stack.length-2]][stack[stack.length-1]];
                stack.push(newState);
                break;

            case 3:
                // accept
                return true;
        }

    }

    return true;
}};

    
    const { Declaration} = require ("../core/Instruccion/Declaracion");
    const { ListadoDeclaracion } = require("../core/Instruccion/ListadoDeclaracion");
    const { Literal } = require("../core/Expresion/Literal");
    const { Arithmetic , ArithmeticOption} = require('../core/Expresion/Aritmetica');
    const { Relational,RelationalOption} = require("../core/Expresion/Relational");
    const { If } = require ("../core/Instruccion/If");
    const { Print } = require('../core/FuncionesNativas/Imprimir');
    const { Access} = require("../core/Abstract/Acceso"); 
    const { ListadoSentencias} = require("../core/Instruccion/ListadoSentencias");
    const { While } = require("../core/Instruccion/While");
    const { Asignacion} = require("../core/Instruccion/Asignacion");
    const { Logico,LogicalOption} =  require("../core/Expresion/Logico");
    const { Aumento,AumentoOption} = require("../core/Expresion/Aumento");
    const { DoWhile } = require("../core/Instruccion/DoWhile");
    const { GraficarTS }= require("../core/FuncionesNativas/Graficar_ts");
    const { For} =  require("../core/Instruccion/For");
    const { ForOption,CondicionFor} = require("../core/Instruccion/CondicionFor");
    const { Caso ,CaseOption} = require("../core/Instruccion/Caso");
    const { Switch} = require("../core/Instruccion/Switch");
    const { Break } = require("../core/Instruccion/break");
    const { Continue } =  require("../core/Instruccion/Continue");
    const { Ternario } = require("../core/Expresion/Ternario");
    const { Funcion} = require("../core/Instruccion/Funcion");
    const { Llamada } = require("../core/Instruccion/Llamada");
    const { CuerpoFuncion} = require("../core/Instruccion/CuerpoFuncion");
    const { Return } = require("../core/Expresion/Return");
    const { DeclaracionArray} = require("../core/Instruccion/DeclaracionArray");
    const { Length } = require("../core/Expresion/Length");
    const { Push} = require("../core/Expresion/Push");
    const { Pop} = require("../core/Expresion/Pop");
    const { AsignacionArray} = require("../core/Instruccion/AsignacionArray");
    const { AccesoArray } = require("../core/Abstract/AccesoArray");

    //CANTIDAD DE ERRORES ENCONTRADOS A PARTIR DE QUE ENCUENTRA 1  Y GUARDADNDO EN ERRS  
    let contErr=0;
    let ERRS=[];
    //LITADO DE ERRORES GENERALES
    let LISTADOERRORES="";

/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function(match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex () {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin (condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState () {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules () {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState (n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState (condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {"case-sensitive":true},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:/*Ingorar espacios en blanco*/
break;
case 1:// comentario simple línea
break;
case 2:// comentario multiple líneas
break;
case 3:return 94
break;
case 4:return 95
break;
case 5:return 21
break;
case 6:return 23
break;
case 7:return 104
break;
case 8:return 103
break;
case 9:return 102
break;
case 10:return 105          
break;
case 11:return 66
break;
case 12:return "punto"  
break;
case 13:return "len"
break;
case 14:return "push"
break;
case 15:return "pop" 
break;
case 16:return 49
break;
case 17:return 51
break;
case 18:return 41
break;
case 19:return 42
break;
case 20:return 80
break;
case 21:return 24
break;
case 22:return 32
break;
case 23:return 78
break;
case 24:return 79
break;
case 25:return 101
break;
case 26:return 100
break;
case 27:return 76
break;
case 28:return 77
break;
case 29:return 90 
break;
case 30:return 'mod'
break;
case 31:return 83
break;
case 32:return 84
break;
case 33:return 81
break;
case 34:return 82
break;
case 35:return 85
break;
case 36:return 86
break;
case 37:return 87
break;
case 38:return 88
break;
case 39:return 89
break;
case 40:return 24
break;
case 41:return 34
break;
case 42:return 99
break;
case 43:return 97
break;
case 44:return 98
break;
case 45:return 20
break;
case 46:return 75
break;
case 47:return 25
break;
case 48:return 27   
break;
case 49:return 29
break;
case 50:return 45
break;
case 51:return 47
break;
case 52:return 48
break;
case 53:return 68
break;
case 54:return 70
break;
case 55:return 69
break;
case 56:return 54
break;
case 57:return 53
break;
case 58:return 55
break;
case 59:return 56
break;
case 60:return 57
break;
case 61:return 59
break;
case 62:return 60
break;
case 63:return 71
break;
case 64:return 31
break;
case 65:return 96
break;
case 66:return 5
break;
case 67:    
                     
                        LISTADOERRORES = LISTADOERRORES +"   "+ "Error Lexico en la linea: "+ yy_.yylineno+" y columna "+ (yy_.yylloc.last_column+1)+"\n";
                    
break;
}
},
rules: [/^(?:\s+)/,/^(?:\/\/.*)/,/^(?:[/][*][^*]*[*]+([^/*][^*]*[*]+)*[/])/,/^(?:([0-9][.][0-9]))/,/^(?:([0-9]+))/,/^(?:\()/,/^(?:\))/,/^(?:int\b)/,/^(?:boolean\b)/,/^(?:string\b)/,/^(?:void\b)/,/^(?:function\b)/,/^(?:\.)/,/^(?:length\b)/,/^(?:push\b)/,/^(?:pop\b)/,/^(?:\{)/,/^(?:\})/,/^(?:\[)/,/^(?:\])/,/^(?:\*\*)/,/^(?:;)/,/^(?::)/,/^(?:\*)/,/^(?:\/)/,/^(?:--)/,/^(?:\+\+)/,/^(?:-)/,/^(?:\+)/,/^(?:\?)/,/^(?:%)/,/^(?:>=)/,/^(?:<=)/,/^(?:>)/,/^(?:<)/,/^(?:==)/,/^(?:!=)/,/^(?:&&)/,/^(?:\|\|)/,/^(?:!)/,/^(?:;)/,/^(?:=)/,/^(?:null\b)/,/^(?:true\b)/,/^(?:false\b)/,/^(?:print\b)/,/^(?:graficar_ts\b)/,/^(?:let\b)/,/^(?:const\b)/,/^(?:,)/,/^(?:if\b)/,/^(?:else\b)/,/^(?:switch\b)/,/^(?:break\b)/,/^(?:return\b)/,/^(?:continue\b)/,/^(?:default\b)/,/^(?:case\b)/,/^(?:while\b)/,/^(?:do\b)/,/^(?:for\b)/,/^(?:in\b)/,/^(?:of\b)/,/^(?:type\b)/,/^(?:(([A-Za-zÑñ])|_)(([A-Za-zÑñ])+|([0-9])*|_)*)/,/^(?:"([^\"\n\\\\]|\\"|\\)*")/,/^(?:$)/,/^(?:.)/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
return parser;
});