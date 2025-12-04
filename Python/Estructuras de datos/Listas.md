# Listas en Python

*En Python, una **lista** es una estructura de datos que permite almacenar una secuencia de elementos variable con las siguientes características:
  - **Ordenada**: contiene elementos de forma ordenada según lo fue su inserción.
  - **Indexada**: los elementos son identificados mediante un índice numérico consecutivo comenzando por 0.
  - **Mutable**: es un tipo de datos mutable que permite modificaciones de sus elementos.
  - **Heterogénea**: permite almacenar elementos de distinto tipo.
  - **Ampliable**: puede aumentar y disminuir su tamaño dinámicamente, permite añadir (no sustituir) y eliminar elementos.
  - **Anidable**: puede almacenar otras listas y acceder a ellas de forma multidimensional.
  - **Iterable**: soporta la iteración por lo que puede recorrerse mediante mecanismos y operadores en bucles.
  - **Seccionable**: permite operaciones de sección, por lo que pueden extraerse sublistas con series de elementos.
  - **Combinable**: permite operaciones de combinación, por lo que pueden utilizarse operadores de concatenación.
  - **Copiable**: pueden copiarse utilizando varias técnicas.
  - 
## Creación de listas
### Creación con literales
```pyhton
vacia = []
numeros = [2, 53, 35, 66, 23, 55, 63]
frutas = ["pera", "manaza", "kiwi", "mango"]
ciudades = [
    "Madrid",
    "Barcelona",
    "Murcia", 
    "Cartagena"
]
 
matriz = [
    [11, 12, 13, 14],
    [21, 22, 23, 24],
    [31, 32, 33, 34]
]
 
inventario = [
    {"producto": "phone", "precio": 1000, "cantidad": 10},
    {"producto": "laptop", "precio": 1500, "cantidad": 5},
    {"producto": "tablet", "precio": 500, "cantidad": 20}
]
```

### Creación con constructor list
* Llamando al contructor list([iterable]) es posible crear una lista a partir de otra colección de elementos.
* Esto permite convertir una lista, una tupla, diccionario, otras listas, etc.

```pyhton
list((2, 53, 35, 66, 23, 55, 63))                                  # Crea una lista a partir de una tupla
#[2, 53, 35, 66, 23, 55, 63]
 
list({"circle", "square", "triangle", "rectangle", "pentagon"})    # Crea una lista a partir de un conjunto
# ['square', 'rectangle', 'triangle', 'pentagon', 'circle']
 
list({"name": "John", "age": 30, "city": "New York"}.items())      # Crea una lista a partir de un diccionario
[('name', 'John'), ('age', 30), ('city', 'New York')]
 
list("Pythonista")                                                 # Crea una lista a partir de un string
# ['P', 'y', 't', 'h', 'o', 'n', 'i', 's', 't', 'a']
 
list([2, 53, 35, 66, 23, 55, 63])                                  # Crea una copia de una lista existente
#[2, 53, 35, 66, 23, 55, 63]
```

### Creación con compresión
* La compresión de listas (list comprehension) es una forma directa de crear una lista a partir de un iterable y una expresión que modifica sus valores.
* Es muy distintiva y utilizada en la comunidad Python.
```pyhton
[<expresión> for <var> in <iterable> [if <condición>]] 
```


```pyhton
nums = (5, 10, 15, 20, 25, 30)           # Tupla
nums_double = [ n*2 for n in nums ]      # Crea lista doblando nums
 
print(nums_double)
# [10, 20, 30, 40, 50, 60]
 
 
nums = ["5", "10", "15", "20", "25", "30" ]
nums = [ int(n) for n in nums ]
# [5, 10, 15, 20, 25, 30]
 
 
nums = [5, 10, 15, 20, 25, 30]
nums_pares = [ n for n in nums if n%2==0 ]
# [10, 20, 30]
```
---
## Indexación de elementos
* El acceso a los elementos se realiza mediante un índice numérico.
* El índice comienza en 0, por lo que el índice del último elemento será len(lista)-1.
* Si se accede a un índice no existe se obtiene una excepción IndexError.
* Es posible utilizar índices negativos para acceder a los elementos desde el final de la lista (-1 > último elemento).
* Es posible acceder de forma multidimensional a elementos anidados dentro de la lista en otras colecciones indexables.
 ```pyhton
opt = ["Python", "Java", "JavaScript", "C++", "Go", "Rust"]
opt[0]
# Python
 
opt[-1]
# "Rust"
 
opt[len(opt)-1]
# Rust
 
opt[-len(opt)]
# Python
 
 
employees = [
    ("John", 30, "Software Engineer"),
    ("Alice", 25, "Web Developer"),
    ("Bob", 45, "Data Analyst"),
    ("Mark", 22, "Intern"),
    ("Samantha", 36, "Project Manager")
]
 
employees[1][2]
#'Web Developer'
 
employees = [
    {"name": "John", "age": 30, "job": "Software Engineer"},
    {"name": "Alice", "age": 25, "job": "Web Developer"},
    {"name": "Bob", "age": 45, "job": "Data Analyst"},
    {"name": "Mark", "age": 22, "job": "Intern"},
    {"name": "Samantha", "age": 36, "job": "Project Manager"}
]
 
employees[3]["name"]
#'Mark'
```
---
## Exrtracción de elementos
* El operador slice permite extraer elementos de una lista devolviendo una nueva lista con subconjunto de ésta.
* Los elementos no son eliminados de la lista original.

```pyhton
var_lista[start:stop]            # Extrae de la posición start a la posición stop (no incluida!)
var_lista[start:stop:step]       # Extrae de la posición start a la posición stop saltando step elementos
var_lista[:]                     # Devuelve una copia de la lista
```

```pyhton
letters = ["A", "a", "B", "b", "C", "c", "D", "d"]
upper_letters = letters[0::2] 
print(upper_letters)
# ['A', 'B', 'C', 'D']
lower_letters = letters[1::2]
# ['a', 'b', 'c', 'd']
```

```python
digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
 
digits[:3]
# [0, 1, 2]
 
digits[-3:]
# [7, 8, 9]
 
digits[::2]
# [0, 2, 4, 6, 8]
 
digits[-10:]
# [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
 
digits[-11:]
# [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
 
digits[11:]
# []
```
---
## Copiado o duplicado de listas
* La copia de listas puede hacerse de dos formas:
  - Copia superficial: crea una nueva lista con los mismos objetos, pero estos objetos no son copiados, sino **referenciados**.
  - **Operador**: `[:]`
  - **Método**: `.copy()`
  - **Función**: `copy()`
* Copia profunda: crea una nueva lista y los objetos de ésta son copiados **recursivamente**.
  - **Función**: `deepcopy()`
  
```pyhton
# COPIA SUPERFICIAL CON [:]
letras = ["a", "b", "c", "d", "e" ]
letras2 = letras[:]
 
id(letras) == id(letras2)
# False
 
# COPIA SUPERICIAL CON MÉTODO .COPY()
letras3 = letras.copy()
 
# COPIA SUPERFICIAL CON FUNCIÓN COPY()
from copy import copy
letras4 = copy(letras)
```

```pyhton
# COPIA PROFUNDA CON DEEPCOPY
from copy import deepcopy
matrix1 = ["hello", [1, 2, 3], [4, 5, 6], [7, 8, 9]]  # Original
matrix2 = matrix1.copy()                              # Copia supericial
matrix3 = deepcopy(matrix1)                           # Copia profunda
 
matrix1[0] = "changed!"
matrix1
# ['changed!', [1, 2, 3], [4, 5, 6], [7, 8, 9]]
matrix2
# ['hola', [1, 2, 3], [4, 5, 6], [7, 8, 9]]
matrix3
# ['hola', [1, 2, 3], [4, 5, 6], [7, 8, 9]]
 
matrix1[1][0]=999
matrix1
# ['changed!', [999, 2, 3], [4, 5, 6], [7, 8, 9]]
matrix2
# ['hola', [999, 2, 3], [4, 5, 6], [7, 8, 9]]
matrix3
# ['hola', [1, 2, 3], [4, 5, 6], [7, 8, 9]]
```
---
## Inserción de elementos
```pyhton
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
 
numbers[-2] = "nueve"                             # Modificación de posición mediante
# [1, 2, 3, 4, 5, 6, 7, 8, 'nueve', 10]
 
numbers[numbers.index("nueve")] = 9               # Modificación de posición búsqueda de valor
# [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 
numbers[2:4] = ["a", "b"]                         # Modificación de varias posiciones
# [1, 2, "a", "b", 5, 6, 7, 8, 9, 10]
 
numbers[2:4] = ["a", "b", "c", "d"]               # Modificación de varias posiciones e inserción del resto
# [1, 2, "a", "b", "c", "d", 5, 6, 7, 8, 9, 10]
 
numbers = [1, 5, 6, 7]
numbers[1:1] = [2, 3, 4]                          # Inserción después de posición 0
# [1, 2, 3, 4, 5, 6, 7]
 
numbers = [1, 2, 0, 0, 0, 0, 4, 5, 6, 7]          # Sustitución de varias posiciones por una única posición
numbers[2:6] = [3]
# [1, 2, 3, 4, 5, 6, 7]
 
numbers.append(8)                                 # Inserción de elemento al final de la lista
# [1, 2, 3, 4, 5, 6, 7, 8]
 
numbers.extend([9, 10, 11, 12, 13])               # Inserción de colección al final de la lista
# [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]     
 
numbers.insert(2, 2.5)                            # Inserción en posición mediante índice
# [1, 2, 2.5, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13] 
```
---
## Elimincación de elementos
```pyhton
numbers = [12, 11, 10, 42, 14, 12, 42, 99]
numbers.remove(42)                               # Elimina la primera aparición del valor 42
# [12, 11, 10, 14, 12, 42, 99]
 
n = numbers.pop()                               # Elimina el último elemento de la lista y lo devuelve
# [12, 11, 10, 14, 12, 42]
 
n = numbers.pop(2)                              # Elimina el elemento de la posición 2
# [12, 11, 14, 12, 42]
 
numbers.clear()                                 # Elimina todos los elementos de la lista
# []
```
---
## Reordenar listas
```pyhton
numbers = [12, 11, 10, 42, 14, 12, 42, 99]
 
numbers[::-1]                                    # Devuelve una lista inversa, pero no modifica la actual
# [99, 42, 12, 14, 42, 10, 11, 12]
 
list(reversed(numbers))                          # Devuelve una lista inversa, pero no modifica la actual
# [99, 42, 12, 14, 42, 10, 11, 12]
 
numbers.reverse()                                # Invierte el orden de la lista
# [99, 42, 12, 14, 42, 10, 11, 12]
 
sorted(numbers)                                  # Devuelve una lista ordenada, pero no modifica la actual
# [12, 11, 10, 42, 14, 12, 42, 99]
 
numbers.sort()                                   # Ordena la lista
# [12, 11, 10, 42, 14, 12, 42, 99]
 
sorted([55, 2, 34, "hola"])                      # Error 
numbers.reverse()
```
