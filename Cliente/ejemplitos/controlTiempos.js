window.onload = function() {
    const mensajeTO = document.getElementById("mensajeTO");
    const mensajeIN = document.getElementById("mensajeIN");

    let numeroMensajeTO = 1;
    let numeroMensajeIN = 1;

    function mostrarMensajeTO() {
        
        mensajeTO.innerHTML = numeroMensajeTO;
        numeroMensajeTO++;
    }

    function mostrarMensajeIN() {
        mensajeIN.innerHTML = numeroMensajeIN;
        numeroMensajeIN++;
    }

    function pararInterval() {
        clearInterval(idIN)
    }

    let idTO = setTimeout(mostrarMensajeTO, 1000);
    let idIN = setInterval(mostrarMensajeIN, 1000);
    let idParar = setTimeout(pararInterval, 10000);
}