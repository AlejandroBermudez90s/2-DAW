# 🐍 Conceptos Fundamentales de Python: Variables

---

## 🏷️ Variables en Python

Una **variable** en Python es esencialmente una **etiqueta** que se identifica con un nombre y **apunta** a un dato específico en la memoria.



### Reglas para Nombrar Variables

El nombre de una variable debe cumplir con las siguientes reglas:

* Solo puede contener **letras** (mayúsculas o minúsculas), **números** y el carácter **guion bajo** (`_`).
* Debe **comenzar** únicamente con **letras** o **guion bajo** (`_`). **No puede comenzar con números**.
* **No** se pueden utilizar **espacios**.
* **Sí** se puede utilizar la letra **ñ**.
* **No** se pueden utilizar **palabras reservadas** de Python ni funciones incorporadas.
    * *Expresión regular que resume las reglas*: `[_a-zA-Z][_a-zA-Z0-9]*`

### Asignación

La asignación se realiza con el operador `=`.

```python
# Asignación simple
nombre_usuario = "Ana"
edad_usuario = 25

# Ejemplo de error: 'class' es una palabra reservada
# class = 5  # SyntaxError
```
## Reglas de estilo

Aunque no es obligatorio, es conveniente seguir unas **reglas de estilo** (basadas en PEP 8) para que el código sea más legible y consistente:

* El nombre elegido debe ser **corto** pero **descriptivo**.
* Variables en **minúsculas con guiones** (`snake_case`): para uso habitual.
* Variables en **mayúsculas con guiones**: para constantes.
* Variables en **minúsculas sin guiones** (**UpperCamelCase**): para nombres de clases.
* Variables en **minúsculas que empiezan por guión**: variables privadas de uso interno (por ejemplo dentro de una clase o módulo).

```python
# Variables de uso habitual (snake_case)
nombre_usuario = "Ana"      # ok, nombre de variables descriptivo
n_u = "Bob"                 # regular, nombre poco descriptivo
edad = 25

# Variables para constantes (UPPER_CASE_SNAKE)
PI = 3.14159
MAX_INTENTOS = 5

# Variables privadas (empezando por guion bajo)
_contador = 0
```
## Variables y referencias

Aunque conceptualmente una variable suele verse como una **caja** que contiene un valor, no es el enfoque más correcto, ya que ciertos comportamientos pueden parecer extraños o sin explicación para principiantes.

Una variable es una **referencia** (*binding*) que **apunta** a un dato en memoria. 

```python
a = [1, 2, 3]           # a apunta a un array de 3 elementos
b = a                   # b a punta al mismo array en memoria
b.append(4)             # añadimos un elemento al array b (y también al a ya que apuntan al mismo array)

print(a)                # muestra [1, 2, 3, 4], a contiene también 4 elementos
```
## Tipado dinámico

En Python las variables son de **tipado dinámico**.

* El tipo de la variable se decide en **tiempo de ejecución**, no en tiempo de compilación.
* No es necesario declararlas previamente indicando su tipo.
* Una variable puede contener **cualquier tipo de dato**:
    * Su tipo se decide cuando se le asigna un dato.
    * Una misma variable puede cambiar de tipo al asignarle un nuevo dato.
* **Ventaja**: mayor **flexibilidad**.
* **Desventaja**: algunos **errores** se descubren solo al ejecutar.

```python
x = 10                   # x es de tipo int
x = "hola"               # ahora x es de tipo str

# Definición de una función que suma dos variables
def sumar(a, b):
    return a + b

print(sumar(2, 3))       # 5 (int + int)
print(sumar("a", "b"))   # "ab" (str + str)
print(sumar(2, "3"))     # TypeError en tiempo de ejecución
```
## Tipado fuerte

En Python las variables son de **tipado fuerte**.

* **No** se convierte automáticamente los tipos incompatibles: las operaciones entre distintos tipos deben **convertirse explícitamente**.
* Otros lenguajes de tipado débil (como Javascript o PHP) no exigen que se cambie el tipo explícitamente.

```python
# PYTHON (Tipado Fuerte)

# "5" + 2                  # Error! (TypeError: cannot concatenate 'str' and 'int')

print(int("5") + 2)        # 7 (Conversión de str a int, explícita)
print("5" + str(2))        # 52 (Conversión de int a str, explícita)
# JAVASCRIPT (Tipado Débil)

# "5" + 2                  // 52 (Conversión implícita de int a string)
```
## Impresión por la entrada estándar: `print()`

La función incorporada **`print()`** envía texto a la salida estándar.

```python
print(*objects, sep=' ', end='\n', file=sys.stdout, flush=False)
```
### PARÁMETROS de `print()`

| Parámetro | Descripción | Valor por Defecto |
| :--- | :--- | :--- |
| `objects` | Lista de valores separadas por comas. Si no son cadenas se convierten a cadena. | N/A |
| `sep` | Separador utilizado para mostrar la lista `objects`. | Espacio (`' '`) |
| `end` | Cadena impresa después de `objects`. | Salto de línea (`'\n'`) |
| `file` | Fichero donde enviar la salida. | Salida estándar (`sys.stdout`) |
| `flush` | Fuerza a vaciar el buffer conforme se escribe (para salida en tiempo real). | `false` |
```python
v1 = "aaa"
v2 = "bbb"
v3 = "ccc"
print(v1, v2, v3)
# aaa bbb ccc
 
print(v1, v2, v3, sep=",")
# aaa,bbb,ccc
 
print(v1, v2, v3, sep=", ")
# aaa, bbb, ccc
 
print(v1, v2, v3, sep=":", end="")
# aaa:bbb:ccc (sin salto línea al final)
 
print(v1,v2,v3,sep=":",end="FIN")
# aaa:bbb:cccFIN (sin salto de línea al final)
 
print(v1,v2,v3,sep=":",end="FIN\n")
aaa:bbb:cccFIN (con salto de línea al final)
```
## Entrada de datos desde consola: `input()`

La función incorporada **`input()`** permite leer de la entrada estándar (consola).

* Tiene un único parámetro opcional: un **`string`** que se utilizará como **prompt** en la entrada.
* Devuelve siempre un **`string`**, por lo que para otro tipo de dato es necesario una **conversión explícita**.

```python
# Sin parámetro (solo espera la entrada del usuario)
dato = input()
print("Ingresaste:", dato)

# Con parámetro (muestra un mensaje antes de leer)
nombre = input("Introduzca su nombre: ")
print("Hola,", nombre)

# Conversión explícita a int
edad = int(input("Introduzca su edad: "))
print("Edad introducida:", edad)
```
## Lectura de varios valores simultáneamente

La lectura de varios valores puede realizarse con la función incorporada **`map()`** y el método **`split()`** de `string`.

* **`split()`** separa la entrada recibida en *tokens* (cadenas de texto).
* **`map()`** convierte cada uno de estos *tokens* al tipo especificado (en este caso, `int`).

```python
# Solicitamos dos números separados por espacio y los asignamos a 'a' y 'b'
a, b = map(int, input("Ingresa dos números separados por espacio: ").split())
print("El primero es:", a)
print("El segundo es:", b)
```
## Lectura de parámetros desde línea de comandos

Los parámetros recibidos al ejecutar el script desde la línea de comandos pueden obtenerse mediante la lista **`sys.argv`** del módulo **`sys`**.

* **`sys.argv[0]`**: Nombre del script con su ruta según se invocó al ejecutarlo.
* **`sys.argv[1]`**: Primer parámetro.
* **`sys.argv[2]`**: Segundo parámetro.
* **`sys.argv[1:]`**: Lista con todos los parámetros (sin incluir `sys.argv[0]`). 

```python
import sys

# Ejemplo de ejecución en consola: python mi_script.py arg1 arg2
print(f"Nombre del script       : {sys.argv[0]=}")
print(f"Parámetros del script   : {sys.argv[1:]=}")
```
![imagen variables](https://leonardomarco.com/python/lib/exe/fetch.php?w=650&tok=1f6fa2&media=pe:pasted:20250920-100230.png)
