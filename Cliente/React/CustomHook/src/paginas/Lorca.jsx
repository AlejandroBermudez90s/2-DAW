import React from "react";
import rm from "../mocks/mock-rm";


const Lorca = () => {
    
    return (
        <div>
            <h1>LORCA</h1>
            <p><strong>Población: </strong>{rm.lorca.poblacion}</p>
            <p><strong>Superficie: </strong>{rm.lorca.superficie} m2</p>
            <p><strong>Superficie: </strong>{rm.lorca.elevacion} m</p>
            <img src={rm.lorca.bandera} alt="" />
        </div>
    )
}

export default Lorca