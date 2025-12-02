let numeros = [1, 2, 3, 4, 5, 6];

function separarParesImpares(numeros) {
    let pares = numeros.filter(num => num % 2 === 0);
    let impares = numeros.filter(num => num % 2 !== 0);
    console.log("Estos son los números pares: " + pares);
    console.log("Estos son los números impares: " + impares);
}

console.log(separarParesImpares(numeros));





