
window.onload = function(){

    let tamañoLista = parseInt(prompt("Introduce el número de elementos de la lista"));
    let listaOrdenada = document.createElement("ol");

    if (isNaN(tamañoLista)) {
        alert("Debes introducir un número.");
    }
    else if(tamañoLista < 0){
        alert("Debes introducir un número positivo.")
    }
    else{
        for (let i = 1; i <= tamañoLista; i++) {

        let elementoLista = document.createElement("li");
        listaOrdenada.appendChild(elementoLista);

        let texto = document.createTextNode("Elemento de lista " + i + ".");
        elementoLista.appendChild(texto);
        }
    }

    document.body.appendChild(listaOrdenada);

}


