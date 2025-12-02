window.onload = function(){
    // Ejercicio 0 - a
    let nodoHtml = document.getElementsByTagName("html")[0];
    console.log(nodoHtml);

    // Ejercicio 0 - b
    let nodoBody = document.getElementsByTagName("body")[0];
    console.log(nodoBody);

    // Ejercicio 0 - c
    let primerNodoP = nodoBody.getElementsByTagName("p")[0];
    console.log(primerNodoP);

    // Ejercicio 0 - d
    let segundoNodoP = document.getElementsByTagName("p")[1];
    console.log(segundoNodoP);

    // Ejercicio 0 - e
    let ultimoNodoDeHtml = nodoHtml.lastChild;
    let tercerNodoDeBody = ultimoNodoDeHtml.childNodes[2];
    console.log(tercerNodoDeBody);

    // Ejercicio 0 - f
    let todosParrafos = document.querySelectorAll("p");
    console.log(todosParrafos);

    // Ejercicio 0 - g
    let parrafoTextoExcitante = document.getElementById("TextoExcitante");
    let elementosEm = parrafoTextoExcitante.getElementsByTagName("em");
    console.log(elementosEm);
}
