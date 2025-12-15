import { useState, useReducer } from "react";

function Semaforo3() {

    // 3 USEREDUCER
    const acciones = {
        incrementarRojo: 'incrementarRojo',
        incrementarAmarillo: 'incrementarAmarillo',
        incrementarVerde: 'incrementarVerde'
    };

    function reducer(state, action) {
        switch (action.type) {
            case acciones.incrementarRojo:
                return {
                    ...state, contadorRojo: state.contadorRojo +1
                };
            
            case acciones.incrementarAmarillo:
                return {
                    ...state, contadorAmarillo: state.contadorAmarillo +1
                };
            
            case acciones.incrementarVerde:
                return {
                    ...state, contadorVerde: state.contadorVerde +1
                };
            
            default:
                return state;
        }
    }

    const [state, setState] = useReducer(reducer, {
        contadorRojo: 0,
        contadorAmarillo: 0,
        contadorVerde: 0
    });

    // Funciones para incrementar los contadores 
    function incrementarRojo() {
        setState({type: acciones.incrementarRojo});
    }

    function incrementarAmarillo() {
        setState({type: acciones.incrementarAmarillo});
    }

    function incrementarVerde() {
        setState({type: acciones.incrementarVerde});
    }

    let total = state.contadorRojo + state.contadorAmarillo + state.contadorVerde;

    // Calculo de porcentajes (darle una vuelta)
    const procentajeR = total === 0 ? 0 : ((state.contadorRojo / total ) * 100).toFixed(2);
    const procentajeA = total === 0 ? 0 : ((state.contadorAmarillo / total ) * 100).toFixed(2);
    const procentajeV= total === 0 ? 0 : ((state.contadorVerde / total ) * 100).toFixed(2);

    return (
        <div>
            <button id="bt-ro" onClick={incrementarRojo}>Rojo</button>
            <button id="bt-am" onClick={incrementarAmarillo}>Amarillo</button>
            <button id="bt-ve" onClick={incrementarVerde}>Verde</button>
            <p>pulsaciones Rojo: {state.contadorRojo}</p>
            <p>pulsaciones Amarillo: {state.contadorAmarillo}</p>
            <p>pulsaciones Verde: {state.contadorVerde}</p>
            <p>Total pulsaciones: {total}</p>
            <p>% Rojo: {procentajeR}%</p>
            <p>% Amarillo: {procentajeA}%</p>
            <p>% Verde: {procentajeV}%</p>
        </div>
    );
}

export default Semaforo3;