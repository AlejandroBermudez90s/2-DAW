# Estructura de Repetición `while`

## Estructura `while`

El bucle `while` se utiliza para iterar un número **indeterminado de veces** según una condición.

La condición puede ser una expresión lógica o cualquier objeto que será evaluado como un valor booleano.

### Sintaxis

```python
while <condición>:
    <sentencia-1>
    <sentencia-2>
    ...
    <sentencia-n>
```
```python
# EJEMPLO DE WHILE
num = 5
 
while numr > 0:
    print(number)
    num -= 1
 
# 5
# 4
# 3
# 2
# 1
```
---
## Sentencias `break` y `continue`

### Sentencia `break`

La sentencia `break` **rompe la ejecución del bucle**:

- No se ejecutan las sentencias que faltaban de la iteración actual.
- No se ejecutan más iteraciones.
- La ejecución continúa por la siguiente sentencia a continuación del bucle.

### Sentencia `continue`

La sentencia `continue` **termina la iteración actual**:

- No se ejecutan las sentencias que faltaban de la iteración actual.
- El bucle continúa por la siguiente iteración desde la primera sentencia del bloque.

## Estructura `while-else`

En Python, la estructura `while` puede utilizarse con un bloque `else` final.

El bloque `else` **únicamente se ejecuta si el bucle termina porque la condición devuelve un valor falso**, y no por una terminación abrupta mediante `break`.

Puede ser útil para implementar un **caso especial cuando se rompió el bucle al encontrar algo**.

⚠️ No tiene sentido utilizar `else` en un `while` sin una sentencia `break`.
```python
import random
import time
 
MAX_INTENTOS = 5
intentos = 0
 
while intentos < MAX_INTENTOS:
    intentos += 1
    print(f"Intento {intentos}: Conectando con servidor...")
    # Simulando conexión
    time.sleep(0.3)
    if random.choice([False, False, False, True]):
        print("Conexión exitosa!")
        break
    print("Fallo de conexión. Reconectando...")
else:
    print("Número de intentos excedido. Conexión fallida")
```
---
## Ejemplos de Iteraciones con `while`

### 1. Esperar acción de usuario por teclado

```python
import sys

response = ""
while not response in ("yes", "y", "si", "sí", "s", "n", "no"):            
    response = input("Salir? (y/n): ")

if response in ("yes", "y", "si", "sí", "s"):
    sys.exit()

print("Continuando...")
```
### 2.Recorrer una lista hasta que esté vacía

```python
colores = ["rojo", "azul", "verde", "amarillo"]

while colores:
    color = colores.pop(-1)
    print(f"Procesando color: {color}")
```

### 3.Esperar a crear un fichero
```python
import time
from pathlib import Path
 
filename = Path("hola.txt")
 
print(f"Esperando a que {filename.name} sea creado...")
 
while not filename.exists():
    print("Fichero no encontrado. Reintentando en 1 segundo...")
    time.sleep(1)
```
