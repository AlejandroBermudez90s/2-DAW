################# EJERCICIO 1 #################

# Muestra por pantalla los números del 1 al 100.
# Muestra por pantalla los números del 1 al 100 pares.
# Muestra por pantalla la suma de los números del 1 al 100.

# Números del 1 al 100
for i in range(1, 101):
    print(i);

#Números del 1 al 100 pares
for i in range(1, 101):
    if i%2 == 0:
        print(i);

#Suma de los números del 1 al 100
suma = 0
for i in range(1,101):
    suma += i
print(suma)


################# EJERCICIO 1 #################
# Crea un script que pida un número al usuario del 1 al 10 y muestre 
# la tabla de multiplicar de ese número.
numero = int(input("Introduce un número del 1 al 10: "))
print("Tabla del ", numero, ":")


if 1 <= numero <=10:
    for i in range(1, 11):
        print(numero, " * ", i, " = ", numero*i)
else:
    print("El número debe estar entre 1 y 10")



