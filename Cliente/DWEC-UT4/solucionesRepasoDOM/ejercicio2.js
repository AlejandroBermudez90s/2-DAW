window.onload = function(){

    // Ejercicio a
    let arrayEnlaces = document.getElementsByTagName("a");
    console.log(arrayEnlaces)
    console.log("El número de enlaces de la página es: " + arrayEnlaces.length);
    
    //Ejercicio b
    let penultimoEnlace = arrayEnlaces[arrayEnlaces.length-2].href;
    console.log("Penúltimo enlace: " + penultimoEnlace);

    
    //Ejercicio c

    let enlacePrueba = "http://prueba/";
    let contador = 0;

    for (let i = 0; i < arrayEnlaces.length; i++) {
        let enlaceAtual = arrayEnlaces[i].href;
        console.log(enlaceAtual)
        if (enlaceAtual == enlacePrueba) {
            contador++;
        }
    } 
    console.log(contador);

    /*
    Versión cristianmalo
        function cuentaEnlaces(total, valor) {
            if (valor.href.includes()) {
                total++
            }
            return total;
        }
        const enlaces = [...enlace];
        const enlaces = enlaces.reduce(cuentaEnlaces, 0);
        console.log("Número de enlaces: " , ) ;    
    */

    //Ejercicio d
    let arrayParrafos = document.getElementsByTagName("p");
    let tercerParrafo = arrayParrafos[2];
    console.log(tercerParrafo);

    let numeroEnlacesTercerParrafo = tercerParrafo.getElementsByTagName("a").length;
    console.log(numeroEnlacesTercerParrafo);
    
    // Respuestas
    const parrafoInformacion = document.getElementById("informacion");
    parrafoInformacion.innerHTML = "Ejercicio 1:" +
                                    "<br>" +
                                    "El número de enlaces de la página es: " + arrayEnlaces.length +
                                    "<br>" + "<br>" +
                                    "Ejercicio 2:" +
                                    "<br>" +
                                    "El penúltimo enlace de la página es: " + penultimoEnlace + 
                                    "<br>" + "<br>" +
                                    "Ejercicio 3:" +
                                    "<br>" +
                                    "El número de enlaces que llevan a 'http://prueba' es: " + contador +
                                    "<br>" + "<br>" +
                                    "Ejercicio 4:" +
                                    "<br>" +
                                    "EL número de enlaces del tercer párrafo es: " + numeroEnlacesTercerParrafo
}