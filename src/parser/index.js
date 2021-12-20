

define(function(require){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,16],$V1=[1,17],$V2=[1,20],$V3=[1,22],$V4=[1,23],$V5=[1,24],$V6=[1,25],$V7=[1,26],$V8=[1,31],$V9=[1,27],$Va=[1,28],$Vb=[1,29],$Vc=[1,30],$Vd=[1,32],$Ve=[1,33],$Vf=[1,34],$Vg=[1,35],$Vh=[1,36],$Vi=[2,5,19,27,36,39,42,44,46,47,48,49,59,61,62,63,64,92,93,94,95,96],$Vj=[2,111],$Vk=[1,47],$Vl=[1,48],$Vm=[1,54],$Vn=[1,62],$Vo=[1,71],$Vp=[1,60],$Vq=[1,61],$Vr=[1,64],$Vs=[1,65],$Vt=[1,66],$Vu=[1,67],$Vv=[1,68],$Vw=[1,69],$Vx=[22,26,27,40,42],$Vy=[1,81],$Vz=[23,26],$VA=[22,23,26,28,31,45,52,53,68,69,70,71,72,73,74,75,76,77,78,79,80,82],$VB=[1,101],$VC=[1,100],$VD=[1,102],$VE=[1,103],$VF=[1,104],$VG=[1,105],$VH=[1,106],$VI=[1,107],$VJ=[1,108],$VK=[1,109],$VL=[1,110],$VM=[1,111],$VN=[1,112],$VO=[1,113],$VP=[2,100],$VQ=[1,117],$VR=[1,118],$VS=[1,122],$VT=[40,45],$VU=[22,26],$VV=[1,134],$VW=[2,5,19,27,36,38,39,42,44,46,47,48,49,59,61,62,63,64,92,93,94,95,96],$VX=[22,23,26,28,31,45,52,53,68,69],$VY=[22,23,26,28,31,45,52,53,68,69,70,71],$VZ=[22,23,26,28,31,45,52,53,68,69,70,71,73,74,75,76,77,78,79,80,82],$V_=[22,23,26,28,31,45,52,53,68,69,70,71,77,78,79,80,82],$V$=[1,193],$V01=[1,198],$V11=[1,199],$V21=[26,42],$V31=[42,44,46];
var parser = {trace: function trace () { },
yy: {},
symbols_: {"error":2,"Init":3,"INSTRUCCIONES":4,"EOF":5,"INSTRUCCION":6,"IMPRIMIR":7,"FUNCION":8,"DECLARACION":9,"ASIGNACION":10,"IF":11,"SWITCH":12,"WHILE":13,"DO_WHILE":14,"FOR":15,"TRANSFERENCIA":16,"TYPE":17,"LLAMADA":18,"rimprimir":19,"parIz":20,"EXPRESION":21,"parDer":22,"pcoma":23,"TIPOS":24,"DECLARACION_EXPR":25,"coma":26,"Identificador":27,"igual":28,"AUMENTO":29,"llaveizq":30,"llaveder":31,"DIMENSION_ARRAY":32,"TAM_ARRAY":33,"ASIGNACION_ARRAY":34,"LISTADO_ARRAY":35,"if":36,"CUERPO_SENTENCIAS":37,"else":38,"switch":39,"corcheIz":40,"CUERPO_SWITCH":41,"corcheDer":42,"CASO":43,"case":44,"dospuntos":45,"default":46,"while":47,"do":48,"for":49,"CONDICION_FOR":50,"let":51,"in":52,"of":53,"NOMBRE_FUNCION":54,"PARAMETROS":55,"CUERPO_FUNCIONES":56,"LISTADO_PARAMETROS":57,"PARAMETRO":58,"fun":59,"PARAMETROS_ENTRADA":60,"break":61,"continue":62,"return":63,"type":64,"CUERPO_TYPE":65,"LISTADO_VALORES":66,"CLAVE_VALOR":67,"menos":68,"mas":69,"por":70,"div":71,"potencia":72,"mayor":73,"menor":74,"mayorigual":75,"menorigual":76,"igualacion":77,"diferente":78,"and":79,"or":80,"not":81,"interrogacion":82,"LITERAL":83,"numdecimal":84,"numerico":85,"cadena":86,"verdadero":87,"falso":88,"nulo":89,"aumento":90,"decremento":91,"string":92,"bolean":93,"number":94,"void":95,"decimal":96,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",19:"rimprimir",20:"parIz",22:"parDer",23:"pcoma",26:"coma",27:"Identificador",28:"igual",30:"llaveizq",31:"llaveder",36:"if",38:"else",39:"switch",40:"corcheIz",42:"corcheDer",44:"case",45:"dospuntos",46:"default",47:"while",48:"do",49:"for",51:"let",52:"in",53:"of",59:"fun",61:"break",62:"continue",63:"return",64:"type",68:"menos",69:"mas",70:"por",71:"div",72:"potencia",73:"mayor",74:"menor",75:"mayorigual",76:"menorigual",77:"igualacion",78:"diferente",79:"and",80:"or",81:"not",82:"interrogacion",84:"numdecimal",85:"numerico",86:"cadena",87:"verdadero",88:"falso",89:"nulo",90:"aumento",91:"decremento",92:"string",93:"bolean",94:"number",95:"void",96:"decimal"},
productions_: [0,[3,2],[4,2],[4,1],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[7,5],[9,3],[25,3],[25,1],[10,5],[10,4],[10,2],[10,7],[32,2],[32,1],[33,2],[34,3],[34,2],[35,3],[35,3],[35,1],[35,1],[11,5],[11,7],[11,7],[12,7],[41,2],[41,1],[43,4],[43,3],[13,5],[14,7],[15,5],[50,8],[50,7],[50,4],[50,3],[50,4],[50,3],[8,3],[8,5],[55,3],[55,2],[56,3],[56,2],[57,3],[57,1],[58,3],[54,2],[18,4],[18,5],[60,3],[60,1],[16,2],[16,2],[16,3],[16,2],[17,5],[65,3],[65,2],[66,3],[66,1],[67,3],[21,2],[21,3],[21,3],[21,3],[21,3],[21,3],[21,3],[21,3],[21,3],[21,3],[21,3],[21,3],[21,3],[21,3],[21,2],[21,5],[21,3],[21,1],[83,1],[83,1],[83,1],[83,1],[83,1],[83,1],[83,1],[83,1],[83,3],[83,4],[83,4],[29,2],[29,2],[24,1],[24,1],[24,1],[24,1],[24,1],[24,1],[37,3],[37,2]],
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
case 7: case 8: case 9: case 10: case 11: case 12: case 13: case 14: case 15: case 60: case 73: case 99: case 111:
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
 
                this.$ = new Print($$[$0-2], _$[$0-4].first_line, _$[$0-4].first_column,[$$[$0-4],$$[$0-3],$$[$0-2],$$[$0-1],$$[$0]]);
            
break;
case 18:

                this.$=new ListadoDeclaracion($$[$0-2], $$[$0-1],this._$.first_line ,this._$.first_column);
            
break;
case 19: case 30: case 31:

                    $$[$0-2].push($$[$0]);
                    this.$=$$[$0-2];
                
break;
case 20: case 39:

                    this.$=[$$[$0]];
                
break;
case 21:

                this.$=new Declaration($$[$0-3],$$[$0-1],this._$.first_line,this._$.first_column, $$[$0-4]);
            
break;
case 22:

                this.$=new Asignacion($$[$0-3],$$[$0-1], _$[$0-3].first_line, _$[$0-3].first_column);

            
break;
case 23:

                this.$=$$[$0-1];
            
break;
case 24:

                this.$=new AsignacionArray($$[$0-6],$$[$0-4],$$[$0-1],_$[$0-6].first_line, _$[$0-6].first_column);
            
break;
case 25:

                        $$[$0-1].push($$[$0]);
                        this.$=$$[$0-1];
                    
break;
case 26: case 32: case 33: case 64:
this.$=[$$[$0]];
break;
case 27: case 29: case 108:
this.$=0;
break;
case 28: case 53:
this.$=$$[$0-1];
break;
case 34:
 
        this.$= new If($$[$0-2],$$[$0],null, _$[$0-4].first_line, _$[$0-4].first_column);
    
break;
case 35: case 36:

        this.$= new If($$[$0-4],$$[$0-2],$$[$0], _$[$0-6].first_line, _$[$0-6].first_column);
    
break;
case 37:

            this.$=new Switch($$[$0-4],$$[$0-1],_$[$0-6].first_line, _$[$0-6].first_column);
        
break;
case 38:

                    $$[$0-1].push($$[$0]);
                    this.$=$$[$0-1];
                
break;
case 40:

            this.$= new Caso($$[$0-2],$$[$0],CaseOption.NORMAL,_$[$0-3].first_line, _$[$0-3].first_column);
        
break;
case 41:

            this.$= new Caso(new Literal("true",this._$.first_line ,this._$.first_column,2),$$[$0],CaseOption.DEFAULT,_$[$0-2].first_line, _$[$0-2].first_column);
        
break;
case 42:

            this.$ = new While($$[$0-2], $$[$0], _$[$0-4].first_line, _$[$0-4].first_column);
        
break;
case 43:

            this.$ = new DoWhile($$[$0-2], $$[$0-5], _$[$0-6].first_line, _$[$0-6].first_column);
        
break;
case 44:

        this.$= new For($$[$0-2], $$[$0], _$[$0-4].first_line, _$[$0-4].first_column);
    
break;
case 45:

                    this.$=new CondicionFor($$[$0-6],$$[$0-4],$$[$0-2],$$[$0],ForOption.NORMALD,_$[$0-7].first_line, _$[$0-7].first_column);
                
break;
case 46:

                    this.$=new CondicionFor($$[$0-5],$$[$0-3],$$[$0-1],$$[$01],ForOption.NORMAL,_$[$0-6].first_line, _$[$0-6].first_column);
                
break;
case 47: case 49:
this.$=$$[$0-3]+" "+$$[$0-2]+" "+$$[$0-1]+" "+$$[$0];
break;
case 48: case 50:
this.$=$$[$0-2]+" "+$$[$0-1]+" "+$$[$0];
break;
case 51:
      
                this.$= new Funcion($$[$0-2],$$[$0-1],$$[$0],8,_$[$0-2].first_line, _$[$0-2].first_column);
            
break;
case 52:

                this.$= new Funcion($$[$0-4],$$[$0-3],$$[$0],$$[$0-1],_$[$0-4].first_line, _$[$0-4].first_column);
            
break;
case 54:
this.$=[];
break;
case 55:

                        this.$=new CuerpoFuncion($$[$0-1],this._$.first_line ,this._$.first_column);
                    
break;
case 56: case 113:
this.$=null;
break;
case 57: case 63:

                        $$[$0-2].push($$[$0]);
                        this.$=$$[$0-2];
                    
break;
case 58:

                        this.$=[$$[$0]];
                    
break;
case 59:

            this.$=this.$=new  Declaration($$[$0-2], new Literal("null",this._$.first_line ,this._$.first_column,$$[$0]), this._$.first_line ,this._$.first_column);
        
break;
case 61:

                this.$=new Llamada($$[$0-3],[],_$[$0-3].first_line, _$[$0-3].first_column);
            
break;
case 62:

                this.$=new Llamada($$[$0-4],$$[$0-2],_$[$0-4].first_line, _$[$0-4].first_column);
            
break;
case 65:
this.$=new Break(_$[$0-1].first_line, _$[$0-1].first_column);
break;
case 66:
this.$=new Continue(_$[$0-1].first_line, _$[$0-1].first_column);
break;
case 67:
this.$=new Return(_$[$0-2].first_line, _$[$0-2].first_column,$$[$0-1]);
break;
case 68:
this.$=new Return(_$[$0-1].first_line, _$[$0-1].first_column,null);
break;
case 69:
this.$=$$[$0-4]+" "+$$[$0-3]+$$[$0-2]+$$[$0-1]+"\n";
break;
case 70:
this.$=$$[$0-2]+"\n"+$$[$0-1]+"\n"+$$[$0];
break;
case 71:
this.$=$$[$0-1]+"\n\n"+$$[$0];
break;
case 72:
this.$=$$[$0-2]+$$[$0-1]+"\n"+$$[$0];
break;
case 74:
this.$=$$[$0-2]+$$[$0-1]+$$[$0];
break;
case 75:

                this.$=new Arithmetic($$[$0],$$[$0],ArithmeticOption.UNARIO,this._$.first_line ,this._$.first_column);
            
break;
case 76:

                this.$=new Arithmetic($$[$0-2],$$[$0],ArithmeticOption.PLUS,this._$.first_line ,this._$.first_column);
            
break;
case 77:

                this.$=new Arithmetic($$[$0-2],$$[$0],ArithmeticOption.MINUS,this._$.first_line ,this._$.first_column);
            
break;
case 78:

                this.$=new Arithmetic($$[$0-2],$$[$0],ArithmeticOption.TIMES,this._$.first_line ,this._$.first_column);
            
break;
case 79:

                this.$=new Arithmetic($$[$0-2],$$[$0],ArithmeticOption.DIV,this._$.first_line ,this._$.first_column);
            
break;
case 80:

                this.$=new Arithmetic($$[$0-2],$$[$0],ArithmeticOption.POT,this._$.first_line ,this._$.first_column);
            
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
table: [{2:$V0,3:1,4:2,6:3,7:4,8:5,9:6,10:7,11:8,12:9,13:10,14:11,15:12,16:13,17:14,18:15,19:$V1,24:19,27:$V2,29:21,36:$V3,39:$V4,47:$V5,48:$V6,49:$V7,54:18,59:$V8,61:$V9,62:$Va,63:$Vb,64:$Vc,92:$Vd,93:$Ve,94:$Vf,95:$Vg,96:$Vh},{1:[3]},{2:$V0,5:[1,37],6:38,7:4,8:5,9:6,10:7,11:8,12:9,13:10,14:11,15:12,16:13,17:14,18:15,19:$V1,24:19,27:$V2,29:21,36:$V3,39:$V4,47:$V5,48:$V6,49:$V7,54:18,59:$V8,61:$V9,62:$Va,63:$Vb,64:$Vc,92:$Vd,93:$Ve,94:$Vf,95:$Vg,96:$Vh},o($Vi,[2,3]),o($Vi,[2,4]),o($Vi,[2,5]),o($Vi,[2,6]),o($Vi,[2,7]),o($Vi,[2,8]),o($Vi,[2,9]),o($Vi,[2,10]),o($Vi,[2,11]),o($Vi,[2,12]),o($Vi,[2,13]),o($Vi,[2,14]),o($Vi,[2,15]),o($Vi,[2,16]),{20:[1,39]},{20:[1,41],55:40},{25:42,27:[1,43]},{20:[1,46],27:$Vj,28:[1,44],30:[1,45],90:$Vk,91:$Vl},{23:[1,49]},{20:[1,50]},{20:[1,51]},{20:[1,52]},{37:53,40:$Vm},{20:[1,55]},{23:[1,56]},{23:[1,57]},{20:$Vn,21:58,23:[1,59],27:$Vo,29:70,68:$Vp,81:$Vq,83:63,84:$Vr,85:$Vs,86:$Vt,87:$Vu,88:$Vv,89:$Vw},{27:[1,72]},{27:[1,73]},o($Vx,[2,106]),o($Vx,[2,107]),o($Vx,[2,108]),o($Vx,[2,109]),o($Vx,[2,110]),{1:[2,1]},o($Vi,[2,2]),{20:$Vn,21:74,27:$Vo,29:70,68:$Vp,81:$Vq,83:63,84:$Vr,85:$Vs,86:$Vt,87:$Vu,88:$Vv,89:$Vw},{40:[1,77],45:[1,76],56:75},{22:[1,79],27:$Vy,57:78,58:80},{23:[1,82],26:[1,83]},o($Vz,[2,20],{28:[1,84]}),{20:$Vn,21:85,27:$Vo,29:70,68:$Vp,81:$Vq,83:63,84:$Vr,85:$Vs,86:$Vt,87:$Vu,88:$Vv,89:$Vw},{20:$Vn,21:86,27:$Vo,29:70,68:$Vp,81:$Vq,83:63,84:$Vr,85:$Vs,86:$Vt,87:$Vu,88:$Vv,89:$Vw},{20:$Vn,21:89,22:[1,87],27:$Vo,29:70,60:88,68:$Vp,81:$Vq,83:63,84:$Vr,85:$Vs,86:$Vt,87:$Vu,88:$Vv,89:$Vw},o($VA,[2,104]),o($VA,[2,105]),o($Vi,[2,23]),{20:$Vn,21:90,27:$Vo,29:70,68:$Vp,81:$Vq,83:63,84:$Vr,85:$Vs,86:$Vt,87:$Vu,88:$Vv,89:$Vw},{20:$Vn,21:91,27:$Vo,29:70,68:$Vp,81:$Vq,83:63,84:$Vr,85:$Vs,86:$Vt,87:$Vu,88:$Vv,89:$Vw},{20:$Vn,21:92,27:$Vo,29:70,68:$Vp,81:$Vq,83:63,84:$Vr,85:$Vs,86:$Vt,87:$Vu,88:$Vv,89:$Vw},{47:[1,93]},{2:$V0,4:94,6:3,7:4,8:5,9:6,10:7,11:8,12:9,13:10,14:11,15:12,16:13,17:14,18:15,19:$V1,24:19,27:$V2,29:21,36:$V3,39:$V4,42:[1,95],47:$V5,48:$V6,49:$V7,54:18,59:$V8,61:$V9,62:$Va,63:$Vb,64:$Vc,92:$Vd,93:$Ve,94:$Vf,95:$Vg,96:$Vh},{20:$Vn,21:98,27:$Vo,29:70,50:96,51:[1,97],68:$Vp,81:$Vq,83:63,84:$Vr,85:$Vs,86:$Vt,87:$Vu,88:$Vv,89:$Vw},o($Vi,[2,65]),o($Vi,[2,66]),{23:[1,99],68:$VB,69:$VC,70:$VD,71:$VE,72:$VF,73:$VG,74:$VH,75:$VI,76:$VJ,77:$VK,78:$VL,79:$VM,80:$VN,82:$VO},o($Vi,[2,68]),{20:$Vn,21:114,27:$Vo,29:70,68:$Vp,81:$Vq,83:63,84:$Vr,85:$Vs,86:$Vt,87:$Vu,88:$Vv,89:$Vw},{20:$Vn,21:115,27:$Vo,29:70,68:$Vp,81:$Vq,83:63,84:$Vr,85:$Vs,86:$Vt,87:$Vu,88:$Vv,89:$Vw},{20:$Vn,21:116,27:$Vo,29:70,68:$Vp,81:$Vq,83:63,84:$Vr,85:$Vs,86:$Vt,87:$Vu,88:$Vv,89:$Vw},o($VA,[2,92]),o($VA,[2,93]),o($VA,[2,94]),o($VA,[2,95]),o($VA,[2,96]),o($VA,[2,97]),o($VA,[2,98]),o($VA,[2,99]),o($VA,$VP,{20:$VQ,30:$VR,90:$Vk,91:$Vl}),{28:[1,119]},{20:[2,60]},{22:[1,120],68:$VB,69:$VC,70:$VD,71:$VE,72:$VF,73:$VG,74:$VH,75:$VI,76:$VJ,77:$VK,78:$VL,79:$VM,80:$VN,82:$VO},o($Vi,[2,51]),{24:121,27:$VS,92:$Vd,93:$Ve,94:$Vf,95:$Vg,96:$Vh},{2:$V0,4:123,6:3,7:4,8:5,9:6,10:7,11:8,12:9,13:10,14:11,15:12,16:13,17:14,18:15,19:$V1,24:19,27:$V2,29:21,36:$V3,39:$V4,42:[1,124],47:$V5,48:$V6,49:$V7,54:18,59:$V8,61:$V9,62:$Va,63:$Vb,64:$Vc,92:$Vd,93:$Ve,94:$Vf,95:$Vg,96:$Vh},{22:[1,125],26:[1,126]},o($VT,[2,54]),o($VU,[2,58]),{45:[1,127]},o($Vi,[2,18]),{27:[1,128]},{20:$Vn,21:129,27:$Vo,29:70,68:$Vp,81:$Vq,83:63,84:$Vr,85:$Vs,86:$Vt,87:$Vu,88:$Vv,89:$Vw},{23:[1,130],68:$VB,69:$VC,70:$VD,71:$VE,72:$VF,73:$VG,74:$VH,75:$VI,76:$VJ,77:$VK,78:$VL,79:$VM,80:$VN,82:$VO},{31:[1,131],68:$VB,69:$VC,70:$VD,71:$VE,72:$VF,73:$VG,74:$VH,75:$VI,76:$VJ,77:$VK,78:$VL,79:$VM,80:$VN,82:$VO},{23:[1,132]},{22:[1,133],26:$VV},o($VU,[2,64],{68:$VB,69:$VC,70:$VD,71:$VE,72:$VF,73:$VG,74:$VH,75:$VI,76:$VJ,77:$VK,78:$VL,79:$VM,80:$VN,82:$VO}),{22:[1,135],68:$VB,69:$VC,70:$VD,71:$VE,72:$VF,73:$VG,74:$VH,75:$VI,76:$VJ,77:$VK,78:$VL,79:$VM,80:$VN,82:$VO},{22:[1,136],68:$VB,69:$VC,70:$VD,71:$VE,72:$VF,73:$VG,74:$VH,75:$VI,76:$VJ,77:$VK,78:$VL,79:$VM,80:$VN,82:$VO},{22:[1,137],68:$VB,69:$VC,70:$VD,71:$VE,72:$VF,73:$VG,74:$VH,75:$VI,76:$VJ,77:$VK,78:$VL,79:$VM,80:$VN,82:$VO},{20:[1,138]},{2:$V0,6:38,7:4,8:5,9:6,10:7,11:8,12:9,13:10,14:11,15:12,16:13,17:14,18:15,19:$V1,24:19,27:$V2,29:21,36:$V3,39:$V4,42:[1,139],47:$V5,48:$V6,49:$V7,54:18,59:$V8,61:$V9,62:$Va,63:$Vb,64:$Vc,92:$Vd,93:$Ve,94:$Vf,95:$Vg,96:$Vh},o($VW,[2,113]),{22:[1,140]},{20:$Vn,21:142,27:[1,141],29:70,68:$Vp,81:$Vq,83:63,84:$Vr,85:$Vs,86:$Vt,87:$Vu,88:$Vv,89:$Vw},{28:[1,143],52:[1,144],53:[1,145],68:$VB,69:$VC,70:$VD,71:$VE,72:$VF,73:$VG,74:$VH,75:$VI,76:$VJ,77:$VK,78:$VL,79:$VM,80:$VN,82:$VO},o($Vi,[2,67]),{20:$Vn,21:146,27:$Vo,29:70,68:$Vp,81:$Vq,83:63,84:$Vr,85:$Vs,86:$Vt,87:$Vu,88:$Vv,89:$Vw},{20:$Vn,21:147,27:$Vo,29:70,68:$Vp,81:$Vq,83:63,84:$Vr,85:$Vs,86:$Vt,87:$Vu,88:$Vv,89:$Vw},{20:$Vn,21:148,27:$Vo,29:70,68:$Vp,81:$Vq,83:63,84:$Vr,85:$Vs,86:$Vt,87:$Vu,88:$Vv,89:$Vw},{20:$Vn,21:149,27:$Vo,29:70,68:$Vp,81:$Vq,83:63,84:$Vr,85:$Vs,86:$Vt,87:$Vu,88:$Vv,89:$Vw},{20:$Vn,21:150,27:$Vo,29:70,68:$Vp,81:$Vq,83:63,84:$Vr,85:$Vs,86:$Vt,87:$Vu,88:$Vv,89:$Vw},{20:$Vn,21:151,27:$Vo,29:70,68:$Vp,81:$Vq,83:63,84:$Vr,85:$Vs,86:$Vt,87:$Vu,88:$Vv,89:$Vw},{20:$Vn,21:152,27:$Vo,29:70,68:$Vp,81:$Vq,83:63,84:$Vr,85:$Vs,86:$Vt,87:$Vu,88:$Vv,89:$Vw},{20:$Vn,21:153,27:$Vo,29:70,68:$Vp,81:$Vq,83:63,84:$Vr,85:$Vs,86:$Vt,87:$Vu,88:$Vv,89:$Vw},{20:$Vn,21:154,27:$Vo,29:70,68:$Vp,81:$Vq,83:63,84:$Vr,85:$Vs,86:$Vt,87:$Vu,88:$Vv,89:$Vw},{20:$Vn,21:155,27:$Vo,29:70,68:$Vp,81:$Vq,83:63,84:$Vr,85:$Vs,86:$Vt,87:$Vu,88:$Vv,89:$Vw},{20:$Vn,21:156,27:$Vo,29:70,68:$Vp,81:$Vq,83:63,84:$Vr,85:$Vs,86:$Vt,87:$Vu,88:$Vv,89:$Vw},{20:$Vn,21:157,27:$Vo,29:70,68:$Vp,81:$Vq,83:63,84:$Vr,85:$Vs,86:$Vt,87:$Vu,88:$Vv,89:$Vw},{20:$Vn,21:158,27:$Vo,29:70,68:$Vp,81:$Vq,83:63,84:$Vr,85:$Vs,86:$Vt,87:$Vu,88:$Vv,89:$Vw},{20:$Vn,21:159,27:$Vo,29:70,68:$Vp,81:$Vq,83:63,84:$Vr,85:$Vs,86:$Vt,87:$Vu,88:$Vv,89:$Vw},o($VA,[2,75]),o($VA,[2,89]),{22:[1,160],68:$VB,69:$VC,70:$VD,71:$VE,72:$VF,73:$VG,74:$VH,75:$VI,76:$VJ,77:$VK,78:$VL,79:$VM,80:$VN,82:$VO},{20:$Vn,21:89,22:[1,161],27:$Vo,29:70,60:162,68:$Vp,81:$Vq,83:63,84:$Vr,85:$Vs,86:$Vt,87:$Vu,88:$Vv,89:$Vw},{20:$Vn,21:163,27:$Vo,29:70,68:$Vp,81:$Vq,83:63,84:$Vr,85:$Vs,86:$Vt,87:$Vu,88:$Vv,89:$Vw},{40:[1,165],65:164},{23:[1,166]},{37:167,40:$Vm},o([22,26,40,42],$Vj),{2:$V0,6:38,7:4,8:5,9:6,10:7,11:8,12:9,13:10,14:11,15:12,16:13,17:14,18:15,19:$V1,24:19,27:$V2,29:21,36:$V3,39:$V4,42:[1,168],47:$V5,48:$V6,49:$V7,54:18,59:$V8,61:$V9,62:$Va,63:$Vb,64:$Vc,92:$Vd,93:$Ve,94:$Vf,95:$Vg,96:$Vh},o($Vi,[2,56]),o($VT,[2,53]),{27:$Vy,58:169},{24:170,27:$VS,92:$Vd,93:$Ve,94:$Vf,95:$Vg,96:$Vh},o($Vz,[2,19]),{23:[1,171],68:$VB,69:$VC,70:$VD,71:$VE,72:$VF,73:$VG,74:$VH,75:$VI,76:$VJ,77:$VK,78:$VL,79:$VM,80:$VN,82:$VO},o($Vi,[2,22]),{28:[1,172]},o($Vi,[2,61]),{23:[1,173]},{20:$Vn,21:174,27:$Vo,29:70,68:$Vp,81:$Vq,83:63,84:$Vr,85:$Vs,86:$Vt,87:$Vu,88:$Vv,89:$Vw},{37:175,40:$Vm},{40:[1,176]},{37:177,40:$Vm},{20:$Vn,21:178,27:$Vo,29:70,68:$Vp,81:$Vq,83:63,84:$Vr,85:$Vs,86:$Vt,87:$Vu,88:$Vv,89:$Vw},o($VW,[2,112]),{37:179,40:$Vm},o([52,53,68,69,70,71,72,73,74,75,76,77,78,79,80,82],$VP,{20:$VQ,28:[1,180],30:$VR,90:$Vk,91:$Vl}),{52:[1,181],53:[1,182],68:$VB,69:$VC,70:$VD,71:$VE,72:$VF,73:$VG,74:$VH,75:$VI,76:$VJ,77:$VK,78:$VL,79:$VM,80:$VN,82:$VO},{20:$Vn,21:183,27:$Vo,29:70,68:$Vp,81:$Vq,83:63,84:$Vr,85:$Vs,86:$Vt,87:$Vu,88:$Vv,89:$Vw},{20:$Vn,21:184,27:$Vo,29:70,68:$Vp,81:$Vq,83:63,84:$Vr,85:$Vs,86:$Vt,87:$Vu,88:$Vv,89:$Vw},{20:$Vn,21:185,27:$Vo,29:70,68:$Vp,81:$Vq,83:63,84:$Vr,85:$Vs,86:$Vt,87:$Vu,88:$Vv,89:$Vw},o($VX,[2,76],{70:$VD,71:$VE,72:$VF,73:$VG,74:$VH,75:$VI,76:$VJ,77:$VK,78:$VL,79:$VM,80:$VN,82:$VO}),o($VX,[2,77],{70:$VD,71:$VE,72:$VF,73:$VG,74:$VH,75:$VI,76:$VJ,77:$VK,78:$VL,79:$VM,80:$VN,82:$VO}),o($VY,[2,78],{72:$VF,73:$VG,74:$VH,75:$VI,76:$VJ,77:$VK,78:$VL,79:$VM,80:$VN,82:$VO}),o($VY,[2,79],{72:$VF,73:$VG,74:$VH,75:$VI,76:$VJ,77:$VK,78:$VL,79:$VM,80:$VN,82:$VO}),o($VA,[2,80]),o($VZ,[2,81],{72:$VF}),o($VZ,[2,82],{72:$VF}),o($VZ,[2,83],{72:$VF}),o($VZ,[2,84],{72:$VF}),o($V_,[2,85],{72:$VF,73:$VG,74:$VH,75:$VI,76:$VJ}),o($V_,[2,86],{72:$VF,73:$VG,74:$VH,75:$VI,76:$VJ}),o([22,23,26,28,31,45,52,53,68,69,70,71,79,80],[2,87],{72:$VF,73:$VG,74:$VH,75:$VI,76:$VJ,77:$VK,78:$VL,82:$VO}),o([22,23,26,28,31,45,52,53,68,69,70,71,80],[2,88],{72:$VF,73:$VG,74:$VH,75:$VI,76:$VJ,77:$VK,78:$VL,79:$VM,82:$VO}),{45:[1,186],68:$VB,69:$VC,70:$VD,71:$VE,72:$VF,73:$VG,74:$VH,75:$VI,76:$VJ,77:$VK,78:$VL,79:$VM,80:$VN,82:$VO},o($VA,[2,91]),o($VA,[2,101]),{22:[1,187],26:$VV},{31:[1,188],68:$VB,69:$VC,70:$VD,71:$VE,72:$VF,73:$VG,74:$VH,75:$VI,76:$VJ,77:$VK,78:$VL,79:$VM,80:$VN,82:$VO},{23:[1,189]},{27:$V$,42:[1,191],66:190,67:192},o($Vi,[2,17]),o($Vi,[2,52]),o($Vi,[2,55]),o($VU,[2,57]),o($VU,[2,59]),o($Vi,[2,21]),{20:$Vn,21:194,27:$Vo,29:70,68:$Vp,81:$Vq,83:63,84:$Vr,85:$Vs,86:$Vt,87:$Vu,88:$Vv,89:$Vw},o($Vi,[2,62]),o($VU,[2,63],{68:$VB,69:$VC,70:$VD,71:$VE,72:$VF,73:$VG,74:$VH,75:$VI,76:$VJ,77:$VK,78:$VL,79:$VM,80:$VN,82:$VO}),o($Vi,[2,34],{38:[1,195]}),{41:196,43:197,44:$V01,46:$V11},o($Vi,[2,42]),{22:[1,200],68:$VB,69:$VC,70:$VD,71:$VE,72:$VF,73:$VG,74:$VH,75:$VI,76:$VJ,77:$VK,78:$VL,79:$VM,80:$VN,82:$VO},o($Vi,[2,44]),{20:$Vn,21:201,27:$Vo,29:70,68:$Vp,81:$Vq,83:63,84:$Vr,85:$Vs,86:$Vt,87:$Vu,88:$Vv,89:$Vw},{20:$Vn,21:202,27:$Vo,29:70,68:$Vp,81:$Vq,83:63,84:$Vr,85:$Vs,86:$Vt,87:$Vu,88:$Vv,89:$Vw},{20:$Vn,21:203,27:$Vo,29:70,68:$Vp,81:$Vq,83:63,84:$Vr,85:$Vs,86:$Vt,87:$Vu,88:$Vv,89:$Vw},{23:[1,204],68:$VB,69:$VC,70:$VD,71:$VE,72:$VF,73:$VG,74:$VH,75:$VI,76:$VJ,77:$VK,78:$VL,79:$VM,80:$VN,82:$VO},{22:[2,48],68:$VB,69:$VC,70:$VD,71:$VE,72:$VF,73:$VG,74:$VH,75:$VI,76:$VJ,77:$VK,78:$VL,79:$VM,80:$VN,82:$VO},{22:[2,50],68:$VB,69:$VC,70:$VD,71:$VE,72:$VF,73:$VG,74:$VH,75:$VI,76:$VJ,77:$VK,78:$VL,79:$VM,80:$VN,82:$VO},{20:$Vn,21:205,27:$Vo,29:70,68:$Vp,81:$Vq,83:63,84:$Vr,85:$Vs,86:$Vt,87:$Vu,88:$Vv,89:$Vw},o($VA,[2,102]),o($VA,[2,103]),o($Vi,[2,69]),{26:[1,207],42:[1,206]},{23:[2,71]},o($V21,[2,73]),{45:[1,208]},{23:[1,209],68:$VB,69:$VC,70:$VD,71:$VE,72:$VF,73:$VG,74:$VH,75:$VI,76:$VJ,77:$VK,78:$VL,79:$VM,80:$VN,82:$VO},{11:210,36:$V3,37:211,40:$Vm},{42:[1,212],43:213,44:$V01,46:$V11},o($V31,[2,39]),{20:$Vn,21:214,27:$Vo,29:70,68:$Vp,81:$Vq,83:63,84:$Vr,85:$Vs,86:$Vt,87:$Vu,88:$Vv,89:$Vw},{45:[1,215]},{23:[1,216]},{23:[1,217],68:$VB,69:$VC,70:$VD,71:$VE,72:$VF,73:$VG,74:$VH,75:$VI,76:$VJ,77:$VK,78:$VL,79:$VM,80:$VN,82:$VO},{22:[2,47],68:$VB,69:$VC,70:$VD,71:$VE,72:$VF,73:$VG,74:$VH,75:$VI,76:$VJ,77:$VK,78:$VL,79:$VM,80:$VN,82:$VO},{22:[2,49],68:$VB,69:$VC,70:$VD,71:$VE,72:$VF,73:$VG,74:$VH,75:$VI,76:$VJ,77:$VK,78:$VL,79:$VM,80:$VN,82:$VO},{20:$Vn,21:218,27:$Vo,29:70,68:$Vp,81:$Vq,83:63,84:$Vr,85:$Vs,86:$Vt,87:$Vu,88:$Vv,89:$Vw},o($V_,[2,90],{72:$VF,73:$VG,74:$VH,75:$VI,76:$VJ}),{23:[2,70]},{27:$V$,67:219},{24:220,27:$VS,92:$Vd,93:$Ve,94:$Vf,95:$Vg,96:$Vh},o($Vi,[2,24]),o($Vi,[2,35]),o($Vi,[2,36]),o($Vi,[2,37]),o($V31,[2,38]),{45:[1,221],68:$VB,69:$VC,70:$VD,71:$VE,72:$VF,73:$VG,74:$VH,75:$VI,76:$VJ,77:$VK,78:$VL,79:$VM,80:$VN,82:$VO},{2:$V0,4:222,6:3,7:4,8:5,9:6,10:7,11:8,12:9,13:10,14:11,15:12,16:13,17:14,18:15,19:$V1,24:19,27:$V2,29:21,36:$V3,39:$V4,47:$V5,48:$V6,49:$V7,54:18,59:$V8,61:$V9,62:$Va,63:$Vb,64:$Vc,92:$Vd,93:$Ve,94:$Vf,95:$Vg,96:$Vh},o($Vi,[2,43]),{20:$Vn,21:223,27:$Vo,29:70,68:$Vp,81:$Vq,83:63,84:$Vr,85:$Vs,86:$Vt,87:$Vu,88:$Vv,89:$Vw},{23:[1,224],68:$VB,69:$VC,70:$VD,71:$VE,72:$VF,73:$VG,74:$VH,75:$VI,76:$VJ,77:$VK,78:$VL,79:$VM,80:$VN,82:$VO},o($V21,[2,72]),o($V21,[2,74]),{2:$V0,4:225,6:3,7:4,8:5,9:6,10:7,11:8,12:9,13:10,14:11,15:12,16:13,17:14,18:15,19:$V1,24:19,27:$V2,29:21,36:$V3,39:$V4,47:$V5,48:$V6,49:$V7,54:18,59:$V8,61:$V9,62:$Va,63:$Vb,64:$Vc,92:$Vd,93:$Ve,94:$Vf,95:$Vg,96:$Vh},o($V31,[2,41],{7:4,8:5,9:6,10:7,11:8,12:9,13:10,14:11,15:12,16:13,17:14,18:15,54:18,24:19,29:21,6:38,2:$V0,19:$V1,27:$V2,36:$V3,39:$V4,47:$V5,48:$V6,49:$V7,59:$V8,61:$V9,62:$Va,63:$Vb,64:$Vc,92:$Vd,93:$Ve,94:$Vf,95:$Vg,96:$Vh}),{23:[1,226],68:$VB,69:$VC,70:$VD,71:$VE,72:$VF,73:$VG,74:$VH,75:$VI,76:$VJ,77:$VK,78:$VL,79:$VM,80:$VN,82:$VO},{20:$Vn,21:227,27:$Vo,29:70,68:$Vp,81:$Vq,83:63,84:$Vr,85:$Vs,86:$Vt,87:$Vu,88:$Vv,89:$Vw},o($V31,[2,40],{7:4,8:5,9:6,10:7,11:8,12:9,13:10,14:11,15:12,16:13,17:14,18:15,54:18,24:19,29:21,6:38,2:$V0,19:$V1,27:$V2,36:$V3,39:$V4,47:$V5,48:$V6,49:$V7,59:$V8,61:$V9,62:$Va,63:$Vb,64:$Vc,92:$Vd,93:$Ve,94:$Vf,95:$Vg,96:$Vh}),{20:$Vn,21:228,27:$Vo,29:70,68:$Vp,81:$Vq,83:63,84:$Vr,85:$Vs,86:$Vt,87:$Vu,88:$Vv,89:$Vw},{22:[2,46],68:$VB,69:$VC,70:$VD,71:$VE,72:$VF,73:$VG,74:$VH,75:$VI,76:$VJ,77:$VK,78:$VL,79:$VM,80:$VN,82:$VO},{22:[2,45],68:$VB,69:$VC,70:$VD,71:$VE,72:$VF,73:$VG,74:$VH,75:$VI,76:$VJ,77:$VK,78:$VL,79:$VM,80:$VN,82:$VO}],
defaultActions: {37:[2,1],73:[2,60],191:[2,71],206:[2,70]},
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
case 3:return 84
break;
case 4:return 85
break;
case 5:return 20
break;
case 6:return 22
break;
case 7:return 94
break;
case 8:return 96
break;
case 9:return 93
break;
case 10:return 92
break;
case 11:return 95          
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
case 18:return 30
break;
case 19:return 31
break;
case 20:return 72
break;
case 21:return 23
break;
case 22:return 45
break;
case 23:return 70
break;
case 24:return 71
break;
case 25:return 91
break;
case 26:return 90
break;
case 27:return 68
break;
case 28:return 69
break;
case 29:return 82 
break;
case 30:return 'mod'
break;
case 31:return 75
break;
case 32:return 76
break;
case 33:return 73
break;
case 34:return 74
break;
case 35:return 77
break;
case 36:return 78
break;
case 37:return 79
break;
case 38:return 80
break;
case 39:return 81
break;
case 40:return 23
break;
case 41:return 28
break;
case 42:return 89
break;
case 43:return 87
break;
case 44:return 88
break;
case 45:return 19
break;
case 46:return 51
break;
case 47:return 'const'   
break;
case 48:return 26
break;
case 49:return 36
break;
case 50:return 38
break;
case 51:return 39
break;
case 52:return 61
break;
case 53:return 63
break;
case 54:return 62
break;
case 55:return 46
break;
case 56:return 44
break;
case 57:return 47
break;
case 58:return 48
break;
case 59:return 49
break;
case 60:return 52
break;
case 61:return 53
break;
case 62:return 64
break;
case 63:return 27
break;
case 64:return 86
break;
case 65:return 5
break;
case 66:    
                     
                        LISTADOERRORES = LISTADOERRORES +"   "+ "Error Lexico en la linea: "+ yy_.yylineno+" y columna "+ (yy_.yylloc.last_column+1)+"\n";
                    
break;
}
},
rules: [/^(?:\s+)/,/^(?:\/\/.*)/,/^(?:[/][*][^*]*[*]+([^/*][^*]*[*]+)*[/])/,/^(?:([0-9][.][0-9]))/,/^(?:([0-9]+))/,/^(?:\()/,/^(?:\))/,/^(?:int\b)/,/^(?:decimal\b)/,/^(?:boolean\b)/,/^(?:string\b)/,/^(?:void\b)/,/^(?:function\b)/,/^(?:\.)/,/^(?:push\b)/,/^(?:pop\b)/,/^(?:\{)/,/^(?:\})/,/^(?:\[)/,/^(?:\])/,/^(?:\*\*)/,/^(?:;)/,/^(?::)/,/^(?:\*)/,/^(?:\/)/,/^(?:--)/,/^(?:\+\+)/,/^(?:-)/,/^(?:\+)/,/^(?:\?)/,/^(?:%)/,/^(?:>=)/,/^(?:<=)/,/^(?:>)/,/^(?:<)/,/^(?:==)/,/^(?:!=)/,/^(?:&&)/,/^(?:\|\|)/,/^(?:!)/,/^(?:;)/,/^(?:=)/,/^(?:null\b)/,/^(?:true\b)/,/^(?:false\b)/,/^(?:print\b)/,/^(?:let\b)/,/^(?:const\b)/,/^(?:,)/,/^(?:if\b)/,/^(?:else\b)/,/^(?:switch\b)/,/^(?:break\b)/,/^(?:return\b)/,/^(?:continue\b)/,/^(?:default\b)/,/^(?:case\b)/,/^(?:while\b)/,/^(?:do\b)/,/^(?:for\b)/,/^(?:in\b)/,/^(?:of\b)/,/^(?:type\b)/,/^(?:(([A-Za-zÑñ])|_)(([A-Za-zÑñ])+|([0-9])*|_)*)/,/^(?:"([^\"\n\\\\]|\\"|\\)*")/,/^(?:$)/,/^(?:.)/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
return parser;
});