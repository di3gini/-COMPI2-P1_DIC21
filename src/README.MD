# Proyecto 1 GRUPO 23
# MANUAL DE TECNICO
---------------------------------------------------------------------------
### INTEGRANTES
- ERICK VALENZUELA
- DIEGO RENE MOLINA
---------------------------------------------------------------------------
### DESCRIPCION DEL PROYECTO
Quetzal es un lenguaje de programación inspirado en C, su característica principal es la inclusión de tipos implícitos. El sistema de tipos de Quetzal realiza una formalización de los tipos de C y Java. Esto permite a los desarrolladores definir variables y funciones tipadas sin perder la esencia. Otra inclusión importante de Quetzal es la simplificación de los lenguajes C y Java para poder realizar diferentes instrucciones en menos pasos.

Adicional Quetzal tendrá 2 flujos, se podrá interpretar el código fuente ingresado y efectuar todas sus instrucciones, o bien se puede traducir este lenguaje a un lenguaje intermedio basado en un lenguaje de 3 direcciones, este se podrá ejectuar posteriormente en cualquier compilador de C, tomando en cuenta las reglas especificas de un lenguaje de 3 direcciones.

---
### CARACTERISTICAS
 ```
 Características básicas 
•	Numero de línea y columna 
•	Botón para interpretar 
•	Botón para traducir
•	Reporte de errores 
•	Reporte de tabla de símbolos 
•	Reporte de AST 
•	Reporte Gramatical
•	Salida del Código Intermedio
 ```

 ---

### FLUJO DE LA APLICACION

- Interpreta: Esta opción nos va a permitir interpretar una entrada. El programa recibe un archivo de entrada de código de alto nivel y ejecuta las instrucciones.
- Traducir: Esta opción nos va a permitir traducir una entrada. El programa recibe un archivo de entrada de código de alto nivel y traduce a código intermedio en la sintaxis de tres direcciones.
- Reportes: Esta opción nos va a permitir visualizar los reportes generados después de traducir una entrada.

---
### SINTAXIS

A continuación, se detalla la sintaxis que tendrá Quetzal. Además de algunos archivos de entrada de prueba que podrán probar para familiarizarse con la sintaxis.

1. Comentarios
2. Tipos
3. Expresiones
4. Instrucciones
    - Impresión
    - Declaración y Asignación
    - Llamada a Funciones
    - Distintas Funciones Nativas
    - Funciones
    - Condicionales
    - Loops
        - While
        - Do While
        - For
    - Arreglos
    - Structs

--- 

### TIPOS

Quetzal aceptará distintos tipos de datos con los que cuenta Java y C. Entre ellos se aceptarán:

- Nulo:
Se representa con la palabra reservada null, la cual indica que no existe ningún valor.

- int
Valores numéricos enteros. Por ejemplo: 3, 2, -1, -100.

- double
Valores númericos con punto flotante. Por ejemplo: 3.1415, 2.7182, 0.5.

- boolean
Los valores booleanos únicamente pueden ser true o false.

- char
Estos son literales de carateres, se definen con comillas simples. Por ejemplo: 'a', 'b', 'z'.

- String
Estos representan cadenas de texto, se definen con comillas dobles. Por ejemplo: "Hola", "Mundo", "!".
Los Strings también cuentan con operaciones especiales que se pueden realizar con estos. Se detalla más adelante en la sección de Expresiones.

- Arreglos
Estos son un conjunto de valores indexados entre 1 hasta n, que pueden ser de diferentes tipos.

- Struct
Estos pueden contener cualquier tipo de dato en su interior, incluso otros struct, arreglos o arreglos de structs.:

--- 
### EXPRESIONES

#### Aritméticas
Entre las operaciones aritmeticas disponibles vamos a encontrar las siguientes:

- Suma: La suma de dos expresiones se define por el símbolo +
- Resta: La resta de dos expresiones y la negación de una expresión aritmetica se define por el símbolo -
- Multiplicación: La multiplicación de dos expresiones se define por el símbolo *
- División: La división de dos expresiones se define por el símbolo /
- Modulo: El modulo entre dos expresiones se define por el símbolo %
- Nativas: Quetzal posee 6 funciones nativas para la resolución de expresiones, entre ellas se encuentran:
- pow: Recibe como primer parametro la base y como segundo parametro la potencia a elevar. Ejemplo: pow(2,4)
- sqrt: Cálcula la raíz cuadrara de un número Ejemplo: sqrt(4)
- sin: Resuelve la función seno del número que se ingrese
- cos: Resuelve la función coseno del numero que se ingrese
- tan: Resuelve la función tangente del numero que se ingrese