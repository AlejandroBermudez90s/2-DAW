# 💬 Cadenas de Caracteres (Strings) en Python

---

## Definición de strings

Las **cadenas de caracteres** o **strings** son un tipo de dato que contiene una secuencia de caracteres.

Python representa los `strings` utilizando la **clase `str`**, por lo que son objetos.

Se definen encerrándolas entre **comillas**.

### Uso de Comillas

Se pueden utilizar indistintamente comillas simples (`'`) o dobles (`"`).

* Si la cadena contiene comillas dobles, mejor utilizar **comillas simples**.
* Si la cadena contiene comillas simples, mejor utilizar **comillas dobles**.

**PEP 8** (la guía de estilo de Python) recomienda ser **consistente**: usa un solo estilo en todo tu código, excepto cuando el otro mejore la legibilidad.

```python
mensaje = 'El mejor lenguaje del mundo: "Python"'
mensaje = "El mejor lenguaje del mundo 'Python'"
```
## Strings con caracteres especiales (Secuencias de Escape)

Las cadenas pueden contener **caracteres especiales** utilizando la **contrabarra (`\`)**, lo que se conoce como secuencias de escape.

| Secuencia | Descripción |
| :--- | :--- |
| `\n` | Salto de línea |
| `\r` | Retorno de carro (vuelve al inicio de la línea sin bajar y sobrescribe) |
| `\t` | Tabulador |
| `\b` | Backspace (borra el carácter anterior) |
| `\v` | Tabulación vertical (su soporte varía, a veces se comporta como `\n`) |
| `\xhh` | Carácter con valor **hexadecimal** (e.g., `\x41` es 'A') |
| `\ooo` | Carácter con valor **octal** (e.g., `\101` es 'A') |
| `\uXXXX` | Carácter **Unicode** en 16 bits |
| `\UXXXXXXXX` | Carácter **Unicode** en 32 bits |
| `\N{Nombre}` | Carácter **Unicode** por nombre (requiere el nombre oficial entre llaves) |

```python
print("line1\nline2")                       
# Muestra: 
# line1
# line2

print("AAA\tBBB")                           # Muestra: AAA     BBB

print("AAA\bBBB")                           # Muestra: AABBB (la \b borra una 'A')

print("AAA\vBBB")                           
# Muestra (su salida puede variar): 
# AAA
#    BBB

print("\x41")                               # Muestra: A (carácter 0x41)

print("\101")                               # Muestra: A (carácter octal 101)

print("\u03A9")                             # Muestra: Ω (carácter Unicode Omega)

print("12345\rX")                           # Muestra: X2345 (la \r sobrescribe el '1')

print("This world is \N{PILE OF POO}")      # Muestra: This world is 💩
```
## 📝 Raw Strings (Cadenas Crudas)

Los **r-strings** (*raw strings*) **evitan interpretar** las secuencias de escape y caracteres especiales (como `\n`, `\t`, etc.).

Se definen anteponiendo el carácter **`r`** a las comillas de apertura.

Esto es especialmente útil cuando se trabaja con rutas de archivos de Windows o con expresiones regulares, donde la contrabarra (`\`) debe tratarse como un carácter literal.

### Comparación con Strings Normales

**1. String Normal (Interpreta secuencias de escape):**

```python
ruta = "C:\nueva\carpeta"
# La secuencia '\n' se interpreta como un salto de línea
ruta                                       # 'C:\\nueva\\carpeta'
print(ruta)                                
# Salida (muestra un salto de línea): 
# C:
# ueva\carpeta
```
```pyhton
ruta = r"C:\nueva\carpeta"
# La secuencia '\n' se trata como los caracteres literales '\' y 'n'.
ruta                                       # 'C:\\nueva\\carpeta'
print(ruta)                                
# Salida: C:\nueva\carpeta
```
## 📜 Strings Multilínea y Docstrings

Para definir **strings** que ocupan **varias líneas** puede utilizarse las **comillas triples** (''' ó """).

### Usos principales:

1.  **Strings Multilínea:** Permiten incluir saltos de línea y formateo directamente dentro de la cadena sin usar `\n`.
2.  **Comillas Anidadas:** Pueden utilizarse para strings de una sola línea que contienen simultáneamente **comillas simples y dobles** en su interior sin necesidad de secuencias de escape.
3.  **Docstrings:** Permiten definir **docstrings** (cadenas de documentación que se colocan al inicio de módulos, funciones o clases).

```python
# String multínea (mantiene los saltos de línea internos)
texto_triple_simple = '''Esto es un string
que ocupa varias
líneas.'''

texto_triple_doble = """Esto es otro string
que ocupa varias
líneas."""

# String con comillas simples y dobles sin escape
ejemplo = """Ella dijo: "No sé qué significa 'libertad'" """

# Docstrings (Documentación)
def saludar(nombre):
    """Esta función recibe un nombre
    y devuelve un saludo personalizado."""
    return f"Hola, {nombre}"
```
# 🔍 Cadenas Formateadas (f-strings)

Los **f-strings** (*formated strings*) permiten **interpolar variables y expresiones** directamente dentro de la cadena usando `{}`.

El contenido de las llaves se evalúa y se **inserta** en el `string`.

Pueden definirse múltiples tipos de sustituciones: variables, decimales en números, alineación de texto, relleno de caracteres, fechas, etc.

## Ejemplos de Sustitución y Formato

### Sustitución de variables

```python
nombre, edad = "Ana", 25
print(f"Hola, me llamo {nombre} y tengo {edad} años")
# Salida: Hola, me llamo Ana y tengo 25 años
```
### Sustitución de expresión numérica

Puedes incluir directamente **expresiones aritméticas** dentro de las llaves `{}`. El resultado de la expresión será el valor insertado en la cadena.

```python
a, b = 5, 3
print(f"La suma de {a} + {b} es {a + b}")
# Salida: La suma de 5 + 3 es 8
```
### Formateo de decimales

Para controlar la precisión de los números de punto flotante, se utiliza la sintaxis **`:.Nf`**, donde `N` es el número de decimales deseado y `f` indica que es un float. El valor se **redondea** automáticamente.

```python
pi = 3.1415926535
print(f"Pi con 3 decimales: {pi:.3f}")
# Salida: Pi con 3 decimales: 3.142
```
### Formateo de alineación de texto

Se especifica el carácter de alineación y la **anchura total** del campo (el número después de los dos puntos `:10`). Si la cadena es más corta que la anchura especificada, se rellena con espacios.

| Símbolo | Alineación |
| :---: | :--- |
| `<` | Izquierda |
| `^` | Centrado |
| `>` | Derecha |

```python
nombre = "Ana"
print(f"|{nombre:<10}|")  # Alineado a la izquierda, anchura 10
print(f"|{nombre:^10}|")  # Centrado, anchura 10
print(f"|{nombre:>10}|")  # Alineado a la derecha, anchura 10
# Salida:
# |Ana       |
# |   Ana    |
# |       Ana|
```
### Formateo de relleno de 0s a la izquierda

Para **rellenar** el número con ceros a la izquierda hasta alcanzar una anchura total deseada, se utiliza la sintaxis **`:0Nd`**, donde `0` es el carácter de relleno, `N` es la anchura total (número de dígitos) y `d` indica que es un entero (*decimal*).

```python
numero = 42
print(f"{numero:05d}")   # Rellena con ceros hasta que haya 5 dígitos en total
# Salida: 00042
```
### Formateo de fechas

Se requiere importar el módulo **`datetime`**. El formato se aplica usando la sintaxis de **código de formato de tiempo** (`%d`, `%m`, `%Y`, etc.) dentro de las llaves.

```python
from datetime import datetime

# Obtenemos la fecha y hora actual
hoy = datetime.now() 

# La salida exacta de la fecha/hora dependerá del momento de ejecución.
print(f"Fecha: {hoy:%d/%m/%Y}") 
# Salida de ejemplo: Fecha: 04/12/2025

print(f"Hora: {hoy:%H:%M:%S}") 
# Salida de ejemplo: Hora: 16:21:30
```
# 🛠️ Operaciones y Métodos con Cadenas (Strings)

Los `strings`, al tratarse de **objetos**, incorporan una serie de **métodos** (operaciones) y atributos (valores) para trabajar con ellos.

También pueden tratarse conceptualmente como un **array de caracteres ordenados**.

---

### Concatenación y Repetición

Los operadores `+` y `*` se utilizan para unir y repetir cadenas.

```python
# Concatenación
print("Hola" + " " + "Mundo")  # 'Hola Mundo'

# Repetición
print("Ha" * 3)                # 'HaHaHa'
```
### 🛠️ Operaciones con cadenas

Estos métodos se utilizan para obtener información o modificar el aspecto de una cadena. Es importante recordar que los strings en Python son **inmutables**, por lo que estos métodos devuelven una **nueva cadena** modificada en lugar de alterar la original.

```python
s = "hola MUNDO! "

# Información
print(f"len(s): {len(s)}")             # 12 (número de caracteres, incluyendo espacios y !)

# Métodos de Cambio de Caso
print(f"s.upper(): {s.upper()}")         # 'HOLA MUNDO! ' (todo mayúsculas)
print(f"s.lower(): {s.lower()}")         # 'hola mundo! ' (todo minúsculas)
print(f"s.capitalize(): {s.capitalize()}") # 'Hola mundo! ' (primera letra mayúscula, resto minúsculas)
print(f"s.title(): {s.title()}")          # 'Hola Mundo! ' (primera letra mayúscula de CADA palabra)
print(f"s.swapcase(): {s.swapcase()}")    # 'HOLA mundo! ' (permuta mayúsculas y minúsculas)

# Limpieza y Reemplazo
print(f"s.strip(): '{s.strip()}'")      # 'hola MUNDO!' (elimina espacios o caracteres en blanco delante y detrás)
print(f"s.replace('a', '@'): {s.replace('a', '@')}") # 'hol@ MUNDO! ' (reemplazo de carácter)
print(f"s.replace('hola', 'adios'): {s.replace('hola', 'adios')}") # 'adios MUNDO! ' (reemplazo de subcadena)

# Métodos de Listas y Uniones
print(f"s.split(): {s.split()}")          # ['hola', 'MUNDO!', ''] (separa palabras por espacios por defecto, devolviendo una lista)
# Nota: La cadena original termina en espacio, por eso split() incluye un elemento vacío. 

s_separator = " "
print(f"s_separator.join(['Ey!', 'adios']): {s_separator.join(['Ey!', 'adios'])}") 
# 'Ey! hola MUNDO! adios' (une los elementos de la lista usando el separador: 'hola MUNDO! ')
```
### ✂️ Recorte de cadenas (Slicing)

Las cadenas pueden ser **indexadas** y **recortadas** (slicing) utilizando corchetes `[]`, similar a las listas, ya que se tratan como una secuencia ordenada de caracteres. 

La sintaxis general para el *slicing* es: `[inicio:fin:paso]`.

```python
s = "Python"

# Indexación (un solo carácter)
print(f"s[0]: {s[0]}")      # 'P' (primer carácter)
print(f"s[-1]: {s[-1]}")     # 'n' (último carácter, usando índice negativo)

# Slicing (subcadenas: [inicio:fin])
# El índice 'fin' NO se incluye en el resultado.
print(f"s[1:4]: {s[1:4]}")   # 'yth' (desde índice 1 hasta 3)
print(f"s[:3]: {s[:3]}")    # 'Pyt' (desde el inicio hasta índice 2)
print(f"s[3:]: {s[3:]}")    # 'hon' (desde índice 3 hasta el final)

# Slicing con paso (step)
print(f"s[::2]: {s[::2]}")   # 'Pto' (cada 2 caracteres)
print(f"s[::-1]: {s[::-1]}")  # 'nohtyP' (cadena reversa, paso -1)
```
### ✅ Verificación de contenido

Estos métodos son ideales para la validación de datos, ya que devuelven **`True`** si la cadena cumple la condición especificada y **`False`** en caso contrario.

```python
s = "Python" # Usamos una cadena de ejemplo para la verificación

# Verificación de Tipos de Caracteres
print(f"isalpha(): {'Abc'.isalpha()}")   # True (solo letras)
print(f"isdigit(): {'123'.isdigit()}")   # True (solo números)
print(f"isalnum(): {'Abc123'.isalnum()}")# True (letras y/o números, False si hay espacios o símbolos)
print(f"isspace(): {'  \t'.isspace()}")  # True (solo espacios, tabulaciones, etc.)
print(f"islower(): {s.islower()}")      # False (verifica si todos los caracteres son minúsculas)

# Verificación de Extremos
print(f"startswith('Py'): {s.startswith('Py')}") # True (si empieza por la subcadena)
print(f"endswith('on'): {s.endswith('on')}")     # True (si termina por la subcadena)
```
### 🔍 Búsqueda de contenido

Estos métodos permiten encontrar la ubicación, o contar el número de veces que aparece una subcadena dentro de otra.

| Método | Resultado si se encuentra | Resultado si NO se encuentra |
| :--- | :--- | :--- |
| `find()` | El índice de la primera ocurrencia. | `-1` |
| `index()` | El índice de la primera ocurrencia. | Lanza una excepción (`ValueError`). |
| `rfind()` | El índice de la **última** ocurrencia. | `-1` |
| `rindex()` | El índice de la **última** ocurrencia. | Lanza una excepción (`ValueError`). |
| `count()` | El número de veces que aparece la subcadena. | `0` |

```python
s = "hola hola MUNDO! hola"

# Cuenta
print(f"s.count('hola'): {s.count('hola')}")          # 3
# Búsqueda en rango: busca entre el índice 5 (el segundo 'h') y el 20
print(f"s.count('hola', 5, 20): {s.count('hola', 5, 20)}") # 1 

# Búsqueda (Índice de la primera ocurrencia)
print(f"s.find('hola'): {s.find('hola')}")            # 0
print(f"s.find('adios'): {s.find('adios')}")          # -1 (no se encontró)
print(f"s.find('hola', 5, 20): {s.find('hola', 5, 20)}") # 5 (Búsqueda en rango)

# Búsqueda desde la derecha (Índice de la última ocurrencia)
print(f"s.rfind('hola'): {s.rfind('hola')}")           # 15 

# Búsqueda que lanza excepción (index)
# print(s.index("adios")) # Lanza ValueError: substring not found
```
### 🔎 Expresiones Regulares

El módulo estándar **`re`** (*Regular Expression*) implementa la búsqueda y manipulación avanzada de texto utilizando **expresiones regulares**.

Una expresión regular es una secuencia de caracteres que define un patrón de búsqueda.

```python
import re

text = "He was carefully disguised but captured quickly by police."

# 1. Búsqueda simple: encuentra palabras que terminen en 'ly'
# r"\w+ly\b": Busca una o más letras (\w+), seguidas de 'ly',
#             y que terminen en un límite de palabra (\b).
print(re.findall(r"\w+ly\b", text))
# Salida: ['carefully', 'quickly']

# 2. Búsqueda sensible a mayúsculas
# No encuentra 'ly' si el patrón usa 'LY'
print(re.findall(r"\w+LY\b", text))
# Salida: []

# 3. Búsqueda ignorando mayúsculas
# El argumento 'flags=re.I' (o re.IGNORECASE) ignora la capitalización.
print(re.findall(r"\w+LY\b", text, flags=re.I))
# Salida: ['carefully', 'quickly']
```
