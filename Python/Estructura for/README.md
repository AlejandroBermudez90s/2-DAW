# Estructura de repetición `for` en Python

El bucle `for` se utiliza para **recorrer los elementos de una colección**.  
En cada iteración, una variable toma el valor de un elemento de la colección de forma ordenada.

- La colección puede ser **cualquier objeto iterable**, es decir, que implemente el método especial `__iter__()` y devuelva un iterador.  

---

## Sintaxis básica
```python
for <variable> in <colección>:
    <sentencia-1>
    <sentencia-2>
    ...
    <sentencia-n>
```
```pyhton
# EJEMPLO DE FOR
colores = ["rojo", "verde", "azul", "amarillo"]
 
for color in colores:
    print(f"Color actual: {color}")
 
# Color actual: rojo
# Color actual: verde
# Color actual: azul
# Color actual: amarillo
 
 
# EJEMPLO DE FOR
points = [(1, 4), (3, 6), (7, 3)]
 
for x, y in points:
    print(f"{x = } and {y = }")
 
# x = 1 and y = 4
# x = 3 and y = 6
# x = 7 and y = 3
```
---
## Sentencias `break` y `continue` en Python

### Sentencia `break`
- Rompe la ejecución del bucle.  
- No se ejecutan las sentencias que faltaban de la iteración actual ni se ejecutan más iteraciones.  
- La ejecución continúa por la siguiente sentencia **después del bucle**.  

#### Ejemplo con `break`
```python
for i in range(5):
    if i == 3:
        break
    print(i)

print("Fin del bucle")
```
---
## Estructura `for-else` en Python

En Python, la estructura `for` puede utilizarse con un bloque `else` final.

### Características principales
- El bloque del `else` **únicamente se ejecuta** si el bucle termina por el **agotamiento de los valores de la colección**.  
- Si el bucle se interrumpe con una sentencia `break`, el bloque `else` **no se ejecuta**.  
- Es útil para implementar un caso especial cuando se evaluaron todos los valores y no se rompió el bucle al encontrar algo.  
- No tiene sentido utilizar `else` en un `for` sin una posible sentencia `break`.  

---

#### Ejemplo práctico
```python
numeros = [1, 3, 5, 7, 9]
objetivo = 42

for numero in numeros:
    print(f"Processing {numero}...")
    if numero == objetivo:
        print(f"Objetivo encontrado: {objetivo}!")
        break

else:   # else del for
    print(f"Objetivo no encontrado: {objetivo}")
```
---
## Ejemplos de iteraciones en colecciones integradas

En Python, el bucle `for` permite recorrer cualquier objeto **iterable** (cadenas, listas, tuplas, diccionarios, conjuntos, etc.).

---

### Recorrer los caracteres de una cadena
```python
texto = "hola"

for char in texto:
    print(char)

# Salida:
# h
# o
# l
# a
````
### Recorrer secuencias de números
```pyhton
for index in range(5):             # range(5): rango de 0 a 4
    print(index)
 
# 0
# 1
# 2
# 3
# 4
 
for index in range(5, 10):         # range(5,10): rango de 5 a 9
    print(index)
 
# 5
# 6
# 7
# 8
# 9
 
for index in range(5, 10, 2):      #range(5,10,2): rango de 5 a 9 de 2 en 2
    print(index)
 
# 5
# 7
# 9
 
for _ in range(5): 
    print("hola")
 
# hola
# hola
# hola
# hola
# hola
```
### Recorrer listas por índice
```pyhton
frutas=["naranja", "manzana", "mango", "piña"]
 
for i in range(len(frutas)):
    fruta = frutas[i]
    print(f"{i} -> {fruta}")
 
# 0 -> naranja
# 1 -> manzana
# 2 -> mango
# 3 -> piña
 
 
for i,fruta in enumerate(frutas):
    print(f"{i} -> {fruta}")
 
# 0 -> naranja
# 1 -> manzana
# 2 -> mango
# 3 -> piña
 
 
for i,fruta in enumerate(frutas, 10):
    print(f"{i} -> {fruta}")
 
# 10 -> naranja
# 11 -> manzana
# 12 -> mango
# 13 -> piña
```
### Recorrer varias colecciones de forma recursiva
```pyhton
from itertools import chain
 
nums1 = [1, 2, 3]
nums2 = [4, 5, 6]
nums3 = [7, 8, 9]
 
for num in chain(nums1, nums2, nums3):
    print(num)
 
# 1
# 2
# 3
# 4
# 5
# 6
# 7
# 8
# 9
```
### Recorrer varias colecciones a la vez
```pyhton
frutas=["kiwi", "manzana", "mango", "piña"]
colores=["marron", "rojo", "naranja", "amarillo"]
 
for fruta, color in zip(frutas, colores):
    print(f"{fruta} -> {color}")
 
# kiwi -> marron
# manzana -> rojo
# mango -> naranja
# piña -> amarillo
```
### Recorrer colecciones de forma inversa
```pyhton
actions = ["Type text", "Select text", "Cut text", "Paste text"]
for action in reversed(actions):
    print(f"Undo: {action}")
 
# Undo: Paste text
# Undo: Cut text
# Undo: Select text
# Undo: Type text
```
