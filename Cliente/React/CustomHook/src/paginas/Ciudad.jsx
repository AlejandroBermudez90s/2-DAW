import React from "react";
import { useParams } from "react-router-dom";
import rm from "../mocks/mock-rm";

const Ciudad = (props) => {
    
    const {ciudad} = useParams()
    
    function obtenerDatos(ciudad) {

        const poblacion = rm[ciudad].poblacion
        const superficie = rm[ciudad].superficie
        const elevacion = rm[ciudad].elevacion
        const bandera = rm[ciudad].bandera
        
        return { poblacion, superficie, elevacion, bandera }
    }


    return (
        <div>
            <h1>{ciudad}</h1>
            <p>Población: {obtenerDatos(ciudad).poblacion}</p>
            <p>Superficie: {obtenerDatos(ciudad).superficie}</p>
            <p>Elevación: {obtenerDatos(ciudad).elevacion}</p>
            <img src={obtenerDatos(ciudad).bandera} alt="" />
        </div>
    )
}

export default Ciudad;