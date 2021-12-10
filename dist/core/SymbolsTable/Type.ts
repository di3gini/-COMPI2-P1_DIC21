enum Type{
    INT,
    BOOL,
    STRING,
    VOID,
    ARRAY,
    CHARACTER,
    STRUCT,
    NULL,
    ERROR
}

enum ArithmethicOperator{
    PLUS,
    MINUS,
    MULTIPLY,
    DIVIDE,
    POWER,
    UNARY_MINUS,
    MODULE
}

enum RelationalOperator{
    LESS,
    LESS_EQUAL,
    GREATER,
    GREATER_EQUAL,
    EQUAL,
    NOT_EQUAL
}

enum LogicalOperator{
    AND,
    OR,
    NOT
}

export {Type, ArithmethicOperator, RelationalOperator, LogicalOperator};