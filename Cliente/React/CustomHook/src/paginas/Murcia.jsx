import React from "react";
import rm from "../mocks/mock-rm";


const Murcia = () => {
    
    return (
        <div>
            <h1>MURCIA</h1>
            <p><strong>Población: </strong>{rm.murcia.poblacion}</p>
            <p><strong>Superficie: </strong>{rm.murcia.superficie} m2</p>
            <p><strong>Superficie: </strong>{rm.murcia.elevacion} m</p>
            <img src={rm.murcia.bandera} alt="" />
        </div>
    )
}

export default Murcia