import { useReducer, useState } from "react";

function SemaforoReducer(props) {

  const [state, setState] = useReducer(reducer, {
                                                  contadorRojo: props.contador,
                                                  contadorAmarillo: props.contador,
                                                  contadorVerde: props.contador,
                                                  clicks: []
                                                })
  function reducer(state, action) {

    switch (action.type) {

      case "incrementarContadorRojo":
        {
          return {
            contadorRojo: state.contadorRojo + 1,
            clicks: [...state.clicks, "R"]
          }
        }
      case "incrementarContadorAmarillo":
        {
          return {
            contadorAmarillo: state.contadorAmarillo + 1,
            clicks: [...state.clicks, "A"]
          }
        }
      case "incrementarContadorVerde":
        {
          return {
            contadorVerde: state.contadorVerde + 1,
            clicks: [...state.clicks, "V"]
          }
        }
      default:
        return state
    }
  }

  function incrementarContadorRojo() {
    setState({ type: "incrementarContadorRojo" })
  }

  function incrementarContadorAmarillo() {
    setState({ type: "incrementarContadorAmarillo" })
  }

  function incrementarContadorVerde() {
    setState({ type: "incrementarContadorVerde" })
  }

  const pulsacionesR = state.clicks.filter(c => c === "R").length;
  const pulsacionesA = state.clicks.filter(c => c === "A").length;
  const pulsacionesV = state.clicks.filter(c => c === "V").length;
  const totalPulsaciones = pulsacionesR + pulsacionesA + pulsacionesV;

  const porcentajeR = totalPulsaciones === 0 ? 0 : Math.round((pulsacionesR / totalPulsaciones) * 100);
  const porcentajeA = totalPulsaciones === 0 ? 0 : Math.round((pulsacionesA / totalPulsaciones) * 100);
  const porcentajeV = totalPulsaciones === 0 ? 0 : Math.round((pulsacionesV / totalPulsaciones) * 100);

  return (
    <div>
      <div className="botones">
        <button className="rojo" onClick={incrementarContadorRojo}>Rojo</button>
        <br/>
        <br/>
        <button className="amarillo" onClick={incrementarContadorAmarillo}>Amarillo</button>
        <br/>
        <br/>
        <button className="verde" onClick={incrementarContadorVerde}>Verde</button>
      </div>
      <p>
        Pulsaciones Rojo: {pulsacionesR}
      </p>
      <p>
        Pulsaciones Amarillo: {pulsacionesA}
      </p>
      <p>
        Pulsaciones Verde: {pulsacionesV}
      </p>
      <p>
        Pulsaciones Totales: {totalPulsaciones}
      </p>


      <p> % Rojo: {porcentajeR} </p>
      <p> % Amarillo: {porcentajeA} </p>
      <p> % Verde: {porcentajeV} </p>
    </div>
  );
}

export default SemaforoReducer