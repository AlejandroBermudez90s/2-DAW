import BotonTema from "./BotonTema";
import React from "react";

const BarraHerramientas = () => {
    
    return (
        <div>
            <BotonTema etiqueta="Archivo">Archivo</BotonTema>
            <BotonTema etiqueta="Editar">Editar</BotonTema>
            <BotonTema etiqueta="Terminal">Terminal</BotonTema>
        </div>
    )
}
export default BarraHerramientas;