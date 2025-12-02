window.onload = function(){

    let fruta = document.getElementById("fruta");

    let lista = document.createElement("ol");
    document.body.appendChild(lista);

    let botonAñadir = document.getElementById("botonAñadir");
    let botonEliminar = document.getElementById("botonEliminar")

    let idEliminar = document.getElementById("idEliminar");
    
    function añadirFruta() {
        if (!(fruta.value.trim() === "")){
            let frutaLista = document.createElement("li");
            lista.appendChild(frutaLista).innerHTML = fruta.value;
            fruta.value = "";
        }
    }
    
    function eliminarFruta() {
        elementosLi = lista.getElementsByTagName("li");
        elementoEliminar = idEliminar.value - 1;
        
        if (isNaN(elementoEliminar) || 
            elementoEliminar < 0 || 
            elementoEliminar >= elementosLi.length) 
        {
            alert("Elemento de la lista no encontrado")
            idEliminar.value = "";
        } 
        else {
            lista.removeChild(elementosLi[elementoEliminar]);
            idEliminar.value = "";
        }
    }

    botonAñadir.addEventListener("click", añadirFruta);
    botonEliminar.addEventListener("click", eliminarFruta);
}