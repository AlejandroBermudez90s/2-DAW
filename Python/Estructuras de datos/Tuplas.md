# Tuplas en Python
* En Python, una **tupla** es una estructura de datos que permite almacenar una secuencia fija de elementos con las siguientes características:
  - **Ordenada**: contiene elementos de forma ordenada según lo fue su inserción.
  - **Indexada**: los elementos son identificados mediante un índice numérico consecutivo comenzando por 0.
  - **Liviana**: consume menos memoria comparado con otras secuencias como las listas.
  - **Inmutable**: es un tipo de datos inmutable que no permite operaciones para modificar sus elementos ni reducir o ampliar su tamaño.
  - **Heterogénea**: permite almacenar elementos de distinto tipo.
  - **Anidable**: puede almacenar otras listas y acceder a ellas de forma multidimensional.
  - **Iterable**: soporta la iteración por lo que puede recorrerse mediante mecanismos y operadores en bucles.
  - **Seccionable**: permite operaciones de sección, por lo que pueden extraerse sublistas con series de elementos.
  - **Combinable**: permite operaciones de combinación, por lo que pueden utilizarse operadores de concatenación.
  - **Hasheable**: pueden funcionar como claves en un diccionario cuando todos sus valores son inmutables.
---
## Creación de tuplas
### Creación con literales
* Muy similar a las listas, pero utilizando **paréntesis**:

```python
vacia = ()
un_elemento = (42,)                         # Un elemento -> coma al final para no confundir con () matemático
numeros = (2, 53, 35, 66, 23, 55, 63)
numeros = 2, 53, 35, 66, 23, 55, 63         # También pueden crearse tuplas sin los paréntesis
```
### Creación de tuplas con el constructor `tuple()`
* Llamando al constructor `tuple([iterable])` es posible crear una tupla a partir de otra colección de elementos.  
* Esto permite convertir una lista, un diccionario, otras tuplas, conjuntos, cadenas, etc.

```python
tuple([2, 53, 35, 66, 23, 55, 63])                                  
# (2, 53, 35, 66, 23, 55, 63)

tuple({"circle", "square", "triangle", "rectangle", "pentagon"})    
# ('square', 'rectangle', 'triangle', 'pentagon', 'circle')

tuple({"name": "John", "age": 30, "city": "New York"}.items())      
# (('name', 'John'), ('age', 30), ('city', 'New York'))

tuple("Pythonista")                                                 
# ('P', 'y', 't', 'h', 'o', 'n', 'i', 's', 't', 'a')

tuple((2, 53, 35, 66, 23, 55, 63))                                  
# (2, 53, 35, 66, 23, 55, 63)
```
### Creación con compresión
* La compresión de listas (list comprehension) no tiene una variante para tuplas, pero puede utilizarse junto al constructor tuple() para convertirla en una tupla.
```pyhton
tuple([<expresión> for <var> in <iterable>])
nums = (5, 10, 15, 20, 25, 30)                  # Tupla
nums_double = tuple([ n*2 for n in nums ])      # Crea tupla doblando nums
 
print(nums_double)
# [10, 20, 30, 40, 50, 60]
```
### Indexación de elementos
* Igual que en listas -> [listas.md](Listas.md)
### Extracción de elementos
* Igual que en listas -> [listas.md](Listas.md), ya que no se modifica la colección se crea una nueva tupla con los elementos extraídos.
---
## Empaquetado y desempaquetado de tuplas
```pyhton
point = (7, 14, 21)
x, y, z = point
x, y = point              # Error
```
```pyhton
a = 200
b = 400
 
a, b = b, a               # a=400, b=200
```
```pyhton
numbers = (1, 2, 3, 4, 5)
 
*head, last = numbers                # head=[1, 2, 3, 4], last=5
first, *middle, last = numbers       # first=1, middle=[2, 3, 4], last=5
first, second, *tail = numbers       # first=1, second=2, tail=[3, 4, 5]
```
```pyhton
name = ("John", "Doe")
contact = ("john@example.com", "55-555-5555")
 
(*name, *contact)
# ('John', 'Doe', 'john@example.com', '55-555-5555')
```
---
## Copia o duplicado de tuplas
* Al tratarse de objetos inmutables las tuplas no necesitan ser copiadas.
* Las técnicas de copia superficial de listas pueden utilizarse en tuplas, pero realmente no crean copias, sino enlaces a la tupla original.
* La copia profunda de tuplas puede utilizarse al igual que en listas. Su uso tiene sentido cuando la tupla contiene elementos mutables.

```pyhton
# COPIA SUPERFICIAL 
student_info = ("Linda", 18, ["Math", "Physics", "History"])
student_profile = student_info[:]
id(student_info) == id(student_profile)            # True
id(student_info[0]) == id(student_profile[0])      # True
id(student_info[1]) == id(student_profile[1])      # True
id(student_info[2]) == id(student_profile[2])      # True
```
```pyhton
# COPIA PROFUNDA
From copy import deepcopy
 
student_info = ("Linda", 18, ["Math", "Physics", "History"])
student_profile = deepcopy(student_info)
 
id(student_info) == id(student_profile)
id(student_info) == id(student_profile)            # True
id(student_info[0]) == id(student_profile[0])      # True
id(student_info[1]) == id(student_profile[1])      # True
id(student_info[2]) == id(student_profile[2])      # False
```
---
## Reordenar tuplas
* Igual que en listas -> [listas.md](Listas.md)





