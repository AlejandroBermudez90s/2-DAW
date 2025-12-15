import { useState } from "react";

function Semaforo1() {

    // 3 USESTATE
    // Estado de los contadores
    const [rojo, setRojo] = useState(0);
    const [amarillo, setAmarillo] = useState(0);
    const [verde, setVerde] = useState(0);

    // Funciones para incrementar los contadores 
    function incremnetarRojo() {
        setRojo(rojo + 1);
    }

    function incremnetarAmarillo() {
        setAmarillo(amarillo + 1);
    }

    function incremnetarVerde() {
        setVerde(verde + 1);
    }

    let total = rojo + amarillo + verde;

    // Calculo de porcentajes (darle una vuelta)
    const procentajeR = total === 0 ? 0 : ((rojo / total ) * 100).toFixed(2);
    const procentajeA = total === 0 ? 0 : ((amarillo / total ) * 100).toFixed(2);
    const procentajeV= total === 0 ? 0 : ((verde / total ) * 100).toFixed(2);

    return (
        <div>
            <button id="bt-ro" onClick={incremnetarRojo}>Rojo</button>
            <button id="bt-am" onClick={incremnetarAmarillo}>Amarillo</button>
            <button id="bt-ve" onClick={incremnetarVerde}>Verde</button>
            <p>pulsaciones Rojo: {rojo}</p>
            <p>pulsaciones Amarillo: {amarillo}</p>
            <p>pulsaciones Verde: {verde}</p>
            <p>Total pulsaciones: {total}</p>
            <p>% Rojo: {procentajeR}%</p>
            <p>% Amarillo: {procentajeA}%</p>
            <p>% Verde: {procentajeV}%</p>
        </div>
    );
}

export default Semaforo1;