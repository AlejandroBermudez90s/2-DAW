import { useEffect, useState } from "react"
import getAllPosts from "../../Services/Posts/getAllPosts"
import NewPost from "../../Services/Posts/newPost"
import { set } from "react-hook-form"
import DeletePost from "../../Services/Posts/deletePost"

const useAllPosts = () => {

    const [lista, setLista] = useState([])

    const [cargando, setCargando] = useState(false)

    function obtenerPosts () {

        setCargando(true)

        getAllPosts().then((listaPosts) => {
            
            setLista(listaPosts)
            setCargando(false)
        })
    }

    function crearPost(post_) {

        setCargando(true)

        return NewPost(post_).then((postCreado) => {

            if(Object.keys(postCreado).length>0) {

                setLista([...lista, postCreado])
            }

            setCargando(false)

            return postCreado
        })
    }

    function borrarPost(post_) {

    setCargando(true)

    return DeletePost(post_).then((postABorrar) => {

        if (postABorrar) {
            setLista(lista.filter(post => post.id !== post_))
        }

        setCargando(false)

        return postABorrar
    })
}


    useEffect(obtenerPosts, [])

    return {lista, cargando, crearPost, borrarPost}
}

export default useAllPosts