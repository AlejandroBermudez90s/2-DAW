window.onload = function () {

    let enlace = "file:///home/daw/Documentos/solucionesRepasoDOM/ejercicio3.html"

    function crearVentana() {
        window.open(enlace, name, left=30, top=50);
    }

    function detener() {
        clearInterval(ventanaEmergente);
    }

    let ventanaEmergente = setInterval(crearVentana, 1000);
    let detenerVentanaEmergente = setTimeout(detener, 5000);
}