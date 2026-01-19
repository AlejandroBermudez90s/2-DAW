import React from 'react';
import useContador from '../../hooks/useContador';

const Contador = (props) => {

    // Función encargada de incrementar el contador haciendo
    // uso del hook

    const contador = useContador(+props.contador);

    return (
      <div>
        <h1>{contador.valorContador}</h1>
        <button onClick={contador.incrementarContador}> Incrementar </button>
        <button onClick={contador.decrementarContador}> Decrementar </button>
        <button onClick={contador.resetearContador}> Resetear </button>
      </div>
    )
}

export default Contador;

