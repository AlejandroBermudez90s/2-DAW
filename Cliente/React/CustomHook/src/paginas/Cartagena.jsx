import React from "react";
import rm from "../mocks/mock-rm";


const Cartagena = () => {
    
    return (
        <div>
            <h1>CARTAGENA</h1>
            <p><strong>Población: </strong>{rm.cartagena.poblacion}</p>
            <p><strong>Superficie: </strong>{rm.cartagena.superficie} m2</p>
            <p><strong>Superficie: </strong>{rm.cartagena.elevacion} m</p>
            <img src={rm.cartagena.bandera} alt="" />
        </div>
    )
}

export default Cartagena