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
