################# EJERCICIO 1 #################
# Crea un script que solicite un número al usuario y muestre si es positivo, negativo o 0.
# Realiza el ejercicio de dos formas: con if y con operador ternario.

# Con sentencia if
numero = int(input("Introduce un número: "))
if numero == 0:
    print("EL número es igual a 0.")
elif numero > 0:
    print("El número es positivo.")
else:
    print("EL número es negativo")


# Con operador ternario
numero = int(input("Introduce un número: "))
resultado = "El número es igual a 0." if numero == 0 else "El número es positivo." if numero > 0 else "El número es negativo."
print(resultado)







################# EJERCICIO 2 #################
# Crea un script que solicite una nota al usuario de 0 a 10 y muestre:
#   Error si no era un número o no se encontraba entre 0 y 10.
#   Suspenso si es menor a 5.
#   Aprobado si es mayor o igual 5 y menor a 7.
#   Notable si es mayor o igual a 7 y menor a 9.
#   Sobresaliente si es mayor o igual a 9 y menor a 10.

nota = input("Introduce una nota: ")
if not nota.isnumeric():
    resultado = "Debes introducir un número"
else:
    nota = int(nota)
    resultado = (
        "La nota debe estar entre 0 y 10" if not 0 <= nota <= 10 else
        "Sobresaliente" if nota >= 9 else
        "Notable" if nota >= 7 else
        "Aprobado" if nota >= 5 else
        "Suspenso"
    )
print(resultado)







################# EJERCICIO 3 #################
# Realiza el ejercicio anterior utilizando el operador ternario de forma anidada.
nota = input("Introduce una nota: ")
resultado = (
    "Debes introducir un número" if not nota.isnumeric() else
    "La nota debe estar entre 0 y 10" if not 0 <= int(nota) <= 10 else
    "Sobresaliente" if int(nota) >= 9 else
    "Notable" if int(nota) >= 7 else
    "Aprobado" if int(nota) >= 5 else
    "Suspenso"
)
print(resultado)

