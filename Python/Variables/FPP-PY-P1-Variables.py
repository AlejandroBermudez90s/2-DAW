################# EJERCICIO 1 #################
#Crea una variable dato1 y asígnale un valor numérico.
#Muestra la variable por pantalla.
#Muestra el tipo de la variable con: type(dato1).
#Asigna a la variable un cadena y muéstrala por pantalla.
#Muestra el tipo de la variable con: type(dato1).
#¿Cómo habrías nombrado a la variable y si fuera a contener un valor constante?
#¿Y si fuera para uso interno?
dato1=0
print(dato1)
type(dato1)
dato1=”hola mundo”
print(dato1)
type(dato1)
#Si fuera una constante usaría el nombre: DATO1
#Si fuera para uso interno usaría el nombre: _dato1


################# EJERCICIO 2 #################
#Asigna 3 variables simultáneamente con distinto tipo de valor cada una.
#Muestra el valor y tipo de cada variable asignada.
a, b, c = 1,2,3
print(a)
print(b)
print(c)
type(a)
type(b)
type(c)


################# EJERCICIO 3 #################
#Crea una variable precio y asígnale como valor 5.8.
#Muestra el tipo de la variable y su valor.
#Convierte la variable tipo entero (int).
#Muestra el tipo de la variable y su valor.
#Convierte la variable tipo cadena (str).
#Muestra el tipo de la variable y su valor.
#Intenta convertir a entero la cadena hola.
#Intenta convertir a entero el carácter h.
precio=5.8
type(precio)
print(precio)
int(precio)
type(precio)
print(precio)
str(precio)
type(precio)
print(precio)
int(hola)
int(h)


################# EJERCICIO 4 #################
#Crea una variable meses y asígnale como valor un array con 4 elementos: enero, febrero, marzo y abril.
#Crea una nueva variable meses2 y asgínale como valor la variable meses.
#Modifica el array meses2 de la posición 0 por diciembre.
#Muestra el valor de la variable meses y el de meses2. ¿Son distintos? ¿por qué a ocurrido esto?
meses=[“enero”, “febrero”, “marzo”, “abril”]
meses2=meses
meses2[0]= “diciembre”
print(meses)
print(meses2)
#Son iguales. Porque ambos objetos apuntan a la misma posición de memoria donde está almacenado el array.



################# EJERCICIO 5 #################
#Crea las siguientes variables:
#str1 = "Hola me llamo Gus"
#str2 = "y mi número favorito es: "
#num=22
#Muestra por pantalla la variable str1 sumada con un espacio y sumada la variable str2.
#Muestra por pantalla la variable str1 sumada con un espacio, sumada la variable str2 y sumada con la variable num.
#¿Por qué has obtenido un error? ¿cómo podrías solucionarlo?
str1 = “Hola me llamo Gus”
str2 = “y mi número favorito es: ”
num = 22
print(str1 + “ ” + str2)
print(str1 + “ ” + str2 + num)
#Se obtiene un error porque la variable num es de tipo int, entonces no se puede sumar con las variables de tipo string. 
#Para solucionarlo podría convertir a tipo string la variable num, de la siguiente manera:
print(str1 + “ ” + str2 + str(num))


################# EJERCICIO 6 #################
#Pide 4 veces al usuario que introduzca valores numéricos y se guarden en 4 variables: v1, v2, v3 y v4.
#Muestra el valor de las 4 variables separados por :.
v1 = input(“Introduzca un valor numérico”)
v2 = input(“Introduzca un valor numérico”)
v3 = input(“Introduzca un valor numérico”)
v4 = input(“Introduzca un valor numérico”)
print(v1+":"+v2+":"+v3+":"+v4)




