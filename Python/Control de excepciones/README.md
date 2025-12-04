# Control de Excepciones

* Una **excepción** es un evento que interrumpe el flujo normal de ejecución de un programa debido a un error o situación anómala.

* Las excepciones **no son errores sintácticos**, ya que estos se detectan antes de la ejecución del programa.

* Las excepciones son **errores en tiempo de ejecución** debidos a los valores dinámicos que maneja el programa.

* El **control de excepciones** permite gestionar estos eventos y decidir **cuándo lanzarlos y cómo manejarlos**.
---
## Lanzar Excepciones

Las excepciones pueden ser lanzadas:

- **Automáticamente**, cuando se realiza una operación inconsistente, como al efectuar una división entre 0 o al intentar abrir un fichero inexistente.
- **Por el programador**, para controlar errores en situaciones determinadas.

Existe un conjunto de **excepciones integradas** que pueden utilizarse, como por ejemplo:

- `Exception`
- `ValueError`
- `TypeError`
- `IndexError`
- `RuntimeError`
- `NotImplementedError`
---
### Expceciones lanzadas automáticamente
```pyhton
print(0/0)
 
# Traceback (most recent call last):
#   File "<stdin>", line 1, in <module>
# ZeroDivisionError: division by zero
```
---
### Excepciones lanzadas por el programador
* El programador puede utilizar `raise` para **lanzar** una excepción en determinadas situaciones.
* La excepción podrá ser **capturada** en llamadas superiores o tratada por el intérprete como error si no se captura.
* Lo normal es utilizar una de las ![excepciones incorporadas](https://docs.python.org/3.14/library/exceptions.html) si el error encaja en alguna de ellas o crear una excepción personalizada en caso contrario.
```pyhton
num = int(input("Introduce un número entre 1 y 10: "))
if not (1 <= num <= 10):
    raise ValueError("El número debe estar entre 1 y 10")
 
# Traceback (most recent call last):
#   File "<stdin>", line 2, in <module>
# ValueError: El número debe estar entre 1 y 10
```
---
### Excepciones lanzadas por el programador para depuración
* Para depuración puede utilizarse `assert` que permite lanzar excepciones de forma **condicional**.
* Es utilizado únicamente para fines de depuración interna, no para producción.
  - Por ejemplo para controlar errores por culpa del programador que nunca deberían ocurrir.
  - Para errores de entrada o datos de usuario usar excepciones normales.
* Al ejecutar el intérprete con la opción -O se ejecuta el código obviando los asserts.
* Siempre lanza la misma excepción: AssertionError.
```pyhton
def calcular_promedio(lista):
    assert len(lista) > 0, "La lista no puede estar vacía"
    return sum(lista) / len(lista)
```
---
### Captura de Excepciones
* La **captura y manejo de excepciones** se realiza con los bloques `try-except`.
* Las instrucciones dentro del bloque `try` serán capturadas únicamente por la **primera excepción `except` coincidente**, según la jerarquía de herencia de las excepciones.
```python
try:
    <sentencia-1>
    <sentencia-2>
    ...
    <sentencia-n>
except <exception-class-1> as <exception-object-1>:
    <sentencia-1>
    <sentencia-2>
    ...
    <sentencia-n>
except <exception-class-2> as <exception-object-2>:
    <sentencia-1>
    <sentencia-2>
    ...
    <sentencia-n>
```

```python
# CAPTURA DE CUALQUIER EXCEPCIÓN
try:
    num = input("Introduce un número entre 1 y 10: ")
    num = int(num)
    if not 1<=num<=10:
        raise ValueError("El número debe estar entre 1 y 10")
except:
    print("Error al convertir el valor a un número")
 
 
# CAPTURA DE CUALQUIER EXCEPCIÓN CON OBJETO DE LA EXCEPCIÓN
try:
    num = input("Introduce un número entre 1 y 10: ")
    num = int(num)
    if not 1<=num<=10:
        raise ValueError("El número debe estar entre 1 y 10")
except Exception as error:
    print("Error al convertir el valor a un número: "+str(error))
```

```python
# CAPTURA DE VARIAS EXCEPCIONES
try:
    num = input("Introduce un número entre 1 y 10: ")
    num = int(num)
    if not 1<=num<=10:
        raise IndexError("El número debe estar entre 1 y 10")
except ValueError as error:                           # SI NO ERA UN NÚMERO
    print("El valor introducido no era numérico")
    print("Tomando el valor por defecto")
    num = 5
except IndexError as error:                           # SI NO ESTABA ENTRE 1 Y 10
    print(error)
    print("Tomando el valor por defecto")
    if num>10:
        num=10
    else:
        num=1
 
print(f"\nNúmero elegido: {num}")
```
### Ejecución después de un `try` exitoso (`else` en `try-except`)

* El bloque `else` en un `try` permite ejecutar, al finalizar el bloque `try`, un conjunto de instrucciones **solo si no ocurrió ninguna excepción**.
* En otros lenguajes donde no existe esta cláusula, se puede emular simplemente colocando el código al final del bloque `try`.

```python
try:
    num = input("Introduce un número entre 1 y 10: ")
    num = int(num)
    if not 1 <= num <= 10:
        raise IndexError("El número debe estar entre 1 y 10")

except ValueError as error:        # SI NO ERA UN NÚMERO
    print("El valor introducido no era numérico")
    print("Tomando el valor por defecto")
    num = 5

except IndexError as error:        # SI NO ESTABA ENTRE 1 Y 10
    print(error)
    print("Tomando el valor por defecto")
    if num > 10:
        num = 10
    else:
        num = 1

else:
    print("Valor introducido correctamente")

print(f"\nNúmero elegido: {num}")
```
### Ejecución final (exitoso o no)

* El bloque `finally` permite ejecutar un bloque final de instrucciones al terminar la ejecución del `try`.

- Se ejecuta **siempre** al terminar el `try`.
- Se ejecuta independientemente si hubo o no excepción.
- Es muy utilizado como mecanismo de limpieza, por ejemplo:
  - Cerrar ficheros
  - Borrar temporales
  - Cerrar conexiones abiertas
  - Terminar procesos, etc.

```python
try:
    num = input("Introduce un número entre 1 y 10: ")
    num = int(num)
    if not 1 <= num <= 10:
        raise IndexError("El número debe estar entre 1 y 10")
except ValueError as error:                           # SI NO ERA UN NÚMERO
    print("El valor introducido no era numérico")
    print("Tomando el valor por defecto")
    num = 5
except IndexError as error:                           # SI NO ESTABA ENTRE 1 Y 10
    print(error)
    print("Tomando el valor por defecto")
    if num > 10:
        num = 10
    else:
        num = 1
else:
    print("Valor introducido correctamente")
finally:
    print(f"\nNúmero elegido: {num}")
```
### Excepciones personalizadas
Es posible crear **excepciones personalizadas** para definir tipos de errores concretos.  
Simplemente hay que crear una nueva clase que herede de `Exception` (u otra excepción diferente, pero `Exception` es lo más habitual).

```python
# EXCEPCIÓN PERSONALIZADA
class NumeroFueraRangoError(Exception):
    """Número fuera de rango"""

num = int(input("Introduce un número entre 1 y 10: "))
if not (1 <= num <= 10):
    raise NumeroFueraRangoError("El número debe estar entre 1 y 10")
```
