import { useReducer} from "react";

function ContadorR(props) {

    // Los tipos de accion que enviaremos al reducer
    const ACCIONES = {
        INCREMENTAR: 'incrementarContador',
        DECREMENTAR: 'decrementarContador',
        RESETEAR: 'resetearContador'
    }

    // Recive el estado actual
    // Recibe una accion
    // Devuelve un nuevo estado
    function reducer (state, action) {
        switch (action.type) {
            case ACCIONES.INCREMENTAR:
                {
                    return {
                        // Incrementa el contador
                        contador: state.contador + 1,
                        // Añade "i" al array clicks
                        clicks: [...state.clicks, "i"]                
                    }
                }
            case ACCIONES.DECREMENTAR:
                {
                    return {
                        // Decrementa el contador
                        contador: state.contador - 1,
                        // Añade "d" al array clicks
                        clicks: [...state.clicks, "d"]                
                    }
                }
            case ACCIONES.RESETEAR:
                {
                    return {
                        // Pone el contador a 0
                        contador: 0,
                        // Añade "r" al array clicks
                        clicks: [...state.clicks, "r"]                
                    }
                }
            default:
                // Devuelve el estado actual, ya que reducer espera un retorno de neuvo estado
                return state;
        }
    }

    // State con objeto contador y array de clicks
    // setState -> funcion para enviar acciones al reducer
    const [state, setState] = useReducer (reducer, {contador: props.contador,
                                            clicks: []
                                            });

    // ? -> si es verdadero | : -> si es falso
    const mensaje = state.contador %2===0 ? "Es par" : "Es impar"

    // Funcion para modificar el estado del contador (incrementa)
    function incrementarContador() {      
        setState({type: 'incrementarContador'});
    }

    // Funcion para modificar el estado del contador (decrementa)
    function decrementarContador() {      
        setState({type: 'decrementarContador'});
    }

    // Funcion para modificar el estado del contador (resetea)
    function resetearContador() {
        setState({type: 'resetearContador'});
    }

    const pulsaciones = state.clicks.length;

    // Calculo de totales y porcentajes
    const totalR = state.clicks.filter((click) => click === "r").length;
    const procentajeR = pulsaciones === 0 ? 0 : ((totalR / pulsaciones) * 100).toFixed(2);
    const totalI = state.clicks.filter((click) => click === "i").length;
    const procentajeI = pulsaciones === 0 ? 0 : ((totalI / pulsaciones) * 100).toFixed(2);
    const totalD = state.clicks.filter((click) => click === "d").length;
    const procentajeD = pulsaciones === 0 ? 0 : ((totalD / pulsaciones) * 100).toFixed(2);

    return (
        <div>
            <p>CONTADOR useReducer</p>
            {/*Muestra el valor del contador*/}
            <p>{state.contador}</p>
            {/*Muestra si es par o impar*/}
            <p>{mensaje}</p>
            {/*Muestra la letra de la accion*/}
            <p>{state.clicks}</p>
            {/*Muestra el numero de pulsaciones*/}
            <p>{pulsaciones}</p>
            {/*Muestra el numero de letra y porcentaje*/}
            <p>R-{totalR} - {procentajeR}%</p>
            <p>I-{totalI} - {procentajeI}%</p>
            <p>D-{totalD} - {procentajeD}%</p>
            {/*Boton para incrementar el contador haciendo uso de la funcion incrementarContador*/}
            <button onClick={incrementarContador}> Incrementar </button>
            {/*Boton para decrenentar el contador haciendo uso de la funcion decrementarContador*/}
            <button onClick={decrementarContador}> Decrementar </button>
            {/*Boton para resetear el valor de el contador haciendo uso de la fucnión resetearContador*/}
            <button onClick={resetearContador}> Resetear </button>
        </div>
    )
}
export default ContadorR;