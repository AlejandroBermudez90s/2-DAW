window.onload = function() { 
	
    document.getElementById("btnContar").addEventListener("click", aumentarContador);
    let contador = document.getElementById("contador").innerHTML;

    function aumentarContador() {
        contador++;
        document.getElementById("contador").innerHTML = contador;
    }
}

