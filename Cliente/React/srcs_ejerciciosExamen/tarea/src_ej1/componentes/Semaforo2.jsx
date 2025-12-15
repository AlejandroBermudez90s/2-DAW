import { useState } from "react";

function Semaforo2() {

    // USEESTATE CON OBJETOS
    // Estado de los contadores
    const [contador, setContador] = useState({
                                                rojo:0,
                                                amarillo:0,
                                                verde:0
                                            });

    // Funciones para incrementar los contadores 
    function incremnetarRojo() {
        setContador({...contador, rojo: contador.rojo + 1});
    }

    function incremnetarAmarillo() {
        setContador({...contador, amarillo: contador.amarillo + 1});
    }

    function incremnetarVerde() {
        setContador({...contador, verde: contador.verde + 1});
    }

    let total = contador.rojo + contador.amarillo + contador.verde;

    // Calculo de porcentajes (darle una vuelta)
    const procentajeR = total === 0 ? 0 : ((contador.rojo / total ) * 100).toFixed(2);
    const procentajeA = total === 0 ? 0 : ((contador.amarillo / total ) * 100).toFixed(2);
    const procentajeV= total === 0 ? 0 : ((contador.verde / total ) * 100).toFixed(2);

    return (
        <div>
            <button id="bt-ro" onClick={incremnetarRojo}>Rojo</button>
            <button id="bt-am" onClick={incremnetarAmarillo}>Amarillo</button>
            <button id="bt-ve" onClick={incremnetarVerde}>Verde</button>
            <p>pulsaciones Rojo: {contador.rojo}</p>
            <p>pulsaciones Amarillo: {contador.amarillo}</p>
            <p>pulsaciones Verde: {contador.verde}</p>
            <p>Total pulsaciones: {total}</p>
            <p>% Rojo: {procentajeR}%</p>
            <p>% Amarillo: {procentajeA}%</p>
            <p>% Verde: {procentajeV}%</p>
        </div>
    );
}

export default Semaforo2;