import React, { useState } from 'react'

const Contador = (props) => {

    const [valorContador, setContador] = useState(+props.contador);

    // Función encargada de incrementar el contador haciendo
    // uso del hook
    function incrementarContador() {
      setContador(valorContador + 1);
    }
    function decrementarContador() {
        setContador(valorContador - 1);
    }
    function resetearContador() {
        setContador(+props.contador);
    }
    return (
      <div>
        <p>El valor del contador es</p>
        <h1>{valorContador}</h1>
        <button onClick={incrementarContador}> Incrementa contador </button>
        <button onClick={decrementarContador}> Decrementa contador </button>
        <button onClick={resetearContador}> Resetear contador </button>
      </div>
    )
}

export default Contador;

