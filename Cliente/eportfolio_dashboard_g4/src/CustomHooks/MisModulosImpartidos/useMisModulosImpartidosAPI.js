import { useEffect, useState } from "react";
import getAllModulosImpartidos from "../../services/Modulos/Impartidos/getAllModulosImpartidos.js";

const useMisModulosImpartidosAPI = (user) => {

    const [buscando, setBuscando] = useState(false)

    const [lista, setLista] = useState([])

    function obtenerModulosImpartidos() {
        setBuscando(true);
        getAllModulosImpartidos().then((modulos) => {
            const listaModulos = modulos[user]?.modulos ?? []
            setLista(listaModulos)
            setBuscando(false)
        })
    }

    useEffect(obtenerModulosImpartidos, [user])

    return { buscando, lista }
}

export default useMisModulosImpartidosAPI;