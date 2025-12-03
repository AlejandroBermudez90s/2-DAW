import { useReducer, useState } from "react";

function ContadorR(props) {

    const [state, setState] = useReducer(reducer, { contador : props.contador,
                                                    clicks   : [] 
                                                  })
    let mensaje
    function reducer(state, action) {

        switch(action.type) {
            
            case "incrementarContador":
                {
                    return {
                        contador: state.contador +1,
                        clicks  : [...state.clicks, "i"]
                    }
                }
            case "decrementarContador":
                {
                    return {
                        contador: state.contador -1,
                        clicks  : [...state.clicks, "d"]
                    }
                }
            case "resetearContador":
                {
                    return {
                        contador: props.contador,
                        clicks  : [...state.clicks, "r"]
                    }
                }
            default:
                return state
        }
    }

    function incrementarContador() {
        setState({ type: "incrementarContador" })
    }

    function decrementarContador() {
        setState({ type: "decrementarContador" })
    }

    function resetearContador() {
        setState({ type: "resetearContador" })
    }

    function esPar() {
        mensaje = (state.contador % 2 === 0) ? "Es par" : "Es impar"
        return mensaje

    }

    let numI = state.clicks.filter(contadorI => contadorI === "i").length
    let numD = state.clicks.filter(contadorD => contadorD === "d").length
    let numR = state.clicks.filter(contadorR => contadorR === "r").length

    let totalPulsaciones = state.clicks.length

    let mediaI = totalPulsaciones === 0 ? 0 : Math.round( (numI / state.clicks.length * 100))
    let mediaD = totalPulsaciones === 0 ? 0 : Math.round( (numD / state.clicks.length * 100))
    let mediaR = totalPulsaciones === 0 ? 0 : Math.round( (numR / state.clicks.length * 100))

    return (
        <div>
            <p>Total de clicks: { totalPulsaciones }</p>
            <p>{ esPar() }</p>
            <p>{ state.clicks }</p>

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
                Total pulsaciones: { totalPulsaciones }
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

export default ContadorR