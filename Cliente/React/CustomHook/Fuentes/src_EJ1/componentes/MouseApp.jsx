import { useEffect, useState } from "react";

const MouseApp = () => {

    // Estado para alamacenar la posición del cursor del ratón
    const [position, setPosition] = useState({x:0, 
                                              y:0});

    // Función encargada de recuperar la posición del ratón y actualizar
    // el estado del componente
    function recuperarPosicionRaton(event) {

        setPosition ({x:event.clientX, 
                      y:event.clientY});
    }
    
    function activarPosicionador() {

        window.onmousemove= recuperarPosicionRaton;
    }

    // Activamos el evento "onmouseover" del ratón a la ventana. Como
    // lo hacemos solo una vez, lo encapsulamos en un useEffect
    useEffect(activarPosicionador,[])

    return (
        <div>
            <h1>Mouse App</h1>
            <pre>{JSON.stringify(position, null, 2)}</pre>
        </div>

    );
}
export default MouseApp;