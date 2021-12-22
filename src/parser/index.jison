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
    const { Cos } = require("../core/FuncionesNativas/Cos");
    const { Sin } = require("../core/FuncionesNativas/Sin");
    const { Tan } = require("../core/FuncionesNativas/Tan");
    const { Logarithmic } = require("../core/FuncionesNativas/Log");
    const { Sqrt } = require("../core/FuncionesNativas/Sqrt");
    const { Pow } = require("../core/FuncionesNativas/Pow");
    const { Concat } = require("../core/FuncionesNativas/Concat");
    const { LowerCase } = require("../core/FuncionesNativas/LowerCase");
    const { UpperCase } = require("../core/FuncionesNativas/UpperCase");
    const { StringFunc } = require("../core/FuncionesNativas/String");
    const { Elevado } = require("../core/Expresion/Elevado");
    const { CharOfPos } = require("../core/FuncionesNativas/CharOfPos");
    const { Substring } = require("../core/FuncionesNativas/Substring");
    const { Length } = require("../core/FuncionesNativas/Length");
    const { Parse } = require("../core/FuncionesNativas/Parse");
    const { TypeOf } = require("../core/FuncionesNativas/TypeOf");
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
int [0-9]+
decimal [0-9][.][0-9]


%%
\s+                             /*Ingorar espacios en blanco*/
"//".*                              // comentario simple línea
[/][*][^*]*[*]+([^/*][^*]*[*]+)*[/] // comentario multiple líneas


{decimal}             return 'numdecimal'
{int}                 return 'numerico'
"("                   return 'parIz'
")"                   return 'parDer'
"int"                 return 'number'
"double"              return 'decimal'
"boolean"             return 'bolean'
"String"              return 'string'
"void"                return 'void'          
"function"            return 'fun'
"."                   return "punto"  
"push"                return "push"
"pop"                 return "pop" 
"{"                   return 'corcheIz'
"}"                   return 'corcheDer'
"["                   return 'llaveizq'
"]"                   return 'llaveder'
"pow"                 return 'potencia'
"sin"                 return 'seno'
"cos"                 return 'coseno'
"tan"                 return 'tangente'
"log10"               return 'logaritmo'
"sqrt"                return 'raiz'
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
"&"                   return 'ampersand'
"||"                  return 'or'
"!"                   return 'not'
";"                   return 'pcoma'
"="                   return 'igual'
"^"                   return 'elevado'
"null"                return 'nulo'
"true"                return 'verdadero'
"false"               return 'falso'
"print"               return 'rimprimir'
"println"             return 'lrimprimir'
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
"typeof"              return 'typeof'
"toLowercase"         return 'toLowercase'
"toUppercase"         return 'toUppercase'
"string"              return 'stringFunc'
"parse"               return 'parse'
"caracterOfPosition"  return 'caracterOfPosition'
"subString"           return 'subString'
"length"              return 'length'


({letras}|"_")({letras}+|{digito}*|"_")*          return 'Identificador'
\"([^\"\n\\\\]|\\\"|\\)*\"  	return 'cadena'
<<EOF>>		          return 'EOF'

.                   %{    
                     
                        LISTADOERRORES = LISTADOERRORES +"   "+ "Error Lexico en la linea: "+ yylineno+" y columna "+ (yylloc.last_column+1)+"\n";
                    %}
/lex
%left  'mas' 'menos'
%left  'por' 'div' 'mod'
%left  'or'
%left  'and'
%left 'diferente' 'igualacion' 'interrogacion'
%left 'menor' 'mayor' 'menorigual' 'mayorigual'
%left 'potencia'
%left 'punto'
%left 'ampersand' 'elevado'
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
IMPRIMIR : rimprimir parIz EXPRESION_IMPR parDer pcoma  
            { 
                $$ = new Print($3, false, @1.first_line, @1.first_column,[$1,$2,$3,$4,$5]);
            }
            | lrimprimir parIz EXPRESION_IMPR parDer pcoma  
            { 
                $$ = new Print($3, true, @1.first_line, @1.first_column,[$1,$2,$3,$4,$5]);
            }
        ;

EXPRESION_IMPR : EXPRESION_IMPR coma EXPRESION {
                    $1.push($3);
                    $$=$1;
                }
                | EXPRESION {
                    $$=[$1];
                }
                ;

//=============================== DECLARACION DE VARIABLES Y ARRAYS ===============================

DECLARACION: TIPOS DECLARACION_EXPR pcoma
            {
                $$=new ListadoDeclaracion($1, $2,this._$.first_line ,this._$.first_column);
            }
            | TIPOS Identificador igual EXPRESION pcoma
            {
                $$=new Declaration($2,$4,this._$.first_line,this._$.first_column, $1);
            }
            ;

DECLARACION_EXPR: DECLARACION_EXPR coma Identificador{
                    $1.push($3);
                    $$=$1;
                }
                | Identificador {
                    $$=[$1];
                }
                ;
    

//============================== ASIGNACION DE VARIABLES Y ARRAYS ==============================================


ASIGNACION: Identificador igual EXPRESION pcoma 
            {
                $$=new Asignacion($1,$3, @1.first_line, @1.first_column);
            }
          | AUMENTO  pcoma  
            {
                $$=$1;
            }
          | Identificador llaveizq EXPRESION llaveder igual EXPRESION pcoma
            {
                $$=new AsignacionArray($1,$3,$6,@1.first_line, @1.first_column);
            }
          |  TIPOS llaveizq llaveder Identificador igual LISTADO_ARRAY pcoma
            {
                console.log("Entro a declaracion de array");
            }
          ;

//============================== ARRAYS ======================================

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
         
         | seno parIz EXPRESION parDer 
            {
                $$=new Sin($3,this._$.first_line ,this._$.first_column);
            }
        | coseno parIz EXPRESION parDer 
            {
                $$=new Cos($3,this._$.first_line ,this._$.first_column);
            }
        | tangente parIz EXPRESION parDer 
            {
                $$=new Tan($3,this._$.first_line ,this._$.first_column);
            }
        | raiz parIz EXPRESION parDer 
            {
                $$=new Sqrt($3,this._$.first_line ,this._$.first_column);
            }
        | potencia parIz EXPRESION coma EXPRESION parDer 
            {
                $$=new Pow($3,$5,this._$.first_line ,this._$.first_column);
            }
        | EXPRESION ampersand EXPRESION 
            {
                $$=new Concat($1,$3,this._$.first_line ,this._$.first_column);
            }
         | EXPRESION punto toLowercase parIz parDer 
            {
                $$=new LowerCase($1,this._$.first_line ,this._$.first_column);
            }
         | EXPRESION punto toUppercase parIz parDer 
            {
                $$=new UpperCase($1,this._$.first_line ,this._$.first_column);
            }
         | TIPOS punto parse parIz EXPRESION parDer 
            {
                $$=new Parse($1,$5,this._$.first_line ,this._$.first_column);
            }
         | EXPRESION elevado EXPRESION 
            {
                $$=new Elevado($1,$3,this._$.first_line ,this._$.first_column);
            }
         | EXPRESION punto caracterOfPosition parIz EXPRESION parDer 
            {
                $$=new CharOfPos($1,$5,this._$.first_line ,this._$.first_column);
            }
         | EXPRESION punto subString parIz EXPRESION coma EXPRESION parDer 
            {
                $$=new Substring($1,$5,$7,this._$.first_line ,this._$.first_column);
            }
         | EXPRESION punto length parIz parDer 
            {
                $$=new Length($1,this._$.first_line ,this._$.first_column);
            }
         | typeof parIz EXPRESION parDer 
            {
                $$=new TypeOf($3,this._$.first_line ,this._$.first_column);
            }
         | parIz EXPRESION parDer       {$$ = $2;}
         | LITERAL{ $$=$1;}   
         ;

//COMPLEMENTOS DE PRODUCCIONES
LITERAL:  numdecimal   {$$=new Literal($1,this._$.first_line ,this._$.first_column,9);}
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
    |   decimal {$$=9;}
    ;



CUERPO_SENTENCIAS: corcheIz INSTRUCCIONES corcheDer 
                    {
                        $$=new ListadoSentencias($2,this._$.first_line ,this._$.first_column);
                    }
                 | corcheIz corcheDer {$$=null;}
                 ;   