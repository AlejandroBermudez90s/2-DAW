import { useState, useEffect } from "react"
import getAllUsuarios from "../../Services/Usuarios/getAllUsuarios"

const useUsuarios = () => {

    const [lista, setLista] = useState([])

    const [cargando, setCargando] = useState(false)

    function obtenerUsuarios () {

        setCargando(true)

        getAllUsuarios().then((listaUsuarios) => {
            
            setLista(listaUsuarios)

            setCargando(false)
        })
    }

    useEffect(obtenerUsuarios, [])

    return {lista, cargando}
}

export default useUsuarios