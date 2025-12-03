window.onload = function() {

    function recuperarDatoLocal() {
        return localStorage.getItem("area");
    }

    function recuperarDatoSesion() {
        return sessionStorage.getItem("area");
    }

    function almacenarDatoSesion() {
        sessionStorage.setItem("area", document.getElementById("areaS").value);
    }

    function almacenarDatoLocal() {
        localStorage.setItem("area", document.getElementById("areaL").value);
    }
    function resetarDatos() {
        localStorage.removeItem("area");
        sessionStorage.removeItem("area");
    }

    document.getElementById("areaL").value = recuperarDatoLocal();
    document.getElementById("areaS").value = recuperarDatoSesion();

    document.getElementById("areaL").oninput = almacenarDatoLocal;
    document.getElementById("areaL").oninput = almacenarDatoSesion;

    document.getElementById("boton").onclick = resetarDatos;
}