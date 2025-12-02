window.onload = function(){

    let listaOrdenada = document.createElement("ol");

    let elemento = document.getElementById("elemento").value;

    let texto = document.createTextNode(elemento);

    function insertar() {
        let elementoLista = document.createElement("li");

        listaOrdenada.appendChild(elementoLista);
        elementoLista.appendChild(texto);
        
    }

    document.getElementById("botonInsertar").addEventListener("click", insertar);


}