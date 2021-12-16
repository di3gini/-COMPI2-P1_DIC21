(()=>{var t={901:(t,e)=>{"use strict";e.__esModule=!0,e.ASTNode=void 0;e.ASTNode=function(){}},284:(t,e)=>{"use strict";e.__esModule=!0,e.ASTReportNode=void 0;var n=function(){function t(t){this.value=t,this.childrens=[]}return t.prototype.setChildrens=function(t){this.childrens=t},t.prototype.addChildren=function(t){this.childrens.push(t)},t.prototype.addChildrens=function(t){for(var e=0,n=t;e<n.length;e++){var r=n[e];this.childrens.push(r)}},t.prototype.addChildrenNode=function(t){this.childrens.push(t)},t.prototype.addFirstChildren=function(e){this.childrens.unshift(new t(e))},t.prototype.firstNodeChildren=function(t){this.childrens.unshift(t)},t.prototype.getValue=function(){return this.value},t.prototype.setValue=function(t){this.value=t},t.prototype.getChildrens=function(){return this.childrens},t}();e.ASTReportNode=n},335:(t,e)=>{"use strict";e.__esModule=!0,e.ObjectAbs=void 0;e.ObjectAbs=function(){}},280:function(t,e,n){"use strict";var r,i=this&&this.__extends||(r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},r(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});e.__esModule=!0,e.Plus=void 0;var o=n(931),s=n(284),c=n(293),l=function(t){function e(e,n,r,i){var s=t.call(this)||this;return s.LeftOp=e,s.RightOp=n,s.row=r,s.column=i,s.operator=o.ArithmethicOperator.PLUS,s}return i(e,t),e.prototype.interpretate=function(t,e){var n=this.LeftOp.interpretate(t,e),r=this.RightOp.interpretate(t,e);return new c.Primitive(o.Type.INT,parseInt(n.getValue())+parseInt(r.getValue()))},e.prototype.getNode=function(){return new s.ASTReportNode("ARITHMETIC")},e}(n(901).ASTNode);e.Plus=l},365:function(t,e,n){"use strict";var r,i=this&&this.__extends||(r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},r(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});e.__esModule=!0,e.Literal=void 0;var o=n(901),s=n(284),c=function(t){function e(e,n,r){var i=t.call(this)||this;return i.value=e,i.row=n,i.column=r,i}return i(e,t),e.prototype.interpretate=function(t,e){return this.value},e.prototype.getNode=function(){return new s.ASTReportNode("LITERAL")},e}(o.ASTNode);e.Literal=c},475:function(t,e,n){"use strict";var r,i=this&&this.__extends||(r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},r(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});e.__esModule=!0;var o=n(284);!function(t){function e(e,n,r){var i=t.call(this)||this;return i.expresion=e,i.row=n,i.colunm=r,i}i(e,t),e.prototype.interpretate=function(t,e){try{var n="";n+=this.expresion.interpretate(t,e).toString(),console.log(n)}catch(t){console.log(t)}},e.prototype.getNode=function(){return new o.ASTReportNode("PRINT")}}(n(901).ASTNode)},293:function(t,e,n){"use strict";var r,i=this&&this.__extends||(r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},r(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});e.__esModule=!0,e.Primitive=void 0;var o=function(t){function e(e,n){var r=t.call(this)||this;return r.value=n,r.type=e,r}return i(e,t),e.prototype.getType=function(){return this.type},e.prototype.toString=function(){return this.value.toString()},e.prototype.getValue=function(){return this.value},e}(n(335).ObjectAbs);e.Primitive=o},223:function(t,e,n){"use strict";var r,i=this&&this.__extends||(r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},r(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});e.__esModule=!0,e.ExceptionObj=void 0;var o=n(931),s=function(t){function e(e,n,r,i){var s=t.call(this)||this;return s.errorType=e,s.description=n,s.row=r,s.column=i,s.type=o.Type.ERROR,s}return i(e,t),e.prototype.toString=function(){return"".concat(this.errorType," ").concat(this.description)},e.prototype.getValue=function(){return this.errorType},e.prototype.getType=function(){return this.type},e}(Object);e.ExceptionObj=s},182:(t,e,n)=>{"use strict";e.__esModule=!0,e.SymbolsTable=void 0;var r=n(223),i=function(){function t(t){void 0===t&&(t=null),this.table={},this.previous=t}return t.prototype.setTable=function(t){if(t.id in this.table)throw new r.ExceptionObj("Semantico","El identificador "+t.id+" ya ha sido declarado",t.row,t.column);this.table[t.id]=t},t.prototype.getTable=function(t){for(var e=this;null!=e.previous;){if(t in e.table)return e.table[t];e=e.previous}return null},t.prototype.getTableGlb=function(t){for(var e=this;null!=e.previous;)e=e.previous;return t.id in e.table?e.table[t.id]:null},t.prototype.getGlobal=function(){for(var t=this;null!=t.previous;)t=t.previous;return t},t.prototype.updateTable=function(t){for(var e=this;null!=e.previous;){if(t.id in e.table)return e.table[t.id]=t,null;e=e.previous}return this.table[t.id]=t,null},t}();e.SymbolsTable=i},524:(t,e)=>{"use strict";e.__esModule=!0,e.Tree=void 0;var n=function(){function t(t){this.functions={},this.instrucctions=t,this.exceptions=[],this.output="",this.globalTS=null,this.counter=0,this.symRepo={}}return t.prototype.addSymbolReport=function(t){this.symRepo.push(t)},t.prototype.getSymbolReport=function(){return this.symRepo},t.prototype.getInstrucctions=function(){return this.instrucctions},t.prototype.setInstrucctions=function(t){this.instrucctions=t},t.prototype.getFunctions=function(){return this.functions},t.prototype.getFunction=function(t){return t in this.functions?this.functions[t]:null},t.prototype.addFunction=function(t,e){if(t in this.functions)throw new Error("Function "+t+" already exists");this.functions[t]=e},t.prototype.getExceptions=function(){return this.exceptions},t.prototype.getOutput=function(){return this.output},t.prototype.setOutput=function(t){this.output=t},t.prototype.updateOutput=function(t){this.output+=t},t.prototype.updateOutputLine=function(t){this.output+=t+"\n"},t.prototype.setGlobalTS=function(t){this.globalTS=t},t.prototype.getGlobalTS=function(){return this.globalTS},t.prototype.getTextExceptions=function(){for(var t="",e=0,n=this.exceptions;e<n.length;e++)t+=n[e].getText()+"\n";return t},t}();e.Tree=n},931:(t,e)=>{"use strict";var n,r,i,o;e.__esModule=!0,e.LogicalOperator=e.RelationalOperator=e.ArithmethicOperator=e.Type=void 0,function(t){t[t.INT=0]="INT",t[t.BOOL=1]="BOOL",t[t.STRING=2]="STRING",t[t.VOID=3]="VOID",t[t.ARRAY=4]="ARRAY",t[t.CHARACTER=5]="CHARACTER",t[t.STRUCT=6]="STRUCT",t[t.NULL=7]="NULL",t[t.ERROR=8]="ERROR"}(n||(n={})),e.Type=n,function(t){t[t.PLUS=0]="PLUS",t[t.MINUS=1]="MINUS",t[t.MULTIPLY=2]="MULTIPLY",t[t.DIVIDE=3]="DIVIDE",t[t.POWER=4]="POWER",t[t.UNARY_MINUS=5]="UNARY_MINUS",t[t.MODULE=6]="MODULE"}(r||(r={})),e.ArithmethicOperator=r,function(t){t[t.LESS=0]="LESS",t[t.LESS_EQUAL=1]="LESS_EQUAL",t[t.GREATER=2]="GREATER",t[t.GREATER_EQUAL=3]="GREATER_EQUAL",t[t.EQUAL=4]="EQUAL",t[t.NOT_EQUAL=5]="NOT_EQUAL"}(i||(i={})),e.RelationalOperator=i,function(t){t[t.AND=0]="AND",t[t.OR=1]="OR",t[t.NOT=2]="NOT"}(o||(o={})),e.LogicalOperator=o},299:(t,e,n)=>{var r;void 0===(r=function(t){var e=function(t,e,n,r){for(n=n||{},r=t.length;r--;n[t[r]]=e);return n},r=[1,5],i=[1,6],o=[2,5,8],s=[1,12],c=[1,13],l=[1,14],u=[1,15],a=[1,16],h=[1,17],p=[11,13],y={trace:function(){},yy:{},symbols_:{error:2,Init:3,INSTRUCCIONES:4,EOF:5,INSTRUCCION:6,IMPRIMIR:7,rimprimir:8,parIz:9,EXPRESION:10,parDer:11,pcoma:12,mas:13,LITERAL:14,decimal:15,numerico:16,cadena:17,verdadero:18,falso:19,nulo:20,$accept:0,$end:1},terminals_:{2:"error",5:"EOF",8:"rimprimir",9:"parIz",11:"parDer",12:"pcoma",13:"mas",15:"decimal",16:"numerico",17:"cadena",18:"verdadero",19:"falso",20:"nulo"},productions_:[0,[3,2],[4,2],[4,1],[6,1],[6,1],[7,5],[10,3],[10,1],[14,1],[14,1],[14,1],[14,1],[14,1],[14,1]],performAction:function(t,e,n,r,i,o,s){var c=o.length-1;switch(i){case 1:return localStorage.setItem("ErroresEjecucion",v),o[c-1];case 2:o[c-1].push(o[c]),this.$=o[c-1];break;case 3:this.$=[o[c]];break;case 4:case 8:this.$=o[c];break;case 5:0==this._$.first_column?(v=v+"   "+b[0],b=[],this.$="\n"):b.push('Error Sintactico: "'+t+'" en la Linea: '+this._$.first_line+" y Columna: "+this._$.first_column+"\n");break;case 6:console.log("Entro a imprimir");break;case 7:console.log("Entro a suma");break;case 9:this.$=new m(new g(_.DECIMAL,o[c]),this._$.first_line,this._$.first_column);break;case 10:this.$=new m(new g(_.INT,o[c]),this._$.first_line,this._$.first_column);break;case 11:this.$=new m(new g(_.STRING,o[c]),this._$.first_line,this._$.first_column);break;case 12:this.$=new m(new g(_.BOOLEAN,!0),this._$.first_line,this._$.first_column);break;case 13:this.$=new m(new g(_.BOOLEAN,!1),this._$.first_line,this._$.first_column);break;case 14:this.$=new m(new g(_.NULL,null),this._$.first_line,this._$.first_column)}},table:[{2:r,3:1,4:2,6:3,7:4,8:i},{1:[3]},{2:r,5:[1,7],6:8,7:4,8:i},e(o,[2,3]),e(o,[2,4]),e(o,[2,5]),{9:[1,9]},{1:[2,1]},e(o,[2,2]),{10:10,14:11,15:s,16:c,17:l,18:u,19:a,20:h},{11:[1,18],13:[1,19]},e(p,[2,8]),e(p,[2,9]),e(p,[2,10]),e(p,[2,11]),e(p,[2,12]),e(p,[2,13]),e(p,[2,14]),{12:[1,20]},{10:21,14:11,15:s,16:c,17:l,18:u,19:a,20:h},e(o,[2,6]),e(p,[2,7])],defaultActions:{7:[2,1]},parseError:function(t,e){if(!e.recoverable){var n=new Error(t);throw n.hash=e,n}this.trace(t)},parse:function(t){var e=this,n=[0],r=[null],i=[],o=this.table,s="",c=0,l=0,u=0,a=2,h=1,p=i.slice.call(arguments,1),y=Object.create(this.lexer),f={yy:{}};for(var _ in this.yy)Object.prototype.hasOwnProperty.call(this.yy,_)&&(f.yy[_]=this.yy[_]);y.setInput(t,f.yy),f.yy.lexer=y,f.yy.parser=this,void 0===y.yylloc&&(y.yylloc={});var d=y.yylloc;i.push(d);var g=y.options&&y.options.ranges;function m(t){n.length=n.length-2*t,r.length=r.length-t,i.length=i.length-t}"function"==typeof f.yy.parseError?this.parseError=f.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;for(var b,v,E,S,O,T,w,x,I,A=function(){var t;return"number"!=typeof(t=y.lex()||h)&&(t=e.symbols_[t]||t),t},k={};;){if(E=n[n.length-1],this.defaultActions[E]?S=this.defaultActions[E]:(null==b&&(b=A()),S=o[E]&&o[E][b]),void 0===S||!S.length||!S[0]){var R,L="";function N(t){for(var e=n.length-1,r=0;;){if(a.toString()in o[t])return r;if(0===t||e<2)return!1;t=n[e-=2],++r}}if(u)v!==h&&(R=N(E));else{for(T in R=N(E),I=[],o[E])this.terminals_[T]&&T>a&&I.push("'"+this.terminals_[T]+"'");L=y.showPosition?"Parse error on line "+(c+1)+":\n"+y.showPosition()+"\nExpecting "+I.join(", ")+", got '"+(this.terminals_[b]||b)+"'":"Parse error on line "+(c+1)+": Unexpected "+(b==h?"end of input":"'"+(this.terminals_[b]||b)+"'"),this.parseError(L,{text:y.match,token:this.terminals_[b]||b,line:y.yylineno,loc:d,expected:I,recoverable:!1!==R})}if(3==u){if(b===h||v===h)throw new Error(L||"Parsing halted while starting to recover from another error.");l=y.yyleng,s=y.yytext,c=y.yylineno,d=y.yylloc,b=A()}if(!1===R)throw new Error(L||"Parsing halted. No suitable error recovery rule available.");m(R),v=b==a?null:b,b=a,E=n[n.length-1],S=o[E]&&o[E][a],u=3}if(S[0]instanceof Array&&S.length>1)throw new Error("Parse Error: multiple actions possible at state: "+E+", token: "+b);switch(S[0]){case 1:n.push(b),r.push(y.yytext),i.push(y.yylloc),n.push(S[1]),b=null,v?(b=v,v=null):(l=y.yyleng,s=y.yytext,c=y.yylineno,d=y.yylloc,u>0&&u--);break;case 2:if(w=this.productions_[S[1]][1],k.$=r[r.length-w],k._$={first_line:i[i.length-(w||1)].first_line,last_line:i[i.length-1].last_line,first_column:i[i.length-(w||1)].first_column,last_column:i[i.length-1].last_column},g&&(k._$.range=[i[i.length-(w||1)].range[0],i[i.length-1].range[1]]),void 0!==(O=this.performAction.apply(k,[s,l,c,f.yy,S[1],r,i].concat(p))))return O;w&&(n=n.slice(0,-1*w*2),r=r.slice(0,-1*w),i=i.slice(0,-1*w)),n.push(this.productions_[S[1]][0]),r.push(k.$),i.push(k._$),x=o[n[n.length-2]][n[n.length-1]],n.push(x);break;case 3:return!0}}return!0}};const{Print:f}=n(475),{Type:_}=n(931),{Plus:d}=n(280),{Primitive:g}=n(293),{Literal:m}=n(365);let b=[],v="";var E={EOF:1,parseError:function(t,e){if(!this.yy.parser)throw new Error(t);this.yy.parser.parseError(t,e)},setInput:function(t,e){return this.yy=e||this.yy||{},this._input=t,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var t=this._input[0];return this.yytext+=t,this.yyleng++,this.offset++,this.match+=t,this.matched+=t,t.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),t},unput:function(t){var e=t.length,n=t.split(/(?:\r\n?|\n)/g);this._input=t+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-e),this.offset-=e;var r=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),n.length-1&&(this.yylineno-=n.length-1);var i=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:n?(n.length===r.length?this.yylloc.first_column:0)+r[r.length-n.length].length-n[0].length:this.yylloc.first_column-e},this.options.ranges&&(this.yylloc.range=[i[0],i[0]+this.yyleng-e]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},less:function(t){this.unput(this.match.slice(t))},pastInput:function(){var t=this.matched.substr(0,this.matched.length-this.match.length);return(t.length>20?"...":"")+t.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var t=this.match;return t.length<20&&(t+=this._input.substr(0,20-t.length)),(t.substr(0,20)+(t.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var t=this.pastInput(),e=new Array(t.length+1).join("-");return t+this.upcomingInput()+"\n"+e+"^"},test_match:function(t,e){var n,r,i;if(this.options.backtrack_lexer&&(i={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(i.yylloc.range=this.yylloc.range.slice(0))),(r=t[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=r.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:r?r[r.length-1].length-r[r.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+t[0].length},this.yytext+=t[0],this.match+=t[0],this.matches=t,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(t[0].length),this.matched+=t[0],n=this.performAction.call(this,this.yy,this,e,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),n)return n;if(this._backtrack){for(var o in i)this[o]=i[o];return!1}return!1},next:function(){if(this.done)return this.EOF;var t,e,n,r;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var i=this._currentRules(),o=0;o<i.length;o++)if((n=this._input.match(this.rules[i[o]]))&&(!e||n[0].length>e[0].length)){if(e=n,r=o,this.options.backtrack_lexer){if(!1!==(t=this.test_match(n,i[o])))return t;if(this._backtrack){e=!1;continue}return!1}if(!this.options.flex)break}return e?!1!==(t=this.test_match(e,i[r]))&&t:""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){return this.next()||this.lex()},begin:function(t){this.conditionStack.push(t)},popState:function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(t){return(t=this.conditionStack.length-1-Math.abs(t||0))>=0?this.conditionStack[t]:"INITIAL"},pushState:function(t){this.begin(t)},stateStackSize:function(){return this.conditionStack.length},options:{"case-sensitive":!0},performAction:function(t,e,n,r){switch(n){case 0:case 1:case 2:break;case 3:return 15;case 4:return 16;case 5:return 9;case 6:return 11;case 7:return"number";case 8:return"bolean";case 9:return"string";case 10:return"void";case 11:return"fun";case 12:return"punto";case 13:return"len";case 14:return"push";case 15:return"pop";case 16:return"corcheIz";case 17:return"corcheDer";case 18:return"llaveizq";case 19:return"llaveder";case 20:return"potencia";case 21:case 40:return 12;case 22:return"dospuntos";case 23:return"por";case 24:return"div";case 25:return"decremento";case 26:return"aumento";case 27:return"menos";case 28:return 13;case 29:return"interrogacion";case 30:return"mod";case 31:return"mayorigual";case 32:return"menorigual";case 33:return"mayor";case 34:return"menor";case 35:return"igualacion";case 36:return"diferente";case 37:return"and";case 38:return"or";case 39:return"not";case 41:return"igual";case 42:return 20;case 43:return 18;case 44:return 19;case 45:return 8;case 46:return"let";case 47:return"const";case 48:return"coma";case 49:return"if";case 50:return"else";case 51:return"switch";case 52:return"break";case 53:return"return";case 54:return"continue";case 55:return"default";case 56:return"case";case 57:return"while";case 58:return"do";case 59:return"for";case 60:return"in";case 61:return"of";case 62:return"type";case 63:return"Identificador";case 64:return 17;case 65:return 5;case 66:v=v+"   Error Lexico en la linea: "+e.yylineno+" y columna "+(e.yylloc.last_column+1)+"\n"}},rules:[/^(?:\s+)/,/^(?:\/\/.*)/,/^(?:[/][*][^*]*[*]+([^/*][^*]*[*]+)*[/])/,/^(?:([0-9][.][0-9]))/,/^(?:([0-9]+))/,/^(?:\()/,/^(?:\))/,/^(?:int\b)/,/^(?:boolean\b)/,/^(?:string\b)/,/^(?:void\b)/,/^(?:function\b)/,/^(?:\.)/,/^(?:length\b)/,/^(?:push\b)/,/^(?:pop\b)/,/^(?:\{)/,/^(?:\})/,/^(?:\[)/,/^(?:\])/,/^(?:\*\*)/,/^(?:;)/,/^(?::)/,/^(?:\*)/,/^(?:\/)/,/^(?:--)/,/^(?:\+\+)/,/^(?:-)/,/^(?:\+)/,/^(?:\?)/,/^(?:%)/,/^(?:>=)/,/^(?:<=)/,/^(?:>)/,/^(?:<)/,/^(?:==)/,/^(?:!=)/,/^(?:&&)/,/^(?:\|\|)/,/^(?:!)/,/^(?:;)/,/^(?:=)/,/^(?:null\b)/,/^(?:true\b)/,/^(?:false\b)/,/^(?:print\b)/,/^(?:let\b)/,/^(?:const\b)/,/^(?:,)/,/^(?:if\b)/,/^(?:else\b)/,/^(?:switch\b)/,/^(?:break\b)/,/^(?:return\b)/,/^(?:continue\b)/,/^(?:default\b)/,/^(?:case\b)/,/^(?:while\b)/,/^(?:do\b)/,/^(?:for\b)/,/^(?:in\b)/,/^(?:of\b)/,/^(?:type\b)/,/^(?:(([A-Za-zÑñ])|_)(([A-Za-zÑñ])+|([0-9])*|_)*)/,/^(?:"([^\"\n\\\\]|\\"|\\)*")/,/^(?:$)/,/^(?:.)/],conditions:{INITIAL:{rules:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66],inclusive:!0}}};return y.lexer=E,y}.call(e,n,e,t))||(t.exports=r)}},e={};function n(r){var i=e[r];if(void 0!==i)return i.exports;var o=e[r]={exports:{}};return t[r].call(o.exports,o,o.exports,n),o.exports}(()=>{"use strict";var t=n(299),e=n(182),r=n(524),i=document.getElementById("runtimeBtn"),o="",s=[];null==i||i.addEventListener("click",(function(){localStorage.setItem("consola",""),localStorage.setItem("ErroresEjecucion",""),localStorage.setItem("TS",JSON.stringify(s)),localStorage.setItem("ASTE","");try{o=document.getElementById("editorCodigo").value;var n=t.parse(o),i=new r.Tree(n),c=new e.SymbolsTable;i.setGlobalTS(c);for(var l=0,u=i.getInstrucctions();l<u.length;l++)u[l].interpretate(i,c)}catch(t){console.log("Error en la ejecucion"),console.log(t)}}))})()})();