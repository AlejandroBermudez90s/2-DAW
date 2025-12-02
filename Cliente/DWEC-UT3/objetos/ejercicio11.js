Date.prototype.añoNuevo = function(fecha) {
    // Calculamos el año siguiente al de la fecha recibida
    let añoSiguiente = fecha.getFullYear() + 1;

    // Calculamos el uno de enero con el año calculado anteriormente
    let fechaAñoSiguiente = new Date(añoSiguiente, 0, 1);

    // Calculamos la diferencia en milisegundos, por defecto, al operar fechas de objeto Date, da el resultado en milisegundos
    let milisegundosRestantes = fechaAñoSiguiente - fecha;

    // Calculamos cuántos días son esa diferencia en milisegundos
    let diasRestantes = Math.trunc(milisegundosRestantes / (1000 * 60 * 60 * 24));

    return diasRestantes;
}

let fecha = new Date(2025, 9, 7);
console.log("Fecha recibida: " + fecha.toLocaleDateString());
console.log("Días restantes hasta el 1 de enero del próximo año: " + fecha.añoNuevo(fecha));