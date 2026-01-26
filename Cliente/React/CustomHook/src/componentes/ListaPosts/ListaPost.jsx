import React from "react"
import Post from "../Post/Post"
import useAllPosts from "../../hooks/Posts/useAllPosts"
import Loader from "../Loader/Loader"

const ListaPost = () => {

    const posts = useAllPosts()

    function generarPost(post) {

        return (
            <Post key={post.id} post={post}></Post>
        )
    }

    return (
        <>
            <h1>Posts</h1>
            <ul>
                {posts.buscando ? <Loader></Loader> : posts.lista.map(generarPost)}
            </ul>
        </>
    )
}

export default ListaPost