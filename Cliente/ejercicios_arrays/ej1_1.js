let tVector = [8, 5 ,9 ,7];
let valorMinimo = tVector[0];
for (let i = 0; i < tVector.length ; i++) {
    if (tVector[i] < valorMinimo) {
        valorMinimo = tVector[i];
    }
}
console.log("El valor más pequeño del array es " + valorMinimo);