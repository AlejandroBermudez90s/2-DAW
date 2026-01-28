import React from "react"
import Post from "../Post/Post"
import useAllPosts from "../../hooks/Posts/useAllPosts"
import Loader from "../Loader/Loader"

const ListaPost = (props) => {

    function generarPost(post) {

        return (
            <Post key={post.id} post={post}></Post>
        )
    }

console.log(props.posts)

    return (
        <>
            <h1>Posts</h1>
            <ul>
                {props.posts.cargando ? <Loader></Loader> 
                                : props.posts.lista.map(generarPost)
                }
            </ul>
        </>
    )
}

export default ListaPost