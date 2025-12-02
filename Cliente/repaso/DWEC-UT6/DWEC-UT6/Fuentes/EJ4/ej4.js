window.onload = function(){

    let filas = document.getElementById("filas");
    let columnas = document.getElementById("columnas");
    let boton = document.getElementById("crearTabla");

    function generarTabla() {
        let numeroFilas = filas.value;
        let numeroColumnas = columnas.value;
        let tabla = document.createElement("table");

        for (let i = 0; i < numeroFilas; i++) {
            let fila = document.createElement("tr"); 
            fila.classList.add("tabla");
            fila.setAttribute("class", "tabla")

            for (let j = 0; j < numeroColumnas; j++) {
                let columna = document.createElement("td");
                columna.classList.add("tabla");
                fila.appendChild(columna);
            }
            tabla.appendChild(fila);
        }
        document.body.appendChild(tabla);
        tabla.classList.add("tabla");
    }

    boton.addEventListener("click", generarTabla);
} 