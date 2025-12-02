Array.prototype.cuantasvecesEsta = function(valor){
    let numeroVeces = 0;
    for (let i = 0; i < this.length; i++) {
        if (this[i] == valor) {
            numeroVeces++;
        }
        
    }
    return numeroVeces;
}

let arrayPrueba = [1, 2 , 2, 3, 3, 3];

console.log("¿Cuántas veces está el 0 en "+ arrayPrueba + "?");
console.log("El 0 está: " + arrayPrueba.cuantasvecesEsta(0) + " veces");

console.log("¿Cuántas veces está el 1 en "+ arrayPrueba + "?");
console.log("El 1 está: " + arrayPrueba.cuantasvecesEsta(1) + " veces");

console.log("¿Cuántas veces está el 2 en "+ arrayPrueba + "?");
console.log("El 2 está: " + arrayPrueba.cuantasvecesEsta(2) + " veces");
