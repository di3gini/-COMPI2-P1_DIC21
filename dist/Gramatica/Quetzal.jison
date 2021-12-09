/**
 * Gramatica de Quetzal
 */

/* Definición Léxica */

%{
	const { Object } = require ( "../core/Abstract/Object" );
	const { ExceptionObj } = require ( "../core/SymbolsTable/Exception" );
	const { ASTNode } = require ( "../core/Abstract/ASTNode" );
	const { Print } = require ( "../core/Instrucctions/Print" );
	const { Primitive } = require ( "../core/Objects/Primitive" );
	const { Plus } = require ( "../core/Expresions/Arithmetic/Plus" );
	const { Type, ArithmeticOperator, RelationalOperator, LogicalOperator } = require ( "../core/Objects/Type" );
%}

%lex

%options case-insensitive

%%



\s+											// se ignoran espacios en blanco
"//".*										// comentario simple línea
[/][*][^*]*[*]+([^/*][^*]*[*]+)*[/]			// comentario multiple líneas

"print" 			return 'RPRINT';
"println"           return 'RPRINTLN';
"int"			    return 'RINT';
"double"            return 'RDOUBLE';
"string"			return 'RSTRING';
"char"              return 'RCHAR';
"do"                return 'RDO'
"while" 			return 'RWHILE';
"if"				return 'RIF';
"else"				return 'RELSE';
"for"				return 'RFOR';
"switch"			return 'RSWITCH';
"case"				return 'RCASE';
"default"			return 'RDEFAULT';
"break"				return 'RBREAK';
"parse"             return 'RPARSE';
"toInt"             return 'RTOINT';
"toDouble"          return 'RTODOUBLE';
"typeof"            return 'RTYPEOF'

":"					return 'DOSPTS';
";"					return 'PTCOMA';
"{"					return 'LLAVIZQ';
"}"					return 'LLAVDER';
"("					return 'PARIZQ';
")"					return 'PARDER';
"["                 return 'BRACKIZQ';
"]"                 return 'BRACKDER';


"&&"				return 'AND'
"||"				return 'OR';
"!"                 return 'NOT'

"+"					return 'MAS';
"-"					return 'MENOS';
"*"					return 'POR';
"/"					return 'DIVIDIDO';
"&"					return 'CONCAT';
"^"                 return 'ELEVADO';

"<="				return 'MENIGQUE';
">="				return 'MAYIGQUE';
"=="				return 'DOBLEIG';
"!="				return 'NOIG';

"<"					return 'MENQUE';
">"					return 'MAYQUE';
"="					return 'IGUAL';

"."                 return 'PUNTO';



\"[^\"]*\"				{ yytext = yytext.substr(1,yyleng-2); return 'CADENA'; }
[0-9]+("."[0-9]+)?\b  	return 'DECIMAL';
[0-9]+\b				return 'ENTERO';
([a-zA-Z])[a-zA-Z0-9_]*	return 'IDENTIFICADOR';


<<EOF>>				return 'EOF';
.					{ console.error('Este es un error léxico: ' + yytext + ', en la linea: ' + yylloc.first_line + ', en la columna: ' + yylloc.first_column); }

/lex


/* Asociación de operadores y precedencia */
%left 'CONCAT'
%left 'MAS' 'MENOS'
%left 'POR' 'DIVIDIDO'
%left 'OR'
%left 'AND'
%left 'NOIG' 'DOBLEIG'
%left 'MENQUE' 'MAYQUE' 'MENIGQUE' 'MAYIGQUE'
%left 'ELEVADO'
%left 'NOT' 'UMENOS'

%start Init

%% /* Definición de la gramática */

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


INSTRUCCION:  IMPRIMIR PTCOMA{ $$=$1; };//ok

IMPRIMIR : RPRINT PARIZQ EXPRESION PARDER
            { 
                $$ = new Print($3, @1.first_line, @1.first_column,[$1,$2,$3,$4,$5]);
            }
        ;

