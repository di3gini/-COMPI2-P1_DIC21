var Type;
(function (Type) {
    Type[Type["INT"] = 0] = "INT";
    Type[Type["BOOL"] = 1] = "BOOL";
    Type[Type["STRING"] = 2] = "STRING";
    Type[Type["VOID"] = 3] = "VOID";
    Type[Type["ARRAY"] = 4] = "ARRAY";
    Type[Type["CHARACTER"] = 5] = "CHARACTER";
    Type[Type["STRUCT"] = 6] = "STRUCT";
    Type[Type["NULL"] = 7] = "NULL";
    Type[Type["ERROR"] = 8] = "ERROR";
})(Type || (Type = {}));
var ArithmethicOperator;
(function (ArithmethicOperator) {
    ArithmethicOperator[ArithmethicOperator["PLUS"] = 0] = "PLUS";
    ArithmethicOperator[ArithmethicOperator["MINUS"] = 1] = "MINUS";
    ArithmethicOperator[ArithmethicOperator["MULTIPLY"] = 2] = "MULTIPLY";
    ArithmethicOperator[ArithmethicOperator["DIVIDE"] = 3] = "DIVIDE";
    ArithmethicOperator[ArithmethicOperator["POWER"] = 4] = "POWER";
    ArithmethicOperator[ArithmethicOperator["UNARY_MINUS"] = 5] = "UNARY_MINUS";
    ArithmethicOperator[ArithmethicOperator["MODULE"] = 6] = "MODULE";
})(ArithmethicOperator || (ArithmethicOperator = {}));
var RelationalOperator;
(function (RelationalOperator) {
    RelationalOperator[RelationalOperator["LESS"] = 0] = "LESS";
    RelationalOperator[RelationalOperator["LESS_EQUAL"] = 1] = "LESS_EQUAL";
    RelationalOperator[RelationalOperator["GREATER"] = 2] = "GREATER";
    RelationalOperator[RelationalOperator["GREATER_EQUAL"] = 3] = "GREATER_EQUAL";
    RelationalOperator[RelationalOperator["EQUAL"] = 4] = "EQUAL";
    RelationalOperator[RelationalOperator["NOT_EQUAL"] = 5] = "NOT_EQUAL";
})(RelationalOperator || (RelationalOperator = {}));
var LogicalOperator;
(function (LogicalOperator) {
    LogicalOperator[LogicalOperator["AND"] = 0] = "AND";
    LogicalOperator[LogicalOperator["OR"] = 1] = "OR";
    LogicalOperator[LogicalOperator["NOT"] = 2] = "NOT";
})(LogicalOperator || (LogicalOperator = {}));
export { Type, ArithmethicOperator, RelationalOperator, LogicalOperator };
