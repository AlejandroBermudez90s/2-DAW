# 🐍 Conceptos Fundamentales de Python: Variables, I/O y Tipado

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
