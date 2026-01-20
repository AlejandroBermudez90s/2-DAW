import React from "react";
import rm from "../mocks/mock-rm";


const Caravaca = () => {
    
    return (
        <div>
            <h1>CARAVACA</h1>
            <p><strong>Población: </strong>{rm.caravaca.poblacion}</p>
            <p><strong>Superficie: </strong>{rm.caravaca.superficie} m2</p>
            <p><strong>Superficie: </strong>{rm.caravaca.elevacion} m</p>
            <img src={rm.caravaca.bandera} alt="" />
        </div>
    )
}

export default Caravaca