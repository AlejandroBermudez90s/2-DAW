window.onload = function(){

    let tamañoLista = parseInt(prompt("Introduce el tamaño de la lista:"))
    
    if (isNaN(tamañoLista)) {
        alert("Debes introducir un número");
    }
    else if (tamañoLista < 0){
        alert("El número debe ser positivo");
    }
    else{
        let listaOrdenada = document.createElement("ol");
        for (let i = 0; i < tamañoLista; i++) {
            let elementoLista = document.createElement("li");

            listaOrdenada.appendChild(elementoLista);
            elementoLista.innerHTML = "Elemento " + (i+1);
        }
        document.body.appendChild(listaOrdenada);
    }
}