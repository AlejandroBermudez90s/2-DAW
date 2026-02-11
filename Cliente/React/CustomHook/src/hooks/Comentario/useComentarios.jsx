import { useState, useEffect } from "react"
import getAllComentarios from "../../Services/Comentarios/getAllComentarios"

const useComentarios = () => {

    const [lista, setLista] = useState([])

    const [cargando, setCargando] = useState(false)

    function obtenerComentarios () {

        setCargando(true)

        getAllComentarios().then((listaComentarios) => {
            
            setLista(listaComentarios)

            setCargando(false)
        })
    }

    useEffect(obtenerComentarios, [])

    return {lista, cargando}
}

export default useComentarios