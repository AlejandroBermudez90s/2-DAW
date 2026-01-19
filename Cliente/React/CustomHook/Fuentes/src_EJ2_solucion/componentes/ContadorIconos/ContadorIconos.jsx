import React from "react";
import "./ContadorIconos.css";
import useContadorIconos from '../../hooks/useContadorIconos';


const ContadorIconos = (props) => {

    // Función encargada de incrementar el contador haciendo
    // uso del hook

    const contador = useContadorIconos(+props.contador);

    return (
      <div>
        <div> <button className="btn-linea" onClick={contador.decrementarContador}> - </button>
              <span>{contador.valorContador}</span>
              <button className="btn-linea" onClick={contador.incrementarContador}>+</button>
              <button className="btn-linea" onClick={contador.resetearContador}> R </button></div>
      </div>
    )
}

export default ContadorIconos;

