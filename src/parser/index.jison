%{
    
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
%}

%lex
%options case-sensitive
%option yylineno
letras = [A-Za-zÑñ]
digito = [0-9]
number [0-9]+
decimal [0-9][.][0-9]


%%
\s+                             /*Ingorar espacios en blanco*/
"//".*                              // comentario simple línea
[/][*][^*]*[*]+([^/*][^*]*[*]+)*[/] // comentario multiple líneas


{decimal}             return 'decimal'
{number}              return 'numerico'
"("                   return 'parIz'
")"                   return 'parDer'
"int"                 return 'number'
"boolean"             return 'bolean'
"string"              return 'string'
"void"                return 'void'          
"function"            return 'fun'
"."                   return "punto"  
"length"              return "len"
"push"                return "push"
"pop"                 return "pop" 
"{"                   return 'corcheIz'
"}"                   return 'corcheDer'
"["                   return 'llaveizq'
"]"                   return 'llaveder'
"**"                  return 'potencia'
";"                   return 'pcoma'
":"                   return 'dospuntos'
"*"                   return 'por'
"/"                   return 'div'
"--"                  return 'decremento'
"++"                  return 'aumento'
"-"                   return 'menos'
"+"                   return 'mas'
"?"                   return 'interrogacion' 
"%"                   return 'mod'
">="                  return 'mayorigual'
"<="                  return 'menorigual'
">"                   return 'mayor'
"<"                   return 'menor'
"=="                  return 'igualacion'
"!="                  return 'diferente'
"&&"                  return 'and'
"||"                  return 'or'
"!"                   return 'not'
";"                   return 'pcoma'
"="                   return 'igual'
"null"                return 'nulo'
"true"                return 'verdadero'
"false"               return 'falso'
"print"               return 'rimprimir'
"graficar_ts"         return 'graficarts'
"let"                 return 'let'
"const"               return 'const'   
","                   return 'coma'
"if"                  return 'if'
'else'                return 'else'
"switch"              return 'switch'
"break"               return 'break'
"return"              return 'return'
"continue"            return 'continue'
"default"             return 'default'
"case"                return 'case'
"while"               return 'while'
"do"                  return 'do'
"for"                 return 'for'
"in"                  return 'in'
'of'                  return 'of'
"type"                return 'type'
({letras}|"_")({letras}+|{digito}*|"_")*          return 'Identificador'
\"([^\"\n\\\\]|\\\"|\\)*\"  	return 'cadena'
<<EOF>>		          return 'EOF'

.                   %{    
                     
                        LISTADOERRORES = LISTADOERRORES +"   "+ "Error Lexico en la linea: "+ yylineno+" y columna "+ (yylloc.last_column+1)+"\n";
                    %}
/lex
%left  'mas' 'menos'
%left  'por' 'div' 'mod'
%left  or
%left  and
%left 'diferente' 'igualacion' 'interrogacion'
%left 'menor' 'mayor' 'menorigual' 'mayorigual'
%left 'potencia'
%left 'punto'
%right 'not' 'Umenos'  'aumento' 'decremento'
%start Init
%%


Init: INSTRUCCIONES EOF 
    {
        localStorage.setItem("ErroresEjecucion", LISTADOERRORES);
        return $1;
    }
    ;

INSTRUCCIONES: INSTRUCCIONES INSTRUCCION  {
                $1.push($2);
                $$= $1;
            }
            | INSTRUCCION {
                $$=[$1];
            }
            ;


INSTRUCCION:  IMPRIMIR { $$=$1; } //ok
            | FUNCION { $$=$1; } //ok
            | DECLARACION { $$=$1; } //ok
            | ASIGNACION {$$=$1;} //ok
            | IF {$$=$1;} //ok
            | SWITCH{$$=$1;}//ok
            | WHILE {$$=$1;} //ok
            | DO_WHILE {$$=$1;}//ok
            | FOR {$$=$1;}//ok
            | TRANSFERENCIA {$$=$1;}//ok
            | TYPE {$$=$1;}
            | GRAFICAR_TS {$$=$1;}//ok
            | LLAMADA {$$=$1;}
            |error  { 
                        if(this._$.first_column == 0){
                            LISTADOERRORES= LISTADOERRORES +"   "+ ERRS[0];
                            ERRS=[];   
                            $$="\n";
                        }else{

                            ERRS.push("Error Sintactico: \""+ yytext + "\" en la Linea: "+ this._$.first_line + " y Columna: "+ this._$.first_column +"\n");
                        }
                    }

            ;



//================================IMPRIMIR==========================ok
IMPRIMIR : rimprimir parIz EXPRESION parDer pcoma  
            { 
                $$ = new Print($3, @1.first_line, @1.first_column,[$1,$2,$3,$4,$5]);
            }
        ;

//=============================== DECLARACION DE VARIABLES ===============================ok

DECLARACION: let VARIABLE_LET pcoma {$$=new ListadoDeclaracion($2,this._$.first_line ,this._$.first_column);}
            | const VARIABLE_CONST  pcoma {$$=new ListadoDeclaracion($2,this._$.first_line ,this._$.first_column);}
            ;

VARIABLE_LET: VARIABLE_LET coma LETS {
                $1.push($3);
                $$=$1;
            }
            | LETS {
                $$=[$1];
            }
            ;

LETS :  Identificador dospuntos TIPOS
        {
            $$=new  Declaration($1, new Literal("null",this._$.first_line ,this._$.first_column,3), this._$.first_line ,this._$.first_column);
        }                
     |  Identificador dospuntos TIPOS igual EXPRESION
        {
            $$=new  Declaration($1,$5, this._$.first_line ,this._$.first_column,$3);
        }
     |  Identificador 
        {
            $$=new  Declaration($1,new Literal("null",this._$.first_line ,this._$.first_column,3), this._$.first_line ,this._$.first_column);
        }                               
     |  Identificador igual EXPRESION 
        {
            $$=new  Declaration($1,$3, this._$.first_line ,this._$.first_column);
        }
     |  Identificador dospuntos TIPOS DIMENSION_ARRAY
     //id,tipo,dimesion[],valores[],linea,columna
        {
            $$= new DeclaracionArray($1,$3,$4,[],this._$.first_line ,this._$.first_column);
        }
     |  Identificador dospuntos TIPOS DIMENSION_ARRAY igual ASIGNACION_ARRAY 
        {
      //id,tipo,dimesion[],valores[],linea,columna      
            $$= new DeclaracionArray($1,$3,$4,$6,this._$.first_line ,this._$.first_column);
        }  
     ;

VARIABLE_CONST: VARIABLE_CONST coma CONSTA 
                {
                    $1.push($3);
                    $$=$1;
                }
              | CONSTA 
                {
                    $$=[$1];
                }
              ;

        //TODO:
CONSTA : Identificador dospuntos TIPOS igual EXPRESION
            {
                $$=new  Declaration($1,$5, this._$.first_line ,this._$.first_column);
            }
       | Identificador igual EXPRESION
            {
                $$=new  Declaration($1,$3, this._$.first_line ,this._$.first_column);
            }
       ;                

//============================== ASIGNACION DE VARIABLES ==============================================


ASIGNACION: Identificador igual EXPRESION pcoma 
            {
                console.log("asignacion");
                $$=new Asignacion($1,$3, @1.first_line, @1.first_column);

            }
          | AUMENTO  pcoma  
            {
                $$=$1;
            }
          | Identificador punto push parIz EXPRESION parDer pcoma 
            {
                $$=new Push($1,$5,@1.first_line, @1.first_column);
            }

          | Identificador llaveizq EXPRESION llaveder igual EXPRESION pcoma
            {
                console.log("nueva produccion");
                $$=new AsignacionArray($1,$3,$6,@1.first_line, @1.first_column);
            }
          ;

//============================== ARRAYS ======================================

DIMENSION_ARRAY: DIMENSION_ARRAY TAM_ARRAY
                    {
                        $1.push($2);
                        $$=$1;
                    }
               | TAM_ARRAY{$$=[$1];}
               ;

TAM_ARRAY: llaveizq llaveder{$$=0;}
        ;



ASIGNACION_ARRAY: llaveizq LISTADO_ARRAY llaveder{$$=$2;}
                | llaveizq llaveder {$$=0;}
                ;  


LISTADO_ARRAY:  LISTADO_ARRAY coma ASIGNACION_ARRAY
                {
                    $1.push($3);
                    $$=$1;
                }
              | LISTADO_ARRAY coma EXPRESION
                {
                    $1.push($3);
                    $$=$1;
                }
              | ASIGNACION_ARRAY {$$=[$1];}
              | EXPRESION {$$=[$1];}
              ;


//============================== IF =====================================

IF: if parIz EXPRESION parDer CUERPO_SENTENCIAS 
    { 
        $$= new If($3,$5,null, @1.first_line, @1.first_column);
    }
  | if parIz EXPRESION parDer CUERPO_SENTENCIAS else IF 
    {
        $$= new If($3,$5,$7, @1.first_line, @1.first_column);
    }
  | if parIz EXPRESION parDer CUERPO_SENTENCIAS else CUERPO_SENTENCIAS 
    {
        $$= new If($3,$5,$7, @1.first_line, @1.first_column);
    }
  ;

//=============================SWITCH========================================

SWITCH: switch parIz EXPRESION parDer corcheIz CUERPO_SWITCH corcheDer
        {
            $$=new Switch($3,$6,@1.first_line, @1.first_column);
        }
      ;

CUERPO_SWITCH: CUERPO_SWITCH CASO 
                {
                    $1.push($2);
                    $$=$1;
                }
             | CASO 
                {
                    $$=[$1];
                }
             ;

CASO: case  EXPRESION dospuntos INSTRUCCIONES  
        {
            $$= new Caso($2,$4,CaseOption.NORMAL,@1.first_line, @1.first_column);
        } 
    | default dospuntos INSTRUCCIONES
        {
            $$= new Caso(new Literal("true",this._$.first_line ,this._$.first_column,2),$3,CaseOption.DEFAULT,@1.first_line, @1.first_column);
        }     
    ; 


//============================= WHILE ==========================================
WHILE: while parIz EXPRESION parDer CUERPO_SENTENCIAS 
        {
            $$ = new While($3, $5, @1.first_line, @1.first_column);
        }
     ;   

//============================= DO WHILE ======================================
DO_WHILE: do CUERPO_SENTENCIAS while parIz EXPRESION parDer pcoma
        {
            $$ = new DoWhile($5, $2, @1.first_line, @1.first_column);
        }
        ;

//============================= FOR ==========================================
FOR: for parIz CONDICION_FOR parDer CUERPO_SENTENCIAS
    {
        $$= new For($3, $5, @1.first_line, @1.first_column);
    }
   ;


CONDICION_FOR: let Identificador igual EXPRESION pcoma EXPRESION pcoma EXPRESION 
                {
                    $$=new CondicionFor($2,$4,$6,$8,ForOption.NORMALD,@1.first_line, @1.first_column);
                } 
             | EXPRESION igual EXPRESION pcoma EXPRESION pcoma EXPRESION 
                {
                    $$=new CondicionFor($2,$4,$6,$8,ForOption.NORMAL,@1.first_line, @1.first_column);
                } 
                
             | let EXPRESION in EXPRESION {$$=$1+" "+$2+" "+$3+" "+$4;}
             | EXPRESION in EXPRESION {$$=$1+" "+$2+" "+$3;}
             | let EXPRESION of EXPRESION {$$=$1+" "+$2+" "+$3+" "+$4;}
             | EXPRESION of EXPRESION {$$=$1+" "+$2+" "+$3;}
             ;
     

//============================== FUNCIONES ===================================

FUNCION: NOMBRE_FUNCION PARAMETROS CUERPO_FUNCIONES 
            {      
                $$= new Funcion($1,$2,$3,8,@1.first_line, @1.first_column);
            }
       | NOMBRE_FUNCION PARAMETROS dospuntos TIPOS CUERPO_SENTENCIAS 
            {
                $$= new Funcion($1,$2,$5,$4,@1.first_line, @1.first_column);
            }
       ;


PARAMETROS: parIz LISTADO_PARAMETROS parDer {$$=$2;} 
          | parIz parDer {$$=[];}
          ;      

CUERPO_FUNCIONES:corcheIz INSTRUCCIONES corcheDer 
                    {
                        $$=new CuerpoFuncion($2,this._$.first_line ,this._$.first_column);
                    }
                 | corcheIz corcheDer {$$=null;}
                 ; 


LISTADO_PARAMETROS: LISTADO_PARAMETROS coma PARAMETRO 
                    {
                        $1.push($3);
                        $$=$1;
                    }
                  | PARAMETRO 
                    {
                        $$=[$1];
                    }
                  ;


PARAMETRO: Identificador dospuntos TIPOS
        {
            $$=$$=new  Declaration($1, new Literal("null",this._$.first_line ,this._$.first_column,$3), this._$.first_line ,this._$.first_column);
        };


NOMBRE_FUNCION: fun Identificador{$$=$2;};

//============================================LLAMADA FUNCIONES===========================


LLAMADA:  Identificador parIz parDer pcoma
            {
                $$=new Llamada($1,[],@1.first_line, @1.first_column);
            }
        | Identificador parIz PARAMETROS_ENTRADA parDer pcoma
            {
                $$=new Llamada($1,$3,@1.first_line, @1.first_column);
            }
        ;


PARAMETROS_ENTRADA: PARAMETROS_ENTRADA coma EXPRESION
                    {
                        $1.push($3);
                        $$=$1;
                    }
                  | EXPRESION {$$=[$1];}
                  ;

//============================== BREAK =======================================
TRANSFERENCIA : break pcoma {$$=new Break(@1.first_line, @1.first_column);}
              | continue pcoma {$$=new Continue(@1.first_line, @1.first_column);}
              | return EXPRESION pcoma{$$=new Return(@1.first_line, @1.first_column,$2);}
              | return pcoma{$$=new Return(@1.first_line, @1.first_column,null);}
              ;                                                                         



//============================== TYPES =======================================
TYPE: type Identificador igual CUERPO_TYPE pcoma{$$=$1+" "+$2+$3+$4+"\n";}
    ;

CUERPO_TYPE: corcheIz LISTADO_VALORES corcheDer{$$=$1+"\n"+$2+"\n"+$3;}
           | corcheIz corcheDer{$$=$1+"\n\n"+$2;}
           ;


LISTADO_VALORES: LISTADO_VALORES coma CLAVE_VALOR{$$=$1+$2+"\n"+$3;}
               | CLAVE_VALOR {$$=$1;}
               ;


CLAVE_VALOR: Identificador dospuntos TIPOS {$$=$1+$2+$3;}
           ;



//============================== GRAFICAR TS =================================

GRAFICAR_TS: graficarts parIz parDer pcoma 
            {
                $$ = new GraficarTS(this._$.first_line ,this._$.first_column);
            }
        ;
//============================== EXPRESIONES =================================

EXPRESION: menos EXPRESION %prec Umenos 
            {
                $$=new Arithmetic($2,$2,ArithmeticOption.UNARIO,this._$.first_line ,this._$.first_column);
            } 
         | EXPRESION mas EXPRESION   
            {
                $$=new Arithmetic($1,$3,ArithmeticOption.PLUS,this._$.first_line ,this._$.first_column);
            }   
         | EXPRESION menos EXPRESION  
            {
                $$=new Arithmetic($1,$3,ArithmeticOption.MINUS,this._$.first_line ,this._$.first_column);
            }  
         | EXPRESION por EXPRESION  
            {
                $$=new Arithmetic($1,$3,ArithmeticOption.TIMES,this._$.first_line ,this._$.first_column);
            }  
         | EXPRESION div EXPRESION
            {
                $$=new Arithmetic($1,$3,ArithmeticOption.DIV,this._$.first_line ,this._$.first_column);
            }        
         | EXPRESION potencia EXPRESION
            {
                $$=new Arithmetic($1,$3,ArithmeticOption.POT,this._$.first_line ,this._$.first_column);
            } 
         | EXPRESION mayor EXPRESION 
            {
                 $$=new Relational($1,$3,RelationalOption.GREATER,this._$.first_line ,this._$.first_column);
            }
         | EXPRESION menor EXPRESION 
            {
                 $$=new Relational($1,$3,RelationalOption.LESS,this._$.first_line ,this._$.first_column);
            }
         | EXPRESION mayorigual EXPRESION 
         {
                 $$=new Relational($1,$3,RelationalOption.GREATEROREQUAL,this._$.first_line ,this._$.first_column);
            }
         | EXPRESION menorigual EXPRESION 
            {
                 $$=new Relational($1,$3,RelationalOption.LESSOREQUAL,this._$.first_line ,this._$.first_column);
            }
         | EXPRESION igualacion EXPRESION 
            {
                 $$=new Relational($1,$3,RelationalOption.EQUAL,this._$.first_line ,this._$.first_column);
            }
         | EXPRESION diferente EXPRESION
            {
                 $$=new Relational($1,$3,RelationalOption.NOTEQUAL,this._$.first_line ,this._$.first_column);
            }
         | EXPRESION and EXPRESION 
            {
                 $$=new Logico($1,$3,LogicalOption.AND,this._$.first_line ,this._$.first_column);
            }
         | EXPRESION or EXPRESION 
            {
                 $$=new Logico($1,$3,LogicalOption.OR,this._$.first_line ,this._$.first_column);
            }
         | not EXPRESION 
            {
                 $$=new Logico($2,$2,LogicalOption.NOT,this._$.first_line ,this._$.first_column);
            }
         | EXPRESION interrogacion EXPRESION dospuntos EXPRESION
            {
                 $$= new Ternario($1,$3,$5,this._$.first_line ,this._$.first_column);
            }
            
         | EXPRESION punto len {$$=new Length($1,this._$.first_line ,this._$.first_column);}
         | EXPRESION punto pop parIz parDer {$$=new Pop($1,this._$.first_line ,this._$.first_column);}
         | parIz EXPRESION parDer       {$$ =$2;}
         | LITERAL{ $$=$1;}   
         ;

//COMPLEMENTOS DE PRODUCCIONES
LITERAL:  decimal   {$$=new Literal($1,this._$.first_line ,this._$.first_column,0);}
        | numerico  {$$=new Literal($1,this._$.first_line ,this._$.first_column,0);}
        | cadena    {$$=new Literal($1.replace(/\"/g,""),this._$.first_line ,this._$.first_column,1);}
        | verdadero {$$=new Literal($1,this._$.first_line ,this._$.first_column,2);}
        | falso     {$$=new Literal($1,this._$.first_line ,this._$.first_column,2);}
        | nulo      {$$=new Literal($1,this._$.first_line ,this._$.first_column,3);}
        | AUMENTO   {$$=$1;}
        | Identificador {$$=new Access($1, @1.first_line, @1.first_column);}
        | Identificador parIz parDer 
            {
                $$=new Llamada($1,[],@1.first_line, @1.first_column);
            }
        | Identificador parIz PARAMETROS_ENTRADA parDer 
            {
                $$=new Llamada($1,$3,@1.first_line, @1.first_column);
            }
        | Identificador llaveizq EXPRESION llaveder
          {
                $$= new AccesoArray($1,$3,@1.first_line, @1.first_column);
          }
        ;   

         
      

AUMENTO: Identificador aumento 
        {
            $$=new Aumento($1,AumentoOption.PLUSPLUS,this._$.first_line ,this._$.first_column);
        }      
        |Identificador decremento 
        {
            $$=new Aumento($1,AumentoOption.LESSLESS,this._$.first_line ,this._$.first_column);
        }
        ;

TIPOS:  string {$$=1;}
    |   bolean {$$=2;}
    |   number {$$=0;}
    |   void   {$$=8;}
    |   Identificador {$$=$1;}
    ;



CUERPO_SENTENCIAS: corcheIz INSTRUCCIONES corcheDer 
                    {
                        $$=new ListadoSentencias($2,this._$.first_line ,this._$.first_column);
                    }
                 | corcheIz corcheDer {$$=null;}
                 ;   