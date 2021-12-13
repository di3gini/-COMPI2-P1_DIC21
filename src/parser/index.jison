%{
%}
%lex
%options case-insensitive
%%
\s+                                   /* IGNORE */
"//".*                                /* IGNORE */
[/][*][^*]*[*]+([^/*][^*]*[*]+)*[/]   /* IGNORE */
"char"                      return 'charType'
"boolean"                   return 'boolType'
"string"                    return 'strType'
"double"                    return 'dblType'
"int"                       return 'intType'
"="                         return 'equals'
";"                         return 'semicolom'
\"[^\"]*\"				          return 'text'
\'[^\']?\'                  return 'character'
[0-9]*"."[0-9]+\b           return 'decimal'
[0-9]+\b				            return 'integer'
([a-zA-Z])[a-zA-Z0-9_]*	    return 'id'
<<EOF>>				              return 'EOF'
.                           {}
/lex
%{
%}
%start START
%%
START : INSTRUCTIONS EOF { console.log("Syntax correcta") };
TYPE : intType | dblType  | boolType | charType | strType;
INSTRUCTIONS : INSTRUCTIONS INSTRUCTION | INSTRUCTION;
INSTRUCTION : DECLARATION semicolom | ASSIGNMENT semicolom;
DECLARATION : TYPE ASSIGNMENT;
ASSIGNMENT : id | id equals VARVALUE;
VARVALUE : decimal | text | id | integer  | character;