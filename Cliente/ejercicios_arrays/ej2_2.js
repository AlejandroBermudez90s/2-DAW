let tVector = [1, 5, 9, 7];
let numero = +prompt("Introduce un número");
let numeroEncontrado = tVector.find(encontrarNumero);

function encontrarNumero(value) {
  return value === numero;
}
console.log("El número existe y está en la posición: " + tVector.indexOf(numeroEncontrado));