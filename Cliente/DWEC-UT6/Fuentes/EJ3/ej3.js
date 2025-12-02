window.onload = function () {
    
    let botonInformacion = document.getElementById("consultar");

    let casillaC1 = document.getElementById("c1");
    let casillaC2 = document.getElementById("c2");
    let casillaC3 = document.getElementById("c3");
    
    let textoC1 = casillaC1.value;
    let textoC2 = casillaC2.value;
    let textoC3 = casillaC3.value;

    function mostrarInformacion() {
        if (casillaC1.checked) {
            alert(textoC1);
        }
        else if (casillaC2.checked) {
            alert(textoC2);
        }
        else if (casillaC3.checked) {
            alert(textoC3);
        }
    }

    botonInformacion.addEventListener("click", mostrarInformacion);
}