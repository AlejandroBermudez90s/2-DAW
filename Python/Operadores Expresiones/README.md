# 🧮 Operadores y Expresiones

Los **operadores** permiten realizar operaciones específicas combinando objetos para formar **expresiones**.

Son esenciales para **manipular datos** de forma efectiva.

* Pueden ser **unarios** (únicamente utiliza un operando, ej: `-5`).
* Pueden ser **binarios** (utilizan dos operandos, ej: `3 + 2`).

---

## Operadores aritméticos

Utilizados para realizar **operaciones matemáticas** con valores numéricos.

| Operador | Descripción | Ejemplo | Resultado |
| :---: | :--- | :--- | :---: |
| `+` | Suma | `3 + 2` | `5` |
| `-` | Resta | `5 - 1` | `4` |
| `*` | Multiplicación | `4 * 3` | `12` |
| `/` | División (siempre float) | `10 / 2` | `5.0` |
| `//` | División entera (cociente) | `10 // 3` | `3` |
| `%` | Módulo (residuo) | `10 % 3` | `1` |
| `**` | Potencia | `2 ** 3` | `8` |

---

## Operadores de asignación

Asignan valores a variables y permiten combinarlos con expresiones matemáticas para **asignación aumentada**. 

| Operador | Ejemplo | Equivalente a | Descripción |
| :---: | :--- | :--- | :--- |
| `=` | `x = 5` | | Asigna el valor `5` a la variable `x`. |
| `+=` | `x += 2` | `x = x + 2` | Suma y asigna. |
| `-=` | `x -= 1` | `x = x - 1` | Resta y asigna. |
| `*=` | `x *= 3` | `x = x * 3` | Multiplica y asigna. |
| `/=` | `x /= 2` | `x = x / 2` | Divide y asigna. |
| `//=` | `x //= 2` | `x = x // 2` | División entera y asigna. |
| `%=` | `x %= 3` | `x = x % 3` | Módulo y asigna. |
| `**=` | `x **= 2` | `x = x ** 2` | Potencia y asigna. |

### Preincremento y Postincremento en Python

En Python no existe el preincremento/postincremento.

```python
a = 5
b = a++         # Error de sintaxis
b = ++a         # b = +( +5 ) = 5 aplica el operador unario positivo 2 veces
````
---
# Operadores de comparación en Python

* Los operadores de comparación permiten comparar valores numéricos y otros tipos soportados.  
* Todos devuelven un valor booleano (`True` o `False`).  
* ⚠️ Hay que tener cuidado al comparar distintos tipos de datos: a veces el resultado puede no tener el sentido esperado y otras veces puede producir un error.

## Tabla de operadores

| Operador | Descripción        | Ejemplo   | Resultado |
|----------|--------------------|-----------|-----------|
| `==`     | Igual a            | `5 == 5`  | `True`    |
| `!=`     | Distinto de        | `5 != 3`  | `True`    |
| `>`      | Mayor que          | `7 > 4`   | `True`    |
| `<`      | Menor que          | `3 < 2`   | `False`   |
| `>=`     | Mayor o igual que  | `5 >= 5`  | `True`    |
| `<=`     | Menor o igual que  | `4 <= 6`  | `True`    |

---

## Ejemplos prácticos

### 🔢 Comparación entre enteros
```python
2 == 2          # True
# COMPARACIÓN ENTRE CADENAS
2 == "2"                        # False
2 < "2"                         # TypeError: '<' not supported between instances of 'int' and 'str'
ord("a")                        # 97
ord("b")                        # 98
"a" < "b"                       # True
 
# COMPARACIÓN DE LISTAS Y TUPLAS
[2, 3] == [2, 3]                # True
(2, 3) == (2, 3)                # True
 
[2, 3] == (2, 3)                # False
[2, 3] != (2, 3)                # True
[2, 3] > (2, 3)                 # TypeError: '>' not supported between instances of 'list' and 'tuple'
 
# ORDEN: se comparan lexicográficamente (como palabras en un diccionario):
[5, 6, 7] < [7, 5, 6]           # True
[5, 6, 7] < [8]                 # True
[5, 6, 7] > [5]                 # True
[1, 2, 3] > [1, 1, 99]          # True, porque 2 > 1
[1, "a"] < [1, 2]               # TypeError: '<' not supported between instances of 'str' and 'int'
```
---
# Operadores booleanos en Python

En Python existen **3 operadores booleanos**:  
- `and`  
- `or`  
- `not`  

> Todos se escriben en **minúsculas**.

## Literales booleanos
* Los literales booleanos son: `True` y `False`.  
* En Python, estos se tratan como números:

```python
False == 0     # True
True == 1      # True
False < 1      # True
```
* La evaluación de expresiones encadenadas se hacen en cortocircuito.
## Tabla de operadores

| Operador | Descripción                                   | Ejemplo          | Resultado |
|----------|-----------------------------------------------|------------------|-----------|
| `and`    | Devuelve `True` si ambos operandos son verdaderos | `True and False` | `False`   |
| `or`     | Devuelve `True` si al menos uno es verdadero     | `True or False`  | `True`    |
| `not`    | Invierte el valor lógico                        | `not True`       | `False`   |

```python
5 < 7 and 3 == 3               # True
5 < 7 and 3 != 3               # False
5 > 7 and 3 == 3               # False
5 > 7 and 3 != 3               # False
 
5 < 7 or 3 == 3                # True
5 < 7 or 3 != 3                # True
5 > 7 or 3 == 3                # True
5 > 7 or 3 != 3                # False
 
5 < 7                          # True
not 5 < 7                      # False
 
False and 2 < "2"              # False, no da error por evaluación en cortocircuito
```
---
# Comparaciones encadenadas en Python

Las **comparaciones encadenadas** permiten combinar múltiples operadores de comparación para mejorar la legibilidad.  
La mayoría de lenguajes (como Java o C) **no soportan** estas comparaciones.

## Ejemplos básicos
```python
3 < x < 10        # equivalente a: 3 < x and x < 10
5 < x != 8        # equivalente a: 5 < x and x != 8
x == y == z       # equivalente a: x == y and y == z
1 < 3 > 2         # equivalente a: 1 < 3 and 3 > 2
1 < 2 < 3 < 4 < 5 # equivalente a: 1 < 2 and 2 < 3 and 3 < 4 and 4 < 5
```
---
# Comprobación booleana de objetos en Python

En Python, **cualquier objeto** puede ser utilizado en un contexto booleano (condiciones y operaciones).  

- **Falsy**: objeto que se evalúa como `False` en un contexto booleano.  
- **Truthy**: cualquier objeto que se evalúa como `True` en un contexto booleano.  

## Reglas generales
Por defecto, cualquier objeto es **truthy** salvo que:
1. Se redefina su método `__bool__()` para que devuelva `False`.  
2. Su método `__len__()` devuelva `0`.  

## Objetos integrados que se evalúan como falsos
- Las constantes `None` y `False`.  
- El valor cero en los distintos tipos numéricos: `0`, `0.0`, `0j`.  
- Cualquier colección vacía: `''`, `()`, `[]`, `set()`, `range(0)`.  

## Ejemplos con `bool()`
La función integrada `bool()` devuelve el valor booleano asociado a un objeto:

```python
bool(None)       # False
bool(0)          # False
bool(0.0)        # False
bool(0.0+0j)     # False
bool("")         # False
bool([])         # False

bool(" ")        # True
bool("hola")     # True
bool([1,2,3])    # True
```
* Cuando se utilizan los operadores booleanos (`and` y `or`) con **objetos**, el resultado **no es** necesariamente `True` o `False`, sino el **primer objeto original** en el que terminó de evaluarse la expresión en cortocircuito.

## Reglas de evaluación

### `A and B`
- Si **A es falsy**, el resultado es **A** (no se evalúa B).  
- Si **A es truthy**, se evalúa **B** y el resultado es **B**.  

## Ejemplos con `and`
```python
0 and "hola"       # 0   (porque 0 es falsy, se queda ahí)
"" and 123         # ""  (cadena vacía es falsy)
"hola" and 123     # 123 (el primero es truthy, devuelve el segundo)
True and False     # False (el primero es truthy, devuelve el segundo)
False and 99       # False (el primero es falsy, se queda ahí)
```
# Operadores de identidad en Python

Los **operadores de identidad** comprueban si dos variables tienen la misma identidad, es decir, si hacen referencia al **mismo objeto en memoria**.  

⚠️ No hay que confundir **identidad** con **igualdad**:
- Si dos variables tienen la misma identidad, sus valores serán iguales.  
- Si dos variables son iguales, no necesariamente tienen la misma identidad.  

## Tabla de operadores

| Operador | Ejemplo     | Resultado                                      |
|----------|-------------|------------------------------------------------|
| `is`     | `x is y`    | `True` si `x` e `y` son el mismo objeto        |
| `is not` | `x is not y`| `True` si `x` e `y` **no** son el mismo objeto |

## Ejemplos prácticos
```python
a = [1, 2]
b = a
c = [1, 2]

a is b   # True  → ambos apuntan al mismo objeto en memoria
a is c   # False → aunque tengan el mismo contenido, son objetos distintos
```
# Operadores de pertenencia en Python

Los **operadores de pertenencia** verifican si un valor está en una colección (como listas, tuplas o strings).

## Tabla de operadores

| Operador | Ejemplo              | Resultado |
|----------|----------------------|-----------|
| `in`     | `a in "hola"`        | `True`    |
| `not in` | `3 not in [1, 2]`    | `True`    |

---

# Operadores de concatenación y repetición

Estos operadores tienen un significado especial cuando se usan con colecciones (`listas`, `tuplas`, `strings`, etc.).

## Tabla de operadores

| Operador | Ejemplo   | Resultado         |
|----------|-----------|-------------------|
| `+`      | `"a"+"b"` | `ab`              |
| `*`      | `a * n`   | `n veces a`       |

## Ejemplos prácticos
```python
"hola" + "adios"            # "holaadios"
[1, 2, 3] + [4, 5, 6]       # [1, 2, 3, 4, 5, 6]

"hola" * 5                  # "holaholaholaholahola"
[1, 2, 3] * 5               # [1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3]
```
---
# Operador Walrus (Morsa) en Python

El operador `:=` es llamado **walrus** (morsa, ya que recuerda a sus colmillos).  
Permite **asignar un valor a una variable dentro de una expresión** y a la vez utilizar la variable: combina **asignación y uso de valor**.

## Ejemplo sin `:=`
```python
texto = input("Escribe algo: ")
n = len(texto)
if n > 5:
    print(f"Tu texto tiene {n} caracteres")

