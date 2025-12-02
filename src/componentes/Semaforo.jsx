import { useState } from "react";

function Semaforo(props) {
  const [contadorRojo, setContadorRojo] = useState(props.contador);
  const [contadorAmarillo, setContadorAmarillo] = useState(props.contador);
  const [contadorVerde, setContadorVerde] = useState(props.contador);
  const [clicks, setClicks] = useState([]);

  function incrementarRojo() {
    setContadorRojo(contadorRojo + 1);
    setClicks([...clicks, "R"]);
  }

  function incrementarAmarillo() {
    setContadorAmarillo(contadorAmarillo + 1);
    setClicks([...clicks, "A"]);
  }

  function incrementarVerde() {
    setContadorVerde(contadorVerde + 1);
    setClicks([...clicks, "V"]);
  }

  const pulsacionesR = clicks.filter(c => c === "R").length;
  const pulsacionesA = clicks.filter(c => c === "A").length;
  const pulsacionesV = clicks.filter(c => c === "V").length;
  const totalPulsaciones = pulsacionesR + pulsacionesA + pulsacionesV;

  const porcentajeR = totalPulsaciones === 0 ? 0 : Math.round((pulsacionesR / totalPulsaciones) * 100);
  const porcentajeA = totalPulsaciones === 0 ? 0 : Math.round((pulsacionesA / totalPulsaciones) * 100);
  const porcentajeV = totalPulsaciones === 0 ? 0 : Math.round((pulsacionesV / totalPulsaciones) * 100);

  return (
    <div>
      <p>Pulsaciones Rojo: {pulsacionesR}</p>
      <p>Pulsaciones Amarillo: {pulsacionesA}</p>
      <p>Pulsaciones Verde: {pulsacionesV}</p>
      <p>Pulsaciones Totales: {totalPulsaciones}</p>

      <p>% Rojo: {porcentajeR}</p>
      <p>% Amarillo: {porcentajeA}</p>
      <p>% Verde: {porcentajeV}</p>

      <button onClick={incrementarRojo}>Rojo</button>
      <br />
      <br />
      <button onClick={incrementarAmarillo}>Amarillo</button>
      <br />
      <br />
      <button onClick={incrementarVerde}>Verde</button>
    </div>
  );
}

export default Semaforo;
