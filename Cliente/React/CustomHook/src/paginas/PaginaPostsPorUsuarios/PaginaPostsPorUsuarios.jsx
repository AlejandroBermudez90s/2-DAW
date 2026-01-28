import { useState } from "react"
import SelectorUsuarios from "../../componentes/SelectorUsuarios/SelectorUsuario"
import ListaPost from "../../componentes/ListaPosts/ListaPost"
import useAllPosts from "../../hooks/Posts/useAllPosts"

const PaginaPostsPorUsuarios = () => {

    const [usuario, setUsuario] = useState(1)

    function manejarSelector(usuario) {

        setUsuario(usuario)

        console.log("PADRE ", usuario)
    }

    const posts = useAllPosts(usuario)

    return (
        <>
            <SelectorUsuarios manejarSelector = {manejarSelector}></SelectorUsuarios>
            <ListaPost posts = {posts}></ListaPost>
        </>
    )
} 

export default PaginaPostsPorUsuarios