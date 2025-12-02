let tVector = [1, 5, 9, 7];
let numero = +prompt("Introduce un número");

    for (let i = 0; i < tVector.length; i++) {
        if (tVector[i] === numero) {
            console.log("El número existe y está en la posición: " + i); 
        }
    }
    console.log(-1); 