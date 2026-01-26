import { useEffect, useState } from "react"
import getAllPosts from "../../Services/Posts/getAllPosts"

const useAllPosts = () => {

    const [lista, setLista] = useState([])

    const [buscando, setBuscando] = useState(false)

    function obtenerPosts () {

        setBuscando(true)

        getAllPosts().then((listaPosts) => {
            
            setLista(listaPosts)
            setBuscando(false)
        })
    }

    useEffect(obtenerPosts, [])

    return {lista, buscando}
}

export default useAllPosts