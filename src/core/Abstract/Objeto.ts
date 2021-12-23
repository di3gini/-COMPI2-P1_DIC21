export enum Type{
    NUMBER = 0,
    STRING = 1,
    BOOLEAN = 2,
    NULL = 3,
    ARRAY = 4,
    VOID =8,
    BREAK = 5,
    CONTINUE=6,
    TERNARIO=7,
    DECIMAL= 9
}

export type Retorno ={
    value : any,
    type : Type
}

export type RetornoC3D={
    value : any,
    type : Type,
    CD3: any
}