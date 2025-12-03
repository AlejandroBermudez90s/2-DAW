import { useState } from "react";

function Contador(props) {

    const [contador, setContador] = useState(props.contador);
    const [clicks, setclicks] = useState([]);
    let mensaje;

    function incrementarContador() {

        setContador(contador + 1)

        setclicks([...clicks, "i"])
    }

    function decrementarContador() {

        setContador(contador - 1)

        setclicks([...clicks, "d"])
    }

    function resetearContador() {

        setContador(props.contador)

        setclicks([...clicks, "r"])

    }
    
    function esPar() {
        mensaje = (contador % 2 === 0) ? "Es par" : "Es impar"
        return mensaje

    }

    let numI = clicks.filter(contadorI => contadorI === "i").length
    let numD = clicks.filter(contadorD => contadorD === "d").length
    let numR = clicks.filter(contadorR => contadorR === "r").length

    let mediaI = Math.round( (numI / clicks.length * 100), 2 )
    let mediaD = Math.round( (numD / clicks.length * 100), 2 )
    let mediaR = Math.round( (numR / clicks.length * 100), 2 )

    return (
        <div>
            <p>{contador}</p>
            <p>{esPar()}</p>
            <p>{clicks}</p>

            <p> 
                I: { numI } - { mediaI } %
            </p>

            <p> 
                D: { numD } - { mediaD } %
            </p>

            <p> 
                R: { numR } - { mediaR } %
            </p>

            <p>
                {clicks.length}
            </p>

            <button onClick={incrementarContador}>Incrementar</button>
            <br />
            <br />
            <button onClick={decrementarContador}>Decrementar</button>
            <br/>
            <br />
            <button onClick={resetearContador}>Resetear</button>
            
        </div>
    )
}

export default Contador