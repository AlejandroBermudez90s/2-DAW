let vector = [2, 5, 4, 2, 2, 5, 6, 6, 6, 3];

function secuenciaMasLarga(vector) {
    let secuenciaMasLarga = 1;
    let secuenciaGuardada = 1;

    for (let i = 1; i < vector.length; i++) {
        // Comparamos el número en el que se encuentra el recorrido con el anterior, por eso i - 1
        if (vector[i] == vector[i - 1]) {

            // Incrementamos la secuencia que hasta el momento es la más larga
            secuenciaGuardada++;
            
            if (secuenciaGuardada > secuenciaMasLarga){
                //Guardamos la secuencia que tenemos como la más larga
                secuenciaMasLarga = secuenciaGuardada;
            }
        } else {
            // En caso de que la comparación del número con el anterior sea false, reasignamos la secuencia guardada a 1
            secuenciaGuardada = 1;
        }
    }
    return secuenciaMasLarga;
}

console.log("La secuencia más larga es de: " + secuenciaMasLarga(vector));