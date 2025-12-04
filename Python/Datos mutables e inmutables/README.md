# Tipos de datos mutables e inmutables en Python

La diferencia entre **tipos de datos mutables** e **inmutables** es clave para entender cómo se comportan las variables y los objetos al pasarlos a funciones o al asignarlos a otras variables.

- En Python **todos los datos son objetos** (incluidos enteros, cadenas, booleanos, etc.) → no existen tipos básicos.  
- Las variables guardan **referencias** a los objetos.  
- Los objetos se almacenan en posiciones concretas de memoria.  

---

## Tipos de datos inmutables
- No pueden modificar su contenido.  
- La única forma de "modificarlos" es crear un **nuevo objeto** con el valor cambiado, lo que implica que la referencia también cambia.  

### Ejemplos de tipos inmutables
- `int`, `float`, `str`, `complex`, `bool`, `tuple`, `frozenset`, `bytes`.

### Ejemplo práctico
```python
a = 5                     # objeto int inmutable
id(a)                     # muestra la referencia de a
# 10861384

a = 5 + 1                 # se crea un nuevo objeto y la variable a apunta a él
id(a)                     # ha cambiado la referencia
# 10861352

b = a                     # b apunta al mismo objeto que a
id(b)                     # la referencia de b es igual a la de a: apuntan al mismo objeto
# 10861352

b = 5 + 2                 # se crea un nuevo objeto y la variable b apunta a él
id(b)                     # ha cambiado la referencia de b
# 10861416
id(a)                     # a sigue apuntando al mismo objeto
# 10861384
```
---
## Tipos mutables
- `list`  
- `dict`  
- `set`  
- `bytearray`  
- Objetos definidos con `class` (en general).  

---

### Ejemplo práctico con listas
```python
nums = [1, 2, 3]        # objeto list mutable 
id(nums)                # muestra la referencia de nums
# 140104105376768

nums[0] = 99            # modifica el primer elemento
id(nums)                # misma referencia
# 140104105376768

nums2 = nums            # nums2 apunta al mismo objeto que nums
id(nums2)               # la referencia de nums2 es igual a la de nums
# 140104105376768

nums2[0] = 666          # modifica el primer elemento de nums y nums2
nums
# [666, 2, 3]
nums2
# [666, 2, 3]

nums2 = [4, 5, 6]       # ahora nums2 apunta a otra lista con otra referencia
id(nums2)
# 140303171582784
