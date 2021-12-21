

define(function(require){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,16],$V1=[1,17],$V2=[1,18],$V3=[1,21],$V4=[1,23],$V5=[1,24],$V6=[1,25],$V7=[1,26],$V8=[1,27],$V9=[1,32],$Va=[1,28],$Vb=[1,29],$Vc=[1,30],$Vd=[1,31],$Ve=[1,33],$Vf=[1,34],$Vg=[1,35],$Vh=[1,36],$Vi=[1,37],$Vj=[2,5,19,24,29,36,39,42,44,46,47,48,49,59,61,62,63,64,91,92,93,94,95],$Vk=[2,111],$Vl=[1,50],$Vm=[1,51],$Vn=[1,57],$Vo=[1,65],$Vp=[1,74],$Vq=[1,63],$Vr=[1,64],$Vs=[1,67],$Vt=[1,68],$Vu=[1,69],$Vv=[1,70],$Vw=[1,71],$Vx=[1,72],$Vy=[22,25,29,32,40,42],$Vz=[1,86],$VA=[23,25],$VB=[22,23,25,30,33,45,52,53,68,69,70,71,72,73,74,75,76,77,78,79,81],$VC=[1,107],$VD=[1,106],$VE=[1,108],$VF=[1,109],$VG=[1,110],$VH=[1,111],$VI=[1,112],$VJ=[1,113],$VK=[1,114],$VL=[1,115],$VM=[1,116],$VN=[1,117],$VO=[1,118],$VP=[2,100],$VQ=[1,122],$VR=[1,123],$VS=[1,126],$VT=[22,25],$VU=[1,129],$VV=[40,45],$VW=[1,142],$VX=[2,5,19,24,29,36,38,39,42,44,46,47,48,49,59,61,62,63,64,91,92,93,94,95],$VY=[22,23,25,30,33,45,52,53,68,69],$VZ=[22,23,25,30,33,45,52,53,68,69,70,71],$V_=[22,23,25,30,33,45,52,53,68,69,70,71,76,77,78,79,81],$V$=[1,203],$V01=[1,207],$V11=[1,212],$V21=[1,213],$V31=[25,42],$V41=[1,224],$V51=[23,25,33],$V61=[42,44,46];
var parser = {trace: function trace () { },
yy: {},
symbols_: {"error":2,"Init":3,"INSTRUCCIONES":4,"EOF":5,"INSTRUCCION":6,"IMPRIMIR":7,"FUNCION":8,"DECLARACION":9,"ASIGNACION":10,"IF":11,"SWITCH":12,"WHILE":13,"DO_WHILE":14,"FOR":15,"TRANSFERENCIA":16,"TYPE":17,"LLAMADA":18,"rimprimir":19,"parIz":20,"EXPRESION_IMPR":21,"parDer":22,"pcoma":23,"lrimprimir":24,"coma":25,"EXPRESION":26,"TIPOS":27,"DECLARACION_EXPR":28,"Identificador":29,"igual":30,"AUMENTO":31,"llaveizq":32,"llaveder":33,"LISTADO_ARRAY":34,"ASIGNACION_ARRAY":35,"if":36,"CUERPO_SENTENCIAS":37,"else":38,"switch":39,"corcheIz":40,"CUERPO_SWITCH":41,"corcheDer":42,"CASO":43,"case":44,"dospuntos":45,"default":46,"while":47,"do":48,"for":49,"CONDICION_FOR":50,"let":51,"in":52,"of":53,"NOMBRE_FUNCION":54,"PARAMETROS":55,"CUERPO_FUNCIONES":56,"LISTADO_PARAMETROS":57,"PARAMETRO":58,"fun":59,"PARAMETROS_ENTRADA":60,"break":61,"continue":62,"return":63,"type":64,"CUERPO_TYPE":65,"LISTADO_VALORES":66,"CLAVE_VALOR":67,"menos":68,"mas":69,"por":70,"div":71,"mayor":72,"menor":73,"mayorigual":74,"menorigual":75,"igualacion":76,"diferente":77,"and":78,"or":79,"not":80,"interrogacion":81,"LITERAL":82,"numdecimal":83,"numerico":84,"cadena":85,"verdadero":86,"falso":87,"nulo":88,"aumento":89,"decremento":90,"string":91,"bolean":92,"number":93,"void":94,"decimal":95,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",19:"rimprimir",20:"parIz",22:"parDer",23:"pcoma",24:"lrimprimir",25:"coma",29:"Identificador",30:"igual",32:"llaveizq",33:"llaveder",36:"if",38:"else",39:"switch",40:"corcheIz",42:"corcheDer",44:"case",45:"dospuntos",46:"default",47:"while",48:"do",49:"for",51:"let",52:"in",53:"of",59:"fun",61:"break",62:"continue",63:"return",64:"type",68:"menos",69:"mas",70:"por",71:"div",72:"mayor",73:"menor",74:"mayorigual",75:"menorigual",76:"igualacion",77:"diferente",78:"and",79:"or",80:"not",81:"interrogacion",83:"numdecimal",84:"numerico",85:"cadena",86:"verdadero",87:"falso",88:"nulo",89:"aumento",90:"decremento",91:"string",92:"bolean",93:"number",94:"void",95:"decimal"},
productions_: [0,[3,2],[4,2],[4,1],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[7,5],[7,5],[21,3],[21,1],[9,3],[9,5],[28,3],[28,1],[10,4],[10,2],[10,7],[10,7],[35,3],[35,2],[34,3],[34,3],[34,1],[34,1],[11,5],[11,7],[11,7],[12,7],[41,2],[41,1],[43,4],[43,3],[13,5],[14,7],[15,5],[50,8],[50,7],[50,4],[50,3],[50,4],[50,3],[8,3],[8,5],[55,3],[55,2],[56,3],[56,2],[57,3],[57,1],[58,3],[54,2],[18,4],[18,5],[60,3],[60,1],[16,2],[16,2],[16,3],[16,2],[17,5],[65,3],[65,2],[66,3],[66,1],[67,3],[26,2],[26,3],[26,3],[26,3],[26,3],[26,3],[26,3],[26,3],[26,3],[26,3],[26,3],[26,3],[26,3],[26,2],[26,5],[26,3],[26,1],[82,1],[82,1],[82,1],[82,1],[82,1],[82,1],[82,1],[82,1],[82,3],[82,4],[82,4],[31,2],[31,2],[27,1],[27,1],[27,1],[27,1],[27,1],[27,1],[37,3],[37,2]],
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
case 3:

                this.$=[$$[$0]];
            
break;
case 4: case 5: case 6:
 this.$=$$[$0]; 
break;
case 7: case 8: case 9: case 10: case 11: case 12: case 13: case 14: case 15: case 61: case 74: case 99: case 111:
this.$=$$[$0];
break;
case 16:
 
                        if(this._$.first_column == 0){
                            LISTADOERRORES= LISTADOERRORES +"   "+ ERRS[0];
                            ERRS=[];   
                            this.$="\n";
                        }else{

                            ERRS.push("Error Sintactico: \""+ yytext + "\" en la Linea: "+ this._$.first_line + " y Columna: "+ this._$.first_column +"\n");
                        }
                    
break;
case 17:
 
                this.$ = new Print($$[$0-2], false, _$[$0-4].first_line, _$[$0-4].first_column,[$$[$0-4],$$[$0-3],$$[$0-2],$$[$0-1],$$[$0]]);
            
break;
case 18:
 
                console.log("Entro a println");
                this.$ = new Print($$[$0-2], true, _$[$0-4].first_line, _$[$0-4].first_column,[$$[$0-4],$$[$0-3],$$[$0-2],$$[$0-1],$$[$0]]);
            
break;
case 19: case 23: case 31: case 32:

                    $$[$0-2].push($$[$0]);
                    this.$=$$[$0-2];
                
break;
case 20: case 24: case 40:

                    this.$=[$$[$0]];
                
break;
case 21:

                this.$=new ListadoDeclaracion($$[$0-2], $$[$0-1],this._$.first_line ,this._$.first_column);
            
break;
case 22:

                this.$=new Declaration($$[$0-3],$$[$0-1],this._$.first_line,this._$.first_column, $$[$0-4]);
            
break;
case 25:

                this.$=new Asignacion($$[$0-3],$$[$0-1], _$[$0-3].first_line, _$[$0-3].first_column);

            
break;
case 26:

                this.$=$$[$0-1];
            
break;
case 27:

                this.$=new AsignacionArray($$[$0-6],$$[$0-4],$$[$0-1],_$[$0-6].first_line, _$[$0-6].first_column);
            
break;
case 28:

                console.log("Entro a declaracion de array");
            
break;
case 29: case 54:
this.$=$$[$0-1];
break;
case 30: case 108:
this.$=0;
break;
case 33: case 34: case 65:
this.$=[$$[$0]];
break;
case 35:
 
        this.$= new If($$[$0-2],$$[$0],null, _$[$0-4].first_line, _$[$0-4].first_column);
    
break;
case 36: case 37:

        this.$= new If($$[$0-4],$$[$0-2],$$[$0], _$[$0-6].first_line, _$[$0-6].first_column);
    
break;
case 38:

            this.$=new Switch($$[$0-4],$$[$0-1],_$[$0-6].first_line, _$[$0-6].first_column);
        
break;
case 39:

                    $$[$0-1].push($$[$0]);
                    this.$=$$[$0-1];
                
break;
case 41:

            this.$= new Caso($$[$0-2],$$[$0],CaseOption.NORMAL,_$[$0-3].first_line, _$[$0-3].first_column);
        
break;
case 42:

            this.$= new Caso(new Literal("true",this._$.first_line ,this._$.first_column,2),$$[$0],CaseOption.DEFAULT,_$[$0-2].first_line, _$[$0-2].first_column);
        
break;
case 43:

            this.$ = new While($$[$0-2], $$[$0], _$[$0-4].first_line, _$[$0-4].first_column);
        
break;
case 44:

            this.$ = new DoWhile($$[$0-2], $$[$0-5], _$[$0-6].first_line, _$[$0-6].first_column);
        
break;
case 45:

        this.$= new For($$[$0-2], $$[$0], _$[$0-4].first_line, _$[$0-4].first_column);
    
break;
case 46:

                    this.$=new CondicionFor($$[$0-6],$$[$0-4],$$[$0-2],$$[$0],ForOption.NORMALD,_$[$0-7].first_line, _$[$0-7].first_column);
                
break;
case 47:

                    this.$=new CondicionFor($$[$0-5],$$[$0-3],$$[$0-1],$$[$01],ForOption.NORMAL,_$[$0-6].first_line, _$[$0-6].first_column);
                
break;
case 48: case 50:
this.$=$$[$0-3]+" "+$$[$0-2]+" "+$$[$0-1]+" "+$$[$0];
break;
case 49: case 51:
this.$=$$[$0-2]+" "+$$[$0-1]+" "+$$[$0];
break;
case 52:
      
                this.$= new Funcion($$[$0-2],$$[$0-1],$$[$0],8,_$[$0-2].first_line, _$[$0-2].first_column);
            
break;
case 53:

                this.$= new Funcion($$[$0-4],$$[$0-3],$$[$0],$$[$0-1],_$[$0-4].first_line, _$[$0-4].first_column);
            
break;
case 55:
this.$=[];
break;
case 56:

                        this.$=new CuerpoFuncion($$[$0-1],this._$.first_line ,this._$.first_column);
                    
break;
case 57: case 113:
this.$=null;
break;
case 58: case 64:

                        $$[$0-2].push($$[$0]);
                        this.$=$$[$0-2];
                    
break;
case 59:

                        this.$=[$$[$0]];
                    
break;
case 60:

            this.$=this.$=new  Declaration($$[$0-2], new Literal("null",this._$.first_line ,this._$.first_column,$$[$0]), this._$.first_line ,this._$.first_column);
        
break;
case 62:

                this.$=new Llamada($$[$0-3],[],_$[$0-3].first_line, _$[$0-3].first_column);
            
break;
case 63:

                this.$=new Llamada($$[$0-4],$$[$0-2],_$[$0-4].first_line, _$[$0-4].first_column);
            
break;
case 66:
this.$=new Break(_$[$0-1].first_line, _$[$0-1].first_column);
break;
case 67:
this.$=new Continue(_$[$0-1].first_line, _$[$0-1].first_column);
break;
case 68:
this.$=new Return(_$[$0-2].first_line, _$[$0-2].first_column,$$[$0-1]);
break;
case 69:
this.$=new Return(_$[$0-1].first_line, _$[$0-1].first_column,null);
break;
case 70:
this.$=$$[$0-4]+" "+$$[$0-3]+$$[$0-2]+$$[$0-1]+"\n";
break;
case 71:
this.$=$$[$0-2]+"\n"+$$[$0-1]+"\n"+$$[$0];
break;
case 72:
this.$=$$[$0-1]+"\n\n"+$$[$0];
break;
case 73:
this.$=$$[$0-2]+$$[$0-1]+"\n"+$$[$0];
break;
case 75:
this.$=$$[$0-2]+$$[$0-1]+$$[$0];
break;
case 76:

                this.$=new Arithmetic($$[$0],$$[$0],ArithmeticOption.UNARIO,this._$.first_line ,this._$.first_column);
            
break;
case 77:

                this.$=new Arithmetic($$[$0-2],$$[$0],ArithmeticOption.PLUS,this._$.first_line ,this._$.first_column);
            
break;
case 78:

                this.$=new Arithmetic($$[$0-2],$$[$0],ArithmeticOption.MINUS,this._$.first_line ,this._$.first_column);
            
break;
case 79:

                this.$=new Arithmetic($$[$0-2],$$[$0],ArithmeticOption.TIMES,this._$.first_line ,this._$.first_column);
            
break;
case 80:

                this.$=new Arithmetic($$[$0-2],$$[$0],ArithmeticOption.DIV,this._$.first_line ,this._$.first_column);
            
break;
case 81:

                 this.$=new Relational($$[$0-2],$$[$0],RelationalOption.GREATER,this._$.first_line ,this._$.first_column);
            
break;
case 82:

                 this.$=new Relational($$[$0-2],$$[$0],RelationalOption.LESS,this._$.first_line ,this._$.first_column);
            
break;
case 83:

                 this.$=new Relational($$[$0-2],$$[$0],RelationalOption.GREATEROREQUAL,this._$.first_line ,this._$.first_column);
            
break;
case 84:

                 this.$=new Relational($$[$0-2],$$[$0],RelationalOption.LESSOREQUAL,this._$.first_line ,this._$.first_column);
            
break;
case 85:

                 this.$=new Relational($$[$0-2],$$[$0],RelationalOption.EQUAL,this._$.first_line ,this._$.first_column);
            
break;
case 86:

                 this.$=new Relational($$[$0-2],$$[$0],RelationalOption.NOTEQUAL,this._$.first_line ,this._$.first_column);
            
break;
case 87:

                 this.$=new Logico($$[$0-2],$$[$0],LogicalOption.AND,this._$.first_line ,this._$.first_column);
            
break;
case 88:

                 this.$=new Logico($$[$0-2],$$[$0],LogicalOption.OR,this._$.first_line ,this._$.first_column);
            
break;
case 89:

                 this.$=new Logico($$[$0],$$[$0],LogicalOption.NOT,this._$.first_line ,this._$.first_column);
            
break;
case 90:

                 this.$= new Ternario($$[$0-4],$$[$0-2],$$[$0],this._$.first_line ,this._$.first_column);
            
break;
case 91:
this.$ =$$[$0-1];
break;
case 92:
 this.$=$$[$0];
break;
case 93:
this.$=new Literal($$[$0],this._$.first_line ,this._$.first_column,9);
break;
case 94:
this.$=new Literal($$[$0],this._$.first_line ,this._$.first_column,0);
break;
case 95:
this.$=new Literal($$[$0].replace(/\"/g,""),this._$.first_line ,this._$.first_column,1);
break;
case 96: case 97:
this.$=new Literal($$[$0],this._$.first_line ,this._$.first_column,2);
break;
case 98:
this.$=new Literal($$[$0],this._$.first_line ,this._$.first_column,3);
break;
case 100:
this.$=new Access($$[$0], _$[$0].first_line, _$[$0].first_column);
break;
case 101:

                this.$=new Llamada($$[$0-2],[],_$[$0-2].first_line, _$[$0-2].first_column);
            
break;
case 102:

                this.$=new Llamada($$[$0-3],$$[$0-1],_$[$0-3].first_line, _$[$0-3].first_column);
            
break;
case 103:

                this.$= new AccesoArray($$[$0-3],$$[$0-1],_$[$0-3].first_line, _$[$0-3].first_column);
          
break;
case 104:

            this.$=new Aumento($$[$0-1],AumentoOption.PLUSPLUS,this._$.first_line ,this._$.first_column);
        
break;
case 105:

            this.$=new Aumento($$[$0-1],AumentoOption.LESSLESS,this._$.first_line ,this._$.first_column);
        
break;
case 106:
this.$=1;
break;
case 107:
this.$=2;
break;
case 109:
this.$=8;
break;
case 110:
this.$=9;
break;
case 112:

                        this.$=new ListadoSentencias($$[$0-1],this._$.first_line ,this._$.first_column);
                    
break;
}
},
table: [{2:$V0,3:1,4:2,6:3,7:4,8:5,9:6,10:7,11:8,12:9,13:10,14:11,15:12,16:13,17:14,18:15,19:$V1,24:$V2,27:20,29:$V3,31:22,36:$V4,39:$V5,47:$V6,48:$V7,49:$V8,54:19,59:$V9,61:$Va,62:$Vb,63:$Vc,64:$Vd,91:$Ve,92:$Vf,93:$Vg,94:$Vh,95:$Vi},{1:[3]},{2:$V0,5:[1,38],6:39,7:4,8:5,9:6,10:7,11:8,12:9,13:10,14:11,15:12,16:13,17:14,18:15,19:$V1,24:$V2,27:20,29:$V3,31:22,36:$V4,39:$V5,47:$V6,48:$V7,49:$V8,54:19,59:$V9,61:$Va,62:$Vb,63:$Vc,64:$Vd,91:$Ve,92:$Vf,93:$Vg,94:$Vh,95:$Vi},o($Vj,[2,3]),o($Vj,[2,4]),o($Vj,[2,5]),o($Vj,[2,6]),o($Vj,[2,7]),o($Vj,[2,8]),o($Vj,[2,9]),o($Vj,[2,10]),o($Vj,[2,11]),o($Vj,[2,12]),o($Vj,[2,13]),o($Vj,[2,14]),o($Vj,[2,15]),o($Vj,[2,16]),{20:[1,40]},{20:[1,41]},{20:[1,43],55:42},{28:44,29:[1,45],32:[1,46]},{20:[1,49],29:$Vk,30:[1,47],32:[1,48],89:$Vl,90:$Vm},{23:[1,52]},{20:[1,53]},{20:[1,54]},{20:[1,55]},{37:56,40:$Vn},{20:[1,58]},{23:[1,59]},{23:[1,60]},{20:$Vo,23:[1,62],26:61,29:$Vp,31:73,68:$Vq,80:$Vr,82:66,83:$Vs,84:$Vt,85:$Vu,86:$Vv,87:$Vw,88:$Vx},{29:[1,75]},{29:[1,76]},o($Vy,[2,106]),o($Vy,[2,107]),o($Vy,[2,108]),o($Vy,[2,109]),o($Vy,[2,110]),{1:[2,1]},o($Vj,[2,2]),{20:$Vo,21:77,26:78,29:$Vp,31:73,68:$Vq,80:$Vr,82:66,83:$Vs,84:$Vt,85:$Vu,86:$Vv,87:$Vw,88:$Vx},{20:$Vo,21:79,26:78,29:$Vp,31:73,68:$Vq,80:$Vr,82:66,83:$Vs,84:$Vt,85:$Vu,86:$Vv,87:$Vw,88:$Vx},{40:[1,82],45:[1,81],56:80},{22:[1,84],29:$Vz,57:83,58:85},{23:[1,87],25:[1,88]},o($VA,[2,24],{30:[1,89]}),{33:[1,90]},{20:$Vo,26:91,29:$Vp,31:73,68:$Vq,80:$Vr,82:66,83:$Vs,84:$Vt,85:$Vu,86:$Vv,87:$Vw,88:$Vx},{20:$Vo,26:92,29:$Vp,31:73,68:$Vq,80:$Vr,82:66,83:$Vs,84:$Vt,85:$Vu,86:$Vv,87:$Vw,88:$Vx},{20:$Vo,22:[1,93],26:95,29:$Vp,31:73,60:94,68:$Vq,80:$Vr,82:66,83:$Vs,84:$Vt,85:$Vu,86:$Vv,87:$Vw,88:$Vx},o($VB,[2,104]),o($VB,[2,105]),o($Vj,[2,26]),{20:$Vo,26:96,29:$Vp,31:73,68:$Vq,80:$Vr,82:66,83:$Vs,84:$Vt,85:$Vu,86:$Vv,87:$Vw,88:$Vx},{20:$Vo,26:97,29:$Vp,31:73,68:$Vq,80:$Vr,82:66,83:$Vs,84:$Vt,85:$Vu,86:$Vv,87:$Vw,88:$Vx},{20:$Vo,26:98,29:$Vp,31:73,68:$Vq,80:$Vr,82:66,83:$Vs,84:$Vt,85:$Vu,86:$Vv,87:$Vw,88:$Vx},{47:[1,99]},{2:$V0,4:100,6:3,7:4,8:5,9:6,10:7,11:8,12:9,13:10,14:11,15:12,16:13,17:14,18:15,19:$V1,24:$V2,27:20,29:$V3,31:22,36:$V4,39:$V5,42:[1,101],47:$V6,48:$V7,49:$V8,54:19,59:$V9,61:$Va,62:$Vb,63:$Vc,64:$Vd,91:$Ve,92:$Vf,93:$Vg,94:$Vh,95:$Vi},{20:$Vo,26:104,29:$Vp,31:73,50:102,51:[1,103],68:$Vq,80:$Vr,82:66,83:$Vs,84:$Vt,85:$Vu,86:$Vv,87:$Vw,88:$Vx},o($Vj,[2,66]),o($Vj,[2,67]),{23:[1,105],68:$VC,69:$VD,70:$VE,71:$VF,72:$VG,73:$VH,74:$VI,75:$VJ,76:$VK,77:$VL,78:$VM,79:$VN,81:$VO},o($Vj,[2,69]),{20:$Vo,26:119,29:$Vp,31:73,68:$Vq,80:$Vr,82:66,83:$Vs,84:$Vt,85:$Vu,86:$Vv,87:$Vw,88:$Vx},{20:$Vo,26:120,29:$Vp,31:73,68:$Vq,80:$Vr,82:66,83:$Vs,84:$Vt,85:$Vu,86:$Vv,87:$Vw,88:$Vx},{20:$Vo,26:121,29:$Vp,31:73,68:$Vq,80:$Vr,82:66,83:$Vs,84:$Vt,85:$Vu,86:$Vv,87:$Vw,88:$Vx},o($VB,[2,92]),o($VB,[2,93]),o($VB,[2,94]),o($VB,[2,95]),o($VB,[2,96]),o($VB,[2,97]),o($VB,[2,98]),o($VB,[2,99]),o($VB,$VP,{20:$VQ,32:$VR,89:$Vl,90:$Vm}),{30:[1,124]},{20:[2,61]},{22:[1,125],25:$VS},o($VT,[2,20],{68:$VC,69:$VD,70:$VE,71:$VF,72:$VG,73:$VH,74:$VI,75:$VJ,76:$VK,77:$VL,78:$VM,79:$VN,81:$VO}),{22:[1,127],25:$VS},o($Vj,[2,52]),{27:128,29:$VU,91:$Ve,92:$Vf,93:$Vg,94:$Vh,95:$Vi},{2:$V0,4:130,6:3,7:4,8:5,9:6,10:7,11:8,12:9,13:10,14:11,15:12,16:13,17:14,18:15,19:$V1,24:$V2,27:20,29:$V3,31:22,36:$V4,39:$V5,42:[1,131],47:$V6,48:$V7,49:$V8,54:19,59:$V9,61:$Va,62:$Vb,63:$Vc,64:$Vd,91:$Ve,92:$Vf,93:$Vg,94:$Vh,95:$Vi},{22:[1,132],25:[1,133]},o($VV,[2,55]),o($VT,[2,59]),{45:[1,134]},o($Vj,[2,21]),{29:[1,135]},{20:$Vo,26:136,29:$Vp,31:73,68:$Vq,80:$Vr,82:66,83:$Vs,84:$Vt,85:$Vu,86:$Vv,87:$Vw,88:$Vx},{29:[1,137]},{23:[1,138],68:$VC,69:$VD,70:$VE,71:$VF,72:$VG,73:$VH,74:$VI,75:$VJ,76:$VK,77:$VL,78:$VM,79:$VN,81:$VO},{33:[1,139],68:$VC,69:$VD,70:$VE,71:$VF,72:$VG,73:$VH,74:$VI,75:$VJ,76:$VK,77:$VL,78:$VM,79:$VN,81:$VO},{23:[1,140]},{22:[1,141],25:$VW},o($VT,[2,65],{68:$VC,69:$VD,70:$VE,71:$VF,72:$VG,73:$VH,74:$VI,75:$VJ,76:$VK,77:$VL,78:$VM,79:$VN,81:$VO}),{22:[1,143],68:$VC,69:$VD,70:$VE,71:$VF,72:$VG,73:$VH,74:$VI,75:$VJ,76:$VK,77:$VL,78:$VM,79:$VN,81:$VO},{22:[1,144],68:$VC,69:$VD,70:$VE,71:$VF,72:$VG,73:$VH,74:$VI,75:$VJ,76:$VK,77:$VL,78:$VM,79:$VN,81:$VO},{22:[1,145],68:$VC,69:$VD,70:$VE,71:$VF,72:$VG,73:$VH,74:$VI,75:$VJ,76:$VK,77:$VL,78:$VM,79:$VN,81:$VO},{20:[1,146]},{2:$V0,6:39,7:4,8:5,9:6,10:7,11:8,12:9,13:10,14:11,15:12,16:13,17:14,18:15,19:$V1,24:$V2,27:20,29:$V3,31:22,36:$V4,39:$V5,42:[1,147],47:$V6,48:$V7,49:$V8,54:19,59:$V9,61:$Va,62:$Vb,63:$Vc,64:$Vd,91:$Ve,92:$Vf,93:$Vg,94:$Vh,95:$Vi},o($VX,[2,113]),{22:[1,148]},{20:$Vo,26:150,29:[1,149],31:73,68:$Vq,80:$Vr,82:66,83:$Vs,84:$Vt,85:$Vu,86:$Vv,87:$Vw,88:$Vx},{30:[1,151],52:[1,152],53:[1,153],68:$VC,69:$VD,70:$VE,71:$VF,72:$VG,73:$VH,74:$VI,75:$VJ,76:$VK,77:$VL,78:$VM,79:$VN,81:$VO},o($Vj,[2,68]),{20:$Vo,26:154,29:$Vp,31:73,68:$Vq,80:$Vr,82:66,83:$Vs,84:$Vt,85:$Vu,86:$Vv,87:$Vw,88:$Vx},{20:$Vo,26:155,29:$Vp,31:73,68:$Vq,80:$Vr,82:66,83:$Vs,84:$Vt,85:$Vu,86:$Vv,87:$Vw,88:$Vx},{20:$Vo,26:156,29:$Vp,31:73,68:$Vq,80:$Vr,82:66,83:$Vs,84:$Vt,85:$Vu,86:$Vv,87:$Vw,88:$Vx},{20:$Vo,26:157,29:$Vp,31:73,68:$Vq,80:$Vr,82:66,83:$Vs,84:$Vt,85:$Vu,86:$Vv,87:$Vw,88:$Vx},{20:$Vo,26:158,29:$Vp,31:73,68:$Vq,80:$Vr,82:66,83:$Vs,84:$Vt,85:$Vu,86:$Vv,87:$Vw,88:$Vx},{20:$Vo,26:159,29:$Vp,31:73,68:$Vq,80:$Vr,82:66,83:$Vs,84:$Vt,85:$Vu,86:$Vv,87:$Vw,88:$Vx},{20:$Vo,26:160,29:$Vp,31:73,68:$Vq,80:$Vr,82:66,83:$Vs,84:$Vt,85:$Vu,86:$Vv,87:$Vw,88:$Vx},{20:$Vo,26:161,29:$Vp,31:73,68:$Vq,80:$Vr,82:66,83:$Vs,84:$Vt,85:$Vu,86:$Vv,87:$Vw,88:$Vx},{20:$Vo,26:162,29:$Vp,31:73,68:$Vq,80:$Vr,82:66,83:$Vs,84:$Vt,85:$Vu,86:$Vv,87:$Vw,88:$Vx},{20:$Vo,26:163,29:$Vp,31:73,68:$Vq,80:$Vr,82:66,83:$Vs,84:$Vt,85:$Vu,86:$Vv,87:$Vw,88:$Vx},{20:$Vo,26:164,29:$Vp,31:73,68:$Vq,80:$Vr,82:66,83:$Vs,84:$Vt,85:$Vu,86:$Vv,87:$Vw,88:$Vx},{20:$Vo,26:165,29:$Vp,31:73,68:$Vq,80:$Vr,82:66,83:$Vs,84:$Vt,85:$Vu,86:$Vv,87:$Vw,88:$Vx},{20:$Vo,26:166,29:$Vp,31:73,68:$Vq,80:$Vr,82:66,83:$Vs,84:$Vt,85:$Vu,86:$Vv,87:$Vw,88:$Vx},o($VB,[2,76]),o($VB,[2,89]),{22:[1,167],68:$VC,69:$VD,70:$VE,71:$VF,72:$VG,73:$VH,74:$VI,75:$VJ,76:$VK,77:$VL,78:$VM,79:$VN,81:$VO},{20:$Vo,22:[1,168],26:95,29:$Vp,31:73,60:169,68:$Vq,80:$Vr,82:66,83:$Vs,84:$Vt,85:$Vu,86:$Vv,87:$Vw,88:$Vx},{20:$Vo,26:170,29:$Vp,31:73,68:$Vq,80:$Vr,82:66,83:$Vs,84:$Vt,85:$Vu,86:$Vv,87:$Vw,88:$Vx},{40:[1,172],65:171},{23:[1,173]},{20:$Vo,26:174,29:$Vp,31:73,68:$Vq,80:$Vr,82:66,83:$Vs,84:$Vt,85:$Vu,86:$Vv,87:$Vw,88:$Vx},{23:[1,175]},{37:176,40:$Vn},o([22,25,40,42],$Vk),{2:$V0,6:39,7:4,8:5,9:6,10:7,11:8,12:9,13:10,14:11,15:12,16:13,17:14,18:15,19:$V1,24:$V2,27:20,29:$V3,31:22,36:$V4,39:$V5,42:[1,177],47:$V6,48:$V7,49:$V8,54:19,59:$V9,61:$Va,62:$Vb,63:$Vc,64:$Vd,91:$Ve,92:$Vf,93:$Vg,94:$Vh,95:$Vi},o($Vj,[2,57]),o($VV,[2,54]),{29:$Vz,58:178},{27:179,29:$VU,91:$Ve,92:$Vf,93:$Vg,94:$Vh,95:$Vi},o($VA,[2,23]),{23:[1,180],68:$VC,69:$VD,70:$VE,71:$VF,72:$VG,73:$VH,74:$VI,75:$VJ,76:$VK,77:$VL,78:$VM,79:$VN,81:$VO},{30:[1,181]},o($Vj,[2,25]),{30:[1,182]},o($Vj,[2,62]),{23:[1,183]},{20:$Vo,26:184,29:$Vp,31:73,68:$Vq,80:$Vr,82:66,83:$Vs,84:$Vt,85:$Vu,86:$Vv,87:$Vw,88:$Vx},{37:185,40:$Vn},{40:[1,186]},{37:187,40:$Vn},{20:$Vo,26:188,29:$Vp,31:73,68:$Vq,80:$Vr,82:66,83:$Vs,84:$Vt,85:$Vu,86:$Vv,87:$Vw,88:$Vx},o($VX,[2,112]),{37:189,40:$Vn},o([52,53,68,69,70,71,72,73,74,75,76,77,78,79,81],$VP,{20:$VQ,30:[1,190],32:$VR,89:$Vl,90:$Vm}),{52:[1,191],53:[1,192],68:$VC,69:$VD,70:$VE,71:$VF,72:$VG,73:$VH,74:$VI,75:$VJ,76:$VK,77:$VL,78:$VM,79:$VN,81:$VO},{20:$Vo,26:193,29:$Vp,31:73,68:$Vq,80:$Vr,82:66,83:$Vs,84:$Vt,85:$Vu,86:$Vv,87:$Vw,88:$Vx},{20:$Vo,26:194,29:$Vp,31:73,68:$Vq,80:$Vr,82:66,83:$Vs,84:$Vt,85:$Vu,86:$Vv,87:$Vw,88:$Vx},{20:$Vo,26:195,29:$Vp,31:73,68:$Vq,80:$Vr,82:66,83:$Vs,84:$Vt,85:$Vu,86:$Vv,87:$Vw,88:$Vx},o($VY,[2,77],{70:$VE,71:$VF,72:$VG,73:$VH,74:$VI,75:$VJ,76:$VK,77:$VL,78:$VM,79:$VN,81:$VO}),o($VY,[2,78],{70:$VE,71:$VF,72:$VG,73:$VH,74:$VI,75:$VJ,76:$VK,77:$VL,78:$VM,79:$VN,81:$VO}),o($VZ,[2,79],{72:$VG,73:$VH,74:$VI,75:$VJ,76:$VK,77:$VL,78:$VM,79:$VN,81:$VO}),o($VZ,[2,80],{72:$VG,73:$VH,74:$VI,75:$VJ,76:$VK,77:$VL,78:$VM,79:$VN,81:$VO}),o($VB,[2,81]),o($VB,[2,82]),o($VB,[2,83]),o($VB,[2,84]),o($V_,[2,85],{72:$VG,73:$VH,74:$VI,75:$VJ}),o($V_,[2,86],{72:$VG,73:$VH,74:$VI,75:$VJ}),o([22,23,25,30,33,45,52,53,68,69,70,71,78,79],[2,87],{72:$VG,73:$VH,74:$VI,75:$VJ,76:$VK,77:$VL,81:$VO}),o([22,23,25,30,33,45,52,53,68,69,70,71,79],[2,88],{72:$VG,73:$VH,74:$VI,75:$VJ,76:$VK,77:$VL,78:$VM,81:$VO}),{45:[1,196],68:$VC,69:$VD,70:$VE,71:$VF,72:$VG,73:$VH,74:$VI,75:$VJ,76:$VK,77:$VL,78:$VM,79:$VN,81:$VO},o($VB,[2,91]),o($VB,[2,101]),{22:[1,197],25:$VW},{33:[1,198],68:$VC,69:$VD,70:$VE,71:$VF,72:$VG,73:$VH,74:$VI,75:$VJ,76:$VK,77:$VL,78:$VM,79:$VN,81:$VO},{23:[1,199]},{29:$V$,42:[1,201],66:200,67:202},o($Vj,[2,17]),o($VT,[2,19],{68:$VC,69:$VD,70:$VE,71:$VF,72:$VG,73:$VH,74:$VI,75:$VJ,76:$VK,77:$VL,78:$VM,79:$VN,81:$VO}),o($Vj,[2,18]),o($Vj,[2,53]),o($Vj,[2,56]),o($VT,[2,58]),o($VT,[2,60]),o($Vj,[2,22]),{20:$Vo,26:206,29:$Vp,31:73,32:$V01,34:204,35:205,68:$Vq,80:$Vr,82:66,83:$Vs,84:$Vt,85:$Vu,86:$Vv,87:$Vw,88:$Vx},{20:$Vo,26:208,29:$Vp,31:73,68:$Vq,80:$Vr,82:66,83:$Vs,84:$Vt,85:$Vu,86:$Vv,87:$Vw,88:$Vx},o($Vj,[2,63]),o($VT,[2,64],{68:$VC,69:$VD,70:$VE,71:$VF,72:$VG,73:$VH,74:$VI,75:$VJ,76:$VK,77:$VL,78:$VM,79:$VN,81:$VO}),o($Vj,[2,35],{38:[1,209]}),{41:210,43:211,44:$V11,46:$V21},o($Vj,[2,43]),{22:[1,214],68:$VC,69:$VD,70:$VE,71:$VF,72:$VG,73:$VH,74:$VI,75:$VJ,76:$VK,77:$VL,78:$VM,79:$VN,81:$VO},o($Vj,[2,45]),{20:$Vo,26:215,29:$Vp,31:73,68:$Vq,80:$Vr,82:66,83:$Vs,84:$Vt,85:$Vu,86:$Vv,87:$Vw,88:$Vx},{20:$Vo,26:216,29:$Vp,31:73,68:$Vq,80:$Vr,82:66,83:$Vs,84:$Vt,85:$Vu,86:$Vv,87:$Vw,88:$Vx},{20:$Vo,26:217,29:$Vp,31:73,68:$Vq,80:$Vr,82:66,83:$Vs,84:$Vt,85:$Vu,86:$Vv,87:$Vw,88:$Vx},{23:[1,218],68:$VC,69:$VD,70:$VE,71:$VF,72:$VG,73:$VH,74:$VI,75:$VJ,76:$VK,77:$VL,78:$VM,79:$VN,81:$VO},{22:[2,49],68:$VC,69:$VD,70:$VE,71:$VF,72:$VG,73:$VH,74:$VI,75:$VJ,76:$VK,77:$VL,78:$VM,79:$VN,81:$VO},{22:[2,51],68:$VC,69:$VD,70:$VE,71:$VF,72:$VG,73:$VH,74:$VI,75:$VJ,76:$VK,77:$VL,78:$VM,79:$VN,81:$VO},{20:$Vo,26:219,29:$Vp,31:73,68:$Vq,80:$Vr,82:66,83:$Vs,84:$Vt,85:$Vu,86:$Vv,87:$Vw,88:$Vx},o($VB,[2,102]),o($VB,[2,103]),o($Vj,[2,70]),{25:[1,221],42:[1,220]},{23:[2,72]},o($V31,[2,74]),{45:[1,222]},{23:[1,223],25:$V41},o($V51,[2,33]),o($V51,[2,34],{68:$VC,69:$VD,70:$VE,71:$VF,72:$VG,73:$VH,74:$VI,75:$VJ,76:$VK,77:$VL,78:$VM,79:$VN,81:$VO}),{20:$Vo,26:206,29:$Vp,31:73,32:$V01,33:[1,226],34:225,35:205,68:$Vq,80:$Vr,82:66,83:$Vs,84:$Vt,85:$Vu,86:$Vv,87:$Vw,88:$Vx},{23:[1,227],68:$VC,69:$VD,70:$VE,71:$VF,72:$VG,73:$VH,74:$VI,75:$VJ,76:$VK,77:$VL,78:$VM,79:$VN,81:$VO},{11:228,36:$V4,37:229,40:$Vn},{42:[1,230],43:231,44:$V11,46:$V21},o($V61,[2,40]),{20:$Vo,26:232,29:$Vp,31:73,68:$Vq,80:$Vr,82:66,83:$Vs,84:$Vt,85:$Vu,86:$Vv,87:$Vw,88:$Vx},{45:[1,233]},{23:[1,234]},{23:[1,235],68:$VC,69:$VD,70:$VE,71:$VF,72:$VG,73:$VH,74:$VI,75:$VJ,76:$VK,77:$VL,78:$VM,79:$VN,81:$VO},{22:[2,48],68:$VC,69:$VD,70:$VE,71:$VF,72:$VG,73:$VH,74:$VI,75:$VJ,76:$VK,77:$VL,78:$VM,79:$VN,81:$VO},{22:[2,50],68:$VC,69:$VD,70:$VE,71:$VF,72:$VG,73:$VH,74:$VI,75:$VJ,76:$VK,77:$VL,78:$VM,79:$VN,81:$VO},{20:$Vo,26:236,29:$Vp,31:73,68:$Vq,80:$Vr,82:66,83:$Vs,84:$Vt,85:$Vu,86:$Vv,87:$Vw,88:$Vx},o($V_,[2,90],{72:$VG,73:$VH,74:$VI,75:$VJ}),{23:[2,71]},{29:$V$,67:237},{27:238,29:$VU,91:$Ve,92:$Vf,93:$Vg,94:$Vh,95:$Vi},o($Vj,[2,28]),{20:$Vo,26:240,29:$Vp,31:73,32:$V01,35:239,68:$Vq,80:$Vr,82:66,83:$Vs,84:$Vt,85:$Vu,86:$Vv,87:$Vw,88:$Vx},{25:$V41,33:[1,241]},o($V51,[2,30]),o($Vj,[2,27]),o($Vj,[2,36]),o($Vj,[2,37]),o($Vj,[2,38]),o($V61,[2,39]),{45:[1,242],68:$VC,69:$VD,70:$VE,71:$VF,72:$VG,73:$VH,74:$VI,75:$VJ,76:$VK,77:$VL,78:$VM,79:$VN,81:$VO},{2:$V0,4:243,6:3,7:4,8:5,9:6,10:7,11:8,12:9,13:10,14:11,15:12,16:13,17:14,18:15,19:$V1,24:$V2,27:20,29:$V3,31:22,36:$V4,39:$V5,47:$V6,48:$V7,49:$V8,54:19,59:$V9,61:$Va,62:$Vb,63:$Vc,64:$Vd,91:$Ve,92:$Vf,93:$Vg,94:$Vh,95:$Vi},o($Vj,[2,44]),{20:$Vo,26:244,29:$Vp,31:73,68:$Vq,80:$Vr,82:66,83:$Vs,84:$Vt,85:$Vu,86:$Vv,87:$Vw,88:$Vx},{23:[1,245],68:$VC,69:$VD,70:$VE,71:$VF,72:$VG,73:$VH,74:$VI,75:$VJ,76:$VK,77:$VL,78:$VM,79:$VN,81:$VO},o($V31,[2,73]),o($V31,[2,75]),o($V51,[2,31]),o($V51,[2,32],{68:$VC,69:$VD,70:$VE,71:$VF,72:$VG,73:$VH,74:$VI,75:$VJ,76:$VK,77:$VL,78:$VM,79:$VN,81:$VO}),o($V51,[2,29]),{2:$V0,4:246,6:3,7:4,8:5,9:6,10:7,11:8,12:9,13:10,14:11,15:12,16:13,17:14,18:15,19:$V1,24:$V2,27:20,29:$V3,31:22,36:$V4,39:$V5,47:$V6,48:$V7,49:$V8,54:19,59:$V9,61:$Va,62:$Vb,63:$Vc,64:$Vd,91:$Ve,92:$Vf,93:$Vg,94:$Vh,95:$Vi},o($V61,[2,42],{7:4,8:5,9:6,10:7,11:8,12:9,13:10,14:11,15:12,16:13,17:14,18:15,54:19,27:20,31:22,6:39,2:$V0,19:$V1,24:$V2,29:$V3,36:$V4,39:$V5,47:$V6,48:$V7,49:$V8,59:$V9,61:$Va,62:$Vb,63:$Vc,64:$Vd,91:$Ve,92:$Vf,93:$Vg,94:$Vh,95:$Vi}),{23:[1,247],68:$VC,69:$VD,70:$VE,71:$VF,72:$VG,73:$VH,74:$VI,75:$VJ,76:$VK,77:$VL,78:$VM,79:$VN,81:$VO},{20:$Vo,26:248,29:$Vp,31:73,68:$Vq,80:$Vr,82:66,83:$Vs,84:$Vt,85:$Vu,86:$Vv,87:$Vw,88:$Vx},o($V61,[2,41],{7:4,8:5,9:6,10:7,11:8,12:9,13:10,14:11,15:12,16:13,17:14,18:15,54:19,27:20,31:22,6:39,2:$V0,19:$V1,24:$V2,29:$V3,36:$V4,39:$V5,47:$V6,48:$V7,49:$V8,59:$V9,61:$Va,62:$Vb,63:$Vc,64:$Vd,91:$Ve,92:$Vf,93:$Vg,94:$Vh,95:$Vi}),{20:$Vo,26:249,29:$Vp,31:73,68:$Vq,80:$Vr,82:66,83:$Vs,84:$Vt,85:$Vu,86:$Vv,87:$Vw,88:$Vx},{22:[2,47],68:$VC,69:$VD,70:$VE,71:$VF,72:$VG,73:$VH,74:$VI,75:$VJ,76:$VK,77:$VL,78:$VM,79:$VN,81:$VO},{22:[2,46],68:$VC,69:$VD,70:$VE,71:$VF,72:$VG,73:$VH,74:$VI,75:$VJ,76:$VK,77:$VL,78:$VM,79:$VN,81:$VO}],
defaultActions: {38:[2,1],76:[2,61],201:[2,72],220:[2,71]},
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
case 3:return 83
break;
case 4:return 84
break;
case 5:return 20
break;
case 6:return 22
break;
case 7:return 93
break;
case 8:return 95
break;
case 9:return 92
break;
case 10:return 91
break;
case 11:return 94          
break;
case 12:return 59
break;
case 13:return "punto"  
break;
case 14:return "push"
break;
case 15:return "pop" 
break;
case 16:return 40
break;
case 17:return 42
break;
case 18:return 32
break;
case 19:return 33
break;
case 20:return 'potencia'
break;
case 21:return 23
break;
case 22:return 45
break;
case 23:return 70
break;
case 24:return 71
break;
case 25:return 90
break;
case 26:return 89
break;
case 27:return 68
break;
case 28:return 69
break;
case 29:return 81 
break;
case 30:return 'mod'
break;
case 31:return 74
break;
case 32:return 75
break;
case 33:return 72
break;
case 34:return 73
break;
case 35:return 76
break;
case 36:return 77
break;
case 37:return 78
break;
case 38:return 79
break;
case 39:return 80
break;
case 40:return 23
break;
case 41:return 30
break;
case 42:return 88
break;
case 43:return 86
break;
case 44:return 87
break;
case 45:return 19
break;
case 46:return 24
break;
case 47:return 51
break;
case 48:return 'const'   
break;
case 49:return 25
break;
case 50:return 36
break;
case 51:return 38
break;
case 52:return 39
break;
case 53:return 61
break;
case 54:return 63
break;
case 55:return 62
break;
case 56:return 46
break;
case 57:return 44
break;
case 58:return 47
break;
case 59:return 48
break;
case 60:return 49
break;
case 61:return 52
break;
case 62:return 53
break;
case 63:return 64
break;
case 64:return 29
break;
case 65:return 85
break;
case 66:return 5
break;
case 67:    
                     
                        LISTADOERRORES = LISTADOERRORES +"   "+ "Error Lexico en la linea: "+ yy_.yylineno+" y columna "+ (yy_.yylloc.last_column+1)+"\n";
                    
break;
}
},
rules: [/^(?:\s+)/,/^(?:\/\/.*)/,/^(?:[/][*][^*]*[*]+([^/*][^*]*[*]+)*[/])/,/^(?:([0-9][.][0-9]))/,/^(?:([0-9]+))/,/^(?:\()/,/^(?:\))/,/^(?:int\b)/,/^(?:decimal\b)/,/^(?:boolean\b)/,/^(?:String\b)/,/^(?:void\b)/,/^(?:function\b)/,/^(?:\.)/,/^(?:push\b)/,/^(?:pop\b)/,/^(?:\{)/,/^(?:\})/,/^(?:\[)/,/^(?:\])/,/^(?:pow\b)/,/^(?:;)/,/^(?::)/,/^(?:\*)/,/^(?:\/)/,/^(?:--)/,/^(?:\+\+)/,/^(?:-)/,/^(?:\+)/,/^(?:\?)/,/^(?:%)/,/^(?:>=)/,/^(?:<=)/,/^(?:>)/,/^(?:<)/,/^(?:==)/,/^(?:!=)/,/^(?:&&)/,/^(?:\|\|)/,/^(?:!)/,/^(?:;)/,/^(?:=)/,/^(?:null\b)/,/^(?:true\b)/,/^(?:false\b)/,/^(?:print\b)/,/^(?:println\b)/,/^(?:let\b)/,/^(?:const\b)/,/^(?:,)/,/^(?:if\b)/,/^(?:else\b)/,/^(?:switch\b)/,/^(?:break\b)/,/^(?:return\b)/,/^(?:continue\b)/,/^(?:default\b)/,/^(?:case\b)/,/^(?:while\b)/,/^(?:do\b)/,/^(?:for\b)/,/^(?:in\b)/,/^(?:of\b)/,/^(?:type\b)/,/^(?:(([A-Za-zÑñ])|_)(([A-Za-zÑñ])+|([0-9])*|_)*)/,/^(?:"([^\"\n\\\\]|\\"|\\)*")/,/^(?:$)/,/^(?:.)/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
return parser;
});