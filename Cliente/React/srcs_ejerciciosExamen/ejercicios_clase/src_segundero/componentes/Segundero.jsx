import { useState, useEffect } from "react";
import React from "react";
// Dejar comentado en el main.jsx el stricmode para que no se duplique el setInterval


function Segundero(props) {
    
    // Inicializamos con el valor que nos llega por las props
    const [segundero, setSegundero] = useState(props.contador);

    // Funcion para incrementar el contador
    function manejarReloj() {
        setSegundero(prevSegundero => prevSegundero + 1);
    }
    
    // Funcion que crea el intervalo
    function reloj() {
        
        // setInterval ejecuta manejar reloj cada 1000ms
        const id = setInterval(manejarReloj, 1000);
        // Elimina el intervalo para evitar fugas de memoria
        return () => clearInterval(id);
    }

    // useEffect ejecuta la funcion reloj
    // Se ejecuta al montar el componentes
    // y cada vez que cambian los props
    useEffect(reloj, [props.contador]);
    
    // Renderizamos el valor del segundero
    return (<>{segundero}</>);

}
export default Segundero;