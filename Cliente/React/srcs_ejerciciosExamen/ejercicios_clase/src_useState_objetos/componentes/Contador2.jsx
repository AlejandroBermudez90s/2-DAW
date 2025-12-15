import { useState } from 'react';
function Contador2() {

    // Estado inicial
    const [contador, setContador] = useState({
                                                left : 0,
                                                right : 0
                                            });

    function incrementarIzquierdo() {
        setContador({
                        // Copiamos el estado anterior
                        ...contador,
                        // Sobreescribimos la propiedad que queremos actualizar
                        left: contador.left + 1
                    })
    }

    function incrementarDerecho() {
        setContador({
                        ...contador,
                        right: contador.right + 1
                    })
    }

    return (
        <div>
            {/*Mostramos la propiedad del objeto*/}
            <span>{contador.left}</span>
            {/*Funcion para incrementar*/}
            <button onClick={incrementarIzquierdo}>Left</button>
            <button onClick={incrementarDerecho}>Right</button>
            {/*Mostramos la propiedad del objeto*/}
            <span>{contador.right}</span>
        </div>
    );

}
export default Contador2;