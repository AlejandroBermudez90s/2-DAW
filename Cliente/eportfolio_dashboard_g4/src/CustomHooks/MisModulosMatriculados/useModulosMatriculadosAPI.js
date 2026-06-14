import { useEffect, useState } from "react";
import getAllModulosMatriculados from "../../services/Modulos/Matriculados/getAllModulosMatriculados";

const useMisModulosMatriculadosAPI = (user) => {

    const [buscando, setBuscando] = useState(false)

    const [lista, setLista] = useState([])

    function obtenerModulosMatriculados() {
        setBuscando(true);
        getAllModulosMatriculados().then((modulos) => {
            const listaModulos = modulos[user]?.modulos ?? []
            setLista(listaModulos)
            setBuscando(false)
        })
    }

    useEffect(obtenerModulosMatriculados, [user])

    return { buscando, lista }
}

export default useMisModulosMatriculadosAPI;