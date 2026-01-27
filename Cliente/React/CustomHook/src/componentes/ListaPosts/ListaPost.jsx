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

    return (
        <>
            <h1>Posts</h1>
            <ul>
                {props.posts.buscando ? <Loader></Loader> 
                                : props.posts.lista.map(generarPost)
                }
            </ul>
        </>
    )
}

export default ListaPost