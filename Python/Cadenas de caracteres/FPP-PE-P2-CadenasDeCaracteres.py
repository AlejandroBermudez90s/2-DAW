################# EJERCICIO 1 #################
#Muestra por pantalla las siguientes cadenas de caracteres:
#El mejor lenguaje de mundo: “Python”
#El mejor lenguaje de mundo: 'Python'
#Los dos mejores lenguajes de mundo: 'Python' y “Python”
#Los dos mejores lenguajes del mundo:
#1. Python
#2. Python
print(‘“El mejor lenguaje del mundo: “Python’”’)
print(“El mejor lenguaje del mundo: ‘Python’”)
a='"Python"'
b="'Python'"
print("Los dos mejores lenguajes del mundo: " + b + " y " + a)


################# EJERCICIO 2 #################
#Crea una variable ruta con el contenido C:\Users\daw\nueva carpeta y haz un print para ver su contenido. Hazlo de dos formas:
#Utilizando caracteres de escape.
#Utilizando r-strings.
#Utiliza f-strings para mostrar por pantalla: Ruta utilizada: <ruta> (donde <ruta> es el valor de la variable ruta).
ruta = "C:\\Users\\daw\\nueva carpeta"
print(ruta)
ruta = r"C:\Users\daw\nueva carpeta"
print(ruta)


################# EJERCICIO 3 #################
#Crea una variable panagrama con el contenido el VELOZ murciélago hindú comía feliz cardillo y kiwi y muestra:
#La longitud de la cadena.
#La cadena en mayúsculas.
#La cadena en minúsculas.
#La cadena con la primera letra en mayúsculas.
#La cadena con la primera letra de cada palabra en mayúsculas.
#La cadena sin espacios delante o detrás.
#La cadena separada en un array de palabras.
#El primera carácter de la cadena.
#El último carácter de la cadena.
#Los primeros 10 caracteres.
#Los últimos 10 caracteres.
#Desde el carácter 10 hasta el final.
#La cadena inversa.
#La cadena sustituyendo la palabra kiwi por XXXX.
#La cadena sustituyendo la palabra kiwi por el icono del kiwi en Unicode.
panagrama = "el VELOZ murciélago hindú comía feliz cardillo y kiwi"
print(len(panagrama))
#53
print(panagrama.upper())
#EL VELOZ MURCIÉLAGO HINDÚ COMÍA FELIZ CARDILLO Y KIWI
print(panagrama.lower())
#el veloz murciélago hindú comía feliz cardillo y kiwi
print(panagrama.capitalize())
#El veloz murciélago hindú comía feliz cardillo y kiwi
print(panagrama.title())
#El Veloz Murciélago Hindú Comía Feliz Cardillo Y Kiwi
print(panagrama.strip())
#el VELOZ murciélago hindú comía feliz cardillo y kiwi
print(panagrama.split())
#['el', 'VELOZ', 'murciélago', 'hindú', 'comía', 'feliz', 'cardillo', 'y', 'kiwi']
print(panagrama[0])
#e
print(panagrama[-1])
#i
print(panagrama[9])
#m
print(panagrama[:10])
#el VELOZ m
print(panagrama[-10:])
#llo y kiwi
print(panagrama[10:])
#urciélago hindú comía feliz cardillo y kiwi
print("".join(reversed(panagrama)))
#iwik y ollidrac zilef aímoc údnih ogaléicrum ZOLEV le
print(panagrama.replace("kiwi", "XXXX"))
#el VELOZ murciélago hindú comía feliz cardillo y XXXX
print(panagrama.replace("kiwi", "\U0001F95D"))
#el VELOZ murciélago hindú comía feliz cardillo y 🥝


################# EJERCICIO 4 #################
#Crea una variable texto como la mostrada a continuación y realiza las siguientes búsquedas:
#texto = """Python es un lenguaje de programación poderoso y sencillo.
#Muchos programadores disfrutan aprender Python por su simplicidad.
#Python también se utiliza en ciencia de datos, inteligencia artificial y web.
#Espero que os guste mucho, tanto como a mi."""
#Muestra el número de veces que aparece la cadena Python.
#Muestra el número de veces que aparece la cadena Mucho.
#Muestra el número de veces que aparece la cadena mucho.
#Muestra el número de veces que aparece la cadena mucho sin discriminar mayúsculas.
#Muestra el número de carácter de comienzo de la primera aparición de la cadena Python.
#Muestra el número de carácter de comienzo de la segunda aparición de la cadena Python.
#Pista: comenzando desde la posición de la primera aparición +1.
#Muestra el número de carácter de comienzo de la última aparición de la cadena Python.
texto = """Python es un lenguaje de programación poderoso y sencillo.
... Muchos programadores disfrutan aprender Python por su simplicidad.
... Python también se utiliza en ciencia de datos, inteligencia artificial y web.
... Espero que os guste mucho, tanto como a mi."""
 
print(texto.count("Python"))
#3
print(texto.count("Mucho"))
#1
print(texto.count("mucho"))
#1
print(texto.lower().count("mucho"))
#2
print(texto.index("Python"))
#0
primeraVez=texto.index("Python")
#primeraVez
#0
print(texto.index("Python", primeraVez+1))
#99


################# EJERCICIO 5 #################
#Crea un script que solicite un nombre y lo imprima centrado dentro de un recuadro de anchura 30 caracteres:
#* Introduzca su nombre: LABADMIN
#┌────────────────────────────┐
#│           LABADMIN         │
#└────────────────────────────┘
#Modifica el script para que solicite la anchura del recuadro además del nombre:
#* Introduzca su nombre: LABADMIN
# * Introduzca la anchura: 40
#┌──────────────────────────────────────────────────┐
#│                        LABADMIN                            │
#└──────────────────────────────────────────────────┘
nombre = input("Introduce tu nombre: ")
#Introduce tu nombre: LABADMIN
anchura = int(input("Introduce la anchura: "))
#Introduce la anchura: 40
lineaCentro = f"│{nombre.center(anchura - 2)}│"
lineaArriba = "┌" + "─" * (anchura - 2) + "┐"
lineaAbajo = "└" + "─" * (anchura - 2) + "┘"
print(f"{lineaArriba}\n{lineaCentro}\n{lineaAbajo}")
#┌──────────────────────────────────────┐
#│                  LABADMIN                   │
#└──────────────────────────────────────┘













