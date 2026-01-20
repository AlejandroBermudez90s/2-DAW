import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom"


const Nosotros = () => {

    const rutaActual = useLocation()
    const navigate = useNavigate()

    const {usuario} = useParams()

    function manejarBoton () {
        navigate('/')
    }

    return (
        
        <div>
            <p>Página NOSOTROS</p>
            <p>La ruta actual es {rutaActual.pathname}</p>
            <p>El usuario actual es {usuario}</p>
            <button onClick={manejarBoton}>Volver a Home</button>
        </div>
    )

}

export default Nosotros