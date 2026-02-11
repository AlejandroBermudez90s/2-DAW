import ListaPost from "../../componentes/ListaPosts/ListaPost"
import PostForm from "../../componentes/PostForm/PostForm"
import "./PaginaPost.css"
import useAllPosts from "../../hooks/Posts/useAllPosts"
import BorrarPostForm from "../../componentes/BorrarPostForm/BorrarPostForm"
// import PiePagina from "../../componentes/PiePagina/PiePagina"
import LazyLoad from "react-lazy-load"
import React from "react"
import React, { Suspense } from "react"

const PiePagina = React.lazy() => import("../../componentes/PiePagina/PiePagina")

const PaginaPost = () => {

    const posts = useAllPosts()

    return (
        <div className="contenedor">

                <div className="item alturaPost">
                    <ListaPost posts={posts}></ListaPost>
                </div>
                <div className="item alturaPost">
                    <PostForm posts={posts}></PostForm>
                    <BorrarPostForm posts={posts}></BorrarPostForm>
                </div>

            <div className="fila2">
                <Suspense>

                </Suspense>
                <LazyLoad offset={10}>
                    <PiePagina></PiePagina>
                </LazyLoad>
            </div>

        </div>
    )
}

export default PaginaPost