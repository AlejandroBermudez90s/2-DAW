import React, { useState } from 'react'

function useContador(valorInicial){

    const [valorContador, setContador] = useState(valorInicial);

    function incrementarContador() {
      setContador(valorContador + 1)
    }
    function decrementarContador() {
      setContador(valorContador - 1)
    }
    function resetearContador() {
      setContador(valorInicial)
    }

    return { 
            valorContador, 
            incrementarContador, 
            decrementarContador, 
            resetearContador
        }
}

export default useContador