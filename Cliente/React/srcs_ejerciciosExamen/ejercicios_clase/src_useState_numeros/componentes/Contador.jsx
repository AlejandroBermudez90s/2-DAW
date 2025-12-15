import { useState } from "react";

function Contador(props) {
    
    // Estado inicial del contador
    // contador -> guarda el valor del contador
    // setContador -> es la funcion que permite cambiar dicho valor
    // El contador empieza con el valor que viene de los props
    const [contador, setContador] = useState(props.contador);

    // Estado inicial del array de clicks
    // clicks -> es un array que almacenara el historial de pulsaciones
    // setClicks -> es la funcion que actualiza el array
    const [clicks, setClicks] = useState([]);

    // ? -> si es verdadero | : -> si es falso
    const mensaje = contador % 2===0 ? "Es par" : "Es impar"
    
    // Funcion para modificar el estado del contador (incrementa)
    function incrementarContador() {   
        // Actualiza el numero   
        setContador(contador + 1);
        // Agrega al array clicks "i"
        setClicks([...clicks, "i"]);
    }

    // Funcion para modificar el estado del contador (decrementa)
    function decrementarContador() {    
        // Actualiza el contador
        setContador(contador - 1);
        // Genera un nuevo array con la concatenacion
        //setClicks(clicks.concat("d"));
        // Agrega al array clicks una "d"
        setClicks([...clicks, "d"]);
    }

    // Funcion para modificar el estado del contador (resetea)
    function resetearContador() {
        // Devuelve el contador a su estado inicial
        setContador(props.contador);
        // Agrega "r" al array de clicks
        setClicks([...clicks, "r"]);
        //setClicks(clicks.concat("r"));
    }

    const pulsaciones = clicks.length;

    // Calculo de totales y porcentajes
    // Filtramos y contamos el numero de r que haya en el array
    const totalR = clicks.filter((click) => click === "r").length;
    // Si el valor de pulsaciones es 0 se queda a 0, pero si es falso, se calcula el prcentaje
    // y con toFixed lo redondeamos a 2 decimales
    // ? -> if
    // : -> else
    const procentajeR = pulsaciones === 0 ? 0 : ((totalR / pulsaciones) * 100).toFixed(2);
    const totalI = clicks.filter((click) => click === "i").length;
    const procentajeI = pulsaciones === 0 ? 0 : ((totalI / pulsaciones) * 100).toFixed(2);
    const totalD = clicks.filter((click) => click === "d").length;
    const procentajeD = pulsaciones === 0 ? 0 : ((totalD / pulsaciones) * 100).toFixed(2);

    return (
        <div>
            {/*Muestra el valor del contador*/}
            <p>{contador}</p>
            {/*Muestra si es par o impar*/}
            <p>{mensaje}</p>
            {/*Muestra la letra de la accion*/}
            <p>{clicks}</p>
            {/*Muestra el numero de pulsaciones*/}
            <p>{pulsaciones}</p>
            {/*Muestra el numero de letra y porcentaje*/}
            <p>R-{totalR} - {procentajeR}%</p>
            <p>I-{totalI} - {procentajeI}%</p>
            <p>D-{totalD} - {procentajeD}%</p>
            {/*Boton para incrementar el contador haciendo uso de la funcion incrementarContador*/}
            <button onClick={incrementarContador}> Incrementar </button>
            {/*Boton para decrenentar el contador haciendo uso de la funcion decrementarContador*/}
            <button onClick={decrementarContador}> Decrementar </button>
            {/*Boton para resetear el valor de el contador haciendo uso de la fucnión resetearContador*/}
            <button onClick={resetearContador}> Resetear </button>
        </div>
    )
}
export default Contador;