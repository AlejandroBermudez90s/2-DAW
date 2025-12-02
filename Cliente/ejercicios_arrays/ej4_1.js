let vector = [2, 5, 4, 2, 2, 5, 6, 6, 6, 3];

function secuenciaMasLarga(vector) {
    let secuenciaMasLarga = 1;
    let secuenciaActual = 1;

    for (let i = 1; i < vector.length; i++) {
        if (vector[i] === vector[i - 1]) {
            secuenciaActual++;
            if (secuenciaActual > secuenciaMasLarga){
                secuenciaMasLarga = secuenciaActual;
            }
        } else {
            secuenciaActual = 1;
        }
    }
    return secuenciaMasLarga;
}

console.log("La secuencia más larga es de:", secuenciaMasLarga(vector));
