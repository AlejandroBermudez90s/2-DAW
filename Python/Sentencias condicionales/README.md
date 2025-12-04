# Sentencias condicionales en Python

## Sentencia condicional `if`

La sentencia condicional `if` básica tiene la siguiente forma en Python:

```python
if <expresión>:
    <sentencia-1>
    <sentencia-2>
    ...
    <sentencia-n>
<sentencia-fuera-if>
```
### Detalles de la sentencia condicional `if` en Python

- `<expresión>`: cualquier expresión evaluada en un **contexto booleano**.  
- Si la expresión se evalúa como **truthy**, se ejecutan las `<sentencias>`.  
- En caso contrario, se **saltan**.  
- `<sentencia-x>`: cualquier declaración válida en Python.  
- Las sentencias deben encontrarse **indentadas (sangradas)** siguiendo el nivel de anidamiento.  
- El símbolo `:` después de la expresión es **obligatorio**.  
- En algunos lenguajes (como Java o C) la expresión se encierra entre paréntesis, pero en Python se utiliza `:` al final en su lugar.  

### Ejemplo
```python
x = 10

if x > 5:
    print("x es mayor que 5")
    print("Esta línea también está dentro del if")

print("Fin del programa")  # fuera del if
```
## Suites: bloques de código en Python

En Python, los bloques de código asociados a una declaración de control se llaman **suites**.

### Características principales
- **Comienzo**: siempre después de que una estructura de control termine con dos puntos `:`.  
- **Delimitación**: mediante **indentación (sangría)**, en lugar de llaves `{}` como en otros lenguajes.  
- La indentación debe ser **consistente**: dentro del mismo bloque debe utilizarse la misma cantidad de espacios.  
- **Recomendación (PEP 8)**: utilizar **4 espacios** (aunque puede tabularse o usar otro número de espacios).  
- ⚠️ Desde el intérprete de Python debe dejarse una **línea en blanco** al terminar un suite.  

---

### Ejemplo correcto de suite en `if`
```python
if 'rojo' in ['verde', 'azul', 'rojo', 'amarillo']:   # : comienza suite (bloque)
    print('rojo está en la lista')                    # SUITE del IF
    print('Ejecutando sentencias del suite')          # SUITE del IF
    print('...')                                      # SUITE del IF
    print('Done!')                                    # SUITE del IF

print('Sentencia después del if')                     # fuera del suite
```
## Cláusulas `else` y `elif` en Python

### Sentencia condicional `if` con `else`

La estructura básica es:

```python
if <expresión>:
    <sentencia-1>
    <sentencia-2>
    ...
    <sentencia-n>
else:
    <sentencia-1>
    <sentencia-2>
    ...
    <sentencia-n>

<sentencia-fuera-if>
```
### Sentencia condicional `if` con `elif` y `else` en Python

La sentencia condicional puede extenderse con múltiples cláusulas `elif` y una cláusula final `else`.  
Esto permite evaluar varias condiciones de forma ordenada.

### Estructura general
```python
if <expresión>:
    <sentencia-1>
    <sentencia-2>
    ...
    <sentencia-n>
elif <expresión>:
    <sentencia-1>
    <sentencia-2>
    ...
    <sentencia-n>
elif <expresión>:
    <sentencia-1>
    <sentencia-2>
    ...
    <sentencia-n>
else:
    <sentencia-1>
    <sentencia-2>
    ...
    <sentencia-n>

<sentencia-fuera-if>
```
---
```pyhton
# EJEMPLO DE IF-ELIF-ELSE
name = 'Joe'
if name == 'Fred':
    print('Hello Fred')
elif name == 'Xander':
    print('Hello Xander')
elif name == 'Joe':
    print('Hello Joe')
elif name == 'Arnold':
    print('Hello Arnold')
else:
    print("I don't know who you are!")
 
# Hello Joe
```
---
## Operador ternario en Python

La **expresión condicional** u **operador ternario** permite elegir entre dos valores según una condición en una única línea, en lugar de utilizar un bloque `if/else`.

- No es una estructura de control de flujo → es un **operador que devuelve un valor**.  
- Puede utilizarse en **expresiones y asignaciones** como cualquier otro valor.  
- Puede encadenarse, aunque pierde legibilidad.  

---

### Sintaxis básica
```python
<valor_true> if <expresión> else <valor_false>
```
```pyhton
# EJEMPLO DE EXPRESIÓN CONDICIONAL SIMPLE
nota = input("Introduzca su nota: ")
resultado = "Aprobado" if nota >= 5 else "Suspenso"
 
# EJEMPLO DE EXPRESIÓN CONDICIONAL ENCADENADA
resultado = "Sobresaliente" if nota >=9 else "Aprobado" if nota >=5 else "Suspenso"
 
resultado = "Sobresaliente" if nota >=9 else \
            "Notable" if nota >=7 else \
            "Bien" if nota >=6 else \
            "Aprobado" if nota >=5 else \
            "Suspenso"
```
---
## Sentencia `pass` en Python

La sentencia `pass` es una **sentencia vacía**: no hace nada.  

### Usos principales
- Se utiliza para **engañar a Python** cuando se requiere sintácticamente una sentencia, pero realmente no queremos poner nada.  
- Es útil cuando estamos definiendo una **función, clase o bloque** que todavía no tiene implementación.  

---

### Ejemplo en condicional
```python
if expr:
    pass             # Bloque todavía sin implementar
else:
    print("Error")

